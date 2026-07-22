import { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import TraditionalSection from './components/TraditionalSection';
import TimelineSection from './components/TimelineSection';
import FunctionComparisonSection from './components/FunctionComparisonSection';
import ComparisonSection from './components/ComparisonSection';
import PolicySection from './components/PolicySection';
import QuizSection from './components/QuizSection';
import ConclusionSection from './components/ConclusionSection';
import CreditsSection from './components/CreditsSection';
import Preloader from './components/Preloader';
import MarqueeSection from './components/MarqueeSection';
import BottomNav from './components/BottomNav';

function App() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Prevent scrolling while loading
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [loading]);

  return (
    <>
      {/* Film Grain Overlay for entire site */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

      {loading && (
        <Preloader onComplete={() => {
          setLoading(false);
          setShowContent(true);
        }} />
      )}

      <main className={`bg-stone-50 min-h-screen text-stone-900 font-sans selection:bg-red-800/20 ${!showContent ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000`}>
        <HeroSection />
        <MarqueeSection />
        <TimelineSection />
        <TraditionalSection />
        <ComparisonSection />
        <FunctionComparisonSection />
        <PolicySection />
        <QuizSection />
        <ConclusionSection />
        <CreditsSection />
        
        
        <footer className="bg-stone-100 py-12 border-t border-stone-200 text-center relative z-10 pb-32">
          <p className="text-stone-500 text-sm">
            Triển lãm số: Gia đình Việt Nam 4.0 – Giữ hồn truyền thống, sống cùng hiện đại.
          </p>
        </footer>
      </main>

      {showContent && <BottomNav />}
    </>
  );
}

export default App;
