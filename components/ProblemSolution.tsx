import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, DollarSign, UserX, Clock, MessageSquare, Target, TrendingUp, Users, Zap, Globe } from 'lucide-react';
import { Challenge, Solution } from '../types';

const challenges: Challenge[] = [
  { icon: TrendingDown, title: "Low Online Reach", description: "Your brand is invisible to your potential customers." },
  { icon: DollarSign, title: "High Ad Costs (RTO)", description: "Burning budget without seeing profitable returns." },
  { icon: UserX, title: "Poor Conversion", description: "Lots of clicks, but very few actual paying customers." },
  { icon: Clock, title: "Time Constraints", description: "Managing marketing eats up your valuable business time." },
  { icon: MessageSquare, title: "Zero Engagement", description: "Social posts that get ignored by your audience." },
];

const solutions: Solution[] = [
  { icon: Target, title: "Precision Targeting", description: "We engage only those who are most likely to buy." },
  { icon: TrendingUp, title: "High ROI Strategy", description: "Optimized campaigns designed to double your ROAS." },
  { icon: Users, title: "Qualified Leads", description: "Systems that bring in customers ready to purchase." },
  { icon: Zap, title: "Viral Content", description: "Creative that stops the scroll and drives action." },
  { icon: Globe, title: "Full Management", description: "From click to conversion, we handle the entire funnel." },
];

export const ProblemSolution: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-transparent">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Challenges Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white"
            >
                The Reality Check
            </motion.h2>
            <p className="text-gray-400 font-medium max-w-2xl mx-auto">Most businesses struggle with the same digital roadblocks. Recognize any of these?</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((c, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                key={idx} 
                className="bg-brand-darker/80 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-brand-red/30 transition-all duration-300 group shadow-lg hover:shadow-brand-red/5"
              >
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                  <c.icon className="text-gray-400 group-hover:text-white w-7 h-7 transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{c.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{c.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Transition */}
        <div className="flex justify-center mb-24 relative">
             <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: 100 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="w-0.5 bg-gradient-to-b from-transparent via-brand-red to-transparent absolute"
             ></motion.div>
        </div>

        {/* Solutions Section - Premium Card */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-brand-red to-[#500000] rounded-[2.5rem] p-8 md:p-20 shadow-[0_0_50px_rgba(214,31,38,0.2)] overflow-hidden"
        >
          {/* Background visuals */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">The Arc Solution</h2>
              <p className="text-red-100 font-medium text-lg max-w-2xl mx-auto">We don't rely on luck. We use data, creativity, and proven systems to turn your challenges into growth.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((s, idx) => (
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    key={idx} 
                    className="bg-black/20 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-black/40 transition-all cursor-default"
                >
                   <div className="flex flex-col gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/10">
                         <s.icon className="text-white w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">{s.title}</h4>
                        <p className="text-red-100/70 text-sm leading-relaxed">{s.description}</p>
                      </div>
                   </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};