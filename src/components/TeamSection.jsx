import { FadeIn } from './FadeIn';
import { siteData } from '../data/content';

export const TeamSection = () => {
  return (
    <section id="equipo" className="py-32 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 block mb-4">Liderazgo</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-zinc-900">Equipo Directivo</h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteData.team.map((member, index) => (
            <FadeIn key={index} delay={index * 0.1} className="text-center group">
              <div className="aspect-[3/4] w-full overflow-hidden bg-zinc-100 mb-6 relative">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                />
              </div>
              <h3 className="text-lg font-serif text-zinc-900">{member.name}</h3>
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mt-2">{member.role}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

