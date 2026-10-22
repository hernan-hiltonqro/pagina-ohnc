import { FadeIn } from './FadeIn';
import { Link } from 'react-router-dom';

export const InvestorsSection = () => {
  return (
    <div className="bg-white pb-32">
      
      {/* 1. Cabecera Editorial con Imagen */}
      <section className="relative h-[40vh] min-h-[400px] w-full overflow-hidden bg-zinc-900">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80" 
          alt="Edificio Corporativo" 
          className="w-full h-full object-cover opacity-40 grayscale mix-blend-overlay"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <FadeIn className="text-center px-6 mt-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 block mb-4">Crecimiento y Rentabilidad</span>
            <h1 className="text-4xl sm:text-6xl font-serif text-white">Expansión</h1>
          </FadeIn>
        </div>
      </section>

      {/* 2. Título y Argumento de Venta */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-24 text-center">
        <FadeIn className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-serif text-zinc-900 mb-8">¿Cómo ser parte de Xenia?</h2>
          <p className="text-base text-zinc-600 font-light leading-relaxed">
            Protegemos su patrimonio con disciplina operativa y transparencia total. Nuestro modelo de gestión está diseñado para maximizar la rentabilidad de su activo hotelero, respaldado por un ecosistema digital avanzado y un equipo de expertos comprometidos con el resultado.
          </p>
          <div className="w-12 h-[1px] bg-zinc-300 mx-auto mt-12"></div>
        </FadeIn>
      </section>

      {/* 3. Bloques de Información (Afiliación y Honorarios) */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <FadeIn className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-zinc-200 border border-zinc-200 shadow-sm">
          
          {/* Lado Izquierdo: Proceso de Afiliación */}
          <div className="bg-white p-12 sm:p-16 lg:p-20">
            <h3 className="text-2xl font-serif text-zinc-900 mb-10">Proceso de Afiliación</h3>
            <ol className="space-y-6 text-sm text-zinc-600 font-light">
              <li className="flex gap-4">
                <span className="text-zinc-400 font-serif">1.</span> 
                <span>Definición del modelo (propuesta económica y evaluación legal).</span>
              </li>
              <li className="flex gap-4">
                <span className="text-zinc-400 font-serif">2.</span> 
                <span>Presentación del Contrato de Administración de Operación Hotelera.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-zinc-400 font-serif">3.</span> 
                <span>Firma de contratos.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-zinc-400 font-serif">4.</span> 
                <span>Implementación de recursos tecnológicos (Intranet, encuestas).</span>
              </li>
              <li className="flex gap-4">
                <span className="text-zinc-400 font-serif">5.</span> 
                <span>Inicio formal del proceso de operadora.</span>
              </li>
            </ol>
          </div>

          {/* Lado Derecho: Estructura de Honorarios (Fondo Oscuro) */}
          <div className="bg-zinc-900 p-12 sm:p-16 lg:p-20 text-white">
            <h3 className="text-2xl font-serif mb-10">Estructura de Honorarios</h3>
            <div className="space-y-6 text-xs sm:text-sm font-light text-zinc-300">
              
              <div className="flex justify-between items-end border-b border-zinc-700 pb-2">
                <span>Contrato de Operación</span>
                <span className="text-white font-medium">5 años</span>
              </div>
              <div className="flex justify-between items-end border-b border-zinc-700 pb-2">
                <span>Regalías operadora s/ Ingresos Habitaciones</span>
                <span className="text-white font-medium">5%</span>
              </div>
              <div className="flex justify-between items-end border-b border-zinc-700 pb-2">
                <span>Regalías operadora s/ GOP obtenido</span>
                <span className="text-white font-medium">5%</span>
              </div>
              <div className="flex justify-between items-end border-b border-zinc-700 pb-2">
                <span>Excedente de GOP vs Presupuesto</span>
                <span className="text-white font-medium">10% adicional</span>
              </div>
              <div className="flex justify-between items-end border-b border-zinc-700 pb-2 pt-4">
                <span className="text-zinc-500">Regalía de marca, MKT y Comisiones</span>
                <span className="text-zinc-400 text-right">Cuenta del propietario</span>
              </div>
              <div className="flex justify-between items-end border-b border-zinc-700 pb-2">
                <span className="text-zinc-500">Sistemas Back, POS y Nómina</span>
                <span className="text-zinc-400 text-right">Contratación vía TCA</span>
              </div>
              
            </div>
          </div>

        </FadeIn>
      </section>

      {/* 4. Llamado a la Acción (CTA) */}
      <section className="max-w-4xl mx-auto px-6 text-center border-t border-zinc-200 pt-32">
        <FadeIn>
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 block mb-4">Siguiente Paso</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-zinc-900 mb-8">Inicie la conversación</h2>
          <p className="text-sm text-zinc-600 font-light mb-12 max-w-lg mx-auto">
            Permítanos evaluar el potencial de su activo hotelero. Solicite un diagnóstico confidencial con nuestro equipo directivo.
          </p>
          <Link to="/contacto" className="inline-block bg-zinc-900 px-10 py-5 text-xs uppercase tracking-[0.2em] font-medium text-white hover:bg-zinc-800 transition-all duration-300">
            Contactar a Expansión
          </Link>
        </FadeIn>
      </section>

    </div>
  );
};