import { useId, useState } from 'react';

/*
  Owner Centricity — Diagrama de Euler Interactivo
  VERSIÓN COMPLETA: 4 Pilares + Centro (Propietario) interactivos con Modales/Tooltips.
*/

const COLORS = {
  bg: '#FFFFFF',         
  circleBg: 'rgba(128, 78, 59, 0.03)', 
  ink: '#2B2C30',        
  muted: '#5C5E66',      
  terracota: '#804E3B',  
  borgoña: '#552828',    
};

const purpose = 'Generamos valor para el propietario en el corto y en el largo plazo.';

const stages = [
  { title: 'Diagnóstico', desc: 'El hotel y su mercado.' },
  { title: 'Estrategia', desc: 'Potencial, metas y prioridades.' },
  { title: 'Ejecución', desc: 'Operación diaria y resultados.' },
  { title: 'Control financiero', desc: 'Presupuesto, flujo y sostenibilidad.' },
  { title: 'Mejora continua', desc: 'Procesos más simples con apoyo de tecnología.' },
];

const D = 85; 
const RP = 145; 
const CX = 600;
const CY = 400;
const W = 1200;
const H = 790;
const ORBIT = 275; 

// Textos de los 4 pilares externos
const pillars = [
  {
    title: 'Centricidad en la Continuidad',
    desc: 'Preservamos la identidad del hotel y lo preparamos para la siguiente generación.',
    dx: 0,
    dy: -D,
    label: { x: CX, y: 225, lines: ['Centricidad en', 'la Continuidad'] },
  },
  {
    title: 'Centricidad en el Valor del activo',
    desc: 'Mantenimiento y reinversión planeados para conservar y aumentar el valor del inmueble.',
    dx: D,
    dy: 0,
    label: { x: 775, y: CY, lines: ['Centricidad en el', 'Valor del activo'] },
  },
  {
    title: 'Centricidad en los Clientes',
    desc: 'Satisfacción medida y atendida, porque un huésped que regresa reduce el costo de venta.',
    dx: 0,
    dy: D,
    label: { x: CX, y: 575, lines: ['Centricidad en', 'los Clientes'] },
  },
  {
    title: 'Centricidad en el Talento',
    desc: 'Gerentes capaces de leer indicadores, decidir y responder por sus resultados.',
    dx: -D,
    dy: 0,
    label: { x: 425, y: CY, lines: ['Centricidad en', 'el Talento'] },
  },
];

// Datos del pilar central (Propietario)
const ownerData = {
  title: 'Centricidad en el Propietario',
  desc: 'Todas las decisiones operativas, comerciales y financieras convergen en un único fin: proteger su patrimonio y maximizar su utilidad.'
};

// Posición radial de los círculos numerados
const stagePos = (i) => {
  const a = (i * 72 * Math.PI) / 180;
  return { x: CX + ORBIT * Math.sin(a), y: CY - ORBIT * Math.cos(a) };
};

// Posicionamiento fluido por porcentajes
const labelStyle = (i) => {
  const { x, y } = stagePos(i);
  const left = `${(x / W) * 100}%`;
  const top = `${(y / H) * 100}%`;

  if (i === 0) return { left, top, transform: 'translate(-50%, -100%)', marginTop: '-25px', width: '280px', textAlign: 'center' };
  if (i === 1) return { left, top, transform: 'translate(0, -50%)', marginLeft: '35px', width: '240px' };
  if (i === 2) return { left, top, transform: 'translate(-20%, 0)', marginTop: '30px', width: '240px', textAlign: 'center' };
  if (i === 3) return { left, top, transform: 'translate(-80%, 0)', marginTop: '30px', width: '240px', textAlign: 'center' };
  if (i === 4) return { left, top, transform: 'translate(-100%, -50%)', marginLeft: '-35px', width: '240px', textAlign: 'right' };
};

// DIAGRAMA EN SVG
const Figure = ({ compact = false, activePillar, setActivePillar, setMousePos }) => {
  const haloId = `oc-halo-${useId().replace(/:/g, '')}`;
  const dotR = compact ? 26 : 15; 
  const dotFont = compact ? 28 : 16; 

  return (
    <svg
      viewBox={compact ? '250 60 700 680' : `0 0 ${W} ${H}`}
      className="w-full h-full block relative"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={haloId}>
          <stop offset="0" stopColor={COLORS.terracota} stopOpacity="0.2" />
          <stop offset="1" stopColor={COLORS.terracota} stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx={CX} cy={CY} rx="300" ry="180" transform={`rotate(-28 ${CX} ${CY})`} fill="none" stroke="rgba(85,40,40,0.06)" />
      <ellipse cx={CX} cy={CY} rx="300" ry="180" transform={`rotate(28 ${CX} ${CY})`} fill="none" stroke="rgba(85,40,40,0.06)" />
      <circle cx={CX} cy={CY} r={ORBIT} fill="none" stroke={COLORS.terracota} strokeOpacity="0.3" strokeDasharray="3 8" />

      {/* Círculos Interactivos (Los 4 Pilares) */}
      {pillars.map((p, idx) => {
        const isActive = activePillar === idx;
        
        return (
          <g
            key={p.title}
            onMouseEnter={(e) => {
              setActivePillar(idx);
              if (setMousePos) setMousePos({ x: e.clientX, y: e.clientY });
            }}
            onMouseMove={(e) => {
              if (setMousePos) setMousePos({ x: e.clientX, y: e.clientY });
            }}
            onMouseLeave={() => setActivePillar(null)}
            onClick={() => setActivePillar(isActive ? null : idx)}
            className="cursor-pointer"
            style={{ transformOrigin: `${CX + p.dx}px ${CY + p.dy}px`, transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}
          >
            <circle
              cx={CX + p.dx}
              cy={CY + p.dy}
              r={isActive ? RP * 1.05 : RP} 
              fill={isActive ? 'rgba(128, 78, 59, 0.08)' : COLORS.circleBg}
              stroke={isActive ? COLORS.borgoña : COLORS.terracota}
              strokeWidth={isActive ? "2.5" : "1.5"}
              strokeOpacity={isActive ? "1" : "0.4"}
              style={{ transition: 'all 0.3s ease' }}
            />
            {p.label.lines.map((line, k) => (
              <text
                key={`${p.title}-${k}`}
                x={p.label.x}
                y={p.label.y + (k - (p.label.lines.length - 1) / 2) * 20}
                dy="0.35em"
                textAnchor="middle"
                fontSize="16"
                className="font-serif tracking-wide"
                style={{ fill: isActive ? COLORS.borgoña : COLORS.ink, fontWeight: isActive ? '700' : '400', transition: 'all 0.3s ease' }}
              >
                {line}
              </text>
            ))}
          </g>
        );
      })}

      {/* Núcleo Propietario (AHORA INTERACTIVO) */}
      <g 
        className="cursor-pointer"
        onMouseEnter={(e) => {
          setActivePillar('owner');
          if (setMousePos) setMousePos({ x: e.clientX, y: e.clientY });
        }}
        onMouseMove={(e) => {
          if (setMousePos) setMousePos({ x: e.clientX, y: e.clientY });
        }}
        onMouseLeave={() => setActivePillar(null)}
        onClick={() => setActivePillar(activePillar === 'owner' ? null : 'owner')}
      >
        {/* Círculo invisible/sutil para que reaccione al hover */}
        <circle 
          cx={CX} 
          cy={CY} 
          r={RP * 0.75} 
          fill={activePillar === 'owner' ? 'rgba(128, 78, 59, 0.1)' : 'transparent'} 
          style={{ transition: 'all 0.3s ease' }} 
        />
        {['Centricidad en', 'el Propietario'].map((line, k, arr) => (
          <text
            key={line}
            x={CX}
            y={CY + (k - (arr.length - 1) / 2) * 24}
            dy="0.35em"
            textAnchor="middle"
            fontSize="20"
            className="font-serif font-bold"
            style={{ 
              fill: COLORS.borgoña,
              transform: activePillar === 'owner' ? 'scale(1.08)' : 'scale(1)',
              transformOrigin: `${CX}px ${CY}px`,
              transition: 'all 0.3s ease'
            }}
          >
            {line}
          </text>
        ))}
      </g>

      {/* Puntos y números */}
      {stages.map((s, i) => {
        const { x, y } = stagePos(i);
        return (
          <g key={s.title} className="pointer-events-none">
            <circle cx={x} cy={y} r={dotR * 2.2} fill={`url(#${haloId})`} />
            <circle cx={x} cy={y} r={dotR} style={{ fill: COLORS.terracota }} />
            <text x={x} y={y} dy="0.35em" textAnchor="middle" fontSize={dotFont} fontWeight="700" style={{ fill: '#FFFFFF' }}>
              {i + 1}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

const fade = 'linear-gradient(180deg, transparent, #000 22%, #000 78%, transparent)';
const Rings = ({ extend, cy, radii }) => (
  <svg
    aria-hidden="true"
    className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 w-[100vw]"
    style={{ top: -extend, height: `calc(100% + ${extend * 2}px)`, maskImage: fade, WebkitMaskImage: fade }}
  >
    {radii.map((r, i) => (
      <circle key={r} cx="50%" cy={cy} r={r} fill="none" stroke={`rgba(128, 78, 59, ${(0.05 - i * 0.008).toFixed(3)})`} />
    ))}
  </svg>
);

export const OwnerCentricity = () => {
  const [activePillar, setActivePillar] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Función para obtener los datos correctos según el pilar seleccionado (0-3 o 'owner')
  const getActiveData = () => {
    if (activePillar === 'owner') return ownerData;
    if (activePillar !== null) return pillars[activePillar];
    return null;
  };

  const activeData = getActiveData();

  return (
    <section
      aria-labelledby="oc-title"
      className="relative isolate overflow-hidden border-y border-[#5C5E66]/20 py-24 sm:py-32 w-full"
      style={{ backgroundColor: COLORS.bg }}
    >
      <div className="absolute inset-0 -z-20 w-full h-full bg-[radial-gradient(circle_at_center,rgba(128,78,59,0.03)_0%,transparent_80%)]"></div>

      <div className="mx-auto w-full max-w-7xl px-6 relative z-10">
        
        <header className="mx-auto mb-16 xl:mb-20 max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em]" style={{ color: COLORS.terracota }}>
            Modelo de gestión
          </p>
          <h2 id="oc-title" className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight" style={{ color: COLORS.borgoña }}>
            El propietario al centro
          </h2>
          <div aria-hidden="true" className="mx-auto mt-6 h-px w-40" style={{ background: `linear-gradient(90deg, transparent, ${COLORS.terracota}, transparent)` }} />
          <p className="mt-8 font-serif text-xl sm:text-2xl italic" style={{ color: COLORS.terracota }}>
            {purpose}
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: COLORS.muted }}>
            Cinco etapas ordenan la gestión. Cuatro pilares la sostienen, alrededor de los intereses del propietario.
          </p>
          <p className="mt-6 inline-flex items-center gap-2 text-xs sm:text-sm text-[#804E3B]/80 bg-[#804E3B]/5 px-5 py-2 rounded-full border border-[#804E3B]/10 animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
            </svg>
            Interactúe con el diagrama para ver más
          </p>
        </header>

        {/* ===== Diagrama Desktop ===== */}
        <div 
          className="relative mx-auto hidden xl:block w-full" 
          style={{ maxWidth: '1200px', maxHeight: '85vh', aspectRatio: '1200/790' }}
        >
          <Rings extend={400} cy={CY + 400} radii={[340, 430, 540, 670, 820, 990]} />
          <Figure activePillar={activePillar} setActivePillar={setActivePillar} setMousePos={setMousePos} />
          
          <ol role="list" aria-label="Etapas de gestión" className="pointer-events-none absolute inset-0">
            {stages.map((s, i) => (
              <li key={s.title} className="absolute" style={labelStyle(i)}>
                <h4 className="font-serif text-lg lg:text-xl leading-tight mb-1" style={{ color: COLORS.borgoña }}>
                  {s.title}
                </h4>
                <p className="text-xs lg:text-sm leading-snug" style={{ color: COLORS.muted }}>{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* ===== Diagrama Móvil ===== */}
        <div className="xl:hidden pb-12">
          <div className="relative mx-auto w-full max-w-[420px]">
            <Rings extend={240} cy="50%" radii={[250, 340, 450, 580, 730, 900]} />
            <Figure compact activePillar={activePillar} setActivePillar={setActivePillar} />
          </div>
          <ol role="list" className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2 md:gap-x-12">
            {stages.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg font-bold shadow-sm"
                  style={{ backgroundColor: COLORS.terracota, color: '#FFFFFF' }}
                >
                  {i + 1}
                </span>
                <div>
                  <h4 className="font-serif text-xl leading-tight mb-1" style={{ color: COLORS.borgoña }}>
                    {s.title}
                  </h4>
                  <p className="text-sm leading-snug" style={{ color: COLORS.muted }}>{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

      </div>

      {/* =========================================
          COMPONENTES MODALES (TOOLTIP INTERACTIVO)
      ============================================= */}
      {activeData && (
        <>
          {/* TOOLTIP ESCRITORIO */}
          <div 
            className="hidden xl:block fixed z-50 bg-white/95 backdrop-blur-md shadow-2xl p-6 rounded-xl border border-[#804E3B]/20 w-80 pointer-events-none transition-opacity duration-200"
            style={{ top: mousePos.y + 15, left: mousePos.x + 15 }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#804E3B] opacity-10 blur-xl rounded-full"></div>
            <h4 className="font-serif text-xl leading-tight text-[#804E3B] mb-2 relative z-10">
              {activeData.title}
            </h4>
            <p className="text-sm leading-relaxed text-[#5C5E66] relative z-10">
              {activeData.desc}
            </p>
          </div>

          {/* MODAL MÓVIL */}
          <div 
            className="xl:hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A0A0A]/50 backdrop-blur-sm transition-opacity"
            onClick={() => setActivePillar(null)}
          >
            <div 
              className="bg-white shadow-2xl p-8 rounded-xl border border-[#804E3B]/20 w-full max-w-sm relative overflow-hidden pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#804E3B] opacity-10 blur-2xl rounded-full"></div>
              <button 
                onClick={() => setActivePillar(null)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#5C5E66]/10 text-[#5C5E66] hover:bg-[#804E3B] hover:text-white transition-colors"
              >
                <span className="sr-only">Cerrar</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              <h4 className="font-serif text-2xl leading-tight text-[#804E3B] mb-4 relative z-10 pr-6">
                {activeData.title}
              </h4>
              <p className="text-base leading-relaxed text-[#5C5E66] relative z-10">
                {activeData.desc}
              </p>
            </div>
          </div>
        </>
      )}
    </section>
  );
};