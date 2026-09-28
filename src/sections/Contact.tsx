import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icons";
import { InstagramPill } from "@/components/InstagramPill";
import { LineMaskTitle, Reveal } from "@/components/Reveal";
import { StampSeal } from "@/components/StampSeal";
import { brand, budgets, projectTypes, socials } from "@/config/site";
import { cn } from "@/utils/cn";

/* ============================================================================
   09 — CONTACT / LET'S WORK TOGETHER
   ✏️ Edit contact details in src/config/site.ts → `brand`, `socials`
   ========================================================================== */

type FormState = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
};

const emptyForm: FormState = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  budget: "",
  message: "",
};

const fieldClass =
  "w-full rounded-xl bg-cream px-4 py-3.5 text-[0.95rem] font-light text-ink ring-1 ring-line outline-none transition-all duration-300 placeholder:text-mist/45 focus:ring-2 focus:ring-rose/70 focus:bg-paper";

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-[0.62rem] tracking-[0.2em] text-mist uppercase">
      {children}
    </label>
  );
}

function ErrorText({ id, children }: { id: string; children?: string }) {
  if (!children) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 flex items-center gap-1.5 text-[0.72rem] text-rose">
      <Icon name="sparkle" size={11} />
      {children}
    </p>
  );
}

export function Contact() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const update = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(brand.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${brand.email}`;
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: Partial<Record<keyof FormState, string>> = {};
    if (form.name.trim().length < 2) next.name = "Please tell me your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email)) next.email = "A valid email, please";
    if (!form.projectType) next.projectType = "Pick the closest option";
    if (form.message.trim().length < 12) next.message = "A sentence or two about the project";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    /* No backend needed: the brief opens in the visitor's own email app,
       addressed to you. Deploy-friendly on GitHub Pages / Vercel as-is. */
    const subject = `New project enquiry — ${form.projectType}${form.company ? ` (${form.company})` : ""}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.company ? `Brand / business: ${form.company}` : "",
      `Project type: ${form.projectType}`,
      form.budget ? `Budget: ${form.budget}` : "",
      "",
      form.message,
      "",
      `— sent from madebyazka.vercel.app`,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const contactRows = [
    { icon: "mail", label: "Email", value: brand.email, href: `mailto:${brand.email}` },
    { icon: "instagram", label: "Instagram", value: `${brand.handle} — DMs are open`, href: brand.instagramUrl },
    { icon: "linkedin", label: "LinkedIn", value: "Connect with me", href: brand.linkedinUrl },
    { icon: "pin", label: "Location", value: `${brand.location} · ${brand.workingWith}` },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-cream py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(55%_100%_at_50%_0%,rgba(239,213,209,0.7),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* ---------------- dark panel ---------------- */}
          <Reveal variant="left" className="lg:col-span-5">
            <div className="relative flex h-full flex-col overflow-hidden rounded-[1.9rem] bg-plum p-8 text-cream shadow-lift sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(207,157,151,0.45),transparent_65%)] blur-xl"
              />
              <div className="relative">
                <p className="eyebrow text-rose">08 — Let's work together</p>
                <LineMaskTitle
                  as="h2"
                  lines={["Tell me about", "your brand."]}
                  className="mt-5 font-display text-[clamp(2.1rem,4.4vw,3.2rem)] leading-[1.03] font-light"
                />
                <p className="mt-5 max-w-md text-[1rem] leading-[1.8] font-light text-blush/75">
                  Tell me what you need — a logo, Instagram posts, a poster or a whole little brand. I
                  reply {brand.responseTime.toLowerCase()} with honest advice, my availability and a
                  beginner-friendly quote in PKR.
                </p>

                {/* contact rows */}
                <ul className="mt-9 space-y-1">
                  {contactRows.map((row) => {
                    const content = (
                      <>
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cream/10 text-blush ring-1 ring-cream/15 transition-all duration-500 group-hover:bg-rose group-hover:text-plum group-hover:ring-rose">
                          <Icon name={row.icon} size={18} />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[0.6rem] tracking-[0.22em] text-blush/55 uppercase">
                            {row.label}
                          </span>
                          <span className="mt-1 block truncate font-display text-[1.02rem] font-light text-cream">
                            {row.value}
                          </span>
                        </span>
                        {row.href && (
                          <Icon
                            name="arrowUpRight"
                            size={16}
                            className="ml-auto shrink-0 text-blush/50 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blush"
                          />
                        )}
                      </>
                    );
                    return (
                      <li key={row.label}>
                        {row.href ? (
                          <a
                            href={row.href}
                            {...(row.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            className="group flex items-center gap-4 rounded-2xl px-2 py-3 transition-colors duration-500 hover:bg-cream/8"
                          >
                            {content}
                          </a>
                        ) : (
                          <div className="group flex items-center gap-4 rounded-2xl px-2 py-3">{content}</div>
                        )}
                      </li>
                    );
                  })}
                </ul>

                {/* email copy */}
                <button
                  type="button"
                  onClick={copyEmail}
                  className="group mt-6 flex w-full items-center justify-between gap-3 rounded-2xl bg-cream/10 px-5 py-4 text-left ring-1 ring-cream/15 transition-all duration-500 hover:bg-cream/16"
                >
                  <span className="font-body text-[0.85rem] tracking-wide text-blush">{brand.email}</span>
                  <span className="flex items-center gap-2 text-[0.62rem] tracking-[0.18em] text-cream uppercase">
                    {copied ? (
                      <>
                        <Icon name="check" size={14} className="text-rose" /> Copied
                      </>
                    ) : (
                      <>
                        <Icon name="copy" size={14} /> Copy
                      </>
                    )}
                  </span>
                </button>

                <div className="mt-8 border-t border-cream/15 pt-7">
                  <InstagramPill tone="light" size="md" className="w-full justify-between" />
                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    {socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${s.label} — ${s.handle}`}
                        title={`${s.label} · ${s.handle}`}
                        className="grid h-10 w-10 place-items-center rounded-full bg-cream/8 text-blush ring-1 ring-cream/15 transition-all duration-500 hover:-translate-y-1 hover:bg-blush hover:text-plum"
                      >
                        <Icon name={s.icon} size={17} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* watermark seal — clipped softly by the panel corner */}
              <StampSeal
                text="let's create · together · let's create · together · "
                tone="light"
                size={190}
                center="heart"
                className="pointer-events-none absolute -bottom-16 -right-14 hidden opacity-20 sm:grid"
              />
            </div>
          </Reveal>

          {/* ---------------- form ---------------- */}
          <Reveal variant="right" delay={120} className="lg:col-span-7">
            <div className="relative h-full rounded-[1.9rem] bg-paper p-7 ring-1 ring-line shadow-soft sm:p-10">
              {sent ? (
                <div className="fade-in flex h-full min-h-[30rem] flex-col items-center justify-center text-center">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-petal text-plum ring-1 ring-blush">
                    <Icon name="check" size={30} strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-7 font-display text-[clamp(1.8rem,3.4vw,2.6rem)] leading-tight font-light text-plum">
                    Thank you, {form.name.split(" ")[0] || "lovely"}.
                  </h3>
                  <p className="mt-4 max-w-md text-[1rem] leading-relaxed font-light text-mist">
                    Your email app should have opened with the message ready to send. If it didn't,
                    write to me directly at{" "}
                    <a href={`mailto:${brand.email}`} className="link-underline text-plum">
                      {brand.email}
                    </a>{" "}
                    or DM {brand.handle} — I read everything myself and reply{" "}
                    {brand.responseTime.toLowerCase()}.
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <Button
                      variant="outline"
                      icon="arrowLeft"
                      onClick={() => {
                        setSent(false);
                        setForm(emptyForm);
                      }}
                    >
                      Write another
                    </Button>
                    <Button href={brand.instagramUrl} icon="instagram">
                      DM me on Instagram
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="space-y-6">
                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <h3 className="font-display text-[1.7rem] leading-tight font-light text-plum">
                        Start a project
                      </h3>
                      <p className="mt-1.5 text-[0.9rem] font-light text-mist">
                        All fields marked * are required.
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-petal px-3.5 py-2 text-[0.62rem] tracking-[0.16em] text-plum uppercase ring-1 ring-blush">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-rose" />
                      {brand.availability}
                    </span>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="name">Your name *</Label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={update}
                        placeholder="Your name"
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className={cn(fieldClass, errors.name && "ring-2 ring-rose/70")}
                      />
                      <ErrorText id="name-error">{errors.name}</ErrorText>
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={update}
                        placeholder="you@brand.com"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={cn(fieldClass, errors.email && "ring-2 ring-rose/70")}
                      />
                      <ErrorText id="email-error">{errors.email}</ErrorText>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company">Brand / company</Label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={update}
                      placeholder="Optional — helps me research before replying"
                      className={fieldClass}
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="projectType">Project type *</Label>
                      <div className="relative">
                        <select
                          id="projectType"
                          name="projectType"
                          value={form.projectType}
                          onChange={update}
                          aria-invalid={Boolean(errors.projectType)}
                          aria-describedby={errors.projectType ? "type-error" : undefined}
                          className={cn(fieldClass, "appearance-none pr-11", !form.projectType && "text-mist/60")}
                        >
                          <option value="">Select one…</option>
                          {projectTypes.map((p) => (
                            <option key={p} value={p}>
                              {p}
                            </option>
                          ))}
                        </select>
                        <Icon
                          name="chevronDown"
                          size={16}
                          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-mist"
                        />
                      </div>
                      <ErrorText id="type-error">{errors.projectType}</ErrorText>
                    </div>
                    <div>
                      <Label htmlFor="budget">Budget range</Label>
                      <div className="relative">
                        <select
                          id="budget"
                          name="budget"
                          value={form.budget}
                          onChange={update}
                          className={cn(fieldClass, "appearance-none pr-11", !form.budget && "text-mist/60")}
                        >
                          <option value="">Select a range…</option>
                          {budgets.map((b) => (
                            <option key={b} value={b}>
                              {b}
                            </option>
                          ))}
                        </select>
                        <Icon
                          name="chevronDown"
                          size={16}
                          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-mist"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">About the project *</Label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={update}
                      placeholder="What are you making, who is it for, and when do you need it?"
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={cn(fieldClass, "resize-none", errors.message && "ring-2 ring-rose/70")}
                    />
                    <div className="mt-1.5 flex items-start justify-between gap-4">
                      <ErrorText id="message-error">{errors.message}</ErrorText>
                      <span className="ml-auto shrink-0 text-[0.66rem] text-mist/60 tabular-nums">
                        {form.message.length}/600
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                    <Button type="submit" size="lg" icon="arrowUpRight">
                      Send the brief
                    </Button>
                    <p className="max-w-[16rem] text-right text-[0.72rem] leading-relaxed font-light text-mist">
                      <Icon name="heart" size={12} className="mr-1 inline text-rose" />
                      Sending opens your email app with everything filled in — or just DM{" "}
                      {brand.handle}.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
