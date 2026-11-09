import { useId, useState } from 'react';

/*
  Owner Centricity — diagrama de Euler interactivo.
  Estilo Original (Negro/Terracota) con líneas de muy baja opacidad para un aspecto más limpio.
*/

const purpose = 'Creamos valor para el propietario hoy y a largo plazo.';

const stages = [
  { title: 'Entendemos', desc: 'El negocio y su entorno.' },
  { title: 'Visualizamos', desc: 'El potencial y la estrategia.' },
  { title: 'Ejecutamos', desc: 'La operación y los resultados.' },
  { title: 'Disciplina y armonía', desc: 'Gestión financiera, equilibrio y sostenibilidad.' },
  { title: 'Simplificamos procesos', desc: 'Con tecnología e innovación.' },
];

/* Escala base del diagrama */
const D = 85; 
const RP = 145; 
const CX = 600;
const CY = 400;
const W = 1200;
const H = 790;
const ORBIT = 275; 

// Textos interactivos de los 4 pilares
const pillars = [
  {
    title: 'Centricidad en Legado',
    desc: 'Preservamos la visión y la esencia, construyendo valor sostenible para las futuras generaciones.',
    dx: 0,
    dy: -D,
    label: { x: CX, y: 225, lines: ['Centricidad', 'en Legado'] },
  },
  {
    title: 'Centricidad en el Activo',
    desc: 'Protegemos y maximizamos el valor del activo con una gestión eficiente, responsable y orientada al largo plazo.',
    dx: D,
    dy: 0,
    label: { x: 775, y: CY, lines: ['Centricidad', 'en el Activo'] },
  },
  {
    title: 'Centricidad en Clientes',
    desc: 'Brindamos experiencias memorables que generan satisfacción, lealtad y valor sostenible para el negocio.',
    dx: 0,
    dy: D,
    label: { x: CX, y: 575, lines: ['Centricidad', 'en Clientes'] },
  },
  {
    title: 'Centricidad en Talento',
    desc: 'Desarrollamos profesionales que gestionan, no solo ejecutan, impulsando una cultura de aprendizaje y crecimiento continuo.',
    dx: -D,
    dy: 0,
    label: { x: 425, y: CY, lines: ['Centricidad', 'en Talento'] },
  },
];

// Elemento central interactivo
const centerElement = {
  title: 'Centricidad en el Propietario',
  desc: 'Todas nuestras decisiones operativas y estratégicas convergen en un único objetivo: proteger y maximizar el valor de su patrimonio.',
  lines: ['Centricidad en', 'el Propietario']
};

const stagePos = (i) => {
  const a = (i * 72 * Math.PI) / 180;
  return { x: CX + ORBIT * Math.sin(a), y: CY - ORBIT * Math.cos(a) };
};

const labelStyle = (i) => {
  const { x, y } = stagePos(i);
  if (i === 0) return { left: x - 160, width: 320, bottom: H - (y - 25), textAlign: 'center' };
  if (i === 1) return { left: x + 35, width: W - (x + 35), top: y - 12 };
  if (i === 4) return { left: 0, width: x - 35, top: y - 12, textAlign: 'right' };
  return { left: x - 130, width: 260, top: y + 25, textAlign: 'center' };
};

/* ---------- Diagrama ---------- */
const Figure = ({ compact = false, hoveredPillar, setHoveredPillar }) => {
  const haloId = `oc-halo-${useId().replace(/:/g, '')}`;
  const dotR = compact ? 26 : 15; 
  const dotFont = compact ? 28 : 16; 

  return (
    <svg
      viewBox={compact ? '250 60 700 680' : `0 0 ${W} ${H}`}
      width={compact ? undefined : W}
      height={compact ? undefined : H}
      className={compact ? 'relative block h-auto w-full' : 'relative block'}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={haloId}>
          <stop offset="0" stopColor="#151617" stopOpacity="0.15" />
          <stop offset="1" stopColor="#151617" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Órbitas decorativas centrales: OPACIDAD MUY REDUCIDA */}
      <ellipse cx={CX} cy={CY} rx="300" ry="180" transform={`rotate(-28 ${CX} ${CY})`} fill="none" stroke="rgba(21, 22, 23, 0.06)" strokeWidth="1" />
      <ellipse cx={CX} cy={CY} rx="300" ry="180" transform={`rotate(28 ${CX} ${CY})`} fill="none" stroke="rgba(21, 22, 23, 0.06)" strokeWidth="1" />
      
      {/* Órbita principal de etapas: OPACIDAD REDUCIDA */}
      <circle cx={CX} cy={CY} r={ORBIT} fill="none" stroke="rgba(21, 22, 23, 0.2)" strokeWidth="1" strokeDasharray="4 6" />

      {/* Pilares interactivos con líneas tenues */}
      {pillars.map((p, idx) => {
        const isHovered = hoveredPillar === idx;
        return (
          <g 
            key={p.title}
            onMouseEnter={() => !compact && setHoveredPillar(idx)}
            onMouseLeave={() => !compact && setHoveredPillar(null)}
            className={!compact ? "cursor-pointer transition-all duration-300" : ""}
            style={{ opacity: hoveredPillar !== null && !isHovered && !compact ? 0.2 : 1 }}
          >
            <circle
              cx={CX + p.dx}
              cy={CY + p.dy}
              r={RP}
              fill={isHovered && !compact ? "rgba(21, 22, 23, 0.04)" : "rgba(21, 22, 23, 0.01)"}
              stroke={isHovered && !compact ? "rgba(21, 22, 23, 0.6)" : "rgba(21, 22, 23, 0.12)"}
              strokeWidth={isHovered && !compact ? "2" : "1"}
              className="transition-all duration-300"
            />
            {!compact && p.label.lines.map((line, k) => (
              <text
                key={`${p.title}-${k}`}
                x={p.label.x}
                y={p.label.y + (k - (p.label.lines.length - 1) / 2) * 20}
                dy="0.35em"
                textAnchor="middle"
                fontSize="18"
                className="font-serif tracking-wide transition-all duration-300 font-bold"
                style={{ fill: isHovered ? '#CF6343' : '#151617' }}
              >
                {line}
              </text>
            ))}
          </g>
        );
      })}

      {/* NÚCLEO INTERACTIVO: Centricidad en el Propietario */}
      {!compact && (
        <g
          onMouseEnter={() => setHoveredPillar('center')}
          onMouseLeave={() => setHoveredPillar(null)}
          className="cursor-pointer transition-all duration-300"
          style={{ opacity: hoveredPillar !== null && hoveredPillar !== 'center' ? 0.2 : 1 }}
        >
          {/* Zona de hover invisible/sutil en el centro */}
          <circle
            cx={CX}
            cy={CY}
            r={85}
            fill={hoveredPillar === 'center' ? "rgba(21, 22, 23, 0.06)" : "transparent"}
            className="transition-all duration-300"
          />
          {centerElement.lines.map((line, k) => (
            <text
              key={line}
              x={CX}
              y={CY + (k - 0.5) * 26}
              dy="0.35em"
              textAnchor="middle"
              fontSize="22"
              className="font-serif font-black transition-all duration-300"
              style={{ fill: hoveredPillar === 'center' ? '#CF6343' : '#151617' }}
            >
              {line}
            </text>
          ))}
        </g>
      )}

      {/* Puntos y números de las etapas: RESTAURADOS A NEGRO SÓLIDO */}
      {stages.map((s, i) => {
        const { x, y } = stagePos(i);
        return (
          <g key={s.title}>
            <circle cx={x} cy={y} r={dotR * 2.2} fill={`url(#${haloId})`} />
            <circle cx={x} cy={y} r={dotR} style={{ fill: '#151617' }} />
            <text
              x={x}
              y={y}
              dy="0.35em"
              textAnchor="middle"
              fontSize={dotFont}
              fontWeight="700"
              style={{ fill: '#FFFFFF' }}
            >
              {i + 1}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

export const OwnerCentricity = () => {
  const [hoveredPillar, setHoveredPillar] = useState(null);

  return (
    <section
      aria-labelledby="oc-title"
      className="relative isolate overflow-hidden py-32 w-full bg-white border-y border-[#767980]/20"
    >
      <div className="absolute inset-0 -z-20 w-full h-full bg-[radial-gradient(circle_at_center,rgba(21,22,23,0.02)_0%,transparent_80%)]"></div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* ENCABEZADO ORIGINAL */}
        <header className="mx-auto mb-20 max-w-3xl text-center xl:mb-16">
          <p className="mb-6 text-xl font-bold text-[#CF6343] tracking-[0.2em] uppercase">Modelo de Gestión</p>
          <h2 id="oc-title" className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight text-[#151617]">
            El ecosistema del valor
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto mt-8 h-[2px] w-48"
            style={{ background: 'linear-gradient(90deg, transparent, #151617, transparent)' }}
          />
          <p className="mt-10 font-serif text-2xl sm:text-3xl italic text-[#2E2F32]">{purpose}</p>
          <p className="mt-6 text-lg sm:text-xl leading-relaxed text-[#767980]">
            Cinco etapas guían nuestra gestión, y cuatro pilares se unen en el centro, en torno al propietario.
          </p>
        </header>

        {/* ===== ≥ 1280 px: Diagrama interactivo ===== */}
        <div 
          className="relative mx-auto hidden xl:block origin-top" 
          style={{ width: W, height: H, transform: 'scale(0.85)', marginBottom: '-118px' }}
        >
          <Figure 
            hoveredPillar={hoveredPillar} 
            setHoveredPillar={setHoveredPillar} 
          />

          {/* Modal / Tooltip dinámico: RESTAURADO A NEGRO */}
          {hoveredPillar !== null && (
            <div 
              className="absolute pointer-events-none z-50 bg-[#151617] p-6 rounded shadow-2xl transition-opacity duration-300 max-w-sm text-center"
              style={{
                top: hoveredPillar === 'center' ? CY - 20 : CY + pillars[hoveredPillar].dy - 20,
                left: hoveredPillar === 'center' ? CX : CX + pillars[hoveredPillar].dx,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <h4 className="font-serif text-2xl text-[#CF6343] mb-3">
                {hoveredPillar === 'center' ? centerElement.title : pillars[hoveredPillar].title}
              </h4>
              <p className="text-base text-white leading-relaxed">
                {hoveredPillar === 'center' ? centerElement.desc : pillars[hoveredPillar].desc}
              </p>
            </div>
          )}

          <h3 className="sr-only">Etapas de gestión</h3>
          <ol role="list" aria-label="Etapas de gestión">
            {stages.map((s, i) => (
              <li key={s.title} className="absolute transition-opacity duration-300" 
                  style={{...labelStyle(i), opacity: hoveredPillar !== null ? 0.15 : 1}}>
                <h4 className="font-serif text-2xl leading-tight text-[#151617] mb-2 font-bold">
                  <span className="sr-only">Etapa {i + 1}: </span>
                  {s.title}
                </h4>
                <p className="text-base leading-relaxed text-[#2E2F32] font-medium">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* ===== < 1280 px: Versión Móvil/Compacta ===== */}
        <div className="xl:hidden">
          <div className="relative mx-auto w-full max-w-[420px]">
            <Figure compact hoveredPillar={null} setHoveredPillar={() => {}} />
          </div>

          <h3 className="mt-24 text-center font-serif text-3xl sm:text-4xl text-[#151617]">
            Cinco etapas de gestión
          </h3>
          <ol role="list" className="mx-auto mt-12 grid max-w-4xl gap-10 md:grid-cols-2 md:gap-x-14">
            {stages.map((s, i) => (
              <li key={s.title} className="flex gap-5 items-start">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#151617] text-xl font-bold text-white shadow-md"
                >
                  {i + 1}
                </span>
                <div>
                  <h4 className="font-serif text-2xl leading-tight text-[#151617] mb-2 font-bold">
                    <span className="sr-only">Etapa {i + 1}: </span>
                    {s.title}
                  </h4>
                  <p className="text-base leading-relaxed text-[#2E2F32]">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

      </div>
    </section>
  );
};