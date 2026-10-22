import { FadeIn } from './FadeIn';

export const InvestorsSection = () => {
  return (
    <section id="inversionistas" className="py-32 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">Expansión</span>
          <h2 className="mt-6 text-3xl sm:text-5xl font-serif text-zinc-900 leading-tight">
            ¿Cómo ser parte de Xenia?
          </h2>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 gap-px bg-zinc-200 border border-zinc-200 mb-12 shadow-sm">
          <div className="bg-white p-10 lg:p-14">
            <h3 className="text-xl font-serif text-zinc-900 mb-8">Proceso de Afiliación</h3>
            <ol className="space-y-6 text-sm text-zinc-600 font-light list-decimal list-inside marker:font-serif marker:text-zinc-900">
              <li>Definición del modelo (propuesta económica y evaluación legal).</li>
              <li>Presentación del Contrato de Administración de Operación Hotelera.</li>
              <li>Firma de contratos.</li>
              <li>Implementación de recursos tecnológicos (Intranet, encuestas).</li>
              <li>Inicio formal del proceso de operadora.</li>
            </ol>
          </div>
          
          <div className="bg-zinc-900 p-10 lg:p-14 text-white">
            <h3 className="text-xl font-serif mb-8">Estructura de Honorarios</h3>
            <ul className="space-y-4 text-xs text-zinc-400 font-light">
              <li className="flex justify-between border-b border-zinc-800 pb-2">
                <span>Contrato de Operación</span>
                <span className="text-white font-medium">5 años</span>
              </li>
              <li className="flex justify-between border-b border-zinc-800 pb-2">
                <span>Regalías operadora s/ Ingresos Habitaciones</span>
                <span className="text-white font-medium">5%</span>
              </li>
              <li className="flex justify-between border-b border-zinc-800 pb-2">
                <span>Regalías operadora s/ GOP obtenido</span>
                <span className="text-white font-medium">5%</span>
              </li>
              <li className="flex justify-between border-b border-zinc-800 pb-2">
                <span>Excedente de GOP vs Presupuesto</span>
                <span className="text-white font-medium">10% adicional</span>
              </li>
              <li className="flex justify-between border-b border-zinc-800 pb-2">
                <span>Regalía de marca, MKT y Comisiones</span>
                <span className="text-zinc-500">Cuenta del propietario</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Sistemas Back, POS y Nómina</span>
                <span className="text-zinc-500">Contratación vía TCA</span>
              </li>
            </ul>
          </div>
        </div>

        <FadeIn className="text-center mt-12">
          <a href="#contacto" className="inline-block bg-zinc-900 px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium text-white hover:bg-zinc-800 transition-all duration-300">
            Contactar Dirección Comercial
          </a>
        </FadeIn>
      </div>
    </section>
  );
};