import { FadeIn } from './FadeIn';

export const ContactSection = () => {
  return (
    <div className="bg-white pt-32 pb-40 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cabecera */}
        <FadeIn className="mb-24">
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 block mb-4">Contacto</span>
          <h1 className="text-4xl sm:text-6xl font-serif text-zinc-900 mb-6">Hablemos de su proyecto</h1>
          <div className="w-12 h-[1px] bg-zinc-900"></div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Datos de Contacto */}
          <FadeIn delay={0.2} className="lg:pr-12">
            <h3 className="text-2xl font-serif text-zinc-900 mb-8">Sede Comercial y Operativa</h3>
            <div className="space-y-6 text-zinc-600 font-light text-sm">
              <div>
                <p className="font-medium text-zinc-900 mb-1">Dirección</p>
                <p>Blvd. Bernardo Quintana</p>
                <p>C.P. 76000, Santiago de Querétaro, Qro.</p>
              </div>
              <div className="pt-6 border-t border-zinc-200">
                <p className="font-medium text-zinc-900 mb-1">Contacto Directo</p>
                <p>expansion@xeniaservices.com</p>
                <p>+52 (442) 000 0000</p>
              </div>
              <div className="pt-6 border-t border-zinc-200">
                <p className="font-medium text-zinc-900 mb-1">Horario de Atención</p>
                <p>Lunes a Viernes: 9:00 hrs - 18:00 hrs</p>
              </div>
            </div>
          </FadeIn>

          {/* Formulario Minimalista */}
          <FadeIn delay={0.4}>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label htmlFor="nombre" className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">Nombre Completo</label>
                  <input type="text" id="nombre" className="border-b border-zinc-300 py-2 focus:outline-none focus:border-zinc-900 bg-transparent text-sm transition-colors" placeholder="Su nombre" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="empresa" className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">Empresa / Hotel</label>
                  <input type="text" id="empresa" className="border-b border-zinc-300 py-2 focus:outline-none focus:border-zinc-900 bg-transparent text-sm transition-colors" placeholder="Nombre de la propiedad" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label htmlFor="correo" className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">Correo Electrónico</label>
                  <input type="email" id="correo" className="border-b border-zinc-300 py-2 focus:outline-none focus:border-zinc-900 bg-transparent text-sm transition-colors" placeholder="ejemplo@correo.com" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="telefono" className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">Teléfono</label>
                  <input type="tel" id="telefono" className="border-b border-zinc-300 py-2 focus:outline-none focus:border-zinc-900 bg-transparent text-sm transition-colors" placeholder="Clave lada + número" />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="mensaje" className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">Mensaje o Detalles del Activo</label>
                <textarea id="mensaje" rows="4" className="border-b border-zinc-300 py-2 focus:outline-none focus:border-zinc-900 bg-transparent text-sm transition-colors resize-none" placeholder="Cuéntenos sobre su proyecto o necesidades de gestión..."></textarea>
              </div>

              <button type="submit" className="mt-8 bg-zinc-900 px-10 py-5 text-xs uppercase tracking-[0.2em] font-medium text-white hover:bg-zinc-800 transition-all duration-300 w-full sm:w-auto">
                Enviar Mensaje
              </button>
            </form>
          </FadeIn>
          
        </div>
      </div>
    </div>
  );
};