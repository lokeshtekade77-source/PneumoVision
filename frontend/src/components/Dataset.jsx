import React from 'react';
import { Database, Image, Layers, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function Dataset({ theme }) {
  const isDark = theme === 'dark';

  return (
    <section id="dataset" className={`py-24 relative border-t transition-colors duration-300 ${isDark ? 'bg-[#070b14] border-slate-800' : 'bg-slate-100/70 border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full border text-xs font-mono mb-4 ${
            isDark ? 'bg-cyan-950/60 border-cyan-800 text-cyan-400' : 'bg-cyan-50 border-cyan-200 text-cyan-800'
          }`}>
            <Database className="w-3.5 h-3.5" />
            <span>STAGE I & II — DATASET ARCHITECTURE</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Chest X-Ray Dataset Overview
          </h2>
          <p className={`mt-4 text-sm sm:text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Dataset structure, image distribution, data augmentation pipeline, and inherent limitations.
          </p>
        </div>

        {/* 3 Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className={`glass-panel glass-panel-hover p-6 sm:p-7 rounded-3xl border ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <h4 className={`text-base font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>Dataset Source (Kaggle)</h4>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Kermany et al., Cell 2018</p>
              </div>
            </div>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Sourced from the benchmark <strong>"Chest X-Ray Images (Pneumonia)" dataset on Kaggle</strong> (Guangzhou Women and Children's Medical Center). Contains 5,856 chest radiograph scans evaluated by expert physicians.
            </p>
          </div>

          <div className={`glass-panel glass-panel-hover p-6 sm:p-7 rounded-3xl border ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Image className="w-5 h-5" />
              </div>
              <div>
                <h4 className={`text-base font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>Class Distribution</h4>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>NORMAL vs PNEUMONIA</p>
              </div>
            </div>
            <ul className={`text-xs space-y-2 font-mono ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              <li className="flex justify-between">
                <span>NORMAL Scans:</span>
                <span className="text-cyan-400 font-bold">1,583 (27%)</span>
              </li>
              <li className="flex justify-between">
                <span>PNEUMONIA Scans:</span>
                <span className="text-amber-400 font-bold">4,273 (73%)</span>
              </li>
            </ul>
          </div>

          <div className={`glass-panel glass-panel-hover p-6 sm:p-7 rounded-3xl border ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h4 className={`text-base font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>Train / Val / Test Partition</h4>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Standard splits</p>
              </div>
            </div>
            <ul className={`text-xs space-y-2 font-mono ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              <li className="flex justify-between"><span>Train Set:</span><span className="font-bold">5,216 scans</span></li>
              <li className="flex justify-between"><span>Validation Set:</span><span className="font-bold">16 scans</span></li>
              <li className="flex justify-between"><span>Test Set:</span><span className="font-bold">624 scans</span></li>
            </ul>
          </div>

        </div>

        {/* Data Preprocessing & Augmentation Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          <div className={`glass-panel p-7 rounded-3xl border ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
            <h3 className={`text-lg font-extrabold mb-4 flex items-center space-x-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              <span>Image Preprocessing & Augmentation</span>
            </h3>
            <ul className={`space-y-3 text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              <li className="flex items-start space-x-2">
                <span className="text-cyan-400 font-bold">&bull;</span>
                <span><strong>Spatial Resizing:</strong> Images resized from raw resolutions to uniform $224 \times 224$ pixels.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-cyan-400 font-bold">&bull;</span>
                <span><strong>Tensor Normalization:</strong> Pixel RGB channels normalized using ImageNet parameters (Mean: `[0.485, 0.456, 0.406]`, Std: `[0.229, 0.224, 0.225]`).</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-cyan-400 font-bold">&bull;</span>
                <span><strong>Random Horizontal Flip:</strong> $50\%$ probability flip to introduce position invariance.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-cyan-400 font-bold">&bull;</span>
                <span><strong>Random Rotation & Zoom:</strong> Rotation ($\pm 10^\circ$) and scaling ($0.9 - 1.1$) to prevent overfitting.</span>
              </li>
            </ul>
          </div>

          {/* Dataset Limitations */}
          <div className={`glass-panel p-7 rounded-3xl border ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
            <h3 className={`text-lg font-extrabold mb-4 flex items-center space-x-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              <AlertCircle className="w-5 h-5 text-amber-400" />
              <span>Dataset Limitations & Bias</span>
            </h3>
            <ul className={`space-y-3 text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              <li className="flex items-start space-x-2">
                <span className="text-amber-400 font-bold">&bull;</span>
                <span><strong>Pediatric Population Bias:</strong> Scans collected from 1-to-5-year-old pediatric patients, which may limit direct generalization to elderly adult scans.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-amber-400 font-bold">&bull;</span>
                <span><strong>Class Imbalance:</strong> $73\%$ Pneumonia vs $27\%$ Normal. Handled via Weighted Cross-Entropy Loss during PyTorch training.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-amber-400 font-bold">&bull;</span>
                <span><strong>Single Center Acquisition:</strong> Images sourced from one medical institution with specific X-ray hardware calibration.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
