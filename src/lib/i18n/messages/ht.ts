import type { Messages } from "./en";
import { coursesHt } from "./pages/courses";
import { roadTestsHt } from "./pages/roadTests";
import { classesHt } from "./pages/classes";
import { faqPageHt } from "./pages/faq";
import { legalHt } from "./pages/legal";
import { resourcesHt } from "./pages/resources";
import {
  ageCheckerHt,
  authHt,
  careersHt,
} from "./pages/misc";
import { enrollmentHt } from "./pages/enrollment";

export const ht: Messages = {
  nav: {
    programs: "Pwogram yo",
    roadTests: "Egzamen wout",
    classes: "Klas yo",
    about: "Sou nou",
    contact: "Kontakte nou",
    faq: "Kesyon yo poze souvan",
    signIn: "Konekte",
    enroll: "Enskri",
    toggleMenu: "Ouvri oswa fèmen meni navigasyon an",
  },
  footer: {
    quickLinks: "Lyen rapid yo",
    home: "Akèy",
    enrollment: "Enskripsyon",
    driversEd: "Edikasyon chofè",
    parentsProgram: "Pwogram paran yo",
    adultProgram: "Pwogram adilt yo",
    roadTestForm: "Fòmilè egzamen wout la",
    privacyPolicy: "Règleman sou vi prive",
    contactUs: "Kontakte nou",
    callNow: "Rele kounye a: {phone}",
    rights: "© 2026 {name}. Tout dwa rezève.",
    by: "Pa",
  },
  common: {
    callNow: "Rele kounye a: {phone}",
    viewPrograms: "Gade pwogram yo",
    enrollNow: "Enskri kounye a",
    viewAllFaqs: "Gade tout kesyon yo",
    googleReviews: "({count}+ revi sou Google)",
    googleReviewsAria: "{rating} sou 5 zetwal nan plis pase {count} revi sou Google",
    address: "Adrès",
    phone: "Telefòn",
    email: "Imèl",
    hours: "Lè",
    languages: "Lang yo",
    officeHours: "Lè biwo a",
    cancellations: "Anilasyon yo",
    refundPolicy: "Règleman ranbousman",
    sendMessage: "Voye mesaj",
    findUs: "Jwenn nou",
  },
  home: {
    heroAlt: "Leson kondwi {name} nan Waltham, Massachusetts",
    whyChoose: "Poukisa chwazi {name}?",
    whyChooseDesc:
      "Nou melanje enstriktè sètifye ak orè fleksib ak patwonej pou egzamen wout la pou ede w reyisi sou wout la ak nan RMV a.",
    certifiedInstructors: "Enstriktè sètifye",
    certifiedInstructorsDesc:
      "Pwofesyonèl sètifye pa eta a ki ede nouvo chofè yo devlope konpetans ak konfyans sou wout la.",
    flexibleScheduling: "Orè fleksib",
    flexibleSchedulingDesc:
      "Enskri sou entènèt, pa telefòn, oswa an pèsòn nan biwo nou nan Waltham pandan lè biwo a.",
    roadTestSponsorship: "Patwonej egzamen wout la",
    roadTestSponsorshipDesc:
      "Patwonej disponib nan biwo nou an ak nan kote RMV yo atravè Massachusetts.",
    programsLabel: "Pwogram ak klas yo",
    acceleratedTitle: "Edikasyon chofè: kou akselere yo",
    acceleratedDescPrefix:
      "Sesyon entansif edikasyon chofè ak dat fiks nan Waltham. Gade",
    acceleratedDescJoin: "ak",
    acceleratedDescSuffix: "nou yo pou plis detay.",
    drivingPrograms: "pwogram kondwi yo",
    classSchedule: "kalandriye klas yo",
    contactOffice: "Kontakte biwo a",
    acceleratedUnavailable:
      "Dat sesyon kou akselere yo pa disponib pou kounye a. Tanpri rele biwo a oswa gade paj orè klas yo.",
    roadTestTitle: "Patwonej egzamen wout la",
    roadTestDesc: "Disponib nan biwo JMC nan Waltham oswa nan kote RMV yo nan:",
    rmvAria: "Sant sèvis RMV {name} — ouvri nan Google Maps",
    reviewsTitle: "Sa elèv nou yo di",
    reviewsDesc:
      "Revi reyèl sou Google ki soti nan elèv ki pase egzamen kondwi yo ak {name}.",
    attentionLabel: "Mizajou enpòtan",
    attentionTitle: "ATANSYON: Klas Edikasyon Chofè: An pèsòn",
    attentionGreeting: "Chè elèv ak paran yo:",
    attentionP1: "Tout klas Edikasyon Chofè yo ap fèt an pèsòn!",
    attentionP2:
      "Paske nou ofri gwoup pi piti, plas yo limite. Tanpri prese pou garanti plas ou. Ou ka enskri sou sit entènèt nou an, pa telefòn, oswa vizite biwo nou nan {address}.",
    attentionP3:
      "Tanpri kontakte nou pou disponibilite ak nenpòt kesyon pa imèl: {email} oswa pa rele/mesaj tèks: {phone}",
    cancellationsDesc: "Aksepte sèlman {hours}.",
    refundDesc:
      "Ranbousman konplè nan 7 jou apre acha a si pa gen sèvis ki itilize. Frè egzamen wout la pa ranbousab.",
    faqTitle: "Kesyon yo poze souvan",
    faqDesc:
      "Repons rapid sou leson kondwi, enskripsyon, ak règleman yo nan Waltham, MA.",
    courseAugust: "Sesyon out",
    courseOctober: "Sesyon oktòb",
    courseDecember: "Sesyon desanm",
    faqs: [
      {
        question: "Ki zòn JMC Driving School sèvi?",
        answer:
          "JMC Driving School sèvi Waltham, MA ak kominote ki toupre yo. Patwone pou egzamen wout la disponib nan biwo nou an ak nan kote RMV yo atravè Massachusetts.",
      },
      {
        question: "Kijan mwen enskri pou edikasyon chofè oswa leson kondwi?",
        answer:
          "Ou ka enskri sou sit entènèt nou an, pa telefòn nan (781) 373-1730, oswa lè w vizite biwo nou nan Waltham pandan lè biwo a (Lun–Vie 10am–5pm).",
      },
      {
        question: "Èske nou ofri patwonej egzamen wout la?",
        answer:
          "Wi. Patwone pou egzamen wout la disponib nan biwo nou an nan Waltham ak nan kote RMV yo atravè Massachusetts. Kontakte biwo a pou frè ak disponibilite aktyèl yo.",
      },
      {
        question: "Ki règleman ranbousman nou an?",
        answer:
          "Ou gen dwa pou yon ranbousman konplè nan 7 jou apre acha a si pa gen sèvis ki itilize. Frè egzamen wout la pa ranbousab.",
      },
    ],
  },
  about: {
    title: "Sou {name}",
    heroDesc:
      "Leson kondwi pwofesyonèl nan Waltham, Massachusetts. Enstriktè sètifye ki ede nouvo chofè yo devlope konpetans ak konfyans sou wout la.",
    heroAlt: "Klas Edikasyon Chofè an pèsòn {name} nan Waltham, Massachusetts",
    missionTitle: "Misyon nou",
    missionP1:
      "{name} se yon kote kote elèv tout laj yo ka aprann konpetans ak règleman yo bezwen pou vin yon chofè ki an sekirite, responsab, ak koutwè. Nou ofri pwogram pou adolesan, paran, ak chofè adilt atravè {serviceArea}.",
    missionP2:
      "Kit ou kòmanse depi zewo oswa w ap prepare pou egzamen wout la, enstriktè sètifye nou yo bay enstriksyon pwofesyonèl ak sipò ou bezwen pou reyisi. Nou fè tout klas Edikasyon Chofè yo an pèsòn ak gwoup pi piti pou asire atansyon pèsonalize.",
    missionP3Prefix:
      "Ekip nou an sèvi yon kominote divès epi li ofri sipò nan angle, pòtigè, panyòl, ak kreyòl ayisyen. Kontakte biwo nou an nan",
    missionP3Or: "oswa",
    missionP3Suffix: "pou konnen plis sou disponibilite.",
    officeInfo: "Enfòmasyon biwo a",
    differenceTitle: "Diferans {name} la",
    differenceDesc:
      "Enstriksyon sètifye, orè fleksib, ak patwonej egzamen wout la. Tout sa ou bezwen pou pran wout la ak konfyans.",
    certifiedInstructorsDesc:
      "Enstriktè nou yo se pwofesyonèl sètifye pa eta a ki dedye pou ede w pase egzamen wout la epi kondwi an sekirite pou tout lavi ou.",
    flexibleSchedulingDesc:
      "Enskri sou entènèt, pa telefòn, oswa an pèsòn. Nou ofri kou akselere ak klas an pèsòn ak plas limite.",
    roadTestDesc:
      "Patwonej egzamen wout la disponib nan biwo nou nan Waltham ak nan kote RMV yo ki gen ladan Watertown, Lowell, Wilmington, ak plis ankò.",
    ctaTitle: "Pare pou kòmanse vwayaj ou?",
    ctaDesc:
      "Kontakte biwo nou an pou verifye disponibilite klas Edikasyon Chofè an pèsòn ak kou akselere yo.",
  },
  contact: {
    title: "Kontakte {name}",
    subtitle:
      "Kit ou pare pou kòmanse vwayaj kondwi ou oswa ou gen kesyon sou pwogram nou yo, ekip nou an la pou ede w reyalize objektif ou yo an sekirite.",
    sendMessage: "Voye yon mesaj ba nou",
    fullName: "Non konplè",
    fullNamePlaceholder: "Jan Dupont",
    emailAddress: "Adrès imèl",
    emailPlaceholder: "jan@egzanp.com",
    subject: "Sijè",
    selectInquiry: "Chwazi yon kalite demann",
    inquiryEnrollment: "Enskripsyon Edikasyon Chofè",
    inquiryParent: "Pwogram paran yo",
    inquiryAdult: "Pwogram adilt yo",
    inquiryRoadTest: "Patwonej egzamen wout la",
    inquiryOther: "Lòt",
    yourMessage: "Mesaj ou",
    messagePlaceholder: "Kijan nou ka ede w jodi a?",
    contactInfo: "Enfòmasyon kontak",
    mapTitle: "Kat kote JMC Driving School ye",
    imageAlt: "Kontakte JMC Driving School",
    submitting: "Ap voye...",
    successTitle: "Mesaj la voye!",
    successMessage: "Mèsi paske ou kontakte nou. N ap reponn ou byento.",
    errorMessage: "Nou pa t kapab voye mesaj ou a. Eseye ankò oswa rele nou dirèkteman.",
    sendAnother: "Voye yon lòt mesaj",
    validationRequired: "Tanpri ranpli tout chan obligatwa yo.",
    validationEmail: "Tanpri antre yon adrès imèl ki valab.",
  },
  site: {
    tagline: "Aprann kondwi ak konfyans",
    description:
      "Leson kondwi pwofesyonèl nan Waltham, Massachusetts. Enstriktè sètifye ki ede nouvo chofè yo devlope konpetans ak konfyans sou wout la.",
    serviceArea: "Waltham, MA ak zòn ki toupre yo",
    officeHours: "Lun–Vie 10am–5pm",
    cancellationHours: "Lun–Vie 10am–5pm",
  },
  courses: coursesHt,
  roadTests: roadTestsHt,
  classes: classesHt,
  faqPage: faqPageHt,
  legal: legalHt,
  resources: resourcesHt,
  careers: careersHt,
  auth: authHt,
  ageChecker: ageCheckerHt,
  enrollment: enrollmentHt,
};
