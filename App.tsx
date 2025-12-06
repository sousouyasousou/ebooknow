import React, { useState, useCallback } from 'react';
import { BlurredEbook } from './components/BlurredEbook';
import { CaptchaWidget } from './components/CaptchaWidget';
import { DownloadButton } from './components/DownloadButton';
import { VerificationStatus } from './types';
import { Search, Menu, FileText, Globe, Calendar, HardDrive } from 'lucide-react';

const App: React.FC = () => {
  const [status, setStatus] = useState<VerificationStatus>(VerificationStatus.IDLE);
  const [showDownload, setShowDownload] = useState(false);

  // Simulate the verification process
  const handleVerify = useCallback(() => {
    if (status !== VerificationStatus.IDLE) return;

    setStatus(VerificationStatus.VERIFYING);

    // Fake network request/processing delay
    setTimeout(() => {
      setStatus(VerificationStatus.VERIFIED);
      
      // Small delay before showing the download button for better UX flow
      setTimeout(() => {
        setShowDownload(true);
      }, 400);
    }, 1800);
  }, [status]);

  const handleDownload = () => {
    window.open("https://sites.google.com/view/downloadpdfs/home", "_blank");
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex flex-col font-sans">
      
      {/* Navbar - Mimics standard site navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-end">
            <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center bg-gray-100 rounded-full px-3 py-1.5 border border-gray-200">
                    <Search className="w-4 h-4 text-gray-400" />
                    <input type="text" placeholder="Search files..." disabled className="bg-transparent border-none outline-none text-sm ml-2 w-32 placeholder-gray-400 cursor-not-allowed"/>
                </div>
                <Menu className="w-6 h-6 text-slate-700 md:hidden" />
            </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow p-4 md:py-10">
        <div className="max-w-4xl mx-auto">
            
            {/* Main File Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="md:flex">
                    
                    {/* Left Column: Image */}
                    <div className="md:w-2/5 p-8 bg-slate-50 border-r border-gray-100 flex flex-col items-center justify-center">
                        <BlurredEbook />
                        <div className="mt-6 flex gap-2 justify-center">
                            <span className="px-2 py-1 bg-gray-200 text-gray-600 text-xs rounded font-medium">Preview Unavailable</span>
                        </div>
                    </div>

                    {/* Right Column: Details & Action */}
                    <div className="md:w-3/5 p-8">
                        <div className="mb-6 border-b border-gray-100 pb-6">
                            <h1 className="text-2xl font-bold text-slate-800 mb-4">
                                [Protected_Document_#88293.pdf]
                            </h1>
                            
                            <div className="space-y-3">
                                <p className="text-lg font-medium text-slate-800">
                                    Ready to read your e-book?
                                </p>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Help us confirm you're human by completing a quick survey.
                                </p>
                                <p className="text-emerald-600 font-medium text-sm pt-1 flex items-center gap-2">
                                     <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                     Enjoy unlimited reading without subscriptions or login
                                </p>
                            </div>
                        </div>

                        {/* Metadata Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-red-50 rounded text-red-500">
                                    <FileText className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase font-semibold">Format</p>
                                    <p className="text-sm font-medium text-slate-700">PDF (Portable Document)</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-50 rounded text-blue-500">
                                    <HardDrive className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase font-semibold">Size</p>
                                    <p className="text-sm font-medium text-slate-700">4.2 MB</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-purple-50 rounded text-purple-500">
                                    <Globe className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase font-semibold">Language</p>
                                    <p className="text-sm font-medium text-slate-700">English</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-orange-50 rounded text-orange-500">
                                    <Calendar className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase font-semibold">Uploaded</p>
                                    <p className="text-sm font-medium text-slate-700">December 2025</p>
                                </div>
                            </div>
                        </div>

                        {/* Action Section */}
                        <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                            {!showDownload ? (
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-sm font-semibold text-slate-700">Security Verification</h3>
                                        <span className="text-xs text-gray-400">Required</span>
                                    </div>
                                    <div className={status === VerificationStatus.VERIFIED ? 'pointer-events-none opacity-50 transition-opacity' : ''}>
                                        <CaptchaWidget status={status} onVerify={handleVerify} />
                                    </div>
                                </div>
                            ) : (
                                <DownloadButton onClick={handleDownload} />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Related/Fake Sections - visual filler to match "website" look */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 opacity-60 pointer-events-none select-none grayscale">
                <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
                <div className="space-y-3">
                     <div className="h-24 bg-white rounded border border-gray-200"></div>
                     <div className="h-24 bg-white rounded border border-gray-200"></div>
                </div>
                <div className="space-y-3">
                     <div className="h-24 bg-white rounded border border-gray-200"></div>
                     <div className="h-24 bg-white rounded border border-gray-200"></div>
                </div>
                <div className="space-y-3">
                     <div className="h-24 bg-white rounded border border-gray-200"></div>
                     <div className="h-24 bg-white rounded border border-gray-200"></div>
                </div>
            </div>

        </div>
      </main>

      {/* Standard Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 mt-auto">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <div className="mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Inc.
            </div>
            <div className="flex gap-6">
                <span>Terms of Service</span>
                <span>Privacy Policy</span>
                <span>DMCA</span>
                <span>Contact</span>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;