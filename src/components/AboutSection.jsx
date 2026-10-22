import { FadeIn } from './FadeIn';

export const AboutSection = () => {
  return (
    <section id="nosotros" className="py-32 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. ¿Quiénes Somos? (Texto literal del documento) */}
        <FadeIn className="max-w-4xl mx-auto text-center space-y-10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
            Nuestra Filosofía
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-zinc-900 leading-tight">
            Somos una operadora hotelera especializada en la gestión estratégica e integral de activos hoteleros.
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-2xl mx-auto font-light">
            Integramos inteligencia comercial, responsabilidad financiera, desarrollo del talento y excelencia operativa para transformar información en decisiones de valor, cumplir nuestra promesa al huésped y construir rentabilidad sostenible.
          </p>
          <div className="mt-12 pt-12 border-t border-zinc-200">
            <p className="text-xl sm:text-2xl font-serif text-zinc-900 italic tracking-tight">
              "Entendemos el negocio. Visualizamos su potencial. Ejecutamos con disciplina."
            </p>
          </div>
        </FadeIn>

        {/* 2. Tres Pilares. Una forma de gestionar. */}
        <FadeIn delay={0.2} className="mt-32">
          <div className="text-center mb-16">
            <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4">Nuestro Modelo de Gestión</h3>
            <h4 className="text-3xl font-serif text-zinc-900">Tres pilares. Una forma de gestionar.</h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200">
            <div className="bg-white p-12 text-center hover:bg-zinc-50 transition-colors">
              <span className="block text-4xl font-serif text-zinc-200 mb-6">01</span>
              <h5 className="text-lg font-serif text-zinc-900 mb-3">Entendemos</h5>
              <p className="text-xs text-zinc-500 uppercase tracking-widest">El negocio y su entorno</p>
            </div>
            <div className="bg-white p-12 text-center hover:bg-zinc-50 transition-colors">
              <span className="block text-4xl font-serif text-zinc-200 mb-6">02</span>
              <h5 className="text-lg font-serif text-zinc-900 mb-3">Visualizamos</h5>
              <p className="text-xs text-zinc-500 uppercase tracking-widest">El potencial y la estrategia</p>
            </div>
            <div className="bg-white p-12 text-center hover:bg-zinc-50 transition-colors">
              <span className="block text-4xl font-serif text-zinc-200 mb-6">03</span>
              <h5 className="text-lg font-serif text-zinc-900 mb-3">Ejecutamos</h5>
              <p className="text-xs text-zinc-500 uppercase tracking-widest">La operación y los resultados</p>
            </div>
          </div>
        </FadeIn>

        {/* 3. Una Visión Integral (Propuesta de Valor) */}
        <FadeIn delay={0.4} className="mt-32 pt-16 border-t border-zinc-200 text-center">
          <h3 className="text-2xl font-serif text-zinc-900 mb-6">Una visión integral. Un compromiso con el valor.</h3>
          <p className="text-sm text-zinc-600 font-light mb-16 max-w-xl mx-auto">
            Conectamos estrategia, personas y ejecución para generar resultados consistentes y sostenibles.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left max-w-5xl mx-auto">
            <div className="border-l border-zinc-200 pl-6">
              <h4 className="text-zinc-900 font-serif text-lg mb-2">Para nuestros socios</h4>
              <p className="text-xs text-zinc-500 tracking-wide uppercase">Confianza y valor patrimonial.</p>
            </div>
            <div className="border-l border-zinc-200 pl-6">
              <h4 className="text-zinc-900 font-serif text-lg mb-2">Para nuestros huéspedes</h4>
              <p className="text-xs text-zinc-500 tracking-wide uppercase">Una promesa cumplida.</p>
            </div>
            <div className="border-l border-zinc-200 pl-6">
              <h4 className="text-zinc-900 font-serif text-lg mb-2">Para nuestra gente</h4>
              <p className="text-xs text-zinc-500 tracking-wide uppercase">Oportunidades de desarrollo.</p>
            </div>
          </div>
        </FadeIn>

        {/* 4. Valores de Ejecución Complementarios (Manteniendo lo anterior) */}
        <FadeIn delay={0.6} className="mt-32 bg-zinc-900 text-white p-12 lg:p-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-6">Fundamentos Estratégicos</h4>
              <ul className="space-y-4 text-sm font-serif text-zinc-300">
                <li>Marcas Globales</li>
                <li>Eficiencia Comercial</li>
                <li>Ecosistema Digital y Business Intelligence</li> {/* Este es el nuevo enfoque */}
                <li>Responsabilidad Social</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-6">Valores de Ejecución</h4>
              <ul className="space-y-3 text-xs text-zinc-400 font-light">
  <li className="flex gap-3"><span className="w-1.5 h-1.5 bg-zinc-700 rounded-full mt-1 shrink-0"></span>Promover una cultura orientada al logro de objetivos.</li>
  {/* NUEVO ENFOQUE DIGITAL */}
  <li className="flex gap-3"><span className="w-1.5 h-1.5 bg-zinc-700 rounded-full mt-1 shrink-0"></span>Sustituir procesos manuales por flujos digitales (validación, firmas electrónicas y aprobaciones) para optimizar tiempos.</li>
  <li className="flex gap-3"><span className="w-1.5 h-1.5 bg-zinc-700 rounded-full mt-1 shrink-0"></span>Mejorar la capacidad de respuesta y reducir costos de cumplimiento.</li>
  <li className="flex gap-3"><span className="w-1.5 h-1.5 bg-zinc-700 rounded-full mt-1 shrink-0"></span>Concretar fechas de compromiso y definir responsables.</li>
</ul>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};