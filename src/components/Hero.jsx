import { useEffect, useRef } from 'react';
import { FadeIn } from './FadeIn';
import { GeohLogo } from './Geohlogo';

const PILLARS = [
  {
    title: 'Rentabilidad',
    text: 'Decisiones comerciales y de costos orientadas a la utilidad del hotel.',
  },
  {
    title: 'Ejecución',
    text: 'Estándares operativos que se cumplen todos los días, no solo en el plan.',
  },
  {
    title: 'Visibilidad',
    text: 'Cifras claras y oportunas para que el propietario decida con certeza.',
  },
];

export const Hero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const { top, height } = el.getBoundingClientRect();
      const p = Math.min(Math.max(-top / (height || 1), 0), 1);
      el.style.setProperty('--geoh-p', p.toFixed(3));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[calc(100vh-80px)] overflow-hidden border-b border-zinc-900 bg-[#0c0c0e]"
    >
      <div
        className="pointer-events-none absolute right-0 top-1/2 -mt-[19rem] h-[38rem] w-[38rem] rounded-full opacity-[0.05] blur-3xl"
        style={{
          background: '#e8d5a5',
          transform: 'translateY(calc(var(--geoh-p, 0) * -90px))',
          willChange: 'transform',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-14 px-6 pt-20 lg:grid-cols-12 lg:gap-10 lg:pt-0">
        <div
          className="flex flex-col justify-center lg:col-span-7 lg:py-24"
          style={{
            transform: 'translateY(calc(var(--geoh-p, 0) * -48px))',
            opacity: 'calc(1 - var(--geoh-p, 0) * 1.15)',
            willChange: 'transform, opacity',
          }}
        >
          <FadeIn>
            <div className="mb-10 flex items-center gap-3 md:mb-14">
              <span className="h-7 w-[3px] bg-[#a27642]" aria-hidden="true" />
              <span className="font-serif text-2xl tracking-wide text-zinc-100">GEOH</span>
            </div>

            <h1 className="max-w-[16ch] text-balance font-serif text-[2.75rem] leading-[1.05] tracking-tight text-zinc-50 sm:text-6xl lg:text-[4.25rem]">
              Gestión estratégica de operación hotelera.
            </h1>

            <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-zinc-400 md:text-lg">
              Protegemos e impulsamos el valor de su patrimonio mediante rigor comercial, solidez
              financiera y excelencia operativa, siempre con enfoque en utilidad.
            </p>

            <dl className="mt-14 grid gap-8 md:grid-cols-3 md:gap-6">
              {PILLARS.map((p) => (
                <div key={p.title} className="border-t border-[#a27642]/60 pt-4">
                  <dt className="font-serif text-lg text-zinc-100">{p.title}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-zinc-500">{p.text}</dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>

        {/* Contenedor del Logo Restaurado */}
        <div className="flex items-center justify-center lg:col-span-5 lg:justify-end">
          <div
            className="w-full max-w-[19rem] sm:max-w-[22rem] lg:max-w-[24rem]"
            style={{
              transform: 'translateY(calc(var(--geoh-p, 0) * 70px))',
              opacity: 'calc(1 - var(--geoh-p, 0) * 0.7)',
              willChange: 'transform, opacity',
            }}
          >
            <GeohLogo decorative className="block h-auto w-full" />
          </div>
        </div>

      </div>
    </section>
  );
};