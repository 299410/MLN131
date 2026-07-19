import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ServicesSection() {
  return (
    <section className="bg-black py-28 md:py-40 px-6 overflow-hidden max-w-6xl mx-auto relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="flex justify-between items-end mb-12 md:mb-16 relative z-10"
      >
        <h2 className="text-3xl md:text-5xl text-white tracking-tight">Các yếu tố cốt lõi</h2>
        <span className="text-white/40 text-sm hidden md:block uppercase tracking-widest">Gia đình 4.0</span>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0 }}
          className="liquid-glass rounded-3xl overflow-hidden group cursor-pointer"
        >
          <div className="aspect-video relative overflow-hidden">
            <video 
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              muted
              autoPlay
              loop
              playsInline
              preload="auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </div>
          
          <div className="p-6 md:p-8">
            <div className="flex justify-between items-start mb-4">
              <span className="uppercase tracking-widest text-white/40 text-xs mt-2">Kinh tế thị trường</span>
              <div className="liquid-glass rounded-full p-2 circle">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
            </div>
            <h3 className="text-white text-xl md:text-2xl mb-3 tracking-tight">Cơ hội & Thách thức</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Kinh tế thị trường mang lại đời sống vật chất tốt hơn nhưng cũng tạo áp lực về thời gian, làm thay đổi cấu trúc và chức năng chăm sóc của gia đình truyền thống.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="liquid-glass rounded-3xl overflow-hidden group cursor-pointer"
        >
          <div className="aspect-video relative overflow-hidden">
            <video 
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              muted
              autoPlay
              loop
              playsInline
              preload="auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </div>
          
          <div className="p-6 md:p-8">
            <div className="flex justify-between items-start mb-4">
              <span className="uppercase tracking-widest text-white/40 text-xs mt-2">Đô thị hóa & Hội nhập</span>
              <div className="liquid-glass rounded-full p-2 circle">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
            </div>
            <h3 className="text-white text-xl md:text-2xl mb-3 tracking-tight">Không gian sống mới</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Sự dịch chuyển từ nông thôn ra thành thị và sự giao thoa văn hóa toàn cầu định hình lại các mô hình gia đình, thúc đẩy bình đẳng giới và tôn trọng sự khác biệt.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
