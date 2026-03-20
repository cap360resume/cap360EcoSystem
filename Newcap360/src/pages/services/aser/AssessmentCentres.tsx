import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import ASERSubNavbar from "@/components/ASERSubNavbar";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Users, ClipboardList, Presentation, Award, Star, Zap, ShieldCheck, Clock, Globe2, ChevronDown, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useRef, useState } from "react";
import heroImg from "@/assets/service-hero-aser.jpg";

/* ─── DATA ─────────────────────────────────────────────── */

const solutions = [
  { icon: ClipboardList, title: "Assessment Centre Design", description: "Bespoke assessment centres with tailored exercises, simulations, and behavioural indicators aligned to your role and organizational requirements.", tag: "Design", stat: "100% bespoke", accent: "bg-cap-blue", detail: "Every centre is built from scratch around your exact requirements — no generic templates." },
  { icon: Users, title: "Development Centre Facilitation", description: "Facilitated development centres that combine assessment with coaching, creating personalized development roadmaps for participants.", tag: "Development", stat: "360° insight", accent: "bg-cap-orange", detail: "360-degree talent view combining behavioural observation, psychometrics, and live coaching." },
  { icon: Presentation, title: "Virtual Assessment Centres", description: "Technology-enabled virtual assessment solutions that maintain rigour and validity while offering flexibility and cost efficiency.", tag: "Virtual", stat: "Global delivery", accent: "bg-cap-green", detail: "Digital-first delivery with the same rigour and validity as face-to-face, across any geography." },
  { icon: Award, title: "Assessor Training & Calibration", description: "Comprehensive assessor certification programmes ensuring consistent, unbiased, and legally defensible assessment practices.", tag: "Training", stat: "ISO-aligned", accent: "bg-cap-red", detail: "Assessors certified to international standards, calibrated before every centre." },
];

const outcomes = [
  { value: "94%", label: "Role-success prediction accuracy", color: "text-cap-orange" },
  { value: "2×", label: "Faster hi-po identification", color: "text-cap-blue" },
  { value: "40%", label: "Reduction in mis-hires", color: "text-cap-green" },
  { value: "120+", label: "Organisations served", color: "text-cap-orange" },
];

const capabilities = [
  { icon: ShieldCheck, title: "Legally defensible", desc: "BPS, SHL & EEOC compliant. Every exercise is bias-audited." },
  { icon: Zap, title: "AI-augmented scoring", desc: "60% faster turnaround. Second-layer objectivity on every rating." },
  { icon: Globe2, title: "14 languages", desc: "Culturally normed exercises across 36 countries." },
  { icon: Clock, title: "4-week deployment", desc: "Brief to live centre in as little as four weeks." },
];

const steps = [
  { num: "01", title: "Role & Competency Mapping", desc: "We collaborate with your HR and business leaders to define the exact competencies, success profiles, and role requirements that will anchor every exercise." },
  { num: "02", title: "Exercise & Tool Design", desc: "Psychologists design in-trays, role-plays, group tasks, and case studies that mirror real challenges your people face on the job — no off-the-shelf templates." },
  { num: "03", title: "Assessor Briefing & Calibration", desc: "Every assessor — internal or external — is trained on behavioural observation, calibrated for consistency, and blind-tested before the centre goes live." },
  { num: "04", title: "Centre Delivery", desc: "We manage end-to-end logistics: scheduling, facilitation, live proctoring, AI-assisted scoring — in-person or fully virtual, at any scale globally." },
  { num: "05", title: "Reports & Development Planning", desc: "Participants get personalised feedback within 48 hours. Leaders get talent dashboards, succession readiness scores, and 90-day development action plans." },
];

const testimonials = [
  { quote: "The development centre gave our senior leaders a clear, objective picture of succession readiness across the whole organisation.", author: "CHRO", company: "Top-tier MENA Bank", rating: 5 },
  { quote: "Running virtual centres across five countries simultaneously — flawless delivery, zero dropouts, and the reports were incredibly actionable.", author: "Head of Talent", company: "Pan-African Telecom Group", rating: 5 },
];

const faqs = [
  { q: "How long does it take to design a centre?", a: "3–4 weeks using our modular library. Fully custom builds take 6–8 weeks." },
  { q: "Can everything run fully online?", a: "Yes — remote exercises, live assessor observation, AI scoring, and digital reports are all supported." },
  { q: "How do you ensure assessor objectivity?", a: "Behavioural observation training + calibration sessions + AI scoring creates three independent layers of consistency." },
  { q: "What roles are ACs best suited for?", a: "Leadership selection, hi-po identification, graduate intake, and succession planning yield the highest ROI." },
];

const clients = ["Banking", "Telecom", "Health", "Insurance", "Life Sciences", "Retail", "Public Sector", "Tech"];

/* ─── COMPONENT ─────────────────────────────────────────── */

const AssessmentCentres = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { ref: solRef, isInView: solInView } = useScrollAnimation(0.05);
  const { ref: stepsRef, isInView: stepsInView } = useScrollAnimation(0.05);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroImgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SubNavbar title="Services" titlePath="/what-we-do" items={[
        { label: "ASER", path: "/what-we-do/services/aser" },
        { label: "HRCAMS", path: "/what-we-do/services/hrcams" },
        { label: "TCB", path: "/what-we-do/services/tcb" },
        { label: "PACE", path: "/what-we-do/services/pace" },
      ]} />
      <ASERSubNavbar />

      {/* ══════════════════════════════════════
          HERO — full-bleed, massive headline
      ══════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroImgY }}>
          <img src={heroImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background from-40% via-background/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </motion.div>

        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "48px 48px" }} />

        <motion.div style={{ opacity: heroOpacity }} className="relative container mx-auto px-4 lg:px-8 pt-32 pb-24 max-w-5xl">

          <motion.div className="inline-flex items-center gap-2 mb-8"
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-[11px] tracking-widest font-bold uppercase text-muted-foreground">ASER</span>
            <span className="w-1 h-1 rounded-full bg-cap-orange" />
            <span className="text-[11px] tracking-widest font-bold uppercase text-cap-orange">Assessment & Development Centres</span>
          </motion.div>

          <motion.h1
            className="text-[52px] md:text-[72px] lg:text-[90px] font-black tracking-tight leading-[0.95] mb-8 max-w-3xl"
            initial={{ opacity: 0, y: 48 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15 }}>
            See talent<br />
            <span className="text-cap-orange">clearly.</span>
          </motion.h1>

          <motion.p className="text-[19px] md:text-[22px] text-muted-foreground leading-[1.55] max-w-xl mb-12"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}>
            Our assessment and development centres deliver the most comprehensive, science-backed view of who your people are — and what they're capable of.
          </motion.p>

          <motion.div className="flex flex-wrap items-center gap-5 mb-16"
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
            <a href="#solutions"
              className="group inline-flex items-center gap-3 bg-cap-orange text-white px-9 py-5 text-[15px] font-bold hover:bg-cap-orange/90 transition-all">
              Explore solutions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#process"
              className="inline-flex items-center gap-3 text-[15px] font-semibold text-foreground/70 hover:text-foreground transition-colors border-b border-foreground/20 pb-0.5 hover:border-foreground/60">
              How it works
            </a>
          </motion.div>

          {/* 4 stat pills */}
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}>
            {outcomes.map((o) => (
              <div key={o.value} className="bg-card/80 backdrop-blur border border-border/30 px-5 py-4">
                <span className={`text-[28px] font-black block leading-none mb-1 ${o.color}`}>{o.value}</span>
                <span className="text-[11px] text-muted-foreground leading-snug">{o.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
          <span className="text-[10px] tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.4 }}>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          TICKER
      ══════════════════════════════════════ */}
      <div className="border-y border-border/20 py-5 overflow-hidden bg-card/40">
        <motion.div className="flex gap-12 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 18, ease: "linear" }}>
          {[...clients, ...clients].map((c, i) => (
            <span key={i} className="text-[13px] font-semibold tracking-widest uppercase text-muted-foreground/50">{c}</span>
          ))}
        </motion.div>
      </div>

      {/* ══════════════════════════════════════
          CAPABILITIES — borderless grid
      ══════════════════════════════════════ */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-border/30">
            {capabilities.map((c, i) => (
              <motion.div key={c.title}
                className={`p-8 group hover:bg-cap-blue/5 transition-all ${i < 3 ? "lg:border-r border-border/30" : ""} ${i < 2 ? "md:border-r" : ""}`}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 * i }}>
                <div className="w-12 h-12 bg-cap-blue/10 flex items-center justify-center mb-6 group-hover:bg-cap-blue/20 transition-colors">
                  <c.icon className="w-6 h-6 text-cap-blue" />
                </div>
                <h3 className="text-[15px] font-bold mb-2">{c.title}</h3>
                <p className="text-[13px] text-muted-foreground leading-[1.65]">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SOLUTIONS — tabbed showcase
      ══════════════════════════════════════ */}
      <section id="solutions" className="py-24 section-navy" ref={solRef}>
        <div className="container mx-auto px-4 lg:px-8">

          <motion.div className="mb-12"
            initial={{ opacity: 0, y: 20 }} animate={solInView ? { opacity: 1, y: 0 } : {}}>
            <p className="text-[11px] font-bold tracking-widest text-cap-orange uppercase mb-3">What we deliver</p>
            <h2 className="text-[36px] md:text-[48px] font-black leading-tight">Our solutions</h2>
          </motion.div>

          {/* Tab pills */}
          <motion.div className="flex flex-wrap gap-2 mb-8"
            initial={{ opacity: 0 }} animate={solInView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}>
            {solutions.map((s, i) => (
              <button key={s.title} onClick={() => setActiveTab(i)}
                className={`px-5 py-2.5 text-[13px] font-semibold transition-all border ${activeTab === i ? "bg-cap-orange text-white border-cap-orange" : "border-border/40 text-muted-foreground hover:text-foreground hover:border-foreground/30"}`}>
                {s.tag}
              </button>
            ))}
          </motion.div>

          {/* Big split card */}
          <AnimatePresence mode="wait">
            {solutions.map((s, i) => activeTab === i && (
              <motion.div key={s.title}
                className="grid lg:grid-cols-2 gap-0 border border-border/30 bg-card overflow-hidden"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}>
                <div className="p-10 lg:p-14">
                  <div className={`w-14 h-14 ${s.accent} flex items-center justify-center mb-8`}>
                    <s.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-[28px] font-black mb-5">{s.title}</h3>
                  <p className="text-[16px] text-muted-foreground leading-[1.7] mb-8">{s.description}</p>
                  <div className="space-y-3 mb-10">
                    {["Tailored to your competency framework", "Delivered in-person or virtually", "Full reporting & debrief included"].map((b) => (
                      <div key={b} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-cap-green flex-shrink-0" />
                        <span className="text-[14px]">{b}</span>
                      </div>
                    ))}
                  </div>
                  <a href="#" className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-[14px] font-bold hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                <div className={`${s.accent} p-10 lg:p-14 flex flex-col justify-between`}>
                  <div>
                    <p className="text-[12px] font-bold tracking-widest uppercase text-white/60 mb-6">Key outcome</p>
                    <span className="text-[72px] font-black text-white leading-none block mb-4">{s.stat}</span>
                    <p className="text-[16px] text-white/80 leading-[1.6]">{s.detail}</p>
                  </div>
                  <div className="mt-10 pt-8 border-t border-white/20">
                    <p className="text-[12px] font-semibold text-white/50 uppercase tracking-widest mb-1">Typical turnaround</p>
                    <p className="text-[22px] font-black text-white">4 – 8 weeks</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Mini card row */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
            {solutions.map((s, i) => (
              <motion.button key={s.title} onClick={() => setActiveTab(i)}
                className={`text-left p-5 border transition-all group ${activeTab === i ? "border-cap-orange/60 bg-cap-orange/5" : "border-border/30 hover:border-border/60"}`}
                initial={{ opacity: 0, y: 16 }} animate={solInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 * i + 0.3 }}>
                <s.icon className={`w-6 h-6 mb-3 transition-colors ${activeTab === i ? "text-cap-orange" : "text-muted-foreground"}`} />
                <p className={`text-[13px] font-bold ${activeTab === i ? "text-cap-orange" : "text-foreground"}`}>{s.title}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROCESS — large numbered rows
      ══════════════════════════════════════ */}
      <section id="process" className="py-24" ref={stepsRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div className="mb-20"
            initial={{ opacity: 0, y: 20 }} animate={stepsInView ? { opacity: 1, y: 0 } : {}}>
            <p className="text-[11px] font-bold tracking-widest text-cap-orange uppercase mb-3">Our process</p>
            <h2 className="text-[36px] md:text-[48px] font-black leading-tight max-w-lg">
              From brief to insight in five steps
            </h2>
          </motion.div>

          <div className="divide-y divide-border/20">
            {steps.map((s, i) => (
              <motion.div key={s.num}
                className="grid md:grid-cols-[120px_1fr] gap-0 group hover:bg-card/50 transition-all"
                initial={{ opacity: 0, y: 30 }} animate={stepsInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 * i }}>
                <div className="py-8 pr-8 flex items-start pt-10">
                  <span className="text-[52px] font-black text-border/40 group-hover:text-cap-orange/30 transition-colors leading-none">{s.num}</span>
                </div>
                <div className="py-8 md:border-l border-border/20 md:pl-10">
                  <div className="flex items-center gap-4 mb-3">
                    <h3 className="text-[20px] font-bold group-hover:text-cap-blue transition-colors">{s.title}</h3>
                    <ArrowRight className="w-4 h-4 text-cap-orange opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </div>
                  <p className="text-[15px] text-muted-foreground leading-[1.7] max-w-2xl">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TESTIMONIALS — dark panel, big quotes
      ══════════════════════════════════════ */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-[11px] font-bold tracking-widest uppercase text-background/40 mb-16">Client voices</p>
          <div className="grid md:grid-cols-2 gap-16">
            {testimonials.map((t, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 * i }}>
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-cap-orange text-cap-orange" />
                  ))}
                </div>
                <p className="text-[22px] md:text-[26px] font-bold leading-[1.45] mb-8">"{t.quote}"</p>
                <div className="border-t border-background/10 pt-6">
                  <p className="text-[14px] font-bold">{t.author}</p>
                  <p className="text-[13px] text-background/50">{t.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FAQ
      ══════════════════════════════════════ */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <motion.div className="mb-14 text-center"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-[11px] font-bold tracking-widest text-cap-orange uppercase mb-3">FAQ</p>
            <h2 className="text-[36px] font-black">Common questions</h2>
          </motion.div>

          <div className="divide-y divide-border/30">
            {faqs.map((faq, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.07 * i }}>
                <button className="w-full flex items-center justify-between py-6 text-left gap-6 group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="text-[17px] font-semibold group-hover:text-cap-blue transition-colors">{faq.q}</span>
                  <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.25 }}>
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div key="a"
                      initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28 }}>
                      <p className="text-[15px] text-muted-foreground leading-[1.75] pb-6">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA — full-bleed orange with bg text
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-cap-orange py-24">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[200px] font-black text-white/10 leading-none whitespace-nowrap">ASER</span>
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <p className="text-[12px] font-bold tracking-widest uppercase text-white/60 mb-4">Design your next centre with us</p>
            <h2 className="text-[40px] md:text-[52px] font-black text-white leading-tight mb-4">
              Ready to see your talent clearly?
            </h2>
            <p className="text-[17px] text-white/80 leading-[1.6]">
              Brief to live centre in as little as four weeks. Talk to our experts today.
            </p>
          </div>
          <div className="flex flex-col gap-4 flex-shrink-0">
            <a href="/contact"
              className="inline-flex items-center gap-3 bg-white text-cap-orange px-10 py-5 text-[16px] font-black hover:gap-4 transition-all">
              Get started <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/what-we-do/services/aser"
              className="text-center text-[14px] text-white/70 hover:text-white transition-colors">
              ← Back to ASER
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AssessmentCentres;