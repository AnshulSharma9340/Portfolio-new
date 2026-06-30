import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Brain, AudioLines, Network, Stethoscope, Server, Layers } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SiteShell, MagneticButton, SplitWord, PhotoCard } from "@/components/site/shared";
import DisplayCards from "@/components/ui/display-cards";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anshul Sharma — AI/ML Engineer · LLM · Generative AI" },
      { name: "description", content: "Portfolio of Anshul Sharma — AI/ML Engineer building LLMs, voice agents, and healthcare AI." },
      { property: "og:title", content: "Anshul Sharma — AI/ML Engineer" },
      { property: "og:description", content: "Building LLMs, voice agents, and healthcare AI from first principles." },
      { property: "og:image", content: "/anshul.png" },
      { name: "twitter:image", content: "/anshul.png" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteShell>
      <Hero />
      <Marquee />
      <Capabilities />
      <AICoreSection />
      <HighlightsSection />
      <QuickLinks />
    </SiteShell>
  );
}

function Hero() {
  return (
    <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-32 pb-20">
      <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-mono-tech mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-foreground/70">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-[oklch(0.7_0.28_340)]" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[oklch(0.7_0.28_340)]" />
            </span>
            Available · Jan 2026
          </motion.div>

          <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
            <SplitWord text="Anshul" delay={0.05} />{" "}
            <span className="text-gradient-aurora"><SplitWord text="Sharma." delay={0.2} /></span>
            <br />
            <span className="block pt-3 text-2xl font-medium text-foreground/60 sm:text-3xl lg:text-4xl">
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>
                Engineering <span className="text-gradient-ember font-semibold">intelligence</span> from first principles.
              </motion.span>
            </span>
          </h1>

          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-foreground/65 sm:text-lg">
            AI/ML Engineer architecting <span className="text-foreground">3B-parameter medical LLMs</span> and real-time voice agents — and shipping production backends & full-stack products used by thousands. Currently building a confidential medical-AI platform during an engineering internship.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-3">
            <MagneticButton to="/projects" primary>Explore my work →</MagneticButton>
            <MagneticButton to="/hire-me">Hire me</MagneticButton>
            <MagneticButton href="https://github.com/AnshulSharma9340">GitHub</MagneticButton>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.72 }}
            className="font-mono-tech mt-12 grid max-w-md grid-cols-3 gap-6 text-xs text-foreground/60">
            <Stat n={45} suffix="B+" label="Training tokens" />
            <Stat n={21} suffix="" label="Agents orchestrated" />
            <Stat n={5} suffix="K+" label="Portal users" />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }}
            className="mt-10 flex flex-wrap items-center gap-2">
            {["LLM Engineering", "Voice AI", "Multi-Agent", "Backend & Cloud"].map((t) => (
              <span key={t} className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-foreground/70 transition hover:border-white/25 hover:text-foreground/90">
                {t}
              </span>
            ))}
          </motion.div>
        </div>
        <PhotoCard />
      </div>
      <ScrollHint />
    </section>
  );
}

function Stat({ n, suffix, label }: { n: number; suffix: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const start = performance.now();
        const dur = 1600;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(n * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    }, { threshold: 0.4 });
    io.observe(el); return () => io.disconnect();
  }, [n]);
  return (
    <div>
      <div className="font-display text-2xl font-bold text-gradient-aurora">
        <span ref={ref}>{val}</span>{suffix}
      </div>
      <div className="mt-1 uppercase tracking-widest">{label}</div>
    </div>
  );
}

function ScrollHint() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
      className="font-mono-tech absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-foreground/40">
      <div className="flex flex-col items-center gap-2">
        <span>Scroll</span>
        <span className="h-8 w-px bg-gradient-to-b from-foreground/40 to-transparent" />
      </div>
    </motion.div>
  );
}

const dv = (s: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${s}.svg`;
const si = (s: string) => `https://cdn.simpleicons.org/${s}`;

const techLogos: { name: string; src: string }[] = [
  { name: "Python", src: dv("python/python-original") },
  { name: "TypeScript", src: dv("typescript/typescript-original") },
  { name: "JavaScript", src: dv("javascript/javascript-original") },
  { name: "C++", src: dv("cplusplus/cplusplus-original") },
  { name: "PyTorch", src: dv("pytorch/pytorch-original") },
  { name: "TensorFlow", src: dv("tensorflow/tensorflow-original") },
  { name: "Hugging Face", src: si("huggingface") },
  { name: "LangChain", src: si("langchain") },
  { name: "Anthropic", src: si("anthropic") },
  { name: "Gemini", src: si("googlegemini") },
  { name: "Keras", src: dv("keras/keras-original") },
  { name: "scikit-learn", src: dv("scikitlearn/scikitlearn-original") },
  { name: "Jupyter", src: dv("jupyter/jupyter-original") },
  { name: "Pandas", src: dv("pandas/pandas-original") },
  { name: "NumPy", src: dv("numpy/numpy-original") },
  { name: "FastAPI", src: dv("fastapi/fastapi-original") },
  { name: "Django", src: dv("django/django-plain") },
  { name: "Flask", src: dv("flask/flask-original") },
  { name: "React", src: dv("react/react-original") },
  { name: "Next.js", src: dv("nextjs/nextjs-original") },
  { name: "Node.js", src: dv("nodejs/nodejs-original") },
  { name: "PostgreSQL", src: dv("postgresql/postgresql-original") },
  { name: "MySQL", src: dv("mysql/mysql-original") },
  { name: "MongoDB", src: dv("mongodb/mongodb-original") },
  { name: "Supabase", src: dv("supabase/supabase-original") },
  { name: "Docker", src: dv("docker/docker-original") },
  { name: "Google Cloud", src: dv("googlecloud/googlecloud-original") },
  { name: "AWS", src: dv("amazonwebservices/amazonwebservices-original-wordmark") },
  { name: "Cloudflare", src: dv("cloudflare/cloudflare-original") },
  { name: "Postman", src: dv("postman/postman-original") },
  { name: "Git", src: dv("git/git-original") },
  { name: "Linux", src: dv("linux/linux-original") },
];

function TechLogo({ name, src }: { name: string; src: string }) {
  return (
    <div className="mx-3 flex shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 transition hover:border-white/25 hover:bg-white/[0.07]">
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white p-1.5 shadow-sm">
        <img
          src={src}
          alt={name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-contain"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </span>
      <span className="font-display whitespace-nowrap text-base font-medium text-foreground/80">{name}</span>
    </div>
  );
}

function Marquee() {
  const loop = [...techLogos, ...techLogos];
  return (
    <section className="relative z-10 overflow-hidden border-y border-white/10 bg-white/[0.02] py-8">
      <div className="mb-5 text-center font-mono-tech text-[10px] uppercase tracking-[0.3em] text-foreground/40">
        My stack — languages · AI tools · frameworks · data · cloud
      </div>
      <div className="relative">
        <div className="flex w-max animate-marquee">
          {loop.map((t, i) => (
            <TechLogo key={`${t.name}-${i}`} name={t.name} src={t.src} />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent sm:w-32" />
      </div>
    </section>
  );
}

function Capabilities() {
  const caps = [
    { icon: Brain, title: "LLM Engineering", desc: "Pre-training & fine-tuning transformers from scratch — tokenizers, LoRA/QLoRA, quantization." },
    { icon: AudioLines, title: "Realtime Voice AI", desc: "Low-latency voice agents on LiveKit with streaming STT/TTS and natural turn-taking." },
    { icon: Network, title: "Multi-Agent Systems", desc: "Orchestrating specialized agents with native tool-calling, planning, and parallel reasoning." },
    { icon: Stethoscope, title: "Healthcare AI", desc: "HIPAA & EU-compliant clinical agents with Epic FHIR (R4) interoperability." },
    { icon: Server, title: "Backend & APIs", desc: "Production REST APIs, auth, and database schemas with FastAPI, Django, Postgres & Supabase." },
    { icon: Layers, title: "Full-Stack & Cloud", desc: "React / Next.js front-ends shipped live on GCP, AWS & Cloudflare — domains, CDN, and uptime." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="mb-12">
        <div className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-foreground/50">What I do</div>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Engineering across the <span className="text-gradient-aurora">full AI stack</span>.
        </h2>
      </motion.div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {caps.map((c, i) => (
          <motion.div key={c.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.04]">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-[oklch(0.82_0.16_200)] ring-1 ring-white/10">
              <c.icon className="h-6 w-6" strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-lg font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/60">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function AICube() {
  const faces = [
    { label: "LLMs", t: "translateZ(100px)" },
    { label: "Voice AI", t: "rotateY(180deg) translateZ(100px)" },
    { label: "Agents", t: "rotateY(90deg) translateZ(100px)" },
    { label: "RAG", t: "rotateY(-90deg) translateZ(100px)" },
    { label: "FHIR", t: "rotateX(90deg) translateZ(100px)" },
    { label: "Cloud", t: "rotateX(-90deg) translateZ(100px)" },
  ];
  return (
    <div className="cube-scene flex h-[300px] items-center justify-center">
      <div className="cube">
        {faces.map((f) => (
          <div key={f.label} className="cube__face" style={{ transform: f.t }}>
            <span className="font-display text-xl font-bold text-gradient-aurora">{f.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AICoreSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}>
          <div className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-foreground/50">Under the hood</div>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            The full <span className="text-gradient-aurora">AI stack</span>, spinning together.
          </h2>
          <p className="mt-5 max-w-md text-foreground/65">
            From transformer internals and custom tokenizers to realtime voice pipelines, multi-agent orchestration, and the cloud backends that serve them — engineered end to end.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["PyTorch", "FastAPI", "LiveKit", "Epic FHIR", "GCP"].map((t) => (
              <span key={t} className="font-mono-tech rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-foreground/70">{t}</span>
            ))}
          </div>
        </motion.div>
        <div className="relative flex justify-center">
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-aurora opacity-20 blur-3xl" />
          <AICube />
        </div>
      </div>
    </section>
  );
}

function HighlightsSection() {
  const cards = [
    {
      icon: <Brain className="size-4 text-[oklch(0.82_0.16_200)]" />,
      title: "LLM Pre-training",
      description: "3B medical LLM, from scratch",
      date: "Now",
      titleClassName: "text-[oklch(0.82_0.16_200)]",
      className:
        "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <AudioLines className="size-4 text-[oklch(0.7_0.28_340)]" />,
      title: "Voice Agents",
      description: "Realtime LiveKit pipelines",
      date: "Shipped",
      titleClassName: "text-[oklch(0.7_0.28_340)]",
      className:
        "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Network className="size-4 text-[oklch(0.82_0.16_70)]" />,
      title: "Multi-Agent",
      description: "21-agent orchestration",
      date: "Live",
      titleClassName: "text-[oklch(0.82_0.16_70)]",
      className: "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="mb-16">
        <div className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-foreground/50">Highlights</div>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          What I've been <span className="text-gradient-ember">shipping</span>.
        </h2>
        <p className="mt-3 max-w-lg text-sm text-foreground/55">Hover the stack to bring each card to life.</p>
      </motion.div>
      <div className="flex min-h-[340px] items-center justify-center overflow-hidden">
        <DisplayCards cards={cards} />
      </div>
    </section>
  );
}

function QuickLinks() {
  const cards: Array<{ to: string; label: string; eyebrow: string; desc: string }> = [
    { to: "/about", label: "About", eyebrow: "01", desc: "Who I am, what I optimize for, and why." },
    { to: "/experience", label: "Experience", eyebrow: "02", desc: "Roles, shipped systems, real-world impact." },
    { to: "/projects", label: "Projects", eyebrow: "03", desc: "LLMs, voice agents, multi-agent engines." },
    { to: "/skills", label: "Skills", eyebrow: "04", desc: "Stack across LLM, voice, cloud, healthcare." },
    { to: "/contact", label: "Contact", eyebrow: "05", desc: "Email, LinkedIn, GitHub, Instagram, X." },
    { to: "/hire-me", label: "Hire me", eyebrow: "06", desc: "Brief me directly via the project form." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="mb-12">
        <div className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-foreground/50">Explore</div>
        <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Take a look around.</h2>
      </motion.div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => (
          <motion.div key={c.to} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
            <Link to={c.to} className="group block h-full rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-white/25 hover:bg-white/[0.05]">
              <div className="font-mono-tech text-[10px] uppercase tracking-widest text-foreground/50">{c.eyebrow}</div>
              <div className="font-display mt-2 text-3xl font-semibold transition group-hover:translate-x-1">{c.label}</div>
              <p className="mt-2 text-sm text-foreground/60">{c.desc}</p>
              <div className="font-mono-tech mt-6 text-[10px] uppercase tracking-widest text-foreground/40 group-hover:text-foreground/80">Open →</div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}