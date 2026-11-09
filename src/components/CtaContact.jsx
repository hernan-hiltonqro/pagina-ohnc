import { FadeIn } from './FadeIn';
import { Link } from 'react-router-dom';

export const CtaContact = () => {
  return (
    <section className="py-32 bg-[#2E2F32] mt-auto border-t border-[#767980]/20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <span className="text-lg uppercase tracking-[0.2em] text-[#CF6343] font-bold block mb-6">
            El equipo correcto
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-serif leading-tight text-[#F8F9FA] mb-10 tracking-tight">
            Conozca a las personas que <br className="hidden sm:block" />
            <span className="italic text-[#F8F9FA]/60 font-light">operan el resultado.</span>
          </h2>
          <p className="text-xl sm:text-2xl text-[#F8F9FA]/70 font-light mb-14 max-w-2xl mx-auto leading-relaxed">
            Si es propietario o responsable de un activo hotelero, conversemos sobre cómo podemos maximizar su rentabilidad.
          </p>
          <Link 
            to="/contacto" 
            className="inline-block bg-[#CF6343] hover:bg-[#963E27] px-14 py-7 text-lg uppercase tracking-[0.2em] font-medium text-white transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Contactar al equipo
          </Link>
        </FadeIn>
      </div>
    </section>
  );
};