import { FadeIn } from './FadeIn';
import { Link } from 'react-router-dom';

export const PortfolioSection = () => {
  const portfolio = [
    {
      type: "Full Service",
      name: "Hilton Querétaro",
      desc: "Activo operado bajo rigurosos estándares internacionales, diseñado para maximizar los ingresos del propietario a través de una oferta integral que atiende tanto al huésped de placer como a grupos corporativos.",
      img: "https://www.hilton.com/im/en/QROJSHH/22860656/hilton-qro-7.jpg?impolicy=crop&cw=5000&ch=2799&gravity=NorthWest&xposition=0&yposition=6&rw=768&rh=430", 
      features: [
        "Eventos y Convenciones",
        "Alta Gastronomía"
      ]
    },
    {
      type: "Focused Service",
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
    <div className="flex flex-col min-h-screen bg-[#F8F9FA]">
      
      <section className="pt-40 pb-32">
        
        {/* Cabecera Sutil y Directa */}
        <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
          <FadeIn>
            <h2 className="text-6xl sm:text-7xl lg:text-[6.5rem] font-serif text-[#151617] leading-[1.05] tracking-tight">
              Portafolio.
            </h2>
            <p className="mt-8 text-xl sm:text-2xl text-[#767980] font-light max-w-2xl mx-auto leading-relaxed">
              Una selección de activos operados bajo los más altos estándares de rentabilidad, eficiencia y excelencia.
            </p>
          </FadeIn>
        </div>

        {/* Galería Editorial con Cajas Superpuestas */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {portfolio.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.2} className="group flex flex-col">
                
                {/* Imagen Mimetizada que funciona como fondo parcial */}
                <div className="aspect-[16/11] w-full overflow-hidden bg-[#151617] relative rounded-sm shadow-md">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 opacity-60 grayscale mix-blend-luminosity group-hover:mix-blend-normal group-hover:grayscale-0 group-hover:opacity-100" 
                  />
                  {/* Capa sutil de oscurecimiento */}
                  <div className="absolute inset-0 bg-[#151617] opacity-20 mix-blend-multiply transition-opacity duration-1000 group-hover:opacity-0 pointer-events-none"></div>
                </div>

                {/* Tarjeta de Texto Superpuesta (El margen negativo la sube sobre la foto) */}
                <div className="relative z-10 mx-6 sm:mx-10 -mt-24 sm:-mt-32 bg-white p-10 sm:p-12 shadow-2xl border-t-4 border-transparent group-hover:border-[#CF6343] transition-all duration-500 flex flex-col flex-grow">
                  <span className="text-base uppercase tracking-[0.2em] font-bold text-[#CF6343] block mb-4">
                    {item.type}
                  </span>
                  <h3 className="text-4xl sm:text-5xl font-serif text-[#151617] mb-6 leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-xl text-[#767980] font-light mb-10 leading-relaxed flex-grow">
                    {item.desc}
                  </p>
                  
                  {/* Etiquetas Operativas */}
                  <div className="flex flex-wrap gap-4 pt-8 border-t border-[#767980]/20">
                    {item.features.map((feat, i) => (
                      <span 
                        key={i} 
                        className="px-5 py-3 border border-[#767980]/20 rounded-sm text-sm font-bold tracking-widest uppercase text-[#767980] group-hover:text-[#151617] transition-colors duration-300"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
                
              </FadeIn>
            ))}
          </div>
        </div>

      </section>

      {/* CTA Portafolio (Formato Banner Panorámico y Compacto) */}
      <section className="py-16 sm:py-20 bg-[#2E2F32] mt-auto border-t border-[#767980]/20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            
            <div className="max-w-3xl">
              <h2 className="text-4xl sm:text-5xl font-serif leading-tight text-[#F8F9FA] mb-4">
                Expanda el potencial <span className="italic text-[#F8F9FA]/60 font-light">de su hotel.</span>
              </h2>
              <p className="text-lg sm:text-xl text-[#F8F9FA]/70 font-light leading-relaxed">
                Integre su propiedad a nuestro portafolio de gestión y asegure una operación altamente rentable y estandarizada.
              </p>
            </div>
            
            <div className="flex-shrink-0 w-full lg:w-auto">
              <Link 
                to="/contacto" 
                className="block text-center lg:inline-block bg-[#CF6343] hover:bg-[#963E27] px-10 py-5 sm:py-6 text-base uppercase tracking-[0.2em] font-medium text-white transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Solicitar diagnóstico
              </Link>
            </div>

          </FadeIn>
        </div>
      </section>
      
    </div>
  );
};