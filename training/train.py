import os
import time
import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import DataLoader, TensorDataset
import numpy as np

# Import PyTorch PneumoNet model definition
import sys
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "backend")))
from model import PneumoNet

def generate_synthetic_dataset(num_samples=200):
    """
    Generates synthetic chest X-ray-like tensors for rapid training demonstration/testing
    Shape: [N, 3, 224, 224]
    """
    print(f"Generating synthetic dataset of {num_samples} images...")
    X_normal = torch.randn(num_samples // 2, 3, 224, 224) * 0.2 + 0.4
    y_normal = torch.zeros(num_samples // 2, dtype=torch.long)
    
    # Pneumonia synthetic samples have slightly higher central intensity / opacity patterns
    X_pneumonia = torch.randn(num_samples // 2, 3, 224, 224) * 0.2 + 0.6
    y_pneumonia = torch.ones(num_samples // 2, dtype=torch.long)
    
    X = torch.cat([X_normal, X_pneumonia], dim=0)
    y = torch.cat([y_normal, y_pneumonia], dim=0)
    
    # Shuffle
    indices = torch.randperm(num_samples)
    return TensorDataset(X[indices], y[indices])

def train_pneumonet(epochs=5, batch_size=16, learning_rate=0.001):
    print("=" * 60)
    print("      PNEUMONET CNN MODEL TRAINING & EVALUATION PIPELINE     ")
    print("=" * 60)
    
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    print(f"Training Device: {device}")
    
    # Initialize Model
    model = PneumoNet(num_classes=2).to(device)
    criterion = nn.CrossEntropyLoss()
    optimizer = optim.Adam(model.parameters(), lr=learning_rate, weight_decay=1e-5)
    
    dataset = generate_synthetic_dataset(num_samples=200)
    train_loader = DataLoader(dataset, batch_size=batch_size, shuffle=True)
    
    start_time = time.time()
    for epoch in range(1, epochs + 1):
        model.train()
        running_loss = 0.0
        correct = 0
        total = 0
        
        for batch_x, batch_y in train_loader:
            batch_x, batch_y = batch_x.to(device), batch_y.to(device)
            
            optimizer.zero_grad()
            outputs = model(batch_x)
            loss = criterion(outputs, batch_y)
            loss.backward()
            optimizer.step()
            
            running_loss += loss.item() * batch_x.size(0)
            _, predicted = torch.max(outputs, 1)
            total += batch_y.size(0)
            correct += (predicted == batch_y).sum().item()
            
        epoch_loss = running_loss / total
        epoch_acc = (correct / total) * 100.0
        print(f"Epoch [{epoch}/{epochs}] -> Loss: {epoch_loss:.4f} | Accuracy: {epoch_acc:.2f}%")
        
    elapsed = time.time() - start_time
    print(f"\nTraining completed in {elapsed:.2f} seconds!")
    
    # Save Model Weights
    output_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "backend", "weights"))
    os.makedirs(output_dir, exist_ok=True)
    weights_path = os.path.join(output_dir, "pneumonet_model.pth")
    
    torch.save(model.state_dict(), weights_path)
    print(f"Successfully exported model weights to: {weights_path}")
    print("=" * 60)

if __name__ == "__main__":
    train_pneumonet()
