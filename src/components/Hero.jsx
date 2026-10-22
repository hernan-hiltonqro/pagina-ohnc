import { FadeIn } from './FadeIn';
import { siteData } from '../data/content';

export const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen w-full bg-white flex flex-col justify-center items-center px-6 pt-20 border-b border-zinc-200 overflow-hidden">
      
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        
        {/* Antetítulo conectado a Xenia Services */}
        <FadeIn delay={0.2}>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-zinc-400 mb-8 block font-medium">
            {siteData.global.brandName}
          </span>
        </FadeIn>
        
        {/* Título Gigante Monumental */}
        <FadeIn delay={0.4}>
          <h1 className="text-6xl sm:text-8xl lg:text-[11rem] font-serif text-zinc-900 leading-[0.85] tracking-tighter mb-8">
            Hospitalidad
            <br />
            <span className="italic text-zinc-300 pr-4">Elevada.</span>
          </h1>
        </FadeIn>

        {/* Descripción breve */}
        <FadeIn delay={0.6}>
          <p className="max-w-lg mx-auto text-sm sm:text-base text-zinc-500 font-light leading-relaxed mt-8">
            Transformamos activos hoteleros en experiencias memorables y negocios rentables a través de una operación impecable y estándares globales.
          </p>
        </FadeIn>

        {/* Indicador de Scroll Minimalista */}
        <FadeIn delay={0.8} className="mt-20">
          <a href="#nosotros" className="inline-flex flex-col items-center gap-6 text-zinc-400 hover:text-zinc-900 transition-colors group">
            <span className="text-[9px] uppercase tracking-[0.3em]">Descubrir</span>
            <div className="w-[1px] h-16 bg-zinc-200 group-hover:bg-zinc-900 transition-colors relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/3 bg-zinc-400 animate-bounce"></div>
            </div>
          </a>
        </FadeIn>

      </div>
    </section>
  );
};