import React from 'react';
import { Layers, ArrowDown, Cpu } from 'lucide-react';

export default function Architecture({ theme }) {
  const isDark = theme === 'dark';

  const layers = [
    { name: "Input Tensor", type: "Input Layer", details: "Shape: [3, 224, 224] • RGB Radiograph Scan", color: isDark ? "border-slate-800 bg-slate-900/80 text-white" : "border-slate-200 bg-white text-slate-900" },
    { name: "Conv2D Block 1", type: "Convolution", details: "32 Filters (3x3), Stride=1, BatchNorm, ReLU • Output: [32, 224, 224]", color: isDark ? "border-cyan-800 bg-cyan-950/60 text-white" : "border-cyan-200 bg-cyan-50/70 text-slate-900" },
    { name: "MaxPool2D Block 1", type: "Sub-Sampling", details: "Kernel: 2x2, Stride=2 • Output: [32, 112, 112]", color: isDark ? "border-slate-800 bg-slate-900/60 text-white" : "border-slate-200 bg-white/70 text-slate-900" },
    { name: "Conv2D Block 2", type: "Convolution", details: "64 Filters (3x3), Stride=1, BatchNorm, ReLU • Output: [64, 112, 112]", color: isDark ? "border-sky-800 bg-sky-950/60 text-white" : "border-sky-200 bg-sky-50/70 text-slate-900" },
    { name: "MaxPool2D Block 2", type: "Sub-Sampling", details: "Kernel: 2x2, Stride=2 • Output: [64, 56, 56]", color: isDark ? "border-slate-800 bg-slate-900/60 text-white" : "border-slate-200 bg-white/70 text-slate-900" },
    { name: "Conv2D Block 3", type: "Convolution", details: "128 Filters (3x3), Stride=1, BatchNorm, ReLU • Output: [128, 56, 56]", color: isDark ? "border-blue-800 bg-blue-950/60 text-white" : "border-blue-200 bg-blue-50/70 text-slate-900" },
    { name: "MaxPool2D Block 3", type: "Sub-Sampling", details: "Kernel: 2x2, Stride=2 • Output: [128, 28, 28]", color: isDark ? "border-slate-800 bg-slate-900/60 text-white" : "border-slate-200 bg-white/70 text-slate-900" },
    { name: "Conv2D Block 4", type: "Convolution", details: "256 Filters (3x3), Stride=1, BatchNorm, ReLU • Output: [256, 28, 28]", color: isDark ? "border-purple-800 bg-purple-950/60 text-white" : "border-purple-200 bg-purple-50/70 text-slate-900" },
    { name: "AdaptiveAvgPool2D", type: "Pooling", details: "Global Spatial Pooling (1x1) • Output: [256, 1, 1]", color: isDark ? "border-slate-800 bg-slate-900/60 text-white" : "border-slate-200 bg-white/70 text-slate-900" },
    { name: "Dense Hidden Layer", type: "Fully Connected", details: "256 -> 128 Units, ReLU Activation, Dropout (0.4)", color: isDark ? "border-pink-800 bg-pink-950/60 text-white" : "border-pink-200 bg-pink-50/70 text-slate-900" },
    { name: "Softmax Output", type: "Classifier Head", details: "2 Output Units • [P(NORMAL), P(PNEUMONIA)]", color: isDark ? "border-emerald-700 bg-emerald-950/80 text-white" : "border-emerald-200 bg-emerald-50 text-slate-900" },
  ];

  return (
    <section id="architecture" className={`py-24 relative border-t transition-colors duration-300 ${isDark ? 'bg-[#070b14]/90 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full border text-xs font-mono mb-4 ${
            isDark ? 'bg-cyan-950/60 border-cyan-800 text-cyan-400' : 'bg-cyan-50 border-cyan-200 text-cyan-800'
          }`}>
            <Layers className="w-3.5 h-3.5" />
            <span>STAGE II — CNN ARCHITECTURE DESIGN</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            PneumoNet Custom CNN Architecture
          </h2>
          <p className={`mt-4 text-sm sm:text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Detailed layer breakdown showcasing convolution, pooling, batch normalization, and classification heads.
          </p>
        </div>

        {/* Vertical Layer Flowchart */}
        <div className="max-w-3xl mx-auto space-y-3">
          {layers.map((layer, index) => (
            <div key={index} className="flex flex-col items-center">
              
              <div className={`w-full p-4.5 rounded-2xl border ${layer.color} glass-panel flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-sm transition-transform hover:scale-[1.01]`}>
                <div className="flex items-center space-x-3">
                  <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg border ${
                    isDark ? 'bg-slate-950 border-slate-800 text-cyan-400' : 'bg-white border-slate-200 text-cyan-700'
                  }`}>
                    L{index + 1}
                  </span>
                  <div>
                    <h4 className={`text-sm font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>{layer.name}</h4>
                    <span className={`text-[11px] font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{layer.type}</span>
                  </div>
                </div>
                <div className={`text-xs font-mono sm:text-right ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {layer.details}
                </div>
              </div>

              {index < layers.length - 1 && (
                <div className="my-1.5 text-cyan-400 opacity-70">
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>
              )}

            </div>
          ))}
        </div>

        {/* Hyperparameters Summary Box */}
        <div className={`mt-12 max-w-3xl mx-auto glass-panel p-7 rounded-3xl border ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
          <h3 className={`text-base font-extrabold mb-4 flex items-center space-x-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>Training Hyperparameters Summary</span>
          </h3>
          <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            <div>Optimizer: <span className="text-cyan-400 font-bold">Adam (lr=1e-4)</span></div>
            <div>Loss Function: <span className="text-cyan-400 font-bold">Cross-Entropy</span></div>
            <div>Batch Size: <span className="text-cyan-400 font-bold">32</span></div>
            <div>Total Params: <span className="text-cyan-400 font-bold">1,184,322</span></div>
          </div>
        </div>

      </div>
    </section>
  );
}
