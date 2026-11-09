import { FadeIn } from './FadeIn';
import { siteData } from '../data/content';
import { Link } from 'react-router-dom';
import { Hero } from './Hero';

export const HomeFeatures = () => {
  const { intro, model } = siteData.homeFeatures;

  return (
    <div className="bg-[#F8F9FA]">
      <Hero />
      
      {/* 1. Introducción y Enfoque */}
      <section className="py-32 border-b border-[#767980]/20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Columna Izquierda: Texto Principal */}
            <div className="lg:col-span-7">
              <span className="text-lg uppercase tracking-[0.2em] font-bold text-[#CF6343] block mb-6">
                Gestión Hotelera para Propietarios
              </span>
              <h2 className="text-5xl sm:text-6xl lg:text-[5rem] font-serif text-[#151617] leading-[1.05] mb-8">
                {intro.tagline.split('.')[0]}.<br/>
                <span className="italic text-[#767980]">{intro.tagline.split('.')[1]}.</span>
              </h2>
              <p className="text-xl sm:text-2xl text-[#767980] font-light leading-relaxed max-w-2xl mb-10">
                Operamos con una metodología única y estandarizada que se adapta a las exigencias de diferentes segmentos, protegiendo siempre la rentabilidad de su activo y su posicionamiento en el mercado.
              </p>
              <div className="flex flex-wrap gap-6 items-center text-lg uppercase tracking-widest text-[#151617] font-medium">
                {intro.proposal.map((prop, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span>{prop}</span>
                    {i < 2 && <span className="w-2.5 h-2.5 bg-[#CF6343] rounded-full"></span>}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Columna Derecha: Frase Editorial */}
            <div className="lg:col-span-5 lg:pl-16">
              <div className="border-l-2 border-[#CF6343] pl-8 py-4">
                <p className="text-3xl sm:text-4xl font-sans font-light text-[#151617] leading-snug italic">
                  "Transformamos el esfuerzo de su inversión en un activo de alto rendimiento y valor corporativo sostenido."
                </p>
              </div>
            </div>

          </FadeIn>
        </div>
      </section>

      {/* 2. Respaldo, Certificaciones y Marcas (Fondo Gris Carbón) */}
      <div className="w-full bg-[#2E2F32] text-[#F8F9FA] py-16 sm:py-24 my-16">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Columna Izquierda: Mensaje Central y MARCAS OFICIALES */}
            <div className="lg:col-span-6 pr-0 lg:pr-8">
              <span className="text-base uppercase tracking-[0.2em] font-bold text-[#CF6343] block mb-4">
                Certificaciones Internacionales
              </span>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif leading-tight mt-4 mb-6">
                Diferentes marcas.<br/>
                <span className="italic text-[#F8F9FA]/60">Una visión de gestión.</span>
              </h2>
              <p className="text-xl text-[#F8F9FA]/70 font-light leading-relaxed mb-8 max-w-md">
                Contamos con la experiencia comprobada y el respaldo corporativo para operar las franquicias más exigentes a nivel global.
              </p>
              
              {/* Contenedor de Logotipos alineados y un poco más compactos */}
              <div className="flex flex-wrap items-center gap-x-10 gap-y-8 border-t border-[#F8F9FA]/10 pt-8 mt-4">
                
                {/* Logo Hilton (Invertido a blanco para que resalte en fondo oscuro) */}
                <img 
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/HiltonHotelsLogo.svg/1280px-HiltonHotelsLogo.svg.png?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=thumbnail" 
                  alt="Hilton" 
                  className="h-16 sm:h-20 object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                />
                
                {/* Logo Hampton (Colores originales) */}
                <img 
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/9/93/Hampton_by_Hilton_logo.svg/3840px-Hampton_by_Hilton_logo.svg.png?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=thumbnail" 
                  alt="Hampton by Hilton" 
                  className="h-16 sm:h-20 object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
                
                {/* Logo Spark (Colores originales) */}
                <img 
                  src="https://www.hilton.com/modules/assets/svgs/logos/PE.svg" 
                  alt="Spark by Hilton" 
                  className="h-12 sm:h-14 object-contain opacity-90 hover:opacity-100 transition-opacity"
                />

              </div>
            </div>

            {/* Columna Derecha: Formatos Operativos (Perfectamente alineados al centro) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 lg:border-l border-[#F8F9FA]/10">
              <div className="p-6 sm:px-10 sm:py-8 flex flex-col justify-center">
                <span className="text-base tracking-[0.16em] uppercase font-bold text-[#CF6343] block mb-3">Full Service</span>
                <strong className="block font-serif text-3xl sm:text-4xl mb-4 text-[#F8F9FA]">Servicio integral y eventos</strong>
                <span className="text-lg text-[#F8F9FA]/70 font-light leading-relaxed">
                 Operación integral orientada a maximizar ingresos mediante una amplia oferta de servicios, alimentos y bebidas, y gestión de eventos y convenciones.
                </span>
              </div>
              
              <div className="p-6 sm:px-10 sm:py-8 sm:border-l border-[#F8F9FA]/10 border-t sm:border-t-0 flex flex-col justify-center">
                <span className="text-base tracking-[0.16em] uppercase font-bold text-[#CF6343] block mb-3">Focused / Midscale</span>
                <strong className="block font-serif text-3xl sm:text-4xl mb-4 text-[#F8F9FA]">Eficiencia operativa</strong>
                <span className="text-lg text-[#F8F9FA]/70 font-light leading-relaxed">
                  Modelos eficientes que optimizan costos, mantienen la ocupación y protegen la rentabilidad sin comprometer el servicio.
                </span>
              </div>
            </div>

          </FadeIn>
        </div>
      </div>

      {/* 3. Modelo Operativo y Capacidades */}
      <section className="py-32 border-b border-[#767980]/20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6">
          
          <FadeIn className="text-center mb-24">
            <span className="text-base uppercase tracking-[0.2em] font-bold text-[#CF6343] block mb-6">Modelo Operativo</span>
            <h3 className="text-5xl sm:text-6xl font-serif text-[#151617] mb-8">{model.title}</h3>
            <p className="text-xl sm:text-2xl text-[#767980] font-light max-w-3xl mx-auto leading-relaxed">{model.description}</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#767980]/20 border border-[#767980]/20 mb-32">
            {model.cycle.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="bg-white p-12 sm:p-14 hover:bg-[#F8F9FA] transition-colors">
                <span className="text-5xl font-serif text-[#CF6343] italic block mb-6">{item.step}</span>
                <h4 className="text-4xl font-serif text-[#151617] mb-4">{item.title}</h4>
                <p className="text-xl text-[#767980] font-light leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>

          <div className="flex flex-col items-center">
            <FadeIn className="mb-16 text-center">
              <h3 className="text-4xl sm:text-5xl font-serif text-[#151617] leading-tight">Capacidades que protegen el resultado</h3>
            </FadeIn>
            
            {/* Lista de capacidades con íconos vectoriales */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-10 w-full">
              {model.capabilities.map((cap, i) => (
                <FadeIn key={i} delay={i * 0.1} className="border-t border-[#767980]/20 pt-6">
                  <h4 className="text-xl sm:text-2xl font-medium text-[#151617] flex items-start gap-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#CF6343" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span className="leading-relaxed">{cap.title}</span>
                  </h4>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.4} className="mt-20 pt-8 border-t border-[#767980]/20 w-full text-center">
              <Link 
                to="/servicios" 
                className="inline-flex items-center gap-4 text-base sm:text-lg uppercase tracking-[0.2em] font-bold text-[#CF6343] hover:text-[#963E27] transition-colors pb-1"
              >
                Conocer capacidades operativas <span className="text-2xl">→</span>
              </Link>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* 4. Visibilidad e Inicio */}
      <section className="bg-[#151617] text-[#F8F9FA] relative">
        <div className="w-full h-[40vh] sm:h-[50vh] overflow-hidden">
          <img 
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/9a/6d/50/bienvenidos-a-hilton.jpg?w=1100&h=-1&s=1" 
            alt="Lobby Hotel" 
            className="w-full h-full object-cover opacity-30 grayscale hover:scale-105 transition-transform duration-1000"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <FadeIn>
              <h3 className="text-base sm:text-lg uppercase tracking-[0.2em] font-bold text-[#CF6343] mb-10">Visibilidad para el propietario</h3>
              <div className="flex flex-wrap gap-8 mb-12">
                {model.visibility.steps.map((step, i) => (
                  <div key={i} className="flex items-center gap-5">
                    <span className="text-3xl sm:text-4xl font-serif text-[#F8F9FA]">{step}</span>
                    {i < 3 && <span className="text-[#CF6343] text-2xl sm:text-3xl">→</span>}
                  </div>
                ))}
              </div>
              <p className="text-xl sm:text-2xl text-[#F8F9FA]/70 font-light max-w-lg leading-relaxed">{model.visibility.note}</p>
            </FadeIn>

            <FadeIn delay={0.2} className="lg:border-l border-[#F8F9FA]/10 lg:pl-24">
              <h3 className="text-base sm:text-lg uppercase tracking-[0.2em] font-bold text-[#CF6343] mb-10">Inicio de la relación</h3>
              <div className="grid grid-cols-2 gap-12">
                {model.onboarding.map((step, i) => (
                  <div key={i}>
                    <span className="block text-[#F8F9FA]/60 font-serif text-3xl sm:text-4xl mb-3 italic">{step.split(' ')[0]}</span>
                    <span className="block text-lg sm:text-xl uppercase tracking-widest font-medium text-[#F8F9FA]">{step.split(' ')[1]}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. Call To Action */}
      <section className="relative py-24 sm:py-32 bg-[#F8F9FA] border-b border-[#767980]/20 overflow-hidden">
        
        {/* Contenedor de Imagen de Fondo */}
        <div className="absolute right-0 top-0 w-full lg:w-3/5 h-full opacity-50">
          <img 
            src="https://www.hilton.com/im/en/QROJSHH/22860562/hilton-qro-109.jpg?impolicy=crop&cw=5000&ch=2799&gravity=NorthWest&xposition=0&yposition=6&rw=768&rh=430" 
            alt="Hotel Resort" 
            className="w-full h-full object-cover grayscale mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8F9FA] via-[#F8F9FA]/70 to-transparent"></div>
        </div>

        {/* Contenido de Texto */}
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeIn className="max-w-4xl">
            <span className="text-sm sm:text-base uppercase tracking-[0.2em] font-bold text-[#CF6343] block mb-6">
              {siteData.homeFeatures.cta.eyebrow}
            </span>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-[1.1] mb-8 tracking-tight">
              <span className="text-[#151617] block mb-2">
                {siteData.homeFeatures.cta.title.split('.')[0]}.
              </span>
              <span className="text-[#767980] italic block">
                {siteData.homeFeatures.cta.title.split('.')[1]?.trim()}.
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-[#767980] font-light mb-12 max-w-2xl leading-relaxed">
              {siteData.homeFeatures.cta.description}
            </p>
            
            <Link 
              to="/contacto" 
              className="inline-block bg-[#CF6343] hover:bg-[#963E27] px-10 py-5 text-sm sm:text-base uppercase tracking-[0.2em] font-medium text-white transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Solicitar diagnóstico
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  );
};