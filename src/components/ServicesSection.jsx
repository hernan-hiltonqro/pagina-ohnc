import { useState } from 'react';
import { FadeIn } from './FadeIn';

const services = [
  {
    number: "01",
    title: "Inteligencia comercial e ingresos",
    philosophy: "Cliente, momento, precio, canal, ritmo de venta, forecast y mezcla rentable.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    details: [
      "Optimización dinámica de tarifas (Revenue Management).",
      "Análisis continuo de mercado y set competitivo.",
      "Gestión eficiente de canales de distribución y venta directa."
    ]
  },
  {
    number: "02",
    title: "Gestión financiera y control",
    philosophy: "Ingresos, nómina, compras, inventarios, caja, riesgos y desviaciones.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    details: [
      "Auditoría y protección del flujo de caja.",
      "Control estricto de nómina y costos operativos.",
      "Reporteo de desviaciones presupuestales en tiempo real."
    ]
  },
  {
    number: "03",
    title: "Operación, marca y experiencia",
    philosophy: "Estándares, consistencia del servicio, comentarios y resolución de problemas.",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    details: [
      "Alineación total con los estándares de la marca hotelera.",
      "Monitoreo de reputación online y encuestas de satisfacción.",
      "Planes de acción inmediatos ante fricciones en el servicio."
    ]
  },
  {
    number: "04",
    title: "Talento y liderazgo operativo",
    philosophy: "Desarrollo de gestores capaces de leer indicadores, decidir y hacerse responsables.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    details: [
      "Capacitación continua para líderes de departamento.",
      "Cultura orientada a la rendición de cuentas (Accountability).",
      "Retención de talento clave mediante planes de crecimiento."
    ]
  },
  {
    number: "05",
    title: "Proveedores, tecnología y activo",
    philosophy: "Aliados confiables, procesos más simples, disponibilidad y uso disciplinado de recursos.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    details: [
      "Implementación de ecosistemas digitales (PMS, POS, BI).",
      "Mantenimiento preventivo para la protección del inmueble.",
      "Negociación a escala con proveedores estratégicos."
    ]
  }
];

export const ServicesSection = () => {
  // Estado para controlar qué acordeón está abierto. null = todos cerrados.
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="servicios" className="py-32 bg-[#e9e2d5] border-b border-zinc-300">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-24 items-start">
          
          {/* Columna Izquierda (Fija) */}
          <FadeIn className="lg:sticky lg:top-32">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-[#8a7048]"></div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8a7048]">
                Gestión integral, con sentido
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-zinc-900 leading-[1.05] mb-8 tracking-tight">
              Una sola <br/> agenda para <br/> cuidar el <br/> negocio.
            </h2>
            
            <p className="text-sm text-[#67706d] font-light leading-relaxed max-w-sm">
              Unimos las áreas que determinan cómo se siente el hotel, cómo opera y qué valor deja a sus propietarios.
            </p>
          </FadeIn>

          {/* Columna Derecha (Acordeón) */}
          <FadeIn delay={0.2} className="border-t border-[#c7bdab]">
            {services.map((srv, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div key={idx} className="border-b border-[#c7bdab]">
                  {/* Cabecera Clickable */}
                  <button 
                    onClick={() => toggleAccordion(idx)}
                    className="w-full flex items-start text-left py-8 sm:py-10 group focus:outline-none"
                  >
                    {/* Número */}
                    <span className="w-12 sm:w-16 shrink-0 font-serif italic text-lg sm:text-xl text-[#9e7947] pt-0.5">
                      {srv.number}
                    </span>
                    
                    {/* Textos */}
                    <div className="flex-grow pr-6">
                      <h3 className="text-xl sm:text-2xl font-serif text-zinc-900 mb-2 group-hover:text-[#9e7947] transition-colors">
                        {srv.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#68706e] font-light leading-relaxed">
                        {srv.philosophy}
                      </p>
                    </div>

                    {/* Ícono + / - */}
                    <span className="shrink-0 text-2xl font-light text-[#9e7947] transition-transform duration-300">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {/* Contenido Expandible (Imágenes y detalles) */}
                  <div 
                    className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
                      isOpen ? 'grid-rows-[1fr] opacity-100 mb-10' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="min-h-0 pl-12 sm:pl-16">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center pt-2">
                        {/* Detalles adicionales */}
                        <ul className="space-y-3 text-xs text-zinc-600 font-light">
                          {srv.details.map((detail, i) => (
                            <li key={i} className="flex gap-3">
                              <span className="text-[#9e7947] mt-0.5">▪</span> {detail}
                            </li>
                          ))}
                        </ul>
                        {/* Imagen referencial */}
                        <div className="aspect-[4/3] w-full overflow-hidden">
                          <img 
                            src={srv.img} 
                            alt={srv.title} 
                            className="w-full h-full object-cover grayscale mix-blend-multiply hover:grayscale-0 hover:mix-blend-normal transition-all duration-700"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              );
            })}
          </FadeIn>

        </div>
      </div>
    </section>
  );
};