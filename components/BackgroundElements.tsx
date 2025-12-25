import React from 'react';
import { motion } from 'framer-motion';

export const RedOrb: React.FC<{ className?: string, delay?: number }> = ({ className = "", delay = 0 }) => {
  return (
    <motion.div 
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.3, 0.2], 
      }}
      transition={{ 
        duration: 8, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay: delay 
      }}
      className={`absolute rounded-full bg-brand-red blur-[100px] pointer-events-none ${className}`} 
    />
  );
};

export const FloatingCircle: React.FC<{ className?: string, size?: string, duration?: number }> = ({ className = "", size = "h-4 w-4", duration = 4 }) => {
    return (
        <motion.div 
            animate={{ 
                y: [0, -20, 0],
                opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
                duration: duration, 
                repeat: Infinity, 
                ease: "easeInOut" 
            }}
            className={`absolute rounded-full bg-brand-red ${size} ${className}`} 
        />
    );
};

export const GlobalBackground: React.FC = () => {
  // Generate stable random positions for stars to avoid hydration mismatch or jitter
  const stars = React.useMemo(() => Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 2
  })), []);

  return (
    <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden bg-brand-dark pointer-events-none">
       {/* Base Noise */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
       
       {/* Moving Gradient Orbs */}
       <motion.div 
          animate={{ 
              x: [0, 100, -100, 0], 
              y: [0, -100, 100, 0],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-red rounded-full blur-[120px]"
       />
       <motion.div 
          animate={{ 
              x: [0, -150, 50, 0], 
              y: [0, 100, -50, 0],
              scale: [1, 1.5, 1],
              opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900 rounded-full blur-[120px]"
       />
       <motion.div 
          animate={{ 
              x: [0, 50, -50, 0], 
              y: [0, 50, 50, 0],
              opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red rounded-full blur-[150px]"
       />

       {/* Twinkling Stars */}
       {stars.map((star) => (
          <motion.div
              key={star.id}
              className="absolute bg-white rounded-full shadow-[0_0_5px_white]"
              style={{
                  top: star.top,
                  left: star.left,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
              }}
              animate={{ opacity: [0.1, 0.7, 0.1], scale: [1, 1.2, 1] }}
              transition={{
                  duration: star.duration,
                  repeat: Infinity,
                  delay: star.delay,
                  ease: "easeInOut"
              }}
          />
       ))}

       {/* Shooting Stars */}
       <motion.div
          initial={{ top: -100, left: '10%', opacity: 0 }}
          animate={{ top: '100%', left: '120%', opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 7, ease: "easeInOut" }}
          className="absolute w-[2px] h-[150px] bg-gradient-to-b from-transparent via-white to-transparent -rotate-45"
       />
       <motion.div
          initial={{ top: -100, left: '60%', opacity: 0 }}
          animate={{ top: '100%', left: '-20%', opacity: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 12, ease: "easeInOut", delay: 2 }}
          className="absolute w-[2px] h-[150px] bg-gradient-to-b from-transparent via-brand-red to-transparent rotate-45"
       />
    </div>
  )
};