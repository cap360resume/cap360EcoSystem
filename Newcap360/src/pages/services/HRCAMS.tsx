import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import HRCAMSSubNavbar from "@/components/HRCAMSSubNavbar";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Brain, Settings, Users, BarChart3, Building2, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import heroImg from "@/assets/service-hero-hrcams.jpg";
import trending1 from "@/assets/trending-1.jpg";
import trending2 from "@/assets/trending-2.jpg";
import trending3 from "@/assets/trending-3.jpg";
import trending4 from "@/assets/trending-4.jpg";
import ceoHeadshot from "@/assets/ceo-headshot.jpg";

const serviceSubNav = [
  { label: "What to do", path: "#services" },
  { label: "What's trending", path: "#trending" },
  { label: "Partners", path: "#partners" },
  { label: "Leaders", path: "#leaders" },
  { label: "Careers", path: "/careers" },
];

const trendingImages = [trending1, trending2, trending3, trending4];

const subServices = [
  { icon: BarChart3, title: "Performance Management & Organisation Effectiveness", description: "Design and implement performance frameworks that align individual goals with organizational strategy, driving accountability and continuous improvement.", path: "/what-we-do/services/hrcams/performance-management" },
  { icon: Settings, title: "Total Rewards Architecture", description: "Build competitive compensation, benefits, and recognition programmes that attract, retain, and motivate top talent across all levels.", path: "/what-we-do/services/hrcams/total-rewards" },
  { icon: Shield, title: "Labour Law Compliance & HR Governance", description: "Ensure full compliance with evolving labour regulations while establishing robust HR governance frameworks and audit-ready processes.", path: "/what-we-do/services/hrcams/labour-law" },
  { icon: Brain, title: "Gen AI for HR & Operational Productivity", description: "Leverage generative AI to automate HR workflows, enhance decision-making, and drive unprecedented operational efficiency.", path: "/what-we-do/services/hrcams/gen-ai-hr" },
  { icon: Building2, title: "Organisation Design & Workforce Planning", description: "Architect agile organizational structures and workforce strategies that adapt to market dynamics and future business needs.", path: "/what-we-do/services/hrcams/org-design" },
  { icon: Users, title: "Managed HR Services (Outsourced HR)", description: "End-to-end outsourced HR operations — payroll, compliance, employee lifecycle, and more — so you can focus on core business.", path: "/what-we-do/services/hrcams/managed-hr" },
];

const trendingInsights = [
  { category: "RESEARCH REPORT", title: "The Future of Performance Management in the Age of AI", description: "How leading organizations are reimagining performance frameworks to drive continuous growth." },
  { category: "PERSPECTIVE", title: "Total Rewards 2026: Beyond Compensation", description: "Why organizations must rethink total rewards strategies to attract and retain talent." },
  { category: "BLOG", title: "Labour Law Compliance in a Post-Pandemic World", description: "Navigating the evolving regulatory landscape and ensuring your HR practices remain audit-ready." },
  { category: "RESEARCH REPORT", title: "Gen AI for HR: From Hype to Impact", description: "Real-world use cases where generative AI is transforming HR operations and decision-making." },
  { category: "PERSPECTIVE", title: "Organisation Design for the Hybrid Workforce", description: "Building agile organizational structures that support distributed teams and flexible work models." },
];

const partners = [
  { name: "SAP SuccessFactors", description: "Comprehensive HR solutions powered by SAP's enterprise platform." },
  { name: "Workday", description: "Cloud-based HCM platform delivering adaptive planning and workforce insights." },
  { name: "Oracle HCM", description: "Enterprise human capital management solutions that unify HR processes." },
  { name: "Microsoft Viva", description: "Employee experience platform bringing together communications and insights." },
];

const leaders = [
  { name: "Dr. Sarah Al-Rashid", role: "Lead — HRCAMS, Global" },
  { name: "Marcus Chen", role: "Lead — Performance & OD" },
  { name: "Priya Narayanan", role: "Lead — Total Rewards & Compliance" },
  { name: "James Okonkwo", role: "Lead — Gen AI for HR" },
];

const HRCAMS = () => {
  const { ref: statsRef, isInView: statsInView } = useScrollAnimation(0.2);
  const { ref: servicesRef, isInView: servicesInView } = useScrollAnimation(0.1);
  const { ref: trendingRef, isInView: trendingInView } = useScrollAnimation(0.1);
  const { ref: partnersRef, isInView: partnersInView } = useScrollAnimation(0.1);
  const { ref: leadersRef, isInView: leadersInView } = useScrollAnimation(0.1);
  const navigate = useNavigate();
  const trendingScrollRef = useRef<HTMLDivElement>(null);

  const scrollTrending = (dir: "left" | "right") => {
    if (trendingScrollRef.current) {
      trendingScrollRef.current.scrollBy({ left: dir === "left" ? -340 : 340, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SubNavbar title="HRCAMS" titlePath="/what-we-do/services/hrcams" items={serviceSubNav} />

      {/* ===== HERO ===== */}
      <section className="relative min-h-[90vh] flex items-center bg-background overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 py-32">
          <motion.h1
            className="text-[40px] md:text-[56px] lg:text-[72px] font-black tracking-tight leading-[1.05] mb-6 max-w-3xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            HR consulting & advisory managed services
          </motion.h1>
          <motion.p
            className="text-[18px] md:text-[20px] text-muted-foreground leading-[1.6] max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Transform your HR function from an administrative cost centre into a strategic business partner. Unlock workforce excellence through technology-led, insight-driven consulting.
          </motion.p>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-20 border-y border-border/20" ref={statsRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2 className="text-[24px] md:text-[28px] font-bold mb-14" initial={{ opacity: 0 }} animate={statsInView ? { opacity: 1 } : {}}>
            HRCAMS now
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { value: "500+", desc: "organizations served across MENA, Africa and South Asia" },
              { value: "40%", desc: "average HR cost reduction achieved for managed services clients" },
              { value: "Only 13%", desc: 'of companies are "extremely confident" they have the right HR digital capabilities for Gen AI.' },
            ].map((stat, i) => (
              <motion.div key={stat.value} initial={{ opacity: 0, y: 30 }} animate={statsInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15 * i, duration: 0.6 }}>
                <div className="w-10 h-1 bg-cap-orange mb-6" />
                <span className="text-[40px] md:text-[48px] font-black text-foreground block mb-3">{stat.value}</span>
                <p className="text-[14px] text-muted-foreground leading-[1.6]">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="py-24" ref={servicesRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2 className="text-[32px] md:text-[40px] font-bold mb-4" initial={{ opacity: 0, y: 20 }} animate={servicesInView ? { opacity: 1, y: 0 } : {}}>
            Reinvent with HRCAMS
          </motion.h2>
          <p className="text-[16px] text-muted-foreground mb-14 max-w-2xl">Six integrated service lines designed to transform every dimension of your HR function.</p>

          <div className="grid lg:grid-cols-3 gap-6">
            {subServices.map((s, i) => (
              <motion.div
                key={s.title}
                className="group relative bg-card border border-border/30 overflow-hidden cursor-pointer hover:border-cap-blue/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.08 * i, duration: 0.5 }}
                whileHover={{ y: -6 }}
                onClick={() => navigate(s.path)}
              >
                <div className={`h-1 ${i === 0 ? "bg-cap-blue" : i === 1 ? "bg-cap-orange" : i === 2 ? "bg-cap-green" : i === 3 ? "bg-cap-red" : i === 4 ? "bg-cap-dark-blue" : "bg-cap-orange"}`} />
                <div className="p-8">
                  <s.icon className="w-10 h-10 text-cap-orange mb-5 group-hover:scale-110 transition-transform" />
                  <h3 className="text-[18px] font-bold mb-3 group-hover:text-cap-blue transition-colors leading-snug">{s.title}</h3>
                  <p className="text-[14px] text-muted-foreground leading-[1.6] mb-6">{s.description}</p>
                  <span className="cta-link text-[14px]">Learn more <ArrowRight className="w-4 h-4 text-cap-orange" /></span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <HRCAMSSubNavbar />

      {/* ===== TRENDING ===== */}
      <section id="trending" className="py-24 section-navy" ref={trendingRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <motion.h2 className="text-[32px] md:text-[40px] font-bold" initial={{ opacity: 0, y: 20 }} animate={trendingInView ? { opacity: 1, y: 0 } : {}}>
              What's trending with HRCAMS?
            </motion.h2>
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
                    <span className="text-[11px] font-bold text-foreground/70 uppercase tracking-[0.15em] mb-3">{item.category}</span>
                    <h3 className="text-[20px] font-bold text-foreground leading-snug mb-2">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARTNERS ===== */}
      <section id="partners" className="py-24" ref={partnersRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2 className="text-[32px] md:text-[40px] font-bold mb-14" initial={{ opacity: 0, y: 20 }} animate={partnersInView ? { opacity: 1, y: 0 } : {}}>
            Partners in change
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((p, i) => (
              <motion.div key={p.name} className="bg-card border border-border/30 p-8 hover:border-cap-blue/40 transition-all group" initial={{ opacity: 0, y: 20 }} animate={partnersInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 * i }} whileHover={{ y: -4 }}>
                <div className={`w-12 h-12 rounded-full mb-6 flex items-center justify-center text-[18px] font-black text-primary-foreground ${i === 0 ? "bg-cap-blue" : i === 1 ? "bg-cap-orange" : i === 2 ? "bg-cap-red" : "bg-cap-green"}`}>
                  {p.name.charAt(0)}
                </div>
                <h3 className="text-[16px] font-bold mb-3 group-hover:text-cap-blue transition-colors">{p.name}</h3>
                <p className="text-[14px] text-muted-foreground leading-[1.6] mb-4">{p.description}</p>
                <span className="cta-link text-[14px]">Learn more <ArrowRight className="w-3.5 h-3.5 text-cap-orange" /></span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AWARDS ===== */}
      <section className="py-24 section-navy">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-[32px] md:text-[40px] font-bold mb-14">Awards and recognition</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Leader in Everest Group HR Outsourcing PEAK Matrix® 2025", description: "Recognized for market impact and vision in HR outsourcing services." },
              { title: "Best HR Consulting Firm — MENA HR Excellence Awards 2024", description: "Awarded for transformative HR consulting solutions across MENA." },
              { title: "Top 10 HR Technology Solutions Provider — CIO Review 2024", description: "Selected for innovative technology-led HR consulting approaches." },
            ].map((a, i) => (
              <motion.div key={a.title} className="bg-card/50 border border-border/20 p-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 * i }}>
                <Award className="w-8 h-8 text-cap-orange mb-4" />
                <h3 className="text-[16px] font-bold mb-3">{a.title}</h3>
                <p className="text-[14px] text-muted-foreground leading-[1.6]">{a.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LEADERS ===== */}
      <section id="leaders" className="py-24" ref={leadersRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2 className="text-[32px] md:text-[40px] font-bold mb-14" initial={{ opacity: 0, y: 20 }} animate={leadersInView ? { opacity: 1, y: 0 } : {}}>
            Our leaders
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((l, i) => (
              <motion.div key={l.name} className="group text-center" initial={{ opacity: 0, y: 20 }} animate={leadersInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 * i }}>
                <div className="w-40 h-52 mx-auto mb-5 bg-secondary overflow-hidden">
                  <div className={`w-full h-full flex items-center justify-center text-[36px] font-black ${i === 0 ? "bg-cap-blue/20 text-cap-blue" : i === 1 ? "bg-cap-orange/20 text-cap-orange" : i === 2 ? "bg-cap-green/20 text-cap-green" : "bg-cap-red/20 text-cap-red"}`}>
                    {l.name.split(" ").map(n => n[0]).join("")}
                  </div>
                </div>
                <h3 className="text-[16px] font-bold mb-1">{l.name}</h3>
                <p className="text-[14px] text-muted-foreground">{l.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-cap-blue">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-[32px] md:text-[40px] font-bold text-primary-foreground mb-3">HRCAMS careers</h2>
            <p className="text-[16px] text-primary-foreground/80 max-w-xl">Join our HR consulting team and work across industries to help organizations reimagine and build world-class people strategies.</p>
          </div>
          <a href="/careers" className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-[16px] font-semibold hover:gap-3 transition-all flex-shrink-0">
            Search open roles <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HRCAMS;
