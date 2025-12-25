import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Send, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, email, message } = formData;
    const subject = `New Inquiry from ${name} - Arc Studio Website`;
    const body = `Name: ${name}%0D%0APhone: ${phone}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    window.location.href = `mailto:asartist20@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  const contactInfo = [
      { icon: Phone, title: "Call Us", value: "+91 7855059740" },
      { icon: Mail, title: "Email Us", value: "asartist20@gmail.com" },
      { icon: MapPin, title: "Location", value: "Arc Studio HQ" },
  ];

  return (
    <section id="contact" className="relative py-24 bg-transparent overflow-hidden scroll-mt-28 border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left Info */}
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white">
              Let’s <span className="text-brand-red">Grow</span><br />
              Together 🚀
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Ready to take your business to the next level? Fill out the form or reach out directly.
            </p>

            <div className="space-y-8 mb-12">
              {contactInfo.map((info, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-300 shadow-lg">
                      <info.icon className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1 font-medium tracking-wide uppercase">{info.title}</p>
                      <p className="text-2xl font-bold text-white">{info.value}</p>
                    </div>
                  </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Form Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-dark/60 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl"
          >
            <h3 className="text-3xl font-bold mb-8 text-white">Start Your Journey</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                 <div>
                    <label className="block text-xs font-bold text-brand-red uppercase tracking-wider mb-2">Name</label>
                    <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-brand-dark/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all placeholder-gray-600" 
                    placeholder="John Doe" 
                    />
                 </div>
                 <div>
                    <label className="block text-xs font-bold text-brand-red uppercase tracking-wider mb-2">Phone</label>
                    <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-brand-dark/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all placeholder-gray-600" 
                    placeholder="+91 ..." 
                    />
                 </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-brand-red uppercase tracking-wider mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-brand-dark/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all placeholder-gray-600" 
                  placeholder="john@example.com" 
                />
              </div>
              <div>
                 <label className="block text-xs font-bold text-brand-red uppercase tracking-wider mb-2">Message</label>
                 <textarea 
                   name="message"
                   value={formData.message}
                   onChange={handleChange}
                   required
                   className="w-full bg-brand-dark/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all placeholder-gray-600 h-40 resize-none" 
                   placeholder="Tell us about your brand goals..."
                 ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-brand-red hover:bg-red-700 text-white font-bold py-5 rounded-xl transition-all flex items-center justify-center gap-3 group text-lg shadow-lg hover:shadow-brand-red/30"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer/Thank you */}
        <div className="mt-32 pt-12 border-t border-white/5 text-center">
           <div className="flex flex-col items-center justify-center mb-8">
             <div className="text-white font-heading font-black text-2xl tracking-widest mb-2">ARC STUDIO</div>
             <p className="text-gray-500 text-sm">Digital Growth Agency</p>
           </div>
           <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Arc Studio. All rights reserved.</p>
        </div>

      </div>
    </section>
  );
};