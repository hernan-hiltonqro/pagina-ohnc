import { FadeIn } from './FadeIn';
import { OwnerCentricity } from './OwnerCentricity';

export const AboutSection = () => {
  return (
    <section id="nosotros" className="pt-32 bg-[#F2F2F2] flex flex-col">
      
      {/* 1. ¿Quiénes Somos? */}
      <div className="max-w-7xl mx-auto px-6 mb-20 w-full">
        <FadeIn className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-7">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#804E3B] block mb-6 font-bold">
              Quiénes somos
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-[3.5rem] font-serif text-[#2B2C30] leading-[1.1] tracking-tight mb-8">
              Somos una operadora hotelera.<br />Gestionamos hoteles en nombre de sus propietarios.
            </h2>
            <p className="text-xl text-[#804E3B] font-serif italic">
              Convertimos información en decisiones de negocio.
            </p>
          </div>
          <div className="lg:col-span-5 lg:pt-14 space-y-6">
            <p className="text-lg sm:text-xl text-[#5C5E66] font-light leading-relaxed">
              GEOH pone a disposición del propietario su experiencia, su equipo y sus sistemas con un objetivo: aumentar el retorno de la inversión.
            </p>
            <p className="text-lg sm:text-xl text-[#5C5E66] font-light leading-relaxed">
              Implementamos procesos y controles en cada área del hotel. La calidad del servicio se sostiene y el resultado se refleja en la utilidad de cada propiedad.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* 2. Owner Centricity (Diagrama) */}
      <div className="w-full">
        <OwnerCentricity />
      </div>

      {/* 3. Trayectoria */}
      <div className="w-full max-w-7xl mx-auto px-6">
        <section className="py-32 bg-[#F2F2F2] overflow-hidden border-t border-[#5C5E66]/20">
          <div className="max-w-7xl mx-auto">
            <FadeIn className="mb-20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[1px] bg-[#804E3B]"></div>
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#804E3B]">
                  Trayectoria
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-serif text-[#2B2C30] leading-[1.1] tracking-tight">
                De la operación de un grupo <br/>
                <span className="italic text-[#5C5E66] font-light">a una operadora independiente.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex overflow-x-auto pb-12 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                {/* 2013 */}
                <div className="flex-none w-[85vw] sm:w-[350px] md:w-[400px] relative snap-start">
                  <div className="absolute top-2 left-0 w-full h-[1px] bg-[#5C5E66]/30"></div>
                  <div className="absolute top-1 left-0 w-2.5 h-2.5 bg-[#804E3B] rounded-full ring-4 ring-[#F2F2F2] z-10"></div>
                  <div className="pt-10 pr-12">
                    <span className="text-4xl sm:text-5xl font-serif text-[#2B2C30] mb-2 block">2013</span>
                    <h3 className="text-[10px] uppercase tracking-[0.2em] text-[#5C5E66] font-bold mb-4">Fundación de Xenia</h3>
                    <p className="text-sm text-[#5C5E66] font-light leading-relaxed">
                      Inicio de operaciones. Se estructura y profesionaliza la gestión hotelera.
                    </p>
                  </div>
                </div>

                {/* Hoy */}
                <div className="flex-none w-[85vw] sm:w-[350px] md:w-[400px] relative snap-start">
                  <div className="absolute top-2 left-0 w-full h-[1px] bg-[#5C5E66]/30"></div>
                  <div className="absolute top-1 left-0 w-2.5 h-2.5 bg-[#2B2C30] rounded-full ring-4 ring-[#F2F2F2] z-10"></div>
                  <div className="pt-10 pr-12">
                    <span className="text-4xl sm:text-5xl font-serif text-[#2B2C30] mb-2 block">Hoy</span>
                    <h3 className="text-[10px] uppercase tracking-[0.2em] text-[#804E3B] font-bold mb-4">Evolución a GEOH</h3>
                    <p className="text-sm text-[#5C5E66] font-light leading-relaxed">
                      GEOH opera dos hoteles de cadena internacional y está abierta a nuevas propiedades.
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