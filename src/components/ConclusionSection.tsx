import { motion } from 'framer-motion';

export default function ConclusionSection() {
  return (
    <section className="py-24 md:py-40 px-6 bg-stone-900 text-stone-50 relative overflow-hidden flex flex-col items-center text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(255,255,255,0.05)_0%,_transparent_60%)] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-3xl relative z-10"
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

        <button className="bg-stone-50 text-stone-900 px-10 py-4 rounded-full font-medium hover:bg-stone-200 transition-all shadow-xl">
          Khám phá Thư viện AI Usage
        </button>
      </motion.div>
    </section>
  );
}
