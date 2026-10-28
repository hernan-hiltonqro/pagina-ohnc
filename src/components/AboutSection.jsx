import { FadeIn } from './FadeIn';
import { OwnerCentricity } from './OwnerCentricity';

export const AboutSection = () => {
  return (
    <section id="nosotros" className="pt-32 bg-white">
      
      {/* 1. ¿Quiénes Somos? (Textos originales restaurados) */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <FadeIn className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          <div className="lg:col-span-7">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#a27642] block mb-6 font-bold">
              Nuestra Filosofía
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-[3.5rem] font-serif text-[#0f2035] leading-[1.1] tracking-tight mb-8">
              Somos una operadora hotelera especializada en la gestión estratégica e integral de activos hoteleros.
            </h2>
            <p className="text-xl text-[#a27642] font-serif italic">
              Transformamos información en decisiones de valor.
            </p>
          </div>
          
          {/* Párrafos intactos según tu solicitud */}
          <div className="lg:col-span-5 lg:pt-14 space-y-6">
            <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
              <strong className="text-[#0b172a] font-medium">En GEOH</strong> ponemos a su alcance nuestro know-how, talento humano, herramientas y sistemas para la maximización del retorno de su inversión en gestión hotelera.
            </p>
            <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
              Nuestro equipo fuerte y consolidado logra la implementación de procesos eficientes y sistemas productivos que favorecen la operación cotidiana con altos niveles de calidad, contribuyendo a la rentabilidad de las propiedades que operamos y a la creación de experiencias memorables para los huéspedes, con estancias satisfactorias que fortalecen el desempeño del activo hotelero.
            </p>
          </div>

        </FadeIn>
      </div>

      {/* 2. Owner Centricity (Ecosistema del valor - DIAGRAMA INTACTO) */}
      <div className="w-full">
        <OwnerCentricity />
      </div>

      {/* 3. Evolución (Línea de tiempo simplificada) */}
      <div className="max-w-7xl mx-auto px-6">
        <section className="py-32 bg-white overflow-hidden">
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
                      Consolidación de nuestra operadora hotelera.
                    </p>
                  </div>
                </div>

              </div>
            </FadeIn>
          </div>
        </section>
      </div>
      
      {/* ==========================================
          AQUÍ SE DEBE IMPORTAR TU COMPONENTE DE EQUIPO
          <TeamSection />
          ========================================== */}
          
    </section>
  );
};