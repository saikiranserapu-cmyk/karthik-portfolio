"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Terminal } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Web Node",
    description: "A high-performance storefront woven with React and Stripe. Features a fully custom cart system and real-time inventory tracking.",
    tags: ["React", "Node.js", "Stripe", "Tailwind"],
    image: "/project_ecommerce.png",
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "AI Neural Net Visualizer",
    description: "Interactive dashboard that maps out machine learning node clusters. Built to handle thousands of concurrent data points seamlessly.",
    tags: ["Three.js", "WebGL", "Python", "FastAPI"],
    image: "/project_neural.png",
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Cybernetic Chat App",
    description: "End-to-end encrypted messaging platform. Uses websockets for instant delivery with a sleek, dark-mode focused UI.",
    tags: ["Next.js", "Socket.io", "PostgreSQL", "Prisma"],
    image: "/project_chat.png",
    link: "#",
    github: "#"
  }
];

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;
  
  // Parallax Hover setup
  const cardRef = useRef(null);
  
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation (-5 to 5 degrees)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    
    cardRef.current.style.setProperty("--rotate-x", `${rotateX}deg`);
    cardRef.current.style.setProperty("--rotate-y", `${rotateY}deg`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty("--rotate-x", `0deg`);
    cardRef.current.style.setProperty("--rotate-y", `0deg`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.9 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 80,
          damping: 12,
          mass: 1.2
        }
      }}
      viewport={{ once: true, margin: "-100px" }}
      className={`flex flex-col md:flex-row items-center gap-8 lg:gap-16 relative z-10 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Visual Silk Thread connecting nodes */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-[rgba(230,0,35,0.2)] to-transparent -z-10" />

      {/* Image Container with Parallax */}
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full md:w-1/2 relative group perspective-1000"
        style={{ perspective: "1000px" }}
      >
        <div 
          className="relative rounded-xl overflow-hidden glass-panel border border-[rgba(255,255,255,0.1)] transition-transform duration-200 ease-out"
          style={{ transform: "rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg))" }}
        >
          <div className="absolute inset-0 bg-[var(--color-spider-red)] opacity-20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10" />
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-[300px] md:h-[400px] object-cover filter grayscale-[50%] group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
          />
        </div>
      </div>

      {/* Content Container */}
      <div className={`w-full md:w-1/2 flex flex-col ${isEven ? 'items-start text-left' : 'items-start md:items-end md:text-right'}`}>
        <h3 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">
          {project.title}
        </h3>
        
        <div className="glass-panel p-6 rounded-lg mb-6 relative w-full md:w-[110%] z-20 bg-[rgba(26,26,26,0.8)] backdrop-blur-xl border-l-4 border-l-[var(--color-spider-red)]">
          <p className="text-gray-300 leading-relaxed text-lg">
            {project.description}
          </p>
        </div>

        <ul className={`flex flex-wrap gap-3 mb-8 text-sm font-mono text-[var(--color-spider-red)] ${isEven ? 'justify-start' : 'justify-start md:justify-end'} w-full`}>
          {project.tags.map(tag => (
            <li key={tag} className="px-3 py-1 bg-[rgba(230,0,35,0.1)] rounded-full">
              {tag}
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          <motion.a 
            href={project.github}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="text-white hover:text-[var(--color-spider-red)] transition-colors"
          >
            <Terminal size={24} />
          </motion.a>
          <motion.a 
            href={project.link}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="text-white hover:text-[var(--color-spider-red)] transition-colors"
          >
            <ExternalLink size={24} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-[var(--color-spider-black)] py-32 px-6 overflow-hidden">
      {/* Background Web Patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[var(--color-spider-red)] to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[var(--color-spider-red)] to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-heading text-white mb-4">
            Caught in the <span className="text-[var(--color-spider-red)]">Web</span>
          </h2>
          <div className="h-1 w-24 bg-[var(--color-spider-red)] mx-auto md:mx-0 rounded" />
        </motion.div>

        <div className="flex flex-col gap-32">
          {projectsData.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

