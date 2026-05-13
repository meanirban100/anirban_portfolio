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

const certifications = [
  "AB-731: Microsoft Certified: AI Transformation Leader",
  "AI-102: Azure AI Engineer Associate",
  "DP-420: Azure Cosmos DB Developer Specialty",
  "AZ-305: Designing Microsoft Azure Infrastructure Solutions",
  "AZ-104: Microsoft Azure Administrator",
  "DP-203: Data Engineering on Microsoft Azure",
  "AZ-204: Developing Solutions for Microsoft Azure",
  "Databricks Certified Generative AI Engineer Associate",
  "Databricks Certified Data Engineer Associate",
  "Databricks Certified Associate Developer for Apache Spark 3.0",
  "Dell GenAI Foundations",
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
          <div className="flex flex-wrap gap-x-8 gap-y-2 pt-8 border-t border-theme">
            <span className="mono text-xs text-faint">📍 Redmond, WA</span>
            <span className="mono text-xs text-faint">15+ Years Experience</span>
            <span className="mono text-xs text-faint">11 Certifications</span>
            <span className="mono text-xs text-faint">Azure · AWS · GCP</span>
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
          <div className="section-card">
            <div className="space-y-0 text-sm">
              {certifications.map((cert, i) => (
                <div
                  key={cert}
                  className={`flex items-start gap-3 py-3 ${i < certifications.length - 1 ? "border-b border-theme" : ""}`}
                >
                  <span className="text-accent mt-0.5 shrink-0">▹</span>
                  <span className="text-heading">{cert}</span>
                </div>
              ))}
            </div>
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
