import { ProjectCard } from './ProjectCard';
import { Project } from '../types';

interface ProjectsSectionProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

export const ProjectsSection = ({ projects, onProjectClick }: ProjectsSectionProps) => {
  return (
    <main id="work" className="relative z-10 max-w-7xl mx-auto px-6 py-24">
      <div className="flex items-end justify-between mb-16">
        <h2 className="text-4xl font-bold">Selected Works</h2>
        <span className="text-slate-500 hidden md:block">2023 - 2024 Collections</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onProjectClick={onProjectClick}
          />
        ))}
      </div>
    </main>
  );
};

