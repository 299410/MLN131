import { motion } from 'framer-motion';

export default function PolicySection() {
  return (
    <section className="py-24 md:py-40 px-6 bg-stone-50 border-t border-stone-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-red-800/80 text-sm tracking-widest uppercase mb-4 font-medium">Chương 6: Hệ quả & Giải pháp</p>
          <h2 className="text-4xl md:text-5xl text-stone-900 font-serif">Định hướng <em className="italic text-red-800">tương lai</em></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-stone-200"
          >
            <h3 className="text-2xl text-stone-900 font-medium mb-6 text-green-800">Hệ quả Tích cực</h3>
            <ul className="space-y-4 text-stone-600 text-sm leading-relaxed list-disc list-inside">
              <li>Giải phóng cá nhân (đặc biệt là phụ nữ và trẻ em) khỏi những định kiến ràng buộc lạc hậu.</li>
              <li>Gia đình linh hoạt hơn, dễ thích ứng với sự thay đổi của kinh tế toàn cầu.</li>
              <li>Chất lượng cuộc sống vật chất và giáo dục cho trẻ em được nâng cao vượt bậc.</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-stone-200"
          >
            <h3 className="text-2xl text-stone-900 font-medium mb-6 text-red-800">Khủng hoảng & Thách thức</h3>
            <ul className="space-y-4 text-stone-600 text-sm leading-relaxed list-disc list-inside">
              <li>Khủng hoảng chức năng an sinh: Chăm sóc người già trở thành áp lực lớn khi gia đình hạt nhân thu nhỏ và dân số già hóa.</li>
              <li>Sự lỏng lẻo về đạo đức: Gia tăng bạo lực gia đình, xâm hại trẻ em và sự cô đơn của người trẻ trong chính ngôi nhà của mình.</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="liquid-glass rounded-3xl p-8 md:p-12 border border-stone-200"
        >
          <h3 className="text-2xl text-stone-900 font-medium mb-8 text-center">Khuyến nghị Chính sách & Giải pháp</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-stone-900 font-medium mb-3">1. Hệ thống An sinh Xã hội chia sẻ</h4>
              <p className="text-stone-600 text-sm leading-relaxed">Nhà nước đầu tư mạnh vào mô hình nhà trẻ công lập chất lượng cao và trung tâm dưỡng lão thân thiện để gánh vác áp lực cho gia đình hạt nhân.</p>
            </div>
            <div>
              <h4 className="text-stone-900 font-medium mb-3">2. Kinh tế thân thiện với Gia đình</h4>
              <p className="text-stone-600 text-sm leading-relaxed">Áp dụng chế độ thai sản linh hoạt. Khuyến nghị doanh nghiệp tạo điều kiện cho lao động có con nhỏ (làm việc từ xa, giờ giấc linh hoạt).</p>
            </div>
            <div>
              <h4 className="text-stone-900 font-medium mb-3">3. Giáo dục Tiền hôn nhân & Giới tính</h4>
              <p className="text-stone-600 text-sm leading-relaxed">Đưa chương trình tâm lý, kỹ năng sống vào giáo dục đại học để giảm tỷ lệ ly hôn xanh. Đảm bảo an toàn tình dục, sức khỏe sinh sản.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
