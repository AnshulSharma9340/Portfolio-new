import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteShell, Section, Subsection, PhotoCard, HighlightCard, StatCard, CTABand } from "@/components/site/shared";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Anshul Sharma" },
      { name: "description", content: "AI/ML Engineer architecting medical LLMs, voice agents, and agentic systems from first principles." },
      { property: "og:title", content: "About — Anshul Sharma" },
      { property: "og:description", content: "AI/ML Engineer focused on LLM pre-training, voice AI, and healthcare-grade agents." },
    ],
  }),
  component: AboutPage,
});

function Info({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="font-mono-tech text-[10px] uppercase tracking-widest text-foreground/50">{k}</div>
      <div className="mt-1 font-medium text-foreground/90">{v}</div>
    </div>
  );
}

function AboutPage() {
  return (
    <SiteShell>
      <Section eyebrow="01 — About" title={<>I build <span className="text-gradient-aurora">AI systems</span> that ship.</>}>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-6 text-lg leading-relaxed text-foreground/75">
            <p>
              I'm a B.Tech Computer Science (Data Science) student obsessed with the layer where research meets production — Large Language Models, voice agents, and autonomous systems that work in the real world.
            </p>
            <p>
              Currently architecting a <span className="text-foreground font-semibold">3B-parameter medical LLM from scratch</span> at a confidential healthcare-AI startup — designing the transformer stack, custom tokenizer, and end-to-end training pipeline. Recently shipped HIPAA-compliant clinical AI with Epic FHIR (R4) integration.
            </p>
            <p className="text-foreground/55">
              Beyond AI, I ship production backends and full-stack products — live systems like the ITM Gwalior portal (5,000+ users) and Discipline-X — across GCP, AWS, and Cloudflare.
            </p>
            <div className="glass mt-8 rounded-3xl p-7">
              <div className="font-mono-tech text-[10px] uppercase tracking-widest text-foreground/50">Currently</div>
              <div className="mt-2 font-display text-2xl font-semibold">Medical-Domain LLM</div>
              <div className="mt-1 text-sm text-foreground/60">3B medical-domain LLM · custom tokenizer · 45B+ tokens</div>
              <div className="mt-6 h-px w-full bg-white/10" />
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <Info k="Role" v="AI/ML Engineer" />
                <Info k="Focus" v="LLM · Voice · Backend" />
                <Info k="Location" v="Gwalior, IN" />
                <Info k="Open to" v="Remote · Hybrid" />
              </div>
            </div>
          </div>
          <div className="lg:pt-4"><PhotoCard /></div>
        </div>
      </Section>

      <Subsection eyebrow="Principles" title={<>How I <span className="text-gradient-aurora">work</span>.</>}>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => (
            <HighlightCard key={p.title} index={p.index} title={p.title} desc={p.desc} />
          ))}
        </div>
      </Subsection>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard n={3} suffix="B" label="Param medical LLM" />
          <StatCard n={45} suffix="B+" label="Training tokens" />
          <StatCard n={21} label="Agents orchestrated" />
          <StatCard n={5} suffix="K+" label="Portal users served" />
        </div>
      </section>

      <Subsection eyebrow="Beyond the terminal" title={<>A few things <span className="text-gradient-ember">about me</span>.</>}>
        <div className="grid gap-5 lg:grid-cols-3">
          {facts.map((f, i) => (
            <motion.div key={f.k}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass rounded-2xl p-6">
              <div className="font-mono-tech text-[10px] uppercase tracking-widest text-foreground/50">{f.k}</div>
              <div className="mt-2 text-foreground/85">{f.v}</div>
            </motion.div>
          ))}
        </div>
      </Subsection>

      <CTABand
        eyebrow="Open to work"
        title={<>Let's build something <span className="text-gradient-aurora">unreasonable</span>.</>}
        subtitle="Internships, freelance LLM / voice projects, and research collaborations. I usually reply within 24h."
      />
    </SiteShell>
  );
}

const principles = [
  { index: "01", title: "Research → Production", desc: "I live where papers become shipped systems — turning transformer math into pipelines that actually serve real users." },
  { index: "02", title: "First principles", desc: "Architecting models from scratch — custom tokenizers, training loops, decoding — instead of gluing black boxes together." },
  { index: "03", title: "Latency obsessed", desc: "Realtime voice and agents live or die on milliseconds. I profile relentlessly and cut every avoidable hop." },
  { index: "04", title: "Compliance by design", desc: "HIPAA and EU-grade AI from day one — privacy, auditability, and safety baked in, not bolted on." },
  { index: "05", title: "Agentic thinking", desc: "Decompose hard tasks into tool-using agents with explicit reasoning instead of one giant opaque prompt." },
  { index: "06", title: "Ship, then sharpen", desc: "Get a working slice in front of users fast, measure, and iterate — momentum over perfection." },
];

const facts = [
  { k: "Based in", v: "Gwalior, India · open to remote & hybrid worldwide" },
  { k: "Studying", v: "B.Tech CSE (Data Science) @ ITM Gwalior · 2023–2027 · CGPA 7.7" },
  { k: "Currently learning", v: "Distributed training, model quantization, and audio LLMs" },
];