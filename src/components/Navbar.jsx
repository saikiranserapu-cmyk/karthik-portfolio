"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Network } from "lucide-react";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const navBackground = useTransform(
    scrollY,
    [0, 50],
    ["rgba(10, 10, 10, 0)", "rgba(26, 26, 26, 0.8)"]
  );

  const navBorder = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.05)"]
  );

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      style={{
        backgroundColor: navBackground,
        borderBottomWidth: 1,
        borderColor: navBorder,
      }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          className="flex items-center gap-2 cursor-pointer text-white hover:text-[var(--color-spider-red)] transition-colors"
          whileHover={{ scale: 1.05 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Network className="text-[var(--color-spider-red)]" />
          <span className="font-heading font-bold text-xl tracking-wider">KARTHIKEYA</span>
        </motion.div>

        <div className="hidden md:flex gap-8">
          {['Hero', 'Skills', 'Projects', 'Contact'].map((item) => (
            <motion.button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-gray-300 hover:text-white font-mono text-sm relative group overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              <span className="relative z-10">{item}</span>
              <motion.div 
                className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--color-spider-red)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
              />
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

