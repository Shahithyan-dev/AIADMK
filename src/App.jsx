import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FirstTimeCandidate from './components/FirstTimeCandidate';
import About from './components/About';
import Journey from './components/Journey';
import Constituency from './components/Constituency';
import Vision from './components/Vision';
import Agenda from './components/Agenda';
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
        <FirstTimeCandidate />
        <About />
        <Journey />
        <Constituency />
        <Vision />
        <Agenda />
        <Gallery />
        <Social />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
