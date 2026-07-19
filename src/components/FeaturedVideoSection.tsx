import { motion } from 'framer-motion';

export default function FeaturedVideoSection() {
  return (
    <section className="bg-black pt-6 md:pt-10 pb-20 md:pb-32 px-6 overflow-hidden max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9 }}
        className="rounded-3xl overflow-hidden aspect-video relative"
      >
        <video 
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4"
          className="w-full h-full object-cover"
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col md:flex-row justify-between items-end md:items-center gap-6">
          <div className="liquid-glass rounded-2xl p-6 md:p-8 max-w-md w-full md:w-auto">
            <p className="text-white/50 text-xs tracking-widest uppercase mb-3">
              Cách tiếp cận
            </p>
            <p className="text-white text-sm md:text-base leading-relaxed">
              Mỗi sự thay đổi đều mở ra một cánh cửa mới. Gia đình Việt Nam đang chuyển mình mạnh mẽ trước chuyển đổi số và hội nhập, vừa gìn giữ truyền thống vừa tiếp thu giá trị hiện đại.
            </p>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium self-start md:self-auto"
          >
            Tìm hiểu thêm
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
