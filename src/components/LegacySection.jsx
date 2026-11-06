import { FadeIn } from './FadeIn';
import { Link } from 'react-router-dom';

export const LegacySection = () => {
  return (
    <div className="bg-[#F2F2F2] pb-0">
      
      {/* 1. Cabecera Editorial con Diagrama Integrado */}
      <section className="relative min-h-[80vh] w-full overflow-hidden bg-[#0A0A0A] flex items-center py-24">
        
        {/* Imagen de fondo oscurecida */}
        <img 
          src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1600&q=80" 
          alt="Legado Hotelero" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale"
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Columna Izquierda: Textos actualizados */}
            <FadeIn>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#804E3B] block mb-6 font-bold">
                Operación hotelera / Sucesión y continuity
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif text-[#F2F2F2] leading-[1.05] mb-8 tracking-tight">
                El legado se honra <br/>
                <span className="italic text-[#5C5E66]">operándolo</span> mejor.
              </h1>
              <p className="text-base sm:text-lg text-[#F2F2F2]/70 font-light leading-relaxed max-w-lg">
                GEOH acompaña la transición entre generaciones de propietarios. Asegura rentabilidad, conservación del activo y una operación con información clara para ambas partes.
              </p>
            </FadeIn>

            {/* Columna Derecha: Diagrama Orbital */}
            <FadeIn delay={0.2} className="relative flex justify-center items-center h-[350px] sm:h-[500px] opacity-90">
              
              {/* Órbitas ultrafinas en Terracota */}
              <div className="absolute w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] border border-[#804E3B]/20 rounded-full transform -rotate-12"></div>
              <div className="absolute w-[220px] h-[320px] sm:w-[320px] sm:h-[460px] border border-[#804E3B]/20 rounded-full transform rotate-45"></div>
              <div className="absolute w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] border border-dashed border-[#804E3B]/10 rounded-full opacity-60"></div>

              {/* Pequeños acentos sutiles */}
              <div className="absolute top-[20%] right-[25%] w-1.5 h-1.5 bg-[#804E3B] rounded-full"></div>
              <div className="absolute bottom-[20%] left-[25%] w-1 h-1 bg-[#5C5E66] rounded-full"></div>

              {/* Núcleo Central GEOH */}
              <div className="relative z-10 text-center flex flex-col items-center">
                <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-[#5C5E66] mb-3">
                  Un mismo patrimonio
                </span>
                <span className="text-6xl sm:text-[5.5rem] font-sans font-bold tracking-[0.1em] text-[#F2F2F2] leading-none mb-4 drop-shadow-md">
                  GEOH
                </span>
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#804E3B] to-transparent mb-4"></div>
                <span className="text-lg sm:text-xl font-serif italic text-[#F2F2F2]/80">
                  Una gestión profesional
                </span>
              </div>

              {/* Textos Flotantes */}
              <div className="absolute left-0 top-[10%] sm:top-[15%] text-left">
                <span className="block text-[8px] uppercase tracking-[0.15em] text-[#5C5E66] mb-1">
                  Primera generación
                </span>
                <span className="block text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#F2F2F2]/80">
                  Fundadores
                </span>
              </div>
              <div className="absolute right-0 bottom-[10%] sm:bottom-[15%] text-right">
                <span className="block text-[8px] uppercase tracking-[0.15em] text-[#5C5E66] mb-1">
                  Segunda generación
                </span>
                <span className="block text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#F2F2F2]/80">
                  Sucesores
                </span>
              </div>

            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. El Propósito (3 Principios) */}
      <section className="py-32 bg-[#F2F2F2] border-b border-[#5C5E66]/20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#804E3B] font-bold block mb-4">Nuestro Propósito</span>
              <h2 className="text-3xl sm:text-5xl font-serif text-[#2B2C30] leading-tight">
                El legado no se conserva <span className="italic text-[#5C5E66]">congelándolo.</span>
              </h2>
            </div>
            <div>
              <p className="text-lg text-[#804E3B] font-serif italic mb-6">
                Un patrimonio se conserva cuando se gestiona mejor.
              </p>
              <p className="text-sm text-[#5C5E66] font-light leading-relaxed">
                Para la primera generación, el hotel es el resultado de años de inversión. Para la segunda, una responsabilidad. GEOH establece un rumbo común: conservar la identidad del hotel y modernizar su gestión.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#5C5E66]/20 border border-[#5C5E66]/20">
            <FadeIn delay={0.1} className="bg-white p-12 hover:bg-[#F2F2F2] transition-colors">
              <span className="block font-serif text-[#5C5E66] mb-6 italic">01 / Proteger</span>
              <h3 className="text-xl font-serif text-[#2B2C30] mb-4">La identidad</h3>
              <p className="text-xs text-[#5C5E66] font-light leading-relaxed">Historia, servicio y reputación del hotel.</p>
            </FadeIn>
            <FadeIn delay={0.2} className="bg-white p-12 hover:bg-[#F2F2F2] transition-colors">
              <span className="block font-serif text-[#5C5E66] mb-6 italic">02 / Profesionalizar</span>
              <h3 className="text-xl font-serif text-[#2B2C30] mb-4">La operación</h3>
              <p className="text-xs text-[#5C5E66] font-light leading-relaxed">Procesos documentados, responsables definidos y seguimiento.</p>
            </FadeIn>
            <FadeIn delay={0.3} className="bg-white p-12 hover:bg-[#F2F2F2] transition-colors">
              <span className="block font-serif text-[#5C5E66] mb-6 italic">03 / Proyectar</span>
              <h3 className="text-xl font-serif text-[#2B2C30] mb-4">El patrimonio</h3>
              <p className="text-xs text-[#5C5E66] font-light leading-relaxed">Información financiera para decidir a largo plazo.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. Conversación Generacional */}
      <section className="py-32 bg-[#2B2C30] text-[#F2F2F2] border-b border-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#804E3B] font-bold block mb-4">Dos generaciones, una gestión</span>
            <h2 className="text-3xl sm:text-5xl font-serif mb-6">Conservar el origen. <span className="italic text-[#5C5E66]">Profesionalizar la operación.</span></h2>
            <p className="text-sm text-[#F2F2F2]/70 font-light leading-relaxed">
              Tradición y modernización no se excluyen. La experiencia de los fundadores y la visión de los sucesores se revisan con los mismos indicadores.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* 1ra Generación */}
            <FadeIn className="bg-[#0A0A0A]/40 border border-[#5C5E66]/30 p-10 sm:p-14 hover:border-[#804E3B]/50 transition-colors">
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#5C5E66] block mb-6">Primera generación / Fundadores</span>
              <h3 className="text-2xl font-serif mb-4 text-[#F2F2F2]">Lo que se conserva</h3>
              <p className="text-sm text-[#F2F2F2]/60 font-light mb-8">Reputación, relaciones con el destino, cultura de servicio y cuidado del inmueble.</p>
              <ul className="space-y-4 text-xs text-[#F2F2F2]/80">
                <li className="flex gap-3"><span className="text-[#804E3B] font-bold">+</span> Identidad y promesa de marca</li>
                <li className="flex gap-3"><span className="text-[#804E3B] font-bold">+</span> Relaciones y conocimiento del negocio</li>
                <li className="flex gap-3"><span className="text-[#804E3B] font-bold">+</span> Patrimonio y visión de largo plazo</li>
              </ul>
            </FadeIn>

            {/* Puente GEOH */}
            <FadeIn delay={0.2} className="flex flex-col items-center justify-center p-8 text-center border-y border-[#5C5E66]/20 lg:border-y-0 lg:border-x">
              <span className="text-3xl text-[#5C5E66] mb-4">↔</span>
              <span className="text-2xl font-serif text-[#804E3B] tracking-widest">GEOH</span>
              <span className="text-xs uppercase tracking-widest text-[#5C5E66] mt-2">Alinea ambas generaciones</span>
            </FadeIn>

            {/* 2da Generación */}
            <FadeIn delay={0.4} className="bg-[#0A0A0A]/40 border border-[#5C5E66]/30 p-10 sm:p-14 hover:border-[#804E3B]/50 transition-colors">
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#5C5E66] block mb-6">Segunda generación / Continuidad</span>
              <h3 className="text-2xl font-serif mb-4 text-[#F2F2F2]">Lo que se moderniza</h3>
              <p className="text-sm text-[#F2F2F2]/60 font-light mb-8">Gestión, información, toma de decisiones y capacidad de adaptación.</p>
              <ul className="space-y-4 text-xs text-[#F2F2F2]/80">
                <li className="flex gap-3"><span className="text-[#804E3B] font-bold">+</span> Gobierno y rendición de cuentas</li>
                <li className="flex gap-3"><span className="text-[#804E3B] font-bold">+</span> Disciplina comercial y financiera</li>
                <li className="flex gap-3"><span className="text-[#804E3B] font-bold">+</span> Talento, tecnología y nuevos mercados</li>
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. Un relevo con método */}
      <section className="py-32 bg-[#FFFFFF] border-b border-[#5C5E66]/20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
            <div className="max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#804E3B] font-bold block mb-4">Un relevo con método</span>
              <h2 className="text-3xl sm:text-5xl font-serif text-[#2B2C30] leading-tight">
                La continuidad no se improvisa. <span className="italic text-[#804E3B]">Se opera.</span>
              </h2>
            </div>
            <p className="text-sm text-[#5C5E66] font-light max-w-sm leading-relaxed pb-2">
              Cuatro etapas, cada una con objetivo, responsable y revisión de resultados.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#5C5E66]/20 border border-[#5C5E66]/20 shadow-sm">
            <FadeIn delay={0.1} className="bg-[#F2F2F2] p-10 relative group hover:bg-white transition-colors">
              <span className="text-lg font-serif text-[#804E3B] italic block mb-6">01 / Diagnóstico</span>
              <h3 className="text-xl font-serif text-[#2B2C30] mb-3">Diagnóstico</h3>
              <p className="text-xs text-[#5C5E66] font-light leading-relaxed">Inmueble, operación, marca, mercado y objetivos del propietario.</p>
              <span className="absolute top-10 right-8 text-[#804E3B] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-[#F2F2F2] p-10 relative group hover:bg-white transition-colors">
              <span className="text-lg font-serif text-[#804E3B] italic block mb-6">02 / Planeación</span>
              <h3 className="text-xl font-serif text-[#2B2C30] mb-3">Planeación</h3>
              <p className="text-xs text-[#5C5E66] font-light leading-relaxed">Presupuesto, metas, alcance y reglas de decisión.</p>
              <span className="absolute top-10 right-8 text-[#804E3B] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
            </FadeIn>

            <FadeIn delay={0.3} className="bg-[#F2F2F2] p-10 relative group hover:bg-white transition-colors">
              <span className="text-lg font-serif text-[#804E3B] italic block mb-6">03 / Operación</span>
              <h3 className="text-xl font-serif text-[#2B2C30] mb-3">Operación</h3>
              <p className="text-xs text-[#5C5E66] font-light leading-relaxed">Ventas, estándares, equipo, costos y mantenimiento.</p>
              <span className="absolute top-10 right-8 text-[#804E3B] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
            </FadeIn>

            <FadeIn delay={0.4} className="bg-[#F2F2F2] p-10 relative group hover:bg-white transition-colors">
              <span className="text-lg font-serif text-[#804E3B] italic block mb-6">04 / Seguimiento</span>
              <h3 className="text-xl font-serif text-[#2B2C30] mb-3">Seguimiento</h3>
              <p className="text-xs text-[#5C5E66] font-light leading-relaxed">Presupuesto contra real, variaciones y acciones con responsable.</p>
              <span className="absolute top-10 right-8 text-[#804E3B] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. El legado también se mide (Dashboard Conceptual) */}
      <section className="py-32 bg-[#F2F2F2] border-b border-[#5C5E66]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Textos y Métricas */}
            <FadeIn>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#804E3B] block mb-4 font-bold">El legado también se mide</span>
              <h2 className="text-3xl sm:text-5xl font-serif text-[#2B2C30] leading-tight mb-8">
                Decisiones con datos, <span className="italic text-[#804E3B]">no con costumbre.</span>
              </h2>
              <p className="text-sm text-[#5C5E66] font-light leading-relaxed mb-10 max-w-md">
                La operación diaria se resume en un tablero para el propietario y la dirección. Cada indicador tiene un responsable y una acción asociada.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 border border-[#5C5E66]/30 rounded-full text-[9px] font-bold tracking-widest uppercase text-[#5C5E66]">Ingreso rentable</span>
                <span className="px-4 py-2 border border-[#5C5E66]/30 rounded-full text-[9px] font-bold tracking-widest uppercase text-[#5C5E66]">GOP / EBITDA</span>
                <span className="px-4 py-2 border border-[#5C5E66]/30 rounded-full text-[9px] font-bold tracking-widest uppercase text-[#5C5E66]">Experiencia del huésped</span>
                <span className="px-4 py-2 border border-[#5C5E66]/30 rounded-full text-[9px] font-bold tracking-widest uppercase text-[#5C5E66]">Productividad</span>
                <span className="px-4 py-2 border border-[#5C5E66]/30 rounded-full text-[9px] font-bold tracking-widest uppercase text-[#5C5E66]">Cuidado del activo</span>
              </div>
            </FadeIn>

            {/* Tablero Oscuro */}
            <FadeIn delay={0.2} className="bg-[#0A0A0A] text-[#F2F2F2] p-8 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#552828] opacity-20 blur-[50px] rounded-full pointer-events-none"></div>

              <div className="flex justify-between items-center border-b border-[#F2F2F2]/10 pb-5 mb-6 relative z-10">
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#F2F2F2]">Tablero de gestión del propietario</span>
                <div className="flex items-center gap-2 text-[9px] text-[#5C5E66]">
                  <span className="w-1.5 h-1.5 bg-[#804E3B] rounded-full"></span> Modelo de seguimiento
                </div>
              </div>

              {/* Columnas actualizadas */}
              <div className="grid grid-cols-4 gap-4 text-[9px] tracking-widest uppercase text-[#5C5E66] mb-4 px-2 relative z-10">
                <span>Área</span>
                <span>Situación</span>
                <span>Responsable</span>
                <span className="text-right">Acción</span>
              </div>

              <div className="space-y-0 relative z-10">
                <div className="grid grid-cols-4 gap-4 items-center border-t border-[#F2F2F2]/10 py-4 px-2 text-[11px]">
                  <span className="flex items-center gap-3"><span className="w-1.5 h-1.5 border border-[#804E3B] rounded-full"></span> Ingresos</span>
                  <span className="text-[#F2F2F2]/60">Mix / tarifa</span>
                  <span className="text-[#F2F2F2]/60">Comercial</span>
                  <span className="text-[#804E3B] text-right text-[10px] font-bold">Decidir →</span>
                </div>
                <div className="grid grid-cols-4 gap-4 items-center border-t border-[#F2F2F2]/10 py-4 px-2 text-[11px]">
                  <span className="flex items-center gap-3"><span className="w-1.5 h-1.5 border border-[#804E3B] rounded-full"></span> Margen</span>
                  <span className="text-[#F2F2F2]/60">Real vs. plan</span>
                  <span className="text-[#F2F2F2]/60">Finanzas</span>
                  <span className="text-[#804E3B] text-right text-[10px] font-bold">Corregir →</span>
                </div>
                <div className="grid grid-cols-4 gap-4 items-center border-t border-[#F2F2F2]/10 py-4 px-2 text-[11px]">
                  <span className="flex items-center gap-3"><span className="w-1.5 h-1.5 border border-[#804E3B] rounded-full"></span> Experiencia</span>
                  <span className="text-[#F2F2F2]/60">Comentarios</span>
                  <span className="text-[#F2F2F2]/60">Operación</span>
                  <span className="text-[#804E3B] text-right text-[10px] font-bold">Resolver →</span>
                </div>
                <div className="grid grid-cols-4 gap-4 items-center border-t border-[#F2F2F2]/10 py-4 px-2 text-[11px]">
                  <span className="flex items-center gap-3"><span className="w-1.5 h-1.5 border border-[#804E3B] rounded-full"></span> Activo</span>
                  <span className="text-[#F2F2F2]/60">Disponibilidad</span>
                  <span className="text-[#F2F2F2]/60">Mantenimiento</span>
                  <span className="text-[#804E3B] text-right text-[10px] font-bold">Priorizar →</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between gap-4 border-t border-[#F2F2F2]/20 mt-2 pt-5 text-[10px] text-[#5C5E66] relative z-10">
                <span><b className="text-[#F2F2F2]">Presupuesto</b> · Real · Variación · Acción</span>
                <span>Con la frecuencia acordada</span>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* 6. NUEVO CTA DE LEGADO (Claro y Elegante) */}
      <section className="py-24 bg-[#F2F2F2] border-t border-[#5C5E66]/20 mt-auto">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#804E3B] font-bold block mb-4">
              Conversación confidencial
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif leading-tight text-[#2B2C30] mb-8">
              Preparar su hotel para el futuro <br className="hidden sm:block" />
              <span className="italic text-[#5C5E66] font-light">empieza con un diagnóstico.</span>
            </h2>
            <Link 
              to="/contacto" 
              className="inline-block bg-[#804E3B] px-10 py-5 text-xs uppercase tracking-[0.2em] font-medium text-white hover:bg-[#2B2C30] transition-all duration-300 shadow-sm border border-[#804E3B] hover:border-[#2B2C30]"
            >
              Iniciar proceso
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  );
};