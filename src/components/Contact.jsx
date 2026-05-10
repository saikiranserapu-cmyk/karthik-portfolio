"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, AtSign, Hash, Link, MessageCircle } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleWhatsAppSubmit = () => {
    if (!formData.name || !formData.message) return alert("Please fill in your name and message.");
    const text = `Hi, my name is ${formData.name}.\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/917013374311?text=${encodedText}`, "_blank");
  };

  const handleEmailSubmit = () => {
    if (!formData.name || !formData.message) return alert("Please fill in your name and message.");
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    window.open(`mailto:Karthikeyal741@gmail.com?subject=${encodedSubject}&body=${encodedBody}`, "_blank");
  };

  return (
    <section id="contact" className="relative w-full bg-[var(--color-spider-black)] pt-32 pb-12 px-6 overflow-hidden">
      {/* Background Web Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10 flex justify-center items-center">
        <div className="w-[800px] h-[800px] border border-[var(--color-spider-red)] rounded-full animate-[spin_60s_linear_infinite]" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }} />
        <div className="absolute w-[600px] h-[600px] border border-white rounded-full animate-[spin_40s_linear_infinite_reverse]" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }} />
        <div className="absolute w-[400px] h-[400px] border border-[var(--color-spider-red)] rounded-full animate-[spin_20s_linear_infinite]" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Contact Form Section */}
        <div className="flex flex-col lg:flex-row gap-16 mb-32 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-5xl md:text-7xl font-bold font-heading text-white mb-6">
              Let's build a <span className="text-[var(--color-spider-red)]">Web</span> together.
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-lg mb-8">
              Whether you need a cutting-edge frontend, a robust backend, or a completely new digital experience. Drop a line and let's get connected.
            </p>
            <div className="flex flex-col md:flex-row gap-8 text-gray-400">
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-[var(--color-spider-red)] font-bold mb-1">Email</span>
                <a href="mailto:Karthikeyal741@gmail.com" className="text-white hover:text-[var(--color-spider-red)] transition-colors">Karthikeyal741@gmail.com</a>
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-[var(--color-spider-red)] font-bold mb-1">Phone</span>
                <a href="tel:7013374311" className="text-white hover:text-[var(--color-spider-red)] transition-colors">70133 74311</a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <form className="glass-panel p-8 md:p-10 rounded-2xl flex flex-col gap-6 bg-[rgba(26,26,26,0.5)] backdrop-blur-xl border border-[rgba(255,255,255,0.05)]">
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="name" className="text-sm text-gray-400 font-mono">/ Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[var(--color-spider-gray)] text-white border border-[rgba(255,255,255,0.1)] rounded p-4 outline-none transition-all duration-300 focus:border-[var(--color-spider-red)] focus:shadow-[0_0_15px_rgba(230,0,35,0.3)]"
                    placeholder="Peter Parker"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="email" className="text-sm text-gray-400 font-mono">/ Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[var(--color-spider-gray)] text-white border border-[rgba(255,255,255,0.1)] rounded p-4 outline-none transition-all duration-300 focus:border-[var(--color-spider-red)] focus:shadow-[0_0_15px_rgba(230,0,35,0.3)]"
                    placeholder="web@crawler.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm text-gray-400 font-mono">/ Message</label>
                <textarea 
                  id="message" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[var(--color-spider-gray)] text-white border border-[rgba(255,255,255,0.1)] rounded p-4 outline-none transition-all duration-300 focus:border-[var(--color-spider-red)] focus:shadow-[0_0_15px_rgba(230,0,35,0.3)] resize-none"
                  placeholder="I have a project idea..."
                ></textarea>
              </div>

              <div className="flex flex-col md:flex-row gap-4 mt-2">
                <motion.button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 500, damping: 5 } }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative w-full py-4 bg-[#25D366] text-white font-bold rounded overflow-hidden shadow-[0_0_15px_rgba(37,211,102,0.4)]"
                >
                  <div className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Send to WhatsApp <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
                  </span>
                </motion.button>

                <motion.button
                  type="button"
                  onClick={handleEmailSubmit}
                  whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 500, damping: 5 } }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative w-full py-4 bg-[var(--color-spider-red)] text-white font-bold rounded overflow-hidden shadow-[0_0_15px_rgba(230,0,35,0.4)]"
                >
                  <div className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Send to Email <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </motion.button>
              </div>
            </form>
          </motion.div>

        </div>

        {/* Footer */}
        <div className="border-t border-[rgba(255,255,255,0.1)] pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Karthikeya Portfolio. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            {[AtSign, Hash, Link].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2, y: -4, transition: { type: "spring", stiffness: 500, damping: 5 } }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-[var(--color-spider-red)] transition-colors"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

