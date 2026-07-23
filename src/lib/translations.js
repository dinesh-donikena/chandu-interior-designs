// All site text in English and Telugu.
// English tone: warm, plain, local — not fancy agency-speak.
// Telugu tone: natural spoken Telugu with everyday loanwords
// (డిజైన్, కిచెన్, బడ్జెట్...) the way people in Warangal actually talk.

export const translations = {
  en: {
    nav: {
      home: "Home",
      portfolio: "Our Work",
      about: "About Us",
      testimonials: "Happy Clients",
      contact: "Contact",
      consultation: "Talk to Us",
      bookConsultation: "Book a Consultation",
      toggleLabel: "తెలుగు",
    },
    home: {
      heroTitle1: "Your Dream Home,",
      heroTitle2: "Made in Warangal.",
      heroCta: "See Our Work",
      introHeading: "Designing homes for Warangal families.",
      introP1:
        "At Chandu Interior Designs, we keep good design simple. From the first sketch to the final coat of paint, we handle everything — so you get a home that looks great and works for the way your family lives.",
      introP2:
        "Homes, shops, offices — big or small, in Warangal, Hanamakonda or Kazipet — we treat every project like it's our own house.",
      servicesLabel: "Our Services",
      servicesHeading: "What We Do",
      services: [
        {
          title: "Home Interiors",
          desc: "Full interiors for new homes and renovations — hall, bedrooms, kitchen, pooja room and more.",
        },
        {
          title: "Shops & Offices",
          desc: "Showrooms, clinics, offices and cafes designed to welcome customers and grow your business.",
        },
        {
          title: "Renovation & Planning",
          desc: "Smart layouts and makeovers that make every corner of your space useful.",
        },
      ],
      portfolioLabel: "Our Work",
      portfolioHeading: "Recent Projects",
      portfolioLink: "See All Projects",
      projects: [
        { title: "The Granite Villa", location: "Hanamakonda • 2023" },
        { title: "Vertex Office", location: "Warangal • 2024" },
        { title: "The Courtyard Residence", location: "Kazipet • 2023" },
      ],
      ctaHeading: "Ready to give your home a new look?",
      ctaText:
        "Call us or drop a message — we'll visit your site, listen to your ideas, and give you an honest plan and estimate.",
      ctaButton: "Talk to Us",
      ctaWhatsApp: "Chat on WhatsApp",
    },
    portfolio: {
      title: "Our Work",
      intro:
        "Every home here started as someone's dream. Have a look at how we brought them to life across Warangal and Hanamakonda.",
      filters: {
        all: "All",
        livingRoom: "Living Room",
        kitchen: "Kitchen",
        office: "Office",
      },
      projects: [
        { title: "Minimalist Villa", location: "Hanamakonda" },
        { title: "Culinary Sanctuary", location: "Warangal West" },
        { title: "Creative Atelier", location: "Knowledge Park" },
        { title: "Heritage Loft", location: "Fort Road" },
        { title: "The Monolith Kitchen", location: "Subedari" },
        { title: "Modern Commons", location: "IT Hub" },
      ],
      ctaHeading: "Your home could be next.",
      ctaButton: "Start Your Project",
    },
    about: {
      label: "Our Story",
      title: "Meet the Designer",
      p1: "I grew up in Hanamakonda, surrounded by the stone temples and old homes this region is famous for. Watching light fall on those carved pillars taught me what a peaceful space feels like — and that's the feeling I try to bring into every home I design.",
      p2: "My belief is simple: a home should not show off; it should feel calm. We mix Warangal's traditional craftsmanship with clean, modern design — so your home feels special today and ten years from now.",
      p3: "We also work with local carpenters and artisans on every project. When you build with us, your money supports skilled hands right here in our city.",
      badge: "Trusted by families across Warangal",
      principlesHeading: "How We Work",
      values: [
        {
          title: "Quality Work",
          desc: "Good materials and skilled local craftsmen. We don't cut corners, because your home has to last.",
        },
        {
          title: "Personal Attention",
          desc: "Every family is different. We sit with you, listen properly, and design for how you actually live.",
        },
        {
          title: "Modern Touch",
          desc: "New ideas, 3D designs and modern materials — blended with our traditional style.",
        },
      ],
      quote:
        "A good home doesn't need to impress anyone. It just needs to feel like yours.",
      quoteLocation: "Hanamakonda, Telangana",
    },
    testimonials: {
      label: "Happy Clients",
      title: "What Our Clients Say",
      intro:
        "Real words from families and businesses we've worked with across Warangal.",
      items: [
        {
          quote:
            "They turned our old house into something we're proud to show guests. The traditional touches remind us of our grandparents' home — but everything is modern and easy to maintain.",
          name: "Raghavendra Rao",
          project: "Home Renovation, Hanamakonda",
        },
        {
          quote:
            "Very professional team. They designed our clinic so patients feel relaxed the moment they walk in. Work finished on time and within the budget we agreed.",
          name: "Dr. Sravani Reddy",
          project: "Clinic, Warangal City",
        },
        {
          quote:
            "From the first meeting to handing over the keys, everything was smooth. They updated us at every step — we never had to chase anyone.",
          name: "Abhishek Verma",
          project: "Flat Interiors, Kazipet",
        },
      ],
      processLabel: "Our Process",
      processHeading: "How Your Project Goes",
      processText:
        "Four simple steps from the first meeting to your finished home.",
      steps: [
        {
          title: "First Meeting",
          desc: "We visit your site and understand your needs, your taste and your budget.",
        },
        {
          title: "Design & Estimate",
          desc: "We show you 3D designs and material options with a clear cost estimate. No surprises later.",
        },
        {
          title: "Work Begins",
          desc: "Our team handles the full work on site — workers, materials and quality. You relax.",
        },
        {
          title: "Handover",
          desc: "We walk you through your finished space and hand over the keys. Your new life begins.",
        },
      ],
      ctaHeading: "Let's Build Your Dream Home",
      ctaButton: "Book a Consultation",
    },
    contact: {
      title: "Let's Talk About Your Home.",
      intro:
        "Fill the form or message us on WhatsApp — we'll get back to you within a day.",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "your@email.com",
        phone: "Phone",
        phonePlaceholder: "+91 98765 43210",
        message: "Message",
        messagePlaceholder: "Tell us about your home or space...",
        send: "Send Message",
        sending: "Sending...",
        sent: "Message Sent!",
        error: "Failed — please try again",
      },
      infoHeading: "Contact Information",
      hours: "Mon - Sat, 9am - 7pm",
      responseTime: "Reply within 24 hours",
      officeHeading: "Hanamakonda Office",
      address: "Hanamakonda,\nWarangal, Telangana - 506001",
    },
    footer: {
      tagline:
        "Beautiful, practical homes for families in Warangal & Hanamakonda.",
      pages: "Pages",
      connect: "Connect",
      office: "Office",
      contactUs: "Contact Us",
      address: "Hanamakonda,\nWarangal, Telangana - 506001",
      rights: "All rights reserved.",
    },
  },

  te: {
    nav: {
      home: "హోమ్",
      portfolio: "మా పనులు",
      about: "మా గురించి",
      testimonials: "క్లయింట్ల మాటలు",
      contact: "సంప్రదించండి",
      consultation: "మాట్లాడండి",
      bookConsultation: "కన్సల్టేషన్ బుక్ చేయండి",
      toggleLabel: "English",
    },
    home: {
      heroTitle1: "మీ కలల ఇల్లు,",
      heroTitle2: "మన వరంగల్‌లో.",
      heroCta: "మా పనులు చూడండి",
      introHeading: "వరంగల్ కుటుంబాల కోసం డిజైన్ చేస్తున్నాం.",
      introP1:
        "చందు ఇంటీరియర్ డిజైన్స్‌లో మంచి డిజైన్‌ని సింపుల్‌గా ఉంచుతాం. మొదటి స్కెచ్ నుంచి చివరి పెయింట్ వరకూ అన్నీ మేమే చూసుకుంటాం — మీ కుటుంబ జీవన శైలికి సరిపోయే, చూడగానే నచ్చే ఇల్లు మీకు అందిస్తాం.",
      introP2:
        "ఇళ్లు, షాపులు, ఆఫీసులు — చిన్నదైనా పెద్దదైనా, వరంగల్, హనుమకొండ, కాజీపేట ఎక్కడైనా — ప్రతి ప్రాజెక్టుని మా సొంత ఇల్లులా చూసుకుంటాం.",
      servicesLabel: "మా సర్వీసులు",
      servicesHeading: "మేము ఏం చేస్తాం",
      services: [
        {
          title: "ఇంటి ఇంటీరియర్స్",
          desc: "కొత్త ఇళ్లకు, పాత ఇళ్ల రెనొవేషన్‌కు పూర్తి ఇంటీరియర్ డిజైన్ — హాల్, బెడ్ రూమ్, కిచెన్, పూజ గది అన్నీ.",
        },
        {
          title: "షాపులు & ఆఫీసులు",
          desc: "షోరూమ్‌లు, క్లినిక్‌లు, ఆఫీసులు, కేఫ్‌లు — కస్టమర్లను ఆకట్టుకునేలా, మీ వ్యాపారం పెరిగేలా డిజైన్ చేస్తాం.",
        },
        {
          title: "రెనొవేషన్ & ప్లానింగ్",
          desc: "మీ ఇంట్లో ప్రతి మూలా ఉపయోగపడేలా తెలివైన ప్లానింగ్, చక్కటి మేకోవర్.",
        },
      ],
      portfolioLabel: "మా పనులు",
      portfolioHeading: "ఇటీవలి ప్రాజెక్టులు",
      portfolioLink: "అన్ని ప్రాజెక్టులు చూడండి",
      projects: [
        { title: "The Granite Villa", location: "హనుమకొండ • 2023" },
        { title: "Vertex Office", location: "వరంగల్ • 2024" },
        { title: "The Courtyard Residence", location: "కాజీపేట • 2023" },
      ],
      ctaHeading: "మీ ఇంటికి కొత్త లుక్ ఇద్దామా?",
      ctaText:
        "ఒక్క కాల్ లేదా మెసేజ్ చేయండి — మీ సైట్‌కి వచ్చి, మీ ఆలోచనలు విని, నిజాయితీగా ప్లాన్, ఎస్టిమేట్ ఇస్తాం.",
      ctaButton: "మాతో మాట్లాడండి",
      ctaWhatsApp: "WhatsApp లో మెసేజ్ చేయండి",
    },
    portfolio: {
      title: "మా పనులు",
      intro:
        "ఇక్కడ ఉన్న ప్రతి ఇల్లూ ఒకప్పుడు ఒకరి కల. వరంగల్, హనుమకొండలో మేము నిజం చేసిన ఆ కలలను ఒకసారి చూడండి.",
      filters: {
        all: "అన్నీ",
        livingRoom: "లివింగ్ రూమ్",
        kitchen: "కిచెన్",
        office: "ఆఫీస్",
      },
      projects: [
        { title: "Minimalist Villa", location: "హనుమకొండ" },
        { title: "Culinary Sanctuary", location: "వరంగల్ వెస్ట్" },
        { title: "Creative Atelier", location: "నాలెడ్జ్ పార్క్" },
        { title: "Heritage Loft", location: "ఫోర్ట్ రోడ్" },
        { title: "The Monolith Kitchen", location: "సుబేదారి" },
        { title: "Modern Commons", location: "ఐటీ హబ్" },
      ],
      ctaHeading: "తర్వాతి ఇల్లు మీదే కావచ్చు.",
      ctaButton: "మీ ప్రాజెక్ట్ మొదలుపెట్టండి",
    },
    about: {
      label: "మా కథ",
      title: "డిజైనర్‌ని కలవండి",
      p1: "నేను పెరిగింది హనుమకొండలో — మన ప్రాంతానికి పేరు తెచ్చిన రాతి గుడులు, పాత ఇళ్ల మధ్య. ఆ శిల్పాల మీద పడే వెలుతురు చూస్తూ, ప్రశాంతమైన ఇల్లు అంటే ఏమిటో నేర్చుకున్నా. ఆ అనుభూతినే నేను డిజైన్ చేసే ప్రతి ఇంట్లో తీసుకురావాలని ప్రయత్నిస్తా.",
      p2: "నా నమ్మకం చాలా సింపుల్: ఇల్లు గొప్పలు చూపించక్కర్లేదు, ప్రశాంతంగా అనిపించాలి. వరంగల్ సంప్రదాయ పనితనాన్ని మోడర్న్ డిజైన్‌తో కలిపి — ఈరోజే కాదు, పదేళ్ల తర్వాత కూడా అందంగా ఉండే ఇళ్లు చేస్తాం.",
      p3: "ప్రతి ప్రాజెక్టులో మన ఊరి కార్పెంటర్లు, కళాకారులతోనే పని చేస్తాం. మాతో కట్టిస్తే, మీ డబ్బు మన నగరంలోని నైపుణ్యం ఉన్న చేతులకే వెళ్తుంది.",
      badge: "వరంగల్ అంతటా కుటుంబాల నమ్మకం",
      principlesHeading: "మా పద్ధతి",
      values: [
        {
          title: "నాణ్యమైన పని",
          desc: "మంచి మెటీరియల్, నైపుణ్యం ఉన్న లోకల్ పనివాళ్లు. ఇల్లు కలకాలం నిలవాలి కాబట్టి నాణ్యతలో రాజీ పడం.",
        },
        {
          title: "వ్యక్తిగత శ్రద్ధ",
          desc: "ప్రతి కుటుంబం వేరు. మీతో కూర్చుని, మీ మాట విని, మీ జీవన విధానానికి తగ్గట్టు డిజైన్ చేస్తాం.",
        },
        {
          title: "మోడర్న్ టచ్",
          desc: "కొత్త ఆలోచనలు, 3D డిజైన్లు, మోడర్న్ మెటీరియల్స్ — మన సంప్రదాయ శైలితో కలిపి.",
        },
      ],
      quote: "మంచి ఇల్లు ఎవరినీ ఆకట్టుకోవాల్సిన పని లేదు. అది మీ ఇల్లు అనిపిస్తే చాలు.",
      quoteLocation: "హనుమకొండ, తెలంగాణ",
    },
    testimonials: {
      label: "సంతోషంగా ఉన్న క్లయింట్లు",
      title: "మా క్లయింట్లు ఏమంటున్నారు",
      intro: "వరంగల్‌లో మేము పని చేసిన కుటుంబాలు, వ్యాపారాల మనసులోని మాటలు.",
      items: [
        {
          quote:
            "మా పాత ఇంటిని, అతిథులకు గర్వంగా చూపించే ఇల్లుగా మార్చారు. వాళ్లిచ్చిన సంప్రదాయ టచ్ మా తాతయ్య వాళ్ల ఇంటిని గుర్తు చేస్తుంది — కానీ అన్నీ మోడర్న్‌గా, మెయింటెయిన్ చేయడానికి సులభంగా ఉన్నాయి.",
          name: "రాఘవేంద్ర రావు",
          project: "ఇంటి రెనొవేషన్, హనుమకొండ",
        },
        {
          quote:
            "చాలా ప్రొఫెషనల్ టీమ్. పేషెంట్లు లోపలికి రాగానే ప్రశాంతంగా అనిపించేలా మా క్లినిక్‌ని డిజైన్ చేశారు. చెప్పిన టైమ్‌కి, అనుకున్న బడ్జెట్‌లోనే పని పూర్తి చేశారు.",
          name: "డా. శ్రావణి రెడ్డి",
          project: "క్లినిక్, వరంగల్ సిటీ",
        },
        {
          quote:
            "మొదటి మీటింగ్ నుంచి తాళాలు ఇచ్చే వరకూ అంతా స్మూత్‌గా జరిగింది. ప్రతి స్టెప్‌లో మాకు అప్డేట్ ఇచ్చారు — మేము ఎవరినీ అడగాల్సిన అవసరమే రాలేదు.",
          name: "అభిషేక్ వర్మ",
          project: "ఫ్లాట్ ఇంటీరియర్స్, కాజీపేట",
        },
      ],
      processLabel: "మా ప్రాసెస్",
      processHeading: "మీ ప్రాజెక్ట్ ఎలా జరుగుతుంది",
      processText: "మొదటి మీటింగ్ నుంచి పూర్తయిన ఇంటి వరకు — నాలుగు సింపుల్ స్టెప్స్.",
      steps: [
        {
          title: "మొదటి మీటింగ్",
          desc: "మీ సైట్‌కి వచ్చి — మీ అవసరాలు, ఇష్టాలు, బడ్జెట్ అర్థం చేసుకుంటాం.",
        },
        {
          title: "డిజైన్ & ఎస్టిమేట్",
          desc: "3D డిజైన్లు, మెటీరియల్ ఆప్షన్లు చూపిస్తాం — స్పష్టమైన ఖర్చు అంచనాతో. తర్వాత సర్‌ప్రైజ్‌లు ఉండవు.",
        },
        {
          title: "పని మొదలు",
          desc: "సైట్‌లో పూర్తి పని మా టీమే చూసుకుంటుంది — పనివాళ్లు, మెటీరియల్, క్వాలిటీ అన్నీ. మీరు రిలాక్స్ అవ్వండి.",
        },
        {
          title: "హ్యాండోవర్",
          desc: "పూర్తయిన మీ ఇంటిని చూపించి, తాళాలు మీ చేతికి ఇస్తాం. మీ కొత్త జీవితం మొదలు.",
        },
      ],
      ctaHeading: "మీ కలల ఇంటిని కలిసి కడదాం",
      ctaButton: "కన్సల్టేషన్ బుక్ చేయండి",
    },
    contact: {
      title: "మీ ఇంటి గురించి మాట్లాడుకుందాం.",
      intro:
        "ఫారం నింపండి లేదా WhatsApp లో మెసేజ్ చేయండి — ఒక్క రోజులో మేమే మిమ్మల్ని సంప్రదిస్తాం.",
      form: {
        name: "పేరు",
        namePlaceholder: "మీ పేరు",
        email: "ఇమెయిల్",
        emailPlaceholder: "your@email.com",
        phone: "ఫోన్ నంబర్",
        phonePlaceholder: "+91 98765 43210",
        message: "మెసేజ్",
        messagePlaceholder: "మీ ఇంటి గురించి చెప్పండి...",
        send: "మెసేజ్ పంపండి",
        sending: "పంపుతున్నాం...",
        sent: "మెసేజ్ వెళ్లింది!",
        error: "వెళ్లలేదు — మళ్లీ ప్రయత్నించండి",
      },
      infoHeading: "కాంటాక్ట్ వివరాలు",
      hours: "సోమ - శని, ఉదయం 9 - సాయంత్రం 7",
      responseTime: "24 గంటల్లో రిప్లై ఇస్తాం",
      officeHeading: "హనుమకొండ ఆఫీస్",
      address: "హనుమకొండ,\nవరంగల్, తెలంగాణ - 506001",
    },
    footer: {
      tagline: "వరంగల్ & హనుమకొండ కుటుంబాల కోసం అందమైన, ఉపయోగకరమైన ఇళ్లు.",
      pages: "పేజీలు",
      connect: "కనెక్ట్",
      office: "ఆఫీస్",
      contactUs: "మమ్మల్ని సంప్రదించండి",
      address: "హనుమకొండ,\nవరంగల్, తెలంగాణ - 506001",
      rights: "అన్ని హక్కులు మావే.",
    },
  },
};
