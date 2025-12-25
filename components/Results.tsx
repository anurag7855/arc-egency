import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Briefcase, TrendingUp } from 'lucide-react';

export const Results: React.FC = () => {
  const stats = [
    { label: "ROAS Achieved", value: "2.5x", desc: "In recent ad campaigns" },
    { label: "Drop in RTO", value: "60%", desc: "For multiple clients" },
    { label: "Reach Generated", value: "100K+", desc: "In just 1 week" },
    { label: "Client Retention", value: "90%", desc: "Long-term partnerships" },
  ];

  const features = [
    "3+ Years of Experience",
    "Customized Strategy",
    "Data-Driven Results",
    "Creative Team",
    "24/7 Support",
    "One-Stop Solution"
  ];

  return (
    <section id="results" className="py-24 relative bg-transparent border-t border-white/5 scroll-mt-28">
      <div className="container mx-auto px-6">
        
        {/* Section 1: Success Stats */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white">Client Success</h2>
            <p className="text-brand-red font-bold text-lg tracking-wide uppercase">Results that speak louder than words</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, type: "spring" }}
                key={idx} 
                className="bg-brand-dark/60 backdrop-blur-md p-6 rounded-2xl border border-white/5 text-center hover:border-brand-red/50 transition-colors group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-brand-red/5 scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-500"></div>
                <div className="relative z-10">
                    <h3 className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</h3>
                    <p className="text-brand-red font-bold mb-3 uppercase text-sm">{stat.label}</p>
                    <p className="text-xs text-gray-400 font-light">{stat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
             <div className="inline-flex items-center gap-3 bg-white/5 px-8 py-4 rounded-full border border-white/10 backdrop-blur-sm shadow-xl">
                 <Briefcase className="w-6 h-6 text-brand-red" />
                 <span className="text-gray-300 text-lg">
                   Trusted by <span className="font-bold text-white">15+ brands</span> across various niches
                 </span>
             </div>
          </motion.div>
        </div>

        {/* Section 2: Why Us */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight text-white">
              Why <span className="text-brand-red">Choose Arc?</span>
            </h2>
            <p className="text-gray-400 mb-10 text-lg">We don't offer generic packages. We become your growth partners.</p>
            
            <div className="grid gap-5">
              {features.map((feature, idx) => (
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    key={idx} 
                    className="flex items-center gap-4 group"
                >
                  <div className="w-6 h-6 rounded-full bg-brand-red/20 flex items-center justify-center group-hover:bg-brand-red transition-colors">
                    <CheckCircle className="text-brand-red w-4 h-4 flex-shrink-0 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
             <div className="absolute inset-0 bg-brand-red rounded-3xl transform rotate-6 opacity-20 blur-xl"></div>
             <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
                 <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Team Working" 
                className="w-full object-cover hover:scale-105 transition-transform duration-700"
                />
                 {/* Floating Overlay Card */}
                 <div className="absolute bottom-8 right-8 bg-brand-dark/90 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl max-w-xs">
                     <div className="flex items-center gap-3 mb-2">
                         <div className="p-2 bg-green-500/20 rounded-lg">
                             <TrendingUp className="w-5 h-5 text-green-500" />
                         </div>
                         <span className="text-white font-bold">Growth Focused</span>
                     </div>
                     <p className="text-xs text-gray-400">Every strategy is built to increase your bottom line.</p>
                 </div>
             </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};