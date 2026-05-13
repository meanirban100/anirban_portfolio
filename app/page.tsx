import ThemeToggle from "./components/ThemeToggle";

const experience = [
  {
    company: "Deloitte",
    role: "Data Architect (Office of CIO)",
    employer: "LTIMindtree",
    period: "July 2025 – Present",
    highlights: [
      "Designing future state architecture for data ingestion, consumption, visualization, AI/ML integration, and data marketplace across Deloitte's US and global entities.",
      "Architecting AI Agent integration patterns with existing datahub products (MDM, Databricks, SAP).",
      "Designing ABAC and centralized access policy frameworks governing access across on-prem and cloud applications.",
    ],
  },
  {
    company: "Premera Blue Cross",
    role: "Technical Architect / Data Engineer",
    employer: "LTIMindtree",
    period: "Sept 2024 – June 2025",
    highlights: [
      "Architected and deployed Unity Catalog for DataHub, defining governance structures and access policies.",
      "Led migration from Boomi to Databricks with a reusable migration framework, cutting transition timelines significantly.",
      "Designed lakehouse architectures that reduced compute and storage costs while improving performance.",
      "Integrated ServiceNow and Dynatrace with DataHub for real-time error monitoring.",
    ],
  },
  {
    company: "UHG / Optum",
    role: "Technical Architect / Data Engineer",
    employer: "LTIMindtree",
    period: "July 2022 – Aug 2024",
    highlights: [
      "Architected a GenAI chatbot using Azure OpenAI, Bot Framework, and vector databases for contextual NLP.",
      "Redesigned legacy ETL pipelines with a rules engine framework, improving processing efficiency by 40%.",
      "Migrated Ab Initio/Netezza ETL systems to Azure — achieved 76% reduction in operational costs.",
      "Reduced Databricks costs by 37% and Azure storage by 42% through best-practice optimizations.",
    ],
  },
  {
    company: "CVS Health",
    role: "Data Engineer, Tech Lead",
    employer: "Tata Consultancy Services",
    period: "Mar 2022 – June 2024",
    highlights: [
      "Engineered CMS regulatory compliance automation within GCP.",
      "Designed and implemented medallion architecture on GCP using DataProc and BigQuery.",
      "Integrated and transformed diverse public datasets into enriched, actionable data assets.",
    ],
  },
  {
    company: "Tata Digital",
    role: "Data Engineer, Tech Lead",
    employer: "Tata Consultancy Services",
    period: "May 2020 – Mar 2022",
    highlights: [
      "Designed automated Azure sandbox architecture that reduced environment setup from days to minutes.",
      "Built web solutions with Django and Azure SDK; standardized CI/CD pipelines.",
      "Productionized ML models via automated MLOps frameworks for monitoring, retraining, and deployment.",
    ],
  },
  {
    company: "BJ's Wholesale Club",
    role: "Data Engineer",
    employer: "Tata Consultancy Services",
    period: "Jul 2019 – May 2020",
    highlights: [
      "Upgraded Python/Spark environments on AWS EMR, improving cluster performance and stability.",
      "Led codebase modernization and performance tuning, achieving significant improvements in job execution speed.",
    ],
  },
  {
    company: "NBrown / JD Williams",
    role: "Support Lead",
    employer: "Tata Consultancy Services",
    period: "Jul 2017 – Jul 2019",
    highlights: [
      "Served as support lead for internal credit maintenance applications, overseeing incident resolution.",
      "Implemented proactive monitoring and streamlined support workflows.",
    ],
  },
  {
    company: "Kingfisher PLC",
    role: "Application Lead",
    employer: "Tata Consultancy Services",
    period: "Apr 2012 – Jul 2017",
    highlights: [
      "Led development and support for enterprise applications built with Oracle PL/SQL and Oracle Forms.",
      "Managed full application lifecycle from requirements through deployment and incident management.",
    ],
  },
];

const skills = [
  { label: "Programming", items: ["Python", "Spark", "Pyspark", "SQL"] },
  {
    label: "Generative AI",
    items: [
      "Azure OpenAI", "OpenAI", "LangChain", "LlamaIndex", "HuggingFace",
      "Chroma", "FAISS", "Langflow", "IBM WatsonX", "Azure AI Foundry",
      "Document Intelligence",
    ],
  },
  {
    label: "Cloud",
    items: [
      "Azure (Databricks ADB, Azure Data Factory ADF,Azure Fabric, AI Foundry, DevOps, WebApp, Key Vault, Storage,Event Hub, Container, Monitor, Log Analytics, Logic App, ADLS)","AWS (EMR, EC2, Glue, S3)","GCP (BigQuery, DataProc, Cloud Storage)"],
  },
  {
    label: "Databases & Lakes",
    items: ["Delta Lake", "Cosmos DB", "MongoDB", "SQL Server", "Oracle", "Teradata", "Dremio"],
  },
  {
    label: "DevOps",
    items: [ "Azure DevOps", "GitHub Actions", "Jenkins","Docker", "Kubernetes", "Bicep"],
  },
  { label: "Visualization", items: ["Power BI","Tableau"] },
];

type Issuer = "Microsoft" | "Databricks" | "Dell" | "HackerRank";

const certifications: Array<{ code: string; name: string; issuer: Issuer }> = [
  { code: "AB-731", name: "Microsoft Certified: AI Transformation Leader",                  issuer: "Microsoft"  },
  { code: "AI-102", name: "Azure AI Engineer Associate",                                     issuer: "Microsoft"  },
  { code: "DP-420", name: "Azure Cosmos DB Developer Specialty",                             issuer: "Microsoft"  },
  { code: "AZ-305", name: "Designing Microsoft Azure Infrastructure Solutions",              issuer: "Microsoft"  },
  { code: "AZ-104", name: "Microsoft Azure Administrator",                                   issuer: "Microsoft"  },
  { code: "DP-203", name: "Data Engineering on Microsoft Azure",                             issuer: "Microsoft"  },
  { code: "AZ-204", name: "Developing Solutions for Microsoft Azure",                        issuer: "Microsoft"  },
  { code: "DP-900", name: "Microsoft Azure Data Fundamentals",                               issuer: "Microsoft"  },
  { code: "AI-900", name: "Microsoft Azure AI Fundamentals",                                 issuer: "Microsoft"  },
  { code: "AZ-900", name: "Microsoft Azure Fundamentals",                                    issuer: "Microsoft"  },
  { code: "",       name: "Databricks Certified Generative AI Engineer Associate",           issuer: "Databricks" },
  { code: "",       name: "Databricks Academy Accreditation: Generative AI Fundamentals",   issuer: "Databricks" },
  { code: "",       name: "Databricks Certified Data Engineer Associate",                    issuer: "Databricks" },
  { code: "",       name: "Databricks Certified Associate Developer for Apache Spark 3.0",  issuer: "Databricks" },
  { code: "",       name: "Databricks Lakehouse Fundamentals",                              issuer: "Databricks" },
  { code: "",       name: "Dell GenAI Foundations",                                          issuer: "Dell"       },
  { code: "",       name: "Hacker Rank REST API Certification",                              issuer: "HackerRank" },
];

const hackathons = [
  {
    name: "WatsonX Hackathon",
    host: "IBM",
    period: "May 2024",
    description:
      "Built a Generative AI solution on IBM WatsonX; considered for finalist spot at IBM TechXchange Conference 2024.",
    links: [
      { label: "GitHub", href: "https://github.com/meanirban100/IBM-Watsonx-Hackathon" },
      { label: "Demo", href: "https://www.youtube.com/watch?v=sftaErGwO00" },
    ],
  },
  {
    name: "AI Devs Competition",
    host: "Langflow",
    period: "Sept 2024",
    description:
      "Advanced AI development competition focused on building innovative solutions with Langflow.",
    links: [],
  },
];

function MicrosoftLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 21 21" aria-hidden="true">
      <rect x="0"  y="0"  width="10" height="10" fill="#f25022" />
      <rect x="11" y="0"  width="10" height="10" fill="#7fba00" />
      <rect x="0"  y="11" width="10" height="10" fill="#00a4ef" />
      <rect x="11" y="11" width="10" height="10" fill="#ffb900" />
    </svg>
  );
}

function DatabricksLogo() {
  // Isometric "data brick" — three solid faces, no opacity bleed across themes
  return (
    <svg width="28" height="28" viewBox="0 0 24 22" aria-hidden="true">
      <polygon points="12,1 23,6.5 12,12 1,6.5"   fill="#FF3621" />
      <polygon points="1,6.5 12,12 12,21 1,15.5"  fill="#A82214" />
      <polygon points="23,6.5 12,12 12,21 23,15.5" fill="#D42C1A" />
    </svg>
  );
}

function DellLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
      <rect width="28" height="28" rx="6" fill="#007DB8" />
      <rect x="8" y="7" width="3" height="14" fill="white" />
      <rect x="8" y="7" width="8" height="2.5" fill="white" />
      <rect x="8" y="18.5" width="8" height="2.5" fill="white" />
      <path d="M16 9.5 Q21 9.5 21 14 Q21 18.5 16 18.5 L16 9.5 Z" fill="white" />
    </svg>
  );
}

function HackerRankLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
      <rect width="28" height="28" rx="6" fill="#2EC866" />
      <rect x="7"  y="7" width="3" height="14" fill="white" />
      <rect x="18" y="7" width="3" height="14" fill="white" />
      <rect x="7" y="12.5" width="14" height="3" fill="white" />
    </svg>
  );
}

/* ── Hero platform logos (larger) ─────────────────────── */

function AzureHeroLogo() {
  // Stylised angular "A" — Microsoft Azure's mark
  return (
    <svg width="44" height="40" viewBox="0 0 54 48" aria-hidden="true">
      <path d="M27 2 L52 46 H38 L27 26 L16 46 H2 Z" fill="#0078D4" />
      <path d="M27 18 L37 42 H17 Z" fill="white" opacity="0.18" />
    </svg>
  );
}

function DatabricksHeroLogo() {
  return (
    <svg width="44" height="40" viewBox="0 0 24 22" aria-hidden="true">
      <polygon points="12,1 23,6.5 12,12 1,6.5"    fill="#FF3621" />
      <polygon points="1,6.5 12,12 12,21 1,15.5"   fill="#A82214" />
      <polygon points="23,6.5 12,12 12,21 23,15.5"  fill="#D42C1A" />
    </svg>
  );
}

function OpenAIHeroLogo() {
  // Official OpenAI bloom — path sourced from Simple Icons
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" aria-hidden="true" fill="#10a37f">
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0L4.001 13.95A4.5 4.5 0 0 1 2.34 7.896zm16.597 3.855-5.843-3.368 2.02-1.167a.076.076 0 0 1 .071 0l4.817 2.783a4.5 4.5 0 0 1-.69 8.117v-5.678a.79.79 0 0 0-.375-.687zm2.01-3.023-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L10.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.815-2.778a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365 2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
    </svg>
  );
}

function AWSHeroLogo() {
  // AWS smile-and-wordmark simplified as the iconic arrow smile
  return (
    <svg width="48" height="40" viewBox="0 0 80 48" aria-hidden="true" fill="#FF9900">
      {/* "AWS" lettering */}
      <text x="0" y="28" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="22" letterSpacing="1" fill="#FF9900">AWS</text>
      {/* Smile arrow beneath */}
      <path d="M4 36 Q40 52 76 36" stroke="#FF9900" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      <polygon points="72,32 80,37 72,40" fill="#FF9900"/>
    </svg>
  );
}

function GCPHeroLogo() {
  // Google Cloud — four coloured shapes forming the cloud mark
  return (
    <svg width="44" height="40" viewBox="0 0 64 52" aria-hidden="true">
      {/* Cloud body */}
      <path d="M40 10a14 14 0 0 0-13.1 9.1A10 10 0 1 0 28 39h12a12 12 0 0 0 0-24 12.2 12.2 0 0 0-3.1.4A14 14 0 0 0 40 10z" fill="#4285F4"/>
      {/* Coloured segments — Google's 4-colour identity */}
      <circle cx="16" cy="29" r="10" fill="#EA4335"/>
      <circle cx="16" cy="29" r="10" fill="#4285F4" clipPath="url(#gcp-top)"/>
      <circle cx="40" cy="27" r="12" fill="#34A853"/>
      <circle cx="40" cy="27" r="12" fill="#FBBC05" clipPath="url(#gcp-left)"/>
      <defs>
        <clipPath id="gcp-top"><rect x="0" y="0" width="64" height="27"/></clipPath>
        <clipPath id="gcp-left"><rect x="0" y="0" width="40" height="52"/></clipPath>
      </defs>
    </svg>
  );
}

function AnthropicHeroLogo() {
  // Claude / Anthropic — warm amber badge with abstract angular mark
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
      <rect width="40" height="40" rx="10" fill="#D97757" />
      {/* Two diverging beams — evokes Claude's visual identity */}
      <polygon points="20,8 26,32 20,28" fill="white" opacity="0.95" />
      <polygon points="20,8 14,32 20,28" fill="white" opacity="0.65" />
    </svg>
  );
}

const ISSUER_CONFIG: Record<Issuer, { color: string; bg: string; Logo: () => ReturnType<typeof MicrosoftLogo> }> = {
  Microsoft:  { color: "#00a4ef", bg: "rgba(0,164,239,0.10)",  Logo: MicrosoftLogo  },
  Databricks: { color: "#FF3621", bg: "rgba(255,54,33,0.10)",  Logo: DatabricksLogo },
  Dell:       { color: "#007DB8", bg: "rgba(0,125,184,0.10)",  Logo: DellLogo       },
  HackerRank: { color: "#2EC866", bg: "rgba(46,200,102,0.10)", Logo: HackerRankLogo },
};

export default function Home() {
  return (
    <>
      {/* Fixed Nav */}
      <nav className="nav-bg fixed top-0 w-full z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="mono text-xl font-bold tracking-tight text-heading">&lt;AB /&gt;</span>
          <div className="hidden md:flex space-x-8 text-xs font-medium uppercase tracking-widest mono">
            <a href="#experience" className="text-heading hover:text-accent transition-colors">Experience</a>
            <a href="#stack"      className="text-heading hover:text-accent transition-colors">Tech Stack</a>
            <a href="#competitions" className="text-heading hover:text-accent transition-colors">Competitions</a>
            <a href="#certifications" className="text-heading hover:text-accent transition-colors">Certifications</a>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a href="mailto:helloanirban@gmail.com" className="btn-contact mono">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="pt-32 pb-12 px-6 max-w-6xl mx-auto">
        <div className="max-w-4xl">
            <p className="mono text-accent mb-4 text-xs tracking-widest uppercase">Hi, I architect/build data systems</p>

            {/* Name */}
            <h1 className="text-6xl md:text-8xl font-extrabold text-heading tracking-tight leading-none mb-6">
              Anirban<br />
              <span className="text-accent">Banerjee</span>
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl font-semibold text-heading mb-5 leading-snug">
              Building{" "}
              <span className="text-cyan-400 italic">Intelligent</span>,{" "}
              <span className="text-amber-400 italic">Scalable</span>, and{" "}
              <span className="text-purple-400 italic">Governed</span>{" "}
              Data Platforms.
            </p>

            <p className="text-base mb-8 max-w-2xl leading-relaxed text-body">
              Technical Architect & Data Engineer with 15+ years building large-scale data platforms across{" "}
              <span className="text-accent mono">Retail and Healthcare</span> Sector. Specializing in
              cloud migrations, lakehouse architecture, cost optimization, and{" "}
              <span className="text-heading font-medium">Generative AI</span> on Azure, AWS, and GCP.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="https://linkedin.com/in/abanerjee1985"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mono"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/meanirban100"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline mono"
              >
                GitHub
              </a>
              <a
                href="mailto:helloanirban@gmail.com"
                className="btn-outline mono"
              >
                Email
              </a>
            </div>

            {/* Stats strip */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-8 border-t border-theme">
              <span className="mono text-xs text-accent border border-theme rounded px-3 py-1">📍 Redmond, WA</span>
              <span className="mono text-xs text-accent border border-theme rounded px-3 py-1">15+ Years Experience</span>
              <span className="mono text-xs text-accent border border-theme rounded px-3 py-1">Azure · AWS · GCP</span>
            </div>

            {/* Platform logos — horizontal strip */}
            <div className="mt-8 pt-8 border-t border-theme">
              <p className="mono text-[9px] uppercase tracking-widest text-faint mb-5">Core Platforms &amp; AI</p>
              <div className="flex flex-wrap items-end gap-8">
                {(
                  [
                    { name: "Azure",      Logo: AzureHeroLogo      },
                    { name: "Databricks", Logo: DatabricksHeroLogo },
                    { name: "AWS",        Logo: AWSHeroLogo        },
                    { name: "GCP",        Logo: GCPHeroLogo        },
                    { name: "OpenAI",     Logo: OpenAIHeroLogo     },
                    { name: "Anthropic",  Logo: AnthropicHeroLogo  },
                  ] as const
                ).map(({ name, Logo }) => (
                  <div key={name} className="flex flex-col items-center gap-1.5 group">
                    <div className="opacity-55 group-hover:opacity-100 transition-opacity duration-200">
                      <Logo />
                    </div>
                    <span className="mono text-[8px] text-faint tracking-wider uppercase">{name}</span>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-20 space-y-12">

        {/* Experience */}
        <section id="experience" className="py-10">
          <h2 className="text-2xl font-bold text-heading mb-10 flex items-center mono">
            Professional Journey
          </h2>
          <div className="space-y-6">
            {experience.map((job) => (
              <div key={`${job.company}-${job.period}`} className="section-card">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-heading">{job.company}</h4>
                    <p className="mono text-sm">
                      <span className="text-accent">{job.role}</span>
                      <span className="text-faint mx-2">·</span>
                      <span className="text-faint">{job.employer}</span>
                    </p>
                  </div>
                  <p className="mono text-xs mt-2 md:mt-0 text-faint shrink-0">{job.period}</p>
                </div>
                <ul className="space-y-3 text-sm text-body">
                  {job.highlights.map((h, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-accent mr-3 mt-1 shrink-0">▹</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Stack */}
        <section id="stack" className="py-10">
          <h2 className="text-2xl font-bold text-heading mb-10 flex items-center mono">
            Tech Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((group) => (
              <div key={group.label} className="stack-card">
                <h3 className="text-heading font-bold mb-4 mono text-base">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="skill-tag px-3 py-1 rounded text-xs mono">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Competitions */}
        <section id="competitions" className="py-10">
          <h2 className="text-2xl font-bold text-heading mb-10 flex items-center mono">
            Competitions
          </h2>
          <div className="space-y-6">
            {hackathons.map((h) => (
              <div key={h.name} className="section-card">
                <div className="flex flex-col md:flex-row justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-heading">{h.name}</h4>
                    <p className="text-accent mono text-sm">{h.host}</p>
                  </div>
                  <p className="mono text-xs mt-2 md:mt-0 text-faint">{h.period}</p>
                </div>
                <p className="text-sm text-body leading-relaxed mb-3">{h.description}</p>
                {h.links.length > 0 && (
                  <div className="flex gap-4">
                    {h.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs mono text-accent underline underline-offset-4 hover:text-heading transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="py-10">
          <h2 className="text-2xl font-bold text-heading mb-10 flex items-center mono">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert) => {
              const config = ISSUER_CONFIG[cert.issuer];
              const { Logo } = config;
              return (
                <div
                  key={cert.name}
                  className="flex items-start gap-4 rounded-xl p-5 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "var(--card-bg)",
                    border: "1px solid var(--border)",
                    borderTop: `3px solid ${config.color}`,
                  }}
                >
                  {/* Left: text */}
                  <div className="flex flex-col gap-2 flex-1 min-w-0">
                    {cert.code && (
                      <span
                        className="mono text-[10px] font-bold px-2 py-1 rounded tracking-wider self-start"
                        style={{ background: config.bg, color: config.color }}
                      >
                        {cert.code}
                      </span>
                    )}
                    <p className="text-sm font-semibold text-heading leading-snug">
                      {cert.name}
                    </p>
                    <p className="mono text-[11px] text-faint">{cert.issuer}</p>
                  </div>
                  {/* Right: logo */}
                  <div className="shrink-0 mt-0.5">
                    <Logo />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="text-center py-16 border-t border-theme">
        <div className="flex justify-center items-center space-x-8 mb-5">
          <a
            href="https://github.com/meanirban100"
            target="_blank"
            rel="noopener noreferrer"
            className="text-faint hover:text-accent transition-colors text-sm mono"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/abanerjee1985"
            target="_blank"
            rel="noopener noreferrer"
            className="text-faint hover:text-accent transition-colors text-sm mono"
          >
            LinkedIn
          </a>
          <a
            href="mailto:helloanirban@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-faint hover:text-accent transition-colors text-sm mono"
          >
            Contact
          </a>
        </div>
        <p className="mono text-[10px] tracking-widest text-faint mb-2">
          © {new Date().getFullYear()} Anirban Banerjee
        </p>
        <p className="mono text-[10px] text-faint">
          Made with ♥ using{" "}
          <a
            href="https://claude.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Claude
          </a>
          {" & "}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Vercel
          </a>
        </p>
      </footer>
    </>
  );
}
