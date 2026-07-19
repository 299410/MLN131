import { motion } from 'framer-motion';

export default function BottomNav() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ delay: 2, type: "spring", damping: 20 }}
      className="fixed bottom-6 left-1/2 z-50 flex items-center justify-between bg-white/90 backdrop-blur-md rounded-full pl-6 pr-2 py-2 w-[90%] max-w-[400px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] border border-stone-200"
    >
      <span className="font-serif text-stone-900 font-medium text-lg italic">
        Gia đình VN 4.0
      </span>
      
      <button 
        onClick={scrollToTop}
        className="bg-stone-900 text-stone-50 px-6 py-2.5 rounded-full font-medium text-sm hover:bg-red-800 transition-colors shadow-[var(--shadow-complex-primary)]"
      >
        Lên đầu trang
      </button>
    </motion.div>
  );
}
