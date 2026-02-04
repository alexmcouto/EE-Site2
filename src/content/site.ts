export type CTA = {
  label: string;
  href: string;
};

export type Stat = {
  label: string;
  value: string;
};

export type Feature = {
  title: string;
  body: string;
};

export type TimelineItem = {
  date: string;
  text: string;
};

export type DefinitionItem = {
  term: string;
  description: string;
};

export type PeopleGroup = {
  title: string;
  items: string[];
};

export const site = {
  brand: {
    name: "Ensul Engenharia, S.A.",
    tagline: "Engineering and construction in Timor-Leste since 2000",
  },
  ctas: {
    primary: { label: "Discuss a Project", href: "/contact" },
    secondary: { label: "View Projects", href: "/projects" },
  },
  home: {
    hero: {
      headline: "Engineering and Construction in Timor-Leste Since 2000",
      subhead:
        "Ensul Engenharia, S.A. is an established engineering and construction company with a legacy shaped by Timor-Leste’s reconstruction and development, delivering complex and emblematic projects with a focus on quality, safety, and sustainability.",
      ctas: {
        primary: { label: "View Projects", href: "/projects" },
        secondary: { label: "Discuss a Project", href: "/contact" },
      },
    },
    stats: [
      { label: "Presence in Timor-Leste", value: "Since 2000" },
      { label: "Locally established company", value: "Since Jan 2009" },
      { label: "Workforce scale over the years", value: "200+ employees" },
      { label: "Team size (end of 2024)", value: "78 employees" },
    ] satisfies Stat[],
    pillars: [
      {
        title: "Quality & Best Practices",
        body: "Delivery grounded in rigorous methods and construction discipline.",
      },
      {
        title: "Safety & Responsibility",
        body: "Focus on demanding safety procedures and responsible site management.",
      },
      {
        title: "People & Capability Building",
        body: "Commitment to training and developing technical teams, with a strong Timorese workforce.",
      },
      {
        title: "Emblematic Work",
        body: "A track record of projects that support national pride and long-term development.",
      },
    ] satisfies Feature[],
    featuredProjectSlugs: [
      "uma-fukun-cultural-centre",
      "resistance-archive-museum",
      "portuguese-school-dili",
      "first-timorese-maternity-school",
      "baucau-referral-hospital",
      "new-portuguese-embassy-dili",
    ],
    currentFocus: {
      title: "Current Focus: DFBC Block A",
      body: "Ensul’s business scope is currently focused on deploying engineering and construction capacity on group real-estate projects, with DFBC Block A as the primary delivery priority—supported by reinforced project management, technical procurement, and site operational improvements.",
    },
  },
  about: {
    title: "About Ensul",
    intro:
      "Ensul Engenharia, S.A. is an engineering and construction company with a long-standing presence in Timor-Leste and a portfolio aligned with national development priorities.",
    sections: [
      {
        heading: "Presence in Timor-Leste",
        body: "Their presence in Timor-Leste began in 2000 through a local branch of the Portuguese firm Ensul, Gestão de Projectos de Engenharia, S.A. In January 2009, operations were consolidated through the formal establishment of Ensul Engenharia, S.A. in Dili, strengthening long-term local integration.",
      },
      {
        heading: "Building in an Emerging Economy",
        body: "Timor-Leste has made meaningful progress in rebuilding public infrastructure and institutions. At the same time, economic growth remains closely tied to public investment and natural resource revenues. Ensul operates within this context with a focus on long-term value creation through infrastructure, construction discipline, and workforce capability.",
      },
      {
        heading: "Workforce and Skills Development",
        body: "Over the years, Ensul and its group of companies have employed more than 200 employees, including management staff and skilled workers across multiple disciplines. Their contribution has extended beyond project delivery through training, workforce development, and the employment of thousands of Timorese workers over time.",
      },
    ],
    visionValues: [
      "Engineering and construction with tradition and specialized knowledge in Timor-Leste.",
      "Best practices in construction methods, safety procedures, and sustainability ambition.",
      "Continuous training and development of technical teams.",
      "Emblematic projects aligned with long-term group strategy and national pride.",
      "A company that inspires confidence, solidity, and future.",
    ],
  },
  history: {
    title: "History and Legacy in Timor-Leste",
    intro:
      "Ensul’s evolution in Timor-Leste reflects the country’s rebuilding and modernization, with works delivered across sectors essential to public life.",
    timeline: [
      {
        date: "2000",
        text: "Presence in Timor-Leste begins through a local branch of the Portuguese firm.",
      },
      {
        date: "2008",
        text: "First Timorese Maternity School completed in Dili.",
      },
      {
        date: "Jan 2009",
        text: "Ensul Engenharia, S.A. established locally in Dili.",
      },
      {
        date: "2024",
        text: "DFBC Block A becomes the main activity focus, with reinforced capacity and procurement progress.",
      },
    ] satisfies TimelineItem[],
    legacy: {
      heading: "What Their Work Represents",
      body: "Their legacy includes heritage rehabilitation, education and healthcare facilities, institutional buildings, and infrastructure that supported Timor-Leste’s development. Beyond construction, Ensul’s long-term impact includes local employment and capability building.",
    },
  },
  currentFocus: {
    title: "Current Focus: DFBC Block A",
    intro:
      "Ensul’s business scope is currently focused on deploying engineering and construction capacity on group real-estate projects, with DFBC Block A as the primary delivery priority.",
    highlights: [
      "Workfront restructuring and expansion to accelerate progress.",
      "Review of critical construction elements.",
      "Reinforcement of local engineering and project management structure.",
      "Closure of technical specialty supply contracts (electrical, CCTV, intrusion detection, access control, CO and fire detection).",
      "Supplier engagement for critical packages (curtain wall façade, HVAC systems, elevators).",
      "Site operational improvements (warehouses, canteen, token access control, PPE distribution, planned maintenance for hoist and crane).",
    ],
    workforce: {
      heading: "Team and Local Engagement",
      body: "By the end of 2024, the DFBC Block A team counted 78 employees, predominantly Timorese, complemented by local subcontractors and suppliers—expanding the project’s economic and social impact.",
    },
  },
  leadership: {
    title: "Leadership and Governance",
    intro: "Ensul’s structure supports disciplined execution, responsible governance, and robust project delivery oversight.",
    corporateBodies: [
      "Company Secretary: Zito Fátima",
      "Board of Directors: President: Alexandre António da Silva Costa Marques Couto; Board Member: António Simões Marques Couto; Board Member: Armando Jorge Dias Rodrigues",
    ],
    management: [
      { title: "Project Management", items: ["Hotnikon Aritonang"] },
      { title: "Financial Management", items: ["Maria de Lurdes Reis Santos"] },
      { title: "Human Capital Management", items: ["Madalena Soares"] },
      { title: "Administrative Management", items: ["Zito Fátima"] },
      {
        title: "Procurement and Logistics",
        items: [
          "Joana Isabel Clarinha Montalvão e Silva",
          "Carla Regina Ferreira Pedroso",
          "Cláudia Marques Simões",
          "Moisés Rangel",
        ],
      },
      { title: "Communication and Brand", items: ["André Sousa"] },
      { title: "Quality, Health and Safety", items: ["Marcos Quebo"] },
    ] satisfies PeopleGroup[],
  },
  partners: {
    title: "Corporate Partners",
    intro:
      "Ensul maintains collaboration with corporate partners supporting information systems and operational enablement.",
    list: [
      "Softpost Sistemas e Tecnologias de Informação",
      "LGI-Informática, Lda",
      "Quantech, Lda",
    ],
  },
  company: {
    title: "Company Information",
    intro: "Corporate and legal information regarding Ensul Engenharia, S.A.",
    details: [
      {
        term: "Head Office",
        description: "Avenida Presidente Nicolau Lobato, Bairro Colmera, Dili, Timor-Leste",
      },
      {
        term: "Start of Activity (local company)",
        description: "January 2009",
      },
      { term: "Core Activity", description: "Civil construction" },
      { term: "Share Capital", description: "USD 13,050,020" },
      {
        term: "Share Structure",
        description: "1,305,020 shares with a nominal value of USD 10 each",
      },
    ] satisfies DefinitionItem[],
  },
  contact: {
    title: "Contact",
    intro:
      "For project discussions, partnerships, or general inquiries, contact Ensul Engenharia using the form below or visit their head office in Dili.",
    address: ["Avenida Presidente Nicolau Lobato, Bairro Colmera, Dili, Timor-Leste"],
  },
};

export type SiteContent = typeof site;
