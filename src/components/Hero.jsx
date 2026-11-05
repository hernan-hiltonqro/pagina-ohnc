import { useEffect, useRef } from 'react';
import { FadeIn } from './FadeIn';
import { GeohLogo } from './LogoGEOH';

const PILLARS = [
  {
    title: 'Rentabilidad',
    text: 'Cada decisión de venta y de costo se evalúa por su efecto en la utilidad.',
  },
  {
    title: 'Ejecución',
    text: 'Estándares que se cumplen en la operación diaria, no solo en el papel.',
  },
  {
    title: 'Visibilidad',
    text: 'Cifras confiables y a tiempo para decidir con fundamento.',
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
      className="relative flex min-h-[calc(100vh-80px)] overflow-hidden border-b border-[#2B2C30] bg-[#0A0A0A]"
    >
      {/* Destello de luz adaptado a la nueva paleta */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 -mt-[19rem] h-[38rem] w-[38rem] rounded-full opacity-[0.15] blur-3xl"
        style={{
          background: 'radial-gradient(circle, #804E3B 0%, #552828 100%)',
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
              {/* Línea de acento Terracota */}
              <span className="h-7 w-[3px] bg-[#804E3B]" aria-hidden="true" />
              <span className="font-serif text-2xl tracking-wide text-[#F2F2F2]">GEOH</span>
            </div>

            {/* Texto principal en Gris Perla */}
            <h1 className="max-w-[16ch] text-balance font-serif text-[2.75rem] leading-[1.05] tracking-tight text-[#F2F2F2] sm:text-6xl lg:text-[4.25rem]">
              Gestión hotelera orientada a la utilidad del propietario.
            </h1>

            {/* Texto descriptivo ligeramente más oscuro para jerarquía */}
            <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-[#F2F2F2]/70 md:text-lg">
              Administramos la operación, las ventas y las finanzas de su hotel. Usted recibe resultados medibles cada mes.
            </p>

            <dl className="mt-14 grid gap-8 md:grid-cols-3 md:gap-6">
              {PILLARS.map((p) => (
                <div key={p.title} className="border-t border-[#804E3B]/50 pt-4">
                  <dt className="font-serif text-lg text-[#F2F2F2]">{p.title}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-[#5C5E66]">{p.text}</dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>

        {/* Contenedor del Logo */}
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