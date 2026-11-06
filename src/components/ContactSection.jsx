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
        'service_k0mjvdx', 
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
    <section className="bg-white py-24 sm:py-32 border-b border-[#5C5E66]/20">
      <div className="max-w-7xl mx-auto px-6">
        
        <FadeIn className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#804E3B] block mb-4 font-bold">
            Contacto
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#2B2C30] leading-[1.1] mb-6">
            Inicie su proceso <br />
            <span className="italic text-[#5C5E66] font-light">de diagnóstico.</span>
          </h1>
          <p className="text-base text-[#5C5E66] font-light leading-relaxed">
            El equipo directivo revisa cada solicitud. Respuesta en un plazo máximo de 48 horas hábiles para agendar el diagnóstico.
          </p>
        </FadeIn>

        <FadeIn className="grid grid-cols-1 lg:grid-cols-12 shadow-2xl overflow-hidden border border-[#5C5E66]/10 rounded-sm">
          
          <div className="lg:col-span-5 bg-[#0A0A0A] text-white p-12 sm:p-16 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#552828] opacity-20 blur-[50px] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-serif mb-6 text-[#F2F2F2] leading-tight">Evaluación confidencial</h3>
              <p className="text-sm text-[#F2F2F2]/70 font-light leading-relaxed mb-12">
                La información de su hotel la revisa únicamente el equipo directivo.
              </p>
            </div>

            <div className="space-y-10 text-sm font-light text-[#F2F2F2]/70 relative z-10 border-t border-[#F2F2F2]/10 pt-10">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#804E3B] mb-2 font-bold">Siguiente paso</p>
                <p className="leading-relaxed">Firma de un acuerdo de confidencialidad antes de revisar cualquier dato operativo o financiero.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#F2F2F2] p-12 sm:p-16 lg:p-20">
            {succeeded ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 bg-[#2B2C30] text-[#804E3B] rounded-full flex items-center justify-center mx-auto text-2xl font-serif mb-6">✓</div>
                <h3 className="text-2xl font-serif text-[#2B2C30]">Solicitud recibida</h3>
                <p className="text-[#5C5E66] font-light max-w-md mx-auto text-sm leading-relaxed mb-8">
                  Le contactaremos en un plazo máximo de 48 horas hábiles.
                </p>
                <button 
                  onClick={() => setSucceeded(false)}
                  className="inline-block text-[10px] uppercase tracking-widest text-[#804E3B] font-bold border-b border-[#804E3B] pb-1 hover:text-[#2B2C30] hover:border-[#2B2C30] transition-colors"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-10">
                
                <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div className="flex flex-col">
                    <label htmlFor="nombre" className="text-[9px] uppercase tracking-widest text-[#5C5E66] mb-2 font-bold">Nombre completo</label>
                    <input type="text" id="nombre" name="nombre" required className="border-b border-[#5C5E66]/30 py-2 focus:outline-none focus:border-[#804E3B] bg-transparent text-sm text-[#2B2C30] transition-colors placeholder:text-[#5C5E66]/40" placeholder="Ej. Carlos Mendoza" />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="empresa" className="text-[9px] uppercase tracking-widest text-[#5C5E66] mb-2 font-bold">Hotel o empresa</label>
                    <input type="text" id="empresa" name="empresa" required className="border-b border-[#5C5E66]/30 py-2 focus:outline-none focus:border-[#804E3B] bg-transparent text-sm text-[#2B2C30] transition-colors placeholder:text-[#5C5E66]/40" placeholder="Nombre de la propiedad" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div className="flex flex-col">
                    <label htmlFor="correo" className="text-[9px] uppercase tracking-widest text-[#5C5E66] mb-2 font-bold">Correo electrónico</label>
                    <input type="email" id="correo" name="email" required className="border-b border-[#5C5E66]/30 py-2 focus:outline-none focus:border-[#804E3B] bg-transparent text-sm text-[#2B2C30] transition-colors placeholder:text-[#5C5E66]/40" placeholder="correo@empresa.com" />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="telefono" className="text-[9px] uppercase tracking-widest text-[#5C5E66] mb-2 font-bold">Teléfono</label>
                    <input type="tel" id="telefono" name="telefono" className="border-b border-[#5C5E66]/30 py-2 focus:outline-none focus:border-[#804E3B] bg-transparent text-sm text-[#2B2C30] transition-colors placeholder:text-[#5C5E66]/40" placeholder="+52 123 456 7890" />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="mensaje" className="text-[9px] uppercase tracking-widest text-[#5C5E66] mb-2 font-bold">Situación actual del hotel</label>
                  <textarea id="mensaje" name="mensaje" rows="4" required className="border-b border-[#5C5E66]/30 py-2 focus:outline-none focus:border-[#804E3B] bg-transparent text-sm text-[#2B2C30] transition-colors resize-none placeholder:text-[#5C5E66]/40" placeholder="Describa brevemente el hotel, su situación actual y el tipo de gestión que busca."></textarea>
                </div>

                {error && (
                  <p className="text-[#552828] text-xs">No fue posible enviar la solicitud. Verifique su conexión e inténtelo de nuevo.</p>
                )}

                <button 
                  type="submit" 
                  disabled={submitting}
                  className="mt-4 bg-[#2B2C30] px-10 py-5 text-xs uppercase tracking-[0.2em] font-bold text-[#F2F2F2] hover:bg-[#804E3B] transition-all duration-300 w-full sm:w-auto shadow-lg disabled:opacity-50"
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