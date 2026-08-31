import { coursesEn, type CoursesMessages } from "./pages/courses";
import { classesEn } from "./pages/classes";
import { faqPageEn } from "./pages/faq";
import { legalEn } from "./pages/legal";
import { resourcesEn } from "./pages/resources";
import {
  ageCheckerEn,
  authEn,
  careersEn,
} from "./pages/misc";
import { enrollmentEn, type EnrollmentMessages } from "./pages/enrollment";

export const en = {
  nav: {
    programs: "Programs",
    classes: "Classes",
    about: "About",
    contact: "Contact",
    faq: "FAQ",
    signIn: "Sign In",
    enroll: "Enroll",
    toggleMenu: "Toggle navigation menu",
  },
  footer: {
    quickLinks: "Quick Links",
    home: "Home",
    enrollment: "Enrollment",
    driversEd: "Driver's Education",
    parentsProgram: "Parent's Program",
    adultProgram: "Adult Program",
    roadTestForm: "Road Test Form",
    privacyPolicy: "Privacy Policy",
    contactUs: "Contact Us",
    callNow: "Call Now: {phone}",
    rights: "© 2026 {name}. All Rights Reserved.",
    by: "By",
  },
  common: {
    callNow: "Call Now: {phone}",
    viewPrograms: "View Programs",
    enrollNow: "Enroll Now",
    viewAllFaqs: "View all FAQs",
    googleReviews: "({count}+ Google reviews)",
    googleReviewsAria: "{rating} out of 5 stars from {count} plus Google reviews",
    address: "Address",
    phone: "Phone",
    email: "Email",
    hours: "Hours",
    languages: "Languages",
    officeHours: "Office Hours",
    cancellations: "Cancellations",
    refundPolicy: "Refund Policy",
    sendMessage: "Send Message",
    findUs: "Find Us",
  },
  home: {
    heroAlt: "{name} driving lessons in Waltham, Massachusetts",
    whyChoose: "Why Choose {name}?",
    whyChooseDesc:
      "We combine certified instructors with flexible scheduling and road test sponsorship to help you succeed on the road and at the RMV.",
    certifiedInstructors: "Certified Instructors",
    certifiedInstructorsDesc:
      "State-certified professionals helping new drivers gain skills and confidence on the road.",
    flexibleScheduling: "Flexible Scheduling",
    flexibleSchedulingDesc:
      "Register online, by phone, or in person at our Waltham office during posted hours.",
    roadTestSponsorship: "Road Test Sponsorship",
    roadTestSponsorshipDesc:
      "Sponsorship available at our office and RMV locations across Massachusetts.",
    programsLabel: "Programs & classes",
    acceleratedTitle: "Driver's Ed: Accelerated Courses",
    acceleratedDescPrefix:
      "Intensive driver's education sessions with set dates in Waltham. Browse our",
    acceleratedDescJoin: "and",
    acceleratedDescSuffix: "for full details.",
    drivingPrograms: "driving programs",
    classSchedule: "class schedule",
    contactOffice: "Contact the office",
    roadTestTitle: "Road Test Sponsorships",
    roadTestDesc: "Available at the JMC office in Waltham or RMV locations in:",
    rmvAria: "{name} RMV Service Center — open in Google Maps",
    reviewsTitle: "What Our Students Say",
    reviewsDesc: "Real Google reviews from students who passed their driving test with {name}.",
    attentionLabel: "Important update",
    attentionTitle: "ATTENTION: Driver's Ed Classes: In-Person",
    attentionGreeting: "Dear Students and Parents:",
    attentionP1: "All Driver's Ed classes will be conducted in-person!",
    attentionP2:
      "As we offer smaller groups, slots are limited. Please hurry to guarantee your spot. You can register through our website, over the phone, or visit our office at {address}.",
    attentionP3:
      "Please contact us for availability and any questions by email: {email} or by calling/texting: {phone}",
    cancellationsDesc: "Accepted only {hours}.",
    refundDesc:
      "Full refund within 7 days of purchase if no services were used. Road test fee is non-refundable.",
    faqTitle: "Frequently Asked Questions",
    faqDesc: "Quick answers about driving lessons, registration, and policies in Waltham, MA.",
    courseAugust: "August Session",
    courseOctober: "October Session",
    courseDecember: "December Session",
    faqs: [
      {
        question: "Which areas does JMC Driving School serve?",
        answer:
          "JMC Driving School serves Waltham, MA and surrounding areas, with road test sponsorship available at Watertown, Lowell, Wilmington, Haverhill, Lawrence, Revere, Worcester, and Milford.",
      },
      {
        question: "How do I register for driver's ed or driving lessons?",
        answer:
          "You can register through our website, by phone at (781) 373-1730, or by visiting our Waltham office during office hours (Mon–Fri 10am–4pm).",
      },
      {
        question: "Do you offer road test sponsorship?",
        answer:
          "Yes. Road test sponsorship is available at the JMC office and at RMV locations across Massachusetts, including Watertown, Lowell, Wilmington, Haverhill, Lawrence, Revere, Worcester, and Milford.",
      },
      {
        question: "What is your refund policy?",
        answer:
          "You are entitled to a full refund within 7 days of purchase if no services were used. The road test fee is non-refundable.",
      },
    ],
  },
  about: {
    title: "About {name}",
    heroDesc:
      "Professional driving lessons in Waltham, Massachusetts. Certified instructors helping new drivers gain skills and confidence on the road.",
    heroAlt: "{name} in-person Driver's Ed classroom in Waltham, Massachusetts",
    missionTitle: "Our Mission",
    missionP1:
      "{name} is a place where students of all ages can learn the skills and rules required to be a safe, responsible, and courteous driver. We offer programs for teens, parents, and adult drivers throughout {serviceArea}.",
    missionP2:
      "Whether you are starting from zero or preparing for your road test, our certified instructors provide the professional instruction and support you need to succeed. We conduct all Driver's Ed classes in-person with smaller groups to ensure personalized attention.",
    missionP3Prefix:
      "Our team serves a diverse community and offers support in English, Português, Español, and Kreyòl Ayisyen. Contact our office at",
    missionP3Or: "or",
    missionP3Suffix: "to learn more about availability.",
    officeInfo: "Office Information",
    differenceTitle: "The {name} Difference",
    differenceDesc:
      "Certified instruction, flexible scheduling, and road test sponsorship. Everything you need to get on the road with confidence.",
    certifiedInstructorsDesc:
      "Our instructors are state-certified professionals dedicated to helping you pass your road test and drive safely for life.",
    flexibleSchedulingDesc:
      "Register online, by phone, or in person. We offer accelerated courses and in-person classes with limited slots.",
    roadTestDesc:
      "Road test sponsorship available at our Waltham office and RMV locations including Watertown, Lowell, Wilmington, and more.",
    ctaTitle: "Ready to start your journey?",
    ctaDesc:
      "Contact our office to check availability for in-person Driver's Ed classes and accelerated courses.",
  },
  contact: {
    title: "Contact {name}",
    subtitle:
      "Whether you're ready to start your driving journey or have questions about our programs, our team is here to help you achieve your goals safely.",
    sendMessage: "Send Us a Message",
    fullName: "Full Name",
    fullNamePlaceholder: "Jane Doe",
    emailAddress: "Email Address",
    emailPlaceholder: "jane@example.com",
    subject: "Subject",
    selectInquiry: "Select an inquiry type",
    inquiryEnrollment: "Driver's Education Enrollment",
    inquiryParent: "Parent's Program",
    inquiryAdult: "Adult Program",
    inquiryRoadTest: "Road Test Sponsorship",
    inquiryOther: "Other",
    yourMessage: "Your Message",
    messagePlaceholder: "How can we help you today?",
    contactInfo: "Contact Information",
    mapTitle: "JMC Driving School location map",
    imageAlt: "JMC Driving School contact",
  },
  site: {
    tagline: "Learn to Drive with Confidence",
    description:
      "Professional driving lessons in Waltham, Massachusetts. Certified instructors helping new drivers gain skills and confidence on the road.",
    serviceArea: "Waltham, MA and surrounding areas",
    officeHours: "Mon-Fri 10am-4pm",
    cancellationHours: "Mon-Fri 10am-4pm",
  },
  courses: coursesEn,
  classes: classesEn,
  faqPage: faqPageEn,
  legal: legalEn,
  resources: resourcesEn,
  careers: careersEn,
  auth: authEn,
  ageChecker: ageCheckerEn,
  enrollment: enrollmentEn,
} as const;

type HomeStringKey = Exclude<keyof typeof en.home, "faqs">;

export type Messages = {
  nav: { [K in keyof typeof en.nav]: string };
  footer: { [K in keyof typeof en.footer]: string };
  common: { [K in keyof typeof en.common]: string };
  home: { [K in HomeStringKey]: string } & {
    faqs: readonly { question: string; answer: string }[];
  };
  about: { [K in keyof typeof en.about]: string };
  contact: { [K in keyof typeof en.contact]: string };
  site: { [K in keyof typeof en.site]: string };
  courses: CoursesMessages;
  classes: { [K in keyof typeof en.classes]: string };
  faqPage: typeof faqPageEn;
  legal: { [K in keyof typeof en.legal]: string };
  resources: { [K in keyof typeof en.resources]: string };
  careers: { [K in keyof typeof en.careers]: string };
  auth: { [K in keyof typeof en.auth]: string };
  ageChecker: { [K in keyof typeof en.ageChecker]: string };
  enrollment: EnrollmentMessages;
};
