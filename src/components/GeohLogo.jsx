import { useId } from 'react';

/*
  Logo GEOH: una G dentro de un círculo de latón con una abertura arriba,
  y el nombre GEOH debajo.

  - Al cargar, el círculo se dibuja desde el borde derecho de la abertura,
    luego se traza la G y por último aparece el nombre.
  - Las capas leen la variable CSS --geoh-p (0 a 1, progreso del scroll) para
    separarse en profundidad. Sin esa variable, el logo queda estático.
*/

const BRASS = '#a27642';
const LIGHT = '#e8d5a5';

const css = `
  .geoh-draw {
    stroke-dasharray: 1;
    animation: geoh-draw var(--dur, 1200ms) cubic-bezier(0.6, 0, 0.2, 1) var(--delay, 0ms) both;
  }
  .geoh-fade {
    animation: geoh-fade var(--dur, 800ms) ease-out var(--delay, 0ms) both;
  }
  @keyframes geoh-draw { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
  @keyframes geoh-fade { from { opacity: 0; } to { opacity: 1; } }
  @media (prefers-reduced-motion: reduce) {
    .geoh-draw, .geoh-fade { animation: none; }
  }
`;

const layer = (px) => ({
  transform: `translateY(calc(var(--geoh-p, 0) * ${px}px))`,
  willChange: 'transform',
});

export const GeohLogo = ({ className = '', decorative = false }) => {
  const glowId = `geoh-glow-${useId().replace(/:/g, '')}`;

  return (
    <svg
      viewBox="0 0 240 280"
      fill="none"
      className={`overflow-visible ${className}`}
      role={decorative ? undefined : 'img'}
      aria-label={decorative ? undefined : 'Logotipo de GEOH'}
      aria-hidden={decorative ? 'true' : undefined}
    >
      <style>{css}</style>
      <defs>
        {/* Luz interior muy tenue, sin desenfoque */}
        <radialGradient id={glowId} cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor={LIGHT} stopOpacity="0.07" />
          <stop offset="1" stopColor={LIGHT} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Círculo con abertura arriba */}
      <g style={layer(-8)}>
        <circle
          cx="120"
          cy="112"
          r="95"
          fill={`url(#${glowId})`}
          className="geoh-fade"
          style={{ '--delay': '900ms', '--dur': '1200ms' }}
        />
        <path
          d="M140 18.1 A96 96 0 1 1 100 18.1"
          pathLength="1"
          className="geoh-draw"
          stroke={BRASS}
          strokeWidth="1.75"
          style={{ '--delay': '100ms', '--dur': '1500ms' }}
        />
      </g>

      {/* G central */}
      <g style={layer(-18)}>
        <path
          d="M153.7 83.7 A44 44 0 1 0 164 112 H124"
          pathLength="1"
          className="geoh-draw"
          stroke={LIGHT}
          strokeWidth="7"
          style={{ '--delay': '1000ms', '--dur': '1100ms' }}
        />
      </g>

      {/* Nombre */}
      <g style={layer(6)}>
        <text
          x="128"
          y="262"
          textAnchor="middle"
          fontSize="30"
          letterSpacing="16"
          fill={LIGHT}
          fillOpacity="0.9"
          className="font-serif geoh-fade"
          style={{ '--delay': '1900ms', '--dur': '900ms' }}
        >
          GEOH
        </text>
      </g>
    </svg>
  );
};