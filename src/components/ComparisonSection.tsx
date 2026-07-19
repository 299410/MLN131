import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ComparisonSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className="py-24 md:py-40 px-6 bg-stone-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,69,19,0.03)_0%,_transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 relative z-10"
        >
          <p className="text-red-800/80 text-sm tracking-widest uppercase mb-4 font-semibold">Chương 4: Quan hệ & Vai trò</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-stone-900 font-serif">Từ Tôn ti đến <em className="italic text-red-800">Bình đẳng</em></h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="liquid-glass rounded-3xl p-8 md:p-12 relative overflow-hidden border border-stone-200 group hover:border-stone-300 transition-colors"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-stone-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <h3 className="text-3xl font-serif text-stone-900 mb-8 border-b border-stone-200 pb-4 font-medium relative z-10">Sự dịch chuyển Quan hệ</h3>
            <ul className="space-y-8 relative z-10">
              <motion.li whileHover={{ x: 8 }} className="flex flex-col transition-transform">
                <span className="text-stone-900 font-medium mb-2 font-serif text-lg">Gia đình truyền thống</span>
                <span className="text-stone-600 leading-relaxed">Vận hành theo hệ giá trị Nho giáo (Phụ tử tình thâm, Phu phụ có biệt). Trật tự mang tính áp đặt từ trên xuống. Quan hệ vợ chồng nặng tính nghĩa vụ.</span>
              </motion.li>
              <motion.li whileHover={{ x: 8 }} className="flex flex-col transition-transform">
                <span className="text-stone-900 font-medium mb-2 font-serif text-lg">Gia đình hiện nay</span>
                <span className="text-stone-600 leading-relaxed">Tương tác chuyển sang mô hình dân chủ, tôn trọng quyền riêng tư. Con cái được quyền phản biện, tự quyết. Hôn nhân dựa trên tình nguyện.</span>
              </motion.li>
              <motion.li whileHover={{ x: 8 }} className="flex flex-col p-4 bg-red-50/50 rounded-xl border border-red-100 transition-transform">
                <span className="text-red-800 font-medium mb-2 font-serif text-lg">Mặt trái / Thách thức</span>
                <span className="text-stone-600 leading-relaxed">Mối quan hệ lỏng lẻo hơn, tỷ lệ ly hôn tăng (nhất là giới trẻ). Hiện tượng "cùng ngồi phòng khách nhưng mỗi người nhìn một màn hình". Khủng hoảng, bạo hành và xung đột thế hệ gia tăng.</span>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="liquid-glass rounded-3xl p-8 md:p-12 relative overflow-hidden border border-stone-200 group hover:border-stone-300 transition-colors"
          >
            <div className="absolute inset-0 opacity-10 mix-blend-multiply overflow-hidden">
               <motion.img style={{ y: imgY, scale: 1.2 }} src="/modern_warm.png" alt="Modern" className="w-full h-full object-cover filter blur-[2px] group-hover:blur-0 transition-all duration-700" />
               <div className="absolute inset-0 bg-stone-50/70" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-serif text-stone-900 mb-8 border-b border-stone-200 pb-4 font-medium">Sự trỗi dậy của Bình đẳng giới</h3>
              <ul className="space-y-8">
                {[
                  { title: "Người Đàn ông (Chồng/Cha)", desc: "Từ vị thế 'Tự trị tuyệt đối' (Gia trưởng, trụ cột duy nhất) dịch chuyển sang vai trò 'Người đồng hành'. Chia sẻ việc nhà, chăm con." },
                  { title: "Người Phụ nữ (Vợ/Mẹ)", desc: "Từ 'nội trợ xó bếp', phụ nữ hiện nay có học vấn cao, độc lập tài chính. Tỷ lệ tham gia lực lượng lao động của phụ nữ Việt Nam trên 70%." },
                  { title: "Người Cao tuổi (Ông/Bà)", desc: "Từ vị thế 'Trung tâm quyền lực', người già chuyển sang vai trò 'Cố vấn tinh thần'. Độc lập hơn về kinh tế, ít can thiệp sâu vào cách dạy con của thế hệ trẻ." }
                ].map((item, i) => (
                  <motion.li whileHover={{ x: 8 }} key={i} className="flex flex-col transition-transform">
                    <span className="text-stone-900 font-medium mb-2 font-serif text-lg">{item.title}</span>
                    <span className="text-stone-600 leading-relaxed">{item.desc}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
