export const siteData = {
  global: {
    brandName: "Xenia Services",
    contactEmail: "contacto@xeniaservices.com",
    contactPhone: "+52 442 000 0000",
    location: "Querétaro, México"
  },
  team: [
    { name: "Francisco Cardiel", role: "Dirección de Gestion", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" },
    { name: "Claudia Alfaro", role: "Dirección de Capital Humano", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
    { name: "Karla González", role: "Dirección de Finanzas", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" },
    { name: "José Macedo", role: "Dirección de TI", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80" }
  ],
  portfolio: [
    { 
      img: "https://images.trvl-media.com/lodging/4000000/3600000/3599000/3598923/43c847dd.jpg?impolicy=resizecrop&rw=1200&ra=fit", 
      name: "Hilton Querétaro", 
      type: "Full Service",
      desc: "Gestión integral para una operación de servicio completo.",
      features: ["Servicio Completo", "Eventos y Convenciones", "Alta Gastronomía"]
    },
    { 
      img: "https://images.trvl-media.com/lodging/110000000/109390000/109388300/109388278/4a2ebe4a.jpg?impolicy=resizecrop&rw=1200&ra=fit", 
      name: "Hampton Juriquilla", 
      type: "Focused Service",
      desc: "Ejecución ágil y control alineado al formato de servicio.",
      features: ["Servicio Selecto", "Eficiencia Gestionable", "Viajeros de Negocios"]
    }
  ],
  homeFeatures: {
    intro: {
      tagline: "Más control sobre la gestión. Más valor para su hotel.", 
      focus: " con enfoque en utilidad", 
      description: "Un modelo de gestión cercano al activo, con disciplina comercial, financiera y gestionable para dar claridad al propietario y cuidar el desempeño del hotel.", 
      stats: [
        { number: "02", label: "Hoteles en gestión" }, 
        { number: "02", label: "Formatos de servicio" }, 
        { number: "01", label: "Marco de gestión" } 
      ],
      proposal: [] 
    },
    snapshot: [
      { name: "Hilton Querétaro", type: "Full Service", desc: "Gestión integral para una operación de servicio completo." }, 
      { name: "Hampton Juriquilla", type: "Focused Service", desc: "Ejecución ágil y control alineado al formato de servicio." } 
    ],
    model: {
      title: "Una Gestión que se puede seguir.", 
      description: "La gestión conecta las prioridades del propietario con decisiones cotidianas del hotel: planear, vender, operar y revisar.", 
      cycle: [
        { step: "01", title: "Planear", desc: "Presupuesto, metas, prioridades." }, 
        { step: "02", title: "Vender", desc: "Demanda, tarifa, canales." }, 
        { step: "03", title: "Gestionar", desc: "Estándares, equipo, costos." }, 
        { step: "04", title: "Revisar", desc: "Variaciones, acuerdos, cierre." } 
      ],
      capabilities: [
        { title: "Comercial", items: "Pace, forecast, mix de venta, canales." }, 
        { title: "Finanzas", items: "Presupuesto, real, variación, acción." }, 
        { title: "Gestión", items: "Estándares, costos, productividad, servicio." }, 
        { title: "Activo", items: "Mantenimiento, disponibilidad, energía." }, 
        { title: "Personas", items: "Selección, capacitación, desarrollo." }, 
        { title: "Experiencia", items: "Comentarios, indicadores, seguimiento." } 
      ],
      visibility: {
        steps: ["Presupuesto", "Real", "Variación", "Acción"], 
        note: "Visibilidad total en tiempo real a través de nuestro ecosistema digital (BI). Responsables, fechas y cadencia de seguimiento se acuerdan para cada activo." 
      },
      onboarding: ["01 Diagnóstico", "02 Propuesta", "03 Acuerdo", "04 Arranque"] 
    },
    // ESTA ES LA SECCIÓN QUE FALTABA
    // ESTA ES LA SECCIÓN QUE FALTABA
    cta: {
      eyebrow: "El siguiente capítulo empieza con una conversación",
      title: "Tu hotel ya tiene una historia. Hablemos de lo que sigue.",
      description: "Si eres propietario, parte de la familia que dirige el activo o responsable de su operación, conversemos sobre el momento del hotel y el valor que quieres proteger.",
      buttonLabel: "Preparar conversación"
    }
  }
};