import { motion } from "framer-motion";

export default function CreditsSection() {
  return (
    <section className="py-24 px-6 bg-stone-50 text-stone-900 font-sans border-t border-stone-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-red-800/80 text-sm tracking-widest uppercase mb-4 font-medium">
            Báo cáo & Tổng kết
          </p>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Công nghệ & <em className="italic text-red-800">Tài liệu</em>
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Tổng hợp các công cụ hỗ trợ và nguồn tài liệu tham khảo được sử dụng
            để hoàn thiện dự án.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Công nghệ sử dụng */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[32px] p-8 md:p-10 border border-stone-200 shadow-sm flex flex-col hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-stone-100 rounded-2xl flex items-center justify-center text-red-800 font-bold mb-6 border border-stone-200">
              {"</>"}
            </div>
            <h3 className="text-2xl font-serif font-medium text-stone-900 mb-8">
              Công nghệ sử dụng
            </h3>

            <div className="flex flex-wrap gap-2 mb-12">
              {[
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Framer Motion",
                "Vite",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-stone-50 text-stone-700 rounded-full text-sm border border-stone-200 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto flex justify-between items-center border-t border-stone-100 pt-6">
              <span className="text-stone-500 font-medium text-sm uppercase tracking-wider">
                Deploy
              </span>
              <span className="text-stone-900 font-semibold">Vercel</span>
            </div>
          </motion.div>

          {/* Card 2: AI hỗ trợ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-[32px] p-8 md:p-10 border border-stone-200 shadow-sm flex flex-col hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-stone-100 rounded-2xl flex items-center justify-center text-red-800 font-bold mb-6 border border-stone-200 text-sm">
              AI
            </div>
            <h3 className="text-2xl font-serif font-medium text-stone-900 mb-8">
              Trí tuệ nhân tạo
            </h3>

            <div className="mb-6">
              <h4 className="text-stone-900 font-semibold mb-3">
                ChatGPT & Gemini
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-stone-50 text-stone-600 rounded-full text-xs border border-stone-200">
                  Phát triển ý tưởng
                </span>
                <span className="px-3 py-1.5 bg-stone-50 text-stone-600 rounded-full text-xs border border-stone-200">
                  Hỗ trợ lập trình
                </span>
                <span className="px-3 py-1.5 bg-stone-50 text-stone-600 rounded-full text-xs border border-stone-200">
                  Biên tập nội dung
                </span>
                <span className="px-3 py-1.5 bg-stone-50 text-stone-600 rounded-full text-xs border border-stone-200">
                  Xây dựng câu hỏi
                </span>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-stone-900 font-semibold mb-2">Antigravity</h4>
              <p className="text-stone-500 text-sm">
                Tạo hình minh họa và thiết kế không gian giao diện.
              </p>
            </div>

            <div className="mt-auto bg-stone-50 border-l-4 border-red-800 p-5 rounded-r-2xl">
              <h5 className="text-stone-900 font-semibold mb-1 text-sm">
                Lưu ý về AI
              </h5>
              <p className="text-stone-500 text-xs leading-relaxed">
                AI chỉ đóng vai trò hỗ trợ. Tác giả chịu trách nhiệm kiểm tra,
                chỉnh sửa và hoàn thiện toàn bộ nội dung & code.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Nguồn tham khảo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[32px] p-8 md:p-10 border border-stone-200 shadow-sm flex flex-col hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-stone-100 rounded-2xl flex items-center justify-center text-red-800 font-bold mb-6 border border-stone-200 text-xl font-serif">
              §
            </div>
            <h3 className="text-2xl font-serif font-medium text-stone-900 mb-8">
              Nguồn tham khảo
            </h3>

            <div className="flex flex-col gap-4">
              <div className="border-b border-stone-100 pb-4 text-stone-700 text-sm">
                Giáo trình Chủ nghĩa xã hội khoa học — Chương 7 (Vấn đề gia đình)
              </div>
              <div className="border-b border-stone-100 pb-4 text-stone-700 text-sm">
                Hiến pháp năm 2013 — Điều 36 (Về hôn nhân và gia đình)
              </div>
              <div className="border-b border-stone-100 pb-4 text-stone-700 text-sm">
                Luật Hôn nhân và Gia đình năm 2014
              </div>
              <div className="border-b border-stone-100 pb-4">
                <a
                  href="#"
                  className="text-red-800 hover:text-red-900 font-medium text-sm transition-colors"
                >
                  Chiến lược phát triển gia đình Việt Nam đến năm 2030
                </a>
              </div>
              <div className="pb-4">
                <a
                  href="#"
                  className="text-red-800 hover:text-red-900 font-medium text-sm transition-colors"
                >
                  Cổng thông tin điện tử Tổng cục Thống kê
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
