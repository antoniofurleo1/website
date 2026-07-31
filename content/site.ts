// ----------------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH for the entire site.
// Edit copy, links, projects, experience, honors, press — all here.
// ----------------------------------------------------------------------------

export type Link = { label: string; href: string };

export type Project = {
  id: string;
  title: string;
  kicker?: string;
  blurb: string;
  highlights?: string[];
  link?: Link;
  meta?: string;
  featured?: boolean;
};

export type Experience = {
  role: string;
  org: string;
  location: string;
  period: string;
  blurb: string;
  details?: string[]; // shown when expanded
};

export type PressItem = {
  outlet: string;
  outletStyle?: 'serif' | 'sans';
  date: string;
  href: string;
  featured?: boolean;
};

export const site = {
  // -- identity ------------------------------------------------------------
  name: {
    first: 'Antonio',
    last: 'Furleo Semeraro',
  },
  tagline: "Brown '29 · Computer Science – Economics",
  shortTagline: "Brown '29",

  // -- hero ----------------------------------------------------------------
  hero: {
    eyebrow: 'Providence, RI · Fasano, IT',
    accents: ['Builder', 'Student', 'Italian'],
  },

  // -- about ---------------------------------------------------------------
  about: {
    heading: 'About',
    body: [
      "I grew up taking things apart in southern Italy. Now I study Computer Science and Economics at Brown, hold a 3.8 GPA, and I'm building Bubl.",
    ],
    facts: [
      { label: 'Studies', value: 'B.Sc Computer Science · Economics, Brown University' },
      { label: 'Class', value: '2029 · 3.8 GPA' },
      { label: 'Roots', value: 'Fasano, Italy → Providence, RI' },
      { label: 'Languages', value: 'Italian (native) · English (fluent)' },
    ],
  },

  // -- now / currently -----------------------------------------------------
  now: {
    heading: 'Currently',
    items: [
      {
        label: 'Building',
        body: 'Bubl, a startup for Gen-Z news. I own product direction, the live site, and the app in progress.',
        link: { label: 'askbubl.com', href: 'https://askbubl.com' },
      },
      {
        label: 'Researching',
        body: 'AI and youth digital safety at the Sociotechnical Systems and Wellbeing Research Lab at Brown, starting this fall.',
      },
      {
        label: 'Just back from',
        body: 'YC Startup School 2026 in San Francisco, where I was invited to the Consulate General of Italy.',
      },
    ],
  },

  // -- featured projects (Work section) ------------------------------------
  projects: [
    {
      id: 'bubl',
      title: 'Bubl',
      kicker: 'Founder & Developer · Providence, RI · 2026 — current',
      blurb: 'A startup focused on news for Gen-Z. I designed and built the live website and am building the app with AI coding agents alongside my own engineering.',
      highlights: [
        'Own product direction, prototyping, user feedback, launch planning',
        'Live site shipped; app in active development',
      ],
      link: { label: 'askbubl.com', href: 'https://askbubl.com' },
      featured: true,
    },
    {
      id: 'monopolihouse',
      title: 'Monopoli House',
      kicker: 'Website developer · Fasano, IT · 2021 — current',
      blurb: 'Designed and built monopolihouse.com for an Airbnb rental in Puglia. Bookings, gallery, and contact in a clean, mobile-first layout.',
      highlights: [
        'Owned design, build, and ongoing maintenance',
        'Mobile-first, fast, accessible',
      ],
      link: { label: 'monopolihouse.com', href: 'https://monopolihouse.com' },
      featured: true,
    },
  ] as Project[],

  // -- innovation portfolio (smaller compact cards) ------------------------
  portfolio: [
    {
      id: 'robotics',
      title: 'Robotics Club',
      kicker: 'Founder & Technical Lead · Monopoli, IT',
      blurb: 'Founded and led a robotics club of 50+ students and teachers across 4 AI/robotics projects. Programmed Pepper and NAO humanoid robots; integrated LLM capabilities into NAO. Won 1st place in a Ministry of Education competition (€10,000 prize). Filed a patent application.',
    },
    {
      id: 'greenroad',
      title: 'GreenRoad',
      kicker: 'Inventor · Patent applicant',
      blurb: 'Vertical-axis wind turbines that capture the slipstream of passing cars on highways, converting wasted air into clean energy. Prototyped in collaboration with ANAS, the Italian national road authority.',
    },
    {
      id: 'shipdyson',
      title: 'ShipDyson',
      kicker: 'CEO · Researcher · Prototyper',
      blurb: 'A robot that acts like a vacuum for port pollution, designed to cut polluted-air emissions by 50% in regions where pollution sits 240% over UN limits. Won the Saper(e)consumare Ministry of Education prize (€10,000); National Finalist at Junior Achievement / Bocconi.',
    },
    {
      id: 'firstlego',
      title: 'FIRST LEGO League',
      kicker: 'Team Captain · "LongoBot"',
      blurb: 'Led the youngest captaincy in our league to the National Finals — twice. Won the Innovative Project prize (2022) and the Progress Award (2023), 6th place nationally in robotics.',
    },
    {
      id: 'ecofridge',
      title: 'EcoFridge',
      kicker: 'App developer · Senior advisor',
      blurb: 'An AI app to reduce domestic food waste by up to 90% via grocery scanning. Presented at Junior Achievement entrepreneurship competitions, qualified for National Finals.',
    },
    {
      id: 'longopark',
      title: 'LongoPark',
      kicker: 'App developer · CEO',
      blurb: 'An AI parking-spot finder for my hometown using CCTV. Presented at entrepreneurship competitions in 2025.',
    },
    {
      id: 'tiktok',
      title: 'TikTok · @antoniofurleo',
      kicker: 'Creator · 1.5M+ total views',
      blurb: 'My personal TikTok, grown organically past 1.5 million total views. A live experiment in building an audience and shipping content under my own name.',
      link: { label: '@antoniofurleo', href: 'https://www.tiktok.com/@antoniofurleo' },
    },
  ] as Project[],

  // -- experience ----------------------------------------------------------
  experience: [
    {
      role: 'Undergraduate Research Assistant — UTRA',
      org: 'Sociotechnical Systems & Wellbeing Research Lab · Brown University',
      location: 'Providence, RI',
      period: 'Fall 2026',
      blurb:
        'Research on AI and youth digital safety with Prof. Diana Freed (Computer Science · Data Science Institute), funded by a Brown UTRA award.',
      details: [
        'Studying how AI tools — conversational agents, mental-health platforms, resource navigators — support help-seeking among young people',
        'Mixed-methods work: literature reviews, qualitative and quantitative analysis, interview coding and transcription',
        'Supporting participant recruitment, IRB documentation, and dissemination of findings',
      ],
    },
    {
      role: 'Social Media & Outreach Chair',
      org: 'Delta Tau · Brown University',
      location: 'Providence, RI',
      period: 'Summer 2026 — Spring 2027',
      blurb: 'Leading social media and external outreach for the fraternity. Prep work begins summer 2026; role spans Fall 2026 and Spring 2027.',
    },
    {
      role: 'Consultant — Campionati di Imprenditorialità',
      org: 'Junior Achievement Italia',
      location: 'Italy',
      period: 'June 4–5, 2026',
      blurb: "On-site at JA Italia's national entrepreneurship championships.",
      details: [
        'Supporting logistics and event operations',
        'Representing JA Alumni in conversations with the European Commission and other institutional figures',
      ],
    },
    {
      role: 'Communications Specialist',
      org: 'Junior Achievement Italy',
      location: 'Remote',
      period: 'Dec 2025 — current',
      blurb: "Marketing campaigns for JA Italy's national TikTok, Instagram, and LinkedIn.",
      details: [
        'Building national TikTok, Instagram, and LinkedIn content calendar',
        'Supporting national strategy for entrepreneurship and financial education programs',
      ],
    },
    {
      role: 'Rental Operations & Website Developer',
      org: 'Monopoli House',
      location: 'Fasano, IT',
      period: '2021 — current',
      blurb: 'Operating an Airbnb rental and designing the property website monopolihouse.com.',
      details: [
        'Built and maintain monopolihouse.com',
        'Managing booking platforms and pricing',
        'Owning customer service and turnover logistics',
      ],
    },
    {
      role: 'Intern — Data & AI',
      org: 'City Hall, Castellana Grotte',
      location: 'Italy',
      period: 'Dec 2024 — Feb 2025',
      blurb: 'Digitised municipal archive records and introduced AI-assisted workflows.',
      details: [
        'Built a MySQL database for the municipal archive and internal document retrieval',
        'Recommended and implemented AI-assisted workflows for drafting and administrative productivity',
      ],
    },
    {
      role: 'IT Consultant Intern',
      org: 'Spartan Trucking Inc.',
      location: 'Onondaga, MI',
      period: 'Fall 2023 — Spring 2024',
      blurb: 'Managed website updates and supported IT infrastructure for a small logistics business during my US exchange year.',
    },
  ] as Experience[],

  // -- press ---------------------------------------------------------------
  press: {
    heading: 'Read about me',
    blurb: 'Coverage in Italian press.',
    items: [
      {
        outlet: 'FasanoLive',
        outletStyle: 'sans',
        date: 'Jun 2025',
        href: 'https://fasanolive.com/2025/06/02/lo-studente-fasanese-antonio-furleo-semeraro-ammesso-alla-prestigiosa-brown-university-negli-stati-uniti/',
        featured: true,
      },
      {
        outlet: 'Monopoli Times',
        outletStyle: 'serif',
        date: 'Jun 2025',
        href: 'https://www.monopolitimes.com/2025/06/01/antonio-furleo-semeraro-brown-university-ammissione-ivy-league-italia-borsa-studio-usa-fasano-monopoli-brown-storia-successo-studente-universita-americana-puglia-ammissione-universitaria-usa-da-fasano/',
        featured: true,
      },
    ] as PressItem[],
  },

  // -- recognition ---------------------------------------------------------
  recognition: {
    heading: 'Recognition',
    summary:
      'Class rank 1/153 and 100/100 magna cum laudem at Istituti Tecnici Vito Sante Longo. Multiple merit-based Italian government scholarships, including national study-abroad funding to spend a year at Leslie High School, Michigan.',
    awards: [
      {
        title: 'Consulate General of Italy in San Francisco',
        sub: 'Invited during Y Combinator Startup School 2026',
        body: 'Hosted at the Consulate with a group of young Italian founders admitted to YC Startup School, for a conversation on Italy–US innovation and academic research across the Atlantic.',
      },
      {
        title: "Medaglia d'argento al valore civile",
        sub: 'Silver Medal for Civil Valor — Italian state honor',
        body: 'Awarded for the highest score on the Italian National Final High-School Exam, alongside recognition from my school and city for efforts to make my community a better place.',
      },
      {
        title: 'Ministry of Education — Saper(e)consumare',
        sub: '1st place · €10,000 prize',
        body: 'Awarded for ShipDyson, a port-pollution vacuum robot. Funded our school lab and prototyping equipment.',
      },
      {
        title: 'Patent application — GreenRoad',
        sub: 'In collaboration with ANAS (Italian National Road Authority)',
        body: 'Vertical-axis wind turbines that capture slipstream from highway traffic.',
      },
    ],
  },

  // -- contact -------------------------------------------------------------
  contact: {
    heading: 'Get in touch',
    cta: 'Happy to hear from anyone. Email is fastest.',
    primaryEmail: { label: 'furleo@brown.edu', href: 'mailto:furleo@brown.edu' },
    emails: [
      { label: 'furleo@brown.edu', href: 'mailto:furleo@brown.edu' },
      { label: 'antoniofurleo@gmail.com', href: 'mailto:antoniofurleo@gmail.com' },
    ],
    phones: [
      { label: '+1 (401) 601-5513', href: 'tel:+14016015513', note: 'US' },
      { label: '+39 328 723 5440', href: 'tel:+393287235440', note: 'IT' },
    ],
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/antoniofurleo' },
      { label: 'Instagram', href: 'https://www.instagram.com/antoniofurleo' },
      { label: 'TikTok', href: 'https://www.tiktok.com/@antoniofurleo' },
      { label: 'askbubl.com', href: 'https://askbubl.com' },
    ],
  },

  // -- social shown at top of hero ----------------------------------------
  topLinks: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/antoniofurleo' },
  ] as Link[],

  // -- nav -----------------------------------------------------------------
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Now', href: '#now' },
    { label: 'Work', href: '#work' },
    { label: 'Press', href: '#press' },
    { label: 'Contact', href: '#contact' },
  ] as Link[],

  // -- footer --------------------------------------------------------------
  footer: {
    line: "Antonio Furleo Semeraro · Brown University, Class of 2029",
  },

  // -- meta ----------------------------------------------------------------
  meta: {
    title: 'Antonio Furleo Semeraro — Brown CS-Econ · Founder of Bubl',
    description:
      "Computer Science – Economics undergraduate at Brown University. Founder of Bubl (news for Gen-Z). Builder, designer, and Italian student based in Providence, RI.",
    url: 'https://antoniofurleo.com',
  },
};

export type Site = typeof site;
