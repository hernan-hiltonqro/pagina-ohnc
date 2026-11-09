import { useEffect, useState } from 'react';
import { FadeIn } from './FadeIn';
import { Link } from 'react-router-dom';

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
      <><strong className="text-[#151617] font-bold">Ingreso y caja:</strong> Flujo de caja, equilibrio entre entradas y salidas, e información diaria en el ecosistema digital (BI).</>,
      <><strong className="text-[#151617] font-bold">Gasto y tesorería:</strong> Control de costos fijos y variables, presupuesto vs. forecast, y firmas mancomunadas.</>,
      <><strong className="text-[#151617] font-bold">Cumplimiento y resultados:</strong> Obligaciones fiscales, bases contables para la estrategia fiscal, y estados financieros dentro de los 10 días posteriores al cierre (salvo lo acordado).</>
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

export const ServicesSection = () => {
  const [activeId, setActiveId] = useState(servicios[0].id);

  // Resalta en el índice el servicio que está en la zona media de la pantalla
  useEffect(() => {
    const panels = servicios
      .map((s) => document.getElementById(`servicio-${s.id}`))
      .filter(Boolean);
    if (!panels.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibles = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visibles.length) setActiveId(visibles[0].target.dataset.id);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: 0 }
    );

    panels.forEach((p) => observer.observe(p));
    return () => observer.disconnect();
  }, []);

  const irA = (id) => {
    const el = document.getElementById(`servicio-${id}`);
    if (!el) return;
    const reducir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reducir ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA]">

      {/* ==========================================
          BLOQUE 1: ENCABEZADO
          ========================================== */}
      <section className="pt-28  pb-0 bg-[#151617] text-center">
  <div className="max-w-7xl mx-auto px-6">
    <FadeIn className="max-w-5xl mx-auto flex flex-col items-center">
      <div className="flex items-center gap-5 mb-10">
        <div className="w-10 h-[2px] bg-[#CF6343]"></div>
        <span className="text-lg uppercase tracking-[0.2em] font-bold text-[#CF6343]">
          Gestión Integral, con Sentido
        </span>
        <div className="w-10 h-[2px] bg-[#CF6343]"></div>
      </div>

      <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-serif text-[#F8F9FA] leading-[1.05] tracking-tight mb-10">
        Una sola <br/>
        <span className="italic text-[#9A9DA4] font-light">agenda para cuidar el negocio.</span>
      </h1>

      <p className="text-xl sm:text-2xl text-[#F8F9FA]/70 font-light leading-relaxed max-w-2xl">
        Unimos las áreas que determinan cómo se siente el hotel, cómo opera y qué valor deja a sus propietarios.
      </p>

      {/* Línea que conecta con la agenda */}
      <div aria-hidden="true" className="mt-16 w-px h-20 bg-[#CF6343]"></div>
    </FadeIn>
  </div>
</section>

      {/* ==========================================
          BLOQUE 2: AGENDA (índice fijo) + PANELES
          ========================================== */}
      <section className="py-20 lg:py-28 bg-[#E9EAEC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Índice lateral: se queda fijo y sigue el scroll */}
            <nav
              aria-label="Áreas de servicio"
              className="hidden lg:block lg:col-span-4 lg:sticky lg:top-32"
            >
              <ul>
                {servicios.map((servicio) => {
                  const activo = activeId === servicio.id;
                  return (
                    <li key={servicio.id}>
                      <button
                        type="button"
                        onClick={() => irA(servicio.id)}
                        aria-current={activo ? 'true' : undefined}
                        className={`group w-full flex gap-5 items-baseline text-left py-4 pl-6 border-l-2 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CF6343] ${
                          activo
                            ? 'border-[#CF6343]'
                            : 'border-[#151617]/10 hover:border-[#151617]/40'
                        }`}
                      >
                        <span
                          className={`font-serif italic text-lg transition-colors duration-300 ${
                            activo ? 'text-[#CF6343]' : 'text-[#767980]'
                          }`}
                        >
                          {servicio.id}
                        </span>
                        <span
                          className={`font-serif text-xl leading-snug transition-colors duration-300 ${
                            activo
                              ? 'text-[#151617]'
                              : 'text-[#767980] group-hover:text-[#151617]'
                          }`}
                        >
                          {servicio.title}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Paneles de servicio */}
            <div className="lg:col-span-8 space-y-8">
              {servicios.map((servicio) => {
                const activo = activeId === servicio.id;
                return (
                  <FadeIn key={servicio.id}>
                    <article
                      id={`servicio-${servicio.id}`}
                      data-id={servicio.id}
                      className="scroll-mt-32 bg-white border border-[#151617]/10 rounded-sm shadow-[0_24px_60px_-30px_rgba(21,22,23,0.25)]"
                    >
                      <div className="flex items-center gap-5 sm:gap-6 px-8 sm:px-12 pt-10 sm:pt-12">
                        <span
                          className={`flex-shrink-0 w-14 h-14 flex items-center justify-center font-serif italic text-2xl text-[#F8F9FA] transition-colors duration-500 ${
                            activo ? 'bg-[#CF6343]' : 'bg-[#151617]'
                          }`}
                        >
                          {servicio.id}
                        </span>
                        <h3 className="text-3xl sm:text-4xl font-serif text-[#151617] leading-tight">
                          {servicio.title}
                        </h3>
                      </div>

                      <ul className="mt-8 px-8 sm:px-12 pb-6 sm:pb-8 text-lg sm:text-xl text-[#5F6269] font-light">
                        {servicio.details.map((detail, i) => (
                          <li
                            key={i}
                            className="flex gap-5 items-start py-6 border-t border-[#151617]/10"
                          >
                            <span className="text-[#CF6343] mt-1 text-2xl font-bold leading-none">+</span>
                            <span className="leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </FadeIn>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          BLOQUE 3: CIERRE / CTA (Banner Compacto)
          ========================================== */}
      <section className="py-12 sm:py-14 bg-[#2E2F32] mt-auto border-t border-[#767980]/20">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-2xl border-l-2 border-[#CF6343] pl-6">
              <h2 className="text-2xl sm:text-3xl font-serif leading-snug text-[#F8F9FA]">
                Llevemos la gestión de su activo{" "}
                <span className="italic font-light text-[#F8F9FA]/60">
                  al siguiente nivel.
                </span>
              </h2>
              <p className="mt-3 text-base text-[#F8F9FA]/65 font-light leading-relaxed">
                Estamos listos para transformar la información en decisiones de valor
                y proteger la rentabilidad de su patrimonio.
              </p>
            </div>

            <Link
              to="/contacto"
              className="group flex-shrink-0 inline-flex items-center justify-center gap-3 border border-[#F8F9FA]/40 px-8 py-4 text-sm uppercase tracking-[0.2em] text-[#F8F9FA] transition-all duration-300 hover:border-[#F8F9FA] hover:bg-[#F8F9FA] hover:text-[#2E2F32]"
            >
              Solicitar diagnóstico
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  );
};
