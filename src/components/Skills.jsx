"use client";
import { motion } from "framer-motion";
import { Database, Layout, Server, Cpu } from "lucide-react";

const skillsData = [
  { category: "Frontend", icon: Layout, skills: ["React", "Vue", "Next.js", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", icon: Server, skills: ["Node.js", "Python", "Go", "Express", "FastAPI"] },
  { category: "Database", icon: Database, skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma"] },
  { category: "Other", icon: Cpu, skills: ["WebGL", "Three.js", "Docker", "Git"] },
];

export const Skills = () => {
  return (
    <section id="skills" className="relative w-full bg-[var(--color-spider-black)] py-32 px-6 overflow-hidden">
      {/* Background Web Crosshairs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(230,0,35,0.2)] to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-[1px] bg-gradient-to-b from-transparent via-[rgba(230,0,35,0.2)] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center md:text-right"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-heading text-white mb-4">
            Tech <span className="text-[var(--color-spider-red)]">Arsenal</span>
          </h2>
          <div className="h-1 w-24 bg-[var(--color-spider-red)] mx-auto md:ml-auto md:mr-0 rounded" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-xl border border-[rgba(255,255,255,0.05)] hover:border-[rgba(230,0,35,0.3)] transition-colors group relative overflow-hidden bg-[rgba(26,26,26,0.5)] backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(230,0,35,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[var(--color-spider-black)] flex items-center justify-center mb-6 border border-[rgba(230,0,35,0.2)] group-hover:border-[var(--color-spider-red)] group-hover:shadow-[0_0_15px_rgba(230,0,35,0.4)] transition-all duration-300">
                  <group.icon size={28} className="text-white group-hover:text-[var(--color-spider-red)] transition-colors" />
                </div>
                
                <h3 className="text-2xl font-bold font-heading text-white mb-6">
                  {group.category}
                </h3>
                
                <ul className="flex flex-col gap-3 w-full">
                  {group.skills.map((skill) => (
                    <li key={skill} className="text-gray-400 font-mono text-sm py-2 border-b border-[rgba(255,255,255,0.05)] last:border-0 group-hover:text-[var(--color-spider-red)] transition-colors">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

