import type { Messages } from "./en";
import { coursesEs } from "./pages/courses";
import { roadTestsEs } from "./pages/roadTests";
import { classesEs } from "./pages/classes";
import { faqPageEs } from "./pages/faq";
import { legalEs } from "./pages/legal";
import { resourcesEs } from "./pages/resources";
import {
  ageCheckerEs,
  authEs,
  careersEs,
} from "./pages/misc";
import { enrollmentEs } from "./pages/enrollment";

export const es: Messages = {
  nav: {
    programs: "Programas",
    roadTests: "Exámenes de manejo",
    classes: "Clases",
    about: "Nosotros",
    contact: "Contacto",
    faq: "Preguntas frecuentes",
    signIn: "Iniciar sesión",
    enroll: "Inscribirse",
    toggleMenu: "Abrir o cerrar menú de navegación",
  },
  footer: {
    quickLinks: "Enlaces rápidos",
    home: "Inicio",
    enrollment: "Inscripción",
    driversEd: "Educación vial",
    parentsProgram: "Programa para padres",
    adultProgram: "Programa para adultos",
    roadTestForm: "Formulario de examen de manejo",
    privacyPolicy: "Política de privacidad",
    contactUs: "Contáctenos",
    callNow: "Llame ahora: {phone}",
    rights: "© 2026 {name}. Todos los derechos reservados.",
    by: "Por",
  },
  common: {
    callNow: "Llame ahora: {phone}",
    viewPrograms: "Ver programas",
    enrollNow: "Inscribirse ahora",
    viewAllFaqs: "Ver todas las preguntas frecuentes",
    googleReviews: "({count}+ reseñas de Google)",
    googleReviewsAria: "{rating} de 5 estrellas de más de {count} reseñas de Google",
    address: "Dirección",
    phone: "Teléfono",
    email: "Correo electrónico",
    hours: "Horario",
    languages: "Idiomas",
    officeHours: "Horario de oficina",
    cancellations: "Cancelaciones",
    refundPolicy: "Política de reembolso",
    sendMessage: "Enviar mensaje",
    findUs: "Encuéntrenos",
  },
  home: {
    heroAlt: "Clases de manejo de {name} en Waltham, Massachusetts",
    whyChoose: "¿Por qué elegir {name}?",
    whyChooseDesc:
      "Combinamos instructores certificados con horarios flexibles y patrocinio para el examen de manejo para ayudarle a tener éxito en la carretera y en el RMV.",
    certifiedInstructors: "Instructores certificados",
    certifiedInstructorsDesc:
      "Profesionales certificados por el estado que ayudan a los nuevos conductores a ganar habilidades y confianza en la carretera.",
    flexibleScheduling: "Horarios flexibles",
    flexibleSchedulingDesc:
      "Regístrese en línea, por teléfono o en persona en nuestra oficina de Waltham durante el horario publicado.",
    roadTestSponsorship: "Patrocinio para examen de manejo",
    roadTestSponsorshipDesc:
      "Patrocinio disponible en nuestra oficina y en ubicaciones del RMV en todo Massachusetts.",
    programsLabel: "Programas y clases",
    acceleratedTitle: "Educación vial: cursos acelerados",
    acceleratedDescPrefix:
      "Sesiones intensivas de educación vial con fechas establecidas en Waltham. Consulte nuestros",
    acceleratedDescJoin: "y",
    acceleratedDescSuffix: "para más detalles.",
    drivingPrograms: "programas de manejo",
    classSchedule: "calendario de clases",
    contactOffice: "Contactar la oficina",
    acceleratedUnavailable:
      "Las fechas de cursos acelerados no están disponibles temporalmente. Llame a la oficina o consulte la página de calendario de clases.",
    roadTestTitle: "Patrocinios para examen de manejo",
    roadTestDesc: "Disponible en la oficina de JMC en Waltham o en ubicaciones del RMV en:",
    rmvAria: "Centro de servicios RMV de {name} — abrir en Google Maps",
    reviewsTitle: "Lo que dicen nuestros estudiantes",
    reviewsDesc:
      "Reseñas reales de Google de estudiantes que aprobaron su examen de manejo con {name}.",
    attentionLabel: "Actualización importante",
    attentionTitle: "ATENCIÓN: clases de educación vial en persona",
    attentionGreeting: "Estimados estudiantes y padres:",
    attentionP1: "¡Todas las clases de educación vial se impartirán en persona!",
    attentionP2:
      "Como ofrecemos grupos más pequeños, los cupos son limitados. Apúrese para garantizar su lugar. Puede registrarse en nuestro sitio web, por teléfono o visitando nuestra oficina en {address}.",
    attentionP3:
      "Contáctenos para consultar disponibilidad y cualquier pregunta por correo: {email} o llamando/enviando mensaje de texto: {phone}",
    cancellationsDesc: "Solo se aceptan {hours}.",
    refundDesc:
      "Reembolso completo dentro de los 7 días posteriores a la compra si no se utilizaron servicios. La tarifa del examen de manejo no es reembolsable.",
    faqTitle: "Preguntas frecuentes",
    faqDesc:
      "Respuestas rápidas sobre clases de manejo, inscripción y políticas en Waltham, MA.",
    courseAugust: "Sesión de agosto",
    courseOctober: "Sesión de octubre",
    courseDecember: "Sesión de diciembre",
    faqs: [
      {
        question: "¿Qué áreas atiende JMC Driving School?",
        answer:
          "JMC Driving School atiende Waltham, MA y comunidades cercanas. El patrocinio para examen de manejo está disponible en nuestra oficina y en ubicaciones del RMV en todo Massachusetts.",
      },
      {
        question: "¿Cómo me registro para educación vial o clases de manejo?",
        answer:
          "Puede registrarse a través de nuestro sitio web, por teléfono al (781) 373-1730 o visitando nuestra oficina de Waltham durante el horario de oficina (lun–vie 10am–5pm).",
      },
      {
        question: "¿Ofrecen patrocinio para el examen de manejo?",
        answer:
          "Sí. El patrocinio para examen de manejo está disponible en nuestra oficina de Waltham y en ubicaciones del RMV en todo Massachusetts. Contacte la oficina para tarifas y disponibilidad actuales.",
      },
      {
        question: "¿Cuál es su política de reembolso?",
        answer:
          "Tiene derecho a un reembolso completo dentro de los 7 días posteriores a la compra si no se utilizaron servicios. La tarifa del examen de manejo no es reembolsable.",
      },
    ],
  },
  about: {
    title: "Acerca de {name}",
    heroDesc:
      "Clases de manejo profesionales en Waltham, Massachusetts. Instructores certificados que ayudan a los nuevos conductores a ganar habilidades y confianza en la carretera.",
    heroAlt: "Aula de educación vial en persona de {name} en Waltham, Massachusetts",
    missionTitle: "Nuestra misión",
    missionP1:
      "{name} es un lugar donde estudiantes de todas las edades pueden aprender las habilidades y reglas necesarias para ser un conductor seguro, responsable y cortés. Ofrecemos programas para adolescentes, padres y conductores adultos en {serviceArea}.",
    missionP2:
      "Ya sea que comience desde cero o se prepare para su examen de manejo, nuestros instructores certificados brindan la instrucción profesional y el apoyo que necesita para tener éxito. Impartimos todas las clases de educación vial en persona con grupos más pequeños para garantizar atención personalizada.",
    missionP3Prefix:
      "Nuestro equipo atiende a una comunidad diversa y ofrece apoyo en inglés, portugués, español y criollo haitiano. Contacte nuestra oficina al",
    missionP3Or: "o",
    missionP3Suffix: "para conocer la disponibilidad.",
    officeInfo: "Información de la oficina",
    differenceTitle: "La diferencia de {name}",
    differenceDesc:
      "Instrucción certificada, horarios flexibles y patrocinio para examen de manejo. Todo lo que necesita para salir a la carretera con confianza.",
    certifiedInstructorsDesc:
      "Nuestros instructores son profesionales certificados por el estado dedicados a ayudarle a aprobar su examen de manejo y conducir de forma segura toda la vida.",
    flexibleSchedulingDesc:
      "Regístrese en línea, por teléfono o en persona. Ofrecemos cursos acelerados y clases en persona con cupos limitados.",
    roadTestDesc:
      "Patrocinio para examen de manejo disponible en nuestra oficina de Waltham y ubicaciones del RMV incluyendo Watertown, Lowell y más.",
    ctaTitle: "¿Listo para comenzar su camino?",
    ctaDesc:
      "Contacte nuestra oficina para consultar disponibilidad de clases de educación vial en persona y cursos acelerados.",
  },
  contact: {
    title: "Contacto {name}",
    subtitle:
      "Ya sea que esté listo para comenzar su camino al volante o tenga preguntas sobre nuestros programas, nuestro equipo está aquí para ayudarle a alcanzar sus metas de forma segura.",
    sendMessage: "Envíenos un mensaje",
    fullName: "Nombre completo",
    fullNamePlaceholder: "María García",
    emailAddress: "Correo electrónico",
    emailPlaceholder: "maria@ejemplo.com",
    phoneNumber: "Número de teléfono",
    phonePlaceholder: "(781) 555-1234",
    subject: "Asunto",
    selectInquiry: "Seleccione un tipo de consulta",
    inquiryEnrollment: "Inscripción en educación vial",
    inquiryParent: "Programa para padres",
    inquiryAdult: "Programa para adultos",
    inquiryRoadTest: "Patrocinio para examen de manejo",
    inquiryOther: "Otro",
    yourMessage: "Su mensaje",
    messagePlaceholder: "¿Cómo podemos ayudarle hoy?",
    contactInfo: "Información de contacto",
    mapTitle: "Mapa de ubicación de JMC Driving School",
    imageAlt: "Contacto de JMC Driving School",
    submitting: "Enviando...",
    successTitle: "¡Mensaje enviado!",
    successMessage: "Gracias por contactarnos. Nos pondremos en contacto con usted pronto.",
    errorMessage: "No pudimos enviar su mensaje. Inténtelo de nuevo o llámenos directamente.",
    sendAnother: "Enviar otro mensaje",
    validationRequired: "Complete todos los campos obligatorios.",
    validationEmail: "Ingrese una dirección de correo electrónico válida.",
    validationPhone: "Ingrese un número de teléfono válido.",
  },
  site: {
    tagline: "Aprenda a manejar con confianza",
    description:
      "Clases de manejo profesionales en Waltham, Massachusetts. Instructores certificados que ayudan a los nuevos conductores a ganar habilidades y confianza en la carretera.",
    serviceArea: "Waltham, MA y áreas circundantes",
    officeHours: "Lun–Vie 10am–5pm",
    cancellationHours: "Lun–Vie 10am–5pm",
  },
  courses: coursesEs,
  roadTests: roadTestsEs,
  classes: classesEs,
  faqPage: faqPageEs,
  legal: legalEs,
  resources: resourcesEs,
  careers: careersEs,
  auth: authEs,
  ageChecker: ageCheckerEs,
  enrollment: enrollmentEs,
};
