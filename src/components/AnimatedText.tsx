import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export default function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'start 0.2']
  });

  const words = text.split(' ');

  return (
    <p ref={containerRef} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        
        return (
          <Word key={i} word={word} progress={scrollYProgress} range={[start, end]} />
        );
      })}
    </p>
  );
}

function Word({ word, progress, range }: { word: string; progress: MotionValue<number>; range: number[] }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative mr-2 md:mr-3 mt-1">
      <span className="opacity-0">{word}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {word}
      </motion.span>
    </span>
  );
}
