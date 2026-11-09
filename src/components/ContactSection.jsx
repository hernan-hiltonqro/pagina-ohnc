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
    <section className="bg-[#F8F9FA] py-32 sm:py-40 border-b border-[#767980]/20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* NUEVA CABECERA: Diseño dividido (Split Layout) */}
        <FadeIn className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-12 h-[2px] bg-[#CF6343]"></div>
              <span className="text-sm uppercase tracking-[0.2em] text-[#CF6343] font-bold">
                Contacto Corporativo
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif text-[#151617] leading-[1.05] tracking-tight">
              Inicie su proceso <br />
              <span className="italic text-[#767980] font-light">de diagnóstico.</span>
            </h1>
          </div>
          
          <div className="lg:w-1/3 lg:pb-3">
            <p className="text-lg sm:text-xl text-[#767980] font-light leading-relaxed">
              Nuestro equipo directivo evaluará el perfil de su propiedad con absoluta confidencialidad. Recibirá respuesta en menos de 48 horas hábiles.
            </p>
          </div>
        </FadeIn>

        <FadeIn className="grid grid-cols-1 lg:grid-cols-12 shadow-2xl overflow-hidden rounded-sm bg-white">
          
          {/* Columna Izquierda: Información de Privacidad */}
          <div className="lg:col-span-5 bg-[#151617] text-[#F8F9FA] p-12 sm:p-16 lg:p-20 relative overflow-hidden flex flex-col justify-between">
            {/* Acento sutil en el fondo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#CF6343] opacity-[0.03] blur-[60px] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl sm:text-5xl font-serif mb-8 text-[#F8F9FA] leading-tight">Evaluación confidencial</h3>
              <p className="text-lg text-[#F8F9FA]/70 font-light leading-relaxed mb-16">
                Entendemos la sensibilidad de su patrimonio. Nuestro equipo directivo revisa personalmente cada solicitud para garantizar absoluta confidencialidad en el análisis de su propiedad.
              </p>
            </div>

            <div className="space-y-12 text-base font-light text-[#F8F9FA]/70 relative z-10 border-t border-[#F8F9FA]/10 pt-12">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#CF6343] mb-3 font-bold">El siguiente paso formal</p>
                <p className="leading-relaxed">Firma de un Acuerdo de Confidencialidad (NDA) para proteger jurídicamente la información antes de profundizar en los datos operativos y financieros del negocio.</p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario */}
          <div className="lg:col-span-7 bg-white p-12 sm:p-16 lg:p-24">
            {succeeded ? (
              <div className="py-16 text-center space-y-8">
                <div className="w-20 h-20 bg-[#151617] text-[#CF6343] rounded-full flex items-center justify-center mx-auto text-3xl font-serif mb-8 shadow-md">✓</div>
                <h3 className="text-3xl font-serif text-[#151617]">Solicitud enviada con éxito</h3>
                <p className="text-[#767980] font-light max-w-md mx-auto text-lg leading-relaxed mb-10">
                  Hemos recibido la información de su activo. Nuestro comité directivo se pondrá en contacto con usted en un plazo menor a 48 horas hábiles.
                </p>
                <button 
                  onClick={() => setSucceeded(false)}
                  className="inline-block text-sm uppercase tracking-widest text-[#CF6343] font-bold border-b border-[#CF6343] pb-1 hover:text-[#151617] hover:border-[#151617] transition-colors"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-12">
                
                <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                  <div className="flex flex-col">
                    <label htmlFor="nombre" className="text-xs uppercase tracking-widest text-[#767980] mb-3 font-bold">Nombre Completo</label>
                    <input type="text" id="nombre" name="nombre" required className="border-b border-[#767980]/30 py-3 focus:outline-none focus:border-[#151617] bg-transparent text-lg text-[#151617] transition-colors placeholder:text-[#767980]/40" placeholder="Ej. Carlos Mendoza" />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="empresa" className="text-xs uppercase tracking-widest text-[#767980] mb-3 font-bold">Empresa / Hotel</label>
                    <input type="text" id="empresa" name="empresa" required className="border-b border-[#767980]/30 py-3 focus:outline-none focus:border-[#151617] bg-transparent text-lg text-[#151617] transition-colors placeholder:text-[#767980]/40" placeholder="Nombre de la propiedad" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                  <div className="flex flex-col">
                    <label htmlFor="correo" className="text-xs uppercase tracking-widest text-[#767980] mb-3 font-bold">Correo Electrónico</label>
                    <input type="email" id="correo" name="email" required className="border-b border-[#767980]/30 py-3 focus:outline-none focus:border-[#151617] bg-transparent text-lg text-[#151617] transition-colors placeholder:text-[#767980]/40" placeholder="correo@empresa.com" />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="telefono" className="text-xs uppercase tracking-widest text-[#767980] mb-3 font-bold">Teléfono</label>
                    <input type="tel" id="telefono" name="telefono" className="border-b border-[#767980]/30 py-3 focus:outline-none focus:border-[#151617] bg-transparent text-lg text-[#151617] transition-colors placeholder:text-[#767980]/40" placeholder="+52 123 456 7890" />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="mensaje" className="text-xs uppercase tracking-widest text-[#767980] mb-3 font-bold">Situación actual del activo</label>
                  <textarea id="mensaje" name="mensaje" rows="4" required className="border-b border-[#767980]/30 py-3 focus:outline-none focus:border-[#151617] bg-transparent text-lg text-[#151617] transition-colors resize-none placeholder:text-[#767980]/40" placeholder="Especifique brevemente las áreas de oportunidad o el tipo de gestión que busca para su hotel en marcha..."></textarea>
                </div>

                {error && (
                  <p className="text-red-600 text-sm font-medium">Hubo un error al enviar el formulario. Por favor, inténtelo de nuevo.</p>
                )}

                <button 
                  type="submit" 
                  disabled={submitting}
                  className="mt-6 bg-[#151617] px-12 py-5 text-base uppercase tracking-[0.2em] font-medium text-white hover:bg-[#CF6343] transition-all duration-300 w-full sm:w-auto shadow-md hover:shadow-lg disabled:opacity-50"
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