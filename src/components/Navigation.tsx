import { MouseEvent } from 'react';

export const Navigation = () => {
  const handleSmoothScroll = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-6 flex justify-between items-center mix-blend-difference">
      <div className="text-2xl font-bold tracking-tighter">DESIGNER.</div>
      <div className="flex gap-6 text-sm font-medium opacity-80">
        <a 
          href="#work" 
          onClick={(e) => handleSmoothScroll(e, 'work')}
          className="hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
        >
          Work
        </a>
        <a 
          href="#about" 
          onClick={(e) => handleSmoothScroll(e, 'about')}
          className="hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
        >
          About
        </a>
        <a 
          href="mailto:hello@example.com" 
          className="hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

