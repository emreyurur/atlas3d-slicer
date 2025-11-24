// app/components/LoadingSpinner.tsx
"use client";

interface LoadingSpinnerProps {
  progress: string;
}

export default function LoadingSpinner({ progress }: LoadingSpinnerProps) {
  return (
    <div className="loadingOverlay">
      <div className="loadingModal">
        <div className="spinnerWrapper">
          {/* Outer rotating ring */}
          <div className="outerRing"></div>
          {/* Middle rotating ring */}
          <div className="middleRing"></div>
          {/* Inner pulsing circle */}
          <div className="innerCircle"></div>
          {/* Center icon */}
          <div className="centerIcon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path 
                d="M12 2L2 7L12 12L22 7L12 2Z" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M2 17L12 22L22 17" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M2 12L12 17L22 12" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        
        <h3 className="loadingTitle">İşlem Devam Ediyor</h3>
        <p className="loadingProgress">{progress}</p>
        
        {/* Animated progress bar */}
        <div className="progressBarContainer">
          <div className="progressBarTrack">
            <div className="progressBarAnimated"></div>
          </div>
        </div>
        
        <p className="loadingHint">Lütfen sayfayı kapatmayın...</p>
      </div>

      <style jsx>{`
        .loadingOverlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          animation: fadeIn 0.3s ease-out;
        }
        
        .loadingModal {
          background: linear-gradient(135deg, #1e1e1e 0%, #2a2a2a 100%);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 1rem;
          padding: 3rem 2.5rem;
          min-width: 400px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 
                      0 0 40px rgba(59, 130, 246, 0.1);
          animation: scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .spinnerWrapper {
          position: relative;
          width: 160px;
          height: 160px;
          margin: 0 auto 2rem;
        }
        
        .outerRing {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 3px solid transparent;
          border-top-color: #3b82f6;
          border-right-color: #3b82f6;
          border-radius: 50%;
          animation: spin 2s linear infinite;
        }
        
        .middleRing {
          position: absolute;
          width: 75%;
          height: 75%;
          top: 12.5%;
          left: 12.5%;
          border: 3px solid transparent;
          border-bottom-color: #8b5cf6;
          border-left-color: #8b5cf6;
          border-radius: 50%;
          animation: spin 1.5s linear infinite reverse;
        }
        
        .innerCircle {
          position: absolute;
          width: 50%;
          height: 50%;
          top: 25%;
          left: 25%;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.2), transparent);
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }
        
        .centerIcon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #3b82f6;
          animation: float 3s ease-in-out infinite;
        }
        
        .loadingTitle {
          text-align: center;
          font-size: 1.5rem;
          font-weight: 600;
          color: #fff;
          margin: 0 0 0.75rem 0;
        }
        
        .loadingProgress {
          text-align: center;
          font-size: 1rem;
          color: #3b82f6;
          margin: 0 0 1.5rem 0;
          min-height: 24px;
          animation: fadeInOut 2s ease-in-out infinite;
        }
        
        .progressBarContainer {
          margin: 0 0 1rem 0;
        }
        
        .progressBarTrack {
          width: 100%;
          height: 4px;
          background: rgba(59, 130, 246, 0.2);
          border-radius: 2px;
          overflow: hidden;
        }
        
        .progressBarAnimated {
          height: 100%;
          width: 40%;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6, #3b82f6);
          background-size: 200% 100%;
          border-radius: 2px;
          animation: progressMove 1.5s ease-in-out infinite;
        }
        
        .loadingHint {
          text-align: center;
          font-size: 0.875rem;
          color: #888;
          margin: 0;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.6;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-10px);
          }
        }
        
        @keyframes fadeInOut {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        @keyframes progressMove {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(350%);
          }
        }
        
        @media (max-width: 640px) {
          .loadingModal {
            min-width: 90%;
            padding: 2rem 1.5rem;
          }
          
          .spinnerWrapper {
            width: 120px;
            height: 120px;
          }
        }
      `}</style>
    </div>
  );
}
