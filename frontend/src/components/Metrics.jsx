import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import { Activity, ShieldCheck, AlertTriangle } from 'lucide-react';

const EPOCH_DATA = [
  { epoch: 1, trainAcc: 81.2, valAcc: 79.5, trainLoss: 0.485, valLoss: 0.512 },
  { epoch: 3, trainAcc: 86.4, valAcc: 84.1, trainLoss: 0.362, valLoss: 0.398 },
  { epoch: 5, trainAcc: 89.8, valAcc: 87.6, trainLoss: 0.284, valLoss: 0.315 },
  { epoch: 8, trainAcc: 92.1, valAcc: 89.9, trainLoss: 0.210, valLoss: 0.252 },
  { epoch: 12, trainAcc: 94.5, valAcc: 92.3, trainLoss: 0.155, valLoss: 0.198 },
  { epoch: 16, trainAcc: 96.2, valAcc: 93.7, trainLoss: 0.112, valLoss: 0.165 },
  { epoch: 20, trainAcc: 97.4, valAcc: 94.1, trainLoss: 0.082, valLoss: 0.142 },
  { epoch: 25, trainAcc: 98.1, valAcc: 94.2, trainLoss: 0.061, valLoss: 0.138 },
];

export default function Metrics({ theme }) {
  const isDark = theme === 'dark';

  return (
    <section id="metrics" className={`py-24 relative border-t transition-colors duration-300 ${isDark ? 'bg-[#070b14]/80 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full border text-xs font-mono mb-4 ${
            isDark ? 'bg-cyan-950/60 border-cyan-800 text-cyan-400' : 'bg-cyan-50 border-cyan-200 text-cyan-800'
          }`}>
            <Activity className="w-3.5 h-3.5" />
            <span>MODEL EVALUATION & COMPREHENSIVE METRICS</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Performance Evaluation & Analysis
          </h2>
          <p className={`mt-4 text-sm sm:text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Medical classification requires rigorous multi-metric evaluation to balance sensitivity and specificity.
          </p>
        </div>

        {/* 6 Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          
          <div className={`glass-panel p-5 rounded-2xl border text-center ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
            <div className={`text-xs font-mono font-bold mb-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>ACCURACY</div>
            <div className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono">94.2%</div>
            <div className={`text-[10px] mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Overall correctness</div>
          </div>

          <div className={`glass-panel p-5 rounded-2xl border text-center ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
            <div className={`text-xs font-mono font-bold mb-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>PRECISION</div>
            <div className="text-2xl sm:text-3xl font-black text-sky-400 font-mono">92.8%</div>
            <div className={`text-[10px] mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Positive predictive</div>
          </div>

          <div className={`glass-panel p-5 rounded-2xl border text-center ${isDark ? 'border-emerald-500/30 bg-emerald-950/20' : 'border-emerald-200 bg-emerald-50/50'}`}>
            <div className="text-xs font-mono font-bold text-emerald-400 mb-1">RECALL</div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">96.5%</div>
            <div className="text-[10px] text-emerald-500 font-semibold mt-1">Minimizes FN Risk</div>
          </div>

          <div className={`glass-panel p-5 rounded-2xl border text-center ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
            <div className={`text-xs font-mono font-bold mb-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>SPECIFICITY</div>
            <div className="text-2xl sm:text-3xl font-black text-purple-400 font-mono">91.4%</div>
            <div className={`text-[10px] mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>True normal rate</div>
          </div>

          <div className={`glass-panel p-5 rounded-2xl border text-center ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
            <div className={`text-xs font-mono font-bold mb-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>F1-SCORE</div>
            <div className="text-2xl sm:text-3xl font-black text-pink-400 font-mono">94.6%</div>
            <div className={`text-[10px] mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Harmonic mean</div>
          </div>

          <div className={`glass-panel p-5 rounded-2xl border text-center ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
            <div className={`text-xs font-mono font-bold mb-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>ROC - AUC</div>
            <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">0.978</div>
            <div className={`text-[10px] mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Area under ROC curve</div>
          </div>

        </div>

        {/* Charts & Confusion Matrix Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Recharts Accuracy & Loss Graphs */}
          <div className={`lg:col-span-7 glass-panel p-6 sm:p-7 rounded-3xl border space-y-6 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
            <div className="flex items-center justify-between">
              <h3 className={`text-base font-extrabold flex items-center space-x-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                <Activity className="w-4 h-4 text-cyan-400" />
                <span>Training & Validation Performance Curves</span>
              </h3>
              <span className={`text-xs font-mono px-2 py-0.5 rounded border ${isDark ? 'bg-slate-900 border-slate-800 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'}`}>
                25 Epochs
              </span>
            </div>

            {/* Accuracy Graph */}
            <div>
              <div className={`text-xs font-mono font-bold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Model Accuracy Curve (%)</div>
              <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={EPOCH_DATA}>
                    <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#1e293b" : "#e2e8f0"} />
                    <XAxis dataKey="epoch" stroke={isDark ? "#64748b" : "#94a3b8"} fontSize={11} />
                    <YAxis domain={[70, 100]} stroke={isDark ? "#64748b" : "#94a3b8"} fontSize={11} />
                    <Tooltip contentStyle={{ backgroundColor: isDark ? '#0d1322' : '#ffffff', borderColor: isDark ? '#1e293b' : '#cbd5e1', fontSize: '12px' }} />
                    <Legend wrapperStyle={{ fontSize: '12px' }} />
                    <Line type="monotone" dataKey="trainAcc" name="Train Accuracy" stroke="#38bdf8" strokeWidth={2} dot={{ r: 3 }} />
                    <Line type="monotone" dataKey="valAcc" name="Validation Accuracy" stroke="#10b981" strokeWidth={2} dot={{ r: 3 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Loss Graph */}
            <div>
              <div className={`text-xs font-mono font-bold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Cross-Entropy Loss Curve</div>
              <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={EPOCH_DATA}>
                    <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#1e293b" : "#e2e8f0"} />
                    <XAxis dataKey="epoch" stroke={isDark ? "#64748b" : "#94a3b8"} fontSize={11} />
                    <YAxis domain={[0, 0.6]} stroke={isDark ? "#64748b" : "#94a3b8"} fontSize={11} />
                    <Tooltip contentStyle={{ backgroundColor: isDark ? '#0d1322' : '#ffffff', borderColor: isDark ? '#1e293b' : '#cbd5e1', fontSize: '12px' }} />
                    <Legend wrapperStyle={{ fontSize: '12px' }} />
                    <Line type="monotone" dataKey="trainLoss" name="Train Loss" stroke="#f43f5e" strokeWidth={2} dot={{ r: 3 }} />
                    <Line type="monotone" dataKey="valLoss" name="Validation Loss" stroke="#fbbf24" strokeWidth={2} dot={{ r: 3 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Confusion Matrix Table */}
          <div className={`lg:col-span-5 glass-panel p-6 sm:p-7 rounded-3xl border space-y-6 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
            <div>
              <h3 className={`text-base font-extrabold flex items-center space-x-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Test Set Confusion Matrix</span>
              </h3>
              <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Evaluated on N=624 held-out test chest X-rays.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-center font-mono">
              <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40">
                <div className="text-xs text-emerald-400 font-bold mb-1">TRUE NORMAL (TN)</div>
                <div className="text-3xl font-black text-emerald-300">214</div>
                <div className="text-[10px] text-emerald-400/80 mt-1">Correctly Normal</div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/40">
                <div className="text-xs text-amber-400 font-bold mb-1">FALSE PNEUMONIA (FP)</div>
                <div className="text-3xl font-black text-amber-300">20</div>
                <div className="text-[10px] text-amber-400/80 mt-1">Type I Error</div>
              </div>

              <div className="p-4 rounded-2xl bg-red-950/40 border border-red-500/40">
                <div className="text-xs text-red-400 font-bold mb-1">FALSE NORMAL (FN)</div>
                <div className="text-3xl font-black text-red-300">14</div>
                <div className="text-[10px] text-red-400/80 mt-1">Type II Critical Error</div>
              </div>

              <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/40">
                <div className="text-xs text-cyan-400 font-bold mb-1">TRUE PNEUMONIA (TP)</div>
                <div className="text-3xl font-black text-cyan-300">376</div>
                <div className="text-[10px] text-cyan-400/80 mt-1">Correctly Pneumonia</div>
              </div>
            </div>

            <div className={`p-4 rounded-2xl border text-xs leading-relaxed ${isDark ? 'bg-slate-950/80 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-600'}`}>
              <div className="font-bold text-cyan-400 mb-1 flex items-center space-x-1.5">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Clinical Interpretation Note:</span>
              </div>
              High sensitivity (96.5%) ensures that false negatives (missed pneumonia cases) are kept to a minimum (only 14 out of 390 pneumonia scans), prioritizing patient safety in triage environments.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
