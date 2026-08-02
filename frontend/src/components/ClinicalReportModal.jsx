import React from 'react';
import { X, Printer, ShieldAlert, FileText, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function ClinicalReportModal({ result, imageSrc, _imageName, onClose, theme }) {
  if (!result) return null;

  const handlePrint = () => {
    window.print();
  };

  const isLight = theme === 'light';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md overflow-y-auto print:p-0 print:bg-white">
      <div className={`relative w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden transition-all print:shadow-none print:max-w-none print:w-full ${
        isLight ? 'bg-white text-slate-900 border border-slate-200' : 'bg-[#0d1322] text-slate-100 border border-slate-800'
      }`}>
        
        {/* Modal Header Bar (Hidden in Print) */}
        <div className={`flex items-center justify-between px-6 py-4 border-b print:hidden ${
          isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900 border-slate-800'
        }`}>
          <div className="flex items-center space-x-2">
            <FileText className="w-5 h-5 text-teal-600" />
            <h3 className="text-base font-bold tracking-tight">Clinical Diagnostic Report Preview</h3>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-teal-600 via-sky-600 to-blue-600 hover:from-teal-500 hover:to-blue-500 transition-all flex items-center space-x-1.5 shadow-md shadow-teal-600/20"
            >
              <Printer className="w-4 h-4" />
              <span>PRINT / SAVE AS PDF</span>
            </button>
            <button
              onClick={onClose}
              className={`p-2 rounded-xl border transition-colors ${
                isLight ? 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-600' : 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-300'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Diagnostic Document Body */}
        <div className="p-6 sm:p-10 space-y-8 print:p-6 print:text-black">
          
          {/* Header & Clinic Branding */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-slate-200 dark:border-slate-800 gap-4">
            <div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold text-lg">P</div>
                <span className="text-xl font-extrabold tracking-tight text-teal-600 dark:text-teal-400">PneumoVision AI</span>
              </div>
              <p className="text-xs text-slate-500 mt-1 font-mono">Thoracic Radiography Automated Deep Learning Suite</p>
            </div>
            <div className="text-left sm:text-right font-mono text-xs text-slate-500 space-y-1">
              <div>REPORT ID: <span className="font-bold text-slate-800 dark:text-slate-200">PV-2026-X8921</span></div>
              <div>DATE: <span className="text-slate-700 dark:text-slate-300">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span></div>
              <div>MODEL: <span className="text-teal-600 font-semibold">{result.model_used || "PneumoNet Custom CNN v1.0"}</span></div>
            </div>
          </div>

          {/* Classification Banner */}
          <div className={`p-6 rounded-2xl border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ${
            result.prediction === 'PNEUMONIA'
              ? 'bg-amber-500/10 border-amber-500/30 text-amber-900 dark:text-amber-300'
              : 'bg-teal-500/10 border-teal-500/30 text-teal-900 dark:text-teal-300'
          }`}>
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider block opacity-75 mb-1">AUTOMATED DIAGNOSTIC CLASSIFICATION</span>
              <div className="flex items-center space-x-2">
                {result.prediction === 'PNEUMONIA' ? (
                  <AlertTriangle className="w-8 h-8 text-amber-600 dark:text-amber-400 shrink-0" />
                ) : (
                  <CheckCircle2 className="w-8 h-8 text-teal-600 dark:text-teal-400 shrink-0" />
                )}
                <div>
                  <h2 className="text-3xl font-black tracking-tight">{result.prediction} DETECTED</h2>
                  <p className="text-xs font-medium opacity-90">{result.verification_status}</p>
                </div>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-xs font-mono uppercase tracking-wider block opacity-75 mb-1">MODEL CONFIDENCE</span>
              <div className="text-4xl font-black font-mono">{result.confidence}%</div>
              <span className="text-[11px] font-mono opacity-80">Latency: {result.execution_time_ms} ms</span>
            </div>
          </div>

          {/* Probability Distribution */}
          <div className={`p-5 rounded-2xl border space-y-3 ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/60 border-slate-800'}`}>
            <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">Class Probability Vector</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between text-xs font-mono mb-1 font-semibold">
                  <span>NORMAL CLASS</span>
                  <span className="text-teal-600">{result.probabilities.NORMAL}%</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <div className="h-full bg-teal-500 transition-all" style={{ width: `${result.probabilities.NORMAL}%` }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-mono mb-1 font-semibold">
                  <span>PNEUMONIA CLASS</span>
                  <span className="text-amber-600">{result.probabilities.PNEUMONIA}%</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <div className="h-full bg-amber-500 transition-all" style={{ width: `${result.probabilities.PNEUMONIA}%` }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Image & Grad-CAM Visual Comparison */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className={`p-4 rounded-2xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/60 border-slate-800'}`}>
              <span className="text-xs font-mono font-bold text-slate-500 uppercase block mb-3">1. Original Radiograph</span>
              <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-black flex items-center justify-center max-h-[260px]">
                <img src={imageSrc} alt="Original Radiograph" className="max-h-[250px] w-auto object-contain" />
              </div>
            </div>

            <div className={`p-4 rounded-2xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/60 border-slate-800'}`}>
              <span className="text-xs font-mono font-bold text-teal-600 uppercase block mb-3">2. PyTorch Grad-CAM Activation Heatmap</span>
              <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-black flex items-center justify-center max-h-[260px]">
                <img src={result.gradcam_image || imageSrc} alt="Grad-CAM Heatmap" className="max-h-[250px] w-auto object-contain" />
              </div>
            </div>
          </div>

          {/* Radiological Findings & Quantitative Metadata */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className={`md:col-span-7 p-5 rounded-2xl border space-y-2 ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/60 border-slate-800'}`}>
              <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">Radiological Findings</h4>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                {result.radiological_findings}
              </p>
            </div>

            {result.features && (
              <div className={`md:col-span-5 p-5 rounded-2xl border space-y-2 font-mono text-xs ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/60 border-slate-800'}`}>
                <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Radiograph Feature Index</h4>
                <div className="space-y-1 text-slate-600 dark:text-slate-400">
                  <div className="flex justify-between"><span>Resolution:</span> <span className="font-bold text-slate-800 dark:text-slate-200">{result.features.image_resolution}</span></div>
                  <div className="flex justify-between"><span>Mean Brightness:</span> <span className="font-bold text-slate-800 dark:text-slate-200">{result.features.mean_brightness}</span></div>
                  <div className="flex justify-between"><span>Contrast Std:</span> <span className="font-bold text-slate-800 dark:text-slate-200">{result.features.contrast_std}</span></div>
                  <div className="flex justify-between"><span>Opacity Infiltrate Index:</span> <span className="font-bold text-amber-600">{result.features.opacity_infiltrate_index}%</span></div>
                </div>
              </div>
            )}
          </div>

          {/* Academic Medical Disclaimer */}
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-[11px] text-amber-800 dark:text-amber-300 flex items-start space-x-2 leading-relaxed">
            <ShieldAlert className="w-4 h-4 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
            <span>
              <strong>ACADEMIC MEDICAL DISCLAIMER:</strong> This report is generated automatically by PneumoNet CNN for research and academic evaluation. It is <strong>NOT</strong> a certified clinical diagnosis. Radiographs must be formally reviewed by a licensed board-certified radiologist.
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}
