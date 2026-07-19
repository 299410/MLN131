import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.8 } // Delayed for preloader
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring" as const, damping: 20, stiffness: 100 }
    }
  };

  const titleWords = "Gia đình Việt Nam đã thay đổi như thế nào?".split(" ");

  return (
    <section ref={ref} className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center bg-stone-50 cursor-default">
      
      {/* Arch Image Background with Parallax */}
      <motion.div 
        style={{ y, opacity, scale }} 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-[90%] md:w-[70%] h-[85%] rounded-[100px_100px_0_0] overflow-hidden relative shadow-2xl">
          <img src="/hero_warm.png" alt="Hero background" className="w-full h-full object-cover filter brightness-75" />
          <div className="absolute inset-0 bg-stone-900/40 mix-blend-multiply" />
        </div>
      </motion.div>

      {/* Dynamic Spotlight */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-10 mix-blend-overlay"
        animate={{
          background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15), transparent 80%)`
        }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mt-12">
        <motion.p 
          initial={{ opacity: 0, letterSpacing: "0px" }}
          animate={{ opacity: 1, letterSpacing: "6px" }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          className="text-stone-300 uppercase text-xs md:text-sm mb-6 font-semibold tracking-widest drop-shadow-md"
        >
          Chương 1: Mở đầu
        </motion.p>
        
        <motion.h1 
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl lg:text-[7rem] text-stone-50 font-serif tracking-tight leading-[1.1] flex flex-wrap justify-center gap-x-4 gap-y-2 drop-shadow-2xl mix-blend-difference"
        >
          {titleWords.map((word, index) => (
            <motion.span key={index} variants={item} className={word === "thay" || word === "đổi" ? "italic font-light text-stone-200" : ""}>
              {word}
            </motion.span>
          ))}
        </motion.h1>
      </div>

      {/* Interactive Scroll Badge */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2.5, type: "spring" }}
        className="absolute bottom-12 z-20 flex flex-col items-center group cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <div className="w-24 h-24 rounded-full border border-stone-400/30 flex items-center justify-center relative backdrop-blur-sm bg-stone-900/10 group-hover:bg-stone-900/30 group-hover:scale-110 transition-all duration-500 overflow-hidden">
          <svg className="w-full h-full absolute inset-0 animate-[spin_10s_linear_infinite] text-stone-200" viewBox="0 0 100 100">
            <path id="curve" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
            <text className="text-[11px] font-medium tracking-widest uppercase" fill="currentColor">
              <textPath href="#curve" startOffset="0%">
                Khám phá • Sự chuyển mình • Khám phá •
              </textPath>
            </text>
          </svg>
          <div className="w-1 h-1 bg-stone-200 rounded-full group-hover:h-8 transition-all duration-500" />
        </div>
      </motion.div>
    </section>
  );
}
