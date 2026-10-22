import { FadeIn } from './FadeIn';

const services = [
  {
    title: "Comercial e Ingresos",
    subtitle: "Inteligencia Comercial",
    philosophy: "Transformamos información en decisiones de valor. Proponemos al mercado, fortalecemos la competitividad y cumplimos la promesa al huésped.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    points: [
      "Segmentación (local, global, mayoristas, grupos) e identificación de market share.",
      "Identificación de generadores de demanda y control en venta para grupos.",
      "Control de inventario en OTA's, GDS, plataformas electrónicas y central de reservas.",
      "Estructura tarifaria, pronósticos (forecast) y optimización de precios."
    ]
  },
  {
    title: "Gestión Financiera",
    subtitle: "Responsabilidad Financiera",
    philosophy: "Cuidamos cada variable, anticipamos riesgos y corregimos desviaciones. Buscamos estabilidad, eficiencia y rentabilidad sostenible.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    points: [
      "15 días de rotación en cartera de crédito (CXC) y aseguramiento de capital de trabajo.",
      "Manejo de tesorería y cuentas por pagar (CXP) mediante firmas mancomunadas.",
      "Control de costos por cuarto ocupado basado en pronósticos.",
      "Entrega de estados financieros a 10 días y cumplimiento de impuestos (ISH, IVA)."
    ]
  },
  {
    title: "Talento Humano",
    subtitle: "Talento que Crece",
    philosophy: "Proponemos carreras competitivas, desarrollamos líderes y fortalecemos una cultura de compromiso, crecimiento y pertenencia.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    points: [
      "Gestión de cartera de aspirantes y cumplimiento de programas de capacitación de la franquicia.",
      "Sistema de evaluación de desempeño, coaching y preparación de talentos.",
      "Administración estricta de nómina, IMSS, Infonavit y control de incrementos.",
      "Gestión de contratos y relaciones sindicales o laborales."
    ]
  },
  {
    title: "Operaciones",
    subtitle: "Operaciones que Evolucionan",
    philosophy: "Medimos, analizamos y ajustamos por segmento, fieles al concepto, la identidad y los estándares de cada marca.",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    points: [
      "Mantenimiento preventivo para garantizar propiedades seguras e impecables.",
      "Auditorías de seguridad y revisiones periódicas de infraestructura tecnológica.",
      "Integración de sistemas hoteleros (PMS, POS) y alianzas con proveedores de equipo.",
      "Intranet y aplicaciones exclusivas para facilitar la operación diaria."
    ]
  },
  // NUEVO PILAR TECNOLÓGICO
  {
    title: "Tecnología e Inteligencia de Datos",
    subtitle: "Ecosistema Digital",
    philosophy: "Centralizamos la operación a través de plataformas digitales para optimizar la toma de decisiones. Transformamos datos en tiempo real en rentabilidad y transparencia.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    points: [
      "Implementación de herramientas de Business Intelligence (BI) para reporteo y visibilidad en tiempo real.",
      "Sistemas PMS y POS basados en la nube para una gestión corporativa centralizada y segura.",
      "Uso de algoritmos de Revenue Management para la optimización dinámica de la tarifa diaria.",
      // NUEVO ENFOQUE DE DIGITALIZACIÓN FÍSICA
      "Digitalización de la operación física: migración de bitácoras, checklists y flujos de revisión a plataformas móviles (Cultura Paperless)."
    ]
  }
];

export const ServicesSection = () => {
  return (
    <section id="servicios" className="py-32 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        
        <FadeIn className="mb-24 text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 block mb-4">Áreas de Especialidad</span>
          <h2 className="text-3xl sm:text-5xl font-serif text-zinc-900 mb-6">Nuestro Modelo Operativo</h2>
          <div className="w-12 h-[1px] bg-zinc-900 mx-auto"></div>
        </FadeIn>

        <div className="space-y-32">
          {services.map((srv, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
                
                <FadeIn className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100 group">
                    <div className="absolute inset-0 bg-zinc-900/10 group-hover:bg-transparent transition-colors duration-1000 z-10 pointer-events-none"></div>
                    <img 
                      src={srv.img} 
                      alt={srv.title}
                      className="w-full h-full object-cover saturate-50 brightness-95 transition-all duration-[1500ms] ease-out group-hover:scale-105 group-hover:saturate-100 group-hover:brightness-100"
                      loading="lazy"
                    />
                  </div>
                </FadeIn>

                <FadeIn className="w-full lg:w-1/2" delay={0.2}>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-400 block mb-3">{srv.subtitle}</span>
                  <h3 className="text-3xl lg:text-4xl font-serif text-zinc-900 mb-6">{srv.title}</h3>
                  <p className="text-sm text-zinc-700 font-medium leading-relaxed mb-8 border-l-2 border-zinc-900 pl-4">
                    {srv.philosophy}
                  </p>
                  <ul className="space-y-4">
                    {srv.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs text-zinc-500">
                        <span className="w-1 h-1 bg-zinc-900 rounded-full mt-1.5 shrink-0"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </FadeIn>
                
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};