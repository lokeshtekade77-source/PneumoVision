import React from 'react';
import { Activity, Zap, ShieldCheck, Database, ArrowRight, Layers } from 'lucide-react';
import Hero3D from './Hero3D';

export default function HeroSection({ onExploreClick, theme }) {
  const isDark = theme === 'dark';

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* 3D R3F Canvas Layer */}
      <Hero3D />

      {/* Ambient Radial Spotlight Backdrops */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none ${isDark ? 'bg-cyan-500/10' : 'bg-cyan-500/15'}`}></div>
      <div className={`absolute top-1/3 left-1/3 w-[450px] h-[450px] rounded-full blur-[130px] pointer-events-none ${isDark ? 'bg-blue-600/10' : 'bg-blue-500/10'}`}></div>

      {/* Grid Overlay */}
      <div className={`absolute inset-0 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none ${isDark ? 'opacity-15' : 'opacity-10'}`}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Academic Tag Badge */}
        <div className={`inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border text-xs font-mono mb-8 shadow-lg transition-all ${
          isDark
            ? 'bg-cyan-950/70 border-cyan-500/30 text-cyan-300 shadow-cyan-500/10'
            : 'bg-cyan-50 border-cyan-200 text-cyan-800 shadow-cyan-600/5'
        }`}>
          <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>ANN Deep Learning System &bull; PyTorch + FastAPI + 3D Web UI</span>
        </div>

        {/* Headline */}
        <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.15] ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Pneumonia Detection from <br />
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent glow-text-cyan">
            Chest X-Rays using CNN
          </span>
        </h1>

        {/* Subtitle */}
        <p className={`max-w-3xl mx-auto text-base sm:text-lg mb-10 leading-relaxed font-normal ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          An advanced medical AI diagnostic platform using a custom Convolutional Neural Network (PneumoNet) 
          to classify chest radiography scans into <span className="text-cyan-400 font-semibold">NORMAL</span> or <span className="text-amber-400 font-semibold">PNEUMONIA</span> with confidence scores & 3D volumetric views.
        </p>

        {/* Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-4 text-sm font-extrabold text-black bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 rounded-xl hover:from-cyan-300 hover:to-blue-400 transition-all shadow-xl shadow-cyan-500/25 flex items-center justify-center space-x-2.5 group hover:scale-[1.03] active:scale-95"
          >
            <span>LAUNCH X-RAY ANALYZER</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#pipeline"
            className={`w-full sm:w-auto px-8 py-4 text-sm font-bold glass-panel rounded-xl transition-all flex items-center justify-center space-x-2 glass-panel-hover ${
              isDark ? 'text-slate-200' : 'text-slate-700'
            }`}
          >
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>EXPLORE ARCHITECTURE</span>
          </a>
        </div>

        {/* Key Metrics Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          
          <div className="glass-panel glass-panel-hover p-5 rounded-2xl text-left border">
            <div className="flex items-center space-x-2 text-cyan-400 text-xs font-mono font-bold mb-1.5">
              <Activity className="w-4 h-4" />
              <span>TEST ACCURACY</span>
            </div>
            <div className={`text-3xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>94.2%</div>
            <div className={`text-[11px] mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Evaluated on test split</div>
          </div>

          <div className="glass-panel glass-panel-hover p-5 rounded-2xl text-left border">
            <div className="flex items-center space-x-2 text-emerald-400 text-xs font-mono font-bold mb-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>RECALL / SENSITIVITY</span>
            </div>
            <div className={`text-3xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>96.5%</div>
            <div className={`text-[11px] mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Minimizes false negatives</div>
          </div>

          <div className="glass-panel glass-panel-hover p-5 rounded-2xl text-left border">
            <div className="flex items-center space-x-2 text-sky-400 text-xs font-mono font-bold mb-1.5">
              <Database className="w-4 h-4" />
              <span>DATASET SIZE</span>
            </div>
            <div className={`text-3xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>5,856</div>
            <div className={`text-[11px] mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Kermany et al. X-Rays</div>
          </div>

          <div className="glass-panel glass-panel-hover p-5 rounded-2xl text-left border">
            <div className="flex items-center space-x-2 text-amber-400 text-xs font-mono font-bold mb-1.5">
              <Zap className="w-4 h-4" />
              <span>INFERENCE SPEED</span>
            </div>
            <div className={`text-3xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>&lt; 100ms</div>
            <div className={`text-[11px] mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>PyTorch CNN throughput</div>
          </div>

        </div>

      </div>
    </section>
  );
}
