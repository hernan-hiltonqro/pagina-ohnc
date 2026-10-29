import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FadeIn } from './FadeIn';

export const ContactSection = () => {
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(false);
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    try {
      // REEMPLAZA ESTAS TRES CADENAS CON TUS CLAVES DE EMAILJS
      const result = await emailjs.sendForm(
        'service_qj9p2kj', 
        'template_1vk1u3i', 
        formRef.current, 
        'VFWjxMGFYRQJqhLZe'
      );

      if (result.text === 'OK') {
        setSucceeded(true);
        formRef.current.reset();
      }
    } catch (err) {
      setError(true);
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-24 sm:py-32 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        
        <FadeIn className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#a27642] block mb-4 font-bold">
            Contacto Corporativo
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#0b172a] leading-[1.1] mb-6">
            Inicie su proceso <br />
            <span className="italic text-[#5c6b7f] font-light">de diagnóstico.</span>
          </h1>
          <p className="text-base text-[#5c6b7f] font-light leading-relaxed">
            Al enviar su solicitud, nuestro equipo directivo evaluará el perfil de su propiedad. Recibirá una respuesta en un plazo máximo de 48 horas hábiles para coordinar el análisis inicial.
          </p>
        </FadeIn>

        <FadeIn className="grid grid-cols-1 lg:grid-cols-12 shadow-2xl overflow-hidden border border-zinc-100">
          
          <div className="lg:col-span-5 bg-[#0b172a] text-white p-12 sm:p-16 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#a27642] opacity-10 blur-[50px] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-serif mb-6 text-white leading-tight">Evaluación confidencial</h3>
              <p className="text-sm text-zinc-300 font-light leading-relaxed mb-12">
                Entendemos la sensibilidad de su patrimonio. Nuestro equipo directivo revisa personalmente cada solicitud para garantizar absoluta confidencialidad en el análisis de su propiedad.
              </p>
            </div>

            <div className="space-y-10 text-sm font-light text-zinc-300 relative z-10 border-t border-zinc-700/50 pt-10">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#5c6b7f] mb-2 font-bold">El siguiente paso formal</p>
                <p className="leading-relaxed">Firma de un Acuerdo de Confidencialidad (NDA) para proteger jurídicamente la información antes de profundizar en los datos operativos y financieros del negocio.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-12 sm:p-16 lg:p-20">
            {succeeded ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 bg-[#0b172a] text-[#e8d5a5] rounded-full flex items-center justify-center mx-auto text-2xl font-serif mb-6">✓</div>
                <h3 className="text-2xl font-serif text-[#0b172a]">Solicitud enviada con éxito</h3>
                <p className="text-zinc-600 font-light max-w-md mx-auto text-sm leading-relaxed mb-8">
                  Hemos recibido la información de su activo. Nuestro comité directivo se pondrá en contacto con usted en un plazo menor a 48 horas hábiles.
                </p>
                <button 
                  onClick={() => setSucceeded(false)}
                  className="inline-block text-[10px] uppercase tracking-widest text-[#a27642] font-bold border-b border-[#a27642] pb-1 hover:text-[#0b172a] hover:border-[#0b172a] transition-colors"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-10">
                
                <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div className="flex flex-col">
                    <label htmlFor="nombre" className="text-[9px] uppercase tracking-widest text-zinc-400 mb-2 font-bold">Nombre Completo</label>
                    <input type="text" id="nombre" name="nombre" required className="border-b border-zinc-200 py-2 focus:outline-none focus:border-[#0b172a] bg-transparent text-sm text-[#0b172a] transition-colors placeholder:text-zinc-300" placeholder="Ej. Carlos Mendoza" />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="empresa" className="text-[9px] uppercase tracking-widest text-zinc-400 mb-2 font-bold">Empresa / Hotel</label>
                    <input type="text" id="empresa" name="empresa" required className="border-b border-zinc-200 py-2 focus:outline-none focus:border-[#0b172a] bg-transparent text-sm text-[#0b172a] transition-colors placeholder:text-zinc-300" placeholder="Nombre de la propiedad" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div className="flex flex-col">
                    <label htmlFor="correo" className="text-[9px] uppercase tracking-widest text-zinc-400 mb-2 font-bold">Correo Electrónico</label>
                    <input type="email" id="correo" name="email" required className="border-b border-zinc-200 py-2 focus:outline-none focus:border-[#0b172a] bg-transparent text-sm text-[#0b172a] transition-colors placeholder:text-zinc-300" placeholder="correo@empresa.com" />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="telefono" className="text-[9px] uppercase tracking-widest text-zinc-400 mb-2 font-bold">Teléfono</label>
                    <input type="tel" id="telefono" name="telefono" className="border-b border-zinc-200 py-2 focus:outline-none focus:border-[#0b172a] bg-transparent text-sm text-[#0b172a] transition-colors placeholder:text-zinc-300" placeholder="+52 123 456 7890" />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="mensaje" className="text-[9px] uppercase tracking-widest text-zinc-400 mb-2 font-bold">Situación actual del activo</label>
                  <textarea id="mensaje" name="mensaje" rows="4" required className="border-b border-zinc-200 py-2 focus:outline-none focus:border-[#0b172a] bg-transparent text-sm text-[#0b172a] transition-colors resize-none placeholder:text-zinc-300" placeholder="Especifique brevemente las áreas de oportunidad o el tipo de gestión que busca para su hotel en marcha..."></textarea>
                </div>

                {error && (
                  <p className="text-red-600 text-xs">Hubo un error al enviar el formulario. Por favor, inténtelo de nuevo.</p>
                )}

                <button 
                  type="submit" 
                  disabled={submitting}
                  className="mt-4 bg-[#0b172a] px-10 py-5 text-xs uppercase tracking-[0.2em] font-medium text-white hover:bg-[#a27642] transition-all duration-300 w-full sm:w-auto shadow-lg disabled:opacity-50"
                >
                  {submitting ? 'Enviando solicitud...' : 'Solicitar diagnóstico'}
                </button>
              </form>
            )}
          </div>

        </FadeIn>
      </div>
    </section>
  );
};