import { motion } from 'framer-motion';

export default function PhilosophySection() {
  return (
    <section className="bg-black py-28 md:py-40 px-6 overflow-hidden max-w-6xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-16 md:mb-24"
      >
        Truyền thống <em className="font-serif italic text-white/40">x</em> Hiện đại
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl overflow-hidden aspect-[4/3]"
        >
          <video 
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
            className="w-full h-full object-cover"
            muted
            autoPlay
            loop
            playsInline
            preload="auto"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <div className="pb-8">
            <p className="text-white/40 text-xs tracking-widest uppercase mb-4">Gìn giữ truyền thống</p>
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              Những giá trị cốt lõi như hiếu nghĩa, thủy chung, tương trợ và kính trên nhường dưới vẫn là nền tảng vững chắc, kết nối các thế hệ trong gia đình Việt Nam dù bối cảnh xã hội có nhiều biến đổi.
            </p>
          </div>
          
          <div className="w-full h-px bg-white/10 my-2" />
          
          <div className="pt-8">
            <p className="text-white/40 text-xs tracking-widest uppercase mb-4">Tiếp thu hiện đại</p>
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              Bình đẳng giới, dân chủ, tôn trọng quyền cá nhân và ứng dụng công nghệ là những mảnh ghép mới, giúp gia đình hiện đại phát triển cân bằng và hòa nhịp với thời đại số.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
