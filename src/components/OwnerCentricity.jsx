import { useState } from 'react';
import { FadeIn } from './FadeIn';

// Datos con los títulos completos para mostrarlos en el diagrama
const centerNode = { 
  id: 'center', 
  type: 'Propósito Central', 
  title: 'Owner Centricity', 
  desc: 'Creamos valor para el propietario hoy y a largo plazo.' 
};

const pilares = [
  { id: 'p1', type: 'Pilar de Valor', label: 'Legado', title: 'Legado', desc: 'Preservamos la visión y la esencia, construyendo valor sostenible para las futuras generaciones.', pos: { left: '50%', top: '23%' } },
  { id: 'p2', type: 'Pilar de Valor', label: 'Cuidado del Activo', title: 'Cuidado del Activo', desc: 'Protegemos y maximizamos el valor del activo con una gestión eficiente, responsable y orientada al largo plazo.', pos: { left: '77%', top: '50%' } },
  { id: 'p3', type: 'Pilar de Valor', label: 'Cuidado de los Clientes', title: 'Cuidado de los Clientes', desc: 'Brindamos experiencias memorables que generan satisfacción, lealtad y valor sostenible para el negocio.', pos: { left: '50%', top: '77%' } },
  { id: 'p4', type: 'Pilar de Valor', label: 'Talento', title: 'Talento', desc: 'Desarrollamos profesionales que gestionan, no solo ejecutan, impulsando una cultura de aprendizaje y crecimiento continuo.', pos: { left: '23%', top: '50%' } },
];

const proceso = [
  { id: 'pr1', type: 'Etapa 01', label: '01. Entendemos', title: '01. Entendemos', desc: 'El negocio y su entorno.', pos: { left: '50%', top: '0%' } },
  { id: 'pr2', type: 'Etapa 02', label: '02. Visualizamos', title: '02. Visualizamos', desc: 'El potencial y la estrategia.', pos: { left: '97.5%', top: '34.5%' } },
  { id: 'pr3', type: 'Etapa 03', label: '03. Ejecutamos', title: '03. Ejecutamos', desc: 'La operación y los resultados.', pos: { left: '79.3%', top: '90.5%' } },
  { id: 'pr4', type: 'Etapa 04', label: '04. Disciplina y Armonía', title: '04. Disciplina y Armonía', desc: 'Gestión financiera, equilibrio y sostenibilidad.', pos: { left: '20.7%', top: '90.5%' } },
  { id: 'pr5', type: 'Etapa 05', label: '05. Simplificamos Procesos', title: '05. Simplificamos Procesos', desc: 'Con tecnología e innovación.', pos: { left: '2.5%', top: '34.5%' } },
];

export const OwnerCentricity = () => {
  const [activeNode, setActiveNode] = useState(centerNode);

  return (
    <section className="py-32 bg-white text-zinc-900 border-y border-zinc-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <FadeIn className="text-center max-w-3xl mx-auto mb-20 lg:mb-32">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#0f2035] block mb-4 font-bold">
            Filosofía Operativa
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#0f2035] mb-6">
            El Ecosistema del Valor
          </h2>
          <p className="text-sm text-zinc-500 font-light leading-relaxed">
            Interactúa con el diagrama para explorar los ejes y etapas de nuestra gestión.
          </p>
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center justify-center">
          
          {/* Diagrama Circular (Lado Izquierdo) */}
          <FadeIn delay={0.2} className="relative w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] flex-shrink-0">
            
            {/* Guías Orbitales */}
            <div className="absolute inset-0 m-auto w-full h-full border-[1.5px] border-dashed border-[#c1ccdb] rounded-full" />
            <div className="absolute inset-0 m-auto w-[54%] h-[54%] border-[1.5px] border-dashed border-[#c1ccdb] rounded-full" />

            {/* Nodo Central */}
            <button
              onClick={() => setActiveNode(centerNode)}
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 rounded-full z-30 flex flex-col items-center justify-center transition-all duration-500 focus:outline-none ${
                activeNode.id === 'center' 
                  ? 'bg-[#0f2035] border-4 border-[#0f2035] shadow-[0_0_30px_rgba(15,32,53,0.3)] scale-110' 
                  : 'bg-[#0f2035] border-4 border-white hover:scale-105'
              }`}
            >
              <span className="font-sans text-[11px] sm:text-sm font-bold tracking-[0.1em] text-center text-white px-2">
                OWNER<br/>CENTRICITY
              </span>
            </button>

            {/* Nodos Interiores (4 Pilares) */}
            {pilares.map((node) => (
              <button
                key={node.id}
                onClick={() => setActiveNode(node)}
                style={{ left: node.pos.left, top: node.pos.top }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-28 sm:h-28 rounded-full z-20 flex items-center justify-center p-2 transition-all duration-300 focus:outline-none ${
                  activeNode.id === node.id 
                    ? 'bg-[#0f2035] text-white border-[#0f2035] shadow-lg scale-110' 
                    : 'bg-white border-2 border-[#c1ccdb] text-[#0f2035] hover:border-[#0f2035]'
                }`}
              >
                <span className="font-serif text-[10px] sm:text-xs font-bold uppercase tracking-wider text-center leading-tight">
                  {node.label}
                </span>
              </button>
            ))}

            {/* Nodos Exteriores (5 Etapas de Proceso) */}
            {proceso.map((node) => (
              <button
                key={node.id}
                onClick={() => setActiveNode(node)}
                style={{ left: node.pos.left, top: node.pos.top }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-32 sm:h-32 rounded-full z-10 flex items-center justify-center p-3 transition-all duration-300 focus:outline-none ${
                  activeNode.id === node.id 
                    ? 'bg-[#0f2035] text-white shadow-lg scale-110' 
                    : 'bg-[#d8e1eb] border border-[#d8e1eb] text-[#0f2035] hover:bg-[#0f2035] hover:text-white'
                }`}
              >
                <span className="font-sans text-[9px] sm:text-[11px] font-bold uppercase tracking-widest text-center leading-tight">
                  {node.label}
                </span>
              </button>
            ))}
          </FadeIn>

          {/* Panel de Información Dinámico (Lado Derecho) */}
          <div className="w-full lg:w-[45%] min-h-[250px] flex flex-col justify-center text-center lg:text-left mt-8 lg:mt-0">
            <div 
              key={activeNode.id} 
              className="animate-[fadeIn_0.4s_ease-out_forwards]"
            >
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#8a9bb3] block mb-4 font-bold">
                {activeNode.type}
              </span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0f2035] mb-6 leading-tight">
                {activeNode.title}
              </h3>
              <p className="text-base sm:text-lg text-zinc-600 font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
                {activeNode.desc}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};