import { useState } from 'react';
import { FadeIn } from './FadeIn';

export const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Acordeón validado (Sin cambios)
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
    <div className="bg-[#edeae1] min-h-screen pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ==========================================
            SECCIÓN 1: ACORDEÓN DE CAPACIDADES
            ========================================== */}
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


        {/* ==========================================
            SECCIÓN 2: INTEGRACIÓN DOCUMENTO ADMINISTRACIÓN
            ========================================== */}
        <div className="mt-32 pt-24 border-t border-zinc-300/60">
          
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#a27642] block mb-4">
              Servicios Financieros y Soporte
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#0b172a] mb-6">
              Rigor administrativo para la protección del activo
            </h2>
          </FadeIn>

          {/* Matriz 3 Columnas (Diapositivas 1 y 2 fusionadas lógicamente) */}
          <FadeIn className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-300/60 border border-zinc-300/60 mb-16">
            
            {/* INGRESOS */}
            <div className="bg-[#edeae1] p-10 hover:bg-white transition-colors">
              <h3 className="text-2xl font-serif text-[#0b172a] mb-6 flex items-center gap-3">
                 <span className="w-2 h-2 bg-[#a27642] rounded-full"></span> Ingresos
              </h3>
              <ul className="space-y-4 text-sm text-[#5c6b7f] font-light">
                 <li><strong className="text-[#0b172a] font-medium block mb-1">Flujo de Caja (Cash Flow)</strong> Considerado el capital de trabajo vital del hotel.</li>
                 <li><strong className="text-[#0b172a] font-medium block mb-1">Equilibrio Operativo</strong> Sincronización precisa entre entradas y salidas de recurso.</li>
                 <li><strong className="text-[#0b172a] font-medium block mb-1">Efectividad</strong> Administración proactiva y centralizada del ingreso.</li>
              </ul>
            </div>

            {/* EGRESOS */}
            <div className="bg-[#edeae1] p-10 hover:bg-white transition-colors">
              <h3 className="text-2xl font-serif text-[#0b172a] mb-6 flex items-center gap-3">
                 <span className="w-2 h-2 bg-[#a27642] rounded-full"></span> Egresos
              </h3>
              <ul className="space-y-4 text-sm text-[#5c6b7f] font-light">
                 <li><strong className="text-[#0b172a] font-medium block mb-1">Control Riguroso</strong> Monitoreo de costos fijos y variables apoyados en APP de forecast.</li>
                 <li><strong className="text-[#0b172a] font-medium block mb-1">Presupuesto vs Forecast</strong> Supervisión de gastos frente a la proyección real.</li>
                 <li><strong className="text-[#0b172a] font-medium block mb-1">Tesorería Confiable</strong> Manejo transparente mediante firmas mancomunadas asignadas por la operadora.</li>
              </ul>
            </div>

            {/* FINANZAS */}
            <div className="bg-[#edeae1] p-10 hover:bg-white transition-colors">
              <h3 className="text-2xl font-serif text-[#0b172a] mb-6 flex items-center gap-3">
                 <span className="w-2 h-2 bg-[#a27642] rounded-full"></span> Finanzas
              </h3>
              <ul className="space-y-4 text-sm text-[#5c6b7f] font-light">
                 <li><strong className="text-[#0b172a] font-medium block mb-1">Maximización de Activos</strong> Enfoque en rentabilidad sostenible a corto y largo plazo.</li>
                 <li><strong className="text-[#0b172a] font-medium block mb-1">Cumplimiento Normativo</strong> Ejecución estricta de las obligaciones fiscales.</li>
                 <li><strong className="text-[#0b172a] font-medium block mb-1">Propuesta de Valor</strong> Alineación total con el cliente interno y externo.</li>
              </ul>
            </div>
          </FadeIn>

          {/* Ciclo Financiero y Fiscal (Diapositiva 3 adaptada a web) */}
          <FadeIn delay={0.2} className="bg-[#0b172a] text-white p-10 sm:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#a27642] opacity-5 blur-3xl rounded-full pointer-events-none"></div>
            
            <h3 className="text-center text-[10px] uppercase tracking-[0.3em] text-[#a27642] font-bold mb-12">
              Ciclo Financiero y Fiscal
            </h3>

            <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 relative z-10">
              
              {/* Lado Derecho del diagrama original (Operación) */}
              <div className="flex-1 bg-white/5 border border-white/10 p-8 rounded-sm">
                <h4 className="text-lg font-serif mb-6 text-[#a27642]">Operación y Control Continuo</h4>
                <ul className="space-y-4 text-sm text-zinc-300 font-light">
                  <li className="flex gap-3">
                    <span className="text-[#a27642] mt-0.5">*</span>
                    <span>Mantener información diaria de ingresos en APP.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#a27642] mt-0.5">*</span>
                    <span>Bases contables para la determinación de impuestos y/o estrategia fiscal del propietario o tercero.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#a27642] mt-0.5">*</span>
                    <span>Control interno que garantice efectividad en cada proceso en el hotel.</span>
                  </li>
                </ul>
              </div>

              {/* Conector Cíclico Visual (Flechas) */}
              <div className="flex md:flex-col items-center justify-center gap-2 text-[#a27642] opacity-50 py-4 md:py-0">
                <svg className="w-6 h-6 rotate-90 md:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <svg className="w-6 h-6 -rotate-90 md:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>

              {/* Lado Izquierdo del diagrama original (Resultados) */}
              <div className="flex-1 bg-white/5 border border-white/10 p-8 rounded-sm">
                <h4 className="text-lg font-serif mb-6 text-[#a27642]">Resultados y Rentabilidad</h4>
                <ul className="space-y-4 text-sm text-zinc-300 font-light">
                  <li className="flex gap-3">
                    <span className="text-[#a27642] mt-0.5">*</span>
                    <span>Entrega de estados financieros dentro de los <strong>10 días posteriores al cierre de mes.</strong></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#a27642] mt-0.5">*</span>
                    <span>Rentabilidad de acuerdo a estrategias de negocio establecidas.</span>
                  </li>
                </ul>
              </div>

            </div>
          </FadeIn>

        </div>
      </div>
    </div>
  );
};