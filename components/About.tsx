import React from 'react';
import { motion } from 'framer-motion';
import { Search, Monitor, Share2, PenTool, Layout, Users, Globe, Code } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  { title: 'SEO', description: 'Ranking & Traffic', icon: Search },
  { title: 'Google Ads', description: 'PPC & ROI', icon: Monitor },
  { title: 'Meta Ads', description: 'Scale & Sales', icon: Share2 },
  { title: 'Social Media', description: 'Growth & Branding', icon: Users },
  { title: 'Content Writing', description: 'Copy that Sells', icon: PenTool },
  { title: 'Influencer Marketing', description: 'Viral Reach', icon: Globe },
  { title: 'Graphic Design', description: 'Visual Identity', icon: Layout },
  { title: 'Web Design', description: 'High Performance', icon: Code }, 
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-black/20 backdrop-blur-sm relative scroll-mt-20 overflow-hidden border-t border-white/5">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-red/5 to-transparent hidden lg:block pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white">
              WHO <span className="text-brand-red">WE ARE</span>
            </h2>
            <div className="h-1.5 w-24 bg-brand-red mb-8 rounded-full"></div>
            
            <p className="text-xl text-gray-300 mb-10 font-light leading-relaxed">
              We are a team of expert digital marketers with <span className="text-brand-red font-bold">3+ years of experience</span>. We don't just run ads; we build systems that generate revenue.
            </p>

            <motion.div 
                id="services" 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    visible: { transition: { staggerChildren: 0.1 } }
                }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 shadow-2xl scroll-mt-32"
            >
               <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                 <span className="w-2 h-8 bg-brand-red rounded-full"></span>
                 At <span className="text-brand-red">Arc Studio</span>, we offer:
               </h3>
               <div className="grid sm:grid-cols-2 gap-4">
                  {services.map((s, idx) => (
                    <motion.div 
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
                        key={idx} 
                        className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 transition-colors group cursor-default"
                    >
                      <div className="p-2 bg-brand-darker rounded-lg group-hover:bg-brand-red/20 transition-colors">
                          {s.icon && <s.icon className="w-5 h-5 text-brand-red group-hover:text-white transition-colors" />}
                      </div>
                      <div>
                        <span className="font-bold block text-white">{s.title}</span>
                        {s.description && <span className="text-xs text-gray-500 uppercase tracking-wider">{s.description}</span>}
                      </div>
                    </motion.div>
                  ))}
               </div>
            </motion.div>

            <motion.div 
                whileHover={{ x: 10 }}
                className="mt-10 p-6 bg-gradient-to-r from-brand-red/20 to-transparent border-l-4 border-brand-red rounded-r-xl"
            >
              <p className="text-lg italic text-gray-200">
                "Our goal is to reduce your ad costs (RTO%), help you achieve <span className="font-bold text-white text-xl">2x ROAS</span>, and grow your brand online."
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Images (Collage style) */}
          <div className="relative h-full min-h-[600px] flex items-center justify-center lg:pt-20">
             <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-md"
             >
                {/* Back Image */}
                <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 right-0 w-4/5 h-72 rounded-3xl overflow-hidden border border-white/10 shadow-lg transform translate-x-8 -translate-y-12 z-0"
                >
                    <div className="absolute inset-0 bg-brand-red/20 mix-blend-overlay z-10"></div>
                  <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Team" className="w-full h-full object-cover grayscale" />
                </motion.div>
                
                {/* Front Image - Main focus */}
                <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="relative top-12 left-0 w-4/5 h-96 bg-brand-dark rounded-3xl overflow-hidden border-4 border-brand-dark shadow-[0_0_50px_rgba(0,0,0,0.5)] z-20"
                >
                   <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Meeting" className="w-full h-full object-cover" />
                   {/* Gradient Overlay */}
                   <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent"></div>
                   <div className="absolute bottom-6 left-6 text-white">
                        <p className="font-heading font-bold text-2xl">Strategy First.</p>
                        <p className="text-brand-red">Execution Always.</p>
                   </div>
                </motion.div>

                {/* Decorative Red Dot */}
                <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute bottom-1/3 -right-6 w-24 h-24 bg-brand-red rounded-full blur-2xl z-10"
                ></motion.div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};