export const site = {
  name: "JMC Driving School",
  tagline: "Learn to Drive with Confidence",
  description:
    "Professional driving lessons in Waltham, Massachusetts. Certified instructors helping new drivers gain skills and confidence on the road.",
  serviceArea: "Waltham, MA and surrounding areas",
  phone: "781 373 1730",
  phoneTel: "+17813731730",
  email: "contact@jmcdrivingschool.com",
  address: {
    street: "973 Main Street",
    city: "Waltham",
    state: "MA",
    zip: "02451",
    full: "973 Main Street, Waltham, MA 02451",
  },
  officeHours: "Mon-Fri 10am-5pm",
  cancellationHours: "Mon-Fri 10am-5pm",
  roadTestLocations: [
    {
      name: "JMC Office",
      address: "973 Main Street, Waltham, MA 02451",
      image: "/rmv/jmc-driving-school.png",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=JMC+Driving+School+973+Main+Street+Waltham+MA+02451",
    },
    {
      name: "Watertown",
      address: "550 Arsenal St., Watertown, MA 02472",
      image: "/rmv/watertown.png",
      mapsUrl: "https://maps.app.goo.gl/TxUZrAcU5Y64GGvJ6",
    },
    {
      name: "Lowell",
      address: "77 Middlesex St., Lowell, MA 01852",
      image: "/rmv/lowell.jpg",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Lowell+RMV+77+Middlesex+Street+Lowell+MA",
    },
    {
      name: "Haverhill",
      address: "229c Lincoln Ave., Haverhill, MA 01830",
      image: "/rmv/haverhill.png",
      mapsUrl: "https://maps.app.goo.gl/agjuSD3zxhsyikVc7",
    },
    {
      name: "Lawrence",
      address: "73 Winthrop Ave., Lawrence, MA 01843",
      image: "/rmv/lawrence.png",
      mapsUrl: "https://maps.app.goo.gl/u4PAA2nQtzofQrjA6",
    },
    {
      name: "Milford",
      address: "138 S Main St., Milford, MA 01757",
      image: "/rmv/milford.png",
      mapsUrl: "https://maps.app.goo.gl/C1kZMWREwe3sSopA8",
    },
  ],
  acceleratedCourses: [
    {
      label: "August Session",
      dates: "August 10th, 11th, 12th, 13th, 14th",
    },
    {
      label: "October Session",
      dates: "October 12th, 13th, 14th, 15th, 16th, 19th, 20th",
    },
    {
      label: "December Session",
      dates: "December 24th, 28th, 29th, 30th, 31st",
    },
  ],
  googleReviews: {
    rating: 4.9,
    totalReviews: 1315,
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=JMC+Driving+School+973+Main+Street+Waltham+MA+02451",
    reviews: [
      {
        quote:
          "I passed the road test the first time after 2 classes at JMC. The school helped me book the road test and encouraged me a lot. The coach was nice and patient. Thanks!",
        name: "Wei Huang",
        rating: 5,
      },
      {
        quote:
          "Best driving school ever. They are very patient and very professional. If you are thinking about learning how to drive, don't hesitate — choose JMC Driving School.",
        name: "Cinsia Lubin",
        rating: 5,
      },
      {
        quote:
          "Great teacher and passed test quickly! It deserves 5 stars!",
        name: "Brian Jiang",
        rating: 5,
      },
      {
        quote:
          "One of the top driving schools in the area! The training is incredibly thorough, and Jane, the instructor, is outstanding. The staff is exceptionally friendly.",
        name: "Sachin Jadhav",
        rating: 5,
      },
      {
        quote:
          "I took my road test today and passed! Although I was very nervous, I knew JMC had prepared me. I'm so thankful for my instructor Rose — she is an amazing teacher.",
        name: "Google Reviewer",
        rating: 5,
      },
      {
        quote:
          "Eu super indico essa Escola, desde o atendimento maravilhoso aos instrutores. Comecei do zero, não sabia dirigir e consegui passar de primeira no meu Road Test. Muito grata a vocês.",
        name: "Danielle",
        rating: 5,
      },
      {
        quote:
          "I want to thank JMC Driving School immensely for the excellent service provided. You are amazing.",
        name: "Gizele",
        rating: 5,
      },
      {
        quote:
          "I took a few practices here and had an amazing instructor. She told me things I should not be doing and was strict in the best way. This helped me pass my road test.",
        name: "Alex",
        rating: 5,
      },
      {
        quote:
          "This place is amazing. They are responsible and treat people very well. I loved the way they helped me and I recommend it to everyone who needs their driver's license.",
        name: "Jessica",
        rating: 5,
      },
      {
        quote:
          "Excellent school. Val is an excellent teacher! Thank you for your patience. Would highly recommend.",
        name: "Google Reviewer",
        rating: 5,
      },
      {
        quote:
          "It was a great driving school. The teachers were good.",
        name: "Mica Gardy Ceiste",
        rating: 5,
      },
      {
        quote:
          "I would give JMC Driving School 7 stars if I could. Their helpful admin team and highly professional instructors give the best guidance ensuring student success.",
        name: "Google Reviewer",
        rating: 5,
      },
    ],
  },
  languages: ["English", "Português", "Español", "Kreyòl Ayisyen"],
  homepageFaqs: [
    {
      question: "Which areas does JMC Driving School serve?",
      answer:
        "JMC Driving School serves Waltham, MA and surrounding communities. Road test sponsorship is available at our JMC office and at RMV locations across Massachusetts.",
    },
    {
      question: "How do I register for driver's ed or driving lessons?",
      answer:
        "You can register through our website, by phone at (781) 373-1730, or by visiting our Waltham office during office hours (Mon–Fri 10am–5pm).",
    },
    {
      question: "Do you offer road test sponsorship?",
      answer:
        "Yes. Road test sponsorship is available at our JMC office in Waltham and at RMV locations across Massachusetts. Contact the office for current fees and availability.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "You are entitled to a full refund within 7 days of purchase if no services were used. The road test fee is non-refundable.",
    },
  ],
} as const;
