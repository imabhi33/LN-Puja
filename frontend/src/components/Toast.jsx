import { useEffect } from 'react';

export default function Toast({ message, type = 'success', onClose, duration = 4000 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const typeConfig = {
    success: {
      bg: 'gradient-primary',
      icon: (
        <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )
    },
    error: {
      bg: 'bg-gradient-to-r from-red-500 to-red-600',
      icon: (
        <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      )
    },
    warning: {
      bg: 'bg-gradient-to-r from-yellow-500 to-orange-500',
      icon: (
        <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
      )
    },
    info: {
      bg: 'gradient-secondary',
      icon: (
        <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      )
    }
  };

  const config = typeConfig[type];

  return (
    <div className="fixed top-6 right-6 z-50 animate-slide-in">
      <div className={`${config.bg} text-white p-4 rounded-2xl shadow-strong max-w-sm backdrop-blur-md border border-white/20`}>
        <div className="flex items-start space-x-3">
          {config.icon}
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm leading-relaxed">{message}</p>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 ml-2 text-white/80 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Progress bar */}
        <div className="mt-3 w-full bg-white/20 rounded-full h-1 overflow-hidden">
          <div 
            className="h-full bg-white/60 rounded-full animate-progress"
            style={{ 
              animation: `progress ${duration}ms linear forwards`
            }}
          ></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes progress {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </div>
  );
}