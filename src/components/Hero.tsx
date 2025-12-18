import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroY = useTransform(scrollY, [0, 500], [0, 200]);

  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <motion.div 
        style={{ opacity: heroOpacity, y: heroY }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-4"
        >
          <span className="px-4 py-1.5 text-xs font-medium tracking-widest text-cyan-300 uppercase bg-cyan-900/20 rounded-full border border-cyan-800/50 backdrop-blur-md">
            Available for Hire
          </span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-tight">
            Creating <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Digital</span><br />
            <span className="italic font-serif font-light text-slate-300">Experiences</span> that Matter.
          </h1>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          我是 <strong className="text-slate-100">N7</strong>，一名专注于产品体验与动态视觉的设计师。
          我相信设计不仅是视觉的堆砌，更是逻辑与情感的共鸣。
        </motion.p>
      </motion.div>
      
      <motion.button
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={scrollToWork}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-50 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-full p-2"
        aria-label="向下滚动查看作品"
      >
        <ChevronDown size={32} />
      </motion.button>
    </header>
  );
};

