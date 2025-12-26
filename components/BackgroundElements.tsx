import React from 'react';

// Use CSS animation classes defined in index.html instead of framer-motion for simple blobs
// This significantly reduces main thread load
export const RedOrb: React.FC<{ className?: string, delay?: number }> = ({ className = "", delay = 0 }) => {
  return (
    <div 
      className={`absolute rounded-full bg-brand-red blur-[80px] opacity-20 animate-blob mix-blend-screen pointer-events-none gpu-accelerated ${className}`} 
      style={{ animationDelay: `${delay}s` }}
    />
  );
};

export const FloatingCircle: React.FC<{ className?: string, size?: string, duration?: number }> = ({ className = "", size = "h-4 w-4", duration }) => {
    return (
        <div 
            className={`absolute rounded-full bg-brand-red ${size} animate-float opacity-60 pointer-events-none gpu-accelerated ${className}`} 
            style={duration ? { animationDuration: `${duration}s` } : undefined}
        />
    );
};

export const GlobalBackground: React.FC = () => {
  // Static stars with CSS twinkle to avoid React re-renders and JS animation overhead
  // Reduced count from 20 to 12
  const stars = React.useMemo(() => Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1, // Smaller stars look sharper
    delay: `${Math.random() * 5}s`,
    duration: `${Math.random() * 3 + 2}s`
  })), []);

  return (
    <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden bg-brand-dark pointer-events-none">
       {/* Static Noise Image (lighter than SVG pattern) */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02]"></div>
       
       {/* CSS Animated Gradients - Much lighter on GPU */}
       <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-brand-red rounded-full blur-[100px] opacity-10 animate-blob mix-blend-screen gpu-accelerated" style={{ animationDelay: '0s' }}></div>
       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900 rounded-full blur-[100px] opacity-10 animate-blob mix-blend-screen gpu-accelerated" style={{ animationDelay: '2s' }}></div>
       
       {/* Stars using pure CSS animation */}
       {stars.map((star) => (
          <div
              key={star.id}
              className="absolute bg-white rounded-full shadow-[0_0_2px_white]"
              style={{
                  top: star.top,
                  left: star.left,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  opacity: 0.2,
                  animation: `pulse ${star.duration} infinite ease-in-out ${star.delay}`
              }}
          />
       ))}

       {/* CSS Keyframes for Star Pulse locally scoped if needed, or rely on global styles */}
       <style>{`
         @keyframes pulse {
           0%, 100% { opacity: 0.2; transform: scale(1); }
           50% { opacity: 0.8; transform: scale(1.2); }
         }
         @keyframes shoot {
           0% { transform: translateX(0) translateY(0) rotate(45deg); opacity: 1; }
           100% { transform: translateX(-500px) translateY(500px) rotate(45deg); opacity: 0; }
         }
       `}</style>
    </div>
  )
};