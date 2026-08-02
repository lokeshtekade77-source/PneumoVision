import React from 'react';
import { Target, Shield, AlertTriangle, Cpu, CheckCircle2 } from 'lucide-react';

export default function About({ theme }) {
  const isDark = theme === 'dark';

  return (
    <section id="about" className={`py-24 relative border-t transition-colors duration-300 ${isDark ? 'bg-[#070b14]/70 border-slate-800/80' : 'bg-slate-50 border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full border text-xs font-mono mb-4 ${
            isDark ? 'bg-cyan-950/60 border-cyan-800 text-cyan-400' : 'bg-cyan-50 border-cyan-200 text-cyan-800'
          }`}>
            <Target className="w-3.5 h-3.5" />
            <span>STAGE I — PROBLEM STATEMENT & SCOPE</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            About Pneumonia & AI Scope
          </h2>
          <p className={`mt-4 text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Pneumonia is an acute respiratory infection affecting the lungs, responsible for millions of hospitalizations globally. 
            Automated deep learning systems aid radiologists by providing fast, objective second opinions.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Problem Statement */}
          <div className={`glass-panel glass-panel-hover p-7 rounded-3xl border ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className={`text-xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>Problem Statement</h3>
            </div>
            <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Manual interpretation of chest X-rays requires specialized radiological expertise and is prone to fatigue or inter-observer variability during high patient volumes. 
              Subtle infiltrates in early-stage pneumonia can be misdiagnosed or overlooked.
            </p>
            <ul className={`space-y-2 text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              <li className="flex items-start space-x-2">
                <span className="text-amber-400 mt-0.5">&bull;</span>
                <span>High diagnostic backlog in emergency chest radiography triage.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-amber-400 mt-0.5">&bull;</span>
                <span>Risk of false negative classifications leading to delayed antibiotic treatment.</span>
              </li>
            </ul>
          </div>

          {/* Project Objectives */}
          <div className={`glass-panel glass-panel-hover p-7 rounded-3xl border ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Target className="w-5 h-5" />
              </div>
              <h3 className={`text-xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>Project Objectives</h3>
            </div>
            <ul className={`space-y-3 text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                <span>Design and implement a custom 4-block PyTorch Convolutional Neural Network (PneumoNet).</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                <span>Preprocess and normalize chest X-ray images ($224 \times 224$) with data augmentation.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                <span>Achieve high sensitivity ($\ge 95\%$) to minimize clinical false negative risks.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                <span>Build an asynchronous FastAPI REST server connected to a modern Three.js 3D web UI.</span>
              </li>
            </ul>
          </div>

          {/* System Scope */}
          <div className={`glass-panel glass-panel-hover p-7 rounded-3xl border ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className={`text-xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>System Scope</h3>
            </div>
            <p className={`text-sm leading-relaxed mb-3 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              The scope encompasses binary classification of standard anterior-posterior (AP/PA) pediatric and adult chest X-rays. 
              The system processes incoming files through an automated feature extract transform and outputs diagnostic confidence scores.
            </p>
            <div className={`p-3 rounded-xl border text-xs ${isDark ? 'bg-slate-900/60 border-slate-800 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'}`}>
              <span className="text-sky-400 font-bold">Scope Boundaries:</span> Binary classification (NORMAL vs PNEUMONIA). Excludes multi-label segmentation.
            </div>
          </div>

          {/* Expected Outcomes */}
          <div className={`glass-panel glass-panel-hover p-7 rounded-3xl border ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className={`text-xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>Expected Outcomes</h3>
            </div>
            <ul className={`space-y-2.5 text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              <li className="flex items-center space-x-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
                <span>Fully reproducible PyTorch model training and evaluation script.</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
                <span>Deployable REST API returning predictions in &lt;100 milliseconds.</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
                <span>Interactive 3D web dashboard for clinical visualization & report generation.</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
                <span>Comprehensive metric evaluation (ROC-AUC, Confusion Matrix, Sensitivity).</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
