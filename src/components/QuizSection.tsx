import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnet from './Magnet';

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
      "Khoán trắng cho viện dưỡng lão, thỉnh thực gửi tiền là đủ."
    ],
    answer: 1,
    explanation: "Vận dụng các dịch vụ của kinh tế thị trường để đảm bảo sức khỏe cho cha mẹ, nhưng vẫn giữ được giá trị truyền thống (quan tâm, tình cảm)."
  }
];

const multipleChoice = [
  {
    title: "Câu 1",
    question: "Dưới tác động của đô thị hóa, mô hình gia đình Việt Nam hiện nay phổ biến nhất là gì?",
    options: [
      "Gia đình tam đại đồng đường (3 thế hệ).",
      "Gia đình hạt nhân (2 thế hệ).",
      "Gia đình mở rộng."
    ],
    answer: 1,
    explanation: "Gia đình hạt nhân là mô hình phổ biến nhất hiện nay ở các đô thị."
  },
  {
    title: "Câu 2",
    question: "Chức năng nào của gia đình đang có xu hướng giảm nhẹ sự phụ thuộc vào nội bộ gia đình do sự phát triển của dịch vụ xã hội?",
    options: [
      "Chức năng tái sản xuất sức người.",
      "Chức năng giáo dục và chăm sóc y tế.",
      "Chức năng thỏa mãn tâm sinh lý."
    ],
    answer: 1,
    explanation: "Các dịch vụ như y tế, trường học, viện dưỡng lão đang hỗ trợ gia đình rất nhiều."
  },
  {
    title: "Câu 3",
    question: "Đặc trưng lớn nhất của mối quan hệ vợ chồng trong gia đình Việt Nam hiện đại là gì?",
    options: [
      "Người chồng là trụ cột duy nhất.",
      "Sự bình đẳng, dân chủ và chia sẻ.",
      "Quyết định hoàn toàn thuộc về người vợ."
    ],
    answer: 1,
    explanation: "Bình đẳng và dân chủ là giá trị cốt lõi của gia đình hiện đại."
  },
  {
    title: "Câu 4",
    question: "'Hiếu nghĩa, thủy chung, tương trợ' thuộc nhóm giá trị nào của gia đình Việt Nam?",
    options: [
      "Giá trị truyền thống.",
      "Giá trị hiện đại.",
      "Giá trị ngoại lai."
    ],
    answer: 0,
    explanation: "Đây là những giá trị đạo đức truyền thống tốt đẹp của dân tộc."
  },
  {
    title: "Câu 5",
    question: "Công nghệ 4.0 mang lại thách thức lớn nhất nào cho chức năng giáo dục của gia đình?",
    options: [
      "Trẻ em tiếp cận thông tin quá ít.",
      "Khó kiểm soát nguồn thông tin và khoảng cách thế hệ.",
      "Chi phí mua thiết bị đắt đỏ."
    ],
    answer: 1,
    explanation: "Khối lượng thông tin khổng lồ và khó kiểm duyệt là thách thức lớn nhất."
  },
  {
    title: "Câu 6",
    question: "Quy mô gia đình Việt Nam ngày nay có xu hướng:",
    options: [
      "Ngày càng tăng số lượng thành viên.",
      "Giữ nguyên không đổi.",
      "Thu nhỏ lại."
    ],
    answer: 2,
    explanation: "Quy mô gia đình ngày càng thu nhỏ do sinh ít con và xu hướng sống độc lập."
  },
  {
    title: "Câu 7",
    question: "Yếu tố nào làm thay đổi mạnh mẽ vai trò kinh tế của người phụ nữ trong gia đình?",
    options: [
      "Kinh tế thị trường và hội nhập quốc tế.",
      "Biến đổi khí hậu.",
      "Sự phát triển của nông nghiệp."
    ],
    answer: 0,
    explanation: "Phụ nữ ngày càng tham gia nhiều vào thị trường lao động và làm chủ kinh tế."
  },
  {
    title: "Câu 8",
    question: "Theo lý thuyết, sự biến đổi của gia đình Việt Nam hiện nay diễn ra trong bối cảnh nào?",
    options: [
      "Thời kỳ bao cấp.",
      "Thời kỳ quá độ lên chủ nghĩa xã hội và hội nhập.",
      "Thời kỳ kháng chiến."
    ],
    answer: 1,
    explanation: "Sự giao thoa trong thời kỳ quá độ tạo nên sự biến đổi đa dạng."
  },
  {
    title: "Câu 9",
    question: "Việc áp dụng các thiết bị thông minh (Smarthome, Robot hút bụi) giúp giải quyết vấn đề gì trong gia đình?",
    options: [
      "Tăng áp lực tài chính.",
      "Giải phóng sức lao động, có thêm thời gian gắn kết.",
      "Tăng khoảng cách giữa các thế hệ."
    ],
    answer: 1,
    explanation: "Công nghệ giúp giảm tải việc nhà, từ đó có nhiều thời gian chất lượng cho nhau hơn."
  },
  {
    title: "Câu 10",
    question: "Thông điệp cốt lõi khi xây dựng gia đình Việt Nam 4.0 là:",
    options: [
      "Xóa bỏ hoàn toàn cái cũ để theo cái mới.",
      "Khép kín, từ chối công nghệ để giữ gìn nếp nhà.",
      "Giữ gìn bản sắc truyền thống và tiếp thu có chọn lọc tinh hoa hiện đại."
    ],
    answer: 2,
    explanation: "Đây là mục tiêu phát triển bền vững của gia đình Việt Nam trong thời đại mới."
  }
];

export default function QuizSection() {
  const [activeTab, setActiveTab] = useState<'situations' | 'quiz'>('situations');
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const activeQuestions = activeTab === 'situations' ? situations : multipleChoice;

  const handleTabChange = (tab: 'situations' | 'quiz') => {
    setActiveTab(tab);
    setCurrentQ(0);
    setSelected(null);
    setShowResult(false);
  };

  const handleSelect = (index: number) => {
    if (showResult) return;
    setSelected(index);
    setShowResult(true);
  };

  const nextQ = () => {
    if (currentQ < activeQuestions.length - 1) {
      setCurrentQ(prev => prev + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      setCurrentQ(0);
      setSelected(null);
      setShowResult(false);
    }
  };

  const q = activeQuestions[currentQ];

  return (
    <section className="py-24 md:py-40 px-6 bg-stone-100 relative border-t border-stone-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-red-800/80 text-sm tracking-widest uppercase mb-4 font-medium">Chương 7: Giao lưu Giá trị</p>
          <h2 className="text-4xl md:text-5xl text-stone-900 font-serif">Tương tác & <em className="italic text-red-800">Xử lý tình huống</em></h2>
          <p className="text-stone-600 mt-4">Kiểm tra kiến thức và cách ứng xử của bạn trước các biến đổi gia đình.</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-stone-200/50 p-1 rounded-full flex gap-1">
            <button
              onClick={() => handleTabChange('situations')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${activeTab === 'situations' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-500 hover:text-stone-700'}`}
            >
              Phần 1: Xử lý tình huống
            </button>
            <button
              onClick={() => handleTabChange('quiz')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${activeTab === 'quiz' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-500 hover:text-stone-700'}`}
            >
              Phần 2: Trắc nghiệm 10 Câu
            </button>
          </div>
        </div>

        <div className="liquid-glass rounded-[40px] p-6 md:p-12 min-h-[450px] flex flex-col border border-stone-200 shadow-[var(--shadow-complex-secondary)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + currentQ}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block px-3 py-1 bg-red-800/10 text-red-800 rounded-full text-xs font-semibold">
                  {q.title}
                </span>
                <span className="text-stone-400 text-sm font-medium">
                  {currentQ + 1} / {activeQuestions.length}
                </span>
              </div>
              
              <h3 className="text-xl md:text-2xl text-stone-900 mb-8 leading-relaxed font-medium">
                {q.question}
              </h3>
              
              <div className="space-y-4">
                {q.options.map((opt, i) => {
                  let btnClass = "w-full text-left p-5 rounded-2xl border border-stone-200 text-stone-700 transition-all font-medium ";
                  if (showResult) {
                    if (i === q.answer) btnClass += "bg-green-100 border-green-300 text-green-900";
                    else if (i === selected) btnClass += "bg-red-100 border-red-300 text-red-900";
                    else btnClass += "opacity-50";
                  } else {
                    btnClass += "hover:bg-white hover:border-stone-300 cursor-pointer bg-stone-50/50 hover:shadow-sm hover:-translate-y-[1px]";
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
                  className="mt-8 p-6 rounded-2xl bg-white border border-stone-200 shadow-sm"
                >
                  <p className="text-stone-900 font-semibold mb-2">Giải thích:</p>
                  <p className="text-stone-600 text-base leading-relaxed">{q.explanation}</p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          {showResult && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 pt-8 border-t border-stone-200 flex justify-end"
            >
              <Magnet padding={40}>
                <button 
                  onClick={nextQ}
                  className="bg-stone-900 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-stone-800 transition-colors shadow-[var(--shadow-complex-primary)]"
                >
                  {currentQ < activeQuestions.length - 1 ? 'Câu tiếp theo' : 'Làm lại phần này'}
                </button>
              </Magnet>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
