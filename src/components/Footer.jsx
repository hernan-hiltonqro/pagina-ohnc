import { Building2, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contacto" className="border-t border-slate-200 bg-slate-100 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-blue-950 font-bold text-lg tracking-wider">
              <Building2 className="h-6 w-6 text-blue-900" />
              <span>HILTON OPERADORA</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-600">
              Operación, administración y desarrollo integral de propiedades hoteleras y residenciales bajo estándares de hospitalidad de clase mundial.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-950 mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#inicio" className="hover:text-blue-900 transition">Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-blue-900 transition">Sobre Nosotros</a></li>
              <li><a href="#portafolio" className="hover:text-blue-900 transition">Portafolio Hotelero</a></li>
              <li><a href="#servicios" className="hover:text-blue-900 transition">Servicios de Operación</a></li>
              <li><a href="#inversionistas" className="hover:text-blue-900 transition">Inversionistas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-950 mb-4">
              Contacto Corporativo
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-blue-900 shrink-0 mt-0.5" />
                <span>Oficinas de Operaciones, Blvd. Bernardo Quintana, Querétaro, México.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-blue-900 shrink-0" />
                <span>+52 442 000 0000</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-blue-900 shrink-0" />
                <span>corporativo@operadorahilton.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-950 mb-4">
              Alianzas y Desarrollo
            </h4>
            <p className="text-xs text-slate-600 mb-3">
              Soluciones integrales de operación hotelera y administración de activos.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-900 hover:text-blue-950 transition"
            >
              Contactar Dirección de Operaciones
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Hilton Operadora. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-blue-950 transition">Aviso de Privacidad</a>
            <a href="#" className="hover:text-blue-950 transition">Términos Corporativos</a>
            <a href="#" className="hover:text-blue-950 transition">Estándares Globales</a>
          </div>
        </div>
      </div>
    </footer>
  );
};