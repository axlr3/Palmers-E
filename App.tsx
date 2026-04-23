import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import KaraokeSection from './components/KaraokeSection';
import ReviewsSection from './components/ReviewsSection';
import FeaturesSection from './components/FeaturesSection';
import LocationSection from './components/LocationSection';
import SectionTransition from './components/SectionTransition';
import Footer from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Prevent FOUC
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div
      className="relative min-h-screen"
      style={{ background: '#0a0a0b', color: '#f0ece4' }}
    >
      {/* Scroll progress bar */}
      <motion.div
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, #ff3b3b, #ffb347, #ff3b3b)',
          transformOrigin: '0%',
          zIndex: 100,
          boxShadow: '0 0 8px #ffb347',
        }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Page sections */}
      <main>
        <HeroSection />
        <SectionTransition label="THE VIBE" color="#ffb347" />
        <AboutSection />
        <SectionTransition label="WHAT WE SERVE" color="#ff3b3b" />
        <MenuSection />
        <SectionTransition label="TONIGHT'S FEATURE" color="#ff3b3b" />
        <KaraokeSection />
        <SectionTransition label="WHAT PEOPLE SAY" color="#39ff14" />
        <ReviewsSection />
        <SectionTransition label="THE FULL EXPERIENCE" color="#ffb347" />
        <FeaturesSection />
        <SectionTransition label="FIND US" color="#ffb347" />
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
