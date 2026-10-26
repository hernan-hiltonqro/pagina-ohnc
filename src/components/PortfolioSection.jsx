import { FadeIn } from './FadeIn';

export const PortfolioSection = () => {
  const portfolio = [
    {
      type: "Full Service", // <--- Aquí quedó corregido a solo Full Service
      name: "Hilton Querétaro",
      desc: "Activo operado bajo rigurosos estándares internacionales, diseñado para maximizar los ingresos del propietario a través de una oferta integral que atiende tanto al huésped de placer como a grupos corporativos.",
      img: "https://www.hilton.com/im/en/QROJSHH/22860656/hilton-qro-7.jpg?impolicy=crop&cw=5000&ch=2799&gravity=NorthWest&xposition=0&yposition=6&rw=768&rh=430", 
      features: [
        "Eventos y Convenciones",
        "Alta Gastronomía"
      ]
    },
    {
      type: "Focused Service", // <--- Aquí quedó como Focused Service
      name: "Hampton Juriquilla",
      desc: "Propiedad optimizada para mantener altos niveles de ocupación con una estructura de costos eficiente, garantizando rentabilidad sin comprometer la promesa al huésped.",
      img: "https://images.trvl-media.com/lodging/110000000/109390000/109388300/109388278/46cf3a70.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill", 
      features: [
        "Eficiencia Gestionable",
        "Viajeros de Negocios"
      ]
    }
  ];

  return (
    <section className="py-32 bg-white border-b border-zinc-200 overflow-hidden">
      
      {/* Cabecera Editorial */}
      <div className="max-w-7xl mx-auto px-6 mb-32 text-center">
        <FadeIn>
          <h2 className="font-serif tracking-tight flex flex-col items-center">
            <span className="text-5xl sm:text-6xl md:text-7xl leading-[1] text-[#0b172a] block">
              Activos
            </span>
            <span className="text-5xl sm:text-6xl md:text-7xl leading-[1] text-[#5c6b7f] italic font-light block mt-1">
              en gestión.
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
                <div className="aspect-[16/10] overflow-hidden shadow-xl relative group bg-[#0b172a]">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                  />
                </div>
              </div>

              {/* Ficha Técnica */}
              <div className="w-full lg:w-2/5">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#a27642] font-bold block mb-4">
                  {item.type}
                </span>
                <h3 className="text-3xl sm:text-4xl font-serif text-[#0b172a] mb-6 leading-tight">
                  {item.name}
                </h3>
                <p className="text-base text-[#334155] font-light mb-8 leading-relaxed">
                  {item.desc}
                </p>
                
                {/* Lista de características operativas */}
                <div className="pt-8 border-t border-zinc-200">
                  <ul className="space-y-4">
                    {item.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-4 text-sm text-[#5c6b7f] font-light">
                        <span className="w-1.5 h-1.5 border border-[#a27642] rounded-full flex-shrink-0"></span>
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
  );
};