import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ExamsCovered from './components/ExamsCovered';
import HowItWorks from './components/HowItWorks';
import Statistics from './components/Statistics';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Features />
        <ExamsCovered />
        <HowItWorks />
        <Statistics />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
