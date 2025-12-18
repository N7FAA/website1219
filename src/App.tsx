import { useState } from 'react';
import { AmbientBackground } from './components/AmbientBackground';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { projects } from './data/projects';
import { Project } from './types';

function App() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleProjectClick = (project: Project) => {
    if (project.type === 'video' && project.videoUrl) {
      setSelectedVideo(project.videoUrl);
    } else if (project.type === 'notion' && project.link) {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="relative min-h-screen text-slate-100 font-sans selection:bg-cyan-500/30">
      <AmbientBackground />
      <Navigation />
      <Hero />
      <ProjectsSection projects={projects} onProjectClick={handleProjectClick} />
      <Footer />
      <VideoModal 
        url={selectedVideo || undefined} 
        isOpen={!!selectedVideo} 
        onClose={() => setSelectedVideo(null)} 
      />
    </div>
  );
}

export default App;

