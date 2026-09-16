import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';

import Vision from './components/Vision';
import News from './components/News';
import Gallery from './components/Gallery';
import Social from './components/Social';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <div 
          className="relative bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/background.jpg')" }}
        >
          {/* Subtle overlay to ensure text is readable against the background */}
          <div className="absolute inset-0 bg-white/80 pointer-events-none" />
          <div className="relative z-10">
            <About />
            <Journey />
          </div>
        </div>

        <Vision />
        <News />
        <Gallery />
        <Social />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
