import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Secciones
import { HomeFeatures } from './components/HomeFeatures'; 
import { AboutSection } from './components/AboutSection';
import { TeamSection } from './components/TeamSection';
import { ServicesSection } from './components/ServicesSection';
import { ExperienceSection } from './components/ExperienceSection';
import { PortfolioSection } from './components/PortfolioSection';
import { InvestorsSection } from './components/InvestorsSection';
import { ContactSection } from './components/ContactSection';
import { LegacySection } from './components/LegacySection';
import { CtaContact } from './components/CtaContact'; // <-- 1. Agregas esta importación

export default function App() {
  return (
    <BrowserRouter basename="/pagina-ohnc/">
      <ScrollToTop />
      <div className="bg-white min-h-screen text-zinc-900 selection:bg-zinc-900 selection:text-white font-sans flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20"> 
          <Routes>
            {/* Ruta principal corregida: Solo llama a HomeFeatures */}
            <Route path="/" element={<HomeFeatures />} />
            
            {/* 2. Agregas <CtaContact /> al final de esta ruta */}
            <Route path="/nosotros" element={<><AboutSection /><TeamSection /><CtaContact /></>} />
            
            <Route path="/legado" element={<LegacySection />} />
            <Route path="/servicios" element={<ServicesSection />} />
            <Route path="/portafolio" element={<PortfolioSection />} />
            <Route path="/inversionistas" element={<InvestorsSection />} />
            <Route path="/contacto" element={<ContactSection />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}