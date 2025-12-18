import { motion } from 'framer-motion';
import { Play, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
  onProjectClick: (project: Project) => void;
}

export const ProjectCard = ({ project, index, onProjectClick }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative cursor-pointer"
    >
      <div 
        className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-800 border border-white/5 shadow-lg group-hover:shadow-cyan-900/20 transition-all duration-500 focus-within:ring-2 focus-within:ring-cyan-400"
        onClick={() => onProjectClick(project)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onProjectClick(project);
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={`查看项目：${project.title}`}
      >
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
        
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          decoding="async"
        />

        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
          <div className="w-16 h-16 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white">
            {project.type === 'video' ? (
              <Play fill="currentColor" size={24} aria-hidden="true" />
            ) : (
              <ArrowUpRight size={28} aria-hidden="true" />
            )}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">
              {project.category}
            </span>
            {project.type === 'notion' && (
              <span className="flex items-center gap-1 text-[10px] bg-slate-800/80 px-2 py-1 rounded text-slate-300 border border-slate-700">
                NOTION DOC
              </span>
            )}
          </div>
          
          <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
          <p className="text-sm text-slate-400 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            {project.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

