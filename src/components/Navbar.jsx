import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Legado', href: '/legado' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Portafolio', href: '/portafolio' },
    { name: 'Expansión', href: '/inversionistas' },
  ];

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#767980]/20">
      
      {/* Contenedor más ancho (w-full) y menos alto (h-20) */}
      <div className="w-full px-6 lg:px-12 h-20 flex items-center justify-between">
        
        {/* LOGO (Pegado a la izquierda gracias a w-full) */}
        <Link 
          to="/" 
          onClick={handleNavClick}
          className="font-serif text-3xl md:text-4xl font-bold tracking-[0.25em] text-[#151617] hover:text-[#CF6343] transition-colors uppercase"
        >
          GEOH
        </Link>

        {/* Menú Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            
            if (link.name === 'Inicio') {
              return (
                <Link 
                  key={link.name} 
                  to={link.href}
                  onClick={handleNavClick}
                  className={`flex items-center justify-center transition-colors ${isActive ? 'text-[#CF6343]' : 'text-[#767980] hover:text-[#CF6343]'}`}
                  aria-label="Inicio"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                </Link>
              );
            }

            return (
              <Link 
                key={link.name} 
                to={link.href}
                onClick={handleNavClick}
                className={`relative text-[11px] lg:text-xs uppercase tracking-[0.15em] font-bold transition-colors py-2 ${
                  isActive ? 'text-[#CF6343]' : 'text-[#767980] hover:text-[#CF6343]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#CF6343] rounded-t-md"></span>
                )}
              </Link>
            );
          })}
          
          {/* Botón de Contacto */}
          <Link 
            to="/contacto"
            onClick={handleNavClick}
            className={`border px-6 py-2 text-[11px] lg:text-xs uppercase tracking-[0.15em] font-bold transition-all duration-300 ml-2 ${
              location.pathname === '/contacto' 
                ? 'bg-[#151617] text-white border-[#151617]' 
                : 'border-[#151617] text-[#151617] hover:bg-[#151617] hover:text-white'
            }`}
          >
            Contacto
          </Link>
        </nav>

        {/* Botón Móvil */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#151617]">
          {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>
      
      {/* Menú Móvil Desplegable */}
      {isOpen && (
        <nav className="md:hidden bg-white border-b border-[#767980]/20 px-6 py-6 space-y-6 shadow-lg">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            
            return (
              <Link 
                key={link.name} 
                to={link.href} 
                onClick={handleNavClick}
                className={`flex items-center gap-3 text-sm uppercase tracking-[0.15em] font-bold ${
                  isActive ? 'text-[#CF6343]' : 'text-[#767980] hover:text-[#151617]'
                }`}
              >
                {link.name === 'Inicio' ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
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
            onClick={handleNavClick}
            className={`block text-sm uppercase tracking-[0.15em] font-bold pt-4 border-t border-[#767980]/20 ${
              location.pathname === '/contacto' ? 'text-[#CF6343]' : 'text-[#151617] hover:text-[#CF6343]'
            }`}
          >
            Contacto
          </Link>
        </nav>
      )}
    </header>
  );
};