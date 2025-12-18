import { motion } from 'framer-motion';

export const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-slate-950" aria-hidden="true">
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-purple-900/30 rounded-full blur-[120px]" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 100, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[0%] w-[60vw] h-[60vw] bg-blue-900/20 rounded-full blur-[100px]" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          y: [0, -50, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-[20%] left-[20%] w-[80vw] h-[60vw] bg-indigo-900/20 rounded-full blur-[120px]" 
      />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
    </div>
  );
};

