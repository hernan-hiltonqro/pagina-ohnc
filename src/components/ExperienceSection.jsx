import { FadeIn } from './FadeIn';

export const ExperienceSection = () => {
  return (
    <section className="bg-[#14212a] text-white py-24 sm:py-32 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          <div className="lg:col-span-5">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c8a56d] block mb-4">Experiencia de operación</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight mt-6">
              Dos formatos.<br/><span className="italic text-zinc-400">Una visión de gestión.</span>
            </h2>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:border-l border-white/20">
            <div className="p-8 sm:px-12 sm:py-8 lg:py-4">
              <span className="text-[9px] tracking-[0.16em] uppercase text-[#c8a56d] block mb-4">Full Service</span>
              <strong className="block font-serif text-2xl mb-2">Hilton Querétaro</strong>
              <span className="text-[11px] text-zinc-400 font-light">Operación hotelera integral</span>
            </div>
            
            <div className="p-8 sm:px-12 sm:py-8 lg:py-4 sm:border-l border-white/20 border-t sm:border-t-0">
              <span className="text-[9px] tracking-[0.16em] uppercase text-[#c8a56d] block mb-4">Select Service</span>
              <strong className="block font-serif text-2xl mb-2">Hampton Juriquilla</strong>
              <span className="text-[11px] text-zinc-400 font-light">Operación enfocada en eficiencia</span>
            </div>
          </div>

        </FadeIn>
      </div>
    </section>
  );
};