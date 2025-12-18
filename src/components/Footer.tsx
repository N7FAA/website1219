import { Mail, Github, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="about" className="relative z-10 bg-slate-950 border-t border-slate-900 mt-24">
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold mb-8">Let's create something amazing.</h2>
        <p className="text-slate-400 mb-12 max-w-xl mx-auto">
          我目前开放接受自由职业项目与全职机会。如果你对我的作品感兴趣，或者只是想聊聊设计，欢迎随时联系。
        </p>
        
        <div className="flex justify-center gap-6 mb-16">
          <a 
            href="mailto:hello@example.com" 
            className="p-3 bg-slate-900 rounded-full hover:bg-cyan-900/50 hover:text-cyan-400 transition-all border border-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="发送邮件"
          >
            <Mail size={20} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-900 rounded-full hover:bg-cyan-900/50 hover:text-cyan-400 transition-all border border-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="访问 LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="https://github.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-900 rounded-full hover:bg-cyan-900/50 hover:text-cyan-400 transition-all border border-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="访问 GitHub"
          >
            <Github size={20} />
          </a>
        </div>
        <div className="text-xs text-slate-600">
          © {new Date().getFullYear()} N7 Design. Built with React & Framer Motion.
        </div>
      </div>
    </footer>
  );
};

