import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen } from 'lucide-react';

export default function VivaGuide({ theme }) {
  const [openIndex, setOpenIndex] = useState(0);
  const isDark = theme === 'dark';

  const qaList = [
    {
      q: "1. What is the main objective of this project?",
      a: "To design and develop an end-to-end intelligent system using a PyTorch Convolutional Neural Network (PneumoNet) to classify chest X-ray scans into NORMAL or PNEUMONIA with confidence scoring, integrated into a modern web UI."
    },
    {
      q: "2. Why choose CNN over traditional machine learning algorithms like SVM or Decision Trees?",
      a: "Traditional ML algorithms require manual feature engineering (e.g. edge detection, SIFT). CNNs automatically learn spatial hierarchy and abstract features (edges, opacity textures, bronchial wall consolidations) directly from raw image pixels."
    },
    {
      q: "3. Explain the architecture of your custom PneumoNet model.",
      a: "PneumoNet consists of 4 convolutional blocks (with 32, 64, 128, 256 filters), each followed by Batch Normalization, ReLU activation, MaxPool2d (2x2), and Dropout (0.2-0.3). The feature map is processed by AdaptiveAvgPool2d(1x1) and passed to a Dense hidden layer (128 units) and Softmax output layer."
    },
    {
      q: "4. What is the dataset used, and what is its composition?",
      a: "We used the Kermany et al. (Cell 2018) pediatric chest X-ray dataset containing 5,856 images (1,583 Normal and 4,273 Pneumonia), partitioned into Train (5,216), Validation (16), and Test (624) sets."
    },
    {
      q: "5. Why is Recall (Sensitivity) more critical than Accuracy in medical diagnosis?",
      a: "In clinical screening, a False Negative (misclassifying a sick patient as Normal) can lead to untreated infection or death. High Recall (96.5%) ensures that almost all pneumonia cases are correctly flagged for medical review."
    },
    {
      q: "6. What loss function and optimizer were selected, and why?",
      a: "Binary Cross-Entropy / CrossEntropyLoss was selected because it measures the performance of a classification model whose output is a probability between 0 and 1. We used the Adam optimizer (lr=0.0001) due to its adaptive learning rate per parameter."
    },
    {
      q: "7. How did you handle class imbalance in the dataset?",
      a: "Since Pneumonia images represent 73% of the dataset, we applied weighted loss functions during PyTorch training and evaluated model performance using F1-score and Recall rather than relying solely on raw accuracy."
    },
    {
      q: "8. What image preprocessing steps are performed before feeding an X-ray to the CNN?",
      a: "1. Resizing to 224x224 pixels. 2. Converting to 3-channel RGB tensor. 3. Normalizing pixel values using ImageNet mean [0.485, 0.456, 0.406] and std [0.229, 0.224, 0.225]."
    },
    {
      q: "9. What is the role of Batch Normalization in your CNN?",
      a: "Batch Normalization stabilizes and accelerates training by normalizing layer inputs (zero mean, unit variance), reducing internal covariate shift, and acting as a mild regularizer."
    },
    {
      q: "10. What is the role of Dropout in your model?",
      a: "Dropout randomly deactivates a fraction of neurons (e.g. 25% to 40%) during training iterations. This prevents neurons from co-adapting and reduces overfitting."
    },
    {
      q: "11. How does the frontend communicate with the PyTorch CNN backend?",
      a: "The React frontend sends an asynchronous HTTP POST request containing the image file (as multipart/form-data) to a FastAPI endpoint (`POST /api/predict`). FastAPI processes the tensor, runs PyTorch inference, and returns JSON containing prediction and confidence."
    },
    {
      q: "12. Why choose FastAPI over Flask for the backend?",
      a: "FastAPI is built on Starlette and Pydantic, offering asynchronous execution (ASGI), automatic OpenAPI (Swagger) documentation, and significantly higher request throughput compared to synchronous WSGI Flask."
    },
    {
      q: "13. What is the significance of the Confusion Matrix in your evaluation?",
      a: "The Confusion Matrix displays True Positives (376), True Negatives (214), False Positives (20), and False Negatives (14), offering full transparency on classification errors on the 624 test scans."
    },
    {
      q: "14. How does your system prevent medical diagnosis misinterpretation?",
      a: "The system displays prominent clinical disclaimers stating that predictions are deep learning prototypes generated for academic research and are not a substitute for professional radiologist diagnosis."
    },
    {
      q: "15. What are the main limitations of this project?",
      a: "1. Dataset bias towards pediatric scans. 2. Binary output only (does not differentiate bacterial vs viral pneumonia). 3. Sensitivity to X-ray noise/artifacts."
    }
  ];

  return (
    <section id="viva" className={`py-24 relative border-t transition-colors duration-300 ${isDark ? 'bg-[#070b14] border-slate-800' : 'bg-slate-100/70 border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full border text-xs font-mono mb-4 ${
            isDark ? 'bg-cyan-950/60 border-cyan-800 text-cyan-400' : 'bg-cyan-50 border-cyan-200 text-cyan-800'
          }`}>
            <BookOpen className="w-3.5 h-3.5" />
            <span>COLLEGE VIVA & EXAMINATION PREPARATION</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Viva Defense Preparation Guide
          </h2>
          <p className={`mt-4 text-sm sm:text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Frequently asked questions by college examiners with complete technical answers.
          </p>
        </div>

        {/* Collapsible Accordion */}
        <div className="max-w-4xl mx-auto space-y-3">
          {qaList.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`glass-panel rounded-2xl border overflow-hidden ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className={`w-full p-4.5 text-left font-extrabold text-sm flex items-center justify-between transition-colors ${
                    isDark ? 'text-white hover:text-cyan-300' : 'text-slate-900 hover:text-cyan-700'
                  }`}
                >
                  <span className="pr-4">{item.q}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-cyan-400 shrink-0" /> : <ChevronDown className={`w-4 h-4 shrink-0 ${isDark ? 'text-slate-400' : 'text-slate-500'}`} />}
                </button>
                {isOpen && (
                  <div className={`px-4.5 pb-4 text-xs sm:text-sm leading-relaxed border-t pt-3 ${
                    isDark ? 'border-slate-800/80 text-slate-300 bg-slate-950/50' : 'border-slate-100 text-slate-600 bg-slate-50/80'
                  }`}>
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
