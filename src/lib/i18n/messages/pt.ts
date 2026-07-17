import type { Messages } from "./en";
import { coursesPt } from "./pages/courses";
import { classesPt } from "./pages/classes";
import { faqPagePt } from "./pages/faq";
import { legalPt } from "./pages/legal";
import { giftCardsPt } from "./pages/gift-cards";
import { resourcesPt } from "./pages/resources";
import {
  ageCheckerPt,
  authPt,
  careersPt,
} from "./pages/misc";

export const pt: Messages = {
  nav: {
    programs: "Programas",
    classes: "Aulas",
    giftCards: "Cartões-presente",
    about: "Sobre nós",
    contact: "Contato",
    faq: "Perguntas frequentes",
    signIn: "Entrar",
    enroll: "Inscrever-se",
    toggleMenu: "Abrir ou fechar menu de navegação",
  },
  footer: {
    quickLinks: "Links rápidos",
    home: "Início",
    enrollment: "Inscrição",
    driversEd: "Educação para motoristas",
    parentsProgram: "Programa para pais",
    adultProgram: "Programa para adultos",
    roadTestForm: "Formulário de exame prático",
    privacyPolicy: "Política de privacidade",
    contactUs: "Fale conosco",
    callNow: "Ligue agora: {phone}",
    rights: "© 2026 {name}. Todos os direitos reservados.",
    by: "Por",
  },
  common: {
    callNow: "Ligue agora: {phone}",
    viewPrograms: "Ver programas",
    enrollNow: "Inscrever-se agora",
    viewAllFaqs: "Ver todas as perguntas frequentes",
    googleReviews: "({count}+ avaliações no Google)",
    googleReviewsAria: "{rating} de 5 estrelas de mais de {count} avaliações no Google",
    address: "Endereço",
    phone: "Telefone",
    email: "E-mail",
    hours: "Horário",
    languages: "Idiomas",
    officeHours: "Horário de atendimento",
    cancellations: "Cancelamentos",
    refundPolicy: "Política de reembolso",
    sendMessage: "Enviar mensagem",
    findUs: "Encontre-nos",
  },
  home: {
    heroAlt: "Aulas de direção da {name} em Waltham, Massachusetts",
    whyChoose: "Por que escolher a {name}?",
    whyChooseDesc:
      "Combinamos instrutores certificados com horários flexíveis e patrocínio para o exame prático para ajudá-lo a ter sucesso na estrada e no RMV.",
    certifiedInstructors: "Instrutores certificados",
    certifiedInstructorsDesc:
      "Profissionais certificados pelo estado que ajudam novos motoristas a ganhar habilidades e confiança na estrada.",
    flexibleScheduling: "Horários flexíveis",
    flexibleSchedulingDesc:
      "Inscreva-se online, por telefone ou presencialmente em nosso escritório em Waltham durante o horário publicado.",
    roadTestSponsorship: "Patrocínio para exame prático",
    roadTestSponsorshipDesc:
      "Patrocínio disponível em nosso escritório e em locais do RMV em todo Massachusetts.",
    programsLabel: "Programas e aulas",
    acceleratedTitle: "Educação para motoristas: cursos acelerados",
    acceleratedDescPrefix:
      "Sessões intensivas de educação para motoristas com datas definidas em Waltham. Confira nossos",
    acceleratedDescJoin: "e",
    acceleratedDescSuffix: "para mais detalhes.",
    drivingPrograms: "programas de direção",
    classSchedule: "calendário de aulas",
    roadTestTitle: "Patrocínios para exame prático",
    roadTestDesc: "Disponível no escritório da JMC em Waltham ou em locais do RMV em:",
    rmvAria: "Centro de serviços RMV de {name} — abrir no Google Maps",
    reviewsTitle: "O que nossos alunos dizem",
    reviewsDesc:
      "Avaliações reais do Google de alunos que passaram no exame prático com a {name}.",
    attentionLabel: "Atualização importante",
    attentionTitle: "ATENÇÃO: aulas de educação para motoristas presenciais",
    attentionGreeting: "Caros alunos e pais:",
    attentionP1: "Todas as aulas de educação para motoristas serão realizadas presencialmente!",
    attentionP2:
      "Como oferecemos grupos menores, as vagas são limitadas. Apresse-se para garantir sua vaga. Você pode se inscrever pelo nosso site, por telefone ou visitando nosso escritório em {address}.",
    attentionP3:
      "Entre em contato conosco para verificar disponibilidade e tirar dúvidas por e-mail: {email} ou ligando/enviando mensagem: {phone}",
    cancellationsDesc: "Aceitos somente {hours}.",
    refundDesc:
      "Reembolso integral em até 7 dias após a compra se nenhum serviço foi utilizado. A taxa do exame prático não é reembolsável.",
    faqTitle: "Perguntas frequentes",
    faqDesc:
      "Respostas rápidas sobre aulas de direção, inscrição e políticas em Waltham, MA.",
    courseAugust: "Sessão de agosto",
    courseOctober: "Sessão de outubro",
    courseDecember: "Sessão de dezembro",
    faqs: [
      {
        question: "Quais áreas a JMC Driving School atende?",
        answer:
          "A JMC Driving School atende Waltham, MA e regiões vizinhas, com patrocínio para exame prático disponível em Watertown, Lowell, Wilmington, Haverhill, Lawrence, Revere, Worcester e Milford.",
      },
      {
        question: "Como me inscrevo para educação de motoristas ou aulas de direção?",
        answer:
          "Você pode se inscrever pelo nosso site, por telefone no (781) 373-1730 ou visitando nosso escritório em Waltham durante o horário de atendimento (seg–sex 10h–16h).",
      },
      {
        question: "Vocês oferecem patrocínio para o exame prático?",
        answer:
          "Sim. O patrocínio para exame prático está disponível no escritório da JMC e em locais do RMV em todo Massachusetts, incluindo Watertown, Lowell, Wilmington, Haverhill, Lawrence, Revere, Worcester e Milford.",
      },
      {
        question: "Qual é a política de reembolso?",
        answer:
          "Você tem direito a reembolso integral em até 7 dias após a compra se nenhum serviço foi utilizado. A taxa do exame prático não é reembolsável.",
      },
    ],
  },
  about: {
    title: "Sobre a {name}",
    heroDesc:
      "Aulas de direção profissionais em Waltham, Massachusetts. Instrutores certificados que ajudam novos motoristas a ganhar habilidades e confiança na estrada.",
    heroAlt: "Sala de aula presencial de educação para motoristas da {name} em Waltham, Massachusetts",
    missionTitle: "Nossa missão",
    missionP1:
      "A {name} é um lugar onde alunos de todas as idades podem aprender as habilidades e regras necessárias para ser um motorista seguro, responsável e cortês. Oferecemos programas para adolescentes, pais e motoristas adultos em {serviceArea}.",
    missionP2:
      "Seja começando do zero ou se preparando para o exame prático, nossos instrutores certificados oferecem a instrução profissional e o apoio que você precisa para ter sucesso. Realizamos todas as aulas de educação para motoristas presencialmente, em grupos menores, para garantir atenção personalizada.",
    missionP3Prefix:
      "Nossa equipe atende uma comunidade diversa e oferece suporte em inglês, português e espanhol. Entre em contato com nosso escritório pelo",
    missionP3Or: "ou",
    missionP3Suffix: "para saber sobre disponibilidade.",
    officeInfo: "Informações do escritório",
    differenceTitle: "A diferença da {name}",
    differenceDesc:
      "Instrução certificada, horários flexíveis e patrocínio para exame prático. Tudo o que você precisa para pegar a estrada com confiança.",
    certifiedInstructorsDesc:
      "Nossos instrutores são profissionais certificados pelo estado, dedicados a ajudá-lo a passar no exame prático e dirigir com segurança para a vida toda.",
    flexibleSchedulingDesc:
      "Inscreva-se online, por telefone ou presencialmente. Oferecemos cursos acelerados e aulas presenciais com vagas limitadas.",
    roadTestDesc:
      "Patrocínio para exame prático disponível em nosso escritório em Waltham e em locais do RMV incluindo Watertown, Lowell, Wilmington e mais.",
    ctaTitle: "Pronto para começar sua jornada?",
    ctaDesc:
      "Entre em contato com nosso escritório para verificar disponibilidade de aulas presenciais de educação para motoristas e cursos acelerados.",
  },
  contact: {
    title: "Contato {name}",
    subtitle:
      "Seja para começar sua jornada ao volante ou tirar dúvidas sobre nossos programas, nossa equipe está aqui para ajudá-lo a alcançar seus objetivos com segurança.",
    sendMessage: "Envie-nos uma mensagem",
    fullName: "Nome completo",
    fullNamePlaceholder: "Maria Silva",
    emailAddress: "Endereço de e-mail",
    emailPlaceholder: "maria@exemplo.com",
    subject: "Assunto",
    selectInquiry: "Selecione um tipo de consulta",
    inquiryEnrollment: "Inscrição em educação para motoristas",
    inquiryParent: "Programa para pais",
    inquiryAdult: "Programa para adultos",
    inquiryRoadTest: "Patrocínio para exame prático",
    inquiryOther: "Outro",
    yourMessage: "Sua mensagem",
    messagePlaceholder: "Como podemos ajudá-lo hoje?",
    contactInfo: "Informações de contato",
    mapTitle: "Mapa de localização da JMC Driving School",
    imageAlt: "Contato da JMC Driving School",
  },
  site: {
    tagline: "Aprenda a dirigir com confiança",
    description:
      "Aulas de direção profissionais em Waltham, Massachusetts. Instrutores certificados que ajudam novos motoristas a ganhar habilidades e confiança na estrada.",
    serviceArea: "Waltham, MA e regiões vizinhas",
    officeHours: "Seg–Sex 10h–16h",
    cancellationHours: "Seg–Sex 10h–16h",
  },
  courses: coursesPt,
  classes: classesPt,
  faqPage: faqPagePt,
  legal: legalPt,
  giftCards: giftCardsPt,
  resources: resourcesPt,
  careers: careersPt,
  auth: authPt,
  ageChecker: ageCheckerPt,
};
