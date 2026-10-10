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
import { aboutGuideHt, contactGuideHt } from "./pages/guides";

export const ht: Messages = {
  nav: {
    programs: "Pwogram yo",
    roadTests: "Egzamen wout",
    classes: "Klas yo",
    about: "Sou nou",
    contact: "Kontakte nou",
    faq: "Kesyon yo poze souvan",
    signIn: "Konekte",
    enroll: "Enskri nan JMC",
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
    social: "Rezo sosyal",
    poweredBy: "Devlope pa",
  },
  common: {
    callNow: "Rele kounye a: {phone}",
    viewPrograms: "Gade pwogram yo",
    enrollNow: "Enskri nan edikasyon chofè",
    viewAllFaqs: "Gade tout kesyon yo",
    sourceClassroomAge: "Règ edikasyon pou chofè, 540 CMR 23.00",
    sourceJuniorOperator: "Egzijans lisans operatè jinyò",
    sourceRoadTest: "Egzamen wout pasaje Klas D",
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
    heroTitle: "Leson kondwi nan Waltham, MA",
    heroAlt:
      "Enstriktè k ap gide yon elèv ki ap kondwi, akòz yon klas sou siyal wout nan {name} nan Waltham, Massachusetts",
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
    seatLeft: "1 plas ki rete",
    seatsLeft: "{count} plas ki rete",
    onlySeatLeft: "Sèlman 1 plas ki rete nan {name}. Premye klas la se {date}.",
    onlySeatsLeft: "Sèlman {count} plas ki rete nan {name}. Premye klas la se {date}.",
    licensePathTitle: "Etap pou lisans Massachusetts",
    licensePathIntro: "Gade etap yo selon laj ou.",
    pathUnder18: "Anba 18 an",
    pathAdult: "18 an oswa plis",
    teen1Title: "Pase egzamen pèmi a",
    teen1Desc: "Ou dwe gen omwen 16 an. Klas la ka kòmanse anvan egzamen sa a.",
    teen2Title: "Fini 30 èdtan nan klas",
    teen2Desc: "Fini pati klas edikasyon chofè a an pèsòn.",
    teen2Action: "Gade gwoup k ap vini yo",
    teen3Title: "Pran leson sou wout la",
    teen3Desc:
      "Apre pèmi a: 12 èdtan dèyè volan an, 6 ap obsève, ak yon klas 2 èdtan pou paran an.",
    teen3Action: "Gade pwogram yo",
    teen4Title: "Pratike ak yon sipèvizè",
    teen4Desc:
      "Kenbe pèmi a pandan 6 mwa ak yon dosye pwòp. Anrejistre 40 èdtan sipèvize, oswa 30 ak yon kou konpetans kondwi.",
    teen5Title: "Pase egzamen wout la",
    teen5Desc: "Mennen yon patwon ki gen 21 an oswa plis, ak omwen yon ane lisans Etazini.",
    teen5Action: "Patwonej egzamen wout la",
    adult1Title: "Pase egzamen pèmi a",
    adult1Desc: "Edikasyon chofè pa obligatwa depi 18 an.",
    adult2Title: "Pran leson si ou vle",
    adult2Desc:
      "Leson yo opsyonèl. Yo ede si ou fèk kòmanse kondwi oswa w ap prepare pou egzamen an.",
    adult2Action: "Gade pwogram yo",
    adult3Title: "Pase egzamen wout la",
    adult3Desc: "Pase egzamen klas D la ak yon patwon ki gen 21 an oswa plis.",
    adult3Action: "Patwonej egzamen wout la",
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
        question: "A ki laj yon elèv ka kòmanse edikasyon chofè?",
        answer:
          "Klas la ka kòmanse a 15 an ak 9 mwa. Yon pèmi aprantisaj obligatwa anvan nenpòt leson sou wout la, epi ou dwe gen omwen 16 an pou w jwenn pèmi a.",
        source: "classroomAge",
      },
      {
        question: "Kisa yon elèv dwe pote nan premye leson sou wout la?",
        answer:
          "Pote yon pèmi aprantisaj fizik ki valab. Yo pa aksepte kopi dijital. Mete soulye fèmen, epi pote linèt koreksyon pèmi a mande.",
      },
      {
        question: "Ki lang biwo a ka ede?",
        answer:
          "Biwo a ka ede an anglè, pòtigè, panyòl, ak kreyòl ayisyen.",
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
      "Patwonej egzamen wout la disponib nan biwo nou nan Waltham ak nan kote RMV yo ki gen ladan Watertown, Lowell, ak plis ankò.",
    schoolTitle: "Lekòl la",
    schoolP1:
      "JMC Driving School ap anseye adolesan ak adilt depi 973 Main Street nan Waltham depi 2011. Edikasyon pou chofè nan klas, leson dèyè volan, ak patwonej egzamen wout Massachusetts yo òganize nan biwo sa a.",
    schoolP2:
      "Enstriktè sètifye pa eta a bay leson yo. Biwo a ka ede an anglè, pòtigè, panyòl, ak kreyòl ayisyen.",
    ctaTitle: "Pare pou kòmanse vwayaj ou?",
    ctaDesc:
      "Kontakte biwo nou an pou verifye disponibilite klas Edikasyon Chofè an pèsòn ak kou akselere yo.",
    guide: aboutGuideHt,
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
    phoneNumber: "Nimewo telefòn",
    phonePlaceholder: "(781) 555-1234",
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
    imageAlt:
      "Enstriktè kondwi ak yon blòk nòt bò kote yon elèv nan yon machin fòmasyon blan",
    submitting: "Ap voye...",
    successTitle: "Mesaj la voye!",
    successMessage: "Mèsi paske ou kontakte nou. N ap reponn ou byento.",
    errorMessage: "Nou pa t kapab voye mesaj ou a. Eseye ankò oswa rele nou dirèkteman.",
    sendAnother: "Voye yon lòt mesaj",
    validationRequired: "Tanpri ranpli tout chan obligatwa yo.",
    validationEmail: "Tanpri antre yon adrès imèl ki valab.",
    validationPhone: "Tanpri antre yon nimewo telefòn ki valab.",
    guide: contactGuideHt,
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
