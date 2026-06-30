import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteShell, Section, Subsection, StatCard, CTABand } from "@/components/site/shared";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Anshul Sharma" },
      { name: "description", content: "Roles and shipped systems across an AI/ML internship, Code Social, and Veridia.io." },
      { property: "og:title", content: "Experience — Anshul Sharma" },
      { property: "og:description", content: "AI/ML engineering experience across LLMs, voice agents, and data systems." },
    ],
  }),
  component: ExperiencePage,
});

const education = {
  school: "B.Tech — Computer Science & Engineering (Data Science)",
  org: "ITM Gwalior",
  time: "2023 — 2027 (Expected)",
  cgpa: "CGPA 7.7 · Current SGPA 9.04",
  coursework: ["Deep Learning", "DSA", "DBMS", "Operating Systems", "Computer Networks", "Probability & Statistics", "Linear Algebra", "OOP"],
};

const leadership = [
  { title: "Lead Developer — ITM Gwalior Portal", desc: "Lead developer of the official college portal, in production and serving 5,000+ users." },
  { title: "Tech Head — DVN Club & ITM AI/R Lab", desc: "Organize coding workshops and AI hackathons for the student developer community." },
  { title: "Open Source Contributor", desc: "Contribute backend tooling, Python automation, and reviews across community projects." },
];

const jobs = [
  {
    role: "AI/ML Engineer (Paid Internship)",
    org: "AI Healthcare Startup (Confidential)",
    time: "Jan 2026 — Present",
    points: [
      "Architecting a 3B-parameter medical-domain LLM from scratch — transformer stack, custom tokenizer, and end-to-end training pipeline.",
      "Designed and built backend services — REST APIs, database schemas, auth, and model-serving endpoints consumed by AI agents and frontend clients.",
      "Engineered a high-throughput data pipeline processing 45B+ tokens — multi-source collection, cleaning, deduplication, and quality filtering.",
      "Built a HIPAA & EU-compliant Medical AI Agent with Epic FHIR (R4) integration for clinical interoperability.",
      "Implemented agentic workflows with native tool calling and multi-step clinical reasoning.",
    ],
  },
  {
    role: "Open Source Project Administrator",
    org: "Code Social",
    time: "Dec 2025 — Feb 2026",
    points: [
      "Managed codebase integrity and reviewed contributions across community AI/ML repositories.",
      "Streamlined CI/CD pipelines and enforced code-quality standards.",
    ],
  },
  {
    role: "Data Analyst",
    org: "Veridia.io (Remote)",
    time: "Oct 2025 — Nov 2025",
    points: [
      "Built a Resume Intelligence System using Python and NLP to automate candidate parsing and ranking.",
      "Implemented ML classifiers improving recruitment-screening efficiency.",
    ],
  },
];

function ExperiencePage() {
  return (
    <SiteShell>
      <Section eyebrow="02 — Experience" title={<>Shipped at the <span className="text-gradient-ember">edges of AI</span>.</>}>
        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-[oklch(0.7_0.28_340)] via-[oklch(0.7_0.22_200)] to-transparent md:left-1/2" />
          <div className="space-y-12">
            {jobs.map((j, i) => (
              <motion.div key={j.role}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12">
                <div className="absolute left-2 top-2 h-4 w-4 rounded-full bg-aurora ring-4 ring-background md:left-1/2 md:-translate-x-1/2" />
                <div className={i % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}>
                  <div className="font-mono-tech text-[11px] uppercase tracking-widest text-foreground/50">{j.time}</div>
                  <h3 className="font-display mt-1 text-2xl font-semibold">{j.role}</h3>
                  <div className="text-gradient-aurora font-medium">{j.org}</div>
                </div>
                <div className={i % 2 === 0 ? "mt-4 md:col-start-2 md:pl-12 md:mt-0" : "mt-4 md:row-start-1 md:pr-12 md:text-right md:mt-0"}>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    {j.points.map((p) => (<li key={p} className="leading-relaxed">{p}</li>))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-5 sm:grid-cols-3">
          <StatCard n={3} label="Roles in 12 months" />
          <StatCard n={45} suffix="B+" label="Tokens curated" />
          <StatCard n={3} suffix="B" label="Param medical LLM" />
        </div>
      </section>

      <Subsection eyebrow="Education" title={<>Foundations & <span className="text-gradient-aurora">study</span>.</>}>
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}
          className="glass rounded-3xl p-7 sm:p-9">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="font-display text-xl font-semibold sm:text-2xl">{education.school}</h3>
              <div className="text-gradient-aurora font-medium">{education.org}</div>
            </div>
            <div className="font-mono-tech text-[11px] uppercase tracking-widest text-foreground/50">{education.time}</div>
          </div>
          <div className="mt-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono-tech text-xs text-foreground/80">{education.cgpa}</div>
          <div className="mt-6">
            <div className="font-mono-tech text-[10px] uppercase tracking-widest text-foreground/50">Relevant coursework</div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {education.coursework.map((c) => (<span key={c} className="rounded-md bg-white/5 px-2.5 py-1 text-[11px] font-medium text-foreground/80">{c}</span>))}
            </div>
          </div>
        </motion.div>
      </Subsection>

      <Subsection eyebrow="Leadership & activities" title={<>Beyond the <span className="text-gradient-ember">code</span>.</>}>
        <div className="grid gap-5 md:grid-cols-3">
          {leadership.map((l, i) => (
            <motion.div key={l.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass h-full rounded-2xl p-6">
              <h3 className="font-display text-base font-semibold">{l.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/65">{l.desc}</p>
            </motion.div>
          ))}
        </div>
      </Subsection>

      <CTABand
        eyebrow="Next chapter"
        title={<>Want me on your <span className="text-gradient-ember">team</span>?</>}
        subtitle="I'm available for AI/ML internships, freelance LLM & voice work, and research collaborations."
      />
    </SiteShell>
  );
}