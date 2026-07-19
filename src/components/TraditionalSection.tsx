import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import AnimatedText from './AnimatedText';

export default function TraditionalSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["10%", "-5%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0.5]);

  return (
    <section ref={containerRef} className="py-24 md:py-40 px-6 relative bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div style={{ y: textY, opacity }} className="space-y-8 z-10 relative">
          <p className="text-red-800/80 text-sm tracking-widest uppercase font-semibold">Chương 3: Cấu trúc & Nền tảng</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-stone-900 font-serif leading-tight">
            Gia đình Việt Nam <br/><em className="italic text-red-800">truyền thống</em>
          </h2>
          
          <div className="space-y-6 text-stone-600 text-base leading-relaxed">
            <p>
              <strong className="text-stone-900 font-medium font-serif text-lg">Từ "Tứ đại đồng đường" đến "Gia đình hạt nhân"</strong><br/>
              <AnimatedText 
                text="Gia đình truyền thống phổ biến là mô hình mở rộng (3-4 thế hệ) nhằm tối ưu hóa lao động nông nghiệp lúa nước và đảm bảo an sinh. Ngày nay, quá trình hạt nhân hóa chiếm chủ đạo (>70%), kéo theo sự xuất hiện của hộ độc thân, đơn thân hay DINKs."
                className="mt-2"
              />
            </p>
            
            <div className="pt-6 border-t border-stone-200">
              <h3 className="text-xl text-stone-900 font-serif font-medium mb-4">Những giá trị làm điểm tựa:</h3>
              <ul className="space-y-4">
                <motion.li whileHover={{ x: 10 }} className="transition-transform group">
                  <strong className="text-stone-900 group-hover:text-red-800 transition-colors">Hiếu nghĩa:</strong> Trách nhiệm thiêng liêng nuôi dưỡng con cái và phụng dưỡng ông bà cha mẹ. Truyền thống "Uống nước nhớ nguồn".
                </motion.li>
                <motion.li whileHover={{ x: 10 }} className="transition-transform group">
                  <strong className="text-stone-900 group-hover:text-red-800 transition-colors">Thủy chung:</strong> Tổ ấm mang lại hạnh phúc, thỏa mãn tâm sinh lý, là nơi nương tựa vững chắc về vật chất lẫn tinh thần.
                </motion.li>
                <motion.li whileHover={{ x: 10 }} className="transition-transform group">
                  <strong className="text-stone-900 group-hover:text-red-800 transition-colors">Tương trợ:</strong> Chia sẻ trách nhiệm kinh tế, đùm bọc và chăm sóc sức khỏe cho người ốm, người già, trẻ em.
                </motion.li>
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-3xl overflow-hidden liquid-glass p-2 shadow-2xl shadow-stone-900/10 group">
          <div className="absolute inset-0 bg-stone-900/5 group-hover:bg-transparent transition-colors z-10 duration-700 pointer-events-none" />
          <motion.img 
            style={{ y: imgY, scale: 1.15 }}
            src="/traditional_warm.png" 
            alt="Gia đình truyền thống đa thế hệ" 
            className="w-full h-full object-cover rounded-2xl filter brightness-95 group-hover:brightness-105 transition-all duration-700 origin-center"
          />
        </div>

      </div>
    </section>
  );
}
