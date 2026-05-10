"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Terminal, Cpu } from "lucide-react";
import Image from "next/image";
import { SpiderWeb } from "./SpiderWeb";

const ProjectCard = ({ item, crawlVariants }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      variants={crawlVariants}
      onMouseMove={handleMouseMove}
      whileHover={{ 
        x: [0, -3, 3, -3, 3, 0], // Vibration / Web Touch
        transition: { duration: 0.3 }
      }}
      className="glass-panel p-6 rounded-lg relative overflow-hidden group cursor-pointer bg-[rgba(26,26,26,0.4)] backdrop-blur-md border border-[rgba(255,255,255,0.05)] hover:border-[rgba(230,0,35,0.3)] transition-colors"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-spider-red)]/0 via-[var(--color-spider-red)]/5 to-[var(--color-spider-red)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <item.icon size={32} className="text-[var(--color-spider-red)] mb-4 relative z-10" />
      <h3 className="text-xl font-bold mb-2 font-heading relative z-10">{item.title}</h3>
      <p className="text-gray-400 relative z-10">{item.desc}</p>
      
      {/* Spider-Sense radial pulse effect mapped to mouse coordinates */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle 120px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(230,0,35,0.2) 0%, transparent 100%)`
        }}
      />
    </motion.div>
  );
};

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // "The Crawl" stagger
        delayChildren: 0.3,
      },
    },
  };

  const dropInVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 1,
      },
    },
  };

  const crawlVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: [50, -10, 5, -2, 0], // The "climb" jitter
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      },
    },
  };

  const stringVariants = {
    hidden: { height: 0 },
    visible: {
      height: 100,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div id="hero" className="relative min-h-screen bg-[var(--color-spider-black)] flex flex-col items-center justify-center overflow-hidden font-sans text-white">
      <SpiderWeb />

      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image with Web-Slinging Entry */}
        <div className="relative flex flex-col items-center mb-8">
          <motion.div 
            className="w-0.5 bg-[var(--color-spider-gray)] opacity-50 absolute -top-32"
            variants={stringVariants}
          />
          <motion.div variants={dropInVariants} className="relative z-10 mt-12">
            <div className="w-48 h-48 relative flex items-center justify-center">
              {/* Hexagonal border simulating a web node */}
              <div 
                className="absolute inset-0 border-2 border-[var(--color-spider-red)] opacity-60 animate-[spin_10s_linear_infinite]"
                style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
              />
              <div 
                className="absolute inset-2 border border-white opacity-20 animate-[spin_15s_linear_infinite_reverse]"
                style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
              />
              <Image 
                src="/profile.jpg" 
                alt="Profile" 
                width={160}
                height={160}
                className="w-40 h-40 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Text Area */}
        <motion.div variants={dropInVariants} className="text-center mb-12 relative">
          <div className="absolute -inset-10 bg-[var(--color-spider-red)] opacity-5 blur-[100px] rounded-full pointer-events-none" />
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-[var(--color-spider-gray)]">
            Creative Developer
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto relative z-10">
            Weaving digital experiences with precision and creativity. I build interactive, high-performance web applications that catch the eye.
          </p>
        </motion.div>

        {/* Buttons - Web Tug effect */}
        <motion.div variants={dropInVariants} className="flex gap-4 mb-16 relative z-20">
          <motion.button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 500, damping: 5 } }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-3 bg-[var(--color-spider-red)] text-white font-bold rounded overflow-hidden shadow-[0_0_15px_rgba(230,0,35,0.4)]"
          >
            <div className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            <span className="relative z-10 flex items-center gap-2">
              View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
          
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 500, damping: 5 } }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-transparent border border-[var(--color-spider-gray)] text-white font-bold rounded hover:bg-[var(--color-spider-gray)] transition-colors"
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full relative z-20">
          {[
            { icon: Code, title: "Frontend Engineering", desc: "React, Next.js, Vue" },
            { icon: Terminal, title: "Backend Systems", desc: "Node, Python, Go" },
            { icon: Cpu, title: "Creative Coding", desc: "WebGL, Framer Motion" }
          ].map((item, i) => (
            <ProjectCard key={i} item={item} crawlVariants={crawlVariants} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

