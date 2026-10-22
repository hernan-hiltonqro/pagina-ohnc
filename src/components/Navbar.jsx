import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/content';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Portafolio', href: '/portafolio' },
    { name: 'Expansión', href: '/inversionistas' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <Link to="/" className="text-sm font-serif font-bold tracking-[0.2em] text-zinc-900 uppercase">
          {siteData.global.brandName}
        </Link>

        {/* Menú Desktop */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} className="text-[11px] uppercase tracking-[0.15em] font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
              {link.name}
            </Link>
          ))}
          <a href="#contacto" className="border border-zinc-900 px-6 py-2.5 text-[11px] uppercase tracking-[0.15em] font-medium text-zinc-900 hover:bg-zinc-900 hover:text-white transition-all">
            Contacto
          </a>
        </nav>

        {/* Botón Móvil */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-zinc-900">
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      
      {/* Menú Móvil Desplegable */}
      {isOpen && (
        <nav className="md:hidden bg-white border-b border-zinc-200 px-6 py-4 space-y-4 shadow-lg">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              onClick={() => setIsOpen(false)}
              className="block text-[11px] uppercase tracking-[0.15em] font-medium text-zinc-600 hover:text-zinc-900"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};