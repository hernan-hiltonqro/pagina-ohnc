import { useId } from 'react';

/*
  Owner Centricity — diagrama de Euler, estático y accesible.
  VERSIÓN REFINADA: Escala reducida para mayor espacio en blanco y menor peso visual.
*/

const COLORS = {
  bg: '#09090b',
  ink: '#f4f4f5',
  muted: '#a1a1aa',
  gold: '#e8d5a5',
  line: 'rgba(232, 213, 165, 0.3)',
};

const purpose = 'Creamos valor para el propietario hoy y a largo plazo.';

const stages = [
  { title: 'Entendemos', desc: 'El negocio y su entorno.' },
  { title: 'Visualizamos', desc: 'El potencial y la estrategia.' },
  { title: 'Ejecutamos', desc: 'La operación y los resultados.' },
  { title: 'Disciplina y armonía', desc: 'Gestión financiera, equilibrio y sostenibilidad.' },
  { title: 'Simplificamos procesos', desc: 'Con tecnología e innovación.' },
];

/* Escala reducida para dar más aire al diagrama */
const D = 85; // Separación del centro (antes 100)
const RP = 145; // Radio de los círculos (antes 175)
const CX = 600;
const CY = 400;
const W = 1200;
const H = 790;
const ORBIT = 275; // Radio de la órbita (antes 305)

const pillars = [
  {
    title: 'Legado',
    desc: 'Preservamos la visión y la esencia, construyendo valor sostenible para las futuras generaciones.',
    dx: 0,
    dy: -D,
    label: { x: CX, y: 225, lines: ['Legado'] },
  },
  {
    title: 'Cuidado del activo',
    desc: 'Protegemos y maximizamos el valor del activo con una gestión eficiente, responsable y orientada al largo plazo.',
    dx: D,
    dy: 0,
    label: { x: 775, y: CY, lines: ['Cuidado', 'del activo'] },
  },
  {
    title: 'Cuidado de los clientes',
    desc: 'Brindamos experiencias memorables que generan satisfacción, lealtad y valor sostenible para el negocio.',
    dx: 0,
    dy: D,
    label: { x: CX, y: 575, lines: ['Cuidado de los', 'clientes'] },
  },
  {
    title: 'Talento',
    desc: 'Desarrollamos profesionales que gestionan, no solo ejecutan, impulsando una cultura de aprendizaje y crecimiento continuo.',
    dx: -D,
    dy: 0,
    label: { x: 425, y: CY, lines: ['Talento'] },
  },
];

// Posición de los puntos sobre la órbita
const stagePos = (i) => {
  const a = (i * 72 * Math.PI) / 180;
  return { x: CX + ORBIT * Math.sin(a), y: CY - ORBIT * Math.cos(a) };
};

// Rótulos HTML de las etapas (ajustados al nuevo tamaño)
const labelStyle = (i) => {
  const { x, y } = stagePos(i);
  if (i === 0) return { left: x - 160, width: 320, bottom: H - (y - 25), textAlign: 'center' };
  if (i === 1) return { left: x + 35, width: W - (x + 35), top: y - 12 };
  if (i === 4) return { left: 0, width: x - 35, top: y - 12, textAlign: 'right' };
  return { left: x - 130, width: 260, top: y + 25, textAlign: 'center' };
};

/* ---------- Diagrama ---------- */
const Figure = ({ compact = false }) => {
  const haloId = `oc-halo-${useId().replace(/:/g, '')}`;
  const dotR = compact ? 26 : 15; // Reducidos
  const dotFont = compact ? 28 : 16; // Reducidos

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
          <stop offset="0" stopColor={COLORS.gold} stopOpacity="0.3" />
          <stop offset="1" stopColor={COLORS.gold} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Órbitas decorativas más pequeñas */}
      <ellipse cx={CX} cy={CY} rx="300" ry="180" transform={`rotate(-28 ${CX} ${CY})`} fill="none" stroke="rgba(232,213,165,0.15)" />
      <ellipse cx={CX} cy={CY} rx="300" ry="180" transform={`rotate(28 ${CX} ${CY})`} fill="none" stroke="rgba(232,213,165,0.15)" />

      {/* Órbita de las etapas */}
      <circle cx={CX} cy={CY} r={ORBIT} fill="none" stroke="rgba(232,213,165,0.3)" strokeDasharray="3 8" />

      {/* Pilares */}
      {pillars.map((p) => (
        <circle
          key={p.title}
          cx={CX + p.dx}
          cy={CY + p.dy}
          r={RP}
          fill="rgba(232,213,165,0.03)"
          stroke="rgba(232,213,165,0.5)"
          strokeWidth="1"
        />
      ))}

      {/* Textos internos */}
      {!compact && (
        <g>
          {pillars.map((p) =>
            p.label.lines.map((line, k) => (
              <text
                key={`${p.title}-${k}`}
                x={p.label.x}
                y={p.label.y + (k - (p.label.lines.length - 1) / 2) * 20}
                dy="0.35em"
                textAnchor="middle"
                fontSize="16"
                className="font-serif tracking-wide"
                style={{ fill: 'var(--oc-ink)' }}
              >
                {line}
              </text>
            ))
          )}
          {['Owner', 'Centricity'].map((line, k) => (
            <text
              key={line}
              x={CX}
              y={CY + (k - 0.5) * 24}
              dy="0.35em"
              textAnchor="middle"
              fontSize="20"
              className="font-serif"
              style={{ fill: 'var(--oc-gold)' }}
            >
              {line}
            </text>
          ))}
        </g>
      )}

      {/* Puntos y números */}
      {stages.map((s, i) => {
        const { x, y } = stagePos(i);
        return (
          <g key={s.title}>
            <circle cx={x} cy={y} r={dotR * 2.2} fill={`url(#${haloId})`} />
            <circle cx={x} cy={y} r={dotR} style={{ fill: 'var(--oc-gold)' }} />
            <text
              x={x}
              y={y}
              dy="0.35em"
              textAnchor="middle"
              fontSize={dotFont}
              fontWeight="700"
              style={{ fill: 'var(--oc-bg)' }}
            >
              {i + 1}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

/* ---------- Fondo de Anillos ---------- */
const fade = 'linear-gradient(180deg, transparent, #000 22%, #000 78%, transparent)';

const Rings = ({ extend, cy, radii }) => (
  <svg
    aria-hidden="true"
    className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 w-[100vw]"
    style={{
      top: -extend,
      height: `calc(100% + ${extend * 2}px)`,
      maskImage: fade,
      WebkitMaskImage: fade,
    }}
  >
    {radii.map((r, i) => (
      <circle
        key={r}
        cx="50%"
        cy={cy}
        r={r}
        fill="none"
        stroke={`rgba(232, 213, 165, ${(0.07 - i * 0.012).toFixed(3)})`}
      />
    ))}
  </svg>
);

export const OwnerCentricity = () => (
  <section
    aria-labelledby="oc-title"
    className="relative isolate overflow-hidden border-y border-zinc-800 py-24 text-[color:var(--oc-ink)] sm:py-32 w-full bg-[#09090b]"
    style={{
      '--oc-bg': COLORS.bg,
      '--oc-ink': COLORS.ink,
      '--oc-muted': COLORS.muted,
      '--oc-gold': COLORS.gold,
      '--oc-line': COLORS.line,
    }}
  >
    {/* Fondo expansivo */}
    <div className="absolute inset-0 -z-20 w-full h-full bg-[radial-gradient(circle_at_center,rgba(162,118,66,0.06)_0%,transparent_80%)]"></div>

    <div className="mx-auto max-w-7xl px-6 relative z-10">
      <header className="mx-auto mb-16 max-w-3xl text-center xl:mb-12">
        <p className="mb-4 text-xs font-medium text-[color:var(--oc-gold)] tracking-[0.2em] uppercase">Filosofía operativa</p>
        <h2 id="oc-title" className="font-serif text-3xl sm:text-4xl leading-tight text-zinc-50">
          El ecosistema del valor
        </h2>
        <div
          aria-hidden="true"
          className="mx-auto mt-6 h-px w-40"
          style={{ background: 'linear-gradient(90deg, transparent, var(--oc-gold), transparent)' }}
        />
        <p className="mt-8 font-serif text-xl sm:text-2xl italic text-[color:var(--oc-gold)]">{purpose}</p>
        <p className="mt-4 text-base leading-relaxed text-[color:var(--oc-muted)]">
          Cinco etapas guían nuestra gestión, y cuatro pilares se unen en el centro, en torno al propietario.
        </p>
      </header>

      {/* ===== ≥ 1280 px: Diagrama ===== */}
      <div className="relative mx-auto hidden xl:block" style={{ width: W, height: H }}>
        <Rings extend={400} cy={CY + 400} radii={[340, 430, 540, 670, 820, 990]} />
        <Figure />
        <h3 className="sr-only">Etapas de gestión</h3>
        <ol role="list" aria-label="Etapas de gestión">
          {stages.map((s, i) => (
            <li key={s.title} className="absolute" style={labelStyle(i)}>
              <h4 className="font-serif text-xl leading-tight text-zinc-50 mb-1">
                <span className="sr-only">Etapa {i + 1}: </span>
                {s.title}
              </h4>
              <p className="text-sm leading-snug text-[color:var(--oc-muted)]">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* ===== < 1280 px: Versión Móvil/Compacta ===== */}
      <div className="xl:hidden">
        <div className="relative mx-auto w-full max-w-[420px]">
          <Rings extend={240} cy="50%" radii={[250, 340, 450, 580, 730, 900]} />
          <Figure compact />
        </div>

        <h3 className="mt-16 text-center font-serif text-2xl text-zinc-50 sm:text-3xl">
          Cinco etapas de gestión
        </h3>
        <ol role="list" className="mx-auto mt-10 grid max-w-4xl gap-8 md:grid-cols-2 md:gap-x-12">
          {stages.map((s, i) => (
            <li key={s.title} className="flex gap-4">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[color:var(--oc-gold)] text-lg font-bold text-[color:var(--oc-bg)]"
              >
                {i + 1}
              </span>
              <div>
                <h4 className="font-serif text-xl leading-tight text-zinc-50 mb-1">
                  <span className="sr-only">Etapa {i + 1}: </span>
                  {s.title}
                </h4>
                <p className="text-sm leading-snug text-[color:var(--oc-muted)]">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* ===== Pilares Inferiores ===== */}
      <div className="mt-24 xl:mt-16 border-t border-zinc-800/60 pt-16">
        <h3 className="text-center font-serif text-2xl sm:text-3xl text-zinc-50 mb-10">Cuatro pilares de valor</h3>
        <ul role="list" className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {pillars.map((p) => (
            <li key={p.title} className="bg-white/5 border border-white/10 p-6 rounded-sm hover:bg-white/10 transition-colors">
              <h4 className="font-serif text-xl leading-tight text-[color:var(--oc-gold)] mb-3">{p.title}</h4>
              <p className="text-sm leading-relaxed text-[color:var(--oc-muted)]">{p.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);