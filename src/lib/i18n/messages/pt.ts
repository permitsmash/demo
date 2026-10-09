import type { Messages } from "./en";
import { coursesPt } from "./pages/courses";
import { roadTestsPt } from "./pages/roadTests";
import { classesPt } from "./pages/classes";
import { faqPagePt } from "./pages/faq";
import { legalPt } from "./pages/legal";
import { resourcesPt } from "./pages/resources";
import {
  ageCheckerPt,
  authPt,
  careersPt,
} from "./pages/misc";
import { enrollmentPt } from "./pages/enrollment";

export const pt: Messages = {
  nav: {
    programs: "Programas",
    roadTests: "Exames práticos",
    classes: "Aulas",
    about: "Sobre nós",
    contact: "Contato",
    faq: "Perguntas frequentes",
    signIn: "Entrar",
    enroll: "Inscrever-se na JMC",
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
    social: "Redes sociais",
    poweredBy: "Desenvolvido por",
  },
  common: {
    callNow: "Ligue agora: {phone}",
    viewPrograms: "Ver programas",
    enrollNow: "Inscrever-se na educação para motoristas",
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
    heroTitle: "Aulas de direção em Waltham, MA",
    heroAlt:
      "Instrutor orientando um aluno ao volante, ao lado de uma aula sobre placas de trânsito na {name} em Waltham, Massachusetts",
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
    contactOffice: "Contatar o escritório",
    acceleratedUnavailable:
      "As datas dos cursos acelerados estão temporariamente indisponíveis. Ligue para o escritório ou consulte a página de calendário de aulas.",
    seatLeft: "1 vaga disponível",
    seatsLeft: "{count} vagas disponíveis",
    onlySeatLeft: "Só resta 1 vaga. A aula começa em {date}.",
    onlySeatsLeft: "Só restam {count} vagas. A aula começa em {date}.",
    licensePathTitle: "Etapas para a licença de Massachusetts",
    licensePathIntro: "Veja as etapas para a sua idade.",
    pathUnder18: "Menores de 18",
    pathAdult: "18 anos ou mais",
    teen1Title: "Passe no exame da permissão",
    teen1Desc: "É preciso ter pelo menos 16 anos. A sala de aula pode começar antes deste exame.",
    teen2Title: "Conclua 30 horas de sala de aula",
    teen2Desc: "Termine a parte de sala de aula da educação de motorista presencialmente.",
    teen2Action: "Ver turmas próximas",
    teen3Title: "Faça as aulas na via",
    teen3Desc:
      "Depois da permissão: 12 horas ao volante, 6 de observação e uma aula de 2 horas para o pai ou responsável.",
    teen3Action: "Ver programas",
    teen4Title: "Pratique com um supervisor",
    teen4Desc:
      "Mantenha a permissão por 6 meses com histórico limpo. Registre 40 horas supervisionadas, ou 30 com um curso de habilidades de direção.",
    teen5Title: "Passe no exame prático",
    teen5Desc:
      "Leve um patrocinador de 21 anos ou mais com pelo menos um ano de carteira dos Estados Unidos.",
    teen5Action: "Patrocínio para o exame",
    adult1Title: "Passe no exame da permissão",
    adult1Desc: "A educação de motorista não é obrigatória a partir dos 18 anos.",
    adult2Title: "Faça aulas se quiser",
    adult2Desc:
      "As aulas são opcionais. Ajudam se você está começando a dirigir ou se preparando para o exame.",
    adult2Action: "Ver programas",
    adult3Title: "Passe no exame prático",
    adult3Desc: "Faça o exame de classe D com um patrocinador de 21 anos ou mais.",
    adult3Action: "Patrocínio para o exame",
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
          "A JMC Driving School atende Waltham, MA e comunidades vizinhas. O patrocínio para exame prático está disponível em nosso escritório e em locais do RMV em todo Massachusetts.",
      },
      {
        question: "Como me inscrevo para educação de motoristas ou aulas de direção?",
        answer:
          "Você pode se inscrever pelo nosso site, por telefone no (781) 373-1730 ou visitando nosso escritório em Waltham durante o horário de atendimento (seg–sex 10h–17h).",
      },
      {
        question: "Com que idade um aluno pode começar a educação de motorista?",
        answer:
          "A sala de aula pode começar aos 15 anos e 9 meses. A permissão de aprendizagem é obrigatória antes de qualquer aula na via, e é preciso ter pelo menos 16 anos para obtê-la.",
      },
      {
        question: "O que o aluno deve levar para a primeira aula na via?",
        answer:
          "Leve uma permissão de aprendizagem física válida. Cópias digitais não são aceitas. Use sapatos fechados e traga as lentes corretivas exigidas pela permissão.",
      },
      {
        question: "Quais idiomas o escritório atende?",
        answer:
          "O escritório pode atender em inglês, português, espanhol e crioulo haitiano.",
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
      "Nossa equipe atende uma comunidade diversa e oferece suporte em inglês, português, espanhol e crioulo haitiano. Entre em contato com nosso escritório pelo",
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
      "Patrocínio para exame prático disponível em nosso escritório em Waltham e em locais do RMV incluindo Watertown, Lowell e mais.",
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
    phoneNumber: "Número de telefone",
    phonePlaceholder: "(781) 555-1234",
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
    imageAlt:
      "Instrutor de direção com uma prancheta ao lado de um aluno em um carro de treino branco",
    submitting: "Enviando...",
    successTitle: "Mensagem enviada!",
    successMessage: "Obrigado por entrar em contato. Retornaremos em breve.",
    errorMessage: "Não foi possível enviar sua mensagem. Tente novamente ou ligue diretamente.",
    sendAnother: "Enviar outra mensagem",
    validationRequired: "Preencha todos os campos obrigatórios.",
    validationEmail: "Insira um endereço de e-mail válido.",
    validationPhone: "Insira um número de telefone válido.",
  },
  site: {
    tagline: "Aprenda a dirigir com confiança",
    description:
      "Aulas de direção profissionais em Waltham, Massachusetts. Instrutores certificados que ajudam novos motoristas a ganhar habilidades e confiança na estrada.",
    serviceArea: "Waltham, MA e regiões vizinhas",
    officeHours: "Seg–Sex 10h–17h",
    cancellationHours: "Seg–Sex 10h–17h",
  },
  courses: coursesPt,
  roadTests: roadTestsPt,
  classes: classesPt,
  faqPage: faqPagePt,
  legal: legalPt,
  resources: resourcesPt,
  careers: careersPt,
  auth: authPt,
  ageChecker: ageCheckerPt,
  enrollment: enrollmentPt,
};
