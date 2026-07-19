import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const trailImages = [
  "/gallery-3.webp",
  "/gallery-4.webp",
  "/gallery-6.jpg",
  "/gallery-1.webp",
  "/gallery-2.jpg",
  "/gallery-7.jpg",
  "/gallery-5.jpg"
];

export default function ConclusionSection() {
  const containerRef = useRef<HTMLElement>(null);
  const lastSpawnTime = useRef(0);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastSpawnTime.current < 80) return; // Spawn every 80ms minimum
      lastSpawnTime.current = now;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const el = document.createElement('div');
      const src = trailImages[Math.floor(Math.random() * trailImages.length)];
      const rot = Math.random() * 20 - 10;
      
      el.className = 'absolute w-32 h-24 pointer-events-none rounded-xl overflow-hidden shadow-2xl transition-all duration-1000 ease-out z-0';
      el.style.left = `${x - 64}px`;
      el.style.top = `${y - 48}px`;
      el.style.transform = `scale(1) rotate(${rot}deg)`;
      el.style.opacity = '0.5';
      
      const img = document.createElement('img');
      img.src = src;
      img.className = 'w-full h-full object-cover filter grayscale';
      el.appendChild(img);
      
      container.appendChild(el);

      // Trigger animation next frame
      requestAnimationFrame(() => {
        el.style.transform = `scale(0.5) rotate(${rot + (Math.random()*10 - 5)}deg) translateY(40px)`;
        el.style.opacity = '0';
      });

      // Cleanup
      setTimeout(() => {
        if (el.parentNode === container) {
          container.removeChild(el);
        }
      }, 1000);
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={containerRef} className="py-32 md:py-48 px-6 bg-stone-900 text-stone-50 relative overflow-hidden flex flex-col items-center text-center cursor-crosshair">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(255,255,255,0.05)_0%,_transparent_60%)] pointer-events-none z-0" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl relative z-10 pointer-events-none"
      >
        <p className="text-stone-400 text-sm tracking-widest uppercase mb-8 font-medium">Chương 8: Kết luận</p>
        <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
          Giữ hồn truyền thống, <br/><em className="italic text-stone-400">Sống cùng hiện đại</em>
        </h2>
        
        <p className="text-stone-300 text-lg leading-relaxed mb-6">
          Gia đình Việt Nam trong thời kỳ "quá độ" hiện nay là bức tranh đa màu sắc, nơi có sự đấu tranh và dung hòa giữa truyền thống và hiện đại. Kỷ nguyên công nghệ, toàn cầu hóa mang lại nhiều cơ hội nhưng cũng đặt gia đình trước những rủi ro đứt gãy tình cảm.
        </p>
        <p className="text-stone-300 text-lg leading-relaxed mb-12">
          Giải pháp cốt lõi là kết hợp hài hòa cũ - mới, tiếp thu tiến bộ nhân loại đồng thời đổi mới phương pháp giáo dục gia đình. Việc giữ gìn bản sắc (hiếu nghĩa, thủy chung) kết hợp cùng tư duy mở (bình đẳng, tôn trọng) chính là chìa khóa xây dựng nền tảng vững chắc trong thời đại 4.0.
        </p>


      </motion.div>
    </section>
  );
}
