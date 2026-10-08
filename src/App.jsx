import './index.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-white min-h-screen text-slate-800 selection:bg-blue-900 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        {/* Sección extendida con texto e imágenes */}
        <AboutSection />
        {/* Catálogo de propiedades */}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}