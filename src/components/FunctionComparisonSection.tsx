import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

const functions = [
  {
    title: "Kinh tế & Sản xuất",
    traditional: "Là một đơn vị sản xuất đóng kín (hộ nông nghiệp). Tự cung tự cấp là chính.",
    modern: "Là một đơn vị tiêu dùng. Thu nhập dựa vào tiền lương cá nhân từ thị trường lao động bên ngoài."
  },
  {
    title: "Sinh sản & Tái sản xuất",
    traditional: "Sinh nhiều con để tăng lao động và nối dõi (tâm lý 'trời sinh voi trời sinh cỏ').",
    modern: "Sinh ít con để đầu tư chất lượng nuôi dạy. Tỷ suất sinh quốc gia có xu hướng giảm mạnh."
  },
  {
    title: "Giáo dục & Xã hội hóa",
    traditional: "Gia đình là trường học đầu tiên và toàn diện. Ông bà, cha mẹ dạy chữ, dạy nghề, dạy đạo đức trực tiếp.",
    modern: "Chuyển giao phần lớn cho nhà trường, trung tâm kỹ năng và các dịch vụ xã hội."
  },
  {
    title: "Chăm sóc người già & Trẻ nhỏ",
    traditional: "Hoàn toàn do các thành viên trong gia đình tự vận hành dựa trên chữ 'Hiếu' và nghĩa vụ.",
    modern: "Được hỗ trợ hoặc thay thế một phần bởi dịch vụ xã hội (viện dưỡng lão, trường mầm non tư thục, bảo mẫu)."
  }
];

export default function FunctionComparisonSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-24 md:py-40 px-6 bg-stone-100 relative border-t border-stone-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-red-800/80 text-sm tracking-widest uppercase mb-4 font-medium">Chương 5: Phân rã & Chuyển dịch</p>
          <h2 className="text-4xl md:text-5xl text-stone-900 font-serif mb-6">
            Sự dịch chuyển <em className="italic text-red-800">Chức năng</em>
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Khung chức năng của gia đình có sự phân rã mạnh mẽ, chuyển từ mô hình bao cấp toàn diện sang việc chia sẻ với các thiết chế xã hội.
          </p>
        </div>

        <div className="space-y-12 md:space-y-16 relative">
          {/* Animated Line connecting items */}
          <div className="hidden md:block absolute left-4 top-0 bottom-0 w-px bg-stone-200" />
          <motion.div 
            style={{ height: lineHeight }}
            className="hidden md:block absolute left-4 top-0 w-[2px] bg-red-800 -translate-x-[0.5px] origin-top" 
          />

          {functions.map((fn, idx) => (
            <FunctionItem 
              key={idx}
              fn={fn}
              idx={idx}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FunctionItem({ fn, idx, scrollYProgress }: { fn: typeof functions[0], idx: number, scrollYProgress: MotionValue<number> }) {
  const itemProgressStart = idx * 0.25;
  
  const isActive = useTransform(
    scrollYProgress,
    [itemProgressStart - 0.1, itemProgressStart],
    [0, 1]
  );

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="relative z-10 md:pl-16"
    >
      {/* Dot on the timeline */}
      <motion.div 
        style={{ opacity: isActive, scale: isActive }}
        className="hidden md:block absolute left-4 top-1/2 -mt-2 w-4 h-4 rounded-full bg-red-800 -translate-x-[7px] shadow-[0_0_15px_rgba(153,27,27,0.5)] z-20" 
      />

      <div className="group bg-white rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center border border-stone-200 transition-all hover:shadow-[var(--shadow-complex-secondary)] hover:-translate-y-1">
        
        <div className="w-full md:w-1/4">
          <h3 className="text-2xl font-serif font-medium text-stone-900 group-hover:text-red-800 transition-colors">{fn.title}</h3>
        </div>
        
        <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
          <div className="md:pr-6">
            <span className="inline-block text-xs uppercase tracking-widest text-stone-400 font-bold mb-4">Truyền thống</span>
            <p className="text-stone-600 leading-relaxed text-base">{fn.traditional}</p>
          </div>
          
          <div className="md:pl-6 relative">
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-stone-200 group-hover:bg-red-200 transition-colors" />
            <span className="inline-block text-xs uppercase tracking-widest text-red-800/80 font-bold mb-4">Hiện nay</span>
            <p className="text-stone-900 leading-relaxed font-medium group-hover:text-red-900 transition-colors text-base">{fn.modern}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
