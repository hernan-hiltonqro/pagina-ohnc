import { FadeIn } from './FadeIn';
import { Link } from 'react-router-dom';

export const PortfolioSection = () => {
  const portfolio = [
    {
      type: "Servicio completo",
      name: "Hilton Querétaro",
      desc: "Operado bajo estándares de cadena internacional. Ingresos por habitaciones, eventos y alimentos y bebidas, con mercado de placer y grupos corporativos.",
      img: "https://www.hilton.com/im/en/QROJSHH/22860656/hilton-qro-7.jpg?impolicy=crop&cw=5000&ch=2799&gravity=NorthWest&xposition=0&yposition=6&rw=768&rh=430", 
      features: [
        "Eventos y convenciones",
        "Alimentos y bebidas",
        "[__] habitaciones"
      ]
    },
    {
      type: "Servicio selecto",
      name: "Hampton Juriquilla",
      desc: "Ocupación alta con estructura de costos eficiente. Rentabilidad sin afectar el estándar de la marca.",
      img: "https://images.trvl-media.com/lodging/110000000/109390000/109388300/109388278/46cf3a70.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill", 
      features: [
        "Viajero de negocios",
        "Costos eficientes",
        "[__] habitaciones"
      ]
    }
  ];

  return (
    <div className="bg-[#F2F2F2] flex flex-col min-h-screen">
      
      <section className="pt-32 pb-24 overflow-hidden flex-grow">
        
        {/* Cabecera Editorial */}
        <div className="max-w-7xl mx-auto px-6 mb-32 text-center">
          <FadeIn>
            <h2 className="font-serif tracking-tight flex flex-col items-center">
              <span className="text-5xl sm:text-6xl md:text-7xl leading-[1] text-[#2B2C30] block">
                Portafolio
              </span>
            </h2>
          </FadeIn>
        </div>

        {/* Listado en Zig-Zag */}
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {portfolio.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <FadeIn key={idx} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
                
                {/* Imagen Fotográfica */}
                <div className="w-full lg:w-3/5">
                  <div className="aspect-[16/10] overflow-hidden shadow-xl relative group bg-[#0A0A0A]">
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                    />
                  </div>
                </div>

                {/* Ficha Técnica */}
                <div className="w-full lg:w-2/5">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#804E3B] font-bold block mb-4">
                    {item.type}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-serif text-[#2B2C30] mb-6 leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-base text-[#5C5E66] font-light mb-8 leading-relaxed">
                    {item.desc}
                  </p>
                  
                  {/* Lista de características operativas */}
                  <div className="pt-8 border-t border-[#5C5E66]/20">
                    <ul className="space-y-4">
                      {item.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-4 text-sm text-[#5C5E66] font-light">
                          <span className="w-1.5 h-1.5 border border-[#804E3B] rounded-full flex-shrink-0"></span>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
              </FadeIn>
            );
          })}
        </div>

      </section>

      {/* NUEVO CTA DE PORTAFOLIO (Claro y Elegante) */}
      <section className="py-24 bg-[#F2F2F2] border-t border-[#5C5E66]/20 mt-auto">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#804E3B] font-bold block mb-4">
              Su propiedad
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif leading-tight text-[#2B2C30] mb-8">
              Integre su hotel a un portafolio <br className="hidden sm:block" />
              <span className="italic text-[#5C5E66] font-light">con resultados comprobados.</span>
            </h2>
            <Link 
              to="/contacto" 
              className="inline-block bg-[#804E3B] px-10 py-5 text-xs uppercase tracking-[0.2em] font-medium text-white hover:bg-[#2B2C30] transition-all duration-300 shadow-sm border border-[#804E3B] hover:border-[#2B2C30]"
            >
              Solicitar evaluación
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  );
};