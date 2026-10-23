import { FadeIn } from './FadeIn';

export const Hero = () => {
  return (
    <section className="relative pt-48 pb-40 bg-[#f2f5f8] flex flex-col items-center justify-center text-center px-6 overflow-hidden border-b border-zinc-300">
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <FadeIn>
          
          {/* Etiqueta Superior (GEOH en Dorado) */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="w-8 h-[1px] bg-[#a27642]"></div>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.4em] font-bold text-[#a27642]">
              GEOH
            </span>
            <div className="w-8 h-[1px] bg-[#a27642]"></div>
          </div>
          
          {/* Título Principal de Alto Contraste (Azul-Negro y Gris) */}
          <h1 className="font-serif tracking-tight flex flex-col items-center">
            <span className="text-[5rem] sm:text-[8rem] md:text-[10rem] leading-[0.85] text-[#0b172a] block drop-shadow-sm">
              Hospitalidad
            </span>
            <span className="text-[5rem] sm:text-[8rem] md:text-[10rem] leading-[0.85] text-[#5c6b7f] italic font-light block -mt-2 sm:-mt-6">
              Elevada.
            </span>
          </h1>
          
          {/* Párrafo Descriptivo */}
          <p className="mt-14 text-base sm:text-lg text-[#334155] font-light max-w-2xl mx-auto leading-relaxed">
            Transformamos activos hoteleros en experiencias memorables y negocios rentables a través de una operación impecable y estándares globales.
          </p>
          
        </FadeIn>
      </div>
      
    </section>
  );
};