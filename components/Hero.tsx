import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { RedOrb, FloatingCircle } from './BackgroundElements';

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const clientImages = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <RedOrb className="w-[600px] h-[600px] top-[-10%] left-[-10%]" />
      <RedOrb className="w-[500px] h-[500px] bottom-0 right-0 translate-x-1/3 translate-y-1/3" delay={2} />
      
      <FloatingCircle className="top-1/4 left-10 w-6 h-6" duration={5} />
      <FloatingCircle className="bottom-1/3 right-20 w-8 h-8 opacity-50" duration={7} />
      <FloatingCircle className="top-32 right-1/4 w-3 h-3" duration={3} />

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-left"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-brand-red to-orange-500 rounded-full shadow-[0_0_10px_rgba(214,31,38,0.5)]"></div>
            <span className="text-brand-red font-bold uppercase tracking-[0.2em] text-sm">Digital Marketing Agency</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-heading font-extrabold leading-tight mb-6 text-white tracking-tight">
            Grow Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-red-400 to-orange-500 animate-gradient-x">
              Business Online
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-brand-muted text-lg md:text-xl mb-8 max-w-lg leading-relaxed border-l-2 border-brand-red/30 pl-6">
            We help you achieve <span className="text-white font-semibold">2x ROAS</span> and reduce ad costs. Transform your digital presence with Arc Studio's expert strategies.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="group relative flex items-center justify-center gap-2 bg-brand-red text-white px-8 py-4 rounded-full font-bold text-lg overflow-hidden transition-all shadow-[0_0_20px_rgba(214,31,38,0.4)] hover:shadow-[0_0_30px_rgba(214,31,38,0.6)] hover:scale-105">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative z-10">Start Growing</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#about" className="flex items-center justify-center gap-2 border border-white/10 bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 hover:border-brand-red/50 transition-all">
              Learn More
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 flex items-center gap-4">
             <div className="flex -space-x-4">
                {clientImages.map((src, i) => (
                    <motion.img 
                        whileHover={{ y: -5, scale: 1.1, zIndex: 10 }}
                        key={i}
                        className="w-12 h-12 rounded-full border-2 border-brand-dark cursor-pointer object-cover" 
                        src={src} 
                        alt="Client" 
                    />
                ))}
             </div>
             <div>
                <div className="flex items-center gap-1 text-yellow-400 mb-1">
                    {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
                </div>
                <p className="text-sm font-semibold text-gray-400">Trusted by 15+ Brands</p>
             </div>
          </motion.div>
        </motion.div>

        {/* Right Image/Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          className="relative hidden md:block perspective-1000"
        >
          <motion.div 
            whileHover={{ rotateY: -5, rotateX: 5 }}
            className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-brand-red/20"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Team Strategy" 
              className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
            />
            {/* Overlay badge */}
            <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-6 left-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-2xl flex items-center gap-4"
            >
              <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center text-white">
                  <Play className="w-4 h-4 fill-current" />
              </div>
              <div>
                  <span className="block text-white font-bold text-sm">Anurag Baghel</span>
                  <span className="text-xs text-gray-300">Founder & Strategist</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Decorative Elements */}
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -top-12 -right-12 w-48 h-48 border border-dashed border-brand-red/30 rounded-full z-0"></motion.div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-red rounded-full opacity-20 z-0 blur-2xl"></div>
        </motion.div>
      </div>
    </section>
  );
};