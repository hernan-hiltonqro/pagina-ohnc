import { FadeIn } from './FadeIn';
import { OwnerCentricity } from './OwnerCentricity';

export const AboutSection = () => {
  return (
    <section id="nosotros" className="py-32 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. ¿Quiénes Somos? (Texto literal del documento) */}
        <FadeIn className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Columna Izquierda: Título Principal */}
            <div className="lg:col-span-7">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#a27642] block mb-6 font-bold">
                Nuestra Filosofía
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-[3.5rem] font-serif text-[#0f2035] leading-[1.1] tracking-tight">
                Somos una operadora hotelera especializada en la gestión estratégica e integral de activos hoteleros.
              </h2>
            </div>

            {/* Columna Derecha: Descripción y Cita */}
            <div className="lg:col-span-5 lg:pt-14">
              <p className="text-base sm:text-lg text-zinc-600 font-light leading-relaxed mb-12">
                Integramos inteligencia comercial, responsabilidad financiera, desarrollo del talento y excelencia operativa para transformar información en decisiones de valor, cumplir nuestra promesa al huésped y construir rentabilidad sostenible.
              </p>
              
              <div className="pl-6 border-l border-[#c8a56d]">
                <p className="text-xl sm:text-2xl font-serif italic text-[#0f2035] leading-relaxed">
                  "Entendemos el negocio. Visualizamos su potencial. Ejecutamos con disciplina."
                </p>
              </div>
            </div>

          </FadeIn>

        {/* 2. Owner Centricity (Componente Interactivo) */}
        <OwnerCentricity />

        {/* 3. Evolución y Modelo de Gestión */}
      <section className="py-32 border-b border-zinc-200 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          
          <FadeIn className="mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-[#a27642]"></div>
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#a27642]">
                Nuestra Evolución
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif text-[#0b172a] leading-[1.1] tracking-tight">
              De la visión fundadora <br/>
              <span className="italic text-[#5c6b7f] font-light">al siguiente capítulo.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex overflow-x-auto pb-12 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
              
              {/* Hito 1: 2013 */}
              <div className="flex-none w-[85vw] sm:w-[350px] md:w-[400px] relative snap-start">
                <div className="absolute top-2 left-0 w-full h-[1px] bg-zinc-200"></div>
                <div className="absolute top-1 left-0 w-2.5 h-2.5 bg-[#a27642] rounded-full ring-4 ring-white z-10"></div>
                
                <div className="pt-10 pr-12">
                  <span className="text-4xl sm:text-5xl font-serif text-[#0b172a] mb-2 block">2013</span>
                  <h3 className="text-[10px] uppercase tracking-[0.2em] text-[#5c6b7f] font-bold mb-4">Fundación de Xenia</h3>
                  <p className="text-sm text-zinc-500 font-light leading-relaxed">
                    Nace la empresa, sentando las bases para estructurar y profesionalizar la operación hotelera.
                  </p>
                </div>
              </div>

              {/* Hito 2: Hoy */}
              <div className="flex-none w-[85vw] sm:w-[350px] md:w-[400px] relative snap-start">
                <div className="absolute top-2 left-0 w-full h-[1px] bg-zinc-200"></div>
                <div className="absolute top-1 left-0 w-2.5 h-2.5 bg-[#0b172a] rounded-full ring-4 ring-white z-10"></div>
                
                <div className="pt-10 pr-12">
                  <span className="text-4xl sm:text-5xl font-serif text-[#0b172a] mb-2 block">Hoy</span>
                  <h3 className="text-[10px] uppercase tracking-[0.2em] text-[#a27642] font-bold mb-4">Evolución a GEOH</h3>
                  <p className="text-sm text-zinc-500 font-light leading-relaxed">
                    Transición estratégica. Consolidamos nuestra propuesta de valor basada en Owner Centricity y hospitalidad de alta gama.
                  </p>
                </div>
              </div>

            </div>
          </FadeIn>

        </div>
      </section>

        {/* 2. Tres Pilares. Una forma de gestionar. */}
        <FadeIn delay={0.2} className="mt-32">
          <div className="text-center mb-16">
            <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4">Nuestro Modelo de Gestión</h3>
            <h4 className="text-3xl font-serif text-zinc-900">Tres pilares. Una forma de gestionar.</h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200">
            <div className="bg-white p-12 text-center hover:bg-zinc-50 transition-colors">
              <span className="block text-4xl font-serif text-zinc-200 mb-6">01</span>
              <h5 className="text-lg font-serif text-zinc-900 mb-3">Entendemos</h5>
              <p className="text-xs text-zinc-500 uppercase tracking-widest">El negocio y su entorno</p>
            </div>
            <div className="bg-white p-12 text-center hover:bg-zinc-50 transition-colors">
              <span className="block text-4xl font-serif text-zinc-200 mb-6">02</span>
              <h5 className="text-lg font-serif text-zinc-900 mb-3">Visualizamos</h5>
              <p className="text-xs text-zinc-500 uppercase tracking-widest">El potencial y la estrategia</p>
            </div>
            <div className="bg-white p-12 text-center hover:bg-zinc-50 transition-colors">
              <span className="block text-4xl font-serif text-zinc-200 mb-6">03</span>
              <h5 className="text-lg font-serif text-zinc-900 mb-3">Ejecutamos</h5>
              <p className="text-xs text-zinc-500 uppercase tracking-widest">La operación y los resultados</p>
            </div>
          </div>
        </FadeIn>

        {/* 3. Una Visión Integral (Propuesta de Valor) */}
        <FadeIn delay={0.4} className="mt-32 pt-16 border-t border-zinc-200 text-center">
          <h3 className="text-2xl font-serif text-zinc-900 mb-6">Una visión integral. Un compromiso con el valor.</h3>
          <p className="text-sm text-zinc-600 font-light mb-16 max-w-xl mx-auto">
            Conectamos estrategia, personas y ejecución para generar resultados consistentes y sostenibles.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left max-w-5xl mx-auto">
            <div className="border-l border-zinc-200 pl-6">
              <h4 className="text-zinc-900 font-serif text-lg mb-2">Para nuestros socios</h4>
              <p className="text-xs text-zinc-500 tracking-wide uppercase">Confianza y valor patrimonial.</p>
            </div>
            <div className="border-l border-zinc-200 pl-6">
              <h4 className="text-zinc-900 font-serif text-lg mb-2">Para nuestros huéspedes</h4>
              <p className="text-xs text-zinc-500 tracking-wide uppercase">Una promesa cumplida.</p>
            </div>
            <div className="border-l border-zinc-200 pl-6">
              <h4 className="text-zinc-900 font-serif text-lg mb-2">Para nuestra gente</h4>
              <p className="text-xs text-zinc-500 tracking-wide uppercase">Oportunidades de desarrollo.</p>
            </div>
          </div>
        </FadeIn>

        {/* 4. Valores de Ejecución Complementarios (Manteniendo lo anterior) */}
        <FadeIn delay={0.6} className="mt-32 bg-zinc-900 text-white p-12 lg:p-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-6">Fundamentos Estratégicos</h4>
              <ul className="space-y-4 text-sm font-serif text-zinc-300">
                <li>Marcas Globales</li>
                <li>Eficiencia Comercial</li>
                <li>Ecosistema Digital y Business Intelligence</li> {/* Este es el nuevo enfoque */}
                <li>Responsabilidad Social</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-6">Valores de Ejecución</h4>
              <ul className="space-y-3 text-xs text-zinc-400 font-light">
  <li className="flex gap-3"><span className="w-1.5 h-1.5 bg-zinc-700 rounded-full mt-1 shrink-0"></span>Promover una cultura orientada al logro de objetivos.</li>
  {/* NUEVO ENFOQUE DIGITAL */}
  <li className="flex gap-3"><span className="w-1.5 h-1.5 bg-zinc-700 rounded-full mt-1 shrink-0"></span>Sustituir procesos manuales por flujos digitales (validación, firmas electrónicas y aprobaciones) para optimizar tiempos.</li>
  <li className="flex gap-3"><span className="w-1.5 h-1.5 bg-zinc-700 rounded-full mt-1 shrink-0"></span>Mejorar la capacidad de respuesta y reducir costos de cumplimiento.</li>
  <li className="flex gap-3"><span className="w-1.5 h-1.5 bg-zinc-700 rounded-full mt-1 shrink-0"></span>Concretar fechas de compromiso y definir responsables.</li>
</ul>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};