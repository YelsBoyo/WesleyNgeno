export type SocialLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  headline: string;
  summary: string;
  location?: string;
  availability?: string;
  email: string;
  socials: SocialLink[];
};

export type Stat = {
  label: string;
  value: string;
  hint?: string;
};

export type Service = {
  title: string;
  description: string;
  bullets: string[];
};

export type CaseStudyLink = {
  label: string;
  href: string;
  kind: "live" | "repo" | "demo" | "contact";
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  status?: "Live" | "In progress" | "Prototype";
  year?: string;
  stack: string[];
  outcomes: Array<{ label: string; value: string }>;
  overview: string;
  responsibilities: string[];
  highlights: string[];
  links?: CaseStudyLink[];
  seo?: { title?: string; description?: string };
};

export type Portfolio = {
  profile: Profile;
  stats: Stat[];
  services: Service[];
  projects: Project[];
};

export function getPortfolio(): Portfolio {
  return {
    profile: {
      name: "Wesley Ngeno Kiplang’at",
      role: "Systems Engineer",
      headline: "I design and ship systems that remove manual work.",
      summary:
        "Business-first engineering: clean UX, reliable backend workflows, and dashboards that keep teams aligned. I optimize for adoption, clarity, and long-term maintainability.",
      location: "Remote / On-site",
      availability: "Open to full-time or contract",
      email: "ngenow99@gmail.com",
      socials: [
        { label: "GitHub", href: "https://github.com/YelsBoyo" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/YelsBoyo" },
      ],
    },
    stats: [
      { label: "Systems shipped", value: "3+", hint: "Production deployments" },
      { label: "Active users", value: "50+", hint: "Across business tools" },
      { label: "Manual steps removed", value: "1,000+", hint: "Automations + workflows" },
    ],
    services: [
      {
        title: "Business systems",
        description: "Data models, workflows, permissions, and dashboards that match reality.",
        bullets: ["Role-aware UX", "Audit-friendly design", "Export-ready reporting"],
      },
      {
        title: "Automation",
        description: "Turn repetitive operations into reliable pipelines and background jobs.",
        bullets: ["Integrations", "Notifications", "Operational visibility"],
      },
      {
        title: "Production readiness",
        description: "Performance, security basics, and deployment practices that reduce risk.",
        bullets: ["Monitoring mindset", "Sane defaults", "Docs + handoff"],
      },
    ],
    projects: [
      {
        slug: "sales-system",
        name: "Sales System",
        tagline: "Sales tracking + reporting that teams actually use.",
        category: "Business System",
        status: "Live",
        year: "2025",
        stack: ["Next.js", "PostgreSQL", "Prisma", "Tailwind"],
        outcomes: [
          { label: "Reporting time", value: "↓ 70%" },
          { label: "Data errors", value: "↓ 50%" },
          { label: "Team adoption", value: "High" },
        ],
        overview:
          "A workflow-first tool that centralizes customers, invoices, payments, and reporting so operators stop living in spreadsheets.",
        responsibilities: [
          "Designed schema for customers, invoices, payments, and adjustments.",
          "Built staff vs management views with role-based access patterns.",
          "Created exportable reports and audit-friendly activity logs.",
        ],
        highlights: [
          "Designed data validation + error states for messy real-world inputs.",
          "Fast dashboards with pragmatic caching and predictable queries.",
          "Optimized for “daily use”, not demos.",
        ],
        links: [{ label: "Request demo", href: "mailto:ngenow99@gmail.com", kind: "contact" }],
        seo: {
          title: "Sales System case study",
          description: "Workflow-first sales tracking with export-ready reporting and audit logs.",
        },
      },
      {
        slug: "smart-attendance",
        name: "Smart Attendance",
        tagline: "Attendance capture designed for unreliable connections.",
        category: "Automation",
        status: "In progress",
        year: "2026",
        stack: ["Flutter", "Firebase", "Cloud Functions"],
        outcomes: [{ label: "Manual entry", value: "↓ 90%" }],
        overview:
          "A mobile-first attendance flow that works offline, syncs safely, and produces admin-ready summaries without manual cleanup.",
        responsibilities: [
          "Offline-friendly capture flow with reconciliation for later sync.",
          "Automated summaries and CSV exports for admins.",
          "Deduplication + integrity checks to reduce fraud and repeats.",
        ],
        highlights: [
          "Designed for constraints: bad network, shared devices, real deadlines.",
          "Keeps an audit trail for admin trust.",
        ],
        links: [{ label: "Talk through it", href: "mailto:ngenow99@gmail.com", kind: "contact" }],
        seo: {
          title: "Smart Attendance case study",
          description: "Offline-first attendance capture with summaries, exports, and integrity checks.",
        },
      },
    ],
  };
}

