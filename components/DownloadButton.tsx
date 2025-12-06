import React from 'react';
import { Download, FileCheck } from 'lucide-react';

interface DownloadButtonProps {
  onClick: () => void;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({ onClick }) => {
  return (
    <div className="animate-fade-in w-full mt-6">
        <div className="flex items-center gap-2 mb-3 text-emerald-700 bg-emerald-50 px-3 py-2 rounded border border-emerald-100 text-sm">
            <FileCheck className="w-4 h-4" /> 
            <span className="font-medium">Verification Passed. File ready.</span>
        </div>
        
        <button
          onClick={onClick}
          className="
            w-full flex items-center justify-center gap-2 bg-[#2ba84a] hover:bg-[#248f3f] text-white 
            font-bold py-4 px-6 rounded shadow-md transition-all active:scale-[0.99]
            text-lg uppercase tracking-wide
          "
        >
          <Download className="w-6 h-6" />
          Download PDF
        </button>
        
        <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
            <span>Server: US-East-1</span>
            <span>Speed: Fast</span>
        </div>
    </div>
  );
};