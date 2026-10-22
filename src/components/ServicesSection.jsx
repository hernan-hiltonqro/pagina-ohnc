import { FadeIn } from './FadeIn';

const services = [
  {
    title: "Inteligencia Comercial",
    philosophy: "Generamos mayor rentabilidad controlando el ciclo: Cliente, Momento, Canal y Precio correctos.",
    points: [
      "Segmentación (local, global, mayoristas, grupos) e identificación de market share.",
      "Identificación de generadores de demanda y control en venta para grupos.",
      "Control de inventario en OTA's, GDS, plataformas electrónicas y central de reservas.",
      "Estructura tarifaria, pronósticos (forecast) y optimización de precios."
    ]
  },
  {
    title: "Gestión Financiera",
    philosophy: "Buscamos estabilidad y eficiencia controlando ingresos, egresos y obligaciones fiscales.",
    points: [
      "15 días de rotación en cartera de crédito (CXC) y aseguramiento de capital de trabajo.",
      "Manejo de tesorería y cuentas por pagar (CXP) mediante firmas mancomunadas.",
      "Control de costos por cuarto ocupado basado en pronósticos.",
      "Entrega de estados financieros a 10 días y cumplimiento de impuestos (ISH, IVA)."
    ]
  },
  {
    title: "Talento Humano",
    philosophy: "Seleccionamos y desarrollamos talento basado en competencias y valores corporativos.",
    points: [
      "Gestión de cartera de aspirantes y cumplimiento de programas de capacitación de la franquicia.",
      "Sistema de evaluación de desempeño, coaching y preparación de talentos.",
      "Administración estricta de nómina, IMSS, Infonavit y control de incrementos.",
      "Gestión de contratos y relaciones sindicales o laborales."
    ]
  },
  {
    title: "Operaciones e Infraestructura",
    philosophy: "Diseñamos e implantamos modelos de operación estandarizados y mejoras continuas.",
    points: [
      "Mantenimiento preventivo para garantizar propiedades seguras e impecables.",
      "Auditorías de seguridad y revisiones periódicas de infraestructura tecnológica.",
      "Integración de sistemas hoteleros (PMS, POS) y alianzas con proveedores de equipo.",
      "Intranet y aplicaciones exclusivas para facilitar la operación diaria."
    ]
  }
];

export const ServicesSection = () => {
  return (
    <section id="servicios" className="py-32 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="mb-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif text-zinc-900 mb-4">Modelo de Operación</h2>
          <div className="w-12 h-[1px] bg-zinc-900 mx-auto"></div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-200 border border-zinc-200">
          {services.map((srv, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} className="bg-white p-10 sm:p-14 hover:bg-zinc-50 transition-colors duration-500">
              <h3 className="text-2xl font-serif text-zinc-900 mb-4">{srv.title}</h3>
              <p className="text-sm text-zinc-600 font-light leading-relaxed mb-8">
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
          ))}
        </div>
      </div>
    </section>
  );
};