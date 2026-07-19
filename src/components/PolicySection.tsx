import { motion } from 'framer-motion';

export default function PolicySection() {
  return (
    <section className="py-24 md:py-40 px-6 bg-stone-50 border-t border-stone-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-red-800/80 text-sm tracking-widest uppercase mb-4 font-medium">Chương 6: Hệ quả & Giải pháp</p>
            <h2 className="text-4xl md:text-5xl text-stone-900 font-serif">Định hướng <em className="italic text-red-800">tương lai</em></h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[40px] shadow-[var(--shadow-complex-secondary)] border border-stone-200 hover:-translate-y-2 transition-transform duration-500"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-800 font-bold text-xl">+</div>
              <h3 className="text-3xl text-stone-900 font-serif font-medium">Hệ quả Tích cực</h3>
            </div>
            <ul className="space-y-6 text-stone-600 text-base md:text-lg leading-relaxed">
              <li className="flex gap-4">
                <span className="text-green-800 font-bold">•</span>
                <span>Giải phóng cá nhân (đặc biệt là phụ nữ và trẻ em) khỏi những định kiến ràng buộc lạc hậu.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-green-800 font-bold">•</span>
                <span>Gia đình linh hoạt hơn, dễ thích ứng với sự thay đổi của kinh tế toàn cầu.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-green-800 font-bold">•</span>
                <span>Chất lượng cuộc sống vật chất và giáo dục cho trẻ em được nâng cao vượt bậc.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 md:p-12 rounded-[40px] shadow-[var(--shadow-complex-secondary)] border border-stone-200 hover:-translate-y-2 transition-transform duration-500"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-800 font-bold text-xl">-</div>
              <h3 className="text-3xl text-stone-900 font-serif font-medium">Khủng hoảng & Thách thức</h3>
            </div>
            <ul className="space-y-6 text-stone-600 text-base md:text-lg leading-relaxed">
              <li className="flex gap-4">
                <span className="text-red-800 font-bold">•</span>
                <span>Khủng hoảng chức năng an sinh: Chăm sóc người già trở thành áp lực lớn khi gia đình hạt nhân thu nhỏ và dân số già hóa.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-red-800 font-bold">•</span>
                <span>Sự lỏng lẻo về đạo đức: Gia tăng bạo lực gia đình, xâm hại trẻ em và sự cô đơn của người trẻ trong chính ngôi nhà của mình.</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="liquid-glass rounded-[40px] p-8 md:p-16 border border-stone-200 shadow-xl"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl text-stone-900 font-serif font-medium mb-4">Khuyến nghị Giải pháp</h3>
            <div className="w-24 h-1 bg-red-800/40 mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group">
              <div className="text-5xl font-serif text-stone-200 font-bold mb-4 group-hover:text-red-800 transition-colors">01</div>
              <h4 className="text-xl text-stone-900 font-medium mb-4">An sinh Xã hội chia sẻ</h4>
              <p className="text-stone-600 text-base leading-relaxed">Nhà nước đầu tư mạnh vào mô hình nhà trẻ công lập chất lượng cao và trung tâm dưỡng lão thân thiện để gánh vác áp lực cho gia đình hạt nhân.</p>
            </div>
            <div className="group">
              <div className="text-5xl font-serif text-stone-200 font-bold mb-4 group-hover:text-red-800 transition-colors">02</div>
              <h4 className="text-xl text-stone-900 font-medium mb-4">Kinh tế thân thiện</h4>
              <p className="text-stone-600 text-base leading-relaxed">Áp dụng chế độ thai sản linh hoạt. Khuyến nghị doanh nghiệp tạo điều kiện cho lao động có con nhỏ (làm việc từ xa, giờ giấc linh hoạt).</p>
            </div>
            <div className="group">
              <div className="text-5xl font-serif text-stone-200 font-bold mb-4 group-hover:text-red-800 transition-colors">03</div>
              <h4 className="text-xl text-stone-900 font-medium mb-4">Giáo dục Tiền hôn nhân</h4>
              <p className="text-stone-600 text-base leading-relaxed">Đưa chương trình tâm lý, kỹ năng sống vào giáo dục đại học để giảm tỷ lệ ly hôn xanh. Đảm bảo an toàn tình dục, sức khỏe sinh sản.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
