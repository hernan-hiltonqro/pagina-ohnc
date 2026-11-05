import { useId } from 'react';

/*
  Owner Centricity — diagrama de Euler
  VERSIÓN CLARA CON TONOS ROJIZOS: 
  Fondo blanco puro, textos en gris carbón y trazados en Terracota/Borgoña.
*/

const COLORS = {
  bg: '#FFFFFF',         // Blanco puro para el fondo
  circleBg: 'rgba(128, 78, 59, 0.03)', // Relleno terracota ultra translúcido para los círculos
  ink: '#2B2C30',        // Gris carbón (Texto principal)
  muted: '#5C5E66',      // Gris medio (Texto secundario)
  terracota: '#804E3B',  // Terracota (Acentos, líneas y puntos)
  borgoña: '#552828',    // Borgoña (Títulos clave y profundidad)
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

const pillars = [
  {
    title: 'Continuidad',
    desc: 'Preservamos la identidad del hotel y lo preparamos para la siguiente generación.',
    dx: 0,
    dy: -D,
    label: { x: CX, y: 225, lines: ['Continuidad'] },
  },
  {
    title: 'Valor del activo',
    desc: 'Mantenimiento y reinversión planeados para conservar y aumentar el valor del inmueble.',
    dx: D,
    dy: 0,
    label: { x: 775, y: CY, lines: ['Valor', 'del activo'] },
  },
  {
    title: 'Clientes',
    desc: 'Satisfacción medida y atendida, porque un huésped que regresa reduce el costo de venta.',
    dx: 0,
    dy: D,
    label: { x: CX, y: 575, lines: ['Clientes'] },
  },
  {
    title: 'Talento',
    desc: 'Gerentes capaces de leer indicadores, decidir y responder por sus resultados.',
    dx: -D,
    dy: 0,
    label: { x: 425, y: CY, lines: ['Talento'] },
  },
];

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

const Figure = ({ compact = false }) => {
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
          <stop offset="0" stopColor={COLORS.terracota} stopOpacity="0.2" />
          <stop offset="1" stopColor={COLORS.terracota} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Órbitas decorativas en Borgoña muy sutil */}
      <ellipse cx={CX} cy={CY} rx="300" ry="180" transform={`rotate(-28 ${CX} ${CY})`} fill="none" stroke="rgba(85,40,40,0.06)" />
      <ellipse cx={CX} cy={CY} rx="300" ry="180" transform={`rotate(28 ${CX} ${CY})`} fill="none" stroke="rgba(85,40,40,0.06)" />

      {/* Órbita central en Terracota */}
      <circle cx={CX} cy={CY} r={ORBIT} fill="none" stroke={COLORS.terracota} strokeOpacity="0.3" strokeDasharray="3 8" />

      {/* Círculos de los Pilares trazados con Terracota */}
      {pillars.map((p) => (
        <circle
          key={p.title}
          cx={CX + p.dx}
          cy={CY + p.dy}
          r={RP}
          fill={COLORS.circleBg}
          stroke={COLORS.terracota}
          strokeWidth="1.5"
          strokeOpacity="0.4"
        />
      ))}

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
                style={{ fill: COLORS.ink }}
              >
                {line}
              </text>
            ))
          )}
          {/* Texto central en Borgoña para destacar */}
          {['Propietario'].map((line, k, arr) => (
            <text
              key={line}
              x={CX}
              y={CY + (k - (arr.length - 1) / 2) * 24}
              dy="0.35em"
              textAnchor="middle"
              fontSize="20"
              className="font-serif font-bold"
              style={{ fill: COLORS.borgoña }}
            >
              {line}
            </text>
          ))}
        </g>
      )}

      {stages.map((s, i) => {
        const { x, y } = stagePos(i);
        return (
          <g key={s.title}>
            <circle cx={x} cy={y} r={dotR * 2.2} fill={`url(#${haloId})`} />
            <circle cx={x} cy={y} r={dotR} style={{ fill: COLORS.terracota }} />
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
        stroke={`rgba(128, 78, 59, ${(0.05 - i * 0.008).toFixed(3)})`} /* Anillos en terracota sutil */
      />
    ))}
  </svg>
);

export const OwnerCentricity = () => (
  <section
    aria-labelledby="oc-title"
    className="relative isolate overflow-hidden border-y border-zinc-200 py-24 sm:py-32 w-full"
    style={{ backgroundColor: COLORS.bg }}
  >
    {/* Fondo expansivo ultra sutil */}
    <div className="absolute inset-0 -z-20 w-full h-full bg-[radial-gradient(circle_at_center,rgba(128,78,59,0.03)_0%,transparent_80%)]"></div>

    <div className="mx-auto max-w-7xl px-6 relative z-10">
      <header className="mx-auto mb-16 max-w-3xl text-center xl:mb-12">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em]" style={{ color: COLORS.terracota }}>
          Modelo de gestión
        </p>
        <h2 id="oc-title" className="font-serif text-3xl sm:text-4xl leading-tight" style={{ color: COLORS.borgoña }}>
          El propietario al centro
        </h2>
        <div
          aria-hidden="true"
          className="mx-auto mt-6 h-px w-40"
          style={{ background: `linear-gradient(90deg, transparent, ${COLORS.terracota}, transparent)` }}
        />
        <p className="mt-8 font-serif text-xl sm:text-2xl italic" style={{ color: COLORS.terracota }}>
          {purpose}
        </p>
        <p className="mt-4 text-base leading-relaxed" style={{ color: COLORS.muted }}>
          Cinco etapas ordenan la gestión. Cuatro pilares la sostienen, alrededor de los intereses del propietario.
        </p>
      </header>

      <div className="relative mx-auto hidden xl:block" style={{ width: W, height: H }}>
        <Rings extend={400} cy={CY + 400} radii={[340, 430, 540, 670, 820, 990]} />
        <Figure />
        <h3 className="sr-only">Etapas de gestión</h3>
        <ol role="list" aria-label="Etapas de gestión">
          {stages.map((s, i) => (
            <li key={s.title} className="absolute" style={labelStyle(i)}>
              <h4 className="font-serif text-xl leading-tight mb-1" style={{ color: COLORS.borgoña }}>
                <span className="sr-only">Etapa {i + 1}: </span>
                {s.title}
              </h4>
              <p className="text-sm leading-snug" style={{ color: COLORS.muted }}>{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="xl:hidden">
        <div className="relative mx-auto w-full max-w-[420px]">
          <Rings extend={240} cy="50%" radii={[250, 340, 450, 580, 730, 900]} />
          <Figure compact />
        </div>

        <h3 className="mt-16 text-center font-serif text-2xl sm:text-3xl" style={{ color: COLORS.borgoña }}>
          Cinco etapas de gestión
        </h3>
        <ol role="list" className="mx-auto mt-10 grid max-w-4xl gap-8 md:grid-cols-2 md:gap-x-12">
          {stages.map((s, i) => (
            <li key={s.title} className="flex gap-4">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg font-bold"
                style={{ backgroundColor: COLORS.terracota, color: '#FFFFFF' }}
              >
                {i + 1}
              </span>
              <div>
                <h4 className="font-serif text-xl leading-tight mb-1" style={{ color: COLORS.borgoña }}>
                  <span className="sr-only">Etapa {i + 1}: </span>
                  {s.title}
                </h4>
                <p className="text-sm leading-snug" style={{ color: COLORS.muted }}>{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-24 xl:mt-16 border-t border-zinc-200 pt-16">
        <h3 className="text-center font-serif text-2xl sm:text-3xl mb-10" style={{ color: COLORS.borgoña }}>
          Cuatro pilares
        </h3>
        <ul role="list" className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {pillars.map((p) => (
            <li key={p.title} className="bg-[#F2F2F2] border border-zinc-200 p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-serif text-xl leading-tight mb-3" style={{ color: COLORS.terracota }}>{p.title}</h4>
              <p className="text-sm leading-relaxed" style={{ color: COLORS.muted }}>{p.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);