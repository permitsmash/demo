type FaqItem = { question: string; answer: string };

const faqProgramsEn: FaqItem[] = [
  {
    question: "What programs do you offer?",
    answer:
      "We offer Driver's Ed Program, Parent/Guardian Class, Adult Driving Lessons, Highway Lessons, and Road Test Sponsorship. You can view all options on our Programs page or contact the office for guidance.",
  },
  {
    question: "How do I know which program is right for me?",
    answer:
      "It depends on your age, current driving experience, and what you need most — Driver's Ed, driving lessons, refresher lessons, or road test sponsorship. Contact us and we'll help you choose the best option.",
  },
  {
    question: "Do I need to complete a form online?",
    answer:
      "Some services have enrollment forms available online for convenience. If you prefer, you can also contact the office directly for guidance before submitting a form.",
  },
  {
    question: "Can adults sign up for lessons even if they are beginners?",
    answer:
      "Yes. Adult students can enroll whether they are complete beginners, need refresher training, or want focused road test sponsorship.",
  },
];

const faqLessonsEn: FaqItem[] = [
  {
    question: "How do I schedule driving lessons?",
    answer:
      "Call the office at (781) 373-1730 or send a message with your preferred days and times. Availability may vary depending on demand and instructor schedules.",
  },
  {
    question: "Are lessons available on weekends?",
    answer:
      "Availability can vary, so the best way to confirm current scheduling options is to contact the office directly.",
  },
  {
    question: "What should I bring to a lesson?",
    answer:
      "Be at the JMC office a couple of minutes before your scheduled time. If you have a B restriction on your permit, glasses or contacts are mandatory.",
  },
  {
    question: "What happens if I need to cancel or reschedule?",
    answer:
      "You must provide 48 hours notice during office hours (2 business days) to reschedule a lesson at no cost. Failure to provide proper notice will result in loss of the lesson and payment.",
  },
  {
    question: "How long is each driving lesson?",
    answer:
      "Our standard behind-the-wheel lessons are 90 minutes long. We have found this duration optimal for maintaining focus while allowing enough time to practice multiple maneuvers and routes.",
  },
  {
    question: "How do I find and register for a class?",
    answer:
      "The easiest way is to use the Classes page on this site to see accelerated course dates, or contact our office at (781) 373-1730 or contact@jmcdrivingschool.com. You can register through our website, over the phone, or visit our Waltham office.",
  },
  {
    question: "Is there a mandatory parent/guardian class?",
    answer:
      "Yes. For new students as of May 1, 2019, the MA Registry requires a mandatory 2-hour parent/guardian class. It must be completed before any road lessons begin, but it does not need to be completed before classroom sessions.",
  },
  {
    question: "What documents do I need to bring to my first lesson?",
    answer:
      "For your first behind-the-wheel lesson, you must bring your valid physical learner's permit. Digital copies are not accepted by state law. You should also wear closed-toe shoes and bring any corrective lenses if required by your permit.",
  },
];

const faqTestEn: FaqItem[] = [
  {
    question: "Do you offer road test sponsorship?",
    answer:
      "Yes. JMC Driving School offers road test sponsorship at our Waltham office and RMV locations in Watertown, Lowell, Wilmington, Haverhill, Lawrence, Revere, Worcester, and Milford. We offer Saturday test sponsorship at the JMC office or weekdays at certain RMV locations. Contact the office for current fees and availability. Road test fees are non-refundable.",
  },
  {
    question: "Should I call before submitting the road test form?",
    answer:
      "Yes. Calling first is recommended so we can confirm availability, preferred RMV area, timing, and any requirements before moving forward.",
  },
  {
    question: "Can you help me prepare before my road test date?",
    answer:
      "Absolutely. We cover all rules, regulations, and maneuvers during our lessons. We advise experienced drivers to have at least 2 lessons before a road test.",
  },
  {
    question: "Where can I practice for the permit test?",
    answer:
      "You can use our Resources page for study guides and practice materials, and the main JMC Driving School site also links to official permit practice tests. These tools are a great way to prepare before scheduling your permit exam.",
  },
];

const faqGeneralEn: FaqItem[] = [
  {
    question: "What are the age requirements to start driving lessons?",
    answer:
      "Per Massachusetts RMV rules, students must be at least 15 years and 9 months old before the first day of class. A valid learner's permit is required before any road (behind-the-wheel) lessons can be scheduled.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "JMC Driving School serves Waltham, MA and surrounding areas, including road test sponsorship at Watertown, Lowell, Wilmington, Haverhill, Lawrence, Revere, Worcester, and Milford. Contact the office to confirm program availability for your area.",
  },
  {
    question: "Do I need my own account or can a parent sign up for me?",
    answer:
      "When registering online, the account should always be created in the student's name with the student's information. A parent/guardian can complete payment, but the profile itself must match the student.",
  },
  {
    question: "Do you assist students in multiple languages?",
    answer:
      "Yes. Support is available in English, Portuguese, Spanish, and Haitian Creole.",
  },
  {
    question: "Where are you located?",
    answer: "973 Main Street, Waltham, MA 02451",
  },
  {
    question: "How can I contact JMC Driving School?",
    answer:
      "You can call us at (781) 373-1730 or email contact@jmcdrivingschool.com. Office hours are Mon–Fri 10am–4pm.",
  },
  {
    question: "Do you have a privacy policy?",
    answer:
      "Yes. You can review it on our Legal Information page.",
  },
];

const faqPricingEn: FaqItem[] = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit and debit cards for online payments. You may also pay in person at our Waltham office during posted office hours (Mon-Fri 10am-4pm).",
  },
  {
    question: "Is there a required deposit?",
    answer:
      "Yes. A $400 deposit is required before the start of classroom sessions for the full program package. The remaining balance is due by the last day of class.",
  },
  {
    question: "What is the gas surcharge policy?",
    answer:
      "If gas prices reach $4.00 or higher, a $5.00 surcharge per road lesson is added to help cover fuel costs.",
  },
  {
    question: "How do RMV fees differ from JMC Driving School fees?",
    answer:
      "JMC Driving School fees cover your classroom, road lessons, observations, and certificate. Separate from that, the Massachusetts RMV charges $50 for the license and $35 for the state exam (total $85). RMV fees are paid directly to the state, ideally online before your exam date.",
  },
  {
    question: "Do you offer gift certificates?",
    answer:
      "Yes. Gift certificates are available and can be used toward lessons or full programs. Visit our Gift Cards page or contact the office to purchase.",
  },
];

export const faqPageEn = {
  title: "Frequently Asked Questions",
  subtitle:
    "Quick answers about programs, enrollment, scheduling, road tests, and general policies.",
  searchPlaceholder: "Search for topics, e.g. 'cancellation policy'",
  programs: "Programs & Enrollment",
  lessons: "Lessons & Scheduling",
  test: "Road Test",
  general: "General Information",
  pricing: "Pricing & Payments",
  ctaTitle: "Still have questions?",
  ctaDesc:
    "If you couldn't find what you were looking for, our support team is ready to help you navigate your journey.",
  contactSupport: "Contact Support",
  categories: {
    programs: faqProgramsEn,
    lessons: faqLessonsEn,
    test: faqTestEn,
    general: faqGeneralEn,
    pricing: faqPricingEn,
  },
};

const faqProgramsEs: FaqItem[] = [
  {
    question: "¿Qué programas ofrecen?",
    answer:
      "Ofrecemos programa de educación vial, clase para padres/tutores, clases de manejo para adultos, clases en autopista y patrocinio para examen de manejo. Puede ver todas las opciones en nuestra página de Programas o contactar la oficina para orientación.",
  },
  {
    question: "¿Cómo sé qué programa es el adecuado para mí?",
    answer:
      "Depende de su edad, experiencia de manejo actual y lo que más necesite — educación vial, clases de manejo, clases de repaso o patrocinio para examen de manejo. Contáctenos y le ayudaremos a elegir la mejor opción.",
  },
  {
    question: "¿Necesito completar un formulario en línea?",
    answer:
      "Algunos servicios tienen formularios de inscripción disponibles en línea por conveniencia. Si prefiere, también puede contactar la oficina directamente para orientación antes de enviar un formulario.",
  },
  {
    question: "¿Los adultos pueden inscribirse en clases aunque sean principiantes?",
    answer:
      "Sí. Los estudiantes adultos pueden inscribirse ya sean principiantes completos, necesiten entrenamiento de repaso o deseen patrocinio enfocado para examen de manejo.",
  },
];

const faqLessonsEs: FaqItem[] = [
  {
    question: "¿Cómo programo clases de manejo?",
    answer:
      "Llame a la oficina al (781) 373-1730 o envíe un mensaje con sus días y horarios preferidos. La disponibilidad puede variar según la demanda y los horarios de los instructores.",
  },
  {
    question: "¿Hay clases disponibles los fines de semana?",
    answer:
      "La disponibilidad puede variar, por lo que la mejor forma de confirmar las opciones actuales de horario es contactar la oficina directamente.",
  },
  {
    question: "¿Qué debo llevar a una clase?",
    answer:
      "Llegue a la oficina de JMC unos minutos antes de su horario. Si tiene restricción B en su permiso, lentes o contactos son obligatorios.",
  },
  {
    question: "¿Qué pasa si necesito cancelar o reprogramar?",
    answer:
      "Debe avisar con 48 horas de anticipación durante el horario de oficina (2 días hábiles) para reprogramar una clase sin costo. No avisar a tiempo resultará en la pérdida de la clase y el pago.",
  },
  {
    question: "¿Cuánto dura cada clase de manejo?",
    answer:
      "Nuestras clases estándar en carretera duran 90 minutos. Hemos encontrado que esta duración es óptima para mantener el enfoque y practicar múltiples maniobras y rutas.",
  },
  {
    question: "¿Cómo encuentro e inscribo una clase?",
    answer:
      "La forma más fácil es usar la página de Clases de este sitio para ver fechas de cursos acelerados, o contactar nuestra oficina al (781) 373-1730 o contact@jmcdrivingschool.com. Puede registrarse en nuestro sitio web, por teléfono o visitando nuestra oficina de Waltham.",
  },
  {
    question: "¿Hay una clase obligatoria para padres/tutores?",
    answer:
      "Sí. Para nuevos estudiantes desde el 1 de mayo de 2019, el Registro de MA exige una clase obligatoria de 2 horas para padres/tutores. Debe completarse antes de comenzar clases en carretera, pero no antes de las sesiones en el aula.",
  },
  {
    question: "¿Qué documentos debo llevar a mi primera clase?",
    answer:
      "Para su primera clase en carretera, debe llevar su permiso de aprendiz físico válido. Las copias digitales no son aceptadas por la ley estatal. También debe usar zapatos cerrados y llevar lentes correctivos si su permiso lo requiere.",
  },
];

const faqTestEs: FaqItem[] = [
  {
    question: "¿Ofrecen patrocinio para examen de manejo?",
    answer:
      "Sí. JMC Driving School ofrece patrocinio para examen de manejo en nuestra oficina de Waltham y ubicaciones del RMV en Watertown, Lowell, Wilmington, Haverhill, Lawrence, Revere, Worcester y Milford. Ofrecemos patrocinio los sábados en la oficina de JMC o entre semana en ciertas ubicaciones del RMV. Contacte la oficina para tarifas y disponibilidad actuales. Las tarifas del examen de manejo no son reembolsables.",
  },
  {
    question: "¿Debo llamar antes de enviar el formulario de examen de manejo?",
    answer:
      "Sí. Se recomienda llamar primero para confirmar disponibilidad, área del RMV preferida, horario y cualquier requisito antes de continuar.",
  },
  {
    question: "¿Pueden ayudarme a prepararme antes de mi examen de manejo?",
    answer:
      "Por supuesto. Cubrimos todas las reglas, regulaciones y maniobras durante nuestras clases. Recomendamos que conductores con experiencia tomen al menos 2 clases antes del examen de manejo.",
  },
  {
    question: "¿Dónde puedo practicar para el examen de permiso?",
    answer:
      "Puede usar nuestra página de Recursos para guías de estudio y materiales de práctica, y el sitio principal de JMC Driving School también enlaza a exámenes de práctica oficiales de permiso. Estas herramientas son una excelente forma de prepararse antes de programar su examen de permiso.",
  },
];

const faqGeneralEs: FaqItem[] = [
  {
    question: "¿Cuáles son los requisitos de edad para comenzar clases de manejo?",
    answer:
      "Según las reglas del RMV de Massachusetts, los estudiantes deben tener al menos 15 años y 9 meses antes del primer día de clase. Se requiere un permiso de aprendiz válido antes de programar cualquier clase en carretera.",
  },
  {
    question: "¿Qué áreas atienden?",
    answer:
      "JMC Driving School atiende Waltham, MA y áreas circundantes, incluyendo patrocinio para examen de manejo en Watertown, Lowell, Wilmington, Haverhill, Lawrence, Revere, Worcester y Milford. Contacte la oficina para confirmar disponibilidad del programa en su área.",
  },
  {
    question: "¿Necesito mi propia cuenta o puede un padre inscribirme?",
    answer:
      "Al registrarse en línea, la cuenta siempre debe crearse a nombre del estudiante con su información. Un padre/tutor puede completar el pago, pero el perfil debe corresponder al estudiante.",
  },
  {
    question: "¿Atienden estudiantes en varios idiomas?",
    answer:
      "Sí. Hay soporte disponible en inglés, portugués, español y criollo haitiano.",
  },
  {
    question: "¿Dónde están ubicados?",
    answer: "973 Main Street, Waltham, MA 02451",
  },
  {
    question: "¿Cómo puedo contactar a JMC Driving School?",
    answer:
      "Puede llamarnos al (781) 373-1730 o escribir a contact@jmcdrivingschool.com. Horario de oficina: lun–vie 10am–4pm.",
  },
  {
    question: "¿Tienen política de privacidad?",
    answer:
      "Sí. Puede revisarla en nuestra página de Información legal.",
  },
];

const faqPricingEs: FaqItem[] = [
  {
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Aceptamos las principales tarjetas de crédito y débito para pagos en línea. También puede pagar en persona en nuestra oficina de Waltham durante el horario publicado (lun–vie 10am–4pm).",
  },
  {
    question: "¿Hay un depósito requerido?",
    answer:
      "Sí. Se requiere un depósito de $400 antes del inicio de las sesiones en el aula para el paquete de programa completo. El saldo restante vence el último día de clase.",
  },
  {
    question: "¿Cuál es la política de recargo de gasolina?",
    answer:
      "Si el precio de la gasolina alcanza $4.00 o más, se agrega un recargo de $5.00 por clase en carretera para ayudar a cubrir los costos de combustible.",
  },
  {
    question: "¿En qué se diferencian las tarifas del RMV de las de JMC Driving School?",
    answer:
      "Las tarifas de JMC Driving School cubren aula, clases en carretera, observaciones y certificado. Por separado, el RMV de Massachusetts cobra $50 por la licencia y $35 por el examen estatal (total $85). Las tarifas del RMV se pagan directamente al estado, idealmente en línea antes de su examen.",
  },
  {
    question: "¿Ofrecen certificados de regalo?",
    answer:
      "Sí. Los certificados de regalo están disponibles y pueden usarse para clases o programas completos. Visite nuestra página de Tarjetas de regalo o contacte la oficina para comprar.",
  },
];

export const faqPageEs = {
  title: "Preguntas frecuentes",
  subtitle:
    "Respuestas rápidas sobre programas, inscripción, horarios, exámenes de manejo y políticas generales.",
  searchPlaceholder: "Buscar temas, ej. 'política de cancelación'",
  programs: "Programas e inscripción",
  lessons: "Clases y horarios",
  test: "Examen de manejo",
  general: "Información general",
  pricing: "Precios y pagos",
  ctaTitle: "¿Aún tiene preguntas?",
  ctaDesc:
    "Si no encontró lo que buscaba, nuestro equipo de soporte está listo para ayudarle en su camino.",
  contactSupport: "Contactar soporte",
  categories: {
    programs: faqProgramsEs,
    lessons: faqLessonsEs,
    test: faqTestEs,
    general: faqGeneralEs,
    pricing: faqPricingEs,
  },
};

const faqProgramsPt: FaqItem[] = [
  {
    question: "Quais programas vocês oferecem?",
    answer:
      "Oferecemos programa de educação para motoristas, aula para pais/responsáveis, aulas de direção para adultos, aulas em rodovia e patrocínio para exame prático. Veja todas as opções na nossa página de Programas ou entre em contato com o escritório para orientação.",
  },
  {
    question: "Como sei qual programa é o certo para mim?",
    answer:
      "Depende da sua idade, experiência de direção atual e do que você mais precisa — educação para motoristas, aulas de direção, aulas de reforço ou patrocínio para exame prático. Entre em contato conosco e ajudaremos você a escolher a melhor opção.",
  },
  {
    question: "Preciso preencher um formulário online?",
    answer:
      "Alguns serviços têm formulários de inscrição disponíveis online por conveniência. Se preferir, também pode contactar o escritório diretamente para orientação antes de enviar um formulário.",
  },
  {
    question: "Adultos podem se inscrever em aulas mesmo sendo iniciantes?",
    answer:
      "Sim. Alunos adultos podem se inscrever sejam iniciantes completos, precisem de treinamento de reforço ou queiram patrocínio focado para exame prático.",
  },
];

const faqLessonsPt: FaqItem[] = [
  {
    question: "Como agendo aulas de direção?",
    answer:
      "Ligue para o escritório no (781) 373-1730 ou envie uma mensagem com seus dias e horários preferidos. A disponibilidade pode variar conforme a demanda e os horários dos instrutores.",
  },
  {
    question: "Há aulas disponíveis nos fins de semana?",
    answer:
      "A disponibilidade pode variar, então a melhor forma de confirmar as opções atuais de agendamento é contactar o escritório diretamente.",
  },
  {
    question: "O que devo levar para uma aula?",
    answer:
      "Chegue ao escritório da JMC alguns minutos antes do horário marcado. Se tiver restrição B na permissão, óculos ou lentes de contato são obrigatórios.",
  },
  {
    question: "O que acontece se precisar cancelar ou reagendar?",
    answer:
      "Você deve avisar com 48 horas de antecedência durante o horário de expediente (2 dias úteis) para reagendar uma aula sem custo. Não avisar a tempo resultará na perda da aula e do pagamento.",
  },
  {
    question: "Quanto tempo dura cada aula de direção?",
    answer:
      "Nossas aulas práticas padrão duram 90 minutos. Descobrimos que essa duração é ideal para manter o foco e praticar várias manobras e rotas.",
  },
  {
    question: "Como encontro e me inscrevo em uma aula?",
    answer:
      "A forma mais fácil é usar a página de Aulas deste site para ver datas de cursos acelerados, ou entrar em contato com nosso escritório no (781) 373-1730 ou contact@jmcdrivingschool.com. Você pode se inscrever pelo site, por telefone ou visitando nosso escritório em Waltham.",
  },
  {
    question: "Existe aula obrigatória para pais/responsáveis?",
    answer:
      "Sim. Para novos alunos a partir de 1º de maio de 2019, o Registro de MA exige uma aula obrigatória de 2 horas para pais/responsáveis. Deve ser concluída antes de iniciar aulas práticas, mas não antes das aulas em sala.",
  },
  {
    question: "Quais documentos devo levar na minha primeira aula?",
    answer:
      "Para sua primeira aula prática, você deve levar sua permissão de aprendizagem física válida. Cópias digitais não são aceitas pela lei estadual. Use também sapatos fechados e leve óculos corretivos se sua permissão exigir.",
  },
];

const faqTestPt: FaqItem[] = [
  {
    question: "Vocês oferecem patrocínio para exame prático?",
    answer:
      "Sim. A JMC Driving School oferece patrocínio para exame prático em nosso escritório em Waltham e locais do RMV em Watertown, Lowell, Wilmington, Haverhill, Lawrence, Revere, Worcester e Milford. Oferecemos patrocínio aos sábados no escritório da JMC ou em dias úteis em certos locais do RMV. Entre em contato com o escritório para taxas e disponibilidade atuais. As taxas do exame prático não são reembolsáveis.",
  },
  {
    question: "Devo ligar antes de enviar o formulário de exame prático?",
    answer:
      "Sim. Recomendamos ligar primeiro para confirmar disponibilidade, área do RMV preferida, horário e quaisquer requisitos antes de prosseguir.",
  },
  {
    question: "Vocês podem me ajudar a me preparar antes da data do exame prático?",
    answer:
      "Com certeza. Cobrimos todas as regras, regulamentos e manobras durante nossas aulas. Recomendamos que motoristas experientes façam pelo menos 2 aulas antes do exame prático.",
  },
  {
    question: "Onde posso praticar para o exame de permissão?",
    answer:
      "Você pode usar nossa página de Recursos para guias de estudo e materiais de prática, e o site principal da JMC Driving School também vincula a testes oficiais de prática de permissão. Essas ferramentas são ótimas para se preparar antes de agendar seu exame de permissão.",
  },
];

const faqGeneralPt: FaqItem[] = [
  {
    question: "Quais são os requisitos de idade para começar aulas de direção?",
    answer:
      "Segundo as regras do RMV de Massachusetts, os alunos devem ter pelo menos 15 anos e 9 meses antes do primeiro dia de aula. É necessária uma permissão de aprendizagem válida antes de agendar qualquer aula prática.",
  },
  {
    question: "Quais áreas vocês atendem?",
    answer:
      "A JMC Driving School atende Waltham, MA e regiões vizinhas, incluindo patrocínio para exame prático em Watertown, Lowell, Wilmington, Haverhill, Lawrence, Revere, Worcester e Milford. Entre em contato com o escritório para confirmar disponibilidade do programa na sua área.",
  },
  {
    question: "Preciso de minha própria conta ou um pai pode se inscrever por mim?",
    answer:
      "Ao se inscrever online, a conta deve sempre ser criada no nome do aluno com suas informações. Um pai/responsável pode completar o pagamento, mas o perfil deve corresponder ao aluno.",
  },
  {
    question: "Vocês atendem alunos em vários idiomas?",
    answer:
      "Sim. Há suporte disponível em inglês, português, espanhol e crioulo haitiano.",
  },
  {
    question: "Onde vocês estão localizados?",
    answer: "973 Main Street, Waltham, MA 02451",
  },
  {
    question: "Como posso entrar em contato com a JMC Driving School?",
    answer:
      "Você pode nos ligar no (781) 373-1730 ou enviar e-mail para contact@jmcdrivingschool.com. Horário do escritório: seg–sex 10h–16h.",
  },
  {
    question: "Vocês têm política de privacidade?",
    answer:
      "Sim. Você pode revisá-la na nossa página de Informações legais.",
  },
];

const faqPricingPt: FaqItem[] = [
  {
    question: "Quais formas de pagamento vocês aceitam?",
    answer:
      "Aceitamos os principais cartões de crédito e débito para pagamentos online. Você também pode pagar presencialmente em nosso escritório em Waltham durante o horário publicado (seg–sex 10h–16h).",
  },
  {
    question: "Há depósito obrigatório?",
    answer:
      "Sim. Um depósito de $400 é exigido antes do início das aulas em sala para o pacote de programa completo. O saldo restante vence no último dia de aula.",
  },
  {
    question: "Qual é a política de taxa de combustível?",
    answer:
      "Se o preço do combustível atingir $4,00 ou mais, é adicionada uma taxa de $5,00 por aula prática para ajudar a cobrir os custos de combustível.",
  },
  {
    question: "Como as taxas do RMV diferem das taxas da JMC Driving School?",
    answer:
      "As taxas da JMC Driving School cobrem aula, aulas práticas, observações e certificado. Separadamente, o RMV de Massachusetts cobra $50 pela licença e $35 pelo exame estadual (total $85). As taxas do RMV são pagadas diretamente ao estado, idealmente online antes da data do exame.",
  },
  {
    question: "Vocês oferecem certificados de presente?",
    answer:
      "Sim. Certificados de presente estão disponíveis e podem ser usados para aulas ou programas completos. Visite nossa página de Cartões-presente ou entre em contato com o escritório para comprar.",
  },
];

export const faqPagePt = {
  title: "Perguntas frequentes",
  subtitle:
    "Respostas rápidas sobre programas, inscrição, horários, exames práticos e políticas gerais.",
  searchPlaceholder: "Buscar tópicos, ex. 'política de cancelamento'",
  programs: "Programas e inscrição",
  lessons: "Aulas e agendamento",
  test: "Exame prático",
  general: "Informações gerais",
  pricing: "Preços e pagamentos",
  ctaTitle: "Ainda tem dúvidas?",
  ctaDesc:
    "Se não encontrou o que procurava, nossa equipe de suporte está pronta para ajudá-lo em sua jornada.",
  contactSupport: "Contatar suporte",
  categories: {
    programs: faqProgramsPt,
    lessons: faqLessonsPt,
    test: faqTestPt,
    general: faqGeneralPt,
    pricing: faqPricingPt,
  },
};

export type FaqPageMessages = typeof faqPageEn;

const faqProgramsHt: FaqItem[] = [
  {
    question: "Ki pwogram nou ofri?",
    answer:
      "Nou ofri Pwogram Edikasyon Chofè, Klas Paran/Gadyen, Leson Kondwi pou Granmoun, Leson sou Otowout, ak Patwone pou Egzamen sou Wout la. Ou ka wè tout opsyon yo sou paj Pwogram nou an oswa kontakte biwo a pou jwenn gid.",
  },
  {
    question: "Kijan mwen ka konnen ki pwogram ki bon pou mwen?",
    answer:
      "Sa depann de laj ou, eksperyans kondwi ou genyen kounye a, ak sa ou bezwen plis — Edikasyon Chofè, leson kondwi, leson refè, oswa patwone pou egzamen sou wout la. Kontakte nou epi n ap ede ou chwazi pi bon opsyon an.",
  },
  {
    question: "Èske mwen bezwen ranpli yon fòm sou entènèt?",
    answer:
      "Gen kèk sèvis ki gen fòm enskripsyon sou entènèt pou fasilite. Si ou prefere, ou ka kontakte biwo a dirèkteman pou jwenn gid anvan ou soumèt yon fòm.",
  },
  {
    question: "Èske granmoun ka enskri pou leson menm si yo débutan?",
    answer:
      "Wi. Elèv granmoun ka enskri kit yo débutan konplè, bezwen fòmasyon refè, oswa vle patwone ki konsantre sou egzamen sou wout la.",
  },
];

const faqLessonsHt: FaqItem[] = [
  {
    question: "Kijan mwen ka pran randevou pou leson kondwi?",
    answer:
      "Rele biwo a nan (781) 373-1730 oswa voye yon mesaj ak jou ak lè ou prefere yo. Disponibilite a ka varye selon demann lan ak orè enstriktè yo.",
  },
  {
    question: "Èske gen leson ki disponib nan fen semèn nan?",
    answer:
      "Disponibilite a ka varye, kidonk pi bon fason pou konfime opsyon orè aktyèl yo se kontakte biwo a dirèkteman.",
  },
  {
    question: "Kisa mwen dwe pote nan yon leson?",
    answer:
      "Ou dwe rive nan biwo JMC la kèk minit anvan lè ou te pran randevou a. Si ou gen restriksyon B sou pèmi ou, linèt oswa lens yo obligatwa.",
  },
  {
    question: "Kisa ki rive si mwen bezwen anile oswa chanje randevou a?",
    answer:
      "Ou dwe bay 48 èdtan avètisman pandan lè biwo a louvri (2 jou ouvrab) pou chanje yon leson san frè. Si ou pa bay avètisman kòrèk la, ou pral pèdi leson an ak peman an.",
  },
  {
    question: "Konbyen tan chak leson kondwi dire?",
    answer:
      "Leson kondwi estanda nou yo dire 90 minit. Nou jwenn ke dire sa a se pi bon pou kenbe konsantrasyon pandan nou gen ase tan pou pratike plizyè manèv ak wout.",
  },
  {
    question: "Kijan mwen ka jwenn yon klas epi enskri?",
    answer:
      "Fason ki pi fasil la se itilize paj Klas sou sit sa a pou wè dat kou akselere yo, oswa kontakte biwo nou an nan (781) 373-1730 oswa contact@jmcdrivingschool.com. Ou ka enskri sou sit entènèt nou an, pa telefòn, oswa vizite biwo nou an nan Waltham.",
  },
  {
    question: "Èske gen yon klas obligatwa pou paran/gadyen?",
    answer:
      "Wi. Pou nouvo elèv depi 1ye me 2019, Biwo Enskripsyon MA a egzije yon klas obligatwa 2 èdtan pou paran/gadyen. Li dwe fini anvan nenpòt leson sou wout la kòmanse, men li pa bezwen fini anvan sesyon klas yo.",
  },
  {
    question: "Ki dokiman mwen dwe pote nan premye leson mwen an?",
    answer:
      "Pou premye leson kondwi ou an, ou dwe pote pèmi aprantisaj fizik ou ki valab. Kopi dijital yo pa aksepte selon lwa eta a. Ou dwe mete soulye fèmen tou epi pote linèt korektif si pèmi ou egzije sa.",
  },
];

const faqTestHt: FaqItem[] = [
  {
    question: "Èske nou ofri patwone pou egzamen sou wout la?",
    answer:
      "Wi. JMC Driving School ofri patwone pou egzamen sou wout la nan biwo nou an nan Waltham ak nan kote RMV yo nan Watertown, Lowell, Wilmington, Haverhill, Lawrence, Revere, Worcester, ak Milford. Nou ofri patwone pou egzamen samdi nan biwo JMC a oswa jou ouvrab nan kèk kote RMV. Kontakte biwo a pou frè ak disponibilite aktyèl yo. Frè egzamen sou wout la pa ranbousab.",
  },
  {
    question: "Èske mwen ta dwe rele anvan mwen soumèt fòm egzamen sou wout la?",
    answer:
      "Wi. Li rekòmande pou rele an premye pou nou ka konfime disponibilite, zòn RMV ou prefere a, lè, ak nenpòt egzijans anvan ou kontinye.",
  },
  {
    question: "Èske nou ka ede mwen prepare anvan dat egzamen sou wout la mwen an?",
    answer:
      "Absoliman. Nou kouvri tout règ, regleman, ak manèv yo pandan leson nou yo. Nou konseye chofè ki gen eksperyans pran omwen 2 leson anvan egzamen sou wout la.",
  },
  {
    question: "Kote mwen ka pratike pou egzamen pèmi a?",
    answer:
      "Ou ka itilize paj Resous nou an pou gid etid ak materyèl pratik, epi sit prensipal JMC Driving School la gen lyen tou pou tès pratik pèmi ofisyèl yo. Zouti sa yo se yon bon fason pou prepare anvan ou pran randevou pou egzamen pèmi ou an.",
  },
];

const faqGeneralHt: FaqItem[] = [
  {
    question: "Ki egzijans laj pou kòmanse leson kondwi?",
    answer:
      "Selon règ RMV Massachusetts la, elèv yo dwe gen omwen 15 an ak 9 mwa anvan premye jou klas la. Yon pèmi aprantisaj valab obligatwa anvan nenpòt leson sou wout (kondwi) ka pran randevou.",
  },
  {
    question: "Ki zòn nou sèvi?",
    answer:
      "JMC Driving School sèvi Waltham, MA ak zòn ki tou pre yo, enkli patwone pou egzamen sou wout la nan Watertown, Lowell, Wilmington, Haverhill, Lawrence, Revere, Worcester, ak Milford. Kontakte biwo a pou konfime disponibilite pwogram nan zòn ou an.",
  },
  {
    question: "Èske mwen bezwen pwòp kont mwen oswa yon paran ka enskri pou mwen?",
    answer:
      "Lè w ap enskri sou entènèt, kont la toujou dwe kreye nan non elèv la ak enfòmasyon elèv la. Yon paran/gadyen ka fè peman an, men pwofil la dwe matche ak elèv la.",
  },
  {
    question: "Èske nou ede elèv nan plizyè lang?",
    answer:
      "Wi. Sipò disponib nan angle (English), pòtigè (Portuguese), panyòl (Spanish), ak kreyòl ayisyen (Haitian Creole).",
  },
  {
    question: "Kote nou sitiye?",
    answer: "973 Main Street, Waltham, MA 02451",
  },
  {
    question: "Kijan mwen ka kontakte JMC Driving School?",
    answer:
      "Ou ka rele nou nan (781) 373-1730 oswa voye imèl nan contact@jmcdrivingschool.com. Lè biwo a: lun–vèn 10am–4pm.",
  },
  {
    question: "Èske nou gen yon règleman sou vi prive?",
    answer:
      "Wi. Ou ka li li sou paj Enfòmasyon Legal nou an.",
  },
];

const faqPricingHt: FaqItem[] = [
  {
    question: "Ki metòd peman nou aksepte?",
    answer:
      "Nou aksepte prensipal kat kredi ak debi pou peman sou entènèt. Ou ka peye an pèsòn tou nan biwo nou an nan Waltham pandan lè biwo a pibliye yo (lun–vèn 10am–4pm).",
  },
  {
    question: "Èske gen yon depo obligatwa?",
    answer:
      "Wi. Yon depo $400 obligatwa anvan sesyon klas yo kòmanse pou pake pwogram konplè a. Rès la dwe peye nan dènye jou klas la.",
  },
  {
    question: "Ki règleman sou souchaj gaz la?",
    answer:
      "Si pri gaz la rive nan $4.00 oswa pi wo, yon souchaj $5.00 pa leson sou wout la ajoute pou ede kouvri depans gaz la.",
  },
  {
    question: "Kijan frè RMV yo diferan de frè JMC Driving School yo?",
    answer:
      "Frè JMC Driving School yo kouvri klas, leson sou wout, obsèvasyon, ak sètifika. Apa de sa, RMV Massachusetts la chaje $50 pou lisans lan ak $35 pou egzamen eta a (total $85). Frè RMV yo peye dirèkteman bay eta a, ideyalman sou entènèt anvan dat egzamen ou an.",
  },
  {
    question: "Èske nou ofri sètifika kado?",
    answer:
      "Wi. Sètifika kado disponib epi yo ka itilize pou leson oswa pwogram konplè. Vizite paj Kat Kado nou an oswa kontakte biwo a pou achte.",
  },
];

export const faqPageHt = {
  title: "Kesyon yo Poze Souvan",
  subtitle:
    "Repons rapid sou pwogram, enskripsyon, orè, egzamen sou wout, ak règleman jeneral.",
  searchPlaceholder: "Chèche sijè, pa egzanp 'règleman anilasyon'",
  programs: "Pwogram ak Enskripsyon",
  lessons: "Leson ak Orè",
  test: "Egzamen sou Wout",
  general: "Enfòmasyon Jeneral",
  pricing: "Pri ak Peman",
  ctaTitle: "Ou gen lòt kesyon?",
  ctaDesc:
    "Si ou pa jwenn sa w ap chèche a, ekip sipò nou an pare pou ede ou nan vwayaj ou an.",
  contactSupport: "Kontakte Sipò",
  categories: {
    programs: faqProgramsHt,
    lessons: faqLessonsHt,
    test: faqTestHt,
    general: faqGeneralHt,
    pricing: faqPricingHt,
  },
};
