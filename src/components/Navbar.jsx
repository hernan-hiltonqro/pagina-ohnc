import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Hook para saber en qué ruta estamos

  // Rutas originales de tu componente
  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Legado', href: '/legado' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Portafolio', href: '/portafolio' },
    { name: 'Expansión', href: '/inversionistas' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* LOGO AMPLIADO */}
        <Link to="/" className="font-serif text-3xl md:text-4xl font-bold tracking-[0.25em] text-[#0b172a] hover:text-[#a27642] transition-colors uppercase">
          GEOH
        </Link>

        {/* Menú Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            
            // Caso especial para reemplazar la palabra "Inicio" por la casita
            if (link.name === 'Inicio') {
              return (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className={`flex items-center justify-center transition-colors ${isActive ? 'text-[#a27642]' : 'text-zinc-500 hover:text-[#a27642]'}`}
                  aria-label="Inicio"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                </Link>
              );
            }

            // Resto de los enlaces con indicador visual (Línea inferior)
            return (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`relative text-[10px] uppercase tracking-[0.2em] font-bold transition-colors py-2 ${
                  isActive ? 'text-[#a27642]' : 'text-zinc-500 hover:text-[#a27642]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#a27642] rounded-t-md"></span>
                )}
              </Link>
            );
          })}
          
          {/* Botón de Contacto */}
          <Link 
            to="/contacto" 
            className={`border px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 ml-4 ${
              location.pathname === '/contacto' 
                ? 'bg-[#0b172a] text-white border-[#0b172a]' 
                : 'border-[#0b172a] text-[#0b172a] hover:bg-[#0b172a] hover:text-white'
            }`}
          >
            Contacto
          </Link>
        </nav>

        {/* Botón Móvil */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-zinc-900">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Menú Móvil Desplegable */}
      {isOpen && (
        <nav className="md:hidden bg-white border-b border-zinc-200 px-6 py-4 space-y-4 shadow-lg">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            
            return (
              <Link 
                key={link.name} 
                to={link.href} 
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 text-[11px] uppercase tracking-[0.15em] font-bold ${
                  isActive ? 'text-[#a27642]' : 'text-zinc-600 hover:text-[#0b172a]'
                }`}
              >
                {link.name === 'Inicio' ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    Inicio
                  </>
                ) : (
                  link.name
                )}
              </Link>
            );
          })}
          <Link 
            to="/contacto" 
            onClick={() => setIsOpen(false)}
            className={`block text-[11px] uppercase tracking-[0.15em] font-bold pt-2 border-t border-zinc-100 ${
              location.pathname === '/contacto' ? 'text-[#a27642]' : 'text-[#0b172a] hover:text-[#a27642]'
            }`}
          >
            Contacto
          </Link>
        </nav>
      )}
    </header>
  );
};