import { motion } from 'framer-motion';

const factors = [
  { id: 1, title: 'Kinh tế thị trường', desc: 'Chuyển đổi từ nền kinh tế kế hoạch hóa, tự cung tự cấp sang kinh tế thị trường. Tiền tệ hóa các giá trị sinh hoạt và thúc đẩy sự độc lập kinh tế cá nhân.' },
  { id: 2, title: 'Đô thị hóa', desc: 'Tốc độ đô thị hóa nhanh (42.6% năm 2023) tạo làn sóng di cư, làm thay đổi không gian sống từ nhà đất rộng rãi sang các căn hộ chung cư cao tầng chật hẹp.' },
  { id: 3, title: 'Hội nhập quốc tế', desc: 'Sự thâm nhập của luồng văn hóa phương Tây, xu hướng bình đẳng giới toàn cầu và làn sóng công nghệ số thông qua Internet và mạng xã hội.' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, damping: 20, stiffness: 100 }
  }
};

export default function TimelineSection() {
  return (
    <section className="py-24 md:py-32 px-6 bg-stone-100 border-t border-stone-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-red-800/80 text-sm tracking-widest uppercase mb-4 font-semibold">Chương 2: Bối cảnh tác động</p>
            <h2 className="text-4xl md:text-5xl text-stone-900 font-serif mb-6">Ba "Cú hích" mang tính <em className="italic text-red-800">thời đại</em></h2>
            <p className="text-stone-600 max-w-2xl mx-auto text-lg">
              Trong thế kỷ 21, ba yếu tố sau đã và đang tái cấu trúc sâu sắc đời sống gia đình:
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {factors.map((factor) => (
            <motion.div 
              key={factor.id} 
              variants={itemVariants}
              className="liquid-glass rounded-3xl p-8 md:p-10 border border-stone-200 bg-white/40 hover:bg-white/80 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group"
            >
              <div className="absolute -top-12 -right-12 text-[12rem] font-serif text-stone-900/5 group-hover:text-red-900/5 font-bold leading-none transition-colors duration-500 pointer-events-none">
                {factor.id}
              </div>
              <h3 className="text-2xl text-stone-900 mb-4 font-serif font-medium relative z-10">{factor.title}</h3>
              <div className="w-12 h-[2px] bg-red-800/40 mb-6 group-hover:w-full transition-all duration-500 ease-out" />
              <p className="text-stone-600 leading-relaxed relative z-10">{factor.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
