
import { FadeIn } from './FadeIn';
import { GeohLogo } from './LogoGEOH';

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
  return (
    <section
      className="relative flex min-h-[620px] overflow-hidden border-b border-[#767980]/20 bg-[#151617] lg:min-h-[580px]"
    >
      {/* DESTELLO TERRACOTA */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full opacity-[0.07] blur-3xl"
        style={{ background: '#CF6343' }}
        aria-hidden="true"
      />

      {/* DEGRADADO DE CONTRASTE */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(90deg, rgba(21,22,23,0.98) 0%, rgba(21,22,23,0.90) 48%, rgba(21,22,23,0.25) 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-6 py-12 lg:grid-cols-12 lg:gap-10 lg:py-12">

        {/* CONTENIDO PRINCIPAL */}
        <div className="flex flex-col justify-center lg:col-span-7">
          <FadeIn>

            {/* IDENTIDAD GEOH */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-7 w-[3px] bg-[#CF6343]" />
              <span className="font-serif text-2xl tracking-wide text-[#F8F9FA]">
                GEOH
              </span>
            </div>

            {/* TÍTULO */}
            <h1
              className="max-w-3xl text-balance font-serif text-4xl leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.8rem]"
              style={{
                textShadow: '0 3px 24px rgba(0,0,0,0.65)',
              }}
            >
              Gestión estratégica y operación hotelera.
            </h1>

            {/* DESCRIPCIÓN */}
            <p
              className="mt-5 max-w-2xl text-lg font-normal leading-relaxed text-[#F8F9FA] md:text-xl"
              style={{
                textShadow: '0 2px 14px rgba(0,0,0,0.8)',
              }}
            >
              Protegemos e impulsamos el valor de su patrimonio mediante rigor comercial, solidez
              financiera y excelencia operativa, siempre con enfoque en utilidad.
            </p>

            {/* PILARES */}
            <dl className="mt-8 grid gap-3 md:grid-cols-3 md:gap-3">
              {PILLARS.map((p) => (
                <div
                  key={p.title}
                  className="rounded-lg border border-[#3A3C3F] border-t-2 border-t-[#CF6343] bg-[#292B2E] p-4 shadow-lg shadow-black/30"
                >
                  <dt className="mb-2 font-serif text-xl font-medium text-white">
                    {p.title}
                  </dt>

                  <dd className="text-sm font-medium leading-relaxed text-[#F1F1F1]">
                    {p.text}
                  </dd>
                </div>
              ))}
            </dl>

          </FadeIn>
        </div>

        {/* LOGOTIPO */}
        <div className="flex items-center justify-center lg:col-span-5 lg:justify-end">
          <div className="w-full max-w-[15rem] sm:max-w-[18rem] lg:max-w-[25rem]">
            <GeohLogo
              decorative
              className="block h-auto w-full text-[#F8F9FA]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
