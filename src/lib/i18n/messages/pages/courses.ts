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
    highway: {
      title: "Highway Lessons",
      description:
        "Focused highway driving practice for permit or license holders.",
    },
  },
  includesLabel: "This package includes:",
  lessonRatesLabel: "Lesson Rates",
  highwayRatesLabel: "Highway Lesson Rates",
  buyButton: "Buy Now",
  lessonLabel: "lesson",
  lessonsLabel: "lessons",
  decreaseQuantity: "Decrease quantity",
  increaseQuantity: "Increase quantity",
  selectPackageLabel: "Select package",
  driverEdPackages: [
    {
      title: "Package I – Special Offer",
      price: "$1,250",
      badge: "Full course",
      description:
        "This package qualifies for the Massachusetts Driver Education Certificate of Completion. Students must be 15 years and 9 months old to begin classroom instruction.",
      includes: [
        "30 Hours Classroom Instruction",
        "12 Hours Behind-the-Wheel Instruction",
        "6 Hours Observation",
        "2 Hours Parent/Guardian Orientation Class",
        "Driver's Education Certificate Issuance",
      ],
    },
    {
      title: "Package II",
      price: "$870",
      includes: [
        "12 Hours Behind-the-Wheel Instruction",
        "6 Hours Observation",
        "2 Hours Parent/Guardian Orientation Class",
        "Driver's Education Certificate Issuance",
      ],
      footnote:
        "For students that have already taken the classroom instruction with another driving school.",
    },
    {
      title: "Package III",
      price: "$500",
      description:
        "Students must be 15 years and 9 months old to begin classroom instruction.",
      includes: [
        "30 Hours Classroom Instruction",
        "2 Hours Parent/Guardian Orientation Class",
      ],
      footnote:
        "For students that have already taken the behind-the-wheel instruction with another driving school.",
    },
  ],
  juniorDriverProgram: {
    title: "Junior Driving Lessons",
    fromPrice: "From $80",
    perLesson: "per lesson",
    sampleTiersLabel: "Sample rates",
    moreTiersNote:
      "1–10 lessons available at $80 per lesson. Contact the office for other quantities.",
    pricePerLesson: 80,
    minLessons: 1,
    maxLessons: 10,
    highlightedTiers: [
      { label: "1 lesson", price: "$80.00" },
      { label: "5 lessons", price: "$400.00" },
      { label: "10 lessons", price: "$800.00" },
    ],
  },
  adultProgram: {
    title: "Adult Driving Lessons",
    fromPrice: "From $80",
    perLesson: "per lesson",
    sampleTiersLabel: "Sample rates",
    moreTiersNote:
      "1–10 lessons available at $80 per lesson. Contact the office for other quantities.",
    pricePerLesson: 80,
    minLessons: 1,
    maxLessons: 10,
    highlightedTiers: [
      { label: "1 lesson", price: "$80.00" },
      { label: "5 lessons", price: "$400.00" },
      { label: "10 lessons", price: "$800.00" },
    ],
  },
  adultProgramPackage: {
    title: "Adult Program Package",
    options: [
      { id: "6-lessons", label: "6 Driving Lesson Package", price: "$450.00" },
      { id: "10-lessons", label: "10 Driving Lesson Package", price: "$770.00" },
    ],
  },
  highwayLessons: {
    title: "Highway Lessons",
    description:
      "Highway lessons are conducted on weekdays from 10am to 12pm or on weekends. Each lesson is 1 hour long.",
    tiers: [
      { label: "1 lesson", price: "$100.00" },
      { label: "2 lessons", price: "$200.00" },
      { label: "3 lessons", price: "$300.00" },
    ],
    pricePerLesson: 100,
    minLessons: 1,
    maxLessons: 10,
  },
  disclaimerPermit:
    "You must have an active Massachusetts Learner's Permit/Driver's License to be able to take any driving lessons with JMC.",
  disclaimerLocation:
    "All lessons start and finish at JMC office — no pick up/drop off services are offered.",
} as const;

export type CoursesMessages = {
  label: string;
  title: string;
  subtitle: string;
  sections: {
    teenDriverEd: { title: string; description: string; imageAlt: string };
    adultDrivers: { title: string; description: string };
    highway: { title: string; description: string };
  };
  includesLabel: string;
  lessonRatesLabel: string;
  highwayRatesLabel: string;
  buyButton: string;
  lessonLabel: string;
  lessonsLabel: string;
  decreaseQuantity: string;
  increaseQuantity: string;
  selectPackageLabel: string;
  driverEdPackages: readonly {
    title: string;
    price: string;
    badge?: string;
    description?: string;
    includes: readonly string[];
    footnote?: string;
  }[];
  juniorDriverProgram: {
    title: string;
    fromPrice: string;
    perLesson: string;
    sampleTiersLabel: string;
    moreTiersNote: string;
    pricePerLesson: number;
    minLessons: number;
    maxLessons: number;
    highlightedTiers: readonly { label: string; price: string }[];
  };
  adultProgram: {
    title: string;
    fromPrice: string;
    perLesson: string;
    sampleTiersLabel: string;
    moreTiersNote: string;
    pricePerLesson: number;
    minLessons: number;
    maxLessons: number;
    highlightedTiers: readonly { label: string; price: string }[];
  };
  adultProgramPackage: {
    title: string;
    options: readonly { id: string; label: string; price: string }[];
  };
  highwayLessons: {
    title: string;
    description: string;
    tiers: readonly { label: string; price: string }[];
    pricePerLesson: number;
    minLessons: number;
    maxLessons: number;
  };
  disclaimerPermit: string;
  disclaimerLocation: string;
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
    highway: {
      title: "Clases en autopista",
      description:
        "Práctica enfocada en autopista para titulares de permiso o licencia.",
    },
  },
  includesLabel: "Este paquete incluye:",
  lessonRatesLabel: "Tarifas por clase",
  highwayRatesLabel: "Tarifas de clases en autopista",
  buyButton: "Comprar ahora",
  lessonLabel: "clase",
  lessonsLabel: "clases",
  decreaseQuantity: "Disminuir cantidad",
  increaseQuantity: "Aumentar cantidad",
  selectPackageLabel: "Seleccionar paquete",
  driverEdPackages: [
    {
      title: "Paquete I – Oferta especial",
      price: "$1,250",
      badge: "Curso completo",
      description:
        "Este paquete califica para el Certificado de Finalización de Educación Vial de Massachusetts. Los estudiantes deben tener 15 años y 9 meses para comenzar la instrucción en el aula.",
      includes: [
        "30 horas de instrucción en el aula",
        "12 horas de instrucción práctica al volante",
        "6 horas de observación",
        "2 horas de clase de orientación para padres/tutores",
        "Emisión del certificado de educación vial",
      ],
    },
    {
      title: "Paquete II",
      price: "$870",
      includes: [
        "12 horas de instrucción práctica al volante",
        "6 horas de observación",
        "2 horas de clase de orientación para padres/tutores",
        "Emisión del certificado de educación vial",
      ],
      footnote:
        "Para estudiantes que ya completaron la instrucción en el aula en otra escuela de manejo.",
    },
    {
      title: "Paquete III",
      price: "$500",
      description:
        "Los estudiantes deben tener 15 años y 9 meses para comenzar la instrucción en el aula.",
      includes: [
        "30 horas de instrucción en el aula",
        "2 horas de clase de orientación para padres/tutores",
      ],
      footnote:
        "Para estudiantes que ya completaron la instrucción práctica al volante en otra escuela de manejo.",
    },
  ],
  juniorDriverProgram: {
    title: "Lecciones de manejo para jóvenes",
    fromPrice: "Desde $80",
    perLesson: "por clase",
    sampleTiersLabel: "Tarifas de ejemplo",
    moreTiersNote:
      "Disponible de 1 a 10 clases a $80 por clase. Contacte la oficina para otras cantidades.",
    pricePerLesson: 80,
    minLessons: 1,
    maxLessons: 10,
    highlightedTiers: [
      { label: "1 clase", price: "$80.00" },
      { label: "5 clases", price: "$400.00" },
      { label: "10 clases", price: "$800.00" },
    ],
  },
  adultProgram: {
    title: "Lecciones de manejo para adultos",
    fromPrice: "Desde $80",
    perLesson: "por clase",
    sampleTiersLabel: "Tarifas de ejemplo",
    moreTiersNote:
      "Disponible de 1 a 10 clases a $80 por clase. Contacte la oficina para otras cantidades.",
    pricePerLesson: 80,
    minLessons: 1,
    maxLessons: 10,
    highlightedTiers: [
      { label: "1 clase", price: "$80.00" },
      { label: "5 clases", price: "$400.00" },
      { label: "10 clases", price: "$800.00" },
    ],
  },
  adultProgramPackage: {
    title: "Paquete para adultos",
    options: [
      { id: "6-lessons", label: "Paquete de 6 clases de manejo", price: "$450.00" },
      { id: "10-lessons", label: "Paquete de 10 clases de manejo", price: "$770.00" },
    ],
  },
  highwayLessons: {
    title: "Clases en autopista",
    description:
      "Las clases en autopista se realizan entre semana de 10am a 12pm o los fines de semana. Cada clase dura 1 hora.",
    tiers: [
      { label: "1 clase", price: "$100.00" },
      { label: "2 clases", price: "$200.00" },
      { label: "3 clases", price: "$300.00" },
    ],
    pricePerLesson: 100,
    minLessons: 1,
    maxLessons: 10,
  },
  disclaimerPermit:
    "Debe tener un permiso de aprendiz o licencia de conducir de Massachusetts activo para tomar clases de manejo con JMC.",
  disclaimerLocation:
    "Todas las clases comienzan y terminan en la oficina de JMC — no se ofrece servicio de recogida o entrega.",
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
    highway: {
      title: "Aulas em rodovia",
      description:
        "Prática focada em rodovia para quem já possui permissão ou carteira.",
    },
  },
  includesLabel: "Este pacote inclui:",
  lessonRatesLabel: "Tarifas por aula",
  highwayRatesLabel: "Tarifas de aulas em rodovia",
  buyButton: "Comprar agora",
  lessonLabel: "aula",
  lessonsLabel: "aulas",
  decreaseQuantity: "Diminuir quantidade",
  increaseQuantity: "Aumentar quantidade",
  selectPackageLabel: "Selecionar pacote",
  driverEdPackages: [
    {
      title: "Pacote I – Oferta especial",
      price: "$1,250",
      badge: "Curso completo",
      description:
        "Este pacote qualifica para o Certificado de Conclusão de Educação para Motoristas de Massachusetts. Os alunos devem ter 15 anos e 9 meses para iniciar a instrução em sala de aula.",
      includes: [
        "30 horas de instrução em sala de aula",
        "12 horas de instrução prática ao volante",
        "6 horas de observação",
        "2 horas de aula de orientação para pais/responsáveis",
        "Emissão do certificado de educação para motoristas",
      ],
    },
    {
      title: "Pacote II",
      price: "$870",
      includes: [
        "12 horas de instrução prática ao volante",
        "6 horas de observação",
        "2 horas de aula de orientação para pais/responsáveis",
        "Emissão do certificado de educação para motoristas",
      ],
      footnote:
        "Para alunos que já concluíram a instrução em sala de aula em outra autoescola.",
    },
    {
      title: "Pacote III",
      price: "$500",
      description:
        "Os alunos devem ter 15 anos e 9 meses para iniciar a instrução em sala de aula.",
      includes: [
        "30 horas de instrução em sala de aula",
        "2 horas de aula de orientação para pais/responsáveis",
      ],
      footnote:
        "Para alunos que já concluíram a instrução prática ao volante em outra autoescola.",
    },
  ],
  juniorDriverProgram: {
    title: "Aulas de direção para jovens",
    fromPrice: "A partir de $80",
    perLesson: "por aula",
    sampleTiersLabel: "Tarifas de exemplo",
    moreTiersNote:
      "De 1 a 10 aulas disponíveis a $80 por aula. Entre em contato com o escritório para outras quantidades.",
    pricePerLesson: 80,
    minLessons: 1,
    maxLessons: 10,
    highlightedTiers: [
      { label: "1 aula", price: "$80.00" },
      { label: "5 aulas", price: "$400.00" },
      { label: "10 aulas", price: "$800.00" },
    ],
  },
  adultProgram: {
    title: "Aulas de direção para adultos",
    fromPrice: "A partir de $80",
    perLesson: "por aula",
    sampleTiersLabel: "Tarifas de exemplo",
    moreTiersNote:
      "De 1 a 10 aulas disponíveis a $80 por aula. Entre em contato com o escritório para outras quantidades.",
    pricePerLesson: 80,
    minLessons: 1,
    maxLessons: 10,
    highlightedTiers: [
      { label: "1 aula", price: "$80.00" },
      { label: "5 aulas", price: "$400.00" },
      { label: "10 aulas", price: "$800.00" },
    ],
  },
  adultProgramPackage: {
    title: "Pacote para adultos",
    options: [
      { id: "6-lessons", label: "Pacote de 6 aulas de direção", price: "$450.00" },
      { id: "10-lessons", label: "Pacote de 10 aulas de direção", price: "$770.00" },
    ],
  },
  highwayLessons: {
    title: "Aulas em rodovia",
    description:
      "As aulas em rodovia são realizadas em dias úteis das 10h às 12h ou nos fins de semana. Cada aula tem 1 hora de duração.",
    tiers: [
      { label: "1 aula", price: "$100.00" },
      { label: "2 aulas", price: "$200.00" },
      { label: "3 aulas", price: "$300.00" },
    ],
    pricePerLesson: 100,
    minLessons: 1,
    maxLessons: 10,
  },
  disclaimerPermit:
    "Você deve ter uma Permissão de Aprendiz ou Carteira de Motorista de Massachusetts ativa para fazer aulas de direção com a JMC.",
  disclaimerLocation:
    "Todas as aulas começam e terminam no escritório da JMC — não oferecemos serviço de busca ou entrega.",
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
    highway: {
      title: "Leson Otowout",
      description:
        "Pratik kondwi otowout konsantre pou moun ki gen pèmi oswa lisans.",
    },
  },
  includesLabel: "Pakè sa a gen ladan:",
  lessonRatesLabel: "Tarif Leson",
  highwayRatesLabel: "Tarif Leson Otowout",
  buyButton: "Achte Kounye a",
  lessonLabel: "leson",
  lessonsLabel: "leson",
  decreaseQuantity: "Diminye kantite",
  increaseQuantity: "Ogmante kantite",
  selectPackageLabel: "Chwazi pakè",
  driverEdPackages: [
    {
      title: "Pakè I – Òf Espesyal",
      price: "$1,250",
      badge: "Kou konplè",
      description:
        "Pakè sa a kalifye pou Sètifika Finisman Edikasyon pou Chofè Massachusetts la. Elèv yo dwe gen 15 ane ak 9 mwa pou kòmanse enstriksyon klas la.",
      includes: [
        "30 Èdtan Enstriksyon Klas",
        "12 Èdtan Enstriksyon Pratik nan Volan",
        "6 Èdtan Obsèvasyon",
        "2 Èdtan Klas Oryantasyon Paran/Gadyen",
        "Emisyon Sètifika Edikasyon pou Chofè",
      ],
    },
    {
      title: "Pakè II",
      price: "$870",
      includes: [
        "12 Èdtan Enstriksyon Pratik nan Volan",
        "6 Èdtan Obsèvasyon",
        "2 Èdtan Klas Oryantasyon Paran/Gadyen",
        "Emisyon Sètifika Edikasyon pou Chofè",
      ],
      footnote:
        "Pou elèv ki deja pran enstriksyon klas la nan yon lòt lekòl kondwi.",
    },
    {
      title: "Pakè III",
      price: "$500",
      description:
        "Elèv yo dwe gen 15 ane ak 9 mwa pou kòmanse enstriksyon klas la.",
      includes: [
        "30 Èdtan Enstriksyon Klas",
        "2 Èdtan Klas Oryantasyon Paran/Gadyen",
      ],
      footnote:
        "Pou elèv ki deja pran enstriksyon pratik nan volan nan yon lòt lekòl kondwi.",
    },
  ],
  juniorDriverProgram: {
    title: "Leson Kondwi pou Jèn",
    fromPrice: "Depi $80",
    perLesson: "pa leson",
    sampleTiersLabel: "Tarif egzanp",
    moreTiersNote:
      "1–10 leson disponib nan $80 pa leson. Kontakte biwo a pou lòt kantite.",
    pricePerLesson: 80,
    minLessons: 1,
    maxLessons: 10,
    highlightedTiers: [
      { label: "1 leson", price: "$80.00" },
      { label: "5 leson", price: "$400.00" },
      { label: "10 leson", price: "$800.00" },
    ],
  },
  adultProgram: {
    title: "Leson Kondwi pou Adilt",
    fromPrice: "Depi $80",
    perLesson: "pa leson",
    sampleTiersLabel: "Tarif egzanp",
    moreTiersNote:
      "1–10 leson disponib nan $80 pa leson. Kontakte biwo a pou lòt kantite.",
    pricePerLesson: 80,
    minLessons: 1,
    maxLessons: 10,
    highlightedTiers: [
      { label: "1 leson", price: "$80.00" },
      { label: "5 leson", price: "$400.00" },
      { label: "10 leson", price: "$800.00" },
    ],
  },
  adultProgramPackage: {
    title: "Pakè Pwogram Adilt",
    options: [
      { id: "6-lessons", label: "Pakè 6 Leson Kondwi", price: "$450.00" },
      { id: "10-lessons", label: "Pakè 10 Leson Kondwi", price: "$770.00" },
    ],
  },
  highwayLessons: {
    title: "Leson Otowout",
    description:
      "Leson otowout yo fèt nan jou semèn soti 10am a 12pm oswa nan wikenn. Chak leson dire 1 èdtan.",
    tiers: [
      { label: "1 leson", price: "$100.00" },
      { label: "2 leson", price: "$200.00" },
      { label: "3 leson", price: "$300.00" },
    ],
    pricePerLesson: 100,
    minLessons: 1,
    maxLessons: 10,
  },
  disclaimerPermit:
    "Ou dwe gen yon Pèmi Aprantisaj/Lisans Chofè Massachusetts aktif pou ka pran nenpòt leson kondwi ak JMC.",
  disclaimerLocation:
    "Tout leson kòmanse epi fini nan biwo JMC — pa gen sèvis ranmase/delivre.",
} as const;
