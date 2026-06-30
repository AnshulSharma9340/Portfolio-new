import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteShell, Section } from "@/components/site/shared";

export const Route = createFileRoute("/hire-me")({
  head: () => ({
    meta: [
      { title: "Hire me — Anshul Sharma" },
      { name: "description", content: "Brief Anshul on your LLM, voice AI, or agent project. Reply within 24h." },
      { property: "og:title", content: "Hire me — Anshul Sharma" },
      { property: "og:description", content: "Project brief form for LLM, voice, and multi-agent work." },
    ],
  }),
  component: HirePage,
});

const projectTypes = ["LLM Pre-training / Fine-tuning","Voice Agent (LiveKit)","Multi-Agent System","RAG / Search","Healthcare AI (HIPAA)","Other"];
const budgets = ["< $1k","$1k – $5k","$5k – $20k","$20k+","Equity / Collab"];
const timelines = ["ASAP","1–2 weeks","1 month","1–3 months","Flexible"];

function HirePage() {
  const [form, setForm] = useState({
    name: "", email: "", company: "",
    type: projectTypes[0], budget: budgets[1], timeline: timelines[1],
    message: "",
  });
  const [sent, setSent] = useState(false);
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const mailto = useMemo(() => {
    const subject = `[Hire me] ${form.type} — ${form.name || "New project"}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Company: ${form.company}`,
      `Project type: ${form.type}`,
      `Budget: ${form.budget}`,
      `Timeline: ${form.timeline}`,
      ``,
      `Brief:`,
      form.message,
    ].join("\n");
    return `mailto:anshulsharma7162@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    window.location.href = mailto;
    setSent(true);
  };

  const inputCls = "w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 outline-none transition focus:border-white/30 focus:bg-black/50";

  return (
    <SiteShell>
      <Section eyebrow="06 — Hire me" title={<>Brief me on your <span className="text-gradient-aurora">next AI build</span>.</>}>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <aside className="space-y-6">
            <div className="glass rounded-3xl p-6">
              <div className="font-mono-tech text-[10px] uppercase tracking-widest text-foreground/50">Reply time</div>
              <div className="font-display mt-2 text-3xl font-semibold text-gradient-aurora">~ 24h</div>
              <p className="mt-3 text-sm text-foreground/60">Direct to my inbox. No middlemen, no forms-to-nowhere.</p>
            </div>
            <div className="glass rounded-3xl p-6">
              <div className="font-mono-tech text-[10px] uppercase tracking-widest text-foreground/50">Best fit</div>
              <ul className="mt-3 space-y-2 text-sm text-foreground/75">
                <li>• Custom LLM training / fine-tuning</li>
                <li>• Realtime voice agents (LiveKit)</li>
                <li>• Multi-agent orchestration</li>
                <li>• RAG + tool-calling systems</li>
                <li>• Healthcare / regulated AI</li>
              </ul>
            </div>
            <div className="glass rounded-3xl p-6">
              <div className="font-mono-tech text-[10px] uppercase tracking-widest text-foreground/50">Direct</div>
              <a href="mailto:anshulsharma7162@gmail.com" className="mt-2 block font-medium text-foreground/90 hover:opacity-80">
                anshulsharma7162@gmail.com
              </a>
              <a href="tel:+919340233412" className="mt-1 block text-sm text-foreground/60">+91 93402 33412</a>
            </div>
          </aside>

          <form onSubmit={onSubmit} className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-7 sm:p-10">
            <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-aurora opacity-20 blur-3xl" />
            <div className="relative grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="font-mono-tech text-[10px] uppercase tracking-widest text-foreground/50">Name *</span>
                  <input required value={form.name} onChange={set("name")} className={`mt-2 ${inputCls}`} placeholder="Ada Lovelace" />
                </label>
                <label className="block">
                  <span className="font-mono-tech text-[10px] uppercase tracking-widest text-foreground/50">Email *</span>
                  <input required type="email" value={form.email} onChange={set("email")} className={`mt-2 ${inputCls}`} placeholder="you@company.com" />
                </label>
              </div>
              <label className="block">
                <span className="font-mono-tech text-[10px] uppercase tracking-widest text-foreground/50">Company / Org</span>
                <input value={form.company} onChange={set("company")} className={`mt-2 ${inputCls}`} placeholder="Optional" />
              </label>
              <div className="grid gap-5 sm:grid-cols-3">
                <label className="block">
                  <span className="font-mono-tech text-[10px] uppercase tracking-widest text-foreground/50">Project type</span>
                  <select value={form.type} onChange={set("type")} className={`mt-2 ${inputCls}`}>
                    {projectTypes.map((t) => (<option key={t} className="bg-background">{t}</option>))}
                  </select>
                </label>
                <label className="block">
                  <span className="font-mono-tech text-[10px] uppercase tracking-widest text-foreground/50">Budget</span>
                  <select value={form.budget} onChange={set("budget")} className={`mt-2 ${inputCls}`}>
                    {budgets.map((t) => (<option key={t} className="bg-background">{t}</option>))}
                  </select>
                </label>
                <label className="block">
                  <span className="font-mono-tech text-[10px] uppercase tracking-widest text-foreground/50">Timeline</span>
                  <select value={form.timeline} onChange={set("timeline")} className={`mt-2 ${inputCls}`}>
                    {timelines.map((t) => (<option key={t} className="bg-background">{t}</option>))}
                  </select>
                </label>
              </div>
              <label className="block">
                <span className="font-mono-tech text-[10px] uppercase tracking-widest text-foreground/50">Project brief *</span>
                <textarea required value={form.message} onChange={set("message")} rows={6}
                  className={`mt-2 ${inputCls}`} placeholder="What are you building? What's the hard part? Any constraints?" />
              </label>

              <div className="mt-2 flex flex-wrap items-center gap-3">
                <button type="submit" className="rounded-full bg-aurora px-7 py-3 text-sm font-semibold text-primary-foreground glow-primary animate-gradient-flow">
                  Send brief →
                </button>
                <a href={mailto} className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-foreground/90 hover:bg-white/5">
                  Open in mail app
                </a>
                {sent && <span className="text-xs text-[oklch(0.82_0.16_200)]">Opened your mail client — hit send to finish.</span>}
              </div>
              <p className="text-[11px] text-foreground/40">
                Submitting opens your default mail client with the brief prefilled to anshulsharma7162@gmail.com.
              </p>
            </div>
          </form>
        </div>
      </Section>
    </SiteShell>
  );
}