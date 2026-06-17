export const salonInfo = {
  name: "Maison Aurea",
  tagline: "Donde el cabello se convierte en arte",
  description:
    "Salón de alta peluquería en el corazón de Buenos Aires. Experiencias personalizadas de corte, color y tratamiento con los mejores profesionales de la ciudad.",
  address: "Av. Santa Fe 2847, Palermo, CABA",
  phone: "+54 11 4523-8890",
  whatsapp: "5491145238890",
  email: "hola@maisonaurea.com.ar",
  hours: "Lunes a Sábado · 10:00 – 20:00",
  priceRange: "$$",
  rating: 4.9,
  reviewCount: 287,
  social: {
    instagram: "https://instagram.com/maisonaurea",
    facebook: "https://facebook.com/maisonaurea",
    tiktok: "https://tiktok.com/@maisonaurea",
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016713498798!2d-58.410758!3d-34.588929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM1JzIwLjEiUyA1OMKwMjQnMzguNyJX!5e0!3m2!1ses!2sar!4v1700000000000",
  siteUrl: "https://maisonaurea.com.ar",
};

export const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Precios", href: "#precios" },
  { label: "Galería", href: "#galeria" },
  { label: "Equipo", href: "#equipo" },
  { label: "Reservas", href: "#reservas" },
  { label: "Contacto", href: "#contacto" },
];

export type Service = {
  id: string;
  title: string;
  description: string;
  duration: string;
  icon: string;
  priceFrom: number;
};

export const services: Service[] = [
  {
    id: "corte",
    title: "Corte & Styling",
    description:
      "Corte de precisión adaptado a tu rostro, estilo de vida y personalidad. Incluye lavado ritual y acabado profesional.",
    duration: "60 min",
    icon: "scissors",
    priceFrom: 18000,
  },
  {
    id: "coloracion",
    title: "Coloración",
    description:
      "Desde raíces hasta transformaciones completas. Fórmulas personalizadas con productos de alta gama sin amoniaco.",
    duration: "90 min",
    icon: "palette",
    priceFrom: 35000,
  },
  {
    id: "balayage",
    title: "Balayage & Babylights",
    description:
      "Técnicas de iluminación a mano alzada para un efecto natural, luminoso y de bajo mantenimiento.",
    duration: "180 min",
    icon: "sun",
    priceFrom: 85000,
  },
  {
    id: "keratina",
    title: "Keratina & Alisado",
    description:
      "Tratamientos de reconstrucción y alisado progresivo que devuelven suavidad, brillo y manejabilidad.",
    duration: "150 min",
    icon: "sparkles",
    priceFrom: 120000,
  },
  {
    id: "peinado",
    title: "Peinado de Evento",
    description:
      "Recogidos, ondas Hollywood y estilismos de alfombra roja. Prueba previa incluida para novias y eventos.",
    duration: "90 min",
    icon: "crown",
    priceFrom: 45000,
  },
  {
    id: "barberia",
    title: "Barbería Premium",
    description:
      "Corte clásico o moderno, perfilado de barba, afeitado con toalla caliente y ritual de aromaterapia.",
    duration: "45 min",
    icon: "user",
    priceFrom: 15000,
  },
  {
    id: "tratamiento",
    title: "Tratamiento Capilar",
    description:
      "Diagnóstico capilar personalizado con mascarillas de reconstrucción, hidratación profunda y scalp care.",
    duration: "45 min",
    icon: "droplets",
    priceFrom: 22000,
  },
  {
    id: "asesoria",
    title: "Asesoría de Imagen",
    description:
      "Sesión one-on-one con nuestro director creativo para definir tu look ideal: color, corte y cuidado en casa.",
    duration: "30 min",
    icon: "eye",
    priceFrom: 12000,
  },
];

export type PricingTier = {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  period: string;
  popular?: boolean;
  features: string[];
  cta: string;
};

export const pricingTiers: PricingTier[] = [
  {
    id: "esencial",
    name: "Esencial",
    subtitle: "Para el cuidado cotidiano",
    price: 18000,
    period: "desde",
    features: [
      "Corte de precisión",
      "Lavado ritual con productos premium",
      "Secado y acabado básico",
      "Consulta de mantenimiento",
      "Té y café de bienvenida",
    ],
    cta: "Reservar Esencial",
  },
  {
    id: "signature",
    name: "Signature",
    subtitle: "La experiencia completa",
    price: 55000,
    period: "desde",
    popular: true,
    features: [
      "Todo lo incluido en Esencial",
      "Tratamiento capilar a elección",
      "Masaje craneal de 10 minutos",
      "Styling con productos Kérastase",
      "Ficha personalizada de cuidado",
      "Prioridad en reservas",
    ],
    cta: "Reservar Signature",
  },
  {
    id: "couture",
    name: "Couture",
    subtitle: "Transformación total",
    price: 120000,
    period: "desde",
    features: [
      "Todo lo incluido en Signature",
      "Coloración o balayage completo",
      "Asesoría de imagen personalizada",
      "Productos de cortesía para llevar",
      "Estilista senior dedicado",
      "Seguimiento post-servicio",
    ],
    cta: "Reservar Couture",
  },
];

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  span?: "tall" | "wide";
};

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
    alt: "Interior elegante del salón Maison Aurea con sillones de cuero",
    span: "tall",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
    alt: "Corte de cabello femenino con técnica de precisión",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1605497788041-5f37ae8084f5?w=800&q=80",
    alt: "Coloración balayage rubio dorado",
    span: "wide",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=800&q=80",
    alt: "Peinado elegante para evento especial",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&q=80",
    alt: "Barbería premium con afeitado clásico",
    span: "tall",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80",
    alt: "Tratamiento capilar con productos de lujo",
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1595476108010-bb81778b08a8?w=800&q=80",
    alt: "Detalle de styling con plancha profesional",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80",
    alt: "Equipo de estilistas trabajando en el salón",
    span: "wide",
  },
];

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  image: string;
};

export const team: TeamMember[] = [
  {
    id: "1",
    name: "Valentina Morales",
    role: "Directora Creativa",
    specialty: "Color & Balayage",
    experience: "15 años",
    image:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&q=80",
  },
  {
    id: "2",
    name: "Martín Reyes",
    role: "Estilista Senior",
    specialty: "Cortes & Texturas",
    experience: "12 años",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    id: "3",
    name: "Camila Fernández",
    role: "Colorista",
    specialty: "Rubios & Fantasía",
    experience: "8 años",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    id: "4",
    name: "Lucas Herrera",
    role: "Barbero Master",
    specialty: "Barbería & Grooming",
    experience: "10 años",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
];

export type Testimonial = {
  id: string;
  name: string;
  text: string;
  rating: number;
  service: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Florencia G.",
    text: "El balayage que me hizo Valentina superó todas mis expectativas. Natural, luminoso y exactamente lo que buscaba. El salón es una experiencia en sí misma.",
    rating: 5,
    service: "Balayage",
  },
  {
    id: "2",
    name: "Diego R.",
    text: "Lucas es un artista con la navaja. El ritual de barbería es increíblemente relajante. Ya no voy a otro lado.",
    rating: 5,
    service: "Barbería Premium",
  },
  {
    id: "3",
    name: "Mariana L.",
    text: "Llevé a mi hija para su primer corte 'de grande' y el trato fue espectacular. Pacientes, cariñosos y el resultado hermoso.",
    rating: 5,
    service: "Corte & Styling",
  },
  {
    id: "4",
    name: "Agustín P.",
    text: "La keratina cambió mi vida capilar. Cabello liso, brillante y sin frizz por meses. Vale cada peso del paquete Couture.",
    rating: 5,
    service: "Keratina",
  },
  {
    id: "5",
    name: "Carolina M.",
    text: "Mi peinado de casamiento fue un sueño. La prueba previa me dio total tranquilidad. Recibí cumplidos toda la noche.",
    rating: 5,
    service: "Peinado de Evento",
  },
  {
    id: "6",
    name: "Sofía A.",
    text: "Ambiente sofisticado pero cálido. Desde que entrás te hacen sentir especial. El café y las atenciones son el plus perfecto.",
    rating: 5,
    service: "Experiencia Signature",
  },
];

export type FAQ = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "¿Cómo puedo reservar mi turno?",
    answer:
      "Podés reservar online desde nuestra sección de Reservas, escribirnos por WhatsApp o completar el formulario de contacto. Confirmamos tu cita en menos de 2 horas.",
  },
  {
    id: "2",
    question: "¿Cuál es la política de cancelación?",
    answer:
      "Pedimos avisar con al menos 24 horas de anticipación para cancelar o reprogramar sin cargo. Cancelaciones con menos de 24 horas pueden tener un cargo del 50% del servicio.",
  },
  {
    id: "3",
    question: "¿Qué debo hacer en mi primera visita?",
    answer:
      "Llegá 10 minutos antes para completar tu ficha de preferencias. Traé fotos de referencia si tenés un look en mente. Nuestro equipo hará un diagnóstico capilar gratuito.",
  },
  {
    id: "4",
    question: "¿Usan productos cruelty-free?",
    answer:
      "Sí. Trabajamos exclusivamente con marcas premium cruelty-free como Kérastase, Olaplex y Davines. Todos nuestros productos son de grado profesional.",
  },
  {
    id: "5",
    question: "¿Hacen servicios a domicilio?",
    answer:
      "Ofrecemos servicios a domicilio para eventos especiales y novias. Consultá disponibilidad con al menos 2 semanas de anticipación.",
  },
  {
    id: "6",
    question: "¿Cuánto dura un balayage?",
    answer:
      "Un balayage completo puede tomar entre 3 y 4 horas dependiendo del largo y el resultado deseado. Te recomendamos venir sin apuro para disfrutar la experiencia.",
  },
  {
    id: "7",
    question: "¿Aceptan tarjetas de crédito?",
    answer:
      "Aceptamos efectivo, débito, crédito y transferencias. También ofrecemos planes de pago en 3 cuotas sin interés para servicios superiores a $80.000.",
  },
  {
    id: "8",
    question: "¿Tienen estacionamiento?",
    answer:
      "Contamos con convenio de estacionamiento en el edificio contiguo con tarifa reducida para clientes. También hay opciones en la calle Santa Fe.",
  },
];

export const heroImage =
  "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=1920&q=85";
