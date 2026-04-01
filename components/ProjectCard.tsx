"use client";
import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  category: string;
  color: string;
}

const ProjectCard = ({ title, category, color }: ProjectProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-[2.5rem] bg-white/[0.03] border border-white/5 p-5 transition-all hover:bg-white/[0.07] hover:border-white/20"
    >
      {/* Visual Placeholder */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.8rem] bg-[#0a0a0a]">
        {/* Glow Effect */}
        <div className="absolute inset-0 flex items-center justify-center">
           <div 
             className="w-40 h-40 rounded-full blur-[80px] opacity-20 group-hover:opacity-60 transition-opacity duration-700" 
             style={{ backgroundColor: color }}
           ></div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-6 right-6 h-8 w-8 rounded-full border border-white/10 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
             <span className="text-white text-xs">↗</span>
        </div>

        <div className="absolute bottom-8 left-8">
          <span className="bg-white/10 backdrop-blur-md text-[9px] px-4 py-1.5 rounded-full uppercase tracking-[0.2em] text-white border border-white/10 font-bold">
            {category}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="mt-8 flex justify-between items-center px-4 pb-4">
        <h3 className="text-3xl font-bold text-white tracking-tight group-hover:text-[#ff5c7a] transition-colors">
            {title}
        </h3>
      </div>
    </motion.div>
  );
};

export default ProjectCard;