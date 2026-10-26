import { FadeIn } from './FadeIn';
import { OwnerCentricity } from './OwnerCentricity';

export const AboutSection = () => {
  return (
    <section id="nosotros" className="py-32 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. ¿Quiénes Somos? (Apertura simplificada) */}
        <FadeIn className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-7">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#a27642] block mb-6 font-bold">
              Nuestra Filosofía
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-[3.5rem] font-serif text-[#0f2035] leading-[1.1] tracking-tight">
              Somos una operadora hotelera especializada en la gestión estratégica e integral de activos hoteleros.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-14">
            <p className="text-base sm:text-lg text-zinc-600 font-light leading-relaxed mb-12">
              Transformamos información en decisiones de valor para construir rentabilidad sostenible.
            </p>
          </div>
        </FadeIn>

        {/* 2. Owner Centricity */}
        <div className="mt-20">
          <OwnerCentricity />
        </div>

        {/* 3. Evolución (Línea de tiempo con texto actualizado) */}
        <section className="py-32 border-b border-zinc-200 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
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
                
                {/* 2013 */}
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

                {/* Hoy */}
                <div className="flex-none w-[85vw] sm:w-[350px] md:w-[400px] relative snap-start">
                  <div className="absolute top-2 left-0 w-full h-[1px] bg-zinc-200"></div>
                  <div className="absolute top-1 left-0 w-2.5 h-2.5 bg-[#0b172a] rounded-full ring-4 ring-white z-10"></div>
                  <div className="pt-10 pr-12">
                    <span className="text-4xl sm:text-5xl font-serif text-[#0b172a] mb-2 block">Hoy</span>
                    <h3 className="text-[10px] uppercase tracking-[0.2em] text-[#a27642] font-bold mb-4">Evolución a GEOH</h3>
                    <p className="text-sm text-zinc-500 font-light leading-relaxed">
                      Transición estratégica hacia una gestión centrada en el propietario.
                    </p>
                  </div>
                </div>

              </div>
            </FadeIn>
          </div>
        </section>

        {/* 4. Cita fusionada con los 3 Pilares */}
        <FadeIn delay={0.2} className="py-32">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-serif text-[#0b172a] leading-snug italic">
              "Entendemos el negocio. Visualizamos su potencial. Ejecutamos con disciplina."
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200">
            <div className="bg-white p-12 text-center hover:bg-zinc-50 transition-colors">
              <span className="block text-4xl font-serif text-zinc-200 mb-6">01</span>
              <h5 className="text-lg font-serif text-[#0b172a] mb-3">Entendemos</h5>
              <p className="text-xs text-zinc-500 uppercase tracking-widest">El negocio y su entorno</p>
            </div>
            <div className="bg-white p-12 text-center hover:bg-zinc-50 transition-colors">
              <span className="block text-4xl font-serif text-zinc-200 mb-6">02</span>
              <h5 className="text-lg font-serif text-[#0b172a] mb-3">Visualizamos</h5>
              <p className="text-xs text-zinc-500 uppercase tracking-widest">El potencial y la estrategia</p>
            </div>
            <div className="bg-white p-12 text-center hover:bg-zinc-50 transition-colors">
              <span className="block text-4xl font-serif text-zinc-200 mb-6">03</span>
              <h5 className="text-lg font-serif text-[#0b172a] mb-3">Ejecutamos</h5>
              <p className="text-xs text-zinc-500 uppercase tracking-widest">La operación y los resultados</p>
            </div>
          </div>
        </FadeIn>

        {/* 5. Una Visión Integral */}
        <FadeIn delay={0.4} className="py-16 border-t border-zinc-200 text-center">
          <h3 className="text-3xl font-serif text-[#0b172a] mb-16">Una visión integral. Un compromiso con el valor.</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left max-w-5xl mx-auto">
            <div className="border-l border-[#a27642] pl-6">
              <h4 className="text-[#0b172a] font-serif text-lg mb-2">Para nuestros propietarios</h4>
              <p className="text-xs text-zinc-500 tracking-wide uppercase">Confianza y valor patrimonial.</p>
            </div>
            <div className="border-l border-[#a27642] pl-6">
              <h4 className="text-[#0b172a] font-serif text-lg mb-2">Para nuestros huéspedes</h4>
              <p className="text-xs text-zinc-500 tracking-wide uppercase">Una promesa cumplida.</p>
            </div>
            <div className="border-l border-[#a27642] pl-6">
              <h4 className="text-[#0b172a] font-serif text-lg mb-2">Para nuestra gente</h4>
              <p className="text-xs text-zinc-500 tracking-wide uppercase">Oportunidades de desarrollo.</p>
            </div>
          </div>
        </FadeIn>

        {/* 6. Fundamentos y Valores Consolidados */}
        <FadeIn delay={0.6} className="mt-16 bg-[#0b172a] text-white p-12 lg:p-20 text-center">
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#a27642] mb-12 font-bold">
            Fundamentos de Ejecución
          </h4>
          <ul className="space-y-6 text-sm sm:text-base font-light text-zinc-300 max-w-2xl mx-auto text-left">
            <li className="flex items-start gap-4">
              <span className="w-1.5 h-1.5 bg-[#a27642] rounded-full mt-2.5 shrink-0"></span>
              <span>Cultura orientada al logro de objetivos.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-1.5 h-1.5 bg-[#a27642] rounded-full mt-2.5 shrink-0"></span>
              <span>Procesos digitales que reducen tiempos de respuesta y costos de cumplimiento.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-1.5 h-1.5 bg-[#a27642] rounded-full mt-2.5 shrink-0"></span>
              <span>Marcas globales.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-1.5 h-1.5 bg-[#a27642] rounded-full mt-2.5 shrink-0"></span>
              <span>Responsabilidad social.</span>
            </li>
          </ul>
        </FadeIn>

      </div>
    </section>
  );
};