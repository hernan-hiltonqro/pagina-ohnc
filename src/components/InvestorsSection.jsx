import { FadeIn } from './FadeIn';
import { Link } from 'react-router-dom';

export const InvestorsSection = () => {
  const afiliacion = [
    {
      title: "Diagnóstico",
      desc: "Análisis del activo, operación, marca, mercado, situación y objetivos del propietario."
    },
    {
      title: "Propuesta",
      desc: "Definición del modelo, propuesta económica y evaluación legal."
    },
    {
      title: "Acuerdo",
      desc: "Presentación y firma del Contrato de Administración de Operación Hotelera."
    },
    {
      title: "Arranque",
      desc: "Implementación de recursos tecnológicos (Intranet, encuestas) e inicio formal de la gestión."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FA]">
      
      {/* 1. Cabecera Editorial (Split Layout para máxima legibilidad) */}
      <section className="relative pt-24 lg:pt-0 bg-[#151617] flex flex-col lg:flex-row items-stretch min-h-[80vh]">
        
        {/* Mitad Izquierda: Texto sobre fondo sólido */}
        <div className="w-full lg:w-1/2 px-6 lg:pl-12 xl:pl-32 py-24 lg:py-40 relative z-10 flex flex-col justify-center">
          <FadeIn>
            <div className="flex items-center gap-6 mb-8">
              <div className="w-12 h-[2px] bg-[#CF6343]"></div>
              <span className="text-sm sm:text-base uppercase tracking-[0.2em] font-bold text-[#CF6343]">
                Modelo de Gestión
              </span>
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-[6.5rem] font-serif text-[#F8F9FA] tracking-tight leading-[1.05] mb-8">
              Expansión.
            </h1>
            <p className="text-xl sm:text-2xl text-[#F8F9FA]/70 font-light max-w-lg leading-relaxed">
              El camino estructurado para integrar su propiedad a nuestro ecosistema de gestión corporativa.
            </p>
          </FadeIn>
        </div>

        {/* Mitad Derecha: Imagen Fotográfica */}
        <div className="w-full lg:w-1/2 h-[40vh] sm:h-[50vh] lg:h-auto lg:absolute lg:top-0 lg:right-0 lg:bottom-0">
          <img
            src="https://hampton-by-hilton-juriquilla.mejor-hoteles-elbajio.com/data/Images/1920x1080w/16371/1637192/1637192109/image-juriquilla-hampton-by-hilton-queretaro-juriquilla-7.JPEG"
            alt="Expansión Corporativa"
            className="w-full h-full object-cover grayscale opacity-60"
          />
          {/* Degradado para fusionar la imagen con el fondo oscuro */}
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#151617] via-transparent to-transparent"></div>
        </div>
      </section>

      {/* 2. Contenido Editorial Asimétrico */}
      <section className="py-32 sm:py-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-24 items-start">
            
            {/* Columna Izquierda: Introducción (Sticky) */}
            <FadeIn className="lg:col-span-5 lg:sticky lg:top-40">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-12 h-[2px] bg-[#CF6343]"></div>
                <span className="text-lg uppercase tracking-[0.2em] font-bold text-[#CF6343]">
                  Crecimiento Conjunto
                </span>
              </div>
              
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif text-[#151617] leading-[1.05] tracking-tight mb-8">
                Proceso de <br/>
                <span className="italic text-[#767980] font-light">Afiliación.</span>
              </h2>
              
              <p className="text-xl sm:text-2xl text-[#767980] font-light leading-relaxed mb-12 max-w-md">
                Garantizamos total transparencia técnica, financiera y jurídica en cada etapa de la integración.
              </p>

              {/* Botón secundario opcional debajo del texto */}
              <Link 
                to="/contacto" 
                className="inline-block bg-[#151617] hover:bg-[#2E2F32] px-10 py-5 text-base uppercase tracking-[0.2em] font-medium text-white transition-all duration-300 shadow-md"
              >
                Agendar reunión
              </Link>
            </FadeIn>

            {/* Columna Derecha: Los 4 Pasos (Sin Honorarios) */}
            <div className="lg:col-span-7">
              <FadeIn>
                <div className="border-t border-[#767980]/20">
                  {afiliacion.map((paso, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row gap-8 sm:gap-10 py-12 border-b border-[#767980]/20 group hover:bg-white transition-colors duration-500 px-6 -mx-6 rounded-sm">
                      <span className="text-3xl sm:text-4xl font-serif italic text-[#CF6343] shrink-0 mt-1">
                        0{idx + 1}.
                      </span>
                      <div>
                        <h4 className="text-2xl sm:text-3xl font-serif text-[#151617] mb-4">{paso.title}</h4>
                        <p className="text-lg sm:text-xl text-[#767980] font-light leading-relaxed">
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

      {/* 3. CTA Expansión (Formato Banner Panorámico y Compacto) */}
      <section className="py-16 sm:py-20 bg-[#2E2F32] mt-auto border-t border-[#767980]/20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            
            <div className="max-w-3xl">
              <h2 className="text-4xl sm:text-5xl font-serif leading-tight text-[#F8F9FA] mb-4">
                El momento de <span className="italic text-[#F8F9FA]/60 font-light">dar el siguiente paso.</span>
              </h2>
              <p className="text-lg sm:text-xl text-[#F8F9FA]/70 font-light leading-relaxed">
                Inicie el proceso de afiliación y descubra cómo nuestra gestión operativa puede maximizar el valor de su activo.
              </p>
            </div>
            
            <div className="flex-shrink-0 w-full lg:w-auto">
              <Link 
                to="/contacto" 
                className="block text-center lg:inline-block bg-[#CF6343] hover:bg-[#963E27] px-10 py-5 sm:py-6 text-base uppercase tracking-[0.2em] font-medium text-white transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Solicitar diagnóstico
              </Link>
            </div>

          </FadeIn>
        </div>
      </section>

    </div>
  );
};