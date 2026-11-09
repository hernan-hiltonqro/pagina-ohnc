import { FadeIn } from './FadeIn';
import { OwnerCentricity } from './OwnerCentricity';

export const AboutSection = () => {
  return (
    <section id="nosotros" className="pt-32 bg-[#F8F9FA]">
      
      {/* 1. ¿Quiénes Somos? */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <FadeIn className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          <div className="lg:col-span-7">
            <span className="text-lg uppercase tracking-[0.2em] text-[#CF6343] block mb-6 font-bold">
              Nuestro Enfoque
            </span>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif text-[#151617] leading-[1.1] tracking-tight mb-8">
              Somos una operadora hotelera especializada en la gestión estratégica e integral de activos hoteleros.
            </h2>
            <p className="text-2xl text-[#CF6343] font-serif italic">
              Transformamos información en decisiones de valor.
            </p>
          </div>
          
          <div className="lg:col-span-5 lg:pt-16 space-y-8">
            <p className="text-xl text-[#767980] font-light leading-relaxed text-justify">
              <strong className="text-[#151617] font-medium">En GEOH</strong> ponemos a disposición de los propietarios nuestro know-how, talento humano, herramientas y sistemas para proteger e impulsar el valor de su patrimonio hotelero, fortalecer su rentabilidad y maximizar el retorno de su inversión.
            </p>
            <p className="text-xl text-[#767980] font-light leading-relaxed text-justify">
              Nuestro equipo implementa procesos eficientes y sistemas de gestión que optimizan la operación, fortalecen la rentabilidad y valorizan cada activo hotelero, brindando al propietario mayor control y visibilidad sobre su inversión.
            </p>
          </div>

        </FadeIn>
      </div>

      {/* 2. Owner Centricity (Ecosistema del valor) */}
      <div className="w-full">
        <OwnerCentricity />
      </div>

      {/* 3. Evolución (Línea de tiempo simplificada) */}
      <div className="max-w-7xl mx-auto px-6">
        <section className="py-32 bg-[#F8F9FA] overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <FadeIn className="mb-24">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-12 h-[2px] bg-[#CF6343]"></div>
                <span className="text-lg uppercase tracking-[0.2em] font-bold text-[#CF6343]">
                  Nuestra Evolución
                </span>
              </div>
              <h2 className="text-5xl sm:text-6xl font-serif text-[#151617] leading-[1.1] tracking-tight">
                De la visión fundadora <br/>
                <span className="italic text-[#767980] font-light">al siguiente capítulo.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex overflow-x-auto pb-12 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                
                {/* 2013 */}
                <div className="flex-none w-[85vw] sm:w-[350px] md:w-[450px] relative snap-start">
                  <div className="absolute top-2 left-0 w-full h-[1px] bg-[#767980]/20"></div>
                  <div className="absolute top-[3px] left-0 w-3 h-3 bg-[#CF6343] rounded-full ring-4 ring-[#F8F9FA] z-10"></div>
                  <div className="pt-12 pr-12">
                    <span className="text-5xl sm:text-6xl font-serif text-[#151617] mb-4 block">2013</span>
                    <h3 className="text-lg uppercase tracking-[0.2em] text-[#767980] font-bold mb-6">Fundación de Xenia</h3>
                    <p className="text-xl text-[#767980] font-light leading-relaxed">
                      Nace la empresa, sentando las bases para estructurar y profesionalizar la operación hotelera.
                    </p>
                  </div>
                </div>

                {/* Hoy */}
                <div className="flex-none w-[85vw] sm:w-[350px] md:w-[450px] relative snap-start">
                  <div className="absolute top-2 left-0 w-full h-[1px] bg-[#767980]/20"></div>
                  <div className="absolute top-[3px] left-0 w-3 h-3 bg-[#151617] rounded-full ring-4 ring-[#F8F9FA] z-10"></div>
                  <div className="pt-12 pr-12">
                    <span className="text-5xl sm:text-6xl font-serif text-[#151617] mb-4 block">Hoy</span>
                    <h3 className="text-lg uppercase tracking-[0.2em] text-[#CF6343] font-bold mb-6">Evolución a GEOH</h3>
                    <p className="text-xl text-[#767980] font-light leading-relaxed">
                      Consolidación de nuestra operadora hotelera.
                    </p>
                  </div>
                </div>

              </div>
            </FadeIn>
          </div>
        </section>
      </div>
      
    </section>
  );
};