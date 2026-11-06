import { FadeIn } from './FadeIn';
import { Link } from 'react-router-dom';

export const CtaContact = () => {
  return (
    <section className="bg-[#0A0A0A] text-[#F2F2F2] py-32 relative overflow-hidden w-full">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#552828] opacity-20 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#552828] opacity-20 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <FadeIn>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#804E3B] font-bold block mb-4">
            Siguiente paso
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight mb-8">
            Conozca el verdadero potencial <br className="hidden sm:block" />
            <span className="italic text-[#804E3B] font-light">de su activo hotelero.</span>
          </h2>
          <p className="text-[#F2F2F2]/70 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Agende una evaluación confidencial con nuestro equipo directivo para descubrir cómo el modelo de gestión GEOH puede proteger su patrimonio y maximizar su utilidad.
          </p>
          <Link 
            to="/contacto" 
            className="inline-block bg-[#804E3B] px-10 py-5 text-xs uppercase tracking-[0.2em] font-medium text-white hover:bg-[#552828] transition-all duration-300 shadow-lg"
          >
            Solicitar diagnóstico
          </Link>
        </FadeIn>
      </div>
    </section>
  );
};