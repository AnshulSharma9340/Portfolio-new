import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { SiteShell, Section, StatCard, CTABand, MagneticButton } from "@/components/site/shared";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Anshul Sharma" },
      { name: "description", content: "Live products and engineering work — ITM Gwalior site, Discipline-X, a medical-domain LLM, voice agents, and multi-agent systems." },
      { property: "og:title", content: "Projects — Anshul Sharma" },
      { property: "og:description", content: "Live products and AI / backend systems shipped end-to-end." },
    ],
  }),
  component: ProjectsPage,
});

type Project = {
  name: string;
  category: string;
  tag: string;
  stack: string[];
  desc: string;
  grad: string;
  /** Optional thumbnail (lazy-loaded). Add a URL or /public path to show an image. */
  image?: string;
  link?: string;
  linkLabel?: string;
  live?: boolean;
};

// To add a project: copy a block, set its `category` (an existing one auto-adds a
// filter tab), and optionally add an `image`. Everything else updates automatically.
const projects: Project[] = [
  {
    name: "ITM Gwalior College Website",
    category: "Full-Stack",
    tag: "Live Production · Full-Stack",
    live: true,
    stack: ["Next.js", "Supabase", "GCP", "Cloudflare", "RAG"],
    desc: "Complete official website of ITM Gwalior — 78+ live pages with a no-code, WordPress-style editor so non-technical staff can edit any page. Row-level security, Cloudflare CDN, and a RAG query agent. In active use, serving 5,000+ users.",
    grad: "from-[oklch(0.7_0.28_340)] to-[oklch(0.7_0.22_200)]",
    link: "https://itmgwalior.in",
    linkLabel: "Visit site",
  },
  {
    name: "Discipline-X",
    category: "Full-Stack",
    tag: "Live Platform · Full-Stack",
    live: true,
    stack: ["React", "FastAPI", "PostgreSQL", "Cloud Hosting"],
    desc: "A live public platform handling 200+ daily active users and ranking on Google. Owned end-to-end — frontend, backend APIs, hosting, domain, DNS, SSL, monitoring, and growth.",
    grad: "from-[oklch(0.82_0.16_70)] to-[oklch(0.7_0.28_20)]",
    link: "https://discipline-x.me",
    linkLabel: "Visit site",
  },
  {
    name: "Medical-Domain LLM & Backend",
    category: "AI / LLM",
    tag: "LLM · Healthcare · Backend",
    stack: ["PyTorch", "FastAPI", "Epic FHIR", "HIPAA"],
    desc: "Architecting a 3B-parameter medical-domain LLM from scratch — transformer stack, custom tokenizer, and a 45B+ token training pipeline — plus the HIPAA & EU-compliant backend, REST APIs, and model-serving endpoints powering it. (Built during an internship — details under NDA.)",
    grad: "from-[oklch(0.65_0.26_290)] to-[oklch(0.7_0.22_200)]",
  },
  {
    name: "Custom-nano — Medical AI Agent",
    category: "Backend",
    tag: "Backend · FHIR",
    stack: ["Python", "FastAPI", "Epic FHIR (R4)"],
    desc: "HIPAA + EU-compliant backend serving a medical AI agent — REST endpoints, request validation, and auth — integrating Epic FHIR (R4) resources (Patient, Encounter, Observation) for clinical interoperability.",
    grad: "from-[oklch(0.7_0.22_200)] to-[oklch(0.65_0.26_290)]",
    link: "https://github.com/AnshulSharma9340",
    linkLabel: "GitHub",
  },
  {
    name: "Healthcare Pre-consultation Voice Agent",
    category: "Voice AI",
    tag: "Voice · Realtime",
    stack: ["Python", "LiveKit", "DeepFilterNet", "FireRedVAD"],
    desc: "Real-time voice agent handling patient pre-consultation calls end-to-end — intake forms, symptom triage, and appointment booking with low-latency streaming audio, noise suppression, and accurate speech endpointing.",
    grad: "from-[oklch(0.7_0.28_340)] to-[oklch(0.65_0.26_290)]",
  },
  {
    name: "Luminal Engine",
    category: "AI / LLM",
    tag: "Multi-Agent · 21 LLMs",
    stack: ["Python", "FastAPI", "LLMs", "Multi-Agent"],
    desc: "Perplexity-style multi-agent system orchestrating 21 specialized agents (image, audio, planning, web search, code). Async parallel LLM calls with routing, aggregation, retries, and rate limiting — synthesizing a unified cited answer.",
    grad: "from-[oklch(0.7_0.28_340)] to-[oklch(0.82_0.16_70)]",
    link: "https://github.com/AnshulSharma9340",
    linkLabel: "GitHub",
  },
  {
    name: "Lyra Audio LLM",
    category: "AI / LLM",
    tag: "Architecture · Research",
    stack: ["PyTorch", "Transformers"],
    desc: "Small-parameter audio LLM with native tool-calling baked into the decoding loop — Claude-style function calls at the model level, not post-processing. Audio encoder + LLM decoder + structured-output heads.",
    grad: "from-[oklch(0.7_0.22_200)] to-[oklch(0.65_0.26_290)]",
    link: "https://github.com/AnshulSharma9340",
    linkLabel: "GitHub",
  },
  {
    name: "PC Control Voice Agent",
    category: "Voice AI",
    tag: "Agents · Windows",
    stack: ["Python", ".NET UIA", "LLM Planning"],
    desc: "Voice-controlled Windows agent executing multi-app tasks via decomposed step-by-step LLM planning. Migrated from screenshot grounding to the UIA accessibility tree — dramatically lower latency and higher reliability.",
    grad: "from-[oklch(0.82_0.16_70)] to-[oklch(0.7_0.28_20)]",
  },
  {
    name: "Slate — Windows Productivity App",
    category: "Desktop",
    tag: "Desktop · C# / .NET",
    stack: ["C#", ".NET", "WPF"],
    desc: "Native Windows desktop app combining an advanced categorized notepad, a whiteboard / drawing canvas, and a link saver in one workspace — packaged and shipped as a standalone installer.",
    grad: "from-[oklch(0.7_0.22_160)] to-[oklch(0.7_0.22_200)]",
    link: "https://github.com/AnshulSharma9340",
    linkLabel: "GitHub",
  },
  {
    name: "Academic Trailblazers",
    category: "Full-Stack",
    tag: "Full-Stack · Django",
    stack: ["Django", "DRF", "React", "PostgreSQL"],
    desc: "Student Achievement Management System — role-based dashboards (student / faculty / admin) on Django REST Framework APIs, a normalized PostgreSQL schema, query optimization, and admin tooling.",
    grad: "from-[oklch(0.65_0.26_290)] to-[oklch(0.7_0.28_340)]",
    link: "https://github.com/AnshulSharma9340",
    linkLabel: "GitHub",
  },
  {
    name: "Suspicious Transaction Detection",
    category: "Data / ML",
    tag: "ML · Data",
    stack: ["Python", "Pandas", "Scikit-learn"],
    desc: "End-to-end fraud pipeline — feature engineering on transaction logs, class-imbalance handling, and an ML classifier flagging suspicious activity in real-time scoring mode, backed by a streamed feature store.",
    grad: "from-[oklch(0.82_0.16_70)] to-[oklch(0.7_0.22_160)]",
    link: "https://github.com/AnshulSharma9340",
    linkLabel: "GitHub",
  },
];

const CATEGORY_ORDER = ["AI / LLM", "Voice AI", "Full-Stack", "Backend", "Data / ML", "Desktop"];

function ProjectsPage() {
  const cats = Array.from(new Set(projects.map((p) => p.category))).sort((a, b) => {
    const ia = CATEGORY_ORDER.indexOf(a);
    const ib = CATEGORY_ORDER.indexOf(b);
    return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
  });
  const categories = ["All", ...cats];
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);
  const liveCount = projects.filter((p) => p.live).length;

  return (
    <SiteShell>
      <Section eyebrow="03 — Selected work" title={<>Things I've <span className="text-gradient-aurora">built</span>.</>}>
        <div className="mb-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard n={projects.length} label="Projects shipped" />
          <StatCard n={liveCount} label="Live products" />
          <StatCard n={5} suffix="K+" label="Users served" />
          <StatCard n={45} suffix="B+" label="Tokens processed" />
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-xs font-medium transition",
                active === c
                  ? "border-white/30 bg-white/10 text-foreground"
                  : "border-white/10 bg-white/[0.03] text-foreground/55 hover:border-white/20 hover:text-foreground",
              )}
            >
              {c}
              {c !== "All" && <span className="ml-1.5 text-foreground/40">{projects.filter((p) => p.category === c).length}</span>}
            </button>
          ))}
        </div>

        <div key={active} className="grid gap-6 md:grid-cols-2">
          {filtered.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: Math.min(i, 6) * 0.05 }}
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
                e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
              }}
              className="spotlight group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-white/20"
            >
              <div className={`absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gradient-to-br ${p.grad} opacity-20 blur-3xl transition group-hover:opacity-40`} />
              <div className="relative z-10 flex h-full flex-col">
                {p.image && (
                  <div className="mb-5 aspect-video overflow-hidden rounded-2xl border border-white/10">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="font-mono-tech text-[10px] uppercase tracking-widest text-foreground/50">{p.tag}</span>
                  {p.live && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-[oklch(0.7_0.22_160/0.4)] bg-[oklch(0.7_0.22_160/0.14)] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-[oklch(0.82_0.18_160)]">
                      ● Live
                    </span>
                  )}
                </div>
                <h3 className="font-display text-2xl font-semibold tracking-tight transition group-hover:translate-x-1 sm:text-3xl">{p.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/65">{p.desc}</p>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="font-mono-tech rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-foreground/70">{s}</span>
                  ))}
                </div>
                {p.link && (
                  <a
                    href={p.link} target="_blank" rel="noreferrer"
                    className="font-mono-tech mt-6 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-widest text-foreground/60 transition hover:text-foreground"
                  >
                    {p.linkLabel ?? "Open"} <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mt-8 flex flex-col items-start justify-between gap-5 rounded-3xl border border-white/10 bg-white/[0.02] p-7 sm:flex-row sm:items-center sm:p-9"
        >
          <div>
            <div className="font-mono-tech text-[10px] uppercase tracking-widest text-foreground/50">More on GitHub</div>
            <h3 className="font-display mt-2 text-xl font-semibold sm:text-2xl">Experiments, tooling & open source</h3>
            <p className="mt-2 max-w-xl text-sm text-foreground/60">Smaller builds, research notebooks, and contributions live on my GitHub.</p>
          </div>
          <MagneticButton href="https://github.com/AnshulSharma9340" primary>View GitHub →</MagneticButton>
        </motion.div>
      </Section>

      <CTABand
        eyebrow="Have a build in mind?"
        title={<>Let's ship your <span className="text-gradient-aurora">next system</span>.</>}
        subtitle="LLM training, realtime voice agents, backend APIs, or full-stack products — brief me and I'll reply within 24h."
      />
    </SiteShell>
  );
}
