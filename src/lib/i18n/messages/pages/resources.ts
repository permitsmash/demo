export type ResourceLink = {
  title: string;
  description: string;
  href: string;
};

export type ResourcesContent = {
  title: string;
  subtitle: string;
  officialTitle: string;
  schoolTitle: string;
  official: readonly ResourceLink[];
  school: readonly ResourceLink[];
};

import { rmv } from "@/lib/rmv";

const rmvManuals = "https://www.mass.gov/lists/drivers-manuals";

export const resourcesEn: ResourcesContent = {
  title: "Massachusetts driving resources",
  subtitle:
    "JMC Driving School does not publish its own quizzes, videos, or study guides. Use the Registry of Motor Vehicles pages below to study, then book lessons, classes, or a road test with the office.",
  officialTitle: "Official Massachusetts RMV",
  schoolTitle: "Continue with JMC",
  official: [
    {
      title: "Driver's manuals",
      description:
        "Free PDFs of the Massachusetts Driver's Manual, including Spanish and Portuguese editions. This is the book for the learner's permit exam.",
      href: rmvManuals,
    },
    {
      title: "Apply for a learner's permit",
      description:
        "How to apply for a Class D learner's permit, including age, documents, and the knowledge test.",
      href: rmv.learnersPermit,
    },
    {
      title: "Schedule a road test",
      description:
        "How the Massachusetts road test is scheduled, and what the RMV expects on test day.",
      href: rmv.scheduleRoadTest,
    },
    {
      title: "Driver education rules, 540 CMR 23.00",
      description:
        "The rule that classroom driver education can begin at 15 years and 9 months, and that a learner's permit is required before on-road instruction.",
      href: rmv.classroomAge,
    },
    {
      title: "Junior operator license requirements",
      description:
        "The six-month permit period, the clean driving record, and the 40 supervised hours for drivers under 18. A driver-skills course can reduce the supervised hours to 30.",
      href: rmv.juniorOperator,
    },
    {
      title: "Passenger Class D road tests",
      description:
        "The road test sponsor must be 21 or older, with at least one year of driving experience and a valid license from their home state.",
      href: rmv.classDRoadTest,
    },
  ],
  school: [
    {
      title: "Driving programs",
      description: "Teen packages, adult lessons, and what each option includes.",
      href: "/courses",
    },
    {
      title: "Accelerated classes",
      description: "In-person driver's education dates at the Waltham office.",
      href: "/classes",
    },
    {
      title: "Road test sponsorship",
      description: "Saturday tests at the JMC office and weekday tests at RMV sites.",
      href: "/road-tests",
    },
    {
      title: "FAQ",
      description: "Permit age, the parent class, what to bring, and how to reschedule.",
      href: "/faq",
    },
  ],
};

export const resourcesEs: ResourcesContent = {
  title: "Recursos de manejo en Massachusetts",
  subtitle:
    "JMC Driving School no publica sus propios cuestionarios, videos ni guías de estudio. Use las páginas del Registry of Motor Vehicles de abajo para estudiar y luego reserve clases o un examen de manejo con la oficina.",
  officialTitle: "RMV oficial de Massachusetts",
  schoolTitle: "Continuar con JMC",
  official: [
    {
      title: "Manuales del conductor",
      description:
        "PDF gratuitos del manual del conductor de Massachusetts, incluidas ediciones en español y portugués. Es el libro para el examen del permiso de aprendizaje.",
      href: rmvManuals,
    },
    {
      title: "Solicitar un permiso de aprendizaje",
      description:
        "Cómo solicitar un permiso de aprendizaje Clase D, incluida la edad, los documentos y el examen de conocimientos.",
      href: rmv.learnersPermit,
    },
    {
      title: "Programar un examen de manejo",
      description:
        "Cómo se programa el examen de manejo de Massachusetts y qué espera el RMV el día del examen.",
      href: rmv.scheduleRoadTest,
    },
    {
      title: "Reglas de educación vial, 540 CMR 23.00",
      description:
        "La regla que permite empezar la educación vial en el aula a los 15 años y 9 meses, y que exige un permiso de aprendizaje antes de la instrucción en la carretera.",
      href: rmv.classroomAge,
    },
    {
      title: "Requisitos de la licencia de operador junior",
      description:
        "El período de 6 meses con el permiso, el historial limpio y las 40 horas supervisadas para conductores menores de 18 años. Un curso de habilidades puede reducir las horas supervisadas a 30.",
      href: rmv.juniorOperator,
    },
    {
      title: "Exámenes de manejo de pasajeros Clase D",
      description:
        "El patrocinador del examen debe tener 21 años o más, al menos un año de experiencia al volante y una licencia válida de su estado.",
      href: rmv.classDRoadTest,
    },
  ],
  school: [
    {
      title: "Programas de manejo",
      description: "Paquetes para adolescentes, clases para adultos y lo que incluye cada opción.",
      href: "/courses",
    },
    {
      title: "Clases aceleradas",
      description: "Fechas de educación vial en persona en la oficina de Waltham.",
      href: "/classes",
    },
    {
      title: "Patrocinio del examen de manejo",
      description: "Exámenes los sábados en la oficina de JMC y entre semana en sedes del RMV.",
      href: "/road-tests",
    },
    {
      title: "Preguntas frecuentes",
      description: "Edad del permiso, la clase para padres, qué llevar y cómo reprogramar.",
      href: "/faq",
    },
  ],
};

export const resourcesPt: ResourcesContent = {
  title: "Recursos de direção em Massachusetts",
  subtitle:
    "A JMC Driving School não publica os próprios testes, vídeos ou guias de estudo. Use as páginas do Registry of Motor Vehicles abaixo para estudar e depois marque aulas ou o exame prático com o escritório.",
  officialTitle: "RMV oficial de Massachusetts",
  schoolTitle: "Continuar com a JMC",
  official: [
    {
      title: "Manuais do motorista",
      description:
        "PDFs gratuitos do manual do motorista de Massachusetts, inclusive edições em espanhol e português. É o livro para o exame da permissão de aprendiz.",
      href: rmvManuals,
    },
    {
      title: "Solicitar a permissão de aprendiz",
      description:
        "Como solicitar uma permissão de aprendiz Classe D, incluindo idade, documentos e o teste de conhecimentos.",
      href: rmv.learnersPermit,
    },
    {
      title: "Agendar o exame prático",
      description:
        "Como o exame prático de Massachusetts é agendado e o que o RMV espera no dia do exame.",
      href: rmv.scheduleRoadTest,
    },
    {
      title: "Regras de educação para motoristas, 540 CMR 23.00",
      description:
        "A regra que permite começar a educação para motoristas em sala aos 15 anos e 9 meses, e que exige a permissão de aprendiz antes da instrução na rua.",
      href: rmv.classroomAge,
    },
    {
      title: "Requisitos da licença de operador júnior",
      description:
        "O período de 6 meses com a permissão, o histórico limpo e as 40 horas supervisionadas para motoristas menores de 18 anos. Um curso de habilidades pode reduzir as horas supervisionadas para 30.",
      href: rmv.juniorOperator,
    },
    {
      title: "Exames práticos de passageiros Classe D",
      description:
        "O patrocinador do exame deve ter 21 anos ou mais, pelo menos um ano de experiência ao volante e uma carteira válida do estado de origem.",
      href: rmv.classDRoadTest,
    },
  ],
  school: [
    {
      title: "Programas de direção",
      description: "Pacotes para adolescentes, aulas para adultos e o que cada opção inclui.",
      href: "/courses",
    },
    {
      title: "Cursos acelerados",
      description: "Datas de educação para motoristas presencial no escritório de Waltham.",
      href: "/classes",
    },
    {
      title: "Patrocínio do exame prático",
      description: "Exames aos sábados no escritório da JMC e em dias úteis em postos do RMV.",
      href: "/road-tests",
    },
    {
      title: "Perguntas frequentes",
      description: "Idade da permissão, a aula dos pais, o que levar e como remarcar.",
      href: "/faq",
    },
  ],
};

export const resourcesHt: ResourcesContent = {
  title: "Resous kondwi nan Massachusetts",
  subtitle:
    "JMC Driving School pa pibliye pwòp kwiz, videyo, oswa gid etid pa li. Sèvi ak paj Registry of Motor Vehicles ki anba yo pou etidye, epi rezève leson, klas, oswa yon egzamen wout ak biwo a.",
  officialTitle: "RMV ofisyèl Massachusetts",
  schoolTitle: "Kontinye ak JMC",
  official: [
    {
      title: "Manyèl chofè yo",
      description:
        "PDF gratis Manyèl Chofè Massachusetts la, ki gen ladan edisyon panyòl ak pòtigè. Se liv sa a pou egzamen pèmi aprantisaj la.",
      href: rmvManuals,
    },
    {
      title: "Mande yon pèmi aprantisaj",
      description:
        "Kijan pou mande yon pèmi aprantisaj Klas D, ansanm ak laj, dokiman, ak egzamen konesans lan.",
      href: rmv.learnersPermit,
    },
    {
      title: "Pwograme yon egzamen wout",
      description:
        "Kijan egzamen wout Massachusetts la pwograme, ak sa RMV la tann jou egzamen an.",
      href: rmv.scheduleRoadTest,
    },
    {
      title: "Règ edikasyon pou chofè, 540 CMR 23.00",
      description:
        "Règ ki pèmèt edikasyon pou chofè nan klas kòmanse a 15 an ak 9 mwa, epi ki mande yon pèmi aprantisaj anvan enstriksyon sou wout.",
      href: rmv.classroomAge,
    },
    {
      title: "Egzijans lisans operatè jinyò",
      description:
        "Peryòd 6 mwa ak pèmi a, dosye pwòp la, ak 40 èdtan sipèvize pou chofè ki poko gen 18 an. Yon kou konpetans ka diminye èdtan sipèvize yo a 30.",
      href: rmv.juniorOperator,
    },
    {
      title: "Egzamen wout pasaje Klas D",
      description:
        "Patwon egzamen an dwe gen 21 an oswa plis, omwen yon ane eksperyans kondwi, ak yon lisans valab nan eta li.",
      href: rmv.classDRoadTest,
    },
  ],
  school: [
    {
      title: "Pwogram kondwi",
      description: "Pakè pou adolesan, leson pou adilt, ak sa chak opsyon gen ladan.",
      href: "/courses",
    },
    {
      title: "Klas akselere",
      description: "Dat edikasyon pou chofè an pèsòn nan biwo Waltham.",
      href: "/classes",
    },
    {
      title: "Patwonej egzamen wout",
      description: "Egzamen samdi nan biwo JMC ak egzamen jou lasemèn nan lokal RMV.",
      href: "/road-tests",
    },
    {
      title: "Kesyon yo poze souvan",
      description: "Laj pèmi a, klas paran an, kisa pou pote, ak kijan pou chanje yon randevou.",
      href: "/faq",
    },
  ],
};
