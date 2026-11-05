import { FadeIn } from './FadeIn';
import { Link } from 'react-router-dom';
import { Hero } from './Hero';

export const HomeFeatures = () => {
  const stats = [
    { number: "02", label: "Hoteles en operación" },
    { number: "02", label: "Formatos de servicio" },
    { number: "01", label: "Modelo de gestión" }
  ];

  const proposals = ["Rentabilidad", "Ejecución", "Visibilidad"];

  const cycle = [
    { step: "01", title: "Planear", desc: "Presupuesto, metas, prioridades." },
    { step: "02", title: "Vender", desc: "Demanda, tarifa, canales." },
    { step: "03", title: "Operar", desc: "Estándares, equipo y costos." },
    { step: "04", title: "Revisar", desc: "Variaciones, acuerdos y cierre mensual." }
  ];

  const capabilities = [
    "Comercial e ingresos",
    "Finanzas y control",
    "Operación y estándares de marca",
    "Talento y liderazgo",
    "Activo, proveedores y tecnología"
  ];

  const visibilitySteps = ["Presupuesto", "Real", "Variación", "Acción"];
  
  const onboarding = ["01 Diagnóstico", "02 Propuesta", "03 Acuerdo", "04 Arranque"];

  return (
    <div className="bg-[#F2F2F2]">
      <Hero />
      
      {/* 1. Introducción y Enfoque con Imagen Vertical */}
      <section className="py-32 border-b border-zinc-300">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            <div className="lg:col-span-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#804E3B] block mb-6 font-bold">
                Gestión hotelera para propietarios
              </span>
              <h2 className="text-4xl sm:text-6xl lg:text-[4rem] font-serif text-[#2B2C30] leading-[1.1] mb-8">
                Más control sobre la gestión.<br/>
                <span className="italic text-[#5C5E66]">Más valor para su hotel.</span>
              </h2>
              <p className="text-[#5C5E66] font-light leading-relaxed max-w-lg mb-8">
                Un modelo de gestión con disciplina comercial y financiera. El propietario conoce en todo momento el desempeño de su hotel.
              </p>
              <div className="flex gap-4 items-center text-[10px] uppercase tracking-widest text-[#2B2C30] font-medium">
                {proposals.map((prop, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span>{prop}</span>
                    {i < 2 && <span className="w-1 h-1 bg-[#804E3B] rounded-full"></span>}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-8 lg:border-l border-zinc-300 lg:pl-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="border-t border-zinc-300 pt-6">
                  <span className="block text-3xl lg:text-4xl font-serif text-[#2B2C30] mb-2">{stat.number}</span>
                  <span className="block text-[9px] uppercase tracking-wider text-[#5C5E66]">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="lg:col-span-4 hidden lg:block">
              <div className="aspect-[3/4] w-full overflow-hidden bg-white border border-zinc-200">
                <img 
                  src="https://images.trvl-media.com/lodging/4000000/3600000/3599000/3598923/2ac10c26.jpg?impolicy=resizecrop&rw=1200&ra=fit" 
                  alt="Arquitectura Hotelera" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

          </FadeIn>
        </div>
      </section>

      {/* 2. Experiencia de operación */}
      <div className="w-full bg-[#2B2C30] text-[#F2F2F2] py-24 sm:py-32 my-20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#804E3B] block mb-4 font-bold">
                Experiencia de operación
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight mt-6">
                Dos formatos.<br/><span className="italic text-[#5C5E66]">Un mismo modelo de gestión.</span>
              </h2>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:border-l border-[#5C5E66]/40">
              <div className="p-8 sm:px-12 sm:py-8 lg:py-4">
                <span className="text-[9px] tracking-[0.16em] uppercase text-[#804E3B] block mb-4 font-bold">Servicio completo</span>
                <strong className="block font-serif text-2xl mb-2 text-white">Hilton Querétaro</strong>
                <span className="text-[11px] text-zinc-400 font-light">Habitaciones, eventos y alimentos y bebidas</span>
              </div>
              
              <div className="p-8 sm:px-12 sm:py-8 lg:py-4 sm:border-l border-[#5C5E66]/40 border-t sm:border-t-0">
                <span className="text-[9px] tracking-[0.16em] uppercase text-[#804E3B] block mb-4 font-bold">Servicio selecto</span>
                <strong className="block font-serif text-2xl mb-2 text-white">Hampton Juriquilla</strong>
                <span className="text-[11px] text-zinc-400 font-light">Operación con estructura de costos eficiente</span>
              </div>
            </div>

          </FadeIn>
        </div>
      </div>

      {/* 3. Modelo Operativo: Ciclo */}
      <section className="py-32 border-b border-zinc-300">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-24">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#804E3B] block mb-4 font-bold">Modelo de gestión</span>
            <h3 className="text-3xl sm:text-5xl font-serif text-[#2B2C30] mb-6">Una gestión que el propietario puede seguir.</h3>
            <p className="text-[#5C5E66] font-light max-w-2xl mx-auto">Las prioridades del propietario se traducen en decisiones diarias, en un ciclo de cuatro etapas.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-300 border border-zinc-300">
            {cycle.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="bg-white p-10 hover:bg-[#F2F2F2] transition-colors">
                <span className="text-2xl font-serif text-[#5C5E66]/50 block mb-4">{item.step}</span>
                <h4 className="text-lg font-serif text-[#2B2C30] mb-3">{item.title}</h4>
                <p className="text-xs text-[#5C5E66] uppercase tracking-wider leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>

         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-32">
            
            {/* Imagen Izquierda */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="aspect-[4/5] w-full overflow-hidden bg-white border border-zinc-200">
                <img 
                  src="https://images.trvl-media.com/lodging/4000000/3600000/3599000/3598923/daee694c.jpg?impolicy=resizecrop&rw=1200&ra=fit" 
                  alt="Corporativo" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            
            {/* Contenido Derecha */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <FadeIn className="mb-12">
                <h3 className="text-3xl font-serif text-[#2B2C30]">Cinco áreas de gestión</h3>
              </FadeIn>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8">
                {capabilities.map((cap, i) => (
                  <FadeIn key={i} delay={i * 0.1} className="border-t border-zinc-300 pt-5">
                    <h4 className="text-xs uppercase tracking-widest text-[#2B2C30] font-medium flex items-start gap-3">
                      <span className="text-[#804E3B] font-serif italic text-base leading-none mt-0.5">
                        0{i + 1}
                      </span>
                      <span className="leading-relaxed">{cap}</span>
                    </h4>
                  </FadeIn>
                ))}
              </div>

              {/* Botón hacia Servicios */}
              <FadeIn delay={0.4} className="mt-14 pt-8 border-t border-zinc-300">
                <Link 
                  to="/servicios" 
                  className="inline-flex items-center gap-3 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold text-[#2B2C30] hover:text-[#804E3B] transition-colors border-b border-[#2B2C30] hover:border-[#804E3B] pb-1"
                >
                  Ver alcance <span>→</span>
                </Link>
              </FadeIn>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Visibilidad e Inicio con Imagen Panorámica */}
      <section className="bg-[#0A0A0A] text-[#F2F2F2] relative">
        <div className="w-full h-[40vh] sm:h-[50vh] overflow-hidden bg-[#0A0A0A]">
          <img 
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/9a/6d/50/bienvenidos-a-hilton.jpg?w=1100&h=-1&s=1" 
            alt="Lobby Hotel" 
            /* Se eliminó mix-blend-overlay y se ajustó la opacidad al 30% para un look ejecutivo */
            className="w-full h-full object-cover opacity-30 grayscale hover:scale-105 transition-transform duration-1000"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <FadeIn>
              <h3 className="text-xs uppercase tracking-[0.3em] text-[#804E3B] mb-10 font-bold">Información para el propietario</h3>
              <div className="flex flex-wrap gap-4 mb-8">
                {visibilitySteps.map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="text-xl font-serif text-white">{step}</span>
                    {i < 3 && <span className="text-[#5C5E66]">→</span>}
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#5C5E66] font-light max-w-sm">
                Indicadores en línea, actualizados a diario. Para cada hotel se acuerdan responsables, fechas y frecuencia de revisión.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="lg:border-l border-[#2B2C30] lg:pl-20">
              <h3 className="text-xs uppercase tracking-[0.3em] text-[#804E3B] mb-10 font-bold">Inicio de la relación</h3>
              <div className="grid grid-cols-2 gap-8">
                {onboarding.map((step, i) => (
                  <div key={i}>
                    <span className="block text-[#5C5E66] font-serif text-lg mb-1">{step.split(' ')[0]}</span>
                    <span className="block text-sm uppercase tracking-widest text-white">{step.split(' ')[1]}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. Call To Action */}
      <section className="relative py-20 sm:py-24 bg-white border-b border-zinc-200 overflow-hidden">
        
        {/* Contenedor de Imagen de Fondo */}
        <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full opacity-20 lg:opacity-60">
          <img 
            src="https://www.hilton.com/im/en/QROJSHH/22860562/hilton-qro-109.jpg?impolicy=crop&cw=5000&ch=2799&gravity=NorthWest&xposition=0&yposition=6&rw=768&rh=430" 
            alt="Hotel Resort" 
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>

        {/* Contenido de Texto */}
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeIn className="max-w-3xl">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#804E3B] block mb-6 font-bold">
              Primer paso
            </span>
            
            <h2 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-serif leading-[1.05] mb-8 tracking-tight">
              <span className="text-[#0A0A0A] block mb-2">
                Conozca el potencial
              </span>
              <span className="text-[#5C5E66] italic block">
                de su hotel.
              </span>
            </h2>
            
            <p className="text-base sm:text-lg text-[#5C5E66] font-light mb-10 max-w-2xl leading-relaxed">
              Para propietarios, familias propietarias y responsables de la operación. Un diagnóstico muestra la situación actual del hotel y sus áreas de mejora.
            </p>
            
            <div className="w-16 h-[1px] bg-[#804E3B] mb-10"></div>
            
            <Link to="/contacto" className="inline-block bg-[#804E3B] px-10 py-5 text-xs uppercase tracking-[0.2em] font-medium text-white hover:bg-[#552828] transition-all duration-300">
              Solicitar diagnóstico
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  );
};