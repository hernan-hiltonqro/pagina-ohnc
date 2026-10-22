import { FadeIn } from './FadeIn';

export const AboutSection = () => {
  return (
    <section id="nosotros" className="py-32 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        
        <FadeIn className="max-w-4xl mx-auto text-center space-y-10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
            Nuestra Filosofía
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-zinc-900 leading-tight">
            Somos una consultoría y operadora especializada en la mejora de las capacidades de ejecución y gestión de activos hoteleros.
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-2xl mx-auto font-light">
            Combinamos el diseño de nuevos modelos con un conocimiento integral de la industria. Integramos inteligencia comercial, responsabilidad financiera, desarrollo del talento y excelencia operativa para transformar información en decisiones de valor.
          </p>
          <div className="mt-8 pt-8 border-t border-zinc-200">
            <p className="text-lg font-serif text-zinc-900 italic">
              "Sin involucramiento no se obtienen resultados. Hacemos mejores a las empresas implicándonos 100% en todo."
            </p>
          </div>
        </FadeIn>

        {/* Propuesta de Valor Actualizada */}
        <FadeIn delay={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 mt-16 border-t border-zinc-200 text-left">
          <div>
            <h3 className="text-zinc-900 font-serif text-lg mb-2">Para nuestros socios</h3>
            <p className="text-xs text-zinc-500 tracking-wide uppercase">Confianza, rentabilidad y valor patrimonial.</p>
          </div>
          <div>
            <h3 className="text-zinc-900 font-serif text-lg mb-2">Para nuestros huéspedes</h3>
            <p className="text-xs text-zinc-500 tracking-wide uppercase">Hospitalidad única y una promesa cumplida.</p>
          </div>
          <div>
            <h3 className="text-zinc-900 font-serif text-lg mb-2">Para nuestra gente</h3>
            <p className="text-xs text-zinc-500 tracking-wide uppercase">Tu éxito es nuestro éxito.</p>
          </div>
        </FadeIn>

        {/* Estrategia y Valores Únicos */}
        <FadeIn delay={0.4} className="mt-24 bg-zinc-50 border border-zinc-200 p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-6">Fundamentos Estratégicos</h4>
              <ul className="space-y-4 text-sm font-serif text-zinc-900">
                <li>Marcas Globales</li>
                <li>Eficiencia Comercial</li>
                <li>Modelo Inteligente de Operación</li>
                <li>Responsabilidad Social</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-6">Valores de Ejecución</h4>
              <ul className="space-y-3 text-xs text-zinc-600 font-light">
                <li className="flex gap-3"><span className="w-1.5 h-1.5 bg-zinc-900 rounded-full mt-1 shrink-0"></span>Promover una cultura orientada al logro de objetivos.</li>
                <li className="flex gap-3"><span className="w-1.5 h-1.5 bg-zinc-900 rounded-full mt-1 shrink-0"></span>Optimizar tiempos reduciendo la duplicidad de tareas.</li>
                <li className="flex gap-3"><span className="w-1.5 h-1.5 bg-zinc-900 rounded-full mt-1 shrink-0"></span>Mejorar la capacidad de respuesta y reducir costos de cumplimiento.</li>
                <li className="flex gap-3"><span className="w-1.5 h-1.5 bg-zinc-900 rounded-full mt-1 shrink-0"></span>Concretar fechas de compromiso y definir responsables.</li>
              </ul>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};