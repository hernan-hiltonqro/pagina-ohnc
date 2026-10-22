import { FadeIn } from './FadeIn';

export const ExperienceSection = () => {
  return (
    <section className="py-32 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        
        <FadeIn className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-zinc-900 leading-tight tracking-tight">
            "El mercado actual no compra servicios o productos, <span className="italic text-zinc-500">compra experiencias</span>."
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-zinc-200 border border-zinc-200">
          <FadeIn direction="right" className="bg-white p-10 sm:p-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 block mb-6">Servicio</span>
            <h3 className="text-2xl font-serif text-zinc-900 mb-8">Orientación al Huésped</h3>
            <p className="text-sm text-zinc-600 font-light leading-relaxed mb-8">
              Escuchamos al huésped para crear experiencias memorables que generen lealtad, operando de manera práctica mediante:
            </p>
            <ul className="space-y-3">
              {['Medición del cumplimiento de estándares por marca.', 'Certificación de posiciones operativas garantizando procesos.', 'Evaluación del desempeño ejecutivo mediante KPI’s.', 'Programas de entrenamiento y promoción interna.'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-xs text-zinc-500">
                  <span className="w-1.5 h-1.5 border border-zinc-900 shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn direction="left" delay={0.2} className="bg-white p-10 sm:p-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 block mb-6">Operación</span>
            <h3 className="text-2xl font-serif text-zinc-900 mb-8">Alimentos y Bebidas</h3>
            <p className="text-sm text-zinc-600 font-light leading-relaxed mb-8">
              Sustentamos el ciclo de calidad, satisfacción e ingresos a través de factores clave en la ejecución diaria:
            </p>
            <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-xs text-zinc-500 font-medium">
              <p className="border-b border-zinc-100 pb-2">Staffing & Supervisión</p>
              <p className="border-b border-zinc-100 pb-2">Formación Constante</p>
              <p className="border-b border-zinc-100 pb-2">Rapidez y Eficacia</p>
              <p className="border-b border-zinc-100 pb-2">Personal Certificado</p>
              <p className="border-b border-zinc-100 pb-2">Manejo Higiénico</p>
              <p className="border-b border-zinc-100 pb-2">Ambientación</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};