import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

// Componentes Globales
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Secciones
import { Hero } from './components/Hero';
import { HomeFeatures } from './components/HomeFeatures'; 
import { AboutSection } from './components/AboutSection';
import { TeamSection } from './components/TeamSection';
import { ServicesSection } from './components/ServicesSection';
import { ExperienceSection } from './components/ExperienceSection';
import { PortfolioSection } from './components/PortfolioSection';
import { InvestorsSection } from './components/InvestorsSection';
import { ContactSection } from './components/ContactSection'; // Ya lo tenías importado

export default function App() {
  return (
    <BrowserRouter basename="/pagina-ohnc/">
      <ScrollToTop />
      <div className="bg-white min-h-screen text-zinc-900 selection:bg-zinc-900 selection:text-white font-sans flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-20"> 
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <HomeFeatures />
              </>
            } />
            
            <Route path="/nosotros" element={
              <>
                <AboutSection />
                <TeamSection />
              </>
            } />
            
            <Route path="/servicios" element={
              <>
                <ServicesSection />
                <ExperienceSection />
              </>
            } />
            
            <Route path="/portafolio" element={<PortfolioSection />} />
            
            <Route path="/inversionistas" element={<InvestorsSection />} />

            {/* AQUI AGREGAMOS LA NUEVA RUTA */}
            <Route path="/contacto" element={<ContactSection />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}