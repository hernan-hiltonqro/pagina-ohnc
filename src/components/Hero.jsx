import { FadeIn } from './FadeIn';

export const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex flex-col items-center justify-center text-center px-6 py-12 overflow-hidden border-b border-zinc-800 bg-[#0b172a]">
      
      {/* --- FONDO CORREGIDO --- */}
      {/* Imagen arquitectónica clara, sin desenfoque, solo en escala de grises */}
      <img 
        src="https://www.hilton.com/im/en/QROJSHH/22860541/hilton-qro-106.jpg?impolicy=crop&cw=5000&ch=2799&gravity=NorthWest&xposition=0&yposition=7&rw=768&rh=430" 
        alt="Fondo Hotel" 
        className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale"
      />
      {/* Filtro oscuro simple (sin mix-blend) para que la imagen se vea pero el texto resalte */}
      <div className="absolute inset-0 bg-[#0b172a]/80"></div>
      {/* --- FIN DEL FONDO --- */}

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <FadeIn>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-[#a27642]"></div>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.4em] font-bold text-[#a27642]">
              GEOH
            </span>
            <div className="w-8 h-[1px] bg-[#a27642]"></div>
          </div>
          
          <h1 className="font-serif tracking-tight flex flex-col items-center">
            <span className="text-[4.5rem] sm:text-[7rem] md:text-[9rem] leading-[0.85] text-white block drop-shadow-xl">
              Hospitalidad
            </span>
            <span className="text-[4.5rem] sm:text-[7rem] md:text-[9rem] leading-[0.85] text-[#a27642] italic font-light block -mt-2 sm:-mt-6 drop-shadow-lg">
              Elevada.
            </span>
          </h1>

          <h2 className="mt-6 text-xl sm:text-2xl font-serif text-white tracking-wide">
            Gestión hotelera para propietarios
          </h2>
          
          <p className="mt-5 text-sm sm:text-base text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed">
            Protegemos e impulsamos el valor de su patrimonio mediante rigor comercial, solidez financiera y excelencia operativa, siempre con enfoque en utilidad.
          </p>

          <div className="mt-10 pt-6 border-t border-zinc-700/60 inline-flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-bold text-white">
            <span>01. Rentabilidad</span>
            <span className="text-[#a27642]">•</span>
            <span>02. Ejecución</span>
            <span className="text-[#a27642]">•</span>
            <span>03. Visibilidad</span>
          </div>
          
        </FadeIn>
      </div>
    </section>
  );
};