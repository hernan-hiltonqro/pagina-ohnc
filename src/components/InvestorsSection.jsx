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

  const honorarios = [
    { label: "Honorario base", value: "5% sobre ingresos de habitaciones", isMain: true },
    { label: "Honorario por resultado", value: "5% sobre la utilidad bruta de operación (GOP)", isMain: true },
    { label: "Incentivo", value: "10% sobre el GOP que exceda el presupuesto", isMain: true },
    { label: "Regalías, mercadotecnia y comisiones de la franquicia", value: "A cargo del propietario", isMain: false },
    { label: "Sistemas administrativo, de punto de venta y de nómina", value: "Contratación vía TCA a cargo del propietario; operación a cargo de GEOH", isMain: false }
  ];

  return (
    <div className="bg-white">
      
      {/* 1. Cabecera Oscura de Expansión */}
      <section className="relative pt-40 pb-24 bg-[#0b172a] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
          alt="Expansión Corporativa"
          className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale mix-blend-overlay"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="text-5xl sm:text-7xl font-serif text-white tracking-tight mt-6">
              Expansión
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* 2. Contenido Editorial Asimétrico */}
      <section className="py-32 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Columna Izquierda: Introducción (Sticky) */}
            <FadeIn className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[1px] bg-[#a27642]"></div>
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#a27642]">
                  Incorporación de hoteles
                </span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#0b172a] leading-[1.05] tracking-tight mb-6">
                Proceso de <br/>
                <span className="italic text-[#5c6b7f] font-light">Afiliación.</span>
              </h2>
              
              <p className="text-base sm:text-lg text-[#334155] font-light leading-relaxed mb-10 max-w-sm">
                Cuatro etapas para incorporar su hotel a la gestión de GEOH, con condiciones técnicas y legales claras desde el inicio.
              </p>

              <Link to="/contacto" className="inline-block bg-[#0b172a] px-10 py-5 text-xs uppercase tracking-[0.2em] font-medium text-white hover:bg-[#a27642] transition-all duration-300 shadow-lg">
                Solicitar diagnóstico
              </Link>
            </FadeIn>

            {/* Columna Derecha: Información Detallada */}
            <div className="lg:col-span-7 space-y-20">
              
              {/* Bloque: Los 4 Pasos */}
              <FadeIn>
                <div className="border-t border-zinc-200">
                  {afiliacion.map((paso, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row gap-6 sm:gap-8 py-8 border-b border-zinc-200 group hover:bg-zinc-50/50 transition-colors px-4 -mx-4 rounded-lg">
                      <span className="text-xl sm:text-2xl font-serif italic text-[#a27642] shrink-0 mt-0.5">
                        0{idx + 1}.
                      </span>
                      <div>
                        <h4 className="text-lg font-serif text-[#0b172a] mb-2">{paso.title}</h4>
                        <p className="text-sm sm:text-base text-[#5c6b7f] font-light leading-relaxed">
                          {paso.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>

              {/* Bloque: Estructura Económica y Condiciones */}
              <FadeIn delay={0.2} className="bg-[#0b172a] p-10 sm:p-14 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#a27642] opacity-5 blur-3xl rounded-full pointer-events-none"></div>

                <h3 className="text-2xl sm:text-3xl font-serif mb-10 text-white relative z-10">
                  Condiciones y honorarios
                </h3>
                
                {/* Condición General */}
                <div className="relative z-10 border-l-2 border-[#a27642] pl-6 mb-8 pb-8 border-b border-zinc-800">
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-[#a27642] font-bold mb-2">
                    Vigencia del contrato
                  </span>
                  <p className="text-lg font-serif text-white">
                    <span className="text-[#e8d5a5] italic">5 años</span>.
                  </p>
                </div>

                {/* Frase sugerida antes de los porcentajes */}
                <p className="text-base text-[#e8d5a5] font-serif italic mb-6 relative z-10">
                  Dos de cada tres conceptos de honorarios dependen del resultado del hotel.
                </p>

                {/* Lista de Honorarios */}
                <div className="space-y-6 text-sm font-light relative z-10">
                  {honorarios.map((item, idx) => (
                    <div 
                      key={idx} 
                      className={`flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2 border-b border-zinc-700/50 pb-3 ${idx === 3 ? 'pt-6' : ''}`}
                    >
                      <span className={`pr-4 ${item.isMain ? 'text-zinc-300' : 'text-zinc-500'}`}>
                        {item.label}
                      </span>
                      <span className={`sm:text-right font-medium ${item.isMain ? 'text-white' : 'text-zinc-400'}`}>
                        {item.value}
                      </span>
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