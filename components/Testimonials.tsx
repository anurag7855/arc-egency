import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingBag, Quote } from 'lucide-react';

const reviews = [
  { brand: "Urban Threads", review: "Arc Studio transformed our ROAS. We went from 1.5x to 4x in just two months. Their ad creatives are unmatched.", author: "Sarah J.", role: "Founder" },
  { brand: "Velvet Vogue", review: "The team understood our luxury aesthetic perfectly. Our engagement rates skyrocketed.", author: "Rohan M.", role: "Marketing Head" },
  { brand: "Denim Culture", review: "Finally an agency that speaks 'fashion'. They scaled our sales during the festive season beyond our targets.", author: "Ankit P.", role: "CEO" },
  { brand: "Street Style Co", review: "Their influencer marketing strategy put us on the map. We are now trending in 3 major cities.", author: "Priya K.", role: "Brand Manager" },
  { brand: "Cotton & Co", review: "Professional, data-driven, and creative. The perfect mix for a D2C clothing brand like ours.", author: "Rahul S.", role: "Co-founder" },
  { brand: "Loom & Weave", review: "We struggled with high RTO. Arc Studio's targeting fixed that. Our profit margins have never been better.", author: "Meera R.", role: "Director" },
  { brand: "Athleisure X", review: "The video ads they produced were viral quality. Sales poured in immediately after launch.", author: "Vikram D.", role: "CMO" },
  { brand: "Silk Route", review: "They handled our website redesign and ads. The seamless experience increased our conversion rate by 150%.", author: "Ayesha T.", role: "Owner" },
  { brand: "Canvas Wear", review: "Best investment for our startup. They act like an internal team rather than an agency.", author: "Arjun N.", role: "Operations Lead" },
  { brand: "Moda India", review: "From branding to performance marketing, Arc Studio delivered excellence. Highly recommended for apparel brands.", author: "Sneha G.", role: "Founder" },
];

const ReviewCard: React.FC<{ data: typeof reviews[0] }> = ({ data }) => (
  <div className="w-[350px] md:w-[400px] flex-shrink-0 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mx-4 hover:border-brand-red/40 transition-colors group relative">
    <Quote className="absolute top-6 right-6 text-white/5 w-10 h-10 group-hover:text-brand-red/10 transition-colors" />
    
    <div className="flex items-center gap-3 mb-6 relative z-10">
       <div className="w-12 h-12 bg-gradient-to-br from-brand-darker to-brand-dark rounded-xl flex items-center justify-center border border-white/10 group-hover:border-brand-red/50 transition-colors shadow-lg">
          <ShoppingBag className="w-6 h-6 text-brand-red" />
       </div>
       <div>
           <h4 className="text-white font-bold text-lg leading-tight">{data.brand}</h4>
           <div className="flex text-yellow-500 gap-0.5 mt-1">
             {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
           </div>
       </div>
    </div>
    
    <p className="text-gray-300 text-sm leading-relaxed mb-6 italic opacity-90 relative z-10">"{data.review}"</p>
    
    <div className="flex items-center gap-3 border-t border-white/5 pt-4">
       <div className="w-8 h-8 rounded-full bg-brand-red/20 flex items-center justify-center text-xs font-bold text-brand-red border border-brand-red/20">
         {data.author.charAt(0)}
       </div>
       <div>
         <p className="text-white text-sm font-semibold">{data.author}</p>
         <p className="text-xs text-gray-500">{data.role}</p>
       </div>
    </div>
  </div>
);

export const Testimonials: React.FC = () => {
  const firstRow = reviews.slice(0, 5);
  const secondRow = reviews.slice(5, 10);

  return (
    <section className="py-24 bg-black/20 backdrop-blur-sm overflow-hidden relative border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-dark/50 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 mb-16 relative z-10 text-center">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white"
        >
            Trusted by <span className="text-brand-red">Fashion Brands</span>
        </motion.h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Helping clothing lines scale from local boutiques to national sensations.</p>
      </div>

      <div className="relative flex flex-col gap-8">
         {/* Row 1 - Left to Right */}
        <div className="flex overflow-hidden">
            <motion.div 
                animate={{ x: [0, -1000] }} 
                transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
                className="flex"
            >
                {[...firstRow, ...firstRow, ...firstRow].map((review, idx) => (
                    <ReviewCard key={`row1-${idx}`} data={review} />
                ))}
            </motion.div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="flex overflow-hidden">
            <motion.div 
                animate={{ x: [-1000, 0] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                className="flex"
            >
                {[...secondRow, ...secondRow, ...secondRow].map((review, idx) => (
                    <ReviewCard key={`row2-${idx}`} data={review} />
                ))}
            </motion.div>
        </div>

        {/* Gradient Fade for Marquee Edges */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-brand-dark to-transparent z-20 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-brand-dark to-transparent z-20 pointer-events-none"></div>
      </div>
    </section>
  );
};