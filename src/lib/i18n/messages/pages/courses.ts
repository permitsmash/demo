import { coursesGuideEn, coursesGuideEs, coursesGuidePt, coursesGuideHt, type ContentGuide } from "./guides";

export const coursesEn = {
  label: "Programs",
  title: "Driver Education Packages",
  subtitle:
    "Browse available programs and packages and complete your purchase.",
  sections: {
    teenDriverEd: {
      title: "Teen Driver Education",
      description:
        "Complete packages for new drivers working toward their Massachusetts driver's license.",
      imageAlt: "Students in a JMC Driving School classroom session",
    },
    adultDrivers: {
      title: "Adult Drivers",
      description:
        "Flexible pay-as-you-go lessons and bundled packages for adult learners.",
    },
    individualLessons: {
      title: "Driving Lessons",
      description: "Pay-as-you-go behind-the-wheel instruction.",
    },
    highway: {
      title: "Highway Lessons",
      description:
        "Focused highway driving practice for permit or license holders.",
    },
  },
  includesLabel: "This package includes:",
  buyButton: "Enroll in {name}",
  bookLessonButton: "Book {count} {unit} — {name}",
  bookPackageButton: "Book the {name}",
  emptyCatalog:
    "Programs are temporarily unavailable. Please call the office or try again shortly.",
  perLesson: "per lesson",
  lessonLabel: "lesson",
  lessonsLabel: "lessons",
  decreaseQuantity: "Decrease quantity",
  increaseQuantity: "Increase quantity",
  disclaimerPermit:
    "You must have an active Massachusetts Learner's Permit/Driver's License to be able to take any driving lessons with JMC.",
  disclaimerLocation:
    "All lessons start and finish at JMC office — no pick up/drop off services are offered.",
  guide: coursesGuideEn,
} as const;

export type CoursesMessages = {
  label: string;
  title: string;
  subtitle: string;
  sections: {
    teenDriverEd: { title: string; description: string; imageAlt: string };
    adultDrivers: { title: string; description: string };
    individualLessons: { title: string; description: string };
    highway: { title: string; description: string };
  };
  includesLabel: string;
  buyButton: string;
  bookLessonButton: string;
  bookPackageButton: string;
  emptyCatalog: string;
  perLesson: string;
  lessonLabel: string;
  lessonsLabel: string;
  decreaseQuantity: string;
  increaseQuantity: string;
  disclaimerPermit: string;
  disclaimerLocation: string;
  guide: ContentGuide;
};

export const coursesEs = {
  label: "Programas",
  title: "Paquetes de educación vial",
  subtitle:
    "Explore los programas y paquetes disponibles y complete su compra.",
  sections: {
    teenDriverEd: {
      title: "Educación vial para adolescentes",
      description:
        "Paquetes completos para nuevos conductores que buscan obtener su licencia de Massachusetts.",
      imageAlt: "Estudiantes en una sesión de aula en JMC Driving School",
    },
    adultDrivers: {
      title: "Conductores adultos",
      description:
        "Clases flexibles por separado y paquetes agrupados para adultos.",
    },
    individualLessons: {
      title: "Clases de manejo",
      description: "Instrucción práctica de manejo con pago por lección.",
    },
    highway: {
      title: "Clases en autopista",
      description:
        "Práctica enfocada en autopista para titulares de permiso o licencia.",
    },
  },
  includesLabel: "Este paquete incluye:",
  buyButton: "Inscribirse en {name}",
  bookLessonButton: "Reservar {count} {unit} — {name}",
  bookPackageButton: "Reservar {name}",
  emptyCatalog:
    "Los programas no están disponibles temporalmente. Llame a la oficina o intente de nuevo más tarde.",
  perLesson: "por clase",
  lessonLabel: "clase",
  lessonsLabel: "clases",
  decreaseQuantity: "Disminuir cantidad",
  increaseQuantity: "Aumentar cantidad",
  disclaimerPermit:
    "Debe tener un permiso de aprendiz o licencia de conducir de Massachusetts activo para tomar clases de manejo con JMC.",
  disclaimerLocation:
    "Todas las clases comienzan y terminan en la oficina de JMC — no se ofrece servicio de recogida o entrega.",
  guide: coursesGuideEs,
} as const;

export const coursesPt = {
  label: "Programas",
  title: "Pacotes de educação para motoristas",
  subtitle:
    "Veja os programas e pacotes disponíveis e conclua sua compra.",
  sections: {
    teenDriverEd: {
      title: "Educação para jovens motoristas",
      description:
        "Pacotes completos para novos motoristas em busca da carteira de Massachusetts.",
      imageAlt: "Alunos em uma aula presencial na JMC Driving School",
    },
    adultDrivers: {
      title: "Motoristas adultos",
      description:
        "Aulas avulsas flexíveis e pacotes com desconto para adultos.",
    },
    individualLessons: {
      title: "Aulas de direção",
      description: "Instrução prática de direção com pagamento por aula.",
    },
    highway: {
      title: "Aulas em rodovia",
      description:
        "Prática focada em rodovia para quem já possui permissão ou carteira.",
    },
  },
  includesLabel: "Este pacote inclui:",
  buyButton: "Inscrever-se em {name}",
  bookLessonButton: "Agendar {count} {unit} — {name}",
  bookPackageButton: "Agendar {name}",
  emptyCatalog:
    "Os programas estão temporariamente indisponíveis. Ligue para o escritório ou tente novamente em breve.",
  perLesson: "por aula",
  lessonLabel: "aula",
  lessonsLabel: "aulas",
  decreaseQuantity: "Diminuir quantidade",
  increaseQuantity: "Aumentar quantidade",
  disclaimerPermit:
    "Você deve ter uma Permissão de Aprendiz ou Carteira de Motorista de Massachusetts ativa para fazer aulas de direção com a JMC.",
  disclaimerLocation:
    "Todas as aulas começam e terminam no escritório da JMC — não oferecemos serviço de busca ou entrega.",
  guide: coursesGuidePt,
} as const;

export const coursesHt = {
  label: "Pwogram",
  title: "Pakè Edikasyon pou Chofè",
  subtitle:
    "Gade pwogram ak pakè ki disponib yo epi konplete acha ou.",
  sections: {
    teenDriverEd: {
      title: "Edikasyon pou Chofè Adolesan",
      description:
        "Pakè konplè pou nouvo chofè k ap travay pou jwenn lisans chofè Massachusetts yo.",
      imageAlt: "Elèv nan yon sesyon klas JMC Driving School",
    },
    adultDrivers: {
      title: "Chofè Adilt",
      description:
        "Leson fleksib peye-pou-chak-itilizasyon ak pakè gwoupe pou adilt k ap aprann.",
    },
    individualLessons: {
      title: "Leson Kondwi",
      description: "Enstriksyon pratik kondwi ak peman pa leson.",
    },
    highway: {
      title: "Leson Otowout",
      description:
        "Pratik kondwi otowout konsantre pou moun ki gen pèmi oswa lisans.",
    },
  },
  includesLabel: "Pakè sa a gen ladan:",
  buyButton: "Enskri nan {name}",
  bookLessonButton: "Rezève {count} {unit} — {name}",
  bookPackageButton: "Rezève {name}",
  emptyCatalog:
    "Pwogram yo pa disponib pou kounye a. Tanpri rele biwo a oswa eseye ankò byento.",
  perLesson: "pa leson",
  lessonLabel: "leson",
  lessonsLabel: "leson",
  decreaseQuantity: "Diminye kantite",
  increaseQuantity: "Ogmante kantite",
  disclaimerPermit:
    "Ou dwe gen yon Pèmi Aprantisaj/Lisans Chofè Massachusetts aktif pou ka pran nenpòt leson kondwi ak JMC.",
  disclaimerLocation:
    "Tout leson kòmanse epi fini nan biwo JMC — pa gen sèvis ranmase/delivre.",
  guide: coursesGuideHt,
} as const;
