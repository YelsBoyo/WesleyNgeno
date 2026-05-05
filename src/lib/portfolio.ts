export type PortfolioProfile = {
  name: string;
  headline: string;
  subheadline: string;
  location?: string;
  links: Array<{ label: string; href: string }>;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
};

export type LiveStat = {
  label: string;
  value: string;
  hint?: string;
};

export type ProofItem = {
  title: string;
  description: string;
  icon: "ship" | "users" | "speed" | "quality";
};

export type StoryBeat = {
  problem: string;
  build: string;
  outcome: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  category: "Business System" | "Automation" | "Dashboard" | "Mobile" | "Web";
  stack: string[];
  impact: Array<{ kpi: string; value: string }>;
  bullets: string[];
  links?: Array<{ label: string; href: string }>;
  status?: "Live" | "In progress" | "Prototype";
};

export type Portfolio = {
  profile: PortfolioProfile;
  stats: LiveStat[];
  proof: ProofItem[];
  story: StoryBeat[];
  projects: Project[];
};

export function getPortfolio(): Portfolio {
  // Replace this with your real info. I left it structured so your site feels
  // like a product: everything is data-driven and easy to iterate on.
  return {
    profile: {
      name: "Wesley Ngeno Kiplang’at",
      headline: "I build systems that remove manual work.",
      subheadline:
        "Business-first engineering: dashboards, automations, and reliable backends that ship and stay shipped.",
      location: "Available · Remote/On-site",
      links: [
        { label: "GitHub", href: "https://github.com/YelsBoyo" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/YelsBoyo" },
        { label: "Email", href: "mailto:ngenow99@gmail.com" },
      ],
      ctaPrimary: { label: "Hire me", href: "mailto:ngenow99@gmail.com" },
      ctaSecondary: { label: "See projects", href: "#projects" },
    },
    stats: [
      { label: "Systems shipped", value: "3+", hint: "Real-world deployments" },
      { label: "Active users", value: "50+", hint: "Across business tools" },
      { label: "Records automated", value: "1,000+", hint: "Manual → automated" },
    ],
    proof: [
      {
        title: "Ships end-to-end",
        description: "Frontend, backend, DB, deployment, monitoring.",
        icon: "ship",
      },
      {
        title: "Impact driven",
        description: "Measures success in time saved & errors removed.",
        icon: "speed",
      },
      {
        title: "Production mindset",
        description: "Reliability, security basics, and maintainability.",
        icon: "quality",
      },
      {
        title: "User-first",
        description: "Builds around workflows and adoption, not demos.",
        icon: "users",
      },
    ],
    story: [
      {
        problem:
          "I kept seeing teams track sales and attendance manually — slow, error-prone, impossible to audit.",
        build:
          "So I build systems that mirror real workflows: structured data, role-based access, and clean dashboards.",
        outcome:
          "The result is clarity: fewer mistakes, faster reporting, and decisions backed by real numbers.",
      },
    ],
    projects: [
      {
        slug: "sales-system",
        name: "Sales System",
        tagline: "A real business tool for sales tracking and reporting.",
        category: "Business System",
        stack: ["Next.js", "PostgreSQL", "Prisma", "Tailwind"],
        impact: [
          { kpi: "Reporting time", value: "↓ 70%" },
          { kpi: "Data errors", value: "↓ 50%" },
        ],
        bullets: [
          "Designed data model for customers, invoices, and payments.",
          "Built role-aware dashboards for staff and management.",
          "Implemented export-ready reports and audit-friendly logs.",
        ],
        status: "Live",
        links: [{ label: "Request demo", href: "mailto:ngenow99@gmail.com" }],
      },
      {
        slug: "smart-attendance",
        name: "Smart Attendance",
        tagline: "Attendance capture built for real-world constraints.",
        category: "Automation",
        stack: ["Flutter", "Firebase", "Cloud Functions"],
        impact: [{ kpi: "Manual entry", value: "↓ 90%" }],
        bullets: [
          "Offline-friendly capture flow for unreliable connections.",
          "Automated summaries and CSV exports for admin.",
          "Designed to reduce fraud and duplicate entries.",
        ],
        status: "In progress",
        links: [{ label: "Talk through it", href: "mailto:ngenow99@gmail.com" }],
      },
    ],
  };
}

