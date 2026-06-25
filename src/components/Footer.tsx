import { motion } from 'framer-motion';
import { ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 bg-dark-card/50 border-t border-dark-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-extrabold bg-gradient-to-r from-primary-400 via-cyan-400 to-primary-500 bg-clip-text text-transparent mb-2">
              IAN
            </div>
            <p className="text-gray-400 text-sm flex items-center justify-center md:justify-start gap-1">
              © 2025 Irfan Adi Nugroho · Built with{' '}
              <Heart className="w-4 h-4 text-red-400 inline animate-pulse" />{' '}
              and lots of data
            </p>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-dark-bg border border-primary-500/30 rounded-xl text-gray-400 hover:text-white hover:border-primary-500/60 transition-all duration-300"
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-sm">Back to Top</span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
