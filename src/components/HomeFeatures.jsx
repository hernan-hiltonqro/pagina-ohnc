import { FadeIn } from './FadeIn';
import { siteData } from '../data/content';
import { Link } from 'react-router-dom';

export const HomeFeatures = () => {
  const { intro, snapshot, model } = siteData.homeFeatures;

  return (
    <div className="bg-white">
      
      {/* 1. Introducción y Enfoque con Imagen Vertical */}
      <section className="py-32 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            <div className="lg:col-span-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 block mb-6">Gestión Hotelera para Propietarios</span>
              <h2 className="text-4xl sm:text-6xl lg:text-[4rem] font-serif text-zinc-900 leading-[1.1] mb-8">
                {intro.tagline.split('.')[0]}.<br/>
                <span className="italic text-zinc-400">{intro.tagline.split('.')[1]}.</span>
              </h2>
              <p className="text-zinc-600 font-light leading-relaxed max-w-lg mb-8">
                {intro.description}
              </p>
              <div className="flex gap-4 items-center text-[10px] uppercase tracking-widest text-zinc-900 font-medium">
                {intro.proposal.map((prop, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span>{prop}</span>
                    {i < 2 && <span className="w-1 h-1 bg-zinc-300 rounded-full"></span>}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-8 lg:border-l border-zinc-200 lg:pl-8">
              {intro.stats.map((stat, idx) => (
                <div key={idx} className="border-t border-zinc-100 pt-6">
                  <span className="block text-3xl lg:text-4xl font-serif text-zinc-900 mb-2">{stat.number}</span>
                  <span className="block text-[9px] uppercase tracking-wider text-zinc-500">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="lg:col-span-4 hidden lg:block">
              <div className="aspect-[3/4] w-full overflow-hidden bg-zinc-100 border border-zinc-200">
                <img 
                  src="https://images.trvl-media.com/lodging/4000000/3600000/3599000/3598923/2ac10c26.jpg?impolicy=resizecrop&rw=1200&ra=fit" 
                  alt="Arquitectura Hotelera" 
                 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

          </FadeIn>
        </div>
      </section>

      {/* 2. Portafolio Actual */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 block mb-4">Portafolio Actual</span>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-200 border border-zinc-200">
            {snapshot.map((hotel, i) => (
              <FadeIn key={i} delay={i * 0.1} className="bg-white p-12">
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 block mb-2">{hotel.type}</span>
                <h3 className="text-2xl font-serif text-zinc-900 mb-4">{hotel.name}</h3>
                <p className="text-sm text-zinc-500 font-light">{hotel.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Modelo Operativo: Ciclo */}
      <section className="py-32 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-24">
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 block mb-4">Modelo Operativo</span>
            <h3 className="text-3xl sm:text-5xl font-serif text-zinc-900 mb-6">{model.title}</h3>
            <p className="text-zinc-600 font-light max-w-2xl mx-auto">{model.description}</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-200 border border-zinc-200">
            {model.cycle.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="bg-zinc-50 p-10 hover:bg-white transition-colors">
                <span className="text-2xl font-serif text-zinc-300 block mb-4">{item.step}</span>
                <h4 className="text-lg font-serif text-zinc-900 mb-3">{item.title}</h4>
                <p className="text-xs text-zinc-500 uppercase tracking-wider leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-32">
            <div className="lg:col-span-5 hidden lg:block">
              <div className="aspect-[4/5] w-full overflow-hidden bg-zinc-100 border border-zinc-200">
                <img 
                  src="https://images.trvl-media.com/lodging/4000000/3600000/3599000/3598923/daee694c.jpg?impolicy=resizecrop&rw=1200&ra=fit" 
                  alt="Corporativo" 
            
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <FadeIn className="mb-12">
                <h3 className="text-3xl font-serif text-zinc-900">Capacidades que protegen el resultado</h3>
              </FadeIn>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-8">
                {model.capabilities.map((cap, i) => (
                  <FadeIn key={i} delay={i * 0.1} className="border-t border-zinc-200 pt-6">
                    <h4 className="text-sm uppercase tracking-widest text-zinc-900 mb-3 font-medium">{cap.title}</h4>
                    <p className="text-xs text-zinc-500 font-light leading-relaxed">{cap.items}</p>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Visibilidad e Inicio con Imagen Panorámica */}
      <section className="bg-zinc-900 text-white relative">
        <div className="w-full h-[40vh] sm:h-[50vh] overflow-hidden">
          <img 
            src="https://scontent-qro1-1.xx.fbcdn.net/v/t39.30808-6/544910070_1212031107610910_8652993441363456773_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mn8WAs37fTUQ7kNvwEPoQlz&_nc_oc=AdoBJiaDYCSrA6-SrsEqbHw_FP2HjjA5B6Sn9ULDQ5nZQo4vCAPfKvASp62CKCs2US8&_nc_zt=23&_nc_ht=scontent-qro1-1.xx&_nc_gid=4sP9M4RWr2Vn5S4VSu1t5A&_nc_ss=7b289&oh=00_AQOXL7J7asrl1URmnYbW1tIyDkZTgmCozicbhYUQ0_H71w&oe=6AE00937" 
            alt="Lobby Hotel" 
            className="w-full h-full object-cover opacity-40 grayscale mix-blend-overlay hover:scale-105 transition-transform duration-1000"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <FadeIn>
              <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-10">Visibilidad para el propietario</h3>
              <div className="flex flex-wrap gap-4 mb-8">
                {model.visibility.steps.map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="text-xl font-serif text-white">{step}</span>
                    {i < 3 && <span className="text-zinc-600">→</span>}
                  </div>
                ))}
              </div>
              <p className="text-sm text-zinc-400 font-light max-w-sm">{model.visibility.note}</p>
            </FadeIn>

            <FadeIn delay={0.2} className="lg:border-l border-zinc-800 lg:pl-20">
              <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-10">Inicio de la relación</h3>
              <div className="grid grid-cols-2 gap-8">
                {model.onboarding.map((step, i) => (
                  <div key={i}>
                    <span className="block text-zinc-500 font-serif text-lg mb-1">{step.split(' ')[0]}</span>
                    <span className="block text-sm uppercase tracking-widest text-white">{step.split(' ')[1]}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. Call To Action */}
      <section className="relative py-40 bg-zinc-50 border-b border-zinc-200 overflow-hidden">
        <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full opacity-20 lg:opacity-70">
          <img 
            src="https://www.hilton.com/im/en/QROJSHH/22860562/hilton-qro-109.jpg?impolicy=crop&cw=5000&ch=2799&gravity=NorthWest&xposition=0&yposition=6&rw=768&rh=430" 
            alt="Hotel Resort" 
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-50 via-zinc-50/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeIn className="max-w-2xl">
            <h2 className="text-4xl sm:text-6xl font-serif text-zinc-900 mb-6">{siteData.homeFeatures.cta.title}</h2>
            <p className="text-lg text-zinc-600 font-light mb-4">{siteData.homeFeatures.cta.subtitle}</p>
            <p className="text-sm text-zinc-500 font-light mb-12">{siteData.homeFeatures.cta.action}</p>
            <Link to="/inversionistas" className="inline-block bg-zinc-900 px-10 py-5 text-xs uppercase tracking-[0.2em] font-medium text-white hover:bg-zinc-800 transition-all duration-300">
              Solicitar Diagnóstico
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  );
};