import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const situations = [
  {
    title: "Tình huống 1: Bữa cơm và Điện thoại",
    question: "Trong bữa tối, con trai 15 tuổi lướt TikTok, chồng trả lời email công việc. Người vợ nhắc nhở nhưng không ai chú ý. Bạn sẽ làm gì?",
    options: [
      "Cắt mạng WiFi vào giờ ăn cơm để ép mọi người nói chuyện.",
      "Mặc kệ, coi đây là chuyện bình thường của thời đại công nghệ.",
      "Gia đình thống nhất 'Quy tắc không màn hình' khi ngồi vào bàn ăn."
    ],
    answer: 2,
    explanation: "Lựa chọn C kết hợp giá trị truyền thống (trân trọng bữa cơm gia đình) và tư duy hiện đại (dân chủ thảo luận, thiết lập quy tắc chung thay vì cấm đoán cực đoan)."
  },
  {
    title: "Tình huống 2: Mâu thuẫn Tết nội - Tết ngoại",
    question: "Gần Tết, chồng muốn về quê nội 7 ngày như truyền thống. Vợ muốn chia đôi thời gian (3 ngày nội, 3 ngày ngoại) hoặc đi du lịch xả stress. Xử lý sao?",
    options: [
      "Ép vợ theo truyền thống 'thuyền theo lái, gái theo chồng'.",
      "Vợ chồng thảo luận, luân phiên năm nay nội, năm sau ngoại, hoặc chia đôi.",
      "Việc ai nấy làm, Tết ai nấy về nhà người đó."
    ],
    answer: 1,
    explanation: "Giá trị hiện đại đề cao Bình đẳng giới và Dân chủ. Lựa chọn B vừa giữ được chữ Hiếu vừa thể hiện sự tôn trọng, chia sẻ trách nhiệm."
  },
  {
    title: "Tình huống 3: Khoảng cách thế hệ mạng xã hội",
    question: "Con cái đăng status than thở áp lực học tập. Cha mẹ đọc được, cảm thấy 'mất mặt' với họ hàng và mắng con. Mâu thuẫn nổ ra.",
    options: [
      "Bắt con xóa bài và cấm dùng mạng xã hội.",
      "Con cái block cha mẹ để tự do không gian mạng.",
      "Cha mẹ chủ động trò chuyện để hiểu con; con học cách chọn lọc thông tin."
    ],
    answer: 2,
    explanation: "Thời đại 4.0 cần 'Tôn trọng quyền cá nhân' (của con) và 'Sự thấu cảm' (của cha mẹ). Giao tiếp cởi mở là chìa khóa thu hẹp khoảng cách."
  },
  {
    title: "Tình huống 4: Phân công việc nhà",
    question: "Vợ làm việc WFH thường xuyên họp online. Chồng làm giờ hành chính về thấy nhà bừa bộn nên trách: 'Ở nhà cả ngày mà không dọn dẹp được à?'.",
    options: [
      "Vợ nhẫn nhịn dọn dẹp để giữ hòa khí gia đình.",
      "Vợ cãi lại vì mình cũng kiếm ra tiền.",
      "Vợ giải thích tính chất công việc; chồng hiểu và cùng bắt tay dọn dẹp."
    ],
    answer: 2,
    explanation: "Chức năng kinh tế được chia đều, do đó 'Chia sẻ trách nhiệm' việc nhà không còn là của riêng phụ nữ. Lựa chọn C thể hiện sự bình đẳng."
  },
  {
    title: "Tình huống 5: Chăm sóc người cao tuổi",
    question: "Cha mẹ già yếu, cả hai vợ chồng đều bận sự nghiệp và chăm con nhỏ, không thể túc trực 24/24.",
    options: [
      "Một người nghỉ việc ở nhà chăm sóc cha mẹ để giữ tròn chữ Hiếu.",
      "Thuê dịch vụ y tế tại nhà hoặc viện dưỡng lão, đồng thời thường xuyên thăm hỏi.",
      "Khoán trắng cho viện dưỡng lão, thỉnh thoảng gửi tiền là đủ."
    ],
    answer: 1,
    explanation: "Vận dụng các dịch vụ của kinh tế thị trường để đảm bảo sức khỏe cho cha mẹ, nhưng vẫn giữ được giá trị truyền thống (quan tâm, tình cảm)."
  }
];

export default function QuizSection() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (index: number) => {
    if (showResult) return;
    setSelected(index);
    setShowResult(true);
  };

  const nextQ = () => {
    if (currentQ < situations.length - 1) {
      setCurrentQ(prev => prev + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      setCurrentQ(0);
      setSelected(null);
      setShowResult(false);
    }
  };

  const q = situations[currentQ];

  return (
    <section className="py-24 md:py-40 px-6 bg-stone-100 relative border-t border-stone-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-red-800/80 text-sm tracking-widest uppercase mb-4 font-medium">Chương 7: Giao lưu Giá trị</p>
          <h2 className="text-4xl md:text-5xl text-stone-900 font-serif">Tương tác & <em className="italic text-red-800">Xử lý tình huống</em></h2>
          <p className="text-stone-600 mt-4">Đứng trước những tình huống thực tế, bạn sẽ chọn 'bám víu lối cũ' hay 'táo bạo góc nhìn mới'?</p>
        </div>

        <div className="liquid-glass rounded-3xl p-6 md:p-12 min-h-[450px] flex flex-col shadow-xl shadow-stone-900/5">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQ}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1"
            >
              <span className="inline-block px-3 py-1 bg-red-800/10 text-red-800 rounded-full text-xs font-semibold mb-4">
                {q.title}
              </span>
              <h3 className="text-xl md:text-2xl text-stone-900 mb-8 leading-relaxed font-medium">
                {q.question}
              </h3>
              
              <div className="space-y-4">
                {q.options.map((opt, i) => {
                  let btnClass = "w-full text-left p-4 rounded-xl border border-stone-200 text-stone-700 transition-all font-medium ";
                  if (showResult) {
                    if (i === q.answer) btnClass += "bg-green-100 border-green-300 text-green-900";
                    else if (i === selected) btnClass += "bg-red-100 border-red-300 text-red-900";
                    else btnClass += "opacity-50";
                  } else {
                    btnClass += "hover:bg-white hover:border-stone-300 cursor-pointer bg-stone-50/50";
                  }

                  return (
                    <button
                      key={i}
                      onClick={() => handleSelect(i)}
                      disabled={showResult}
                      className={btnClass}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {showResult && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 p-4 rounded-xl bg-white border border-stone-200"
                >
                  <p className="text-stone-900 font-semibold mb-2">Giải thích:</p>
                  <p className="text-stone-600 text-sm leading-relaxed">{q.explanation}</p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          {showResult && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 pt-6 border-t border-stone-200 flex justify-end"
            >
              <button 
                onClick={nextQ}
                className="bg-stone-900 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-stone-800 transition-colors shadow-lg"
              >
                {currentQ < situations.length - 1 ? 'Tình huống tiếp theo' : 'Làm lại'}
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
