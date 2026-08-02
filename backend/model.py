import torch
import torch.nn as nn
import torch.nn.functional as F

class PneumoNet(nn.Module):
    """
    PneumoNet: Custom 4-Block Convolutional Neural Network
    Designed for binary classification of Chest X-Ray images:
    0: NORMAL
    1: PNEUMONIA
    """
    def __init__(self, num_classes=2):
        super(PneumoNet, self).__init__()
        
        # Block 1: 3 -> 32 channels
        self.conv1 = nn.Conv2d(in_channels=3, out_channels=32, kernel_size=3, padding=1)
        self.bn1 = nn.BatchNorm2d(32)
        
        # Block 2: 32 -> 64 channels
        self.conv2 = nn.Conv2d(in_channels=32, out_channels=64, kernel_size=3, padding=1)
        self.bn2 = nn.BatchNorm2d(64)
        
        # Block 3: 64 -> 128 channels
        self.conv3 = nn.Conv2d(in_channels=64, out_channels=128, kernel_size=3, padding=1)
        self.bn3 = nn.BatchNorm2d(128)
        
        # Block 4: 128 -> 256 channels
        self.conv4 = nn.Conv2d(in_channels=128, out_channels=256, kernel_size=3, padding=1)
        self.bn4 = nn.BatchNorm2d(256)
        
        # Pooling and Dropout
        self.pool = nn.MaxPool2d(kernel_size=2, stride=2)
        self.drop_conv = nn.Dropout(0.25)
        self.drop_fc = nn.Dropout(0.4)
        self.global_pool = nn.AdaptiveAvgPool2d((1, 1))
        
        # Classifier Head
        self.fc1 = nn.Linear(256, 128)
        self.fc2 = nn.Linear(128, num_classes)
        
    def forward(self, x):
        # x shape: [B, 3, 224, 224]
        x = F.relu(self.bn1(self.conv1(x)))
        x = self.pool(x)  # [B, 32, 112, 112]
        x = self.drop_conv(x)
        
        x = F.relu(self.bn2(self.conv2(x)))
        x = self.pool(x)  # [B, 64, 56, 56]
        x = self.drop_conv(x)
        
        x = F.relu(self.bn3(self.conv3(x)))
        x = self.pool(x)  # [B, 128, 28, 28]
        x = self.drop_conv(x)
        
        x = F.relu(self.bn4(self.conv4(x)))
        x = self.pool(x)  # [B, 256, 14, 14]
        
        x = self.global_pool(x) # [B, 256, 1, 1]
        x = torch.flatten(x, 1)  # [B, 256]
        
        x = F.relu(self.fc1(x))
        x = self.drop_fc(x)
        logits = self.fc2(x)      # [B, 2]
        
        return logits

def get_pneumonet_model(weights_path=None):
    model = PneumoNet(num_classes=2)
    model.eval()
    if weights_path:
        try:
            state_dict = torch.load(weights_path, map_location=torch.device('cpu'))
            model.load_state_dict(state_dict)
            print(f"Loaded PneumoNet model weights from {weights_path}")
        except Exception as e:
            print(f"Could not load weights from {weights_path}: {e}")
    return model
