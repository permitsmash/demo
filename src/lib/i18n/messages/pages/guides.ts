export type ContentGuide = {
  title: string;
  sections: readonly {
    id?: string;
    heading: string;
    paragraphs: readonly string[];
  }[];
};

export const coursesGuideEn: ContentGuide = {
  title: "How to choose a driving program",
  sections: [
    {
      id: "what-is-drivers-ed",
      heading: "What is driver's ed in Massachusetts?",
      paragraphs: [
        "Driver's education in Massachusetts is the program a driver under 18 must complete before a Class D license: 30 hours of classroom instruction, 12 hours of behind-the-wheel driving, 6 hours of observation, and a 2-hour parent or guardian class.",
        "At 18 or older, driver's education is not required. A learner's permit is still required before the road test.",
      ],
    },
    {
      id: "teen-packages",
      heading: "How Package 1, Package II, and Package III differ",
      paragraphs: [
        "Package 1 is the full teen course. Choose it when the student still needs every part of Massachusetts driver's education.",
        "Package II fits a student whose classroom hours were already finished at another school.",
        "Package III fits a student who still needs the classroom course. Classroom instruction can begin at 15 years and 9 months. The Massachusetts Registry of Motor Vehicles sets that age in [540 CMR 23.00](https://www.mass.gov/regulations/540-CMR-2300-licensing-certification-and-operating-requirements-for-professional-driving-school-instructors).",
        "The cards above are the current prices. For students who started on or after May 1, 2019, the parent or guardian class has to be finished before road lessons. It does not have to be finished before the classroom course.",
      ],
    },
    {
      id: "drivers-ed-cost",
      heading: "What driver's education costs in Massachusetts",
      paragraphs: [
        "Massachusetts requires the hours for a driver under 18. It does not sell the course, and it does not publish one tuition that every school must charge. The current JMC prices are the cards on this page: Package 1 for the full course, Package II for the on-road portion, and Package III for the classroom portion. Adult lesson prices are the adult cards on this page.",
        "Registry fees are separate from the school price. The learner's permit exam has its own Registry fee, described on [Apply for a passenger Class D learner's permit](https://www.mass.gov/how-to/apply-for-a-passenger-class-d-learners-permit). The Class D road test fee published by the Registry is $35. That state fee is not refunded if you fail, arrive late, miss the test, or cancel with less than 72 hours' notice. The Registry states that rule on [Schedule your road test](https://www.mass.gov/how-to/schedule-your-road-test).",
        "Road test sponsorship is a third cost. It pays for the JMC car and a certified instructor at the test, and the amount depends on the location. Those prices are on the road test page. The school sponsorship fee is non-refundable.",
      ],
    },
    {
      heading: "Teen driver's education",
      paragraphs: [
        "A full teen package follows the Massachusetts driver's education path: classroom instruction, behind-the-wheel practice, observation time, and a parent or guardian class. Students who complete those hours can receive a Driver's Education Certificate of Completion. Classroom sessions can begin at 15 years and 9 months. The Massachusetts Registry of Motor Vehicles sets that classroom age in [540 CMR 23.00](https://www.mass.gov/regulations/540-CMR-2300-licensing-certification-and-operating-requirements-for-professional-driving-school-instructors). A learner's permit is issued at age 16, and that permit is required before any on-road lesson.",
        "For students who started on or after May 1, 2019, the Registry of Motor Vehicles requires a two-hour parent or guardian class. It must be finished before road lessons begin, and it does not have to be finished before classroom sessions. If another school already completed the classroom hours, enroll in a behind-the-wheel package. If the driving hours were finished elsewhere, enroll in a classroom package that still includes the parent class. Each listing on this page shows what is included and the current price.",
      ],
    },
    {
      id: "adult-license",
      heading: "The license path at 18 and older",
      paragraphs: [
        "At 18, Massachusetts does not require a driver's education program before a Class D license. Applicants under 18 do. Those junior operator rules include a driver's education certificate, a learner's permit held for 6 months with a clean record, 40 supervised hours or 30 with a driver-skills course, and a parent or guardian class. The Registry states the under-18 rules on [Junior operator license requirements](https://www.mass.gov/info-details/junior-operator-license-jol-requirements) and states that a driver over 18 does not need driver's education on [Passenger Class D road tests](https://www.mass.gov/info-details/passenger-class-d-road-tests).",
        "An adult still needs a Massachusetts learner's permit before the road test. The permit requires Massachusetts residency, a passed permit exam, and no license or permit from another state. Written parental consent is required only when the applicant is under 18. The Registry explains that on [Apply for a passenger Class D learner's permit](https://www.mass.gov/how-to/apply-for-a-passenger-class-d-learners-permit).",
        "The road test still requires a sponsor who is 21 or older, with at least one year of driving experience and a valid driver's license from their home state. A foreign license does not qualify. An applicant can attempt no more than six Class D road tests in 12 months. Both rules are on [Passenger Class D road tests](https://www.mass.gov/info-details/passenger-class-d-road-tests).",
        "Lessons are optional at 18 and older. A new driver can book one lesson at a time or an adult package. Each listing above shows the current price, what it includes, and the session length. Every lesson starts and ends at 973 Main Street in Waltham. There is no home pickup. Bring the physical permit or license. To move a lesson without losing the fee, give 48 hours' notice during office hours, Monday through Friday, 10am to 5pm. Call (781) 373-1730. The office can help in English, Portuguese, Spanish, and Haitian Creole.",
      ],
    },
    {
      heading: "Before the first lesson",
      paragraphs: [
        "Bring a valid physical learner's permit or driver's license. Digital copies are not accepted. Wear closed-toe shoes, and bring glasses or contact lenses if the permit has a B restriction. To reschedule a lesson without losing the fee, give 48 hours' notice during office hours, which is two business days. You can enroll on this page, call (781) 373-1730, or visit the office Monday through Friday from 10am to 5pm. The office can help in English, Portuguese, Spanish, and Haitian Creole.",
      ],
    },
  ],
};

export const coursesGuideEs: ContentGuide = {
  title: "Cómo elegir un programa de manejo",
  sections: [
    {
      id: "what-is-drivers-ed",
      heading: "¿Qué es la educación vial en Massachusetts?",
      paragraphs: [
        "La educación vial en Massachusetts es el programa que un conductor menor de 18 años debe completar antes de una licencia Clase D: 30 horas de instrucción en el aula, 12 horas de práctica al volante, 6 horas de observación y una clase de 2 horas para el padre, la madre o el tutor.",
        "A partir de los 18 años, la educación vial no es obligatoria. Un permiso de aprendizaje sigue siendo necesario antes del examen de manejo.",
      ],
    },
    {
      id: "teen-packages",
      heading: "En qué se diferencian Package 1, Package II y Package III",
      paragraphs: [
        "Package 1 es el curso completo para adolescentes. Conviene cuando el estudiante todavía necesita cada parte de la educación vial de Massachusetts.",
        "Package II sirve para un estudiante cuyas horas de aula ya se completaron en otra escuela.",
        "Package III sirve para un estudiante que todavía necesita el curso de aula. La instrucción en el aula puede empezar a los 15 años y 9 meses. El Registry of Motor Vehicles de Massachusetts fija esa edad en [540 CMR 23.00](https://www.mass.gov/regulations/540-CMR-2300-licensing-certification-and-operating-requirements-for-professional-driving-school-instructors).",
        "Las fichas de arriba son los precios actuales. Para los estudiantes que empezaron el 1 de mayo de 2019 o después, la clase para el padre, la madre o el tutor debe terminarse antes de las clases de manejo. No tiene que terminarse antes del curso de aula.",
      ],
    },
    {
      id: "drivers-ed-cost",
      heading: "Cuánto cuesta la educación vial en Massachusetts",
      paragraphs: [
        "Massachusetts exige las horas para un conductor menor de 18 años. El estado no vende el curso y no publica una sola colegiatura que todas las escuelas deban cobrar. Los precios actuales de JMC son las fichas de esta página: Package 1 para el curso completo, Package II para la parte en la carretera y Package III para la parte de aula. Los precios de las clases para adultos son las fichas de adultos de esta página.",
        "Las tarifas del Registry son aparte del precio de la escuela. El examen del permiso de aprendizaje tiene su propia tarifa del Registry, descrita en [Solicitar un permiso de aprendizaje de pasajeros Clase D](https://www.mass.gov/how-to/apply-for-a-passenger-class-d-learners-permit). La tarifa del examen de manejo Clase D que publica el Registry es de $35. Esa tarifa estatal no se reembolsa si no aprueba, llega tarde, no se presenta o cancela con menos de 72 horas de anticipación. El Registry indica esa regla en [Programe su examen de manejo](https://www.mass.gov/how-to/schedule-your-road-test).",
        "El patrocinio del examen es un tercer costo. Paga el auto de JMC y un instructor certificado en el examen, y el monto depende del lugar. Esos precios están en la página del examen de manejo. La tarifa de patrocinio de la escuela no es reembolsable.",
      ],
    },
    {
      heading: "Educación vial para adolescentes",
      paragraphs: [
        "Un paquete completo para adolescentes sigue el camino de educación vial de Massachusetts: instrucción en el aula, práctica al volante, tiempo de observación y una clase para el padre, la madre o el tutor. Los estudiantes que completan esas horas pueden recibir un certificado de finalización de educación vial. Las sesiones de aula pueden comenzar a los 15 años y 9 meses. El Registry of Motor Vehicles de Massachusetts fija esa edad para el aula en [540 CMR 23.00](https://www.mass.gov/regulations/540-CMR-2300-licensing-certification-and-operating-requirements-for-professional-driving-school-instructors). El permiso de aprendizaje se expide a los 16 años, y ese permiso es obligatorio antes de cualquier clase en la carretera.",
        "Para los estudiantes que empezaron el 1 de mayo de 2019 o después, el Registry of Motor Vehicles exige una clase de dos horas para el padre, la madre o el tutor. Debe terminarse antes de que comiencen las clases de manejo, y no tiene que terminarse antes de las sesiones de aula. Si otra escuela ya completó las horas de aula, inscríbase en un paquete de práctica al volante. Si las horas de manejo se terminaron en otro lugar, inscríbase en un paquete de aula que todavía incluya la clase para padres. Cada ficha de esta página muestra lo que incluye y el precio actual.",
      ],
    },
    {
      id: "adult-license",
      heading: "El camino a la licencia a partir de los 18 años",
      paragraphs: [
        "A los 18 años, Massachusetts no exige un programa de educación vial antes de una licencia Clase D. A los menores de 18 sí. Esas reglas de operador junior incluyen un certificado de educación vial, un permiso de aprendizaje durante 6 meses con un historial limpio, 40 horas supervisadas o 30 con un curso de habilidades, y una clase para el padre, la madre o el tutor. El Registry explica las reglas para menores de 18 en [Requisitos de la licencia de operador junior](https://www.mass.gov/info-details/junior-operator-license-jol-requirements) y explica que un conductor mayor de 18 no necesita educación vial en [Exámenes de manejo de pasajeros Clase D](https://www.mass.gov/info-details/passenger-class-d-road-tests).",
        "Un adulto igual necesita un permiso de aprendizaje de Massachusetts antes del examen de manejo. El permiso exige residencia en Massachusetts, aprobar el examen del permiso y no tener licencia ni permiso de otro estado. El consentimiento escrito de un padre o tutor solo se exige si el solicitante es menor de 18 años. El Registry lo explica en [Solicitar un permiso de aprendizaje de pasajeros Clase D](https://www.mass.gov/how-to/apply-for-a-passenger-class-d-learners-permit).",
        "El examen de manejo igual exige un patrocinador de 21 años o más, con al menos un año de experiencia al volante y una licencia válida de su estado. Una licencia extranjera no sirve. Un solicitante no puede intentar más de seis exámenes Clase D en 12 meses. Ambas reglas están en [Exámenes de manejo de pasajeros Clase D](https://www.mass.gov/info-details/passenger-class-d-road-tests).",
        "Las clases son opcionales a partir de los 18 años. Un conductor nuevo puede reservar una clase a la vez o un paquete para adultos. Cada ficha de arriba muestra el precio actual, lo que incluye y la duración de la sesión. Cada clase empieza y termina en 973 Main Street, Waltham. No hay recogida en casa. Lleve el permiso o la licencia físicos. Para cambiar una clase sin perder el pago, avise con 48 horas de anticipación en horario de oficina, de lunes a viernes, de 10am a 5pm. Llame al (781) 373-1730. La oficina puede atender en inglés, portugués, español y criollo haitiano.",
      ],
    },
    {
      heading: "Antes de la primera clase",
      paragraphs: [
        "Traiga un permiso de aprendizaje o una licencia de conducir físicos y válidos. No se aceptan copias digitales. Use zapatos cerrados y traiga lentes o lentes de contacto si el permiso tiene una restricción B. Para cambiar una clase sin perder el pago, avise con 48 horas de anticipación durante el horario de oficina, es decir, dos días hábiles. Puede inscribirse en esta página, llamar al (781) 373-1730 o visitar la oficina de lunes a viernes, de 10am a 5pm. La oficina puede atender en inglés, portugués, español y criollo haitiano.",
      ],
    },
  ],
};

export const coursesGuidePt: ContentGuide = {
  title: "Como escolher um programa de direção",
  sections: [
    {
      id: "what-is-drivers-ed",
      heading: "O que é a educação para motoristas em Massachusetts?",
      paragraphs: [
        "A educação para motoristas em Massachusetts é o programa que um motorista menor de 18 anos precisa concluir antes de uma carteira Classe D: 30 horas de instrução em sala, 12 horas de prática ao volante, 6 horas de observação e uma aula de 2 horas para o pai, a mãe ou o responsável.",
        "A partir dos 18 anos, a educação para motoristas não é obrigatória. A permissão de aprendiz continua necessária antes do exame prático.",
      ],
    },
    {
      id: "teen-packages",
      heading: "Como Package 1, Package II e Package III se diferenciam",
      paragraphs: [
        "Package 1 é o curso completo para adolescentes. Escolha esse pacote quando o aluno ainda precisa de cada parte da educação para motoristas de Massachusetts.",
        "Package II serve para um aluno cujas horas de sala já foram concluídas em outra escola.",
        "Package III serve para um aluno que ainda precisa do curso em sala. A instrução em sala pode começar aos 15 anos e 9 meses. O Registry of Motor Vehicles de Massachusetts define essa idade em [540 CMR 23.00](https://www.mass.gov/regulations/540-CMR-2300-licensing-certification-and-operating-requirements-for-professional-driving-school-instructors).",
        "Os cartões acima são os preços atuais. Para alunos que começaram em 1º de maio de 2019 ou depois, a aula do pai, da mãe ou do responsável precisa terminar antes das aulas práticas. Ela não precisa terminar antes do curso em sala.",
      ],
    },
    {
      id: "drivers-ed-cost",
      heading: "Quanto custa a educação para motoristas em Massachusetts",
      paragraphs: [
        "Massachusetts exige as horas para um motorista menor de 18 anos. O estado não vende o curso e não publica uma mensalidade única que toda escola deva cobrar. Os preços atuais da JMC são os cartões desta página: Package 1 para o curso completo, Package II para a parte na rua e Package III para a parte em sala. Os preços das aulas para adultos são os cartões de adultos desta página.",
        "As taxas do Registry ficam fora do preço da escola. O exame da permissão de aprendiz tem a própria taxa do Registry, descrita em [Solicitar uma permissão de aprendiz de passageiros Classe D](https://www.mass.gov/how-to/apply-for-a-passenger-class-d-learners-permit). A taxa do exame prático Classe D publicada pelo Registry é de $35. Essa taxa estadual não é reembolsada se você não passar, chegar atrasado, faltar ou cancelar com menos de 72 horas de antecedência. O Registry informa essa regra em [Agende seu exame prático](https://www.mass.gov/how-to/schedule-your-road-test).",
        "O patrocínio do exame é um terceiro custo. Ele paga o carro da JMC e um instrutor certificado no exame, e o valor depende do local. Esses preços estão na página do exame prático. A taxa de patrocínio da escola não é reembolsável.",
      ],
    },
    {
      heading: "Educação para motoristas adolescentes",
      paragraphs: [
        "Um pacote completo para adolescentes segue o percurso de educação para motoristas de Massachusetts: aulas em sala, prática ao volante, tempo de observação e uma aula para o pai, a mãe ou o responsável. Alunos que completam essas horas podem receber um certificado de conclusão. As aulas em sala podem começar aos 15 anos e 9 meses. O Registry of Motor Vehicles de Massachusetts define essa idade para a sala de aula em [540 CMR 23.00](https://www.mass.gov/regulations/540-CMR-2300-licensing-certification-and-operating-requirements-for-professional-driving-school-instructors). A permissão de aprendiz é emitida aos 16 anos e é obrigatória antes de qualquer aula na rua.",
        "Para alunos que começaram em 1º de maio de 2019 ou depois, o Registry of Motor Vehicles exige uma aula de duas horas para o pai, a mãe ou o responsável. Ela precisa terminar antes das aulas práticas e não precisa terminar antes das aulas em sala. Se outra escola já concluiu as horas de sala, inscreva-se em um pacote de prática ao volante. Se as horas de direção foram concluídas em outro lugar, inscreva-se em um pacote de sala que ainda inclua a aula dos pais. Cada opção nesta página mostra o que está incluído e o preço atual.",
      ],
    },
    {
      id: "adult-license",
      heading: "O caminho da carteira a partir dos 18 anos",
      paragraphs: [
        "Aos 18 anos, Massachusetts não exige um programa de educação para motoristas antes de uma carteira Classe D. Menores de 18 precisam. Essas regras de operador júnior incluem um certificado de educação para motoristas, uma permissão de aprendiz por 6 meses com histórico limpo, 40 horas supervisionadas ou 30 com um curso de habilidades, e uma aula para o pai, a mãe ou o responsável. O Registry explica as regras para menores de 18 em [Requisitos da licença de operador júnior](https://www.mass.gov/info-details/junior-operator-license-jol-requirements) e explica que um motorista com mais de 18 anos não precisa de educação para motoristas em [Exames práticos de passageiros Classe D](https://www.mass.gov/info-details/passenger-class-d-road-tests).",
        "Um adulto ainda precisa de uma permissão de aprendiz de Massachusetts antes do exame prático. A permissão exige residência em Massachusetts, aprovação no exame da permissão e nenhuma carteira ou permissão de outro estado. O consentimento escrito de um pai ou responsável só é exigido quando o candidato tem menos de 18 anos. O Registry explica isso em [Solicitar uma permissão de aprendiz de passageiros Classe D](https://www.mass.gov/how-to/apply-for-a-passenger-class-d-learners-permit).",
        "O exame prático ainda exige um patrocinador de 21 anos ou mais, com pelo menos um ano de experiência ao volante e uma carteira válida do estado de origem. Uma carteira estrangeira não serve. Um candidato não pode tentar mais de seis exames Classe D em 12 meses. As duas regras estão em [Exames práticos de passageiros Classe D](https://www.mass.gov/info-details/passenger-class-d-road-tests).",
        "As aulas são opcionais a partir dos 18 anos. Um motorista novo pode marcar uma aula de cada vez ou um pacote para adultos. Cada opção acima mostra o preço atual, o que inclui e a duração da sessão. Toda aula começa e termina na 973 Main Street, em Waltham. Não há busca em casa. Leve a permissão ou a carteira física. Para remarcar uma aula sem perder o pagamento, avise com 48 horas de antecedência no horário do escritório, de segunda a sexta, das 10h às 17h. Ligue para (781) 373-1730. O escritório atende em inglês, português, espanhol e crioulo haitiano.",
      ],
    },
    {
      heading: "Antes da primeira aula",
      paragraphs: [
        "Traga uma permissão de aprendiz ou carteira de motorista física e válida. Cópias digitais não são aceitas. Use sapatos fechados e traga óculos ou lentes de contato se a permissão tiver restrição B. Para remarcar uma aula sem perder o pagamento, avise com 48 horas de antecedência no horário do escritório, o que equivale a dois dias úteis. Você pode se inscrever nesta página, ligar para (781) 373-1730 ou visitar o escritório de segunda a sexta, das 10h às 17h. O escritório atende em inglês, português, espanhol e crioulo haitiano.",
      ],
    },
  ],
};

export const coursesGuideHt: ContentGuide = {
  title: "Kijan pou chwazi yon pwogram kondwi",
  sections: [
    {
      id: "what-is-drivers-ed",
      heading: "Kisa edikasyon pou chofè ye nan Massachusetts?",
      paragraphs: [
        "Edikasyon pou chofè nan Massachusetts se pwogram yon chofè ki poko gen 18 an dwe fini anvan yon lisans Klas D: 30 èdtan enstriksyon nan klas, 12 èdtan pratik dèyè volan, 6 èdtan obsèvasyon, ak yon klas 2 èdtan pou paran oswa gadyen.",
        "Depi 18 an, edikasyon pou chofè pa obligatwa. Yon pèmi aprantisaj toujou nesesè anvan egzamen wout la.",
      ],
    },
    {
      id: "teen-packages",
      heading: "Kijan Package 1, Package II, ak Package III diferan",
      paragraphs: [
        "Package 1 se kou konplè pou adolesan an. Chwazi li lè elèv la toujou bezwen chak pati edikasyon pou chofè Massachusetts.",
        "Package II bon pou yon elèv ki deja fini èdtan klas yo nan yon lòt lekòl.",
        "Package III bon pou yon elèv ki toujou bezwen kou klas la. Enstriksyon nan klas ka kòmanse a 15 an ak 9 mwa. Registry of Motor Vehicles Massachusetts la fikse laj sa a nan [540 CMR 23.00](https://www.mass.gov/regulations/540-CMR-2300-licensing-certification-and-operating-requirements-for-professional-driving-school-instructors).",
        "Kat ki anwo yo se pri aktyèl yo. Pou elèv ki te kòmanse 1 me 2019 oswa apre, klas paran oswa gadyen an dwe fini anvan leson sou wout yo. Li pa oblije fini anvan kou klas la.",
      ],
    },
    {
      id: "drivers-ed-cost",
      heading: "Konbyen edikasyon pou chofè koute nan Massachusetts",
      paragraphs: [
        "Massachusetts mande èdtan yo pou yon chofè ki poko gen 18 an. Eta a pa vann kou a, epi li pa pibliye yon sèl frè tout lekòl dwe mande. Pri aktyèl JMC yo se kat ki sou paj sa a: Package 1 pou kou konplè a, Package II pou pati sou wout la, ak Package III pou pati klas la. Pri leson pou adilt yo se kat adilt yo sou paj sa a.",
        "Frè Registry yo apa de pri lekòl la. Egzamen pèmi aprantisaj la gen pwòp frè Registry a, ki dekri nan [Mande yon pèmi aprantisaj pasaje Klas D](https://www.mass.gov/how-to/apply-for-a-passenger-class-d-learners-permit). Frè egzamen wout Klas D Registry a pibliye se $35. Frè eta sa a pa ranbouse si ou pa pase, ou rive an reta, ou pa parèt, oswa ou anile ak mwens pase 72 èdtan avi. Registry a di règ sa a nan [Pwograme egzamen wout ou](https://www.mass.gov/how-to/schedule-your-road-test).",
        "Patwonej egzamen wout la se yon twazyèm frè. Li peye machin JMC a ak yon enstriktè sètifye nan egzamen an, epi montan an depann de kote a. Pri sa yo sou paj egzamen wout la. Frè patwonej lekòl la pa ranbousab.",
      ],
    },
    {
      heading: "Edikasyon pou chofè adolesan",
      paragraphs: [
        "Yon pakè konplè pou adolesan swiv chemen edikasyon pou chofè nan Massachusetts: enstriksyon nan klas, pratik dèyè volan, tan obsèvasyon, ak yon klas pou paran oswa gadyen. Elèv ki fini èdtan sa yo ka resevwa yon sètifika fini edikasyon pou chofè. Sesyon klas yo ka kòmanse a 15 an ak 9 mwa. Registry of Motor Vehicles Massachusetts la fikse laj klas sa a nan [540 CMR 23.00](https://www.mass.gov/regulations/540-CMR-2300-licensing-certification-and-operating-requirements-for-professional-driving-school-instructors). Yo bay pèmi aprantisaj la a 16 an, epi pèmi sa a obligatwa anvan nenpòt leson sou wout la.",
        "Pou elèv ki te kòmanse 1 me 2019 oswa apre, Registry of Motor Vehicles mande yon klas de èdtan pou paran oswa gadyen. Li dwe fini anvan leson sou wout yo kòmanse, epi li pa oblije fini anvan sesyon klas yo. Si yon lòt lekòl deja fini èdtan klas yo, enskri nan yon pakè pratik dèyè volan. Si èdtan kondwi yo te fini yon lòt kote, enskri nan yon pakè klas ki toujou gen klas paran an. Chak lis sou paj sa a montre sa ki enkli ak pri aktyèl la.",
      ],
    },
    {
      id: "adult-license",
      heading: "Chemen lisans lan depi 18 an",
      paragraphs: [
        "Depi 18 an, Massachusetts pa mande yon pwogram edikasyon pou chofè anvan yon lisans Klas D. Moun ki poko gen 18 an bezwen li. Règ operatè jinyò sa yo gen ladan yon sètifika edikasyon pou chofè, yon pèmi aprantisaj pandan 6 mwa ak yon dosye pwòp, 40 èdtan sipèvize oswa 30 ak yon kou konpetans, ak yon klas pou paran oswa gadyen. Registry a eksplike règ pou moun ki poko gen 18 an nan [Egzijans lisans operatè jinyò](https://www.mass.gov/info-details/junior-operator-license-jol-requirements) epi li eksplike yon chofè ki gen plis pase 18 an pa bezwen edikasyon pou chofè nan [Egzamen wout pasaje Klas D](https://www.mass.gov/info-details/passenger-class-d-road-tests).",
        "Yon adilt toujou bezwen yon pèmi aprantisaj Massachusetts anvan egzamen wout la. Pèmi a mande rezidans nan Massachusetts, pase egzamen pèmi a, epi pa gen lisans oswa pèmi nan yon lòt eta. Konsantman alekri yon paran oswa gadyen obligatwa sèlman lè moun k ap aplike a poko gen 18 an. Registry a eksplike sa nan [Mande yon pèmi aprantisaj pasaje Klas D](https://www.mass.gov/how-to/apply-for-a-passenger-class-d-learners-permit).",
        "Egzamen wout la toujou mande yon patwon ki gen 21 an oswa plis, ak omwen yon ane eksperyans kondwi ak yon lisans valab nan eta li. Yon lisans etranje pa konte. Yon moun pa ka eseye plis pase sis egzamen Klas D nan 12 mwa. De règ sa yo sou [Egzamen wout pasaje Klas D](https://www.mass.gov/info-details/passenger-class-d-road-tests).",
        "Leson yo opsyonèl depi 18 an. Yon chofè ki fèk kòmanse ka rezève yon leson a la fwa oswa yon pakè adilt. Chak lis anwo a montre pri aktyèl la, sa li genyen, ak dire sesyon an. Chak leson kòmanse epi fini nan 973 Main Street, Waltham. Nou pa vin chèche elèv lakay yo. Pote pèmi a oswa lisans fizik la. Pou chanje yon leson san ou pa pèdi peman an, bay avi 48 èdtan pandan lè biwo a, lendi rive vandredi, soti 10am rive 5pm. Rele (781) 373-1730. Biwo a ka ede an anglè, pòtigè, panyòl, ak kreyòl ayisyen.",
      ],
    },
    {
      heading: "Anvan premye leson an",
      paragraphs: [
        "Pote yon pèmi aprantisaj oswa yon lisans chofè fizik ki valab. Yo pa aksepte kopi dijital. Mete soulye fèmen, epi pote linèt oswa lantiy kontak si pèmi a gen yon restriksyon B. Pou chanje yon leson san ou pa pèdi peman an, bay avi 48 èdtan pandan lè biwo a, sa vle di de jou ouvrab. Ou ka enskri sou paj sa a, rele (781) 373-1730, oswa vizite biwo a lendi rive vandredi, soti 10am rive 5pm. Biwo a ka ede an anglè, pòtigè, panyòl, ak kreyòl ayisyen.",
      ],
    },
  ],
};

export const roadTestsGuideEn: ContentGuide = {
  title: "What road test sponsorship includes",
  sections: [
    {
      id: "what-is-road-test-sponsorship",
      heading: "What is road test sponsorship?",
      paragraphs: [
        "Road test sponsorship is JMC Driving School providing the training car and a certified instructor for a Massachusetts road test.",
      ],
    },
    {
      id: "road-test-fees",
      heading: "Road test areas and fees",
      paragraphs: [
        "Saturday tests are held at the JMC office, 973 Main Street, Waltham. Weekday tests are held at Registry of Motor Vehicles sites in Watertown, Lowell, Haverhill, Lawrence, and Milford. The fee depends on the location. Buy the sponsorship on this page, then call the office to reserve the date. A call first is the surest way to confirm that the RMV area, the day, and the open seats still match your plan.",
      ],
    },
    {
      heading: "Practice before test day",
      paragraphs: [
        "Instructors review right-of-way and the maneuvers an examiner scores, including turns, lane changes, and parking. Drivers who already have some experience should still take at least two lessons before test day so those habits can be corrected. Newer drivers usually need a longer set of lessons. Those practice lessons start and end at the Waltham office. There is no home pickup.",
      ],
    },
    {
      heading: "What to bring",
      paragraphs: [
        "Bring the valid physical learner's permit. A photo on a phone is not accepted. Wear closed-toe shoes. If the permit lists a B restriction, wear the required glasses or contact lenses. Arrive a few minutes early. The road test fee is non-refundable, so confirm the date with the office before you build the rest of the day around it. Call (781) 373-1730 during office hours, Monday through Friday, 10am to 5pm.",
      ],
    },
    {
      id: "failed-road-test",
      heading: "If you do not pass",
      paragraphs: [
        "If the examiner does not pass the Class D road test, the Registry of Motor Vehicles requires a two-week wait before another test. An applicant can attempt no more than six Class D road tests in a 12-month period. The Registry's road test fee is $35, and that state fee is not refunded after a failure, a late arrival, a missed test, or a cancellation with less than 72 hours' notice. Those rules are on [Schedule your road test](https://www.mass.gov/how-to/schedule-your-road-test) and [Passenger Class D road tests](https://www.mass.gov/info-details/passenger-class-d-road-tests).",
        "The JMC sponsorship fee on this page is also non-refundable. Another test in a school car means buying the sponsorship for that location again and calling the office to reserve the new date. A practice lesson before that date can review the maneuvers from the first test. Drivers who already have some experience should still take at least two lessons before test day. Those lessons are booked on the programs page, and they start and end at the Waltham office.",
      ],
    },
  ],
};

export const roadTestsGuideEs: ContentGuide = {
  title: "Qué incluye el patrocinio del examen de manejo",
  sections: [
    {
      id: "what-is-road-test-sponsorship",
      heading: "¿Qué es el patrocinio del examen de manejo?",
      paragraphs: [
        "El patrocinio del examen de manejo es JMC Driving School poniendo el auto de práctica y un instructor certificado para un examen de manejo de Massachusetts.",
      ],
    },
    {
      id: "road-test-fees",
      heading: "Zonas y tarifas del examen de manejo",
      paragraphs: [
        "Los exámenes del sábado se hacen en la oficina de JMC, 973 Main Street, Waltham. Los exámenes de lunes a viernes se hacen en sedes del Registry of Motor Vehicles en Watertown, Lowell, Haverhill, Lawrence y Milford. La tarifa depende del lugar. Compre el patrocinio en esta página y luego llame a la oficina para reservar la fecha. Llamar primero es la forma más segura de confirmar que la zona del RMV, el día y los lugares disponibles siguen coincidiendo con su plan.",
      ],
    },
    {
      heading: "Practicar antes del examen",
      paragraphs: [
        "Los instructores repasan el derecho de paso y las maniobras que el examinador califica, como giros, cambios de carril y estacionamiento. Quienes ya tienen algo de experiencia igual deberían tomar al menos dos clases antes del examen para corregir esos hábitos. Los conductores nuevos suelen necesitar una serie más larga de clases. Esas clases de práctica empiezan y terminan en la oficina de Waltham. No hay recogida en casa.",
      ],
    },
    {
      heading: "Qué llevar",
      paragraphs: [
        "Lleve el permiso de aprendizaje físico y válido. No se acepta una foto en el teléfono. Use zapatos cerrados. Si el permiso indica una restricción B, use los lentes o lentes de contacto exigidos. Llegue unos minutos antes. La tarifa del examen no es reembolsable, así que confirme la fecha con la oficina antes de organizar el resto del día. Llame al (781) 373-1730 en horario de oficina, de lunes a viernes, de 10am a 5pm.",
      ],
    },
    {
      id: "failed-road-test",
      heading: "Si no aprueba",
      paragraphs: [
        "Si el examinador no aprueba el examen de manejo Clase D, el Registry of Motor Vehicles exige esperar dos semanas antes de otro examen. Un solicitante no puede intentar más de seis exámenes Clase D en un período de 12 meses. La tarifa del examen del Registry es de $35, y esa tarifa estatal no se reembolsa después de un suspenso, una llegada tarde, una ausencia o una cancelación con menos de 72 horas de anticipación. Esas reglas están en [Programe su examen de manejo](https://www.mass.gov/how-to/schedule-your-road-test) y [Exámenes de manejo de pasajeros Clase D](https://www.mass.gov/info-details/passenger-class-d-road-tests).",
        "La tarifa de patrocinio de JMC en esta página tampoco es reembolsable. Otro examen en un auto de la escuela significa comprar de nuevo el patrocinio de ese lugar y llamar a la oficina para reservar la nueva fecha. Una clase de práctica antes de esa fecha puede repasar las maniobras del primer examen. Quienes ya tienen experiencia igual deberían tomar al menos dos clases antes del día del examen. Esas clases se reservan en la página de programas y empiezan y terminan en la oficina de Waltham.",
      ],
    },
  ],
};

export const roadTestsGuidePt: ContentGuide = {
  title: "O que o patrocínio do exame prático inclui",
  sections: [
    {
      id: "what-is-road-test-sponsorship",
      heading: "O que é o patrocínio do exame prático?",
      paragraphs: [
        "O patrocínio do exame prático é a JMC Driving School fornecendo o carro de treino e um instrutor certificado para um exame prático de Massachusetts.",
      ],
    },
    {
      id: "road-test-fees",
      heading: "Regiões e taxas do exame prático",
      paragraphs: [
        "Os exames de sábado acontecem no escritório da JMC, na 973 Main Street, em Waltham. Os exames em dias úteis acontecem em postos do Registry of Motor Vehicles em Watertown, Lowell, Haverhill, Lawrence e Milford. A taxa depende do local. Compre o patrocínio nesta página e depois ligue para o escritório para reservar a data. Ligar antes é a forma mais segura de confirmar se a região do RMV, o dia e as vagas ainda combinam com o seu plano.",
      ],
    },
    {
      heading: "Praticar antes do exame",
      paragraphs: [
        "Os instrutores revisam a preferência de passagem e as manobras que o examinador avalia, incluindo curvas, trocas de faixa e estacionamento. Quem já tem alguma experiência ainda deve fazer pelo menos duas aulas antes do exame para corrigir esses hábitos. Motoristas novos em geral precisam de uma sequência maior de aulas. Essas aulas de prática começam e terminam no escritório de Waltham. Não buscamos o aluno em casa.",
      ],
    },
    {
      heading: "O que levar",
      paragraphs: [
        "Leve a permissão de aprendiz física e válida. Uma foto no celular não é aceita. Use sapatos fechados. Se a permissão indicar restrição B, use os óculos ou lentes de contato exigidos. Chegue alguns minutos mais cedo. A taxa do exame prático não é reembolsável, então confirme a data com o escritório antes de organizar o resto do dia. Ligue para (781) 373-1730 no horário de atendimento, de segunda a sexta, das 10h às 17h.",
      ],
    },
    {
      id: "failed-road-test",
      heading: "Se você não passar",
      paragraphs: [
        "Se o examinador não aprovar o exame prático Classe D, o Registry of Motor Vehicles exige uma espera de duas semanas antes de outro exame. Um candidato não pode tentar mais de seis exames Classe D em um período de 12 meses. A taxa do exame do Registry é de $35, e essa taxa estadual não é reembolsada depois de uma reprovação, um atraso, uma falta ou um cancelamento com menos de 72 horas de antecedência. Essas regras estão em [Agende seu exame prático](https://www.mass.gov/how-to/schedule-your-road-test) e [Exames práticos de passageiros Classe D](https://www.mass.gov/info-details/passenger-class-d-road-tests).",
        "A taxa de patrocínio da JMC nesta página também não é reembolsável. Outro exame em um carro da escola significa comprar de novo o patrocínio daquele local e ligar para o escritório para reservar a nova data. Uma aula de prática antes dessa data pode revisar as manobras do primeiro exame. Quem já tem experiência ainda deve fazer pelo menos duas aulas antes do dia do exame. Essas aulas são marcadas na página de programas e começam e terminam no escritório de Waltham.",
      ],
    },
  ],
};

export const roadTestsGuideHt: ContentGuide = {
  title: "Kisa patwonej egzamen wout la gen ladan",
  sections: [
    {
      id: "what-is-road-test-sponsorship",
      heading: "Kisa patwonej egzamen wout ye?",
      paragraphs: [
        "Patwonej egzamen wout se JMC Driving School ki bay machin fòmasyon an ak yon enstriktè sètifye pou yon egzamen wout Massachusetts.",
      ],
    },
    {
      id: "road-test-fees",
      heading: "Zòn ak frè egzamen wout",
      paragraphs: [
        "Egzamen samdi yo fèt nan biwo JMC, 973 Main Street, Waltham. Egzamen jou lasemèn yo fèt nan lokal Registry of Motor Vehicles nan Watertown, Lowell, Haverhill, Lawrence, ak Milford. Frè a depann de kote a. Achte patwonej la sou paj sa a, epi rele biwo a pou rezève dat la. Yon apèl anvan se fason ki pi sèten pou konfime zòn RMV a, jou a, ak plas ki ouvè yo toujou koresponn ak plan ou.",
      ],
    },
    {
      heading: "Pratike anvan jou egzamen an",
      paragraphs: [
        "Enstriktè yo revize dwa pasaj ak manèv yon egzaminatè note, tankou vire, chanje liy, ak pakin. Chofè ki deja gen kèk eksperyans ta dwe toujou pran omwen de leson anvan jou egzamen an pou yo ka korije abitid sa yo. Chofè ki fèk kòmanse anjeneral bezwen yon seri leson ki pi long. Leson pratik sa yo kòmanse epi fini nan biwo Waltham. Nou pa vin chèche elèv lakay yo.",
      ],
    },
    {
      heading: "Kisa pou pote",
      paragraphs: [
        "Pote pèmi aprantisaj fizik ki valab la. Yo pa aksepte yon foto sou telefòn. Mete soulye fèmen. Si pèmi a endike yon restriksyon B, mete linèt oswa lantiy kontak yo mande. Rive kèk minit bonè. Frè egzamen wout la pa ranbousab, kidonk konfime dat la ak biwo a anvan ou òganize rès jounen an. Rele (781) 373-1730 pandan lè biwo a, lendi rive vandredi, soti 10am rive 5pm.",
      ],
    },
    {
      id: "failed-road-test",
      heading: "Si ou pa pase",
      paragraphs: [
        "Si ou pa pase egzamen wout Klas D la, Registry of Motor Vehicles mande yon datant de semèn anvan yon lòt egzamen. Yon moun pa ka eseye plis pase sis egzamen Klas D nan yon peryòd 12 mwa. Frè egzamen Registry a se $35, epi frè eta sa a pa ranbouse apre yon echèk, yon rive an reta, yon absans, oswa yon anilasyon ak mwens pase 72 èdtan avi. Règ sa yo sou [Pwograme egzamen wout ou](https://www.mass.gov/how-to/schedule-your-road-test) ak [Egzamen wout pasaje Klas D](https://www.mass.gov/info-details/passenger-class-d-road-tests).",
        "Frè patwonej JMC ki sou paj sa a pa ranbousab non plis. Yon lòt egzamen nan yon machin lekòl la vle di achte patwonej kote sa a ankò epi rele biwo a pou rezève nouvo dat la. Yon leson pratik anvan dat sa a ka revize manèv premye egzamen an. Chofè ki deja gen eksperyans ta dwe toujou pran omwen de leson anvan jou egzamen an. Leson sa yo rezève sou paj pwogram yo, epi yo kòmanse epi fini nan biwo Waltham.",
      ],
    },
  ],
};

export const classesGuideEn: ContentGuide = {
  title: "How accelerated driver's ed works",
  sections: [
    {
      heading: "The classroom schedule",
      paragraphs: [
        "Accelerated driver's education at JMC is the classroom portion of Massachusetts driver training, taught in person across a short run of scheduled days instead of a class spread over many weeks. Every session meets at 973 Main Street, Waltham, MA 02451. Groups stay smaller than a typical lecture so the instructor can answer questions while students work through signs, right-of-way, and the rules a new driver is expected to know. Seats are limited. The list on this page shows the dates that are open. If a session is marked full, call the office before you wait for another date to be posted.",
      ],
    },
    {
      heading: "Age and the parent class",
      paragraphs: [
        "Classroom instruction can begin when a student is 15 years and 9 months old. The Massachusetts Registry of Motor Vehicles sets that classroom age in [540 CMR 23.00](https://www.mass.gov/regulations/540-CMR-2300-licensing-certification-and-operating-requirements-for-professional-driving-school-instructors). A learner's permit is not required for class. The permit, issued at age 16, is required only before behind-the-wheel lessons. For students who started on or after May 1, 2019, a parent or guardian must complete a two-hour orientation before any road lesson. That orientation can wait until after the classroom course. It cannot wait until driving lessons have already started.",
      ],
    },
    {
      heading: "How to register",
      paragraphs: [
        "Register on this website, call (781) 373-1730, or visit the office Monday through Friday, 10am to 5pm. Email contact@jmcdrivingschool.com if you want a session explained before you pay. If you bought a class and have not used any of the service, you can request a full refund within seven days of purchase. The road test fee is separate and is not refundable. Staff can help in English, Portuguese, Spanish, and Haitian Creole.",
      ],
    },
  ],
};

export const classesGuideEs: ContentGuide = {
  title: "Cómo funcionan las clases aceleradas de educación vial",
  sections: [
    {
      heading: "El horario del aula",
      paragraphs: [
        "La educación vial acelerada en JMC es la parte de aula de la formación de conductores en Massachusetts. Se imparte en persona durante unos días seguidos, en lugar de una clase repartida en muchas semanas. Cada sesión se reúne en 973 Main Street, Waltham, MA 02451. Los grupos son más pequeños que una clase magistral típica para que el instructor pueda responder preguntas mientras los estudiantes repasan señales, derecho de paso y las reglas que un conductor nuevo debe conocer. Los cupos son limitados. La lista de esta página muestra las fechas abiertas. Si una sesión aparece completa, llame a la oficina antes de esperar a que publiquen otra fecha.",
      ],
    },
    {
      heading: "Edad y la clase para padres",
      paragraphs: [
        "La instrucción en el aula puede empezar cuando el estudiante tiene 15 años y 9 meses. El Registry of Motor Vehicles de Massachusetts fija esa edad para el aula en [540 CMR 23.00](https://www.mass.gov/regulations/540-CMR-2300-licensing-certification-and-operating-requirements-for-professional-driving-school-instructors). No hace falta un permiso de aprendizaje para asistir a clase. El permiso, que se expide a los 16 años, solo es obligatorio antes de las clases al volante. Para los estudiantes que empezaron el 1 de mayo de 2019 o después, un padre, una madre o un tutor debe completar una orientación de dos horas antes de cualquier clase de manejo. Esa orientación puede esperar hasta después del curso de aula. No puede esperar hasta que las clases de manejo ya hayan empezado.",
      ],
    },
    {
      heading: "Cómo inscribirse",
      paragraphs: [
        "Inscríbase en este sitio, llame al (781) 373-1730 o visite la oficina de lunes a viernes, de 10am a 5pm. Escriba a contact@jmcdrivingschool.com si quiere que le expliquen una sesión antes de pagar. Si compró una clase y no usó ningún servicio, puede pedir un reembolso completo dentro de los siete días posteriores a la compra. La tarifa del examen de manejo es aparte y no es reembolsable. El personal puede atender en inglés, portugués, español y criollo haitiano.",
      ],
    },
  ],
};

export const classesGuidePt: ContentGuide = {
  title: "Como funciona o curso acelerado",
  sections: [
    {
      heading: "O calendário da sala de aula",
      paragraphs: [
        "A educação acelerada para motoristas na JMC é a parte em sala do treinamento de Massachusetts, dada presencialmente em uma sequência curta de dias marcados, em vez de uma turma espalhada por muitas semanas. Cada sessão acontece na 973 Main Street, Waltham, MA 02451. Os grupos ficam menores do que uma aula expositiva comum para o instrutor poder responder perguntas enquanto os alunos estudam placas, preferência de passagem e as regras que um motorista novo precisa conhecer. As vagas são limitadas. A lista nesta página mostra as datas abertas. Se uma sessão estiver lotada, ligue para o escritório antes de esperar outra data ser publicada.",
      ],
    },
    {
      heading: "Idade e a aula dos pais",
      paragraphs: [
        "A instrução em sala pode começar quando o aluno tem 15 anos e 9 meses. O Registry of Motor Vehicles de Massachusetts define essa idade para a sala de aula em [540 CMR 23.00](https://www.mass.gov/regulations/540-CMR-2300-licensing-certification-and-operating-requirements-for-professional-driving-school-instructors). A permissão de aprendiz não é necessária para a aula. A permissão, emitida aos 16 anos, só é exigida antes das aulas ao volante. Para alunos que começaram em 1º de maio de 2019 ou depois, um pai, uma mãe ou um responsável precisa concluir uma orientação de duas horas antes de qualquer aula prática. Essa orientação pode esperar até depois do curso em sala. Ela não pode esperar até as aulas de direção já terem começado.",
      ],
    },
    {
      heading: "Como se inscrever",
      paragraphs: [
        "Inscreva-se neste site, ligue para (781) 373-1730 ou visite o escritório de segunda a sexta, das 10h às 17h. Envie um e-mail para contact@jmcdrivingschool.com se quiser que uma sessão seja explicada antes do pagamento. Se você comprou uma turma e não usou nenhum serviço, pode pedir reembolso integral em até sete dias após a compra. A taxa do exame prático é separada e não é reembolsável. A equipe atende em inglês, português, espanhol e crioulo haitiano.",
      ],
    },
  ],
};

export const classesGuideHt: ContentGuide = {
  title: "Kijan kou akselere edikasyon pou chofè a mache",
  sections: [
    {
      heading: "Orè klas la",
      paragraphs: [
        "Edikasyon akselere pou chofè nan JMC se pati klas fòmasyon chofè Massachusetts la. Yo anseye l an pèsòn sou yon ti seri jou ki deja fikse, olye de yon klas ki gaye sou anpil semèn. Chak sesyon reyini nan 973 Main Street, Waltham, MA 02451. Gwoup yo pi piti pase yon gwo konferans pou enstriktè a ka reponn kesyon pandan elèv yo travay sou siy, dwa pasaj, ak règleman yon nouvo chofè dwe konnen. Plas yo limite. Lis ki sou paj sa a montre dat ki ouvè. Si yon sesyon make plen, rele biwo a anvan ou tann yon lòt dat parèt.",
      ],
    },
    {
      heading: "Laj ak klas paran an",
      paragraphs: [
        "Enstriksyon nan klas ka kòmanse lè yon elèv gen 15 an ak 9 mwa. Registry of Motor Vehicles Massachusetts la fikse laj klas sa a nan [540 CMR 23.00](https://www.mass.gov/regulations/540-CMR-2300-licensing-certification-and-operating-requirements-for-professional-driving-school-instructors). Yo pa mande pèmi aprantisaj pou klas la. Pèmi a, yo bay li a 16 an, obligatwa sèlman anvan leson dèyè volan. Pou elèv ki te kòmanse 1 me 2019 oswa apre, yon paran oswa gadyen dwe fini yon oryantasyon de èdtan anvan nenpòt leson sou wout. Oryantasyon sa a ka tann jiskaske kou klas la fini. Li pa ka tann jiskaske leson kondwi yo deja kòmanse.",
      ],
    },
    {
      heading: "Kijan pou enskri",
      paragraphs: [
        "Enskri sou sit sa a, rele (781) 373-1730, oswa vizite biwo a lendi rive vandredi, soti 10am rive 5pm. Voye imèl nan contact@jmcdrivingschool.com si ou vle yo esplike yon sesyon anvan ou peye. Si ou te achte yon klas epi ou pa itilize okenn sèvis, ou ka mande yon ranbousman konplè nan sèt jou apre acha a. Frè egzamen wout la separe epi li pa ranbousab. Ekip la ka ede an anglè, pòtigè, panyòl, ak kreyòl ayisyen.",
      ],
    },
  ],
};

export const aboutGuideEn: ContentGuide = {
  title: "Who trains at JMC",
  sections: [
    {
      heading: "Teens and adults",
      paragraphs: [
        "JMC Driving School teaches teens who are working toward a Massachusetts driver's license and adults who want lessons, a refresher, or practice before a road test. Students come from Waltham and nearby communities. Training is based at 973 Main Street. Driver's education classes meet in person in smaller groups. Behind-the-wheel lessons start and end at the office. The school does not pick students up at home or at school.",
      ],
    },
    {
      heading: "How a teen course is organized",
      paragraphs: [
        "A student who needs the full course takes classroom instruction, observation time, behind-the-wheel practice, and a parent or guardian class. Classroom work can start at 15 years and 9 months. The Massachusetts Registry of Motor Vehicles sets that classroom age in [540 CMR 23.00](https://www.mass.gov/regulations/540-CMR-2300-licensing-certification-and-operating-requirements-for-professional-driving-school-instructors). On-road lessons wait until the student has a learner's permit, available at age 16. The parent class is a two-hour session the Registry of Motor Vehicles requires for students who began on or after May 1, 2019. It has to be completed before road lessons, not before the classroom course. Students who already finished classroom hours or driving hours at another school can enroll in only the portion they still need. Adults can book a single lesson or a package. Current session length and highway times are listed below.",
      ],
    },
    {
      heading: "Road tests and the office",
      paragraphs: [
        "When a student is ready, the school can sponsor the Massachusetts road test on Saturdays at the Waltham office or on weekdays at RMV sites in Watertown, Lowell, Haverhill, Lawrence, and Milford. The office is open Monday through Friday, 10am to 5pm. Call (781) 373-1730 or email contact@jmcdrivingschool.com. Staff can help in English, Portuguese, Spanish, and Haitian Creole. To move a lesson without losing the fee, give 48 hours' notice during those office hours. Bring a physical permit, closed-toe shoes, and any glasses or contacts the permit requires.",
      ],
    },
  ],
};

export const aboutGuideEs: ContentGuide = {
  title: "Quién se forma en JMC",
  sections: [
    {
      heading: "Adolescentes y adultos",
      paragraphs: [
        "JMC Driving School enseña a adolescentes que buscan la licencia de conducir de Massachusetts y a adultos que quieren clases, un repaso o práctica antes del examen de manejo. Los estudiantes vienen de Waltham y de comunidades cercanas. La formación se basa en 973 Main Street. Las clases de educación vial son presenciales y en grupos más pequeños. Las clases al volante empiezan y terminan en la oficina. La escuela no recoge a los estudiantes en casa ni en la escuela.",
      ],
    },
    {
      heading: "Cómo se organiza el curso para adolescentes",
      paragraphs: [
        "Un estudiante que necesita el curso completo toma instrucción en el aula, tiempo de observación, práctica al volante y una clase para el padre, la madre o el tutor. El trabajo de aula puede empezar a los 15 años y 9 meses. El Registry of Motor Vehicles de Massachusetts fija esa edad para el aula en [540 CMR 23.00](https://www.mass.gov/regulations/540-CMR-2300-licensing-certification-and-operating-requirements-for-professional-driving-school-instructors). Las clases en la carretera esperan hasta que el estudiante tenga un permiso de aprendizaje, disponible a los 16 años. La clase para padres es una sesión de dos horas que el Registry of Motor Vehicles exige a los estudiantes que empezaron el 1 de mayo de 2019 o después. Debe completarse antes de las clases de manejo, no antes del curso de aula. Quienes ya terminaron las horas de aula o las horas de manejo en otra escuela pueden inscribirse solo en la parte que todavía necesitan. Los adultos pueden reservar una clase suelta o un paquete. La duración actual de cada sesión y los horarios de autopista aparecen abajo.",
      ],
    },
    {
      heading: "Exámenes de manejo y la oficina",
      paragraphs: [
        "Cuando un estudiante está listo, la escuela puede patrocinar el examen de manejo de Massachusetts los sábados en la oficina de Waltham o entre semana en sedes del RMV en Watertown, Lowell, Haverhill, Lawrence y Milford. La oficina abre de lunes a viernes, de 10am a 5pm. Llame al (781) 373-1730 o escriba a contact@jmcdrivingschool.com. El personal puede atender en inglés, portugués, español y criollo haitiano. Para mover una clase sin perder el pago, avise con 48 horas de anticipación durante ese horario. Traiga el permiso físico, zapatos cerrados y los lentes o lentes de contacto que el permiso exija.",
      ],
    },
  ],
};

export const aboutGuidePt: ContentGuide = {
  title: "Quem treina na JMC",
  sections: [
    {
      heading: "Adolescentes e adultos",
      paragraphs: [
        "A JMC Driving School ensina adolescentes que estão a caminho da carteira de Massachusetts e adultos que querem aulas, uma reciclagem ou prática antes do exame prático. Os alunos vêm de Waltham e de comunidades próximas. O treinamento fica na 973 Main Street. As aulas de educação para motoristas são presenciais, em grupos menores. As aulas ao volante começam e terminam no escritório. A escola não busca alunos em casa nem na escola.",
      ],
    },
    {
      heading: "Como o curso para adolescentes é organizado",
      paragraphs: [
        "O aluno que precisa do curso completo faz instrução em sala, tempo de observação, prática ao volante e uma aula para o pai, a mãe ou o responsável. O trabalho em sala pode começar aos 15 anos e 9 meses. O Registry of Motor Vehicles de Massachusetts define essa idade para a sala de aula em [540 CMR 23.00](https://www.mass.gov/regulations/540-CMR-2300-licensing-certification-and-operating-requirements-for-professional-driving-school-instructors). As aulas na rua esperam até o aluno ter a permissão de aprendiz, disponível aos 16 anos. A aula dos pais é uma sessão de duas horas que o Registry of Motor Vehicles exige de alunos que começaram em 1º de maio de 2019 ou depois. Ela precisa ser concluída antes das aulas práticas, não antes do curso em sala. Quem já terminou horas de sala ou horas de direção em outra escola pode se inscrever só na parte que ainda falta. Adultos podem marcar uma aula avulsa ou um pacote. A duração atual de cada sessão e os horários de rodovia aparecem abaixo.",
      ],
    },
    {
      heading: "Exames práticos e o escritório",
      paragraphs: [
        "Quando o aluno está pronto, a escola pode patrocinar o exame prático de Massachusetts aos sábados no escritório de Waltham ou em dias úteis em postos do RMV em Watertown, Lowell, Haverhill, Lawrence e Milford. O escritório abre de segunda a sexta, das 10h às 17h. Ligue para (781) 373-1730 ou envie um e-mail para contact@jmcdrivingschool.com. A equipe atende em inglês, português, espanhol e crioulo haitiano. Para mudar uma aula sem perder o pagamento, avise com 48 horas de antecedência nesse horário. Traga a permissão física, sapatos fechados e os óculos ou lentes que a permissão exigir.",
      ],
    },
  ],
};

export const aboutGuideHt: ContentGuide = {
  title: "Kilès ki fòme nan JMC",
  sections: [
    {
      heading: "Adolesan ak adilt",
      paragraphs: [
        "JMC Driving School anseye adolesan ki ap travay pou yon lisans chofè Massachusetts ak adilt ki vle leson, yon rapèl, oswa pratik anvan yon egzamen wout. Elèv yo soti Waltham ak kominote ki toupre. Fòmasyon an baze nan 973 Main Street. Klas edikasyon pou chofè yo fèt an pèsòn nan gwoup pi piti. Leson dèyè volan yo kòmanse epi fini nan biwo a. Lekòl la pa vin chèche elèv lakay yo ni lekòl yo.",
      ],
    },
    {
      heading: "Kijan yon kou pou adolesan òganize",
      paragraphs: [
        "Yon elèv ki bezwen kou konplè a pran enstriksyon nan klas, tan obsèvasyon, pratik dèyè volan, ak yon klas pou paran oswa gadyen. Travay nan klas ka kòmanse a 15 an ak 9 mwa. Registry of Motor Vehicles Massachusetts la fikse laj klas sa a nan [540 CMR 23.00](https://www.mass.gov/regulations/540-CMR-2300-licensing-certification-and-operating-requirements-for-professional-driving-school-instructors). Leson sou wout yo tann jiskaske elèv la gen yon pèmi aprantisaj, ki disponib a 16 an. Klas paran an se yon sesyon de èdtan Registry of Motor Vehicles mande pou elèv ki te kòmanse 1 me 2019 oswa apre. Li dwe fini anvan leson sou wout yo, pa anvan kou klas la. Elèv ki deja fini èdtan klas oswa èdtan kondwi nan yon lòt lekòl ka enskri sèlman nan pati yo toujou bezwen. Adilt ka rezève yon sèl leson oswa yon pakè. Dire sesyon aktyèl la ak lè otowout yo parèt anba a.",
      ],
    },
    {
      heading: "Egzamen wout ak biwo a",
      paragraphs: [
        "Lè yon elèv pare, lekòl la ka patwone egzamen wout Massachusetts la samdi nan biwo Waltham oswa jou lasemèn nan lokal RMV nan Watertown, Lowell, Haverhill, Lawrence, ak Milford. Biwo a ouvè lendi rive vandredi, soti 10am rive 5pm. Rele (781) 373-1730 oswa voye imèl nan contact@jmcdrivingschool.com. Ekip la ka ede an anglè, pòtigè, panyòl, ak kreyòl ayisyen. Pou deplase yon leson san ou pa pèdi peman an, bay avi 48 èdtan pandan lè biwo sa yo. Pote yon pèmi fizik, soulye fèmen, ak nenpòt linèt oswa lantiy pèmi a mande.",
      ],
    },
  ],
};

export const contactGuideEn: ContentGuide = {
  title: "Reaching the Waltham office",
  sections: [
    {
      heading: "Phone, email, or the form",
      paragraphs: [
        "The office answers questions about teen driver's education, adult lessons, accelerated class dates, and road test sponsorship. Call (781) 373-1730, email contact@jmcdrivingschool.com, or send the form on this page. Hours are Monday through Friday, 10am to 5pm. A phone call is the fastest way to learn whether a class still has a seat or whether a Saturday road test at the office is open. Use the form when you want a written reply and the question can wait until the next business day.",
      ],
    },
    {
      heading: "What to include in a message",
      paragraphs: [
        "Tell us the student's age, whether they already hold a Massachusetts learner's permit, and which service you need. For lessons, list days and times that work. For an accelerated class, name the session dates you are considering. For a road test, say whether you want the JMC office on a Saturday or a weekday test at a Registry site in Watertown, Lowell, Haverhill, Lawrence, or Milford. Mention if a parent or guardian still needs the two-hour orientation. Include a phone number that is answered during the day so the office does not have to write back just to ask for a time to talk.",
      ],
    },
    {
      heading: "Visiting 973 Main Street",
      paragraphs: [
        "Driver's education classes meet at 973 Main Street, Waltham, MA 02451, and every driving lesson starts and ends at that office. The school does not pick students up at home or at another school. Come a few minutes early. Bring the physical learner's permit, closed-toe shoes, and glasses or contact lenses if the permit has a B restriction. A photo of the permit on a phone is not accepted.",
      ],
    },
    {
      heading: "Rules that affect scheduling",
      paragraphs: [
        "Classroom instruction can start at 15 years and 9 months. The Massachusetts Registry of Motor Vehicles sets that classroom age in [540 CMR 23.00](https://www.mass.gov/regulations/540-CMR-2300-licensing-certification-and-operating-requirements-for-professional-driving-school-instructors). Behind-the-wheel lessons require an active learner's permit or a driver's license. Current session length for adult packages and lessons is listed below. To reschedule a lesson at no charge, give 48 hours' notice during office hours, which counts as two business days. Late notice means the lesson and the payment are forfeited. A purchase that has not been used can be refunded in full within seven days. The road test fee is non-refundable. Staff can help in English, Portuguese, Spanish, and Haitian Creole.",
        "Once the right program is clear, enrollment can be finished on the website or at the front desk. Teen packages, lesson bundles, and road test sponsorship each have a separate checkout. Accelerated class seats are confirmed by the office, because those groups are small and a date can fill before a payment is noticed. If classroom hours or driving hours were already finished at another school, say so in the message. The reply can then name the package that covers only the part still needed, instead of the full course.",
      ],
    },
  ],
};

export const contactGuideEs: ContentGuide = {
  title: "Cómo llegar a la oficina de Waltham",
  sections: [
    {
      heading: "Teléfono, correo o el formulario",
      paragraphs: [
        "La oficina responde preguntas sobre educación vial para adolescentes, clases para adultos, fechas de cursos acelerados y patrocinio del examen de manejo. Llame al (781) 373-1730, escriba a contact@jmcdrivingschool.com o envíe el formulario de esta página. El horario es de lunes a viernes, de 10am a 5pm. Una llamada es la forma más rápida de saber si una clase todavía tiene cupo o si hay un examen de los sábados abierto en la oficina. Use el formulario cuando quiera una respuesta por escrito y la pregunta pueda esperar al siguiente día hábil.",
      ],
    },
    {
      heading: "Qué incluir en el mensaje",
      paragraphs: [
        "Díganos la edad del estudiante, si ya tiene un permiso de aprendizaje de Massachusetts y qué servicio necesita. Para clases de manejo, indique los días y horarios que le sirven. Para un curso acelerado, nombre las fechas de la sesión que está considerando. Para un examen de manejo, diga si prefiere la oficina de JMC un sábado o un examen entre semana en una sede del Registry en Watertown, Lowell, Haverhill, Lawrence o Milford. Mencione si un padre, una madre o un tutor todavía necesita la orientación de dos horas. Incluya un teléfono que contesten durante el día para que la oficina no tenga que escribir solo para pedir un horario para hablar.",
      ],
    },
    {
      heading: "Visitar 973 Main Street",
      paragraphs: [
        "Las clases de educación vial se reúnen en 973 Main Street, Waltham, MA 02451, y cada clase de manejo empieza y termina en esa oficina. La escuela no recoge a los estudiantes en casa ni en otra escuela. Llegue unos minutos antes. Traiga el permiso de aprendizaje físico, zapatos cerrados y lentes o lentes de contacto si el permiso tiene una restricción B. No se acepta una foto del permiso en el teléfono.",
      ],
    },
    {
      heading: "Reglas que afectan la agenda",
      paragraphs: [
        "La instrucción en el aula puede empezar a los 15 años y 9 meses. El Registry of Motor Vehicles de Massachusetts fija esa edad para el aula en [540 CMR 23.00](https://www.mass.gov/regulations/540-CMR-2300-licensing-certification-and-operating-requirements-for-professional-driving-school-instructors). Las clases al volante requieren un permiso de aprendizaje activo o una licencia de conducir. La duración actual de los paquetes y las clases para adultos aparece abajo. Para cambiar una clase sin costo, avise con 48 horas de anticipación durante el horario de oficina, lo que cuenta como dos días hábiles. Un aviso tardío significa que se pierden la clase y el pago. Una compra que no se usó puede reembolsarse por completo dentro de siete días. La tarifa del examen de manejo no es reembolsable. El personal puede atender en inglés, portugués, español y criollo haitiano.",
        "Cuando el programa correcto está claro, la inscripción puede terminarse en el sitio web o en la recepción. Los paquetes para adolescentes, los paquetes de clases y el patrocinio del examen tienen cada uno un pago aparte. Los cupos de las clases aceleradas los confirma la oficina, porque los grupos son pequeños y una fecha puede llenarse antes de que se note un pago. Si las horas de aula o las horas de manejo ya se terminaron en otra escuela, dígalo en el mensaje. La respuesta puede entonces nombrar el paquete que cubre solo la parte que falta, en lugar del curso completo.",
      ],
    },
  ],
};

export const contactGuidePt: ContentGuide = {
  title: "Como falar com o escritório de Waltham",
  sections: [
    {
      heading: "Telefone, e-mail ou o formulário",
      paragraphs: [
        "O escritório responde perguntas sobre educação para motoristas adolescentes, aulas para adultos, datas de cursos acelerados e patrocínio do exame prático. Ligue para (781) 373-1730, envie um e-mail para contact@jmcdrivingschool.com ou use o formulário desta página. O horário é de segunda a sexta, das 10h às 17h. Uma ligação é o jeito mais rápido de saber se uma turma ainda tem vaga ou se há exame de sábado aberto no escritório. Use o formulário quando quiser uma resposta por escrito e a pergunta puder esperar até o próximo dia útil.",
      ],
    },
    {
      heading: "O que incluir na mensagem",
      paragraphs: [
        "Diga a idade do aluno, se ele já tem permissão de aprendiz de Massachusetts e qual serviço você precisa. Para aulas, liste dias e horários que funcionam. Para um curso acelerado, informe as datas da sessão que você está considerando. Para um exame prático, diga se prefere o escritório da JMC em um sábado ou um exame em dia útil em um posto do Registry em Watertown, Lowell, Haverhill, Lawrence ou Milford. Mencione se um pai, uma mãe ou um responsável ainda precisa da orientação de duas horas. Inclua um telefone que seja atendido durante o dia para o escritório não precisar responder só para marcar um horário de conversa.",
      ],
    },
    {
      heading: "Visitar a 973 Main Street",
      paragraphs: [
        "As aulas de educação para motoristas acontecem na 973 Main Street, Waltham, MA 02451, e toda aula de direção começa e termina nesse escritório. A escola não busca alunos em casa nem em outra escola. Chegue alguns minutos mais cedo. Traga a permissão de aprendiz física, sapatos fechados e óculos ou lentes de contato se a permissão tiver restrição B. Uma foto da permissão no celular não é aceita.",
      ],
    },
    {
      heading: "Regras que afetam o agendamento",
      paragraphs: [
        "A instrução em sala pode começar aos 15 anos e 9 meses. O Registry of Motor Vehicles de Massachusetts define essa idade para a sala de aula em [540 CMR 23.00](https://www.mass.gov/regulations/540-CMR-2300-licensing-certification-and-operating-requirements-for-professional-driving-school-instructors). Aulas ao volante exigem uma permissão de aprendiz ativa ou uma carteira de motorista. A duração atual dos pacotes e aulas para adultos aparece abaixo. Para remarcar uma aula sem custo, avise com 48 horas de antecedência no horário do escritório, o que conta como dois dias úteis. Aviso fora do prazo significa perda da aula e do pagamento. Uma compra que não foi usada pode ser reembolsada integralmente em até sete dias. A taxa do exame prático não é reembolsável. A equipe atende em inglês, português, espanhol e crioulo haitiano.",
        "Quando o programa certo estiver claro, a inscrição pode ser concluída no site ou na recepção. Pacotes para adolescentes, pacotes de aulas e patrocínio do exame prático têm cada um um pagamento separado. As vagas das turmas aceleradas são confirmadas pelo escritório, porque os grupos são pequenos e uma data pode lotar antes de um pagamento ser percebido. Se as horas de sala ou as horas de direção já foram concluídas em outra escola, diga isso na mensagem. A resposta pode então indicar o pacote que cobre só a parte que ainda falta, em vez do curso completo.",
      ],
    },
  ],
};

export const contactGuideHt: ContentGuide = {
  title: "Kijan pou kontakte biwo Waltham",
  sections: [
    {
      heading: "Telefòn, imèl, oswa fòmilè a",
      paragraphs: [
        "Biwo a reponn kesyon sou edikasyon pou chofè adolesan, leson pou adilt, dat kou akselere, ak patwonej egzamen wout. Rele (781) 373-1730, voye imèl nan contact@jmcdrivingschool.com, oswa voye fòmilè ki sou paj sa a. Lè yo se lendi rive vandredi, soti 10am rive 5pm. Yon apèl se fason ki pi rapid pou konnen si yon klas toujou gen plas oswa si yon egzamen wout samdi nan biwo a ouvè. Sèvi ak fòmilè a lè ou vle yon repons ekri epi kesyon an ka tann pwochen jou ouvrab la.",
      ],
    },
    {
      heading: "Kisa pou mete nan mesaj la",
      paragraphs: [
        "Di nou laj elèv la, si li deja gen yon pèmi aprantisaj Massachusetts, ak ki sèvis ou bezwen. Pou leson, bay jou ak lè ki mache. Pou yon kou akselere, nonmen dat sesyon w ap konsidere. Pou yon egzamen wout, di si ou vle biwo JMC yon samdi oswa yon egzamen jou lasemèn nan yon lokal Registry nan Watertown, Lowell, Haverhill, Lawrence, oswa Milford. Mansyone si yon paran oswa gadyen toujou bezwen oryantasyon de èdtan an. Mete yon nimewo telefòn yo reponn pandan jounen an pou biwo a pa oblije ekri tounen sèlman pou mande yon lè pou pale.",
      ],
    },
    {
      heading: "Vizite 973 Main Street",
      paragraphs: [
        "Klas edikasyon pou chofè yo reyini nan 973 Main Street, Waltham, MA 02451, epi chak leson kondwi kòmanse epi fini nan biwo sa a. Lekòl la pa vin chèche elèv lakay yo ni nan yon lòt lekòl. Vini kèk minit bonè. Pote pèmi aprantisaj fizik la, soulye fèmen, ak linèt oswa lantiy kontak si pèmi a gen yon restriksyon B. Yo pa aksepte yon foto pèmi a sou yon telefòn.",
      ],
    },
    {
      heading: "Règ ki gen efè sou orè a",
      paragraphs: [
        "Enstriksyon nan klas ka kòmanse a 15 an ak 9 mwa. Registry of Motor Vehicles Massachusetts la fikse laj klas sa a nan [540 CMR 23.00](https://www.mass.gov/regulations/540-CMR-2300-licensing-certification-and-operating-requirements-for-professional-driving-school-instructors). Leson dèyè volan mande yon pèmi aprantisaj aktif oswa yon lisans chofè. Dire sesyon aktyèl la pou pakè ak leson adilt yo parèt anba a. Pou chanje yon leson san frè, bay avi 48 èdtan pandan lè biwo a, sa ki konte kòm de jou ouvrab. Avi an reta vle di leson an ak peman an pèdi. Yon acha ki poko itilize ka ranbouse nèt nan sèt jou. Frè egzamen wout la pa ranbousab. Ekip la ka ede an anglè, pòtigè, panyòl, ak kreyòl ayisyen.",
        "Lè bon pwogram nan klè, enskripsyon an ka fini sou sit entènèt la oswa nan resepsyon an. Pakè pou adolesan, pakè leson, ak patwonej egzamen wout gen chak youn yon peman apa. Plas klas akselere yo konfime pa biwo a, paske gwoup yo piti epi yon dat ka plen anvan yo remake yon peman. Si èdtan klas oswa èdtan kondwi te deja fini nan yon lòt lekòl, di sa nan mesaj la. Repons lan ka nonmen pakè ki kouvri sèlman pati ki toujou manke a, olye de kou konplè a.",
      ],
    },
  ],
};
