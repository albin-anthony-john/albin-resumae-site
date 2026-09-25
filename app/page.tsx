import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import Skills from '@/components/sections/Skills';
import EngineeringMindset from '@/components/sections/EngineeringMindset';
import PerformanceOptimizations from '@/components/sections/PerformanceOptimizations';
import ProductionChallenges from '@/components/sections/ProductionChallenges';
import SystemDesign from '@/components/sections/SystemDesign';
import Experience from '@/components/sections/Experience';
import Strengths from '@/components/sections/Strengths';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen">
      <Header />
      <div id="home">
        <Hero />
      </div>
      <Skills />
      <EngineeringMindset />
      <PerformanceOptimizations />
      <ProductionChallenges />
      <SystemDesign />
      <Experience />
      <Strengths />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
