import React, { useState, useEffect } from 'react';
import { Check, Loader2 } from 'lucide-react';
import { VerificationStatus } from '../types';

interface CaptchaWidgetProps {
  status: VerificationStatus;
  onVerify: () => void;
}

export const CaptchaWidget: React.FC<CaptchaWidgetProps> = ({ status, onVerify }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (status === VerificationStatus.IDLE) {
      onVerify();
    }
  };

  return (
    <div 
      className="mx-auto w-full max-w-[300px] bg-[#f9f9f9] border border-[#d3d3d3] rounded-[3px] shadow-sm p-3 flex items-center justify-between select-none"
    >
      <div className="flex items-center gap-3">
        {/* Checkbox Container */}
        <div 
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`
            w-[28px] h-[28px] bg-white border-2 rounded-[2px] flex items-center justify-center cursor-pointer transition-colors duration-200
            ${status === VerificationStatus.IDLE && isHovered ? 'border-[#b2b2b2]' : 'border-[#c1c1c1]'}
            ${status === VerificationStatus.VERIFYING ? 'cursor-wait' : ''}
            ${status === VerificationStatus.VERIFIED ? 'border-transparent' : ''}
          `}
        >
          {status === VerificationStatus.IDLE && (
            <div className="w-full h-full" />
          )}

          {status === VerificationStatus.VERIFYING && (
            <Loader2 className="w-5 h-5 text-indigo-500 animate-spin" />
          )}

          {status === VerificationStatus.VERIFIED && (
            <Check className="w-7 h-7 text-[#0f9d58]" strokeWidth={3} />
          )}
        </div>

        <span className="text-[14px] font-medium text-[#282828] cursor-default" onClick={handleClick}>
          I'm not a robot
        </span>
      </div>

      {/* Fake ReCaptcha Branding */}
      <div className="flex flex-col items-center justify-center gap-[2px] opacity-70">
        <div className="w-6 h-6 relative">
             <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="security" className="w-full h-full object-contain" />
        </div>
        <div className="text-[9px] text-[#555] leading-tight">reCAPTCHA</div>
        <div className="flex gap-1 text-[8px] text-[#555] leading-tight">
            <span>Privacy</span>
            <span>-</span>
            <span>Terms</span>
        </div>
      </div>
    </div>
  );
};