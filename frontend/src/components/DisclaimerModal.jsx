import React, { useState } from 'react';
import { ShieldAlert, X } from 'lucide-react';

export default function DisclaimerModal() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-4 right-4 left-4 sm:left-auto sm:max-w-md z-50 animate-bounce-once">
      <div className="glass-panel p-4 rounded-2xl border-amber-500/40 shadow-2xl shadow-black bg-[#0d1322]/95 backdrop-blur-lg flex items-start space-x-3">
        <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
          <ShieldAlert className="w-5 h-5" />
        </div>
        <div className="flex-1 text-xs">
          <h4 className="font-bold text-amber-300 mb-1">Academic Research Disclaimer</h4>
          <p className="text-slate-300 leading-relaxed">
            This system is developed exclusively for college project demonstration. Results are model predictions and <strong>not</strong> medical diagnoses.
          </p>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-slate-400 hover:text-white p-1"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
