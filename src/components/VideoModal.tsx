import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';

interface VideoModalProps {
  url?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal = ({ url, isOpen, onClose }: VideoModalProps) => {
  // 键盘事件处理（ESC 关闭）
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && url && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl overflow-hidden bg-black rounded-2xl shadow-2xl border border-white/10 aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 text-white bg-black/50 rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label="关闭视频"
            >
              <X size={24} />
            </button>
            <h2 id="video-modal-title" className="sr-only">项目视频</h2>
            <iframe
              src={url}
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="项目视频"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

