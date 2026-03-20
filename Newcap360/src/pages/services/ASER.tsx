import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle, BarChart3, Users, Target, TrendingUp, ChevronLeft, ChevronRight, Play, Star, Quote, Globe2, Award, Zap, Shield, AlertCircle, TrendingDown, DollarSign, Briefcase, Brain, LineChart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useRef, useState } from "react";
import heroImg from "@/assets/service-hero-aser.jpg";
import trending1 from "@/assets/trending-1.jpg";
import trending2 from "@/assets/trending-2.jpg";
import trending3 from "@/assets/trending-3.jpg";
import trending4 from "@/assets/trending-4.jpg";

const serviceSubNav = [
  { label: "What to do", path: "#offerings" },
  { label: "Challenges", path: "#challenges" },
  { label: "Why ASER", path: "#why-aser" },
  { label: "Our Process", path: "#process" },
  { label: "Leaders", path: "#leaders" },
  { label: "Careers", path: "/careers" },
];

const trendingImages = [trending1, trending2, trending3, trending4];

const offerings = [
  { icon: BarChart3, title: "Competency-Based Assessments", description: "Scientifically designed assessments that measure behavioral competencies, cognitive abilities, and domain-specific knowledge aligned to organizational frameworks.", color: "bg-cap-blue", path: "/what-we-do/services/aser/competency-assessments" },
  { icon: Users, title: "Assessment & Development Centres", description: "Multi-method, multi-assessor evaluation programmes that provide 360° insights into leadership potential and readiness for critical roles.", color: "bg-cap-orange", path: "/what-we-do/services/aser/development-centres" },
  { icon: Target, title: "Psychometric Testing", description: "Validated psychometric instruments measuring personality traits, aptitude, and emotional intelligence for recruitment and development.", color: "bg-cap-green", path: "/what-we-do/services/aser/psychometric-testing" },
  { icon: TrendingUp, title: "Talent Analytics & Benchmarking", description: "Data-driven talent analytics that benchmark individual and team capabilities against industry standards.", color: "bg-cap-red", path: "/what-we-do/services/aser/talent-analytics" },
];

// NEW: Challenge Cards
const challenges = [
  {
    icon: AlertCircle,
    title: "Hiring the Wrong Candidates",
    problem: "Traditional interviews assess confidence, not competence. Bad hires cost 50-200% of annual salary.",
    solution: "ASER's predictive assessments reduce mis-hires by 85%+ with scientifically validated tools.",
    metric: "85%+ accuracy",
    color: "text-cap-orange",
    bgColor: "bg-cap-orange/5",
    borderColor: "border-cap-orange/20"
  },
  {
    icon: Users,
    title: "Unable to Identify High-Potential Leaders",
    problem: "Promoting based on current performance misses future potential. 40%+ critical roles remain unfilled.",
    solution: "Assessment centers provide 360° insights into leadership readiness, accelerating pipeline by 3x.",
    metric: "3x faster",
    color: "text-cap-blue",
    bgColor: "bg-cap-blue/5",
    borderColor: "border-cap-blue/20"
  },
  {
    icon: TrendingDown,
    title: "Losing Good People to Attrition",
    problem: "High attrition rates exceed industry benchmarks. Employees leave due to poor fit and lack of development.",
    solution: "Competency-based assessments + development plans ensure role fit and clear growth paths.",
    metric: "40%+ reduction",
    color: "text-cap-green",
    bgColor: "bg-cap-green/5",
    borderColor: "border-cap-green/20"
  }
];

const trendingInsights = [
  { category: "RESEARCH REPORT", title: "The Science of Assessment: Predicting Performance in 2026" },
  { category: "PERSPECTIVE", title: "Beyond IQ: The Rise of Emotional Intelligence Assessments" },
  { category: "BLOG", title: "Assessment Centres in a Virtual World" },
  { category: "RESEARCH REPORT", title: "AI-Powered Talent Analytics: Opportunities & Ethics" },
];

// NEW: Key Differentiators
const features = [
  {
    title: "Culturally Relevant Assessments",
    desc: "Validated across multiple industries. Accounts for organizational hierarchies and cross-functional collaboration needs.",
    icon: Globe2
  },
  {
    title: "Multi-Language Support",
    desc: "Available in multiple languages to ensure no talent pool is excluded. Reaches broader candidate base.",
    icon: BarChart3
  },
  {
    title: "Cost-Optimized Solutions",
    desc: "Flexible pricing models for organizations of all sizes. Digital-first delivery reduces traditional assessment costs.",
    icon: DollarSign
  },
  {
    title: "Fast Turnaround",
    desc: "Complete assessment cycles in 6-8 weeks. AI-powered scoring delivers insights rapidly.",
    icon: Zap
  }
];

// NEW: Industry-Specific Solutions
const industryInsights = [
  {
    industry: "Technology",
    challenge: "Talent shortage, high attrition, difficulty assessing technical ability + culture fit",
    solution: "Technical competency assessments + culture-fit psychometrics. Predict 6-month performance with 88% accuracy.",
  },
  {
    industry: "Financial Services",
    challenge: "Compliance requirements, identifying risk management capability, regulatory expertise",
    solution: "Compliance-focused assessments, integrity/risk-awareness testing, leadership readiness for regulatory roles",
  },
  {
    industry: "Manufacturing & Engineering",
    challenge: "Safety culture, technical problem-solving, operational leadership capability",
    solution: "Safety mindset assessment, technical depth evaluation, operational leadership potential",
  },
  {
    industry: "Healthcare & Life Sciences",
    challenge: "Clinical decision-making, safety focus, specialized expertise requirements",
    solution: "Clinical competency assessments, patient safety culture evaluation, specialized role readiness",
  }
];

// NEW: ROI Metrics Table Data
const roiMetrics = [
  { metric: "Mis-hire Rate", traditional: "15-25%", aser: "2-3%", impact: "Prevented before hire" },
  { metric: "Promotion Failure", traditional: "30-35%", aser: "5-8%", impact: "Better success rate" },
  { metric: "Time to Leadership Ready", traditional: "24-36 months", aser: "12-18 months", impact: "Structured development" },
  { metric: "Avoidable Attrition", traditional: "40-50%", aser: "20-30%", impact: "Better fit + growth" }
];

const testimonials = [
  {
    quote: "ASER transformed how we identify future leaders. The prediction accuracy is unlike anything we've used before.",
    author: "Chief People Officer",
    company: "Top-5 Regional Bank",
    rating: 5,
  },
  {
    quote: "The assessment centres gave us a 360° view of our talent pool and helped us make confident, data-backed promotion decisions.",
    author: "VP Talent Acquisition",
    company: "Global Telecom Group",
    rating: 5,
  },
  {
    quote: "Seamless digital delivery, outstanding analytics dashboard, and a team that truly understood our competency framework.",
    author: "Head of L&D",
    company: "Leading Life Sciences Firm",
    rating: 5,
  },
];

const researchFindings = [
  {
    title: "The Promotion Gap",
    finding: "40% of organizations promote based on tenure or current performance alone. These promotions fail 35% of the time.",
    insight: "Data-driven promotion decisions reduce failure to just 5%.",
    icon: LineChart
  },
  {
    title: "Emotional Intelligence Advantage",
    finding: "Teams led by emotionally intelligent managers report 40% higher engagement and 25% lower attrition.",
    insight: "Yet only 15% of organizations assess EI in leadership hires.",
    icon: Brain
  },
  {
    title: "Cognitive Diversity Effect",
    finding: "Teams with diverse cognitive profiles outperform homogeneous teams by 30% on innovation metrics.",
    insight: "Most organizations unknowingly hire for sameness, missing innovation potential.",
    icon: Target
  }
];

const ASER = () => {
  const { ref: statsRef, isInView: statsInView } = useScrollAnimation(0.2);
  const { ref: challengesRef, isInView: challengesInView } = useScrollAnimation(0.1);
  const { ref: featuresRef, isInView: featuresInView } = useScrollAnimation(0.1);
  const { ref: industryRef, isInView: industryInView } = useScrollAnimation(0.1);
  const { ref: roiRef, isInView: roiInView } = useScrollAnimation(0.1);
  const { ref: researchRef, isInView: researchInView } = useScrollAnimation(0.1);
  const { ref: offerRef, isInView: offerInView } = useScrollAnimation(0.1);
  const { ref: trendingRef, isInView: trendingInView } = useScrollAnimation(0.1);
  const { ref: processRef, isInView: processInView } = useScrollAnimation(0.1);
  const { ref: leadersRef, isInView: leadersInView } = useScrollAnimation(0.1);
  const trendingScrollRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollTrending = (dir: "left" | "right") => {
    if (trendingScrollRef.current) {
      trendingScrollRef.current.scrollBy({ left: dir === "left" ? -340 : 340, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SubNavbar title="ASER" titlePath="/what-we-do/services/aser" items={serviceSubNav} />

      {/* ── Hero (original + parallax + floating badge) ── */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center bg-background overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img src={heroImg} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </motion.div>

        {/* Decorative grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

        <motion.div style={{ opacity: heroOpacity }} className="relative container mx-auto px-4 lg:px-8 py-32">
          {/* Eyebrow label */}
          <motion.div className="inline-flex items-center gap-2 border border-cap-orange/40 text-cap-orange text-[11px] font-bold tracking-widest uppercase px-4 py-2 mb-8"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="w-1.5 h-1.5 rounded-full bg-cap-orange animate-pulse" />
            Assessment Services
          </motion.div>

          <motion.h1 className="text-[40px] md:text-[56px] lg:text-[72px] font-black tracking-tight leading-[1.05] mb-6 max-w-3xl"
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            Transform Your Talent Strategy
          </motion.h1>
          <motion.p className="text-[18px] md:text-[20px] text-muted-foreground leading-[1.6] max-w-xl mb-10"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
            Science-backed assessment solutions designed to identify, evaluate, and develop talent at every level.
          </motion.p>

          {/* CTA row — UPDATED */}
          <motion.div className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}>
            <a href="#offerings" className="inline-flex items-center gap-2 bg-cap-orange text-white px-8 py-4 text-[15px] font-semibold hover:gap-3 transition-all">
              Explore services <ArrowRight className="w-5 h-5" />
            </a>
            <button
              onClick={() => setVideoPlaying(true)}
              className="inline-flex items-center gap-3 text-foreground/80 hover:text-foreground transition-colors text-[15px] font-medium group">
              <span className="w-11 h-11 rounded-full border border-foreground/30 group-hover:border-cap-orange flex items-center justify-center transition-colors">
                <Play className="w-4 h-4 ml-0.5" />
              </span>
              Watch overview
            </button>
          </motion.div>

          {/* Floating stat badge — UPDATED */}
          <motion.div
            className="absolute right-8 bottom-12 hidden xl:flex flex-col items-center gap-1 bg-card/80 backdrop-blur border border-border/30 px-8 py-6"
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1, duration: 0.6 }}>
            <span className="text-[44px] font-black text-cap-orange leading-none">98%</span>
            <span className="text-[12px] text-muted-foreground text-center">Client satisfaction<br />score (2025)</span>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Video modal — ORIGINAL ── */}
      {videoPlaying && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          onClick={() => setVideoPlaying(false)}>
          <motion.div className="w-full max-w-4xl aspect-video bg-card flex items-center justify-center relative"
            initial={{ scale: 0.9 }} animate={{ scale: 1 }}
            onClick={e => e.stopPropagation()}>
            <div className="text-center">
              <Play className="w-16 h-16 text-cap-orange mx-auto mb-4" />
              <p className="text-muted-foreground">Video player placeholder</p>
            </div>
            <button onClick={() => setVideoPlaying(false)} className="absolute top-4 right-4 text-foreground/60 hover:text-foreground text-2xl leading-none">✕</button>
          </motion.div>
        </motion.div>
      )}

      {/* ── Stats (original) ── */}
      <section className="py-20 border-y border-border/20" ref={statsRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2 className="text-[24px] md:text-[28px] font-bold mb-14" initial={{ opacity: 0 }} animate={statsInView ? { opacity: 1 } : {}}>ASER now</motion.h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { value: "85%+", desc: "prediction accuracy for job performance using our assessment frameworks" },
              { value: "50K+", desc: "professionals Assessed" },
              { value: "3x", desc: "faster leadership pipeline development compared to traditional methods" },
            ].map((stat, i) => (
              <motion.div key={stat.value} initial={{ opacity: 0, y: 30 }} animate={statsInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15 * i }}>
                <div className="w-10 h-1 bg-cap-orange mb-6" />
                <span className="text-[40px] md:text-[48px] font-black text-foreground block mb-3">{stat.value}</span>
                <p className="text-[14px] text-muted-foreground leading-[1.6]">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEW: Challenges Section ── */}
      <section id="challenges" className="py-24" ref={challengesRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div className="mb-16"
            initial={{ opacity: 0, y: 20 }} animate={challengesInView ? { opacity: 1, y: 0 } : {}}>
            <span className="text-[11px] font-bold tracking-widest text-cap-orange uppercase mb-3 inline-block">Key Challenges</span>
            <h2 className="text-[32px] md:text-[40px] font-bold mb-4">The Talent Challenges Organizations Face</h2>
            <p className="text-[16px] text-muted-foreground max-w-2xl">Organizations are growing rapidly, but talent management hasn't kept up. Here's what we're solving:</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {challenges.map((challenge, i) => (
              <motion.div key={challenge.title}
                className={`border rounded-lg overflow-hidden group hover:shadow-lg transition-all ${challenge.bgColor} ${challenge.borderColor}`}
                initial={{ opacity: 0, y: 30 }} animate={challengesInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15 * i }}
                whileHover={{ y: -4 }}>
                <div className="p-8">
                  <div className={`w-12 h-12 rounded-full mb-6 flex items-center justify-center bg-white/10`}>
                    <challenge.icon className={`w-6 h-6 ${challenge.color}`} />
                  </div>
                  <h3 className="text-[18px] font-bold mb-4 group-hover:text-cap-orange transition-colors">{challenge.title}</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-[12px] font-semibold text-muted-foreground uppercase tracking-wide mb-2">The Problem</p>
                      <p className="text-[14px] text-foreground/80 leading-relaxed">{challenge.problem}</p>
                    </div>
                    <div className="border-t border-border/30 pt-4">
                      <p className="text-[12px] font-semibold text-muted-foreground uppercase tracking-wide mb-2">ASER Solution</p>
                      <p className="text-[14px] text-foreground/80 leading-relaxed">{challenge.solution}</p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                    <span className={`text-[13px] font-bold ${challenge.color}`}>{challenge.metric}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEW: Why ASER Section ── */}
      <section id="why-aser" className="py-24 bg-card/50 border-y border-border/20" ref={featuresRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }} animate={featuresInView ? { opacity: 1, y: 0 } : {}}>
            <span className="text-[11px] font-bold tracking-widest text-cap-orange uppercase mb-3 inline-block">Key Advantages</span>
            <h2 className="text-[32px] md:text-[40px] font-bold mb-4">Why ASER Stands Out</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <motion.div key={feature.title}
                className="p-8 bg-card border border-border/30 hover:border-cap-orange/40 transition-all group"
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} animate={featuresInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.1 * i }}>
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-lg bg-cap-orange/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cap-orange/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-cap-orange" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[18px] font-bold mb-3 group-hover:text-cap-orange transition-colors">{feature.title}</h3>
                    <p className="text-[14px] text-muted-foreground leading-[1.6]">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Offerings (original) ── */}
      <section id="offerings" className="py-24" ref={offerRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2 className="text-[32px] md:text-[40px] font-bold mb-14" initial={{ opacity: 0, y: 20 }} animate={offerInView ? { opacity: 1, y: 0 } : {}}>
            Reinvent with ASER
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {offerings.map((item, i) => (
              <motion.div key={item.title} className="group bg-card border border-border/30 overflow-hidden hover:border-cap-blue/50 transition-all" initial={{ opacity: 0, y: 30 }} animate={offerInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 * i }} whileHover={{ y: -4 }}>
                <div className={`h-1 ${item.color}`} />
                <div className="p-8">
                  <item.icon className="w-10 h-10 text-cap-orange mb-5 group-hover:scale-110 transition-transform" />
                  <h3 className="text-[18px] font-bold mb-3 group-hover:text-cap-blue transition-colors">{item.title}</h3>
                  <p className="text-[14px] text-muted-foreground leading-[1.6] mb-6">{item.description}</p>
                  <a href={item.path} className="cta-link text-[14px] inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">Learn more <ArrowRight className="w-4 h-4 text-cap-orange" /></a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEW: Industry Solutions Section ── */}
      <section className="py-24 bg-card/50 border-b border-border/20" ref={industryRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div className="mb-16"
            initial={{ opacity: 0, y: 20 }} animate={industryInView ? { opacity: 1, y: 0 } : {}}>
            <span className="text-[11px] font-bold tracking-widest text-cap-orange uppercase mb-3 inline-block">Industry Solutions</span>
            <h2 className="text-[32px] md:text-[40px] font-bold">Solutions Across Key Industries</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {industryInsights.map((industry, i) => (
              <motion.div key={industry.industry}
                className="p-8 border border-border/30 bg-card hover:border-cap-blue/40 transition-all group"
                initial={{ opacity: 0, y: 20 }} animate={industryInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 * i }}
                whileHover={{ y: -4 }}>
                <h3 className="text-[18px] font-bold mb-4 group-hover:text-cap-orange transition-colors">{industry.industry}</h3>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-[11px] font-bold text-cap-orange uppercase tracking-wide">Challenge</span>
                    <p className="text-[14px] text-muted-foreground mt-1">{industry.challenge}</p>
                  </div>
                  <div className="border-t border-border/30 pt-4">
                    <span className="text-[11px] font-bold text-cap-green uppercase tracking-wide">ASER Solution</span>
                    <p className="text-[14px] text-muted-foreground mt-1">{industry.solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* ── NEW: ROI Section ── */}
      <section className="py-24 border-y border-border/20" ref={roiRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }} animate={roiInView ? { opacity: 1, y: 0 } : {}}>
            <span className="text-[11px] font-bold tracking-widest text-cap-orange uppercase mb-3 inline-block">Financial Impact</span>
            <h2 className="text-[32px] md:text-[40px] font-bold mb-4">The ROI of Assessment-Driven Decisions</h2>
            <p className="text-[16px] text-muted-foreground">Talent assessment maximizes ROI on your largest expense: your people.</p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full text-[14px]">
              <thead>
                <tr className="border-b-2 border-cap-orange/40">
                  <th className="text-left py-4 px-4 font-bold text-cap-orange">Metric</th>
                  <th className="text-left py-4 px-4 font-bold text-muted-foreground">Traditional Approach</th>
                  <th className="text-left py-4 px-4 font-bold text-cap-green">With ASER</th>
                  <th className="text-left py-4 px-4 font-bold text-foreground">Impact</th>
                </tr>
              </thead>
              <tbody>
                {roiMetrics.map((row, i) => (
                  <motion.tr key={row.metric}
                    className="border-b border-border/20 hover:bg-cap-orange/5 transition-colors"
                    initial={{ opacity: 0 }} animate={roiInView ? { opacity: 1 } : {}} transition={{ delay: 0.05 * i }}>
                    <td className="py-4 px-4 font-semibold text-foreground">{row.metric}</td>
                    <td className="py-4 px-4 text-muted-foreground">{row.traditional}</td>
                    <td className="py-4 px-4 text-cap-green font-semibold">{row.aser}</td>
                    <td className="py-4 px-4 text-foreground/70">{row.impact}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <motion.div className="mt-12 p-6 bg-cap-orange/5 border border-cap-orange/20 rounded-lg"
            initial={{ opacity: 0, y: 10 }} animate={roiInView ? { opacity: 1, y: 0 } : {}}>
            <p className="text-[14px] text-foreground leading-relaxed">
              <span className="font-semibold">Example:</span> A 500-person organization with 30% annual turnover (150 people) typically spends significant resources in turnover costs. Assessment programs cost a fraction of this but can reduce avoidable attrition by 30-40%, recovering investment within 6 months.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── NEW: Research & Insights ── */}
      <section className="py-24 bg-card/50 border-b border-border/20" ref={researchRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }} animate={researchInView ? { opacity: 1, y: 0 } : {}}>
            <span className="text-[11px] font-bold tracking-widest text-cap-orange uppercase mb-3 inline-block">Thought Leadership</span>
            <h2 className="text-[32px] md:text-[40px] font-bold">Insights from ASER Research</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {researchFindings.map((research, i) => (
              <motion.div key={research.title}
                className="p-8 bg-card border border-border/30 hover:border-cap-blue/40 transition-all group"
                initial={{ opacity: 0, y: 30 }} animate={researchInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 * i }}
                whileHover={{ y: -4 }}>
                <div className="w-12 h-12 rounded-full bg-cap-blue/10 flex items-center justify-center mb-5 group-hover:bg-cap-blue/20 transition-colors">
                  <research.icon className="w-6 h-6 text-cap-blue" />
                </div>
                <h3 className="text-[18px] font-bold mb-4 group-hover:text-cap-orange transition-colors">{research.title}</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-[13px] text-foreground leading-relaxed font-medium">{research.finding}</p>
                  </div>
                  <div className="border-l-2 border-cap-orange/40 pl-4">
                    <p className="text-[13px] text-muted-foreground italic">{research.insight}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trending (original) ── */}
      <section id="trending" className="py-24" ref={trendingRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <motion.h2 className="text-[32px] md:text-[40px] font-bold" initial={{ opacity: 0, y: 20 }} animate={trendingInView ? { opacity: 1, y: 0 } : {}}>What's trending with ASER?</motion.h2>
            <div className="hidden md:flex gap-2">
              <button onClick={() => scrollTrending("left")} className="p-2 border border-border/40 text-foreground/60 hover:text-foreground transition-colors"><ChevronLeft className="w-5 h-5" /></button>
              <button onClick={() => scrollTrending("right")} className="p-2 border border-border/40 text-foreground/60 hover:text-foreground transition-colors"><ChevronRight className="w-5 h-5" /></button>
            </div>
          </div>
          <div className="mb-12">
            <a href="#" className="inline-flex items-center gap-2 text-[16px] font-semibold text-foreground hover:gap-3 transition-all">
              View all work <span className="inline-flex items-center justify-center w-7 h-7 bg-cap-orange text-background rounded-sm"><ArrowRight className="w-4 h-4" /></span>
            </a>
          </div>
          <div ref={trendingScrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4">
            {trendingInsights.map((item, i) => (
              <motion.div key={item.title} className="flex-shrink-0 w-[320px] overflow-hidden group cursor-pointer" initial={{ opacity: 0, x: 40 }} animate={trendingInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.1 * i }}>
                <div className="relative h-[380px] overflow-hidden">
                  <img src={trendingImages[i % trendingImages.length]} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <span className="text-[11px] font-bold text-foreground/70 uppercase tracking-[0.15em] mb-3">{item.category}</span>
                    <h3 className="text-[20px] font-bold text-foreground leading-snug">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials — ORIGINAL ── */}
      <section className="py-24 bg-card border-y border-border/20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.p className="text-[11px] font-bold tracking-widest text-cap-orange uppercase mb-3"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            Client voices
          </motion.p>
          <motion.h2 className="text-[32px] md:text-[40px] font-bold mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Trusted by leading organisations
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i}
                className={`p-8 border transition-all cursor-pointer ${activeTestimonial === i ? "border-cap-orange bg-background" : "border-border/30 bg-card hover:border-border/60"}`}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i }}
                onClick={() => setActiveTestimonial(i)}>
                <Quote className="w-8 h-8 text-cap-orange/40 mb-5" />
                <p className="text-[15px] text-foreground leading-[1.7] mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-cap-orange text-cap-orange" />
                  ))}
                </div>
                <div className="border-t border-border/20 pt-4">
                  <p className="text-[14px] font-bold text-foreground">{t.author}</p>
                  <p className="text-[13px] text-muted-foreground">{t.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process (original) ── */}
      <section
        id="process"
        ref={processRef}
        className="relative py-32 overflow-hidden"
        style={{ background: "var(--navy, #0B1628)" }}
      >
        {/* Subtle grid texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Orange glow blob top-right */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-0 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(241,120,30,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Blue glow blob bottom-left */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(30,100,200,0.10) 0%, transparent 70%)",
          }}
        />

        <div className="relative container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="mb-20 max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-[13px] font-semibold tracking-[0.2em] uppercase mb-4"
              style={{ color: "var(--cap-orange, #F1781E)" }}
            >
              How It Works
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[36px] md:text-[48px] font-bold leading-[1.1] text-white"
            >
              A structured approach
              <br />
              <span style={{ color: "var(--cap-orange, #F1781E)" }}>
                to talent assessment
              </span>
            </motion.h2>
          </div>

          {/* Steps grid */}
          <div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-px"
            style={{ background: "rgba(255,255,255,0.06)", borderRadius: 2 }}
          >
            {[
              {
                number: "01",
                title: "Discovery & Design",
                detail: "We map your competency framework, role requirements, and success profiles in collaborative workshops.",
                tag: "Foundation",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                  </svg>
                ),
              },
              {
                number: "02",
                title: "Tool Selection & Customization",
                detail: "Our experts select and configure the most appropriate tools from our validated instrument library.",
                tag: "Configuration",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                  </svg>
                ),
              },
              {
                number: "03",
                title: "Assessment Delivery",
                detail: "Digital-first delivery with proctoring, scheduling, and real-time completion tracking.",
                tag: "Execution",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                  </svg>
                ),
              },
              {
                number: "04",
                title: "Insights & Action Planning",
                detail: "Comprehensive reports, debrief sessions, and a 90-day action planning roadmap.",
                tag: "Outcomes",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6.75v6.75" />
                  </svg>
                ),
              },
            ].map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 32 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col p-8 cursor-default"
                style={{ background: "var(--navy, #0B1628)" }}
              >
                {/* Ghost watermark number */}
                <span
                  aria-hidden
                  className="absolute top-4 right-5 text-[72px] font-black leading-none select-none transition-opacity duration-500 group-hover:opacity-100"
                  style={{ color: "rgba(255,255,255,0.04)", lineHeight: 1 }}
                >
                  {step.number}
                </span>

                {/* Icon circle */}
                <div
                  className="mb-6 w-11 h-11 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(241,120,30,0.12)",
                    color: "var(--cap-orange, #F1781E)",
                    border: "1px solid rgba(241,120,30,0.22)",
                  }}
                >
                  {step.icon}
                </div>

                {/* Category tag */}
                <span
                  className="inline-block text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full mb-4 w-fit"
                  style={{
                    background: "rgba(30,100,200,0.15)",
                    color: "var(--cap-blue-light, #7EB3F7)",
                    border: "1px solid rgba(30,100,200,0.22)",
                  }}
                >
                  {step.tag}
                </span>

                {/* Step label */}
                <p
                  className="text-[10px] font-bold tracking-widest mb-2"
                  style={{ color: "rgba(255,255,255,0.22)" }}
                >
                  STEP {step.number}
                </p>

                {/* Title */}
                <h3 className="text-[17px] font-bold text-white mb-3 leading-snug">
                  {step.title}
                </h3>

                {/* Detail */}
                <p
                  className="text-[13px] leading-[1.75] mt-auto"
                  style={{ color: "rgba(255,255,255,0.46)" }}
                >
                  {step.detail}
                </p>

                {/* Orange underline sweep on hover */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: "var(--cap-orange, #F1781E)" }}
                />
              </motion.div>
            ))}
          </div>

          {/* Orange → Blue gradient rule */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={processInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 h-px origin-left"
            style={{
              background: "linear-gradient(90deg, var(--cap-orange, #F1781E) 0%, var(--cap-blue, #1E64C8) 100%)",
              opacity: 0.3,
            }}
          />

          {/* Footer note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={processInView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
            className="mt-6 text-[12px] text-center tracking-wide"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            End-to-end process from scoping to strategic action — typically completed within 6–8 weeks.
          </motion.p>
        </div>
      </section>

      {/* ── Leaders (original) ── */}
      <section id="leaders" className="py-24" ref={leadersRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2 className="text-[32px] md:text-[40px] font-bold mb-14" initial={{ opacity: 0, y: 20 }} animate={leadersInView ? { opacity: 1, y: 0 } : {}}>Our leaders</motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Dr. Ahmed Khan", role: "Lead — Assessment Services, Global" },
              { name: "Lisa Weng", role: "Lead — Psychometrics & Analytics" },
              { name: "Robert Osei", role: "Lead — Development Centres" },
            ].map((l, i) => (
              <motion.div key={l.name} className="group text-center" initial={{ opacity: 0, y: 20 }} animate={leadersInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 * i }}>
                <div className="w-40 h-52 mx-auto mb-5 bg-secondary overflow-hidden">
                  <div className={`w-full h-full flex items-center justify-center text-[36px] font-black ${i === 0 ? "bg-cap-blue/20 text-cap-blue" : i === 1 ? "bg-cap-orange/20 text-cap-orange" : "bg-cap-green/20 text-cap-green"}`}>
                    {l.name.split(" ").map(n => n[0]).join("")}
                  </div>
                </div>
                <h3 className="text-[16px] font-bold mb-1">{l.name}</h3>
                <p className="text-[14px] text-muted-foreground">{l.role}</p>

                {/* Leader LinkedIn badge — ORIGINAL */}
                <motion.a href="#" className="inline-flex items-center gap-1.5 mt-3 text-[12px] text-cap-blue hover:underline"
                  whileHover={{ x: 3 }}>
                  Connect on LinkedIn <ArrowRight className="w-3 h-3" />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ strip — ORIGINAL ── */}
      <section className="py-20 border-t border-border/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <motion.p className="text-[11px] font-bold tracking-widest text-cap-orange uppercase mb-3"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                Common questions
              </motion.p>
              <motion.h2 className="text-[32px] md:text-[36px] font-bold"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Frequently asked about ASER
              </motion.h2>
            </div>
            <div className="space-y-4">
              {[
                { q: "How long does a typical assessment centre take?", a: "Most programmes run 1–2 days, though we offer half-day digital formats for senior-level assessments." },
                { q: "Are your tools validated for non-Western markets?", a: "Yes. All instruments are locally normed and culturally validated for MENA, Africa, and South Asia." },
                { q: "Can assessments be run fully online?", a: "Absolutely. Our digital platform supports remote proctoring, adaptive delivery, and real-time reporting." },
              ].map((faq, i) => (
                <motion.details key={i}
                  className="group border border-border/30 bg-card open:border-cap-orange/40 transition-all"
                  initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 * i }}>
                  <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-[15px] list-none">
                    {faq.q}
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-open:rotate-90 transition-transform flex-shrink-0 ml-4" />
                  </summary>
                  <p className="px-5 pb-5 text-[14px] text-muted-foreground leading-[1.7]">{faq.a}</p>
                </motion.details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA (original) ── */}
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
            className="bg-cap-orange text-white px-8 py-4 rounded-md font-semibold text-white shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
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