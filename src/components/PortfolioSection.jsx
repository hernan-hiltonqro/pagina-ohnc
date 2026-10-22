import { FadeIn } from './FadeIn';
import { siteData } from '../data/content';

export const PortfolioSection = () => {
  return (
    <section id="portafolio" className="py-32 bg-white text-zinc-900 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        
        <FadeIn className="mb-24 text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 block mb-4">Propiedades</span>
          <h2 className="text-4xl sm:text-5xl font-serif tracking-tight mb-6">Nuestro Portafolio</h2>
          <div className="w-12 h-[1px] bg-zinc-900 mx-auto"></div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {siteData.portfolio.map((item, index) => (
            <FadeIn key={index} delay={index * 0.15}>
              <article className="group cursor-pointer">
                
                <div className="relative aspect-[4/3] w-full bg-white mb-8 border border-zinc-200 p-3 sm:p-5 transition-colors duration-700 group-hover:border-zinc-400 shadow-sm">
                  <div className="w-full h-full overflow-hidden relative bg-zinc-100">
                    {/* Capa zinc translúcida para apagar colores chillones */}
                    <div className="absolute inset-0 bg-zinc-900/20 group-hover:bg-transparent transition-colors duration-1000 z-10 pointer-events-none"></div>
                    
                    <img 
                      src={item.img} 
                      alt={item.name}
                      
                      className="w-full h-full object-cover saturate-50 brightness-90 transition-all duration-[1500ms] ease-out group-hover:scale-105 group-hover:saturate-100 group-hover:brightness-100"
                      loading="lazy"
                    />
                  </div>
                </div>
                
                <div className="text-center sm:text-left flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6 px-2">
                  <div className="flex-1">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">{item.type}</span>
                    <h3 className="text-2xl font-serif mt-2 text-zinc-900 group-hover:text-zinc-600 transition-colors duration-500">{item.name}</h3>
                    <p className="text-sm text-zinc-600 font-light mt-4 max-w-sm mx-auto sm:mx-0">
                      {item.desc}
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-2 pt-1 border-t sm:border-t-0 sm:border-l border-zinc-200 sm:pl-6">
                    {item.features.map((feature, i) => (
                      <span key={i} className="text-[9px] uppercase tracking-widest text-zinc-400 font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};