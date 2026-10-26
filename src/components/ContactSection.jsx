import { FadeIn } from './FadeIn';

export const ContactSection = () => {
  return (
    <section className="bg-white py-24 sm:py-32 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cabecera Introductoria */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#a27642] block mb-4 font-bold">
            Contacto Corporativo
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#0b172a] leading-[1.1] mb-6">
            El siguiente capítulo empieza <br />
            <span className="italic text-[#5c6b7f] font-light">con una conversación.</span>
          </h1>
          <p className="text-base text-[#5c6b7f] font-light leading-relaxed">
            Si es propietario, parte de la familia que dirige el activo o responsable de su operación, conversemos sobre el momento del hotel y el valor que desea proteger.
          </p>
        </FadeIn>

        {/* Contenedor Principal (Dimensiones exactas del archivo base) */}
        <FadeIn className="grid grid-cols-1 lg:grid-cols-12 shadow-2xl overflow-hidden border border-zinc-100">
          
          {/* Columna Izquierda: Información de Contacto (Fondo Oscuro) */}
          <div className="lg:col-span-5 bg-[#0b172a] text-white p-12 sm:p-16 relative overflow-hidden flex flex-col justify-between">
            {/* Acento decorativo sutil */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#a27642] opacity-10 blur-[50px] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-serif mb-6 text-white leading-tight">Hablemos de su activo</h3>
              <p className="text-sm text-zinc-300 font-light leading-relaxed mb-12">
                Nuestro equipo directivo revisa personalmente cada solicitud para garantizar absoluta confidencialidad en el análisis de su propiedad.
              </p>
            </div>

            <div className="space-y-10 text-sm font-light text-zinc-300 relative z-10 border-t border-zinc-700/50 pt-10">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#5c6b7f] mb-2 font-bold">Dirección / Sede</p>
                <p>Blvd. Bernardo Quintana, C.P. 76000</p>
                <p>Santiago de Querétaro, Qro.</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#5c6b7f] mb-2 font-bold">Contacto Directo</p>
                <p className="hover:text-[#a27642] transition-colors cursor-pointer">expansion@geoh.com</p>
                <p className="hover:text-[#a27642] transition-colors cursor-pointer">+52 (442) 000 0000</p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario Minimalista (Fondo Blanco) */}
          <div className="lg:col-span-7 bg-white p-12 sm:p-16 lg:p-20">
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="nombre" className="text-[9px] uppercase tracking-widest text-zinc-400 mb-2 font-bold">Nombre Completo</label>
                  <input type="text" id="nombre" className="border-b border-zinc-200 py-2 focus:outline-none focus:border-[#0b172a] bg-transparent text-sm text-[#0b172a] transition-colors placeholder:text-zinc-300" placeholder="Ej. Carlos Mendoza" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="empresa" className="text-[9px] uppercase tracking-widest text-zinc-400 mb-2 font-bold">Empresa / Hotel</label>
                  <input type="text" id="empresa" className="border-b border-zinc-200 py-2 focus:outline-none focus:border-[#0b172a] bg-transparent text-sm text-[#0b172a] transition-colors placeholder:text-zinc-300" placeholder="Nombre de la propiedad" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="correo" className="text-[9px] uppercase tracking-widest text-zinc-400 mb-2 font-bold">Correo Electrónico</label>
                  <input type="email" id="correo" className="border-b border-zinc-200 py-2 focus:outline-none focus:border-[#0b172a] bg-transparent text-sm text-[#0b172a] transition-colors placeholder:text-zinc-300" placeholder="correo@empresa.com" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="telefono" className="text-[9px] uppercase tracking-widest text-zinc-400 mb-2 font-bold">Teléfono</label>
                  <input type="tel" id="telefono" className="border-b border-zinc-200 py-2 focus:outline-none focus:border-[#0b172a] bg-transparent text-sm text-[#0b172a] transition-colors placeholder:text-zinc-300" placeholder="+52 123 456 7890" />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="mensaje" className="text-[9px] uppercase tracking-widest text-zinc-400 mb-2 font-bold">Situación actual del activo</label>
                <textarea id="mensaje" rows="4" className="border-b border-zinc-200 py-2 focus:outline-none focus:border-[#0b172a] bg-transparent text-sm text-[#0b172a] transition-colors resize-none placeholder:text-zinc-300" placeholder="Especifique si requiere optimización de un hotel en marcha o estructuración para un nuevo proyecto..."></textarea>
              </div>

              <button type="submit" className="mt-4 bg-[#0b172a] px-10 py-5 text-xs uppercase tracking-[0.2em] font-medium text-white hover:bg-[#a27642] transition-all duration-300 w-full sm:w-auto shadow-lg">
                Solicitar Evaluación de Viabilidad
              </button>
            </form>
          </div>

        </FadeIn>
      </div>
    </section>
  );
};