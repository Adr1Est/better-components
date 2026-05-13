import { useState } from 'react';
import { ChevronRight, ChevronLeft, X } from 'lucide-react';
import { steps } from '@/utils/modalSteps';
import { useUserPreferences } from '@/store';

export default function OnboardingModal() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isMounted, setIsMounted] = useState(true);
  const [dontShowAgain, setDontShowAgain] = useState(false);
  const setHasSeenOnboarding = useUserPreferences((state) => state.setHasSeenOnboarding);

  const handleClose = () => {
    setIsMounted(false);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setHasSeenOnboarding(dontShowAgain);
      handleClose();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const step = steps[currentStep];

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${isMounted ? 'bg-slate-900/40 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div 
        className={`relative w-full max-w-md p-8 md:p-10 bg-surface-700 rounded-4xl shadow-2xl transition-all duration-300 transform ${isMounted ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'}`}
      >
        {/* Close Button */}
        <button 
          onClick={handleClose} 
          className="absolute top-6 right-6 text-slate-200 hover:text-slate-600 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-1.5 mb-10">
          {steps.map((_, i) => (
            <div 
              key={i} 
              className={`h-2 rounded-full transition-all duration-500 ${i === currentStep ? `${step.color} w-8` : 'bg-slate-200 w-2'}`}
            />
          ))}
        </div>

        {/* Content Container */}
        <div className="flex flex-col items-center text-center min-h-75">
          <div className={`mb-6 p-5 rounded-3xl transition-colors duration-500 ${step.lightColor}`}>
            {step.icon}
          </div>
          
          <h2 className="text-2xl font-extrabold text-slate-300 mb-3 tracking-tight">
            {step.title}
          </h2>
          
          <p className="text-slate-300 leading-relaxed mb-8">
            {step.description}
          </p>

          {/* Checkbox (Only on last step) */}
          {currentStep === steps.length - 1 && (
            <label className="mt-auto mb-8 flex items-center gap-3 cursor-pointer select-none group transition-opacity duration-300">
              <input
                type="checkbox"
                checked={dontShowAgain}
                onChange={(e) => setDontShowAgain(e.target.checked)}
                className="w-4 h-4 accent-tertiary-300 cursor-pointer"
              />
              <span className="text-sm font-medium text-slate-300 group-hover:text-slate-200">
                No volver a mostrar este mensaje
              </span>
            </label>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="flex items-center justify-between w-full mt-4">
          <button 
            onClick={prevStep} 
            className={`flex items-center gap-1.5 py-2 text-sm font-bold transition-all ${currentStep === 0 ? 'opacity-0 pointer-events-none' : 'text-slate-300 hover:text-slate-200'}`}
          >
            <ChevronLeft size={18} />
            Atrás
          </button>
          
          <button 
            onClick={nextStep} 
            className={`flex items-center gap-2 py-3.5 px-8 rounded-2xl text-white font-bold transition-all active:scale-95 shadow-lg ${step.color} ${step.shadow} hover:brightness-110`}
          >
            {currentStep === steps.length - 1 ? 'Comenzar' : 'Siguiente'} 
            {currentStep !== steps.length - 1 && <ChevronRight size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
}