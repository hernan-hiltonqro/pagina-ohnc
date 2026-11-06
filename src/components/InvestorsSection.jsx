import { FadeIn } from './FadeIn';
import { Link } from 'react-router-dom';

export const InvestorsSection = () => {
  const afiliacion = [
    {
      title: "Diagnóstico",
      desc: "Evaluación del inmueble, la operación, la marca, el mercado y los objetivos del propietario."
    },
    {
      title: "Propuesta",
      desc: "Modelo de gestión, propuesta económica y revisión legal."
    },
    {
      title: "Contrato",
      desc: "Firma del contrato de administración y operación hotelera."
    },
    {
      title: "Arranque",
      desc: "Instalación de sistemas e inicio formal de la gestión."
    }
  ];

  return (
    <div className="bg-[#F2F2F2]">
      
      {/* 1. Cabecera Oscura de Expansión */}
      <section className="relative pt-40 pb-24 bg-[#0A0A0A] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
          alt="Expansión Corporativa"
          className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="text-5xl sm:text-7xl font-serif text-[#F2F2F2] tracking-tight mt-6 drop-shadow-md">
              Expansión
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* 2. Contenido Editorial Asimétrico */}
      <section className="py-32 border-b border-[#5C5E66]/20 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Columna Izquierda: Introducción (Sticky) */}
            <FadeIn className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[1px] bg-[#804E3B]"></div>
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#804E3B]">
                  Incorporación de hoteles
                </span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#2B2C30] leading-[1.05] tracking-tight mb-6">
                Proceso de <br/>
                <span className="italic text-[#5C5E66] font-light">Afiliación.</span>
              </h2>
              
              <p className="text-base sm:text-lg text-[#5C5E66] font-light leading-relaxed mb-10 max-w-sm">
                Cuatro etapas para incorporar su hotel a la gestión de GEOH, con condiciones técnicas y legales claras desde el inicio.
              </p>

              <Link to="/contacto" className="inline-block bg-[#804E3B] px-10 py-5 text-xs uppercase tracking-[0.2em] font-medium text-white hover:bg-[#552828] transition-all duration-300 shadow-lg">
                Solicitar diagnóstico
              </Link>
            </FadeIn>

            {/* Columna Derecha: Información Detallada (Solo los 4 Pasos) */}
            <div className="lg:col-span-7">
              <FadeIn>
                <div className="border-t border-[#5C5E66]/20">
                  {afiliacion.map((paso, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row gap-6 sm:gap-8 py-8 border-b border-[#5C5E66]/20 group hover:bg-white transition-colors px-4 -mx-4 rounded-lg">
                      <span className="text-xl sm:text-2xl font-serif italic text-[#804E3B] shrink-0 mt-0.5">
                        0{idx + 1}.
                      </span>
                      <div>
                        <h4 className="text-lg font-serif text-[#2B2C30] mb-2">{paso.title}</h4>
                        <p className="text-sm sm:text-base text-[#5C5E66] font-light leading-relaxed">
                          {paso.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};