import { FadeIn } from './FadeIn';
import { Link } from 'react-router-dom';

export const ServicesSection = () => {
  
  const servicios = [
    {
      id: "01",
      title: "Inteligencia comercial e ingresos",
      details: [
        "Análisis del cliente y elección del momento adecuado para la venta.",
        "Estrategia dinámica de precio y optimización de canales de distribución.",
        "Construcción y gestión de una mezcla de venta altamente rentable."
      ]
    },
    {
      id: "02",
      title: "Gestión financiera y control",
      details: [
        <><strong className="text-[#0b172a] font-medium">Ingreso y caja:</strong> Flujo de caja, equilibrio entre entradas y salidas, e información diaria en el ecosistema digital (BI).</>,
        <><strong className="text-[#0b172a] font-medium">Gasto y tesorería:</strong> Control de costos fijos y variables, presupuesto vs. forecast, y firmas mancomunadas.</>,
        <><strong className="text-[#0b172a] font-medium">Cumplimiento y resultados:</strong> Obligaciones fiscales, bases contables para la estrategia fiscal, y estados financieros dentro de los 10 días posteriores al cierre (salvo lo acordado).</>
      ]
    },
    {
      id: "03",
      title: "Operación, marca y experiencia",
      details: [
        "Auditoría y cumplimiento riguroso de los estándares de marca.",
        "Aseguramiento de la consistencia del servicio en todas las áreas.",
        "Gestión activa de comentarios, reseñas y reputación del hotel.",
        "Resolución ágil y efectiva de problemas operativos para proteger la experiencia."
      ]
    },
    {
      id: "04",
      title: "Talento y liderazgo operativo",
      details: [
        "Formación integral y retención de talento clave para la hospitalidad.",
        "Capacitación de equipos en la lectura e interpretación de indicadores del negocio.",
        "Empoderamiento del personal para la toma de decisiones asertivas.",
        "Fomento de una cultura operativa orientada a la responsabilidad y los resultados."
      ]
    },
    {
      id: "05",
      title: "Proveedores, tecnología y activo",
      details: [
        "Selección y gestión de proveedores estratégicos como aliados confiables.",
        "Implementación de herramientas tecnológicas para simplificar procesos internos.",
        "Garantía de disponibilidad operativa y mantenimiento constante del activo.",
        "Supervisión del uso disciplinado y eficiente de los recursos materiales y energéticos."
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      
      {/* ==========================================
          BLOQUE 1: ENCABEZADO
          ========================================== */}
      <section className="bg-[#edeae1] pt-40 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-[#a27642]"></div>
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#a27642]">
                Gestión Integral, con Sentido
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif text-[#0b172a] leading-[1.05] tracking-tight mb-8">
              Una sola <br/>
              <span className="italic text-[#5c6b7f] font-light">agenda para cuidar el negocio.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-[#5c6b7f] font-light leading-relaxed max-w-2xl">
              Unimos las áreas que determinan cómo se siente el hotel, cómo opera y qué valor deja a sus propietarios.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ==========================================
          BLOQUE 2: LISTADO EDITORIAL
          ========================================== */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-t border-zinc-200">
            {servicios.map((servicio) => (
              <FadeIn 
                key={servicio.id} 
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 py-12 lg:py-16 border-b border-zinc-200 items-start hover:bg-zinc-50/50 transition-colors"
              >
                
                {/* Columna Izquierda: Número y Título */}
                <div className="md:col-span-5 lg:col-span-4">
                  <span className="text-[#a27642] font-serif italic text-3xl mb-4 block">
                    {servicio.id} /
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#0b172a] leading-tight pr-4">
                    {servicio.title}
                  </h3>
                </div>

                {/* Columna Derecha: Viñetas de detalles */}
                <div className="md:col-span-7 lg:col-span-8 md:pt-14 lg:pt-0">
                  <ul className="space-y-6 text-sm sm:text-base text-[#5c6b7f] font-light">
                    {servicio.details.map((detail, i) => (
                      <li key={i} className="flex gap-4">
                        <span className="text-[#a27642] mt-1.5 text-lg leading-none">•</span>
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
      <section className="bg-[#0b172a] text-white py-32 relative overflow-hidden mt-auto">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#a27642] opacity-5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#a27642] opacity-5 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight mb-8">
              Llevemos la gestión de su activo <br className="hidden sm:block" />
              <span className="italic text-[#e8d5a5] font-light">al siguiente nivel.</span>
            </h2>
            <p className="text-zinc-300 font-light mb-12 max-w-2xl mx-auto">
              Estamos listos para transformar la información en decisiones de valor y proteger la rentabilidad de su patrimonio.
            </p>
            <Link 
              to="/contacto" 
              className="inline-block border border-[#e8d5a5] text-[#e8d5a5] px-10 py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#e8d5a5] hover:text-[#0b172a] transition-all duration-300"
            >
              Solicitar diagnóstico
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  );
};