import { FadeIn } from './FadeIn';

export const LegacySection = () => {
  return (
    <div className="bg-white pb-0">
      
      {/* 1. Cabecera Editorial */}
      {/* 1. Cabecera Editorial con Diagrama Integrado */}
      <section className="relative min-h-[80vh] w-full overflow-hidden bg-zinc-900 flex items-center py-24">
        
        {/* Imagen de fondo intacta */}
        <img 
          src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1600&q=80" 
          alt="Legado Hotelero" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale mix-blend-overlay"
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Columna Izquierda: Textos originales que solicitaste conservar */}
            <FadeIn>
              <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 block mb-6">
                Operación hotelera / Continuidad generacional
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif text-white leading-[1.05] mb-8 tracking-tight">
                El legado se honra <br/>
                <span className="italic text-zinc-400">operándolo</span> mejor.
              </h1>
              <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-lg">
                GEOH conecta la visión de quienes construyeron el hotel con la energía de quienes lo llevarán al futuro: rentabilidad, cuidado del activo, equipos que crecen y una operación que el propietario puede seguir con claridad.
              </p>
            </FadeIn>

            {/* Columna Derecha: Diagrama Orbital (Minimalista y adaptado al diseño) */}
            <FadeIn delay={0.2} className="relative flex justify-center items-center h-[350px] sm:h-[500px] opacity-90">
              
              {/* Órbitas ultrafinas */}
              <div className="absolute w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] border border-white/10 rounded-full transform -rotate-12"></div>
              <div className="absolute w-[220px] h-[320px] sm:w-[320px] sm:h-[460px] border border-white/10 rounded-full transform rotate-45"></div>
              <div className="absolute w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] border border-dashed border-white/5 rounded-full opacity-60"></div>

              {/* Pequeños acentos sutiles */}
              <div className="absolute top-[20%] right-[25%] w-1.5 h-1.5 bg-[#a27642] rounded-full"></div>
              <div className="absolute bottom-[20%] left-[25%] w-1 h-1 bg-zinc-500 rounded-full"></div>

              {/* Núcleo Central GEOH */}
              <div className="relative z-10 text-center flex flex-col items-center">
                <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-zinc-400 mb-3">
                  Un mismo patrimonio
                </span>
                <span className="text-6xl sm:text-[5.5rem] font-sans font-bold tracking-[0.1em] text-white leading-none mb-4 drop-shadow-md">
                  GEOH
                </span>
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#a27642] to-transparent mb-4"></div>
                <span className="text-lg sm:text-xl font-serif italic text-zinc-300">
                  Legado que evoluciona
                </span>
              </div>

              {/* Textos Flotantes */}
              <div className="absolute left-0 top-[10%] sm:top-[15%] text-left">
                <span className="block text-[8px] uppercase tracking-[0.15em] text-zinc-500 mb-1">
                  Primera generación
                </span>
                <span className="block text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-zinc-300">
                  La visión fundadora
                </span>
              </div>
              <div className="absolute right-0 bottom-[10%] sm:bottom-[15%] text-right">
                <span className="block text-[8px] uppercase tracking-[0.15em] text-zinc-500 mb-1">
                  Segunda generación
                </span>
                <span className="block text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-zinc-300">
                  El siguiente capítulo
                </span>
              </div>

            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. El Propósito (3 Principios) */}
      <section className="py-32 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 block mb-4">Nuestro Propósito</span>
              <h2 className="text-3xl sm:text-5xl font-serif text-zinc-900 leading-tight">
                El legado no se conserva <span className="italic text-zinc-500">congelándolo.</span>
              </h2>
            </div>
            <div>
              <p className="text-lg text-zinc-700 font-serif italic mb-6">Se conserva haciendo que funcione mejor, sin perder aquello que lo hace propio.</p>
              <p className="text-sm text-zinc-600 font-light leading-relaxed">
                Para la primera generación, el hotel representa años de visión, esfuerzo y patrimonio. Para la segunda, una responsabilidad y una oportunidad. GEOH ayuda a que ambas miradas encuentren un mismo rumbo operativo: proteger la identidad del activo mientras se actualizan la gestión, la información y las decisiones.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200">
            <FadeIn delay={0.1} className="bg-zinc-50 p-12 hover:bg-white transition-colors">
              <span className="block font-serif text-zinc-400 mb-6 italic">01 / Proteger</span>
              <h3 className="text-xl font-serif text-zinc-900 mb-4">La esencia</h3>
              <p className="text-xs text-zinc-600 font-light leading-relaxed">La historia, el servicio y la identidad que distinguen al hotel y construyen confianza.</p>
            </FadeIn>
            <FadeIn delay={0.2} className="bg-zinc-50 p-12 hover:bg-white transition-colors">
              <span className="block font-serif text-zinc-400 mb-6 italic">02 / Profesionalizar</span>
              <h3 className="text-xl font-serif text-zinc-900 mb-4">La operación</h3>
              <p className="text-xs text-zinc-600 font-light leading-relaxed">Procesos, responsables y seguimiento para convertir experiencia en consistencia.</p>
            </FadeIn>
            <FadeIn delay={0.3} className="bg-zinc-50 p-12 hover:bg-white transition-colors">
              <span className="block font-serif text-zinc-400 mb-6 italic">03 / Proyectar</span>
              <h3 className="text-xl font-serif text-zinc-900 mb-4">El patrimonio</h3>
              <p className="text-xs text-zinc-600 font-light leading-relaxed">Información y disciplina financiera para decidir con perspectiva de largo plazo.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. Conversación Generacional */}
      <section className="py-32 bg-zinc-900 text-white border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 block mb-4">Una conversación entre generaciones</span>
            <h2 className="text-3xl sm:text-5xl font-serif mb-6">Un hotel puede honrar su origen <span className="italic text-zinc-400">y cambiar su manera de operar.</span></h2>
            <p className="text-sm text-zinc-400 font-light leading-relaxed">
              No se trata de elegir entre tradición y modernización. Se trata de que la experiencia acumulada y la nueva visión trabajen sobre el mismo tablero.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* 1ra Generación */}
            <FadeIn className="bg-zinc-800 border border-zinc-700 p-10 sm:p-14">
              <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-400 block mb-6">Primera generación / Fundadores</span>
              <h3 className="text-2xl font-serif mb-4">Lo que merece permanecer</h3>
              <p className="text-sm text-zinc-400 font-light mb-8">La reputación construida, los vínculos con el destino, la cultura de servicio y el cuidado personal del activo.</p>
              <ul className="space-y-4 text-xs text-zinc-300">
                <li className="flex gap-3"><span className="text-zinc-500">+</span> Identidad y promesa de marca</li>
                <li className="flex gap-3"><span className="text-zinc-500">+</span> Relaciones y conocimiento del negocio</li>
                <li className="flex gap-3"><span className="text-zinc-500">+</span> Patrimonio y visión de largo plazo</li>
              </ul>
            </FadeIn>

            {/* Puente GEOH */}
            <FadeIn delay={0.2} className="flex flex-col items-center justify-center p-8 text-center border-y border-zinc-800 lg:border-y-0 lg:border-x">
              <span className="text-3xl text-zinc-600 mb-4">↔</span>
              <span className="text-2xl font-serif text-white tracking-widest">GEOH</span>
              <span className="text-xs uppercase tracking-widest text-zinc-500 mt-2">Alinea ambas visiones</span>
            </FadeIn>

            {/* 2da Generación */}
            <FadeIn delay={0.4} className="bg-zinc-800 border border-zinc-700 p-10 sm:p-14">
              <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-400 block mb-6">Segunda generación / Continuidad</span>
              <h3 className="text-2xl font-serif mb-4">Lo que puede evolucionar</h3>
              <p className="text-sm text-zinc-400 font-light mb-8">La gestión profesional, la información compartida, la toma de decisiones y la capacidad de adaptación del hotel.</p>
              <ul className="space-y-4 text-xs text-zinc-300">
                <li className="flex gap-3"><span className="text-zinc-500">+</span> Gobierno y rendición de cuentas</li>
                <li className="flex gap-3"><span className="text-zinc-500">+</span> Disciplina comercial y financiera</li>
                <li className="flex gap-3"><span className="text-zinc-500">+</span> Talento, tecnología y nuevos mercados</li>
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. Un relevo con método */}
      <section className="py-32 bg-[#f9f8f6] border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
            <div className="max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#a27642] block mb-4">Un relevo con método</span>
              <h2 className="text-3xl sm:text-5xl font-serif text-zinc-900 leading-tight">
                La continuidad no se improvisa. <span className="italic text-[#a27642]">Se opera.</span>
              </h2>
            </div>
            <p className="text-sm text-zinc-500 font-light max-w-sm leading-relaxed pb-2">
              De la primera conversación al seguimiento directivo: cada etapa tiene un objetivo, una persona responsable y una conversación de resultados.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-200 border border-zinc-200 shadow-sm">
            <FadeIn delay={0.1} className="bg-white p-10 relative group hover:bg-zinc-50 transition-colors">
              <span className="text-lg font-serif text-[#a27642] italic block mb-6">01 / Entender</span>
              <h3 className="text-xl font-serif text-zinc-900 mb-3">Diagnosticar</h3>
              <p className="text-xs text-zinc-500 font-light leading-relaxed">Activo, operación, marca, mercado, situación y objetivos del propietario.</p>
              <span className="absolute top-10 right-8 text-[#a27642] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-white p-10 relative group hover:bg-zinc-50 transition-colors">
              <span className="text-lg font-serif text-[#a27642] italic block mb-6">02 / Alinear</span>
              <h3 className="text-xl font-serif text-zinc-900 mb-3">Definir el rumbo</h3>
              <p className="text-xs text-zinc-500 font-light leading-relaxed">Presupuesto, prioridades, metas operativas, alcance y acuerdos de gobierno.</p>
              <span className="absolute top-10 right-8 text-[#a27642] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
            </FadeIn>

            <FadeIn delay={0.3} className="bg-white p-10 relative group hover:bg-zinc-50 transition-colors">
              <span className="text-lg font-serif text-[#a27642] italic block mb-6">03 / Ejecutar</span>
              <h3 className="text-xl font-serif text-zinc-900 mb-3">Gestionar el día a día</h3>
              <p className="text-xs text-zinc-500 font-light leading-relaxed">Demanda, tarifa, estándares, equipos, costos y cuidado del activo.</p>
              <span className="absolute top-10 right-8 text-[#a27642] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
            </FadeIn>

            <FadeIn delay={0.4} className="bg-white p-10 relative group hover:bg-zinc-50 transition-colors">
              <span className="text-lg font-serif text-[#a27642] italic block mb-6">04 / Dar visibilidad</span>
              <h3 className="text-xl font-serif text-zinc-900 mb-3">Revisar y corregir</h3>
              <p className="text-xs text-zinc-500 font-light leading-relaxed">Presupuesto, real, variación y acción. Decisiones con responsable y seguimiento.</p>
              <span className="absolute top-10 right-8 text-[#a27642] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. El legado también se mide (Dashboard Conceptual) */}
      <section className="py-32 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Textos y Métricas */}
            <FadeIn>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#a27642] block mb-4">El legado también se mide</span>
              <h2 className="text-3xl sm:text-5xl font-serif text-zinc-900 leading-tight mb-8">
                Menos "así se ha hecho". Más <span className="italic text-[#a27642]">"esto está pasando".</span>
              </h2>
              <p className="text-sm text-zinc-600 font-light leading-relaxed mb-10 max-w-md">
                Convertimos la operación diaria en información útil para el propietario y el equipo directivo. El tablero se adapta al hotel y al alcance acordado; cada indicador debe llevar a una decisión, no quedarse en una lámina.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 border border-zinc-300 rounded-full text-[9px] font-bold tracking-widest uppercase text-zinc-600">Ingreso rentable</span>
                <span className="px-4 py-2 border border-zinc-300 rounded-full text-[9px] font-bold tracking-widest uppercase text-zinc-600">GOP / EBITDA</span>
                <span className="px-4 py-2 border border-zinc-300 rounded-full text-[9px] font-bold tracking-widest uppercase text-zinc-600">Experiencia del huésped</span>
                <span className="px-4 py-2 border border-zinc-300 rounded-full text-[9px] font-bold tracking-widest uppercase text-zinc-600">Productividad</span>
                <span className="px-4 py-2 border border-zinc-300 rounded-full text-[9px] font-bold tracking-widest uppercase text-zinc-600">Cuidado del activo</span>
              </div>
            </FadeIn>

            {/* Tablero Oscuro */}
            <FadeIn delay={0.2} className="bg-[#111a22] text-white p-8 sm:p-10 shadow-2xl relative">
              <div className="flex justify-between items-center border-b border-white/10 pb-5 mb-6">
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-white">Tablero de gestión del propietario</span>
                <div className="flex items-center gap-2 text-[9px] text-zinc-400">
                  <span className="w-1.5 h-1.5 bg-[#c3a56e] rounded-full"></span> Modelo de seguimiento
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 text-[9px] tracking-widest uppercase text-zinc-500 mb-4 px-2">
                <span>Frente</span>
                <span>Lectura</span>
                <span>Responsable</span>
                <span className="text-right">Siguiente paso</span>
              </div>

              <div className="space-y-0">
                <div className="grid grid-cols-4 gap-4 items-center border-t border-white/10 py-4 px-2 text-[11px]">
                  <span className="flex items-center gap-3"><span className="w-1.5 h-1.5 border border-[#c3a56e] rounded-full"></span> Ingresos</span>
                  <span className="text-zinc-400">Mix / tarifa</span>
                  <span className="text-zinc-400">Comercial</span>
                  <span className="text-[#c3a56e] text-right text-[10px]">Decidir →</span>
                </div>
                <div className="grid grid-cols-4 gap-4 items-center border-t border-white/10 py-4 px-2 text-[11px]">
                  <span className="flex items-center gap-3"><span className="w-1.5 h-1.5 border border-[#c3a56e] rounded-full"></span> Margen</span>
                  <span className="text-zinc-400">Real vs. plan</span>
                  <span className="text-zinc-400">Finanzas</span>
                  <span className="text-[#c3a56e] text-right text-[10px]">Corregir →</span>
                </div>
                <div className="grid grid-cols-4 gap-4 items-center border-t border-white/10 py-4 px-2 text-[11px]">
                  <span className="flex items-center gap-3"><span className="w-1.5 h-1.5 border border-[#c3a56e] rounded-full"></span> Experiencia</span>
                  <span className="text-zinc-400">Comentarios</span>
                  <span className="text-zinc-400">Operación</span>
                  <span className="text-[#c3a56e] text-right text-[10px]">Resolver →</span>
                </div>
                <div className="grid grid-cols-4 gap-4 items-center border-t border-white/10 py-4 px-2 text-[11px]">
                  <span className="flex items-center gap-3"><span className="w-1.5 h-1.5 border border-[#c3a56e] rounded-full"></span> Activo</span>
                  <span className="text-zinc-400">Disponibilidad</span>
                  <span className="text-zinc-400">Mantenimiento</span>
                  <span className="text-[#c3a56e] text-right text-[10px]">Priorizar →</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between gap-4 border-t border-white/20 mt-2 pt-5 text-[10px] text-zinc-400">
                <span><b className="text-white">Presupuesto</b> · Real · Variación · Acción</span>
                <span>Con cadencia acordada</span>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

    </div>
  );
};