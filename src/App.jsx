import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

// Componentes Globales
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Secciones
import { Hero } from './components/Hero';
import { HomeFeatures } from './components/HomeFeatures'; // IMPORTAMOS EL NUEVO COMPONENTE
import { AboutSection } from './components/AboutSection';
import { TeamSection } from './components/TeamSection';
import { ServicesSection } from './components/ServicesSection';
import { ExperienceSection } from './components/ExperienceSection';
import { PortfolioSection } from './components/PortfolioSection';
import { InvestorsSection } from './components/InvestorsSection';

export default function App() {
  return (
    <BrowserRouter basename="/pagina-ohnc/">
      <ScrollToTop />
      <div className="bg-white min-h-screen text-zinc-900 selection:bg-zinc-900 selection:text-white font-sans flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-20"> 
          <Routes>
            {/* Página de Inicio: Hero + Nueva sección de características */}
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
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}