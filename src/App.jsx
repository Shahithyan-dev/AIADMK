import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Constituency from './components/Constituency';
import Vision from './components/Vision';
import Agenda from './components/Agenda';
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
        <About />
        <Journey />
        <Constituency />
        <Vision />
        <Agenda />
        <News />
        <Gallery />
        <Social />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
