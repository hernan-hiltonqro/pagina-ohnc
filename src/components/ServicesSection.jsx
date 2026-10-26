import { useState } from 'react';
import { FadeIn } from './FadeIn';

export const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const servicios = [
    {
      id: "01",
      title: "Inteligencia comercial e ingresos",
      summary: "Cliente, momento, precio, canal, ritmo de venta, forecast y mezcla rentable.",
      details: [
        "Análisis del cliente y elección del momento adecuado para la venta.",
        "Estrategia dinámica de precio y optimización de canales de distribución.",
        "Monitoreo constante del ritmo de venta y proyecciones (forecast).",
        "Construcción y gestión de una mezcla de venta altamente rentable."
      ]
    },
    {
      id: "02",
      title: "Gestión financiera y control",
      summary: "Ingresos, nómina, compras, inventarios, caja, riesgos y desviaciones.",
      details: [
        "Control estricto de ingresos y optimización del gasto en nómina.",
        "Gestión eficiente de compras y control de inventarios.",
        "Administración del flujo de caja y mitigación de riesgos financieros.",
        "Detección, análisis y corrección oportuna de desviaciones frente al presupuesto."
      ]
    },
    {
      id: "03",
      title: "Operación, marca y experiencia",
      summary: "Estándares, consistencia del servicio, comentarios y resolución de problemas.",
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
      summary: "Desarrollo de gestores capaces de leer indicadores, decidir y hacerse responsables.",
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
      summary: "Aliados confiables, procesos más simples, disponibilidad y uso disciplinado de recursos.",
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
          BLOQUE 1: ACORDEÓN (Fondo Beige)
          ========================================== */}
      <section className="bg-[#edeae1] pt-40 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            <div className="lg:col-span-5 lg:sticky lg:top-40">
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
              
              <p className="text-base text-[#5c6b7f] font-light leading-relaxed max-w-sm">
                Unimos las áreas que determinan cómo se siente el hotel, cómo opera y qué valor deja a sus propietarios.
              </p>
            </div>

            <div className="lg:col-span-7 border-t border-zinc-300/60">
              {servicios.map((servicio, idx) => {
                const isOpen = activeIndex === idx;
                return (
                  <div key={servicio.id} className="border-b border-zinc-300/60">
                    <button 
                      onClick={() => setActiveIndex(isOpen ? -1 : idx)}
                      className="w-full text-left py-8 flex items-start gap-6 group hover:bg-[#e4e0d4] transition-colors px-4 -mx-4 rounded-lg"
                    >
                      <span className="text-lg font-serif italic text-[#a27642] mt-1 shrink-0">
                        {servicio.id}
                      </span>
                      <div className="flex-grow pr-8">
                        <h3 className="text-2xl font-serif text-[#0b172a] mb-2 group-hover:text-[#a27642] transition-colors">
                          {servicio.title}
                        </h3>
                        <p className="text-sm text-[#5c6b7f] font-light leading-relaxed">
                          {servicio.summary}
                        </p>
                      </div>
                      <span className="text-2xl font-light text-[#a27642] shrink-0 transition-transform duration-300">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>

                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 mb-8' : 'max-h-0 opacity-0'}`}>
                      <div className="pl-14 pr-4">
                        <ul className="space-y-3">
                          {servicio.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-[#334155] font-light">
                              <span className="w-1.5 h-1.5 bg-[#a27642] rounded-full mt-1.5 shrink-0 opacity-80"></span>
                              <span className="leading-relaxed">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>


      {/* ==========================================
          BLOQUE 2: MATRIZ ADMINISTRATIVA (Fondo Blanco)
          ========================================== */}
      <section className="bg-white py-32 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#a27642] block mb-4">
              Servicios Financieros y Soporte
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0b172a] leading-[1.1]">
              Rigor administrativo para <br/>
              <span className="italic text-[#5c6b7f] font-light">la protección del activo.</span>
            </h2>
          </FadeIn>

          <FadeIn className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* INGRESOS */}
            <div className="bg-[#f2f5f8] p-10 border border-zinc-100 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-serif text-[#0b172a] mb-8 flex items-center gap-3 border-b border-zinc-200 pb-4">
                 <span className="text-[#a27642] italic">01 /</span> Ingresos
              </h3>
              <ul className="space-y-5 text-sm text-[#5c6b7f] font-light">
                 <li><strong className="text-[#0b172a] font-medium block mb-1">Flujo de Caja (Cash Flow)</strong> Considerado el capital de trabajo vital del hotel.</li>
                 <li><strong className="text-[#0b172a] font-medium block mb-1">Equilibrio Operativo</strong> Sincronización precisa entre entradas y salidas de recurso.</li>
                 <li><strong className="text-[#0b172a] font-medium block mb-1">Efectividad</strong> Administración proactiva y centralizada del ingreso.</li>
              </ul>
            </div>

            {/* EGRESOS */}
            <div className="bg-[#f2f5f8] p-10 border border-zinc-100 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-serif text-[#0b172a] mb-8 flex items-center gap-3 border-b border-zinc-200 pb-4">
                 <span className="text-[#a27642] italic">02 /</span> Egresos
              </h3>
              <ul className="space-y-5 text-sm text-[#5c6b7f] font-light">
                 <li><strong className="text-[#0b172a] font-medium block mb-1">Control Riguroso</strong> Monitoreo de costos fijos y variables apoyados en APP de forecast.</li>
                 <li><strong className="text-[#0b172a] font-medium block mb-1">Presupuesto vs Forecast</strong> Supervisión de gastos frente a la proyección real.</li>
                 <li><strong className="text-[#0b172a] font-medium block mb-1">Tesorería Confiable</strong> Manejo transparente mediante firmas mancomunadas asignadas por la operadora.</li>
              </ul>
            </div>

            {/* FINANZAS */}
            <div className="bg-[#f2f5f8] p-10 border border-zinc-100 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-serif text-[#0b172a] mb-8 flex items-center gap-3 border-b border-zinc-200 pb-4">
                 <span className="text-[#a27642] italic">03 /</span> Finanzas
              </h3>
              <ul className="space-y-5 text-sm text-[#5c6b7f] font-light">
                 <li><strong className="text-[#0b172a] font-medium block mb-1">Maximización de Activos</strong> Enfoque en rentabilidad sostenible a corto y largo plazo.</li>
                 <li><strong className="text-[#0b172a] font-medium block mb-1">Cumplimiento Normativo</strong> Ejecución estricta de las obligaciones fiscales.</li>
                 <li><strong className="text-[#0b172a] font-medium block mb-1">Propuesta de Valor</strong> Alineación total con el cliente interno y externo.</li>
              </ul>
            </div>

          </FadeIn>
        </div>
      </section>


      {/* ==========================================
          BLOQUE 3: CICLO FISCAL (Fondo Azul Profundo Ancho Completo)
          ========================================== */}
      <section className="bg-[#0b172a] text-white py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#a27642] opacity-5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#a27642] opacity-5 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeIn>
            <h3 className="text-center text-[10px] uppercase tracking-[0.4em] text-[#a27642] font-bold mb-16">
              Ciclo Financiero y Fiscal
            </h3>

            <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 lg:gap-12">
              
              {/* Lado Derecho: Operación */}
              <div className="flex-1 bg-white/[0.03] border border-white/10 p-10 lg:p-12 hover:bg-white/[0.05] transition-colors">
                <h4 className="text-2xl font-serif mb-8 text-[#e2c995]">Operación y Control Continuo</h4>
                <ul className="space-y-6 text-sm text-zinc-300 font-light">
                  <li className="flex gap-4">
                    <span className="text-[#a27642] mt-0.5 text-lg leading-none">*</span>
                    <span className="leading-relaxed">Mantener información diaria de ingresos en APP.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[#a27642] mt-0.5 text-lg leading-none">*</span>
                    <span className="leading-relaxed">Bases contables para la determinación de impuestos y/o estrategia fiscal del propietario o tercero.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[#a27642] mt-0.5 text-lg leading-none">*</span>
                    <span className="leading-relaxed">Control interno que garantice efectividad en cada proceso en el hotel.</span>
                  </li>
                </ul>
              </div>

              {/* Conector Cíclico Visual */}
              <div className="flex md:flex-col items-center justify-center gap-4 text-[#a27642] opacity-60 py-6 md:py-0">
                <svg className="w-8 h-8 rotate-90 md:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <svg className="w-8 h-8 -rotate-90 md:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>

              {/* Lado Izquierdo: Resultados */}
              <div className="flex-1 bg-white/[0.03] border border-white/10 p-10 lg:p-12 hover:bg-white/[0.05] transition-colors">
                <h4 className="text-2xl font-serif mb-8 text-[#e2c995]">Resultados y Rentabilidad</h4>
                <ul className="space-y-6 text-sm text-zinc-300 font-light">
                  <li className="flex gap-4">
                    <span className="text-[#a27642] mt-0.5 text-lg leading-none">*</span>
                    <span className="leading-relaxed">Entrega de estados financieros dentro de los <strong className="text-white font-medium">10 días posteriores al cierre de mes.</strong></span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[#a27642] mt-0.5 text-lg leading-none">*</span>
                    <span className="leading-relaxed">Rentabilidad de acuerdo a estrategias de negocio establecidas.</span>
                  </li>
                </ul>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
};