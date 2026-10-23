import { FadeIn } from './FadeIn';
import { Link } from 'react-router-dom';

export const InvestorsSection = () => {
  const afiliacion = [
    "Definición del modelo (propuesta económica y evaluación legal).",
    "Presentación del Contrato de Administración de Operación Hotelera.",
    "Firma de contratos.",
    "Implementación de recursos tecnológicos (Intranet, encuestas).",
    "Inicio formal del proceso de operadora."
  ];

  const honorarios = [
    { label: "Contrato de Operación", value: "5 años", isMain: true },
    { label: "Regalías operadora s/ Ingresos Habitaciones", value: "5%", isMain: true },
    { label: "Regalías operadora s/ GOP obtenido", value: "5%", isMain: true },
    { label: "Excedente de GOP vs Presupuesto", value: "10% adicional", isMain: true },
    { label: "Regalía de marca, MKT y Comisiones", value: "Cuenta del propietario", isMain: false },
    { label: "Sistemas Back, POS y Nómina", value: "Contratación vía TCA", isMain: false }
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
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 block mb-4">
              Crecimiento y Rentabilidad
            </span>
            <h1 className="text-5xl sm:text-7xl font-serif text-white tracking-tight">
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
                  Crecimiento Conjunto
                </span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#0b172a] leading-[1.05] tracking-tight mb-6">
                ¿Cómo ser parte <br/>
                <span className="italic text-[#5c6b7f] font-light">de GEOH?</span>
              </h2>
              
              <p className="text-base sm:text-lg text-[#334155] font-light leading-relaxed mb-10">
                Protegemos su patrimonio con disciplina operativa y transparencia total. Nuestro modelo de gestión está diseñado para maximizar la rentabilidad de su activo hotelero, respaldado por un ecosistema digital avanzado y un equipo de expertos comprometidos con el resultado.
              </p>

              <Link to="/contacto" className="inline-block bg-[#0b172a] px-10 py-5 text-xs uppercase tracking-[0.2em] font-medium text-white hover:bg-[#5c6b7f] transition-all duration-300 shadow-lg">
                Contactar a Expansión
              </Link>
            </FadeIn>

            {/* Columna Derecha: Información Detallada */}
            <div className="lg:col-span-7 space-y-24">
              
              {/* Bloque: Proceso de Afiliación */}
              <FadeIn>
                <h3 className="text-3xl font-serif text-[#0b172a] mb-10">
                  Proceso de Afiliación
                </h3>
                <div className="border-t border-zinc-200">
                  {afiliacion.map((paso, idx) => (
                    <div key={idx} className="flex items-start gap-6 sm:gap-8 py-8 border-b border-zinc-200 group">
                      <span className="text-xl sm:text-2xl font-serif italic text-[#a27642] shrink-0 mt-0.5">
                        0{idx + 1}.
                      </span>
                      <p className="text-sm sm:text-base text-[#5c6b7f] font-light leading-relaxed">
                        {paso}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>

              {/* Bloque: Estructura de Honorarios (Fondo corporativo oscuro) */}
              <FadeIn delay={0.2} className="bg-[#0b172a] p-10 sm:p-14 text-white shadow-xl relative overflow-hidden">
                {/* Acento decorativo sutil */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#a27642] opacity-5 blur-3xl rounded-full pointer-events-none"></div>

                <h3 className="text-3xl font-serif mb-10 text-white relative z-10">
                  Estructura de Honorarios
                </h3>
                <div className="space-y-6 text-sm font-light relative z-10">
                  {honorarios.map((item, idx) => (
                    <div 
                      key={idx} 
                      className={`flex justify-between items-end border-b border-zinc-700/50 pb-3 ${idx === 4 ? 'pt-6' : ''}`}
                    >
                      <span className={item.isMain ? 'text-zinc-300' : 'text-zinc-500'}>
                        {item.label}
                      </span>
                      <span className={`text-right font-medium ${item.isMain ? 'text-white' : 'text-zinc-400'}`}>
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