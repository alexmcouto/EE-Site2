export const projectSectors = [
  "Cultural Heritage & Rehabilitation",
  "Education & Social Assistance",
  "Public Administration & Institutions",
  "Training & Regional Development",
  "Security & Defence",
  "Telecommunications Infrastructure",
  "Healthcare & Diplomatic Facilities",
] as const;

export type ProjectSector = (typeof projectSectors)[number];

export type Project = {
  slug: string;
  title: string;
  location?: string;
  sector: ProjectSector;
  summary: string;
  details?: string[];
  tags?: string[];
};

export const projects: Project[] = [
  {
    slug: "uma-fukun-cultural-centre",
    title: "Uma Fukun Cultural Centre",
    sector: "Cultural Heritage & Rehabilitation",
    summary:
      "Rehabilitation of the “Uma Fukun” building—an old fortress adapted into the Timorese Cultural Centre.",
  },
  {
    slug: "resistance-archive-museum",
    title: "Archive and Museum of the Timorese Resistance",
    sector: "Cultural Heritage & Rehabilitation",
    summary: "Rehabilitation of the former Court of Dili into a national archive and museum.",
    location: "Dili",
  },
  {
    slug: "timor-gap-joint-authority-hq",
    title: "Timor Gap Joint Authority Headquarters (Rehabilitation)",
    sector: "Cultural Heritage & Rehabilitation",
    summary:
      "Rehabilitation of the former headquarters building; the work received an Australian architectural President’s Award for Re-Cycling awarded by the Royal Australian Institute of Architects.",
  },
  {
    slug: "tsda-temporary-offices-expansion",
    title: "TSDA Temporary Offices (Expansion Works)",
    sector: "Public Administration & Institutions",
    summary: "Expansion works for temporary offices of the Timor Sea Designated Authority (TSDA).",
  },
  {
    slug: "electricity-company-classrooms",
    title: "East Timor Electricity Company Classrooms (Rehabilitation)",
    sector: "Public Administration & Institutions",
    summary: "Rehabilitation of classrooms for East Timor’s Electricity Company.",
  },
  {
    slug: "gnr-barracks-works",
    title: "GNR Barracks Works",
    sector: "Security & Defence",
    summary: "Various works in barracks facilities for the GNR.",
  },
  {
    slug: "customs-directorate-works",
    title: "Regional Directorate of Customs (Works)",
    sector: "Public Administration & Institutions",
    summary: "Works for the Regional Directorate of Customs.",
  },
  {
    slug: "world-bank-dili-works",
    title: "World Bank Headquarters in Dili (Works)",
    sector: "Public Administration & Institutions",
    summary: "Works at the World Bank headquarters in Dili.",
    location: "Dili",
  },
  {
    slug: "ainaro-training-centre",
    title: "Ainaro Training Centre",
    sector: "Training & Regional Development",
    summary:
      "A five-building complex (offices, residential areas, kitchen/refectory and warehouse) serving as a farmers’ training center.",
    location: "Ainaro",
  },
  {
    slug: "santa-casa-misericordia-dili",
    title: "Santa Casa da Misericórdia de Dili (Headquarters)",
    sector: "Education & Social Assistance",
    summary:
      "Construction of the headquarters of Santa Casa da Misericórdia de Dili (project supported by the Portuguese Mission in Timor).",
    location: "Dili",
  },
  {
    slug: "dominican-sisters-college-oecussi",
    title: "Dominican Sisters’ College (Oecussi)",
    sector: "Education & Social Assistance",
    summary: "A complex of four buildings comprising the college and its dormitories.",
    location: "Oecussi",
  },
  {
    slug: "vemasse-multipurpose-dormitory-solar",
    title: "Vemasse Multi-Purpose Complex Dormitory (with Photovoltaic System)",
    sector: "Education & Social Assistance",
    summary:
      "Construction of a dormitory building for the Multi-Purpose Complex in Vemasse; included a photovoltaic solar system (panels and batteries) to provide energy in remote locations.",
    location: "Vemasse",
  },
  {
    slug: "bidau-orphanage",
    title: "Bidau Orphanage",
    sector: "Education & Social Assistance",
    summary:
      "Construction of the Bidau Orphanage, a Portuguese-style concrete building with two separate wings for boys and girls, for the Dominican Sisters of the Rosary.",
  },
  {
    slug: "capuchin-friars-laleia-residence",
    title: "Residence of the Capuchin Friars (Laleia) (Rehabilitation)",
    sector: "Education & Social Assistance",
    summary: "Rehabilitation of the residence of the Capuchin Friars of Laleia.",
    location: "Laleia",
  },
  {
    slug: "portuguese-school-dili",
    title: "Portuguese School in Dili",
    sector: "Education & Social Assistance",
    summary:
      "Construction of the Portuguese School in Dili, built from scratch with a wooden frame and thatched roofs.",
    location: "Dili",
  },
  {
    slug: "first-timorese-maternity-school",
    title: "First Timorese Maternity School (Dili)",
    sector: "Healthcare & Diplomatic Facilities",
    summary: "Construction of the first Timorese Maternity School, completed in 2008, in Dili.",
    location: "Dili",
  },
  {
    slug: "presidential-residence-lahane-palace",
    title: "Presidential Residence (Lahane Palace)",
    sector: "Public Administration & Institutions",
    summary: "Construction of the Presidential residence in the Lahane Palace.",
  },
  {
    slug: "military-police-headquarters",
    title: "Military Police Headquarters",
    sector: "Security & Defence",
    summary: "Construction of the military police headquarters.",
  },
  {
    slug: "f-fdtl-ammunition-store",
    title: "Ammunition Store for the F-FDTL",
    sector: "Security & Defence",
    summary: "Construction of the ammunition store for the F-FDTL.",
  },
  {
    slug: "timor-telecom-gsm-phase-6",
    title: "Timor Telecom GSM Mobile Infrastructure (Phase 6)",
    sector: "Telecommunications Infrastructure",
    summary:
      "Supply and assembly of Phase 6 of the GSM mobile infrastructure for Timor Telecom.",
  },
  {
    slug: "hera-navy-residential-building",
    title: "Hera Navy Residential Building",
    sector: "Security & Defence",
    summary:
      "Construction of the Navy’s residential building in Hera, supporting the development of navy logistics.",
    location: "Hera",
  },
  {
    slug: "baucau-referral-hospital",
    title: "Baucau Referral Hospital",
    sector: "Healthcare & Diplomatic Facilities",
    summary:
      "Hospital Referência de Baucau (the second biggest hospital in the country) and one of the most complex building projects executed.",
    location: "Baucau",
  },
  {
    slug: "new-portuguese-embassy-dili",
    title: "New Portuguese Embassy (Dili)",
    sector: "Healthcare & Diplomatic Facilities",
    summary:
      "Construction of the new Portuguese Embassy in Dili; among the most important and complex building works executed.",
    location: "Dili",
  },
];

export const featuredProjects = (slugs: string[]) =>
  projects.filter((project) => slugs.includes(project.slug));
