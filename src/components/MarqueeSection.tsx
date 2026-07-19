

const images = [
  "/gallery-3.webp", // Đám cưới xưa / Truyền thống
  "/gallery-4.webp", // Gia đình 3 thế hệ
  "/gallery-6.jpg",  // Sinh hoạt gia đình
  "/gallery-1.webp", // Sinh hoạt gia đình
  "/gallery-2.jpg",  // Người cao tuổi vui vẻ
  "/gallery-7.jpg",  // Gia đình hạt nhân trẻ
  "/gallery-5.jpg"   // Phụ nữ hiện đại
];

// Duplicate for seamless scroll
const marqueeImages = [...images, ...images];

export default function MarqueeSection() {
  return (
    <section className="w-full py-12 md:py-20 overflow-hidden bg-stone-50 border-t border-stone-200">
      <div className="w-[200vw] flex flex-row animate-marquee hover:[animation-play-state:paused] transition-all">
        {marqueeImages.map((src, index) => (
          <div key={index} className="w-[300px] md:w-[400px] lg:w-[500px] h-[200px] md:h-[300px] lg:h-[400px] shrink-0 mx-3 md:mx-4">
            <img 
              src={src} 
              alt={`Gallery ${index}`} 
              className="w-full h-full object-cover rounded-2xl shadow-lg border border-stone-200 transition-all duration-500 cursor-pointer"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
