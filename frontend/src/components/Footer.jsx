import React from 'react';
import { Activity } from 'lucide-react';

export default function Footer({ theme }) {
  const isDark = theme === 'dark';

  return (
    <footer className={`py-12 text-xs transition-colors duration-300 border-t ${
      isDark ? 'bg-[#04060d] border-slate-800/80 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
            <Activity className="w-4 h-4" />
          </div>
          <div>
            <span className={`font-extrabold ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>PneumoVision Diagnostic System</span>
            <p className={`text-[11px] font-mono ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>ANN Deep Learning System &bull; PyTorch + FastAPI + React Three Fiber</p>
          </div>
        </div>

        {/* Academic Project Info */}
        <div className="text-center md:text-right">
          <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
            Pneumonia Detection from Chest X-Rays using Convolutional Neural Networks
          </p>
          <p className={`text-[11px] mt-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            College Practical Project Implementation &bull; Academic Evaluation
          </p>
        </div>

      </div>
    </footer>
  );
}
