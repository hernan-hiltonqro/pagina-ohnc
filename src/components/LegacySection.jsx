import { FadeIn } from './FadeIn';
import { Link } from 'react-router-dom';

export const LegacySection = () => {
  return (
    <div className="bg-[#F8F9FA] pb-0">
      
      {/* 1. Cabecera Editorial con Diagrama Integrado (Fondo oscuro más suave y Compacto) */}
      <section className="relative w-full overflow-hidden bg-[#2E2F32] flex items-center py-20 lg:py-24">
        
        {/* Imagen de fondo oscurecida pero más suave */}
        <img 
          src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1600&q=80" 
          alt="Legado Hotelero" 
          className="absolute inset-0 w-full h-full object-cover opacity-2 grayscale mix-blend-luminosity"
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Columna Izquierda */}
            <FadeIn>
              <span className="text-xl uppercase tracking-[0.2em] font-bold text-[#CF6343] block mb-6">
                Operación hotelera / Continuidad generacional
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif text-[#F8F9FA] leading-[1.05] mb-8 tracking-tight">
                El legado se honra <br/>
                <span className="italic text-[#767980]">operándolo</span> mejor.
              </h1>
              <p className="text-lg sm:text-xl text-[#F8F9FA]/80 font-light leading-relaxed max-w-2xl text-justify  ">
                GEOH conecta la visión de quienes construyeron el hotel con la energía de quienes lo llevarán al futuro: rentabilidad, cuidado del activo, equipos que crecen y una operación que el propietario puede seguir con claridad.
              </p>
            </FadeIn>

            {/* Columna Derecha: Diagrama Orbital (Reducido) */}
            <FadeIn delay={0.2} className="relative flex justify-center items-center h-[300px] sm:h-[400px] opacity-95">
              
              {/* Órbitas */}
              <div className="absolute w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] border border-[#F8F9FA]/10 rounded-full transform -rotate-12"></div>
              <div className="absolute w-[180px] h-[260px] sm:w-[260px] sm:h-[380px] border border-[#F8F9FA]/10 rounded-full transform rotate-45"></div>
              <div className="absolute w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] border border-dashed border-[#F8F9FA]/20 rounded-full"></div>

              {/* Acentos */}
              <div className="absolute top-[15%] right-[20%] w-3 h-3 bg-[#CF6343] rounded-full"></div>
              <div className="absolute bottom-[20%] left-[25%] w-2 h-2 bg-[#F8F9FA]/40 rounded-full"></div>

              {/* Núcleo Central */}
              <div className="relative z-10 text-center flex flex-col items-center">
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#767980] mb-3">
                  Un mismo patrimonio
                </span>
                <span className="text-5xl sm:text-6xl font-sans font-bold tracking-[0.1em] text-[#F8F9FA] leading-none mb-4 drop-shadow-lg">
                  GEOH
                </span>
                <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-[#CF6343] to-transparent mb-4"></div>
                <span className="text-xl font-serif italic text-[#F8F9FA]/80">
                  Legado que evoluciona
                </span>
              </div>

              {/* Textos Flotantes */}
              <div className="absolute left-[-10px] top-[10%] text-left hidden sm:block">
                <span className="block text-[10px] uppercase tracking-[0.2em] font-medium text-[#767980] mb-1">
                  Primera generación
                </span>
                <span className="block text-xs font-bold uppercase tracking-widest text-[#F8F9FA]">
                  La visión fundadora
                </span>
              </div>
              <div className="absolute right-[-10px] bottom-[10%] text-right hidden sm:block">
                <span className="block text-[10px] uppercase tracking-[0.2em] font-medium text-[#767980] mb-1">
                  Segunda generación
                </span>
                <span className="block text-xs font-bold uppercase tracking-widest text-[#F8F9FA]">
                  El siguiente capítulo
                </span>
              </div>

            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* EL RESTO DEL CÓDIGO SE MANTIENE EXACTAMENTE IGUAL AL ORIGINAL  */}
      {/* ============================================================== */}

      {/* 2. El Propósito (3 Principios) */}
      <section className="py-40 bg-[#F8F9FA] border-b border-[#767980]/20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-24">
            <div>
              <span className="text-lg uppercase tracking-[0.2em] font-bold text-[#CF6343] block mb-6">Nuestro Propósito</span>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-[#151617] leading-[1.05]">
                El legado no se conserva <span className="italic text-[#767980]">congelándolo.</span>
              </h2>
            </div>
            <div className="lg:pt-6">
              <p className="text-2xl text-[#151617] font-serif italic mb-8 leading-snug">Se conserva haciendo que funcione mejor, sin perder aquello que lo hace propio.</p>
              <p className="text-xl text-[#767980] font-light leading-relaxed">
                Para la primera generación, el hotel representa años de visión, esfuerzo y patrimonio. Para la segunda, una responsabilidad y una oportunidad. GEOH ayuda a que ambas miradas encuentren un mismo rumbo operativo: proteger la identidad del activo mientras se actualizan la gestión, la información y las decisiones.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#767980]/20 border border-[#767980]/20">
            <FadeIn delay={0.1} className="bg-white p-14 sm:p-16 hover:bg-[#F8F9FA] transition-colors">
              <span className="block font-serif text-3xl text-[#CF6343] mb-8 italic">01 / Proteger</span>
              <h3 className="text-3xl font-serif text-[#151617] mb-5">La esencia</h3>
              <p className="text-lg text-[#767980] font-light leading-relaxed">La historia, el servicio y la identidad que distinguen al hotel y construyen confianza.</p>
            </FadeIn>
            <FadeIn delay={0.2} className="bg-white p-14 sm:p-16 hover:bg-[#F8F9FA] transition-colors">
              <span className="block font-serif text-3xl text-[#CF6343] mb-8 italic">02 / Profesionalizar</span>
              <h3 className="text-3xl font-serif text-[#151617] mb-5">La operación</h3>
              <p className="text-lg text-[#767980] font-light leading-relaxed">Procesos, responsables y seguimiento para convertir experiencia en consistencia.</p>
            </FadeIn>
            <FadeIn delay={0.3} className="bg-white p-14 sm:p-16 hover:bg-[#F8F9FA] transition-colors">
              <span className="block font-serif text-3xl text-[#CF6343] mb-8 italic">03 / Proyectar</span>
              <h3 className="text-3xl font-serif text-[#151617] mb-5">El patrimonio</h3>
              <p className="text-lg text-[#767980] font-light leading-relaxed">Información y disciplina financiera para decidir con perspectiva de largo plazo.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. Conversación Generacional */}
      <section className="py-40 bg-[#E9EAEC] text-[#151617] border-b border-[#151617]/10">
  <div className="max-w-7xl mx-auto px-6">
    <FadeIn className="text-center max-w-4xl mx-auto mb-24">
      <span className="text-lg uppercase tracking-[0.2em] font-bold text-[#CF6343] block mb-6">Una conversación entre generaciones</span>
      <h2 className="text-5xl sm:text-6xl font-serif mb-8 leading-[1.05]">Un hotel puede honrar su origen <br/><span className="italic text-[#767980]">y cambiar su manera de operar.</span></h2>
      <p className="text-xl sm:text-2xl text-[#151617]/70 font-light leading-relaxed max-w-3xl mx-auto">
        No se trata de elegir entre tradición y modernización. Se trata de que la experiencia acumulada y la nueva visión trabajen sobre el mismo tablero.
      </p>
    </FadeIn>

    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-10 items-stretch">
      {/* 1ra Generación */}
      <FadeIn className="bg-white p-12 sm:p-16 rounded-sm border border-[#151617]/10 border-t-4 border-t-[#CF6343] shadow-[0_24px_60px_-24px_rgba(21,22,23,0.18)]">
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#CF6343] block mb-8">Primera generación / Fundadores</span>
        <h3 className="text-4xl font-serif mb-6">Lo que merece permanecer</h3>
        <p className="text-lg text-[#151617]/70 font-light mb-10 leading-relaxed">La reputación construida, los vínculos con el destino, la cultura de servicio y el cuidado personal del activo.</p>
        <ul className="text-base">
          <li className="flex gap-4 items-center py-4 border-t border-[#151617]/10"><span className="text-[#CF6343] text-2xl font-bold">+</span> Identidad y promesa de marca</li>
          <li className="flex gap-4 items-center py-4 border-t border-[#151617]/10"><span className="text-[#CF6343] text-2xl font-bold">+</span> Relaciones y conocimiento del negocio</li>
          <li className="flex gap-4 items-center py-4 border-t border-[#151617]/10"><span className="text-[#CF6343] text-2xl font-bold">+</span> Patrimonio y visión de largo plazo</li>
        </ul>
      </FadeIn>

      {/* Puente GEOH */}
      <FadeIn delay={0.2} className="flex flex-col items-center justify-center text-center">
        <span className="text-4xl text-[#CF6343] mb-6 rotate-90 lg:rotate-0">↔</span>
        <div className="w-40 h-40 rounded-full bg-[#151617] text-[#F8F9FA] flex flex-col items-center justify-center shadow-[0_24px_60px_-20px_rgba(21,22,23,0.4)]">
          <span className="text-3xl font-serif tracking-widest font-bold">GEOH</span>
          <span className="text-[11px] font-medium uppercase tracking-widest text-[#CF6343] mt-2 px-4 leading-tight">Alinea ambas visiones</span>
        </div>
      </FadeIn>

      {/* 2da Generación */}
      <FadeIn delay={0.4} className="bg-white p-12 sm:p-16 rounded-sm border border-[#151617]/10 border-t-4 border-t-[#151617] shadow-[0_24px_60px_-24px_rgba(21,22,23,0.18)]">
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#CF6343] block mb-8">Segunda generación / Continuidad</span>
        <h3 className="text-4xl font-serif mb-6">Lo que puede evolucionar</h3>
        <p className="text-lg text-[#151617]/70 font-light mb-10 leading-relaxed">La gestión profesional, la información compartida, la toma de decisiones y la capacidad de adaptación del hotel.</p>
        <ul className="text-base">
          <li className="flex gap-4 items-center py-4 border-t border-[#151617]/10"><span className="text-[#CF6343] text-2xl font-bold">+</span> Gobierno y rendición de cuentas</li>
          <li className="flex gap-4 items-center py-4 border-t border-[#151617]/10"><span className="text-[#CF6343] text-2xl font-bold">+</span> Disciplina comercial y financiera</li>
          <li className="flex gap-4 items-center py-4 border-t border-[#151617]/10"><span className="text-[#CF6343] text-2xl font-bold">+</span> Talento, tecnología y nuevos mercados</li>
        </ul>
      </FadeIn>
    </div>
  </div>
</section>

      {/* 4. Un relevo con método */}
      <section className="py-40 bg-[#F8F9FA] border-b border-[#767980]/20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
            <div className="max-w-3xl">
              <span className="text-lg uppercase tracking-[0.2em] font-bold text-[#CF6343] block mb-6">Un relevo con método</span>
              <h2 className="text-5xl sm:text-6xl font-serif text-[#151617] leading-[1.05]">
                La continuidad no se improvisa. <span className="italic text-[#767980]">Se opera.</span>
              </h2>
            </div>
            <p className="text-xl text-[#767980] font-light max-w-md leading-relaxed lg:pb-4">
              De la primera conversación al seguimiento directivo: cada etapa tiene un objetivo, una persona responsable y una conversación de resultados.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#767980]/20 border border-[#767980]/20">
            <FadeIn delay={0.1} className="bg-white p-12 sm:p-14 relative group hover:bg-[#F8F9FA] transition-colors">
              <span className="text-3xl font-serif text-[#CF6343] italic block mb-8">01 / Entender</span>
              <h3 className="text-3xl font-serif text-[#151617] mb-5">Diagnosticar</h3>
              <p className="text-lg text-[#767980] font-light leading-relaxed">Activo, operación, marca, mercado, situación y objetivos del propietario.</p>
              <span className="absolute top-12 right-10 text-2xl text-[#CF6343] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-white p-12 sm:p-14 relative group hover:bg-[#F8F9FA] transition-colors">
              <span className="text-3xl font-serif text-[#CF6343] italic block mb-8">02 / Alinear</span>
              <h3 className="text-3xl font-serif text-[#151617] mb-5">Definir el rumbo</h3>
              <p className="text-lg text-[#767980] font-light leading-relaxed">Presupuesto, prioridades, metas operativas, alcance y acuerdos de gobierno.</p>
              <span className="absolute top-12 right-10 text-2xl text-[#CF6343] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
            </FadeIn>

            <FadeIn delay={0.3} className="bg-white p-12 sm:p-14 relative group hover:bg-[#F8F9FA] transition-colors">
              <span className="text-3xl font-serif text-[#CF6343] italic block mb-8">03 / Ejecutar</span>
              <h3 className="text-3xl font-serif text-[#151617] mb-5">Día a día</h3>
              <p className="text-lg text-[#767980] font-light leading-relaxed">Demanda, tarifa, estándares, equipos, costos y cuidado del activo.</p>
              <span className="absolute top-12 right-10 text-2xl text-[#CF6343] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
            </FadeIn>

            <FadeIn delay={0.4} className="bg-white p-12 sm:p-14 relative group hover:bg-[#F8F9FA] transition-colors">
              <span className="text-3xl font-serif text-[#CF6343] italic block mb-8">04 / Visibilidad</span>
              <h3 className="text-3xl font-serif text-[#151617] mb-5">Corregir</h3>
              <p className="text-lg text-[#767980] font-light leading-relaxed">Presupuesto vs. real. Decisiones con responsable y métricas claras.</p>
              <span className="absolute top-12 right-10 text-2xl text-[#CF6343] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. El legado también se mide (Dashboard Conceptual) */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            
            {/* Textos y Métricas */}
            <FadeIn>
              <span className="text-lg uppercase tracking-[0.2em] font-bold text-[#CF6343] block mb-6">El legado también se mide</span>
              <h2 className="text-5xl sm:text-6xl font-serif text-[#151617] leading-[1.05] mb-10">
                Menos "así se ha hecho". <br/>Más <span className="italic text-[#767980]">"esto está pasando".</span>
              </h2>
              <p className="text-xl text-[#767980] font-light leading-relaxed mb-14 max-w-lg">
                Convertimos la operación diaria en información útil para el propietario y el equipo directivo. El tablero se adapta al hotel y al alcance acordado; cada indicador debe llevar a una decisión, no quedarse en una lámina.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-6 py-3 border border-[#767980]/40 rounded-sm text-sm font-bold tracking-widest uppercase text-[#151617]">Ingreso rentable</span>
                <span className="px-6 py-3 border border-[#767980]/40 rounded-sm text-sm font-bold tracking-widest uppercase text-[#151617]">GOP / EBITDA</span>
                <span className="px-6 py-3 border border-[#767980]/40 rounded-sm text-sm font-bold tracking-widest uppercase text-[#151617]">Huellas de calidad</span>
                <span className="px-6 py-3 border border-[#767980]/40 rounded-sm text-sm font-bold tracking-widest uppercase text-[#151617]">Productividad</span>
                <span className="px-6 py-3 border border-[#767980]/40 rounded-sm text-sm font-bold tracking-widest uppercase text-[#151617]">Cuidado de activos</span>
              </div>
            </FadeIn>

            {/* Tablero de Gestión Oscuro */}
            <FadeIn delay={0.2} className="bg-[#2E2F32] text-[#F8F9FA] p-12 sm:p-14 shadow-2xl relative rounded-sm border border-white/5">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 border-b border-[#F8F9FA]/10 pb-8 mb-8">
                <span className="text-base font-bold tracking-[0.2em] uppercase text-[#F8F9FA]">Tablero de gestión</span>
                <div className="flex items-center gap-3 text-sm text-[#F8F9FA]/60 uppercase tracking-widest">
                  <span className="w-2 h-2 bg-[#CF6343] rounded-full"></span> Modelo de seguimiento
                </div>
              </div>

              <div className="grid grid-cols-4 gap-6 text-sm font-bold tracking-widest uppercase text-[#F8F9FA]/50 mb-6 px-4">
                <span>Frente</span>
                <span>Lectura</span>
                <span>Responsable</span>
                <span className="text-right">Acción</span>
              </div>

              <div className="space-y-0">
                <div className="grid grid-cols-4 gap-6 items-center border-t border-[#F8F9FA]/10 py-6 px-4 text-base">
                  <span className="flex items-center gap-4 font-medium"><span className="w-2 h-2 border border-[#CF6343] rounded-full"></span> Ingresos</span>
                  <span className="text-[#F8F9FA]/70">Mix / tarifa</span>
                  <span className="text-[#F8F9FA]/70">Comercial</span>
                  <span className="text-[#CF6343] font-bold text-right uppercase text-sm tracking-widest">Decidir →</span>
                </div>
                <div className="grid grid-cols-4 gap-6 items-center border-t border-[#F8F9FA]/10 py-6 px-4 text-base">
                  <span className="flex items-center gap-4 font-medium"><span className="w-2 h-2 border border-[#CF6343] rounded-full"></span> Margen</span>
                  <span className="text-[#F8F9FA]/70">Real vs plan</span>
                  <span className="text-[#F8F9FA]/70">Finanzas</span>
                  <span className="text-[#CF6343] font-bold text-right uppercase text-sm tracking-widest">Corregir →</span>
                </div>
                <div className="grid grid-cols-4 gap-6 items-center border-t border-[#F8F9FA]/10 py-6 px-4 text-base">
                  <span className="flex items-center gap-4 font-medium"><span className="w-2 h-2 border border-[#CF6343] rounded-full"></span> Experiencia</span>
                  <span className="text-[#F8F9FA]/70">NPS / Calidad</span>
                  <span className="text-[#F8F9FA]/70">Operación</span>
                  <span className="text-[#CF6343] font-bold text-right uppercase text-sm tracking-widest">Resolver →</span>
                </div>
                <div className="grid grid-cols-4 gap-6 items-center border-t border-[#F8F9FA]/10 py-6 px-4 text-base">
                  <span className="flex items-center gap-4 font-medium"><span className="w-2 h-2 border border-[#CF6343] rounded-full"></span> Activo</span>
                  <span className="text-[#F8F9FA]/70">Preventivo</span>
                  <span className="text-[#F8F9FA]/70">Mantenimiento</span>
                  <span className="text-[#CF6343] font-bold text-right uppercase text-sm tracking-widest">Priorizar →</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between gap-6 border-t border-[#F8F9FA]/20 mt-4 pt-8 text-sm uppercase tracking-widest text-[#F8F9FA]/50">
                <span><b className="text-[#F8F9FA]">Presupuesto</b> · Real · Variación · Acción</span>
                <span>Visibilidad garantizada</span>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* 6. CTA Legado (Compacto, fondo claro) */}
      <section className="py-12 sm:py-14 bg-[#F8F9FA] border-t border-[#767980]/20">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-5xl font-serif leading-snug text-[#2E2F32]">
                Su visión construyó este legado.{" "}
                <span className="italic font-light text-[#767980]">
                  Nuestra gestión lo proyecta al futuro.
                </span>
              </h2>
              <p className="mt-3 text-xl text-[#2E2F32]/70 font-light leading-relaxed text-justify">
                Si es propietario o responsable del activo, conversemos sobre cómo
                institucionalizar la operación y asegurar la rentabilidad para las
                siguientes generaciones.
              </p>
            </div>

            <Link
              to="/contacto"
              className="flex-shrink-0 text-center bg-[#2E2F32] hover:bg-[#CF6343] px-8 py-4 text-sm uppercase tracking-[0.2em] font-medium text-[#F8F9FA] transition-colors duration-300"
            >
              Iniciar conversación
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  );
};