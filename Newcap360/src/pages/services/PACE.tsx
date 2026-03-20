import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Rocket, Target, TrendingUp, UserCheck, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useRef } from "react";
import heroImg from "@/assets/service-hero-pace.jpg";
import trending1 from "@/assets/trending-1.jpg";
import trending2 from "@/assets/trending-2.jpg";
import trending3 from "@/assets/trending-3.jpg";
import trending4 from "@/assets/trending-4.jpg";

const serviceSubNav = [
  { label: "What to do", path: "#offerings" },
  { label: "What's trending", path: "#trending" },
  { label: "Impact", path: "#impact" },
  { label: "Leaders", path: "#leaders" },
  { label: "Careers", path: "/careers" },
];

const trendingImages = [trending1, trending2, trending3, trending4];

const offerings = [
  { icon: Compass, title: "Career Path Architecture", description: "Design structured career pathways with clear milestones, competency requirements, and growth trajectories for every role family.", color: "bg-cap-blue" },
  { icon: UserCheck, title: "Professional Coaching & Mentoring", description: "One-on-one and group coaching programmes led by certified coaches that accelerate leadership readiness and professional effectiveness.", color: "bg-cap-orange" },
  { icon: Briefcase, title: "Role Alignment & Job Enrichment", description: "Strategic role redesign that aligns individual strengths with organizational needs, maximizing engagement and productivity.", color: "bg-cap-green" },
  { icon: TrendingUp, title: "Succession Planning", description: "Build robust succession pipelines with data-driven identification, assessment, and accelerated development of high-potential talent.", color: "bg-cap-red" },
  { icon: Rocket, title: "Career Transition Support", description: "Comprehensive outplacement and career transition services including resume building, interview preparation, and job placement support.", color: "bg-cap-dark-blue" },
  { icon: Target, title: "Individual Development Planning", description: "Personalized development frameworks that integrate 360° feedback, skill assessments, and action-oriented growth plans.", color: "bg-cap-orange" },
];

const trendingInsights = [
  { category: "RESEARCH REPORT", title: "Career Architecture in the Age of AI" },
  { category: "PERSPECTIVE", title: "The ROI of Executive Coaching" },
  { category: "BLOG", title: "Succession Planning Beyond the C-Suite" },
  { category: "RESEARCH REPORT", title: "Internal Mobility: The Untapped Talent Strategy" },
];

const PACE = () => {
  const { ref: statsRef, isInView: statsInView } = useScrollAnimation(0.2);
  const { ref: offerRef, isInView: offerInView } = useScrollAnimation(0.1);
  const { ref: trendingRef, isInView: trendingInView } = useScrollAnimation(0.1);
  const { ref: impactRef, isInView: impactInView } = useScrollAnimation(0.1);
  const { ref: leadersRef, isInView: leadersInView } = useScrollAnimation(0.1);
  const trendingScrollRef = useRef<HTMLDivElement>(null);

  const scrollTrending = (dir: "left" | "right") => {
    if (trendingScrollRef.current) {
      trendingScrollRef.current.scrollBy({ left: dir === "left" ? -340 : 340, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SubNavbar title="PACE" titlePath="/what-we-do/services/pace" items={serviceSubNav} />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-background overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 py-32">
          <motion.h1 className="text-[40px] md:text-[56px] lg:text-[72px] font-black tracking-tight leading-[1.05] mb-6 max-w-3xl" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            Professional Alignment & Career Enhancement (PACE)
          </motion.h1>
          <motion.p className="text-[18px] md:text-[20px] text-muted-foreground leading-[1.6] max-w-xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
            Empower your people to thrive. PACE aligns individual career aspirations with organizational goals, creating a workforce that is engaged, purpose-driven, and future-ready.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-border/20" ref={statsRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2 className="text-[24px] md:text-[28px] font-bold mb-14" initial={{ opacity: 0 }} animate={statsInView ? { opacity: 1 } : {}}>PACE now</motion.h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { value: "40%", desc: "higher employee engagement in organizations with structured career alignment programmes" },
              { value: "30%", desc: "lower attrition rates for companies investing in professional development" },
              { value: "2x", desc: "faster internal mobility when career pathways are clearly defined" },
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

      {/* Offerings */}
      <section id="offerings" className="py-24" ref={offerRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2 className="text-[32px] md:text-[40px] font-bold mb-14" initial={{ opacity: 0, y: 20 }} animate={offerInView ? { opacity: 1, y: 0 } : {}}>
            Reinvent with PACE
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((item, i) => (
              <motion.div key={item.title} className="group bg-card border border-border/30 overflow-hidden hover:border-cap-blue/50 transition-all" initial={{ opacity: 0, y: 30 }} animate={offerInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.08 * i }} whileHover={{ y: -4 }}>
                <div className={`h-1 ${item.color}`} />
                <div className="p-8">
                  <item.icon className="w-10 h-10 text-cap-orange mb-5 group-hover:scale-110 transition-transform" />
                  <h3 className="text-[18px] font-bold mb-3 group-hover:text-cap-blue transition-colors">{item.title}</h3>
                  <p className="text-[14px] text-muted-foreground leading-[1.6] mb-6">{item.description}</p>
                  <span className="cta-link text-[14px]">Learn more <ArrowRight className="w-4 h-4 text-cap-orange" /></span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending */}
      <section id="trending" className="py-24 section-navy" ref={trendingRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <motion.h2 className="text-[32px] md:text-[40px] font-bold" initial={{ opacity: 0, y: 20 }} animate={trendingInView ? { opacity: 1, y: 0 } : {}}>What's trending with PACE?</motion.h2>
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

      {/* Impact */}
      <section id="impact" className="py-24" ref={impactRef}>
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2 className="text-[32px] md:text-[40px] font-bold mb-6" initial={{ opacity: 0, y: 20 }} animate={impactInView ? { opacity: 1, y: 0 } : {}}>When people grow, organizations flourish</motion.h2>
            <motion.p className="text-[16px] text-muted-foreground leading-[1.6]" initial={{ opacity: 0 }} animate={impactInView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}>
              Organizations that invest in career alignment and professional development see measurable improvements across every workforce metric.
            </motion.p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "40%", label: "Higher Engagement" },
              { value: "30%", label: "Lower Attrition" },
              { value: "2x", label: "Faster Internal Mobility" },
              { value: "85%", label: "Career Satisfaction" },
            ].map((stat, i) => (
              <motion.div key={stat.label} className="bg-card/50 border border-border/20 p-6 text-center" initial={{ opacity: 0, scale: 0.9 }} animate={impactInView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.1 * i }}>
                <div className="text-[32px] font-black text-cap-orange mb-1">{stat.value}</div>
                <div className="text-[12px] text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaders */}
      <section id="leaders" className="py-24 section-navy" ref={leadersRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2 className="text-[32px] md:text-[40px] font-bold mb-14" initial={{ opacity: 0, y: 20 }} animate={leadersInView ? { opacity: 1, y: 0 } : {}}>Our leaders</motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Nadia Hassani", role: "Lead — Professional Alignment & Career Enhancement" },
              { name: "Michael Torres", role: "Lead — Executive Coaching" },
              { name: "Yuki Tanaka", role: "Lead — Succession Planning" },
            ].map((l, i) => (
              <motion.div key={l.name} className="group text-center" initial={{ opacity: 0, y: 20 }} animate={leadersInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 * i }}>
                <div className="w-40 h-52 mx-auto mb-5 bg-secondary overflow-hidden">
                  <div className={`w-full h-full flex items-center justify-center text-[36px] font-black ${i === 0 ? "bg-cap-blue/20 text-cap-blue" : i === 1 ? "bg-cap-orange/20 text-cap-orange" : "bg-cap-green/20 text-cap-green"}`}>
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

      {/* CTA */}
      <section className="py-20 bg-cap-blue">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-[32px] md:text-[40px] font-bold text-primary-foreground mb-3">PACE careers</h2>
            <p className="text-[16px] text-primary-foreground/80 max-w-xl">Join our career enhancement team and help people build fulfilling, purpose-driven careers.</p>
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

export default PACE;
