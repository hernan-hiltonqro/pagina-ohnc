import { useState } from 'react';
import { Menu, X, Building2 } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Portafolio', href: '#portafolio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Inversionistas', href: '#inversionistas' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logotipo Corporativo */}
        <a href="#inicio" className="flex items-center gap-2 text-lg font-bold tracking-wider text-blue-950">
          <Building2 className="h-6 w-6 text-blue-900" />
          <span>HILTON OPERADORA</span>
        </a>

        {/* Menú Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-blue-900 transition"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            className="rounded-lg bg-blue-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-900 shadow-sm"
          >
            Contacto Corporativo
          </a>
        </nav>

        {/* Botón Móvil */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-blue-950"
          aria-label="Abrir menú"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menú Móvil */}
      {isOpen && (
        <nav className="md:hidden border-b border-slate-200 bg-white px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-slate-700 hover:text-blue-950"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="block text-center rounded-lg bg-blue-950 py-2.5 text-sm font-semibold text-white"
          >
            Contacto Corporativo
          </a>
        </nav>
      )}
    </header>
  );
};