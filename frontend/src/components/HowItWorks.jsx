import React from 'react';
import { UploadCloud, Sliders, Cpu, Activity, PieChart, CheckCircle } from 'lucide-react';

export default function HowItWorks({ theme }) {
  const isDark = theme === 'dark';

  const steps = [
    {
      num: "01",
      title: "X-Ray Acquisition",
      icon: UploadCloud,
      desc: "User uploads or selects a digital Chest X-Ray scan (JPEG/PNG/WEBP). Validate format & file size.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      num: "02",
      title: "Preprocessing Tensor",
      icon: Sliders,
      desc: "Image resized to 224×224 px, normalized with ImageNet mean/std, and converted to PyTorch tensor [1, 3, 224, 224].",
      color: "from-sky-500 to-indigo-500"
    },
    {
      num: "03",
      title: "CNN Feature Extractor",
      icon: Cpu,
      desc: "4-Block Convolutional pipeline extracts opacity gradients, bronchial wall opacity, and pulmonary infiltrates.",
      color: "from-blue-500 to-purple-500"
    },
    {
      num: "04",
      title: "Adaptive Pooling & Dense",
      icon: Activity,
      desc: "AdaptiveAvgPool2d maps feature maps to 256-d tensor, followed by ReLU dense hidden layer (128 units).",
      color: "from-purple-500 to-pink-500"
    },
    {
      num: "05",
      title: "Softmax Classification",
      icon: PieChart,
      desc: "Softmax activation calculates posterior probabilities: P(NORMAL) vs P(PNEUMONIA).",
      color: "from-pink-500 to-emerald-500"
    },
    {
      num: "06",
      title: "Diagnostic Output",
      icon: CheckCircle,
      desc: "Frontend renders 3D scanning overlay, class prediction badge, confidence meter, and diagnostic report.",
      color: "from-emerald-500 to-cyan-500"
    }
  ];

  return (
    <section id="pipeline" className={`py-24 relative border-t transition-colors duration-300 ${isDark ? 'bg-[#070b14] border-slate-800/80' : 'bg-slate-100/70 border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full border text-xs font-mono mb-4 ${
            isDark ? 'bg-cyan-950/60 border-cyan-800 text-cyan-400' : 'bg-cyan-50 border-cyan-200 text-cyan-800'
          }`}>
            <Cpu className="w-3.5 h-3.5" />
            <span>STAGE II — SYSTEM ARCHITECTURE PIPELINE</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            How The Neural Pipeline Works
          </h2>
          <p className={`mt-4 text-sm sm:text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            End-to-end dataflow from chest radiography acquisition to diagnostic confidence output.
          </p>
        </div>

        {/* Visual Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className={`glass-panel glass-panel-hover p-6 rounded-3xl border relative group ${
                  isDark ? 'border-slate-800' : 'border-slate-200'
                }`}
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg border ${
                    isDark ? 'bg-cyan-950/80 border-cyan-800 text-cyan-300' : 'bg-cyan-50 border-cyan-200 text-cyan-800'
                  }`}>
                    STEP {step.num}
                  </span>
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${step.color} p-0.5 shadow-md`}>
                    <div className={`w-full h-full rounded-[10px] flex items-center justify-center ${isDark ? 'bg-[#070b14] text-cyan-300' : 'bg-white text-cyan-600'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <h3 className={`text-lg font-extrabold mb-2 group-hover:text-cyan-400 transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {step.title}
                </h3>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Pipeline Summary Diagram */}
        <div className={`mt-12 glass-panel p-6 rounded-3xl border text-center overflow-x-auto ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
          <div className={`text-xs font-mono font-bold mb-4 uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Visual Dataflow Flowchart</div>
          <div className="flex items-center justify-center space-x-2 text-xs font-mono min-w-[700px]">
            <span className={`px-3 py-2 rounded-xl border ${isDark ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700'}`}>X-Ray Input</span>
            <span className="text-cyan-400 font-bold">&rarr;</span>
            <span className={`px-3 py-2 rounded-xl border ${isDark ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700'}`}>Resize & Normalize (224x224)</span>
            <span className="text-cyan-400 font-bold">&rarr;</span>
            <span className={`px-3 py-2 rounded-xl border font-bold ${isDark ? 'bg-cyan-950/80 border-cyan-800 text-cyan-300' : 'bg-cyan-50 border-cyan-200 text-cyan-800'}`}>PneumoNet CNN (4 Blocks)</span>
            <span className="text-cyan-400 font-bold">&rarr;</span>
            <span className={`px-3 py-2 rounded-xl border ${isDark ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700'}`}>Softmax Logits</span>
            <span className="text-cyan-400 font-bold">&rarr;</span>
            <span className={`px-3 py-2 rounded-xl border font-bold ${isDark ? 'bg-emerald-950/80 border-emerald-800 text-emerald-300' : 'bg-emerald-50 border-emerald-200 text-emerald-800'}`}>Diagnostic Prediction</span>
          </div>
        </div>

      </div>
    </section>
  );
}
