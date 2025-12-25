import React from 'react';
import { motion } from 'framer-motion';
import { ProcessStep } from '../types';

const steps: ProcessStep[] = [
  { number: '01', title: 'Business Research', description: 'We dive deep into your market, competitors, and customer psychology.', subtext: 'Deep analysis before action.' },
  { number: '02', title: 'Strategy Building', description: 'Creating a custom roadmap with KPIs aligned to your revenue goals.', subtext: 'No generic templates.' },
  { number: '03', title: 'Creative & Content', description: 'Designing high-converting visuals and copy that demand attention.', subtext: 'Art meets algorithm.' },
  { number: '04', title: 'Campaign Launch', description: 'Executing ads across Google, Meta, and Social channels.', subtext: 'Precision targeting.' },
  { number: '05', title: 'Optimize & Scale', description: 'Continuous A/B testing to lower costs and increase ROAS.', subtext: 'Data-driven improvements.' },
  { number: '06', title: 'Reporting', description: 'Transparent weekly reports showing exactly where your money went.', subtext: 'Total clarity.' },
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-black/30 backdrop-blur-sm relative scroll-mt-28 overflow-hidden border-t border-white/5">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white"
          >
            How We Work
          </motion.h2>
          <div className="h-1 w-20 bg-brand-red mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">A systematic approach to predictable growth.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => (
            <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group h-full"
            >
              <div className="bg-brand-dark/80 backdrop-blur-sm p-8 rounded-2xl border border-white/5 h-full hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-brand-red/10 relative overflow-hidden z-10">
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                    <h3 className="text-xl font-bold text-brand-red">{step.title}</h3>
                    <span className="text-5xl font-heading font-black text-white/5 group-hover:text-brand-red/20 transition-colors absolute -top-2 right-0 select-none">
                        {step.number}
                    </span>
                    </div>
                    <p className="text-gray-300 mb-4 font-medium">{step.description}</p>
                    <p className="text-xs text-gray-500 italic border-t border-white/5 pt-4">{step.subtext}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};