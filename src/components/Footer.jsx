import { ArrowUp, Globe } from 'lucide-react';
import { siteData } from '../data/content';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contacto" className="relative bg-zinc-800 text-zinc-300 font-sans border-t border-zinc-700">
      
      {/* Contenedor Principal (Columnas) */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 pt-20 pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Columna 1: Contacto */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white mb-8">
              Contáctanos
            </h4>
            
            <div className="mb-6">
              <p className="text-[11px] uppercase tracking-wider text-white mb-1">Sede Comercial y Operativa</p>
              <p className="text-sm text-zinc-400">Blvd. Bernardo Quintana, 76000<br/>{siteData.global.location}</p>
            </div>
            
            <div className="mb-6">
              <p className="text-[11px] uppercase tracking-wider text-white mb-1">Sede Corporativa</p>
              <p className="text-sm text-zinc-400">Corporativo Juriquilla, Piso 8<br/>{siteData.global.location}</p>
            </div>

            <div className="mb-6 space-y-2 text-sm text-zinc-400">
              <p>{siteData.global.contactPhone}</p>
              <p className="hover:text-white transition-colors cursor-pointer">{siteData.global.contactEmail}</p>
            </div>


          </div>

          {/* Columna 2: Marcas */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white mb-8">
              Nuestras Marcas
            </h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Hilton Hotels & Resorts</a></li>
              <li><a href="#" className="hover:text-white transition-colors">DoubleTree by Hilton</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hampton by Hilton</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Homewood Suites</a></li>
            </ul>
          </div>

          {/* Columna 3: Nosotros */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white mb-8">
              Nosotros
            </h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#portafolio" className="hover:text-white transition-colors">Portafolio</a></li>
              <li><a href="#inversionistas" className="hover:text-white transition-colors">Expansión</a></li>
              <li><a href="#equipo" className="hover:text-white transition-colors">Equipo</a></li>
              <li><a href="#sostenibilidad" className="hover:text-white transition-colors">Sostenibilidad</a></li>
              <li><a href="#asociate" className="hover:text-white transition-colors">Asóciate</a></li>
            </ul>
          </div>

          {/* Columna 4: Saber Más */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white mb-8">
              Saber Más
            </h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Política de privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Aviso Legal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Cookies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mapa Web</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Portal del empleado</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Marca de agua gigante de fondo */}
      <div className="absolute bottom-16 left-0 w-full overflow-hidden flex justify-center pointer-events-none select-none opacity-[0.03]">
        <span className="text-[18vw] font-serif font-bold leading-none tracking-tighter text-white whitespace-nowrap">
          XENIA
        </span>
      </div>

      {/* Barra Inferior y Botón Flotante Central */}
      <div className="relative bg-zinc-900 border-t border-zinc-700">
        
        {/* Botón Circular para subir */}
        <button 
          onClick={scrollToTop}
          className="absolute left-1/2 -top-7 -translate-x-1/2 w-14 h-14 bg-zinc-800 border border-zinc-500 rounded-full flex items-center justify-center text-white hover:bg-zinc-700 hover:scale-110 transition-all z-20 group"
          aria-label="Volver arriba"
        >
          <div className="border border-dashed border-zinc-400 rounded-full w-12 h-12 flex items-center justify-center group-hover:border-white transition-colors">
            <ArrowUp className="h-5 w-5" />
          </div>
        </button>

        <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-400 gap-4">
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            <span>{siteData.global.brandName} © {new Date().getFullYear()}</span>
          </div>
          
          <div className="tracking-wide">
            Design by hernannh
          </div>
        </div>
      </div>

    </footer>
  );
};