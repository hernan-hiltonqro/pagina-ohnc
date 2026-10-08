import { CheckCircle2, TrendingUp, ShieldCheck, Award } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24 bg-white text-slate-800 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Encabezado Principal */}
        <FadeIn className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-900 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            Sobre la Operadora
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-blue-950">
            Liderazgo y Gestión Estratégica en Hospitalidad
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </FadeIn>

        {/* Bloque 1: Texto e Imagen */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn direction="right" className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Optimizamos el rendimiento de cada activo hotelero
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui vivamus arcu felis bibendum ut tristique et egestas. Mauris cursus mattis molestie a iaculis at erat pellentesque.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              A pellentesque sit amet porttitor eget dolor morbi non. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                "Lorem ipsum dolor sit amet",
                "Consectetur adipiscing elit",
                "Mauris cursus mattis",
                "Blandit volutpat maecenas"
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-900 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700">{text}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-md aspect-4/3">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
                alt="Operación hotelera e interiores"
                className="w-full h-full object-cover transition duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          </FadeIn>
        </div>

        {/* Bloque 2: Métricas */}
        <FadeIn>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { val: "+15", lbl: "Años de Trayectoria" },
                { val: "+25", lbl: "Propiedades Operadas" },
                { val: "88%", lbl: "Ocupación Promedio" },
                { val: "+1,200", lbl: "Habitaciones Activas" },
              ].map((stat, idx) => (
                <div key={idx} className="space-y-2">
                  <p className="text-3xl sm:text-4xl font-extrabold text-blue-950">{stat.val}</p>
                  <p className="text-xs uppercase tracking-wider font-medium text-slate-500">{stat.lbl}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Bloque 3: Invertido */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn direction="right" delay={0.2} className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-md aspect-4/3">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
                alt="Instalaciones y amenidades"
                className="w-full h-full object-cover transition duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          </FadeIn>

          <FadeIn direction="left" className="order-1 lg:order-2 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-900">
              Modelo Operativo
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Estándares rigurosos en gestión y administración
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
            </p>
            
            <div className="pt-2 flex flex-wrap gap-4">
              {[
                { icon: TrendingUp, text: "Crecimiento Sostenible" },
                { icon: ShieldCheck, text: "Control Financiero" },
                { icon: Award, text: "Calidad Certificada" },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-2 rounded-lg bg-slate-50 border border-slate-200 px-4 py-3">
                    <Icon className="h-5 w-5 text-blue-900" />
                    <span className="text-xs font-semibold text-slate-700">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};