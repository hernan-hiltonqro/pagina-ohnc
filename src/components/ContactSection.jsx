import { FadeIn } from './FadeIn';

export const ContactSection = () => {
  return (
    <section className="bg-[#f2f5f8] py-24 sm:py-32 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="grid grid-cols-1 lg:grid-cols-12 shadow-2xl overflow-hidden">
          
          {/* Columna Izquierda: Información de Contacto (Fondo Oscuro) */}
          <div className="lg:col-span-5 bg-[#0b172a] text-white p-12 sm:p-16 relative overflow-hidden flex flex-col justify-between">
            {/* Acento decorativo sutil */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#a27642] opacity-10 blur-[50px] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[1px] bg-[#a27642]"></div>
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#a27642]">
                  GEOH
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-serif text-white mb-12 leading-[1.1]">
                Sede Comercial <br/> <span className="italic text-[#5c6b7f]">y Operativa.</span>
              </h2>
            </div>

            <div className="space-y-10 text-sm font-light text-zinc-300 relative z-10">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#5c6b7f] mb-2 font-medium">Dirección</p>
                <p>Blvd. Bernardo Quintana, C.P. 76000</p>
                <p>Santiago de Querétaro, Qro.</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#5c6b7f] mb-2 font-medium">Contacto Directo</p>
                <p className="hover:text-[#a27642] transition-colors cursor-pointer">expansion@geoh.com</p>
                <p className="hover:text-[#a27642] transition-colors cursor-pointer">+52 (442) 000 0000</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#5c6b7f] mb-2 font-medium">Horario de Atención</p>
                <p>Lunes a Viernes: 9:00 hrs - 18:00 hrs</p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario Minimalista (Fondo Blanco) */}
          <div className="lg:col-span-7 bg-white p-12 sm:p-16 lg:p-20">
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="nombre" className="text-[9px] uppercase tracking-widest text-zinc-400 mb-2">Nombre Completo</label>
                  <input type="text" id="nombre" className="border-b border-zinc-200 py-2 focus:outline-none focus:border-[#0b172a] bg-transparent text-sm text-[#0b172a] transition-colors placeholder:text-zinc-300" placeholder="Su nombre" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="empresa" className="text-[9px] uppercase tracking-widest text-zinc-400 mb-2">Empresa / Hotel</label>
                  <input type="text" id="empresa" className="border-b border-zinc-200 py-2 focus:outline-none focus:border-[#0b172a] bg-transparent text-sm text-[#0b172a] transition-colors placeholder:text-zinc-300" placeholder="Nombre de la propiedad" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="correo" className="text-[9px] uppercase tracking-widest text-zinc-400 mb-2">Correo Electrónico</label>
                  <input type="email" id="correo" className="border-b border-zinc-200 py-2 focus:outline-none focus:border-[#0b172a] bg-transparent text-sm text-[#0b172a] transition-colors placeholder:text-zinc-300" placeholder="ejemplo@correo.com" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="telefono" className="text-[9px] uppercase tracking-widest text-zinc-400 mb-2">Teléfono</label>
                  <input type="tel" id="telefono" className="border-b border-zinc-200 py-2 focus:outline-none focus:border-[#0b172a] bg-transparent text-sm text-[#0b172a] transition-colors placeholder:text-zinc-300" placeholder="Clave lada + número" />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="mensaje" className="text-[9px] uppercase tracking-widest text-zinc-400 mb-2">Mensaje o Detalles del Activo</label>
                <textarea id="mensaje" rows="4" className="border-b border-zinc-200 py-2 focus:outline-none focus:border-[#0b172a] bg-transparent text-sm text-[#0b172a] transition-colors resize-none placeholder:text-zinc-300" placeholder="Cuéntenos sobre su proyecto o necesidades de gestión..."></textarea>
              </div>

              <button type="submit" className="mt-4 bg-[#0b172a] px-10 py-5 text-xs uppercase tracking-[0.2em] font-medium text-white hover:bg-[#a27642] transition-all duration-300 w-full sm:w-auto shadow-lg">
                Enviar Mensaje
              </button>
            </form>
          </div>

        </FadeIn>
      </div>
    </section>
  );
};