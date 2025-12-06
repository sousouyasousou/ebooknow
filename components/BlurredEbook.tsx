import React from 'react';
import { Lock } from 'lucide-react';

export const BlurredEbook: React.FC = () => {
  return (
    <div className="relative w-full max-w-[240px] mx-auto aspect-[2/3]">
      {/* Container for the book */}
      <div className="relative w-full h-full rounded shadow-lg border border-gray-200 bg-gray-100 overflow-hidden group">
        
        {/* The blurred image */}
        <div className="w-full h-full relative">
           <img 
            src="https://picsum.photos/400/600?random=1" 
            alt="Protected Content" 
            className="w-full h-full object-cover filter blur-[6px] opacity-95 transition-all duration-300 group-hover:blur-[8px]"
          />
           {/* Dark overlay for contrast */}
           <div className="absolute inset-0 bg-black/5"></div>
        </div>

        {/* Lock Icon Overlay - Visual cue for "Locked" content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <div className="bg-slate-900/80 backdrop-blur-sm p-3 rounded-full shadow-lg mb-2">
            <Lock className="w-6 h-6 text-white" />
          </div>
          <span className="text-white font-bold text-sm drop-shadow-md tracking-wider uppercase">Preview Locked</span>
        </div>
      </div>
      
      {/* Realistic Shadow */}
      <div className="absolute bottom-0 left-2 right-2 h-4 bg-black/30 blur-lg rounded-[50%] -z-10"></div>
    </div>
  );
};