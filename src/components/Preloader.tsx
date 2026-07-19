import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 800); // Wait for exit animation
          return 100;
        }
        return p + Math.floor(Math.random() * 15) + 5;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ y: 0 }}
      animate={{ y: progress === 100 ? "-100%" : 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
      className="fixed inset-0 z-50 bg-stone-950 flex flex-col items-center justify-center text-stone-50"
    >
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      
      <div className="overflow-hidden mb-4">
        <motion.p 
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-stone-400 text-sm tracking-widest uppercase font-medium"
        >
          Khôi phục dữ liệu
        </motion.p>
      </div>

      <div className="text-6xl md:text-8xl font-serif tabular-nums tracking-tight">
        {Math.min(progress, 100)}%
      </div>
      
      <div className="w-48 h-[1px] bg-stone-800 mt-8 relative overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 bottom-0 bg-red-800"
          initial={{ width: "0%" }}
          animate={{ width: `${Math.min(progress, 100)}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </motion.div>
  );
}
