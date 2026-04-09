import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import ASERSubNavbar from "@/components/ASERSubNavbar";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Settings,
  Users,
  BarChart3,
  Building2,
  Award,
  ChevronLeft,
  ChevronRight,
  Check,
  CheckCircle2,
  TrendingUp,
  Target,
  Zap,
  Brain,
  MessageSquare,
  ClipboardList,
  Layers,
  LineChart,
  Lightbulb,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import heroImg from "@/assets/service-hero-aser.jpg";
import trending1 from "@/assets/trending-1.jpg";
import trending2 from "@/assets/trending-2.jpg";
import trending3 from "@/assets/trending-3.jpg";
import trending4 from "@/assets/trending-4.jpg";
import card1 from "@/assets/card-1.jpg";
import LabourLaw from "@/assets/labourlow.webp";
import Performance from "@/assets/Performance.png";

const serviceSubNav = [
  { label: "What to do", path: "#services" },
  { label: "What's trending", path: "#trending" },
  { label: "Partners", path: "#partners" },
  { label: "How we work", path: "#how-we-work" },
  { label: "Careers", path: "/careers" },
];

const trendingImages = [trending1, trending2, trending3, trending4];

// Mosaic image cells
const mosaicImages = [Performance, LabourLaw];

const subServices = [
  {
    icon: BarChart3,
    title: "Competency-Based Assessments",
    title2: "Measuring What Truly Predicts Performance",
    description:
      "Scientifically designed assessments that measure behavioral competencies, cognitive abilities, and domain-specific knowledge aligned to your organizational framework and role requirements.",
    path: "/what-we-do/services/aser/competency-assessments",
  },
  {
    icon: Users,
    title: "Assessment & Development Centres",
    title2: "360° Insights Into Leadership Potential and Role Readiness",
    description:
      "Multi-method, multi-assessor evaluation programmes that provide deep insights into leadership potential, critical thinking, and readiness for pivotal roles across your organization.",
    path: "/what-we-do/services/aser/assessment-centres",
  },
  {
    icon: Brain,
    title: "Psychometric Testing",
    title2: "Validated Science Behind Every Talent Decision",
    description:
      "Deploy validated psychometric instruments measuring personality traits, aptitude, and emotional intelligence — ensuring every recruitment and development decision is grounded in data.",
    path: "/what-we-do/services/aser/psychometric-testing",
  },
  {
    icon: LineChart,
    title: "Talent Analytics & Benchmarking",
    title2: "Turning Talent Data Into Strategic Intelligence",
    description:
      "Data-driven talent analytics that benchmark individual and team capabilities against industry standards, revealing gaps and opportunities across your entire workforce.",
    path: "/what-we-do/services/aser/talent-analytics",
  },
  {
    icon: ClipboardList,
    title: "360° Feedback & Leadership Diagnostics",
    title2: "Unlocking Self-Awareness and Leadership Growth",
    description:
      "Structured multi-rater feedback processes that help leaders understand their impact, identify blind spots, and accelerate personal and professional development.",
    path: "/what-we-do/services/aser/360-feedback",
  },
  {
    icon: Lightbulb,
    title: "AI-Powered Talent Intelligence",
    title2: "Redefining Assessment with Generative AI",
    description:
      "Leverage AI-driven simulations, adaptive assessments, and predictive models to identify high-potential talent faster and with greater precision than traditional methods.",
    path: "/what-we-do/services/aser/ai-talent-intelligence",
  },
];

const trendingInsights = [
  {
    category: "RESEARCH REPORT",
    title: "The Science of Assessment: Predicting Performance in 2026",
    description:
      "How next-generation psychometric tools are raising the accuracy bar for talent prediction.",
  },
  {
    category: "PERSPECTIVE",
    title: "Beyond IQ: The Rise of Emotional Intelligence Assessments",
    description:
      "Why EQ is becoming the defining predictor of leadership success in the modern workplace.",
  },
  {
    category: "BLOG",
    title: "Assessment Centres in a Virtual World",
    description:
      "How leading organizations are delivering immersive, bias-free assessments at global scale.",
  },
  {
    category: "RESEARCH REPORT",
    title: "AI-Powered Talent Analytics: Opportunities & Ethics",
    description:
      "Navigating the promise and responsibility of AI-driven talent decisions.",
  },
  {
    category: "PERSPECTIVE",
    title: "Building a Talent Intelligence Function from Scratch",
    description:
      "A practical guide to embedding data-driven assessment into your talent strategy.",
  },
];

const partners = [
  {
    name: "Hogan Assessments",
    description:
      "World-leading personality assessments for predicting workplace performance and leadership.",
  },
  {
    name: "SHL",
    description:
      "Global leader in talent measurement, providing validated assessments across all levels.",
  },
  {
    name: "Korn Ferry",
    description:
      "Organizational consulting firm delivering leadership and talent development solutions.",
  },
  {
    name: "MeritTrac",
    description:
      "India's largest assessment services company powering large-scale talent evaluation.",
  },
];

const gcCapabilities = [
  "24/7 Assessment Operations: Seamless delivery across time zones for global talent programmes",
  "Certified Assessors: Trained and accredited assessors ensuring objectivity and consistency",
  "Scalability: Rapidly scale assessment programmes from 50 to 50,000 candidates",
  "Cost Efficiency: Enterprise-grade assessments at optimized cost structures",
  "Digital-First Delivery: End-to-end online assessment platforms with proctoring and analytics",
  "Security & Compliance: GDPR-compliant, bias-audited, and legally defensible processes",
];

const targetAudiences = [
  "Large Enterprises: Designing complex, competency-based assessment architectures for global workforces",
  "Mid-Market Organizations: Scaling talent identification while maintaining assessment rigour",
  "Growth-Stage Companies: Building talent evaluation foundations that support rapid hiring",
  "Private Equity Backed Firms: Assessing leadership quality and capability gaps across portfolio companies",
  "Public Sector Organizations: Running transparent, merit-based assessment processes at scale",
];

const phases = [
  {
    step: "01",
    title: "Discovery & Framework Design",
    desc: "We conduct a thorough analysis of your role requirements, competency frameworks, and talent strategy. This phase identifies what capabilities to assess and maps them to validated measurement tools.",
    icon: Target,
  },
  {
    step: "02",
    title: "Tool Selection & Customization",
    desc: "Based on our findings, we select and customize the right mix of psychometric, situational, and competency tools — building an assessment architecture that is precise, fair, and fit-for-purpose.",
    icon: Zap,
  },
  {
    step: "03",
    title: "Assessment Delivery & Evaluation",
    desc: "Our trained assessors and digital platforms deliver assessments with consistency and rigour. Multi-rater, multi-method evaluation ensures every decision is objective, defensible, and insightful.",
    icon: TrendingUp,
  },
  {
    step: "04",
    title: "Insights, Reporting & Action Planning",
    desc: "Detailed individual and group reports translate assessment data into clear development actions. We guide your leaders and HR teams to act decisively on findings.",
    icon: CheckCircle2,
  },
];

const ASER = () => {
  const { ref: statsRef, isInView: statsInView } = useScrollAnimation(0.2);
  const { ref: servicesRef, isInView: servicesInView } = useScrollAnimation(0.1);
  const { ref: offerRef, isInView: offerInView } = useScrollAnimation(0.1);
  const { ref: gcRef, isInView: gcInView } = useScrollAnimation(0.1);
  const { ref: howWeWorkRef, isInView: howWeWorkInView } = useScrollAnimation(0.1);
  const { ref: trendingRef, isInView: trendingInView } = useScrollAnimation(0.1);
  const { ref: partnersRef, isInView: partnersInView } = useScrollAnimation(0.1);
  const { ref: leadersRef, isInView: leadersInView } = useScrollAnimation(0.1);
  const { ref: phaseRef, isInView: phaseInView } = useScrollAnimation(0.1);
  const navigate = useNavigate();
  const trendingScrollRef = useRef<HTMLDivElement>(null);

  const scrollTrending = (dir: "left" | "right") => {
    if (trendingScrollRef.current) {
      trendingScrollRef.current.scrollBy({
        left: dir === "left" ? -340 : 340,
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // ── Mosaic grid layout builder ──────────────────────────────────────────────
  type MosaicCell =
    | { type: "card"; item: (typeof subServices)[0]; index: number }
    | { type: "image"; src: string };

  const buildMosaicRows = (): MosaicCell[][] => {
    const rows: MosaicCell[][] = [];
    let cardIdx = 0;
    let imgIdx = 0;
    const PATTERN: Array<["card" | "image", "card" | "image"]> = [
      ["card", "card"],
      ["image", "card"],
      ["card", "image"],
      ["card", "card"],
    ];
    let patternRow = 0;

    while (cardIdx < subServices.length) {
      const [left, right] = PATTERN[patternRow % PATTERN.length];
      const row: MosaicCell[] = [];

      for (const slot of [left, right]) {
        if (slot === "card") {
          if (cardIdx < subServices.length) {
            row.push({
              type: "card",
              item: subServices[cardIdx],
              index: cardIdx,
            });
            cardIdx++;
          }
        } else {
          row.push({
            type: "image",
            src: mosaicImages[imgIdx % mosaicImages.length],
          });
          imgIdx++;
        }
      }

      if (row.length > 0) rows.push(row);
      patternRow++;
    }

    return rows;
  };

  const stats = [
    {
      value: "50K+",
      desc: "professionals assessed across MENA, Africa and South Asia",
    },
    {
      value: "85%+",
      desc: "prediction accuracy for future job performance using our frameworks",
    },
    {
      value: "3x",
      desc: "faster leadership pipeline development compared to traditional methods",
    },
    {
      value: "Only 22%",
      desc: 'of organizations say they use validated, science-backed assessments consistently across all hiring levels.',
    },
  ];

  const mosaicRows = buildMosaicRows();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SubNavbar
        title="ASER"
        titlePath="/what-we-do/services/aser"
        items={serviceSubNav}
      />

      {/* ===== HERO ===== */}
      <section className="relative min-h-[90vh] flex items-center bg-background overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 py-32">
          <motion.h1
            className="text-[40px] md:text-[56px] lg:text-[72px] font-black tracking-tight leading-[1.05] mb-6 max-w-3xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Assessment services & evaluation solutions
          </motion.h1>
          <motion.p
            className="text-[18px] md:text-[20px] text-muted-foreground leading-[1.6] max-w-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Unlock the true potential of your workforce with scientifically validated assessment solutions that identify, evaluate, and develop talent at every level — powered by our Global Assessment Delivery Center.
          </motion.p>

          <motion.div
            className="flex gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <button className="bg-cap-orange text-background px-8 py-4 font-semibold hover:bg-cap-orange/90 transition-all hover:shadow-xl rounded-md">
              Schedule a Consultation
            </button>
            <button
              onClick={() => {
                const section = document.getElementById("services");
                if (section) {
                  const yOffset = -80;
                  const y =
                    section.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className="border border-foreground/30 text-foreground px-8 py-4 font-semibold hover:border-cap-orange/50 hover:bg-cap-orange/10 transition-all rounded-md"
            >
              Explore Solutions
            </button>
          </motion.div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-20 border-y border-border/20" ref={statsRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            className="text-[26px] md:text-[32px] font-bold mb-16"
            initial={{ opacity: 0 }}
            animate={statsInView ? { opacity: 1 } : {}}
          >
            ASER now
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.value}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i }}
              >
                <div className="w-12 h-1 bg-gradient-to-r from-cap-orange to-cap-red mb-6 group-hover:w-16 transition-all duration-300" />
                <span className="text-[44px] md:text-[52px] font-black text-foreground block mb-2">
                  {stat.value}
                </span>
                <p className="text-[16px] text-muted-foreground leading-[1.6]">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STRATEGIC OVERVIEW ===== */}
      <section
        id="overview"
        className="py-24 bg-gradient-to-b from-background to-secondary/30"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="max-w-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={offerInView ? { opacity: 1, y: 0 } : {}}
            ref={offerRef}
          >
            <div className="mb-10">
              <p className="text-sm text-cap-orange tracking-wide mb-2">
                ABOUT ASER
              </p>
              <h2 className="text-[32px] md:text-[42px] font-bold leading-tight">
                Transforming Talent Decisions Into
                <span className="text-cap-orange"> Competitive Advantage</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="border-l-2 border-cap-orange/40 pl-6">
                <p className="text-[18px] text-muted-foreground leading-[1.8]">
                  <span className="text-foreground font-medium">ASER</span>{" "}
                  (Assessment Services & Evaluation Solutions) is designed to help
                  organizations move beyond intuition-based hiring and build
                  <span className="text-foreground font-medium">
                    {" "}
                    data-driven, high-performance talent pipelines
                  </span>
                  .
                </p>
              </div>

              <div className="border-l-2 border-cap-orange/40 pl-6">
                <p className="text-[18px] text-muted-foreground leading-[1.8]">
                  We go beyond off-the-shelf tools — partnering with organizations to design, deploy, and interpret bespoke assessment architectures, powered by a Global Assessment Delivery Center delivering scale, consistency, and actionable intelligence.
                </p>
              </div>
            </div>

            <div className="mt-12 h-[2px] w-16 bg-cap-orange" />
          </motion.div>
        </div>
      </section>

      {/* ===== SERVICES — MOSAIC GRID ===== */}
      <section id="services" className="py-24" ref={servicesRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            className="text-[32px] md:text-[40px] font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          >
            Reinvent with ASER
          </motion.h2>
          <p className="text-[16px] text-muted-foreground mb-14 max-w-2xl">
            Six integrated assessment solutions designed to transform every stage of the talent lifecycle. Each solution is modular yet interconnected — choose one or combine multiple for end-to-end talent intelligence.
          </p>

          {/* Mosaic grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={servicesInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            style={{ display: "flex", flexDirection: "column", gap: 8 }}
          >
            {mosaicRows.map((row, rowIdx) => (
              <div
                key={rowIdx}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 8,
                }}
              >
                {row.map((cell, colIdx) => {
                  /* ── Image cell ── */
                  if (cell.type === "image") {
                    return (
                      <div
                        key={`img-${rowIdx}-${colIdx}`}
                        style={{
                          height: 240,
                          overflow: "hidden",
                          background: "#111",
                        }}
                      >
                        <img
                          src={cell.src}
                          alt="service visual"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                          }}
                        />
                      </div>
                    );
                  }

                  /* ── Card cell ── */
                  const s = cell.item;
                  const accentHex = [
                    "#f97316",
                    "#f97316",
                    "#f97316",
                    "#f97316",
                    "#f97316",
                    "#f97316",
                  ];

                  return (
                    <motion.div
                      key={s.title}
                      className="mosaic-card group"
                      initial={{ opacity: 0, y: 24 }}
                      animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.08 * cell.index, duration: 0.4 }}
                      onClick={() => navigate(s.path)}
                      style={{
                        position: "relative",
                        background: "hsl(var(--card))",
                        height: 240,
                        padding: "32px 36px 28px",
                        cursor: "pointer",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        fontFamily: "inherit",
                        border: "1px solid hsl(var(--border) / 0.3)",
                      }}
                    >
                      {/* Top color accent bar */}
                      <div
                        style={{
                          width: 32,
                          height: 3,
                          background: accentHex[cell.index % accentHex.length],
                          marginBottom: 16,
                          flexShrink: 0,
                        }}
                      />

                      {/* Eyebrow */}
                      <div
                        style={{
                          fontSize: "1rem",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "hsl(var(--muted-foreground))",
                          marginBottom: 12,
                          flexShrink: 0,
                        }}
                      >
                        {s.title}
                      </div>

                      {/* Title — hidden on hover */}
                      <div
                        className="mosaic-title"
                        style={{
                          fontSize: "1.0rem",
                          fontWeight: 700,
                          lineHeight: 1.3,
                          color: "hsl(var(--foreground))",
                          flex: 1,
                          transition: "opacity 250ms ease",
                        }}
                      >
                        {s.title2}
                      </div>

                      {/* Description — shown on hover */}
                      <div
                        className="mosaic-desc"
                        style={{
                          fontSize: "1rem",
                          fontWeight: 400,
                          lineHeight: 1.65,
                          color: "hsl(var(--muted-foreground))",
                          flex: 1,
                          opacity: 0,
                          position: "absolute",
                          top: 80,
                          left: 36,
                          right: 36,
                          bottom: 60,
                          overflow: "hidden",
                          transition: "opacity 250ms ease",
                          pointerEvents: "none",
                        }}
                      >
                        {s.description}
                      </div>

                      {/* CTA */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          marginTop: "auto",
                          paddingTop: 16,
                          flexShrink: 0,
                          position: "relative",
                          zIndex: 2,
                        }}
                      >
                        <span
                          style={{
                            fontSize: "0.8rem",
                            fontWeight: 600,
                            color: "hsl(var(--foreground))",
                          }}
                        >
                          Learn more
                        </span>
                        <div
                          style={{
                            width: 24,
                            height: 24,
                            background: accentHex[cell.index % accentHex.length],
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <ArrowRight size={11} color="#fff" />
                        </div>
                      </div>

                      {/* Hover gradient overlay */}
                      <div
                        className="mosaic-overlay"
                        style={{
                          position: "absolute",
                          inset: 0,
                          display: "none",
                          transition: "opacity 300ms ease",
                          background: `linear-gradient(135deg, ${accentHex[cell.index % accentHex.length]}18, transparent)`,
                          pointerEvents: "none",
                          zIndex: 0,
                        }}
                      />
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== GLOBAL ASSESSMENT DELIVERY CENTER ===== */}
      <section id="gcc" className="py-24 section-navy" ref={gcRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={gcInView ? { opacity: 1, y: 0 } : {}}
          >
            <h2 className="text-[32px] md:text-[40px] font-bold mb-6 text-foreground">
              Our Competitive Advantage: Global Assessment Delivery Center
            </h2>
            <p className="text-[16px] text-muted-foreground leading-[1.8] max-w-3xl mb-12">
              Our Global Assessment Delivery Center is the operational backbone of ASER. Strategically located to deliver 24/7 assessment support across multiple time zones, our center combines scale, precision, and cost efficiency.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gcCapabilities.map((capability, i) => (
              <motion.div
                key={i}
                className="bg-card/40 border border-border/20 p-6 hover:bg-card/60 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={gcInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i }}
              >
                <div className="w-10 h-10 rounded-lg bg-cap-orange/20 flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-cap-orange" />
                </div>
                <p className="text-[15px] text-muted-foreground leading-[1.7]">
                  {capability}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW WE WORK ===== */}
      <section id="approach" className="py-28 relative">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={phaseInView ? { opacity: 1, y: 0 } : {}}
            ref={phaseRef}
            className="mb-20 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-[34px] md:text-[44px] font-bold mb-6 tracking-tight">
              How We Work With You
            </h2>
            <p className="text-[18px] text-muted-foreground leading-relaxed">
              Every engagement begins with understanding your unique talent challenges and business goals. We follow a structured approach to design and deliver impactful assessments.
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
            initial="hidden"
            animate={phaseInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {phases.map((phase, i) => (
              <motion.div
                key={phase.step}
                className="group relative"
                variants={itemVariants}
              >
                {/* Connector Line */}
                {i < phases.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-[80%] h-[2px] bg-gradient-to-r from-cap-orange/60 to-transparent" />
                )}

                {/* Card */}
                <div className="relative h-full rounded-2xl p-[1px] bg-gradient-to-br from-cap-orange/30 to-transparent hover:from-cap-orange/60 transition-all duration-500">
                  <div className="bg-card/80 backdrop-blur-xl border border-border/30 rounded-2xl p-8 h-full flex flex-col justify-between hover:shadow-xl hover:shadow-cap-orange/10 transition-all duration-500">
                    {/* Top */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-cap-orange/10 text-cap-orange font-bold text-lg mb-4 group-hover:scale-110 transition">
                          {phase.step}
                        </div>
                        <h3 className="text-[18px] font-semibold group-hover:text-cap-orange transition-colors">
                          {phase.title}
                        </h3>
                      </div>
                      <div className="p-3 rounded-xl bg-cap-orange/10 group-hover:bg-cap-orange/20 transition">
                        <phase.icon className="w-6 h-6 text-cap-orange group-hover:scale-110 transition-transform" />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[15px] text-muted-foreground leading-relaxed">
                      {phase.desc}
                    </p>

                    {/* Bottom Accent Line */}
                    <div className="mt-6 h-[2px] w-0 bg-cap-orange group-hover:w-full transition-all duration-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== WHO WE SERVE ===== */}
      <section className="py-32 section-navy relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE - STICKY CONTENT */}
          <div className="lg:sticky top-18 h-fit">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[38px] md:text-[48px] font-bold leading-tight mb-6"
            >
              Who We Serve
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-[17px] leading-relaxed mb-10"
            >
              From hyper-growth startups to complex multinationals, we partner with organizations that take talent decisions seriously — and want the science to back them up.
            </motion.p>

            {/* Highlight Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="p-5 rounded-2xl bg-gradient-to-br from-cap-blue/20 to-transparent border border-cap-blue/30 backdrop-blur-md"
            >
              <p className="text-[17px] text-foreground font-medium">
                We don't just run assessments — we build a talent intelligence capability that powers every hire, promotion, and development decision.
              </p>
            </motion.div>
          </div>

          {/* RIGHT SIDE - TIMELINE STYLE */}
          <div className="relative border-l border-border/30 pl-8 space-y-10">
            {targetAudiences.map((audience, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                {/* Dot */}
                <div className="absolute -left-[38px] top-2 w-4 h-4 rounded-full bg-cap-orange shadow-lg shadow-cap-orange/40 group-hover:scale-125 transition" />

                {/* Card */}
                <div className="p-2 rounded-xl bg-card/50 border border-border/20 hover:border-cap-orange/40 transition-all duration-300 group-hover:-translate-y-1">
                  <p className="text-[16px] text-muted-foreground group-hover:text-foreground transition">
                    {audience}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* INDUSTRIES SECTION */}
        <div className="container mx-auto px-4 lg:px-8 mt-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[24px] font-semibold mb-10"
          >
            Industries We Power
          </motion.h3>

          <div className="flex flex-wrap gap-3">
            {[
              "Financial Services",
              "Technology",
              "Manufacturing",
              "Retail",
              "Healthcare",
              "Telecom",
              "Energy",
              "Hospitality",
            ].map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-5 py-2 rounded-full bg-card/40 border border-border/20 text-[16px] text-muted-foreground hover:border-cap-orange/50 hover:text-foreground transition cursor-pointer"
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </div>

        {/* BACKGROUND LIGHT */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cap-orange/10 blur-[140px] rounded-full pointer-events-none" />
      </section>

      {/* ===== TRENDING ===== */}
      <section id="trending" className="py-24" ref={trendingRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <motion.h2
              className="text-[32px] md:text-[40px] font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={trendingInView ? { opacity: 1, y: 0 } : {}}
            >
              What's trending with ASER?
            </motion.h2>
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => scrollTrending("left")}
                className="p-2 border border-border/40 text-foreground/60 hover:text-foreground transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollTrending("right")}
                className="p-2 border border-border/40 text-foreground/60 hover:text-foreground transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="mb-12">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[16px] font-semibold text-foreground hover:gap-3 transition-all"
            >
              View all work{" "}
              <span className="inline-flex items-center justify-center w-7 h-7 bg-cap-orange text-background rounded-sm">
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </div>
          <div
            ref={trendingScrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
          >
            {trendingInsights.map((item, i) => (
              <motion.div
                key={item.title}
                className="flex-shrink-0 w-[320px] overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, x: 40 }}
                animate={trendingInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
              >
                <div className="relative h-[380px] overflow-hidden">
                  <img
                    src={trendingImages[i % trendingImages.length]}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <span className="text-[11px] font-bold text-foreground/70 uppercase tracking-[0.15em] mb-3">
                      {item.category}
                    </span>
                    <h3 className="text-[20px] font-bold text-foreground leading-snug mb-2">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARTNERS ===== */}
      {/* <section id="partners" className="py-24 section-navy" ref={partnersRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            className="text-[32px] md:text-[40px] font-bold mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={partnersInView ? { opacity: 1, y: 0 } : {}}
          >
            Partners in change
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((p, i) => (
              <motion.div
                key={p.name}
                className="bg-card/40 border border-border/30 p-8 hover:border-cap-blue/40 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                animate={partnersInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i }}
                whileHover={{ y: -4 }}
              >
                <div
                  className={`w-12 h-12 rounded-full mb-6 flex items-center justify-center text-[18px] font-black text-primary-foreground ${i === 0 ? "bg-cap-blue" : i === 1 ? "bg-cap-orange" : i === 2 ? "bg-cap-red" : "bg-cap-green"}`}
                >
                  {p.name.charAt(0)}
                </div>
                <h3 className="text-[16px] font-bold mb-3 group-hover:text-cap-blue transition-colors">
                  {p.name}
                </h3>
                <p className="text-[14px] text-muted-foreground leading-[1.6] mb-4">
                  {p.description}
                </p>
                <span className="cta-link text-[14px]">
                  Learn more{" "}
                  <ArrowRight className="w-3.5 h-3.5 text-cap-orange" />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ===== AWARDS ===== */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-[32px] md:text-[40px] font-bold mb-14">
            Awards and recognition
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Leader in Everest Group Talent Assessment Services PEAK Matrix® 2025",
                description: "Recognized for market impact and vision in talent assessment and evaluation services.",
              },
              {
                title: "Best Assessment Solutions Provider — MENA HR Excellence Awards 2024",
                description: "Awarded for delivering measurable improvements in talent prediction and workforce quality.",
              },
              {
                title: "Top 10 Talent Intelligence Platform — HR Tech Outlook 2024",
                description: "Selected for innovative AI-powered assessment and analytics approaches.",
              },
            ].map((a, i) => (
              <motion.div
                key={a.title}
                className="bg-card border border-border/30 p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 * i }}
              >
                <Award className="w-8 h-8 text-cap-orange mb-4" />
                <h3 className="text-[16px] font-bold mb-3">{a.title}</h3>
                <p className="text-[14px] text-muted-foreground leading-[1.6]">
                  {a.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MEET OUR LEADER ===== */}
      <section
        id="founder"
        className="py-24 section-navy relative overflow-hidden"
      >
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cap-orange/5 rounded-full blur-3xl -z-0" />
        <div className="w-full px-6 lg:px-16 xl:px-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={leadersInView ? { opacity: 1, y: 0 } : {}}
            ref={leadersRef}
            className="mb-16"
          >
            <h2 className="text-[32px] md:text-[42px] font-bold mb-2">
              Meet Our Leader
            </h2>
            <p className="text-[18px] text-muted-foreground">
              15+ years of talent assessment and organizational psychology expertise | Certified in 15+ psychometric instruments | AI-Enabled Talent Intelligence Specialist
            </p>
          </motion.div>
          <motion.div
            className="max-w-8xl"
            initial={{ opacity: 0, y: 30 }}
            animate={leadersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="w-full max-w-sm mx-auto aspect-square rounded-xl overflow-hidden border border-border/40">
                  <img
                    src={card1}
                    alt="ASER Leader"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-[28px] font-bold mb-2">
                  Saurabh Nanda
                </h3>
                <p className="text-cap-orange font-semibold text-[14px] mb-6 uppercase tracking-wider">
                  Leader — Assessment Services
                </p>
                <div className="space-y-6 mb-8">
                  <p className="text-[17px] text-muted-foreground leading-[1.8]">
                    Spent 25+ years leading talent assessment functions across MENA, South Asia, and Africa — most recently as Global Head of Assessment at a Fortune 500 professional services firm. Pioneered competency framework design, large-scale assessment centre delivery, and AI-augmented psychometric evaluation for workforces spanning 10,000+ employees.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    {
                      title: "Psychometrics & Competency Design",
                      sub: "Building validated, legally-defensible talent measurement frameworks",
                    },
                    {
                      title: "AI-Enabled Assessment",
                      sub: "Applying adaptive AI tools to improve prediction accuracy and scale",
                    },
                    {
                      title: "BPS Level A & B Certified",
                      sub: "British Psychological Society — Psychological Testing",
                    },
                    {
                      title: "PhD Organisational Psychology",
                      sub: "University of Exeter, United Kingdom",
                    },
                  ].map((cred) => (
                    <div key={cred.title} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cap-orange flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-[14px]">
                          {cred.title}
                        </p>
                        <p className="text-[15px] text-muted-foreground">
                          {cred.sub}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="bg-cap-orange text-background px-6 py-3 font-semibold hover:bg-cap-orange/90 transition-all rounded-md inline-flex items-center gap-2">
                  Schedule with Dr. Ahmed Al-Rashid{" "}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative bg-black text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 800 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="650" cy="150" r="120" stroke="white" />
            <circle cx="750" cy="100" r="200" stroke="white" />
            <path
              d="M500 400 C600 300, 700 500, 800 400"
              stroke="white"
              fill="transparent"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            ASER careers
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-300 text-lg max-w-xl leading-relaxed mb-10"
          >
            Join our assessment team and help organizations identify, evaluate, and develop their most critical asset — their people.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-cap-orange text-white px-8 py-4 rounded-md font-semibold shadow-lg hover:shadow-cap-orange/30 transition-all duration-300"
          >
            Search open roles
          </motion.button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ASER;