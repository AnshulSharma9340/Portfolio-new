import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteShell, Section, Subsection } from "@/components/site/shared";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Anshul Sharma" },
      { name: "description", content: "Reach Anshul Sharma via email, LinkedIn, GitHub, Instagram, or X." },
      { property: "og:title", content: "Contact — Anshul Sharma" },
      { property: "og:description", content: "Open to internships, freelance LLM/voice work, and collaborations." },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { label: "Email",       v: "anshulsharma7162@gmail.com",  href: "mailto:anshulsharma7162@gmail.com" },
  { label: "Phone",       v: "+91 93402 33412",             href: "tel:+919340233412" },
  { label: "LinkedIn",    v: "linkedin.com/in/anshulaiml",  href: "https://linkedin.com/in/anshulaiml" },
  { label: "GitHub",      v: "github.com/AnshulSharma9340", href: "https://github.com/AnshulSharma9340" },
  { label: "Instagram",   v: "@anshulaiml",                 href: "https://instagram.com/anshulaiml" },
  { label: "X / Twitter", v: "@anshulaiml",                 href: "https://twitter.com/anshulaiml" },
];

function ContactPage() {
  return (
    <SiteShell>
      <Section eyebrow="05 — Contact" title={<>Let's build something <span className="text-gradient-aurora">unreasonable</span>.</>}>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 p-10 sm:p-14">
          <div className="absolute inset-0 -z-10 bg-aurora opacity-20" />
          <div className="absolute inset-0 -z-10 bg-mesh" />
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">
                Got a hard AI problem?<br />
                <span className="text-gradient-ember">I want to hear about it.</span>
              </h2>
              <p className="mt-5 max-w-lg text-foreground/70">
                Open to internships, freelance LLM / voice projects, and research collaborations. I usually reply within 24h.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="mailto:anshulsharma7162@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:scale-[1.02]">
                  Email me →
                </a>
                <Link to="/hire-me" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-foreground/90 transition hover:bg-white/5">
                  Hire me →
                </Link>
              </div>
            </div>
            <div className="space-y-3">
              {channels.map((c) => (
                <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-white/10 bg-black/40 px-5 py-4 transition hover:bg-black/60">
                  <div>
                    <div className="font-mono-tech text-[10px] uppercase tracking-widest text-foreground/50">{c.label}</div>
                    <div className="mt-0.5 font-medium text-foreground/90">{c.v}</div>
                  </div>
                  <span className="text-foreground/40 transition group-hover:translate-x-1 group-hover:text-foreground">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Subsection eyebrow="Good to know" title={<>What to <span className="text-gradient-aurora">expect</span>.</>}>
        <div className="grid gap-5 md:grid-cols-3">
          {faqs.map((f, i) => (
            <motion.div key={f.q}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass h-full rounded-3xl p-7">
              <h3 className="font-display text-lg font-semibold">{f.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/65">{f.a}</p>
            </motion.div>
          ))}
        </div>
      </Subsection>
    </SiteShell>
  );
}

const faqs = [
  { q: "How fast do you reply?", a: "Usually within 24 hours, straight from my inbox — no middlemen or forms-to-nowhere." },
  { q: "What work do you take on?", a: "AI/ML internships, freelance LLM & voice projects, RAG and multi-agent builds, and research collaborations." },
  { q: "How should I reach out?", a: "Email is best for detail. For a structured project brief, use the Hire me form and I'll get the full picture." },
];