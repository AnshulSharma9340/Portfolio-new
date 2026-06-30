import { Link } from "@tanstack/react-router";
import { motion, useScroll, useSpring, useMotionValue } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";

// Hero portrait — served from /public (public/anshul.png).
const PROFILE_IMG = "/anshul.png";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 0.2 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[70] h-[2px] origin-left bg-aurora"
    />
  );
}

const GLOW_SIZE = 340;

export function CursorGlow() {
  const x = useMotionValue(-GLOW_SIZE);
  const y = useMotionValue(-GLOW_SIZE);
  const sx = useSpring(x, { stiffness: 140, damping: 22, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 140, damping: 22, mass: 0.3 });
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    // Skip on touch devices / reduced-motion users — a blurred element repainting
    // on every mousemove is the single biggest source of pointer jank otherwise.
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);
    let raf = 0;
    const move = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        x.set(e.clientX - GLOW_SIZE / 2);
        y.set(e.clientY - GLOW_SIZE / 2);
      });
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
    };
  }, [x, y]);
  if (!enabled) return null;
  return (
    <motion.div
      aria-hidden
      style={{
        x: sx,
        y: sy,
        width: GLOW_SIZE,
        height: GLOW_SIZE,
        background: "radial-gradient(circle, oklch(0.7 0.28 340 / 0.4), transparent 60%)",
      }}
      className="pointer-events-none fixed left-0 top-0 z-[60] rounded-full opacity-40 blur-2xl will-change-transform"
    />
  );
}

export function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-70" />
      <div
        className="absolute -top-40 -left-32 h-[440px] w-[440px] rounded-full animate-float-slow will-change-transform"
        style={{ background: "radial-gradient(circle, oklch(0.5 0.3 320 / 0.35), transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full animate-float-slow2 will-change-transform"
        style={{ background: "radial-gradient(circle, oklch(0.5 0.28 200 / 0.32), transparent 70%)" }}
      />
      <svg className="absolute inset-0 h-full w-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M 56 0 L 0 0 0 56" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

export function Nav() {
  const links: Array<{ to: string; label: string }> = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/experience", label: "Experience" },
    { to: "/projects", label: "Projects" },
    { to: "/skills", label: "Skills" },
    { to: "/contact", label: "Contact" },
  ];
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2 max-w-[95vw]"
    >
      <div className="glass flex items-center gap-1 rounded-full px-3 py-2 sm:gap-2 sm:px-4">
        <Link to="/" className="font-display px-3 py-1 text-sm font-semibold tracking-tight">
          <span className="text-gradient-aurora">ft-anshul</span>
        </Link>
        <div className="hidden h-5 w-px bg-white/10 md:block" />
        <div className="hidden items-center md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              className="rounded-full px-3 py-1.5 text-xs font-medium text-foreground/70 transition hover:bg-white/5 hover:text-foreground"
              activeProps={{ className: "rounded-full px-3 py-1.5 text-xs font-semibold bg-white/10 text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link to="/hire-me" className="ml-1 rounded-full bg-aurora px-4 py-1.5 text-xs font-semibold text-primary-foreground transition hover:opacity-90">
          Hire me
        </Link>
      </div>
    </motion.nav>
  );
}

export function Footer() {
  const nav = [
    { to: "/about", label: "About" },
    { to: "/experience", label: "Experience" },
    { to: "/projects", label: "Projects" },
    { to: "/skills", label: "Skills" },
    { to: "/contact", label: "Contact" },
    { to: "/hire-me", label: "Hire me" },
  ] as const;
  const socials = [
    { href: "https://github.com/AnshulSharma9340", icon: Github, label: "GitHub" },
    { href: "https://linkedin.com/in/anshulaiml", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:anshulsharma7162@gmail.com", icon: Mail, label: "Email" },
  ];
  return (
    <footer className="relative mt-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1.2fr]">
          <div>
            <Link to="/" className="font-display text-2xl font-bold tracking-tight">
              <span className="text-gradient-aurora">ft-anshul</span>
            </Link>
            <div className="font-mono-tech mt-1 text-[10px] uppercase tracking-[0.3em] text-foreground/40">by Anshul Sharma</div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-foreground/60">
              AI/ML Engineer building LLMs, real-time voice agents, and healthcare AI — from first principles to production.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground/70 transition hover:border-white/30 hover:bg-white/10 hover:text-foreground"
                >
                  <s.icon className="h-5 w-5" strokeWidth={1.6} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-foreground/50">Navigate</div>
            <ul className="mt-4 space-y-2.5">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-sm text-foreground/65 transition hover:text-foreground hover:translate-x-0.5 inline-block">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-foreground/50">Get in touch</div>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a href="mailto:anshulsharma7162@gmail.com" className="inline-flex items-center gap-2 text-foreground/70 transition hover:text-foreground"><Mail className="h-4 w-4 shrink-0 text-foreground/40" /> anshulsharma7162@gmail.com</a></li>
              <li><a href="tel:+919340233412" className="inline-flex items-center gap-2 text-foreground/70 transition hover:text-foreground"><Phone className="h-4 w-4 shrink-0 text-foreground/40" /> +91 93402 33412</a></li>
              <li><span className="inline-flex items-center gap-2 text-foreground/70"><MapPin className="h-4 w-4 shrink-0 text-foreground/40" /> Gwalior, India</span></li>
            </ul>
            <Link to="/hire-me" className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-aurora px-5 py-2 text-xs font-semibold text-primary-foreground transition hover:opacity-90">
              Hire me <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 sm:flex-row">
          <div className="font-mono-tech text-[11px] uppercase tracking-widest text-foreground/40">© 2026 Anshul Sharma · All rights reserved</div>
          <div className="font-mono-tech text-[11px] uppercase tracking-widest text-foreground/40">Designed &amp; developed with ❤️</div>
        </div>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <ScrollProgress />
      <CursorGlow />
      <BackgroundFX />
      <Nav />
      {children}
      <Footer />
    </main>
  );
}

export function Section({ id, eyebrow, title, children }: { id?: string; eyebrow: string; title: ReactNode; children: ReactNode }) {
  return (
    <section id={id} className="relative mx-auto max-w-7xl px-6 py-28 sm:py-36">
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="mb-14"
      >
        <div className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-foreground/50">{eyebrow}</div>
        <h1 className="font-display mt-3 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
      </motion.div>
      {children}
    </section>
  );
}

export function CountUp({ n, suffix = "", className }: { n: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          const start = performance.now();
          const dur = 1500;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(n * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [n]);
  return (
    <span ref={ref} className={className}>
      {val}
      {suffix}
    </span>
  );
}

export function StatCard({ n, suffix = "", prefix = "", label }: { n: number; suffix?: string; prefix?: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
      className="glass rounded-2xl p-6 text-center"
    >
      <div className="font-display text-3xl font-bold text-gradient-aurora sm:text-4xl">
        {prefix}
        <CountUp n={n} suffix={suffix} />
      </div>
      <div className="font-mono-tech mt-2 text-[10px] uppercase tracking-widest text-foreground/50">{label}</div>
    </motion.div>
  );
}

export function HighlightCard({ index, title, desc }: { index: string; title: string; desc: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
      className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-white/25 hover:bg-white/[0.04]"
    >
      <div className="font-mono-tech text-[10px] uppercase tracking-widest text-foreground/40">{index}</div>
      <h3 className="font-display mt-3 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground/65">{desc}</p>
    </motion.div>
  );
}

export function Subsection({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children: ReactNode }) {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <div className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-foreground/50">{eyebrow}</div>
        <h2 className="font-display mt-3 max-w-2xl text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">{title}</h2>
      </motion.div>
      {children}
    </section>
  );
}

export function CTABand({ eyebrow = "Let's build", title, subtitle }: { eyebrow?: string; title: ReactNode; subtitle?: string }) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[2rem] border border-white/10 p-10 text-center sm:p-16"
      >
        <div className="absolute inset-0 -z-10 bg-aurora opacity-20" />
        <div className="absolute inset-0 -z-10 bg-mesh" />
        <div className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-foreground/60">{eyebrow}</div>
        <h2 className="font-display mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl">{title}</h2>
        {subtitle && <p className="mx-auto mt-4 max-w-lg text-foreground/70">{subtitle}</p>}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <MagneticButton to="/hire-me" primary>Hire me →</MagneticButton>
          <MagneticButton to="/contact">Get in touch</MagneticButton>
        </div>
      </motion.div>
    </section>
  );
}

export function MagneticButton({ href, to, children, primary = false }: { href?: string; to?: string; children: ReactNode; primary?: boolean }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const cls = primary
    ? "group relative overflow-hidden rounded-full bg-aurora px-6 py-3 text-sm font-semibold text-primary-foreground glow-primary animate-gradient-flow"
    : "rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground/90 transition hover:bg-white/10 hover:border-white/30";
  const style = { transform: `translate(${pos.x}px, ${pos.y}px)`, transition: "transform 0.25s cubic-bezier(0.22,1,0.36,1)" };
  const handlers = {
    onMouseMove: (e: React.MouseEvent<HTMLAnchorElement>) => {
      const r = e.currentTarget.getBoundingClientRect();
      setPos({ x: (e.clientX - r.left - r.width / 2) * 0.25, y: (e.clientY - r.top - r.height / 2) * 0.25 });
    },
    onMouseLeave: () => setPos({ x: 0, y: 0 }),
  };
  if (to) {
    return (
      <Link to={to} className={cls} style={style} {...handlers}>
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }
  const external = href?.startsWith("http");
  return (
    <a
      ref={ref}
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      style={style}
      className={cls}
      {...handlers}
    >
      <span className="relative z-10">{children}</span>
    </a>
  );
}

export function SplitWord({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="inline-block">
      {text.split("").map((c, i) => (
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: delay + i * 0.04, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block"
        >
          {c}
        </motion.span>
      ))}
    </span>
  );
}

export function PhotoCard() {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef(0);
  const [imgError, setImgError] = useState(false);
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      el.style.transform = `rotateX(${-py * 8}deg) rotateY(${px * 10}deg)`;
    });
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(raf.current);
    el.style.transform = "rotateX(0deg) rotateY(0deg)";
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-md"
      style={{ perspective: 1200 }}
    >
      <div className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-aurora opacity-40 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="absolute h-[110%] w-[110%] rounded-full border border-white/5" />
        <div className="absolute h-[125%] w-[125%] rounded-full border border-white/[0.04]" />
        <div className="absolute h-[140%] w-[140%] rounded-full border border-white/[0.03]" />
        <div className="absolute h-2 w-2 rounded-full bg-[oklch(0.7_0.28_340)] shadow-[0_0_20px_oklch(0.7_0.28_340)] animate-orbit" />
        <div className="absolute h-1.5 w-1.5 rounded-full bg-[oklch(0.82_0.16_200)] shadow-[0_0_20px_oklch(0.82_0.16_200)] animate-orbit-reverse" />
      </div>
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ transformStyle: "preserve-3d", transition: "transform 0.25s ease-out", willChange: "transform" }}
        className="grad-border relative overflow-hidden rounded-[2rem] glass noise"
      >
        <div className="relative aspect-[4/5] w-full">
          {imgError ? (
            <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[oklch(0.32_0.2_320)] via-[oklch(0.26_0.18_280)] to-[oklch(0.3_0.16_210)]">
              <span className="font-display text-8xl font-bold tracking-tighter text-white/95">AS</span>
              <span className="font-mono-tech mt-3 text-[10px] uppercase tracking-[0.3em] text-white/50">Anshul Sharma</span>
            </div>
          ) : (
            <img src={PROFILE_IMG} onError={() => setImgError(true)} alt="Portrait of Anshul Sharma" className="h-full w-full object-cover" loading="eager" decoding="async" fetchPriority="high" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
          <div className="absolute inset-0 mix-blend-overlay opacity-30 bg-gradient-to-br from-[oklch(0.7_0.28_340)] via-transparent to-[oklch(0.7_0.22_200)]" />
          <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.82_0.16_200)] to-transparent animate-[scan_6s_linear_infinite]" />
          </div>
          <div className="font-mono-tech absolute left-4 top-4 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-[10px] uppercase tracking-widest text-white/90">
            ● LLM Engineer
          </div>
          <div className="absolute right-4 top-4 rounded-2xl border border-white/15 bg-black/60 px-3 py-2">
            <div className="font-mono-tech text-[9px] uppercase tracking-widest text-white/60">Building</div>
            <div className="font-display text-sm font-semibold text-white">Medical LLM</div>
          </div>
          <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-white/15 bg-black/70 px-4 py-3">
            <div>
              <div className="font-display text-sm font-semibold text-white">Anshul Sharma</div>
              <div className="font-mono-tech text-[10px] uppercase tracking-widest text-white/60">Gwalior, India</div>
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-aurora text-xs font-bold text-primary-foreground">AI</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}