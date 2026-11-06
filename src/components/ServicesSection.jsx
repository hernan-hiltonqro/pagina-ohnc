import { FadeIn } from './FadeIn';
import { Link } from 'react-router-dom';

export const ServicesSection = () => {
  
  const servicios = [
    {
      id: "01",
      title: "Comercial e ingresos",
      details: [
        "Segmentación de clientes y pronóstico de demanda.",
        "Estrategia de tarifas ajustada a la demanda.",
        "Selección de canales por costo y rendimiento.",
        "Mezcla de venta orientada a utilidad, no solo a ocupación."
      ]
    },
    {
      id: "02",
      title: "Finanzas y control",
      details: [
        <><strong className="text-[#2B2C30] font-medium">Ingreso y caja:</strong> Control del flujo de efectivo con información diaria en línea.</>,
        <><strong className="text-[#2B2C30] font-medium">Gasto y tesorería:</strong> Control de costos fijos y variables, presupuesto contra pronóstico y firmas mancomunadas.</>,
        <><strong className="text-[#2B2C30] font-medium">Cumplimiento:</strong> Obligaciones fiscales al corriente. Estados financieros a más tardar 10 días después del cierre.</>
      ]
    },
    {
      id: "03",
      title: "Operación y estándares de marca",
      details: [
        "Auditorías internas previas a las de la marca.",
        "Estándares de servicio iguales en todas las áreas.",
        "Seguimiento de reseñas y reputación en línea.",
        "Atención inmediata de incidencias operativas."
      ]
    },
    {
      id: "04",
      title: "Talento y liderazgo",
      details: [
        "Selección, capacitación y retención de personal clave.",
        "Formación de gerentes en lectura de indicadores.",
        "Facultades claras para decidir en cada puesto.",
        "Evaluación por resultados."
      ]
    },
    {
      id: "05",
      title: "Activo, proveedores y tecnología",
      details: [
        "Programa de mantenimiento preventivo y correctivo.",
        "Negociación y evaluación de proveedores.",
        "Herramientas tecnológicas para simplificar procesos.",
        "Control del consumo de energía y materiales."
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      
      {/* ==========================================
          BLOQUE 1: ENCABEZADO
          ========================================== */}
      <section className="bg-[#F2F2F2] pt-40 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-[#804E3B]"></div>
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#804E3B]">
                Alcance de la gestión
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif text-[#2B2C30] leading-[1.05] tracking-tight mb-8">
              Cinco áreas bajo <br/>
              <span className="italic text-[#5C5E66] font-light">una sola dirección.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-[#5C5E66] font-light leading-relaxed max-w-2xl">
              Ventas, finanzas, operación, talento y activo se gestionan con un mismo objetivo: la utilidad del propietario.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ==========================================
          BLOQUE 2: LISTADO EDITORIAL
          ========================================== */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-t border-[#5C5E66]/20">
            {servicios.map((servicio) => (
              <FadeIn 
                key={servicio.id} 
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 py-12 lg:py-16 border-b border-[#5C5E66]/20 items-start hover:bg-[#F2F2F2]/50 transition-colors"
              >
                
                {/* Columna Izquierda: Número y Título */}
                <div className="md:col-span-5 lg:col-span-4">
                  <span className="text-[#804E3B] font-serif italic text-3xl mb-4 block">
                    {servicio.id} /
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#2B2C30] leading-tight pr-4">
                    {servicio.title}
                  </h3>
                </div>

                {/* Columna Derecha: Viñetas de detalles */}
                <div className="md:col-span-7 lg:col-span-8 md:pt-14 lg:pt-0">
                  <ul className="space-y-6 text-sm sm:text-base text-[#5C5E66] font-light">
                    {servicio.details.map((detail, i) => (
                      <li key={i} className="flex gap-4">
                        <span className="text-[#804E3B] mt-1.5 text-lg leading-none">•</span>
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          BLOQUE 3: CIERRE / CTA
          ========================================== */}
      <section className="bg-[#0A0A0A] text-[#F2F2F2] py-32 relative overflow-hidden mt-auto">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#552828] opacity-20 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#552828] opacity-20 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight mb-8">
              Evalúe la gestión actual <br className="hidden sm:block" />
              <span className="italic text-[#804E3B] font-light">de su hotel.</span>
            </h2>
            <p className="text-[#F2F2F2]/70 font-light mb-12 max-w-2xl mx-auto">
              El diagnóstico identifica las áreas de mejora y su impacto en la utilidad.
            </p>
            <Link 
              to="/contacto" 
              className="inline-block bg-[#804E3B] px-10 py-5 text-xs uppercase tracking-[0.2em] font-medium text-white hover:bg-[#552828] transition-all duration-300 shadow-lg"
            >
              Solicitar diagnóstico
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  );
};