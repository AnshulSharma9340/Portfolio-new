import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { SiteShell, Section, Subsection, HighlightCard, CTABand } from "@/components/site/shared";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Anshul Sharma" },
      { name: "description", content: "Stack across LLMs, voice AI, healthcare AI, languages, frameworks, data, databases, and cloud." },
      { property: "og:title", content: "Skills — Anshul Sharma" },
      { property: "og:description", content: "Tools of the trade across the full AI/ML stack." },
    ],
  }),
  component: SkillsPage,
});

const groups: { title: string; items: string[] }[] = [
  { title: "Languages", items: ["Python (Expert)","TypeScript","JavaScript (ES6+)","C++","Java","SQL","C# / .NET"] },
  { title: "AI / ML / LLMs", items: ["PyTorch","TensorFlow","Transformers","LLM Pre-training","Fine-tuning (LoRA / QLoRA)","Quantization","RAG","LangChain","Tool Calling","Multi-Agent","Tokenization"] },
  { title: "Voice / Audio AI", items: ["LiveKit","DeepFilterNet","FireRedVAD","Realtime STT / TTS","Audio LLMs"] },
  { title: "Backend", items: ["FastAPI","Django","Flask","Django REST Framework","REST APIs","Node.js"] },
  { title: "Frontend", items: ["React.js","Next.js","Tailwind CSS","HTML5","CSS3"] },
  { title: "Databases / Storage", items: ["PostgreSQL","MySQL","MongoDB","Supabase","FAISS (vector)"] },
  { title: "Cloud / Infra", items: ["GCP","AWS","Cloudflare (R2 · CDN)","Docker","CI / CD"] },
  { title: "Auth & Security", items: ["OAuth 2.0","JWT","HIPAA","GDPR / EU","RBAC","Row-Level Security"] },
  { title: "Data Engineering", items: ["Pandas","NumPy","Polars","Custom ETL","Deduplication","Data Quality"] },
  { title: "Integrations", items: ["Epic FHIR (R4)","Webhooks","3rd-Party APIs"] },
  { title: "Desktop", items: [".NET (UIA)","WPF","Windows App Dev"] },
  { title: "Dev Tools & BI", items: ["Git","Linux","Postman","Power BI","Scikit-learn"] },
];

const certifications = [
  "Oracle Cloud Data Science Professional",
  "Microsoft Azure Developer Associate",
  "Google Cloud Data Analytics",
  "MongoDB Certified Developer",
  "Salesforce Agentblazer Champion",
  "NPTEL Deep Learning — IIT Ropar",
  "Cisco Data Science Certified",
];

function SkillsPage() {
  return (
    <SiteShell>
      <Section eyebrow="04 — Stack" title={<>Tools of the <span className="text-gradient-ember">trade</span>.</>}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, i) => (
            <motion.div key={g.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass rounded-2xl p-5">
              <div className="font-mono-tech text-[10px] uppercase tracking-widest text-foreground/50">{g.title}</div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {g.items.map((it) => (<span key={it} className="rounded-md bg-white/5 px-2 py-1 text-[11px] font-medium text-foreground/80">{it}</span>))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Subsection eyebrow="Core strengths" title={<>Where I go <span className="text-gradient-aurora">deep</span>.</>}>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((s) => (
            <HighlightCard key={s.title} index={s.index} title={s.title} desc={s.desc} />
          ))}
        </div>
      </Subsection>

      <Subsection eyebrow="Proficiency" title={<>How fluent, <span className="text-gradient-ember">honestly</span>.</>}>
        <div className="glass space-y-5 rounded-3xl p-7 sm:p-9">
          {bars.map((b, i) => (
            <motion.div key={b.label}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium text-foreground/85">{b.label}</span>
                <span className="font-mono-tech text-[11px] text-foreground/50">{b.level}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }} whileInView={{ width: `${b.level}%` }} viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.1 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full bg-aurora" />
              </div>
            </motion.div>
          ))}
        </div>
      </Subsection>

      <Subsection eyebrow="Certifications" title={<>Verified &amp; <span className="text-gradient-aurora">certified</span>.</>}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <motion.div key={c}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.05 }}
              className="glass flex items-center gap-3 rounded-2xl p-5">
              <BadgeCheck className="h-5 w-5 shrink-0 text-[oklch(0.82_0.16_200)]" strokeWidth={1.6} />
              <span className="text-sm font-medium text-foreground/85">{c}</span>
            </motion.div>
          ))}
        </div>
      </Subsection>

      <CTABand
        eyebrow="Put it to work"
        title={<>Need this stack on your <span className="text-gradient-aurora">problem</span>?</>}
        subtitle="From a single fine-tune to a full multi-agent platform — let's scope it."
      />
    </SiteShell>
  );
}

const strengths = [
  { index: "01", title: "LLM engineering", desc: "Pre-training and fine-tuning transformers from scratch — tokenizers, training loops, LoRA/QLoRA, and quantization for real deployment." },
  { index: "02", title: "Realtime voice AI", desc: "Low-latency voice agents on LiveKit with VAD, denoising, and streaming STT/TTS for natural, interruptible conversations." },
  { index: "03", title: "Agentic systems", desc: "Multi-agent orchestration with native tool calling, planning, and parallel reasoning that synthesizes cited answers." },
  { index: "04", title: "RAG & retrieval", desc: "FAISS-backed retrieval pipelines with chunking, re-ranking, and grounding to keep model output factual." },
  { index: "05", title: "Healthcare AI", desc: "HIPAA & EU-compliant clinical agents with Epic FHIR (R4) interoperability and auditable, safe reasoning." },
  { index: "06", title: "Backend & cloud", desc: "Production FastAPI / Django services, Postgres & Supabase, deployed on GCP, AWS & Cloudflare — live products serving thousands of users." },
];

const bars = [
  { label: "Python · FastAPI · Backend APIs", level: 95 },
  { label: "Databases & data pipelines", level: 90 },
  { label: "LLM training & fine-tuning", level: 88 },
  { label: "Cloud & DevOps (GCP · AWS · Cloudflare)", level: 85 },
  { label: "Full-stack (React · Next.js)", level: 82 },
];