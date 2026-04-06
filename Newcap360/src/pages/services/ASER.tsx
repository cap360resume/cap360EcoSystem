import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import ASERSubNavbar from "@/components/ASERSubNavbar";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, BarChart3, Users, Target, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import heroImg from "@/assets/service-hero-aser.jpg";
import trending1 from "@/assets/trending-1.jpg";
import trending2 from "@/assets/trending-2.jpg";
import trending3 from "@/assets/trending-3.jpg";
import trending4 from "@/assets/trending-4.jpg";

const serviceSubNav = [
  { label: "What to do", path: "#offerings" },
  { label: "What's trending", path: "#trending" },
  { label: "Our Process", path: "#process" },
  { label: "Leaders", path: "#leaders" },
  { label: "Careers", path: "/careers" },
];

const trendingImages = [trending1, trending2, trending3, trending4];

const offerings = [
  { icon: BarChart3, title: "Competency-Based Assessments", description: "Scientifically designed assessments that measure behavioral competencies, cognitive abilities, and domain-specific knowledge aligned to organizational frameworks.", color: "bg-cap-blue", path: "/what-we-do/services/aser/competency-assessments" },
  { icon: Users, title: "Assessment & Development Centres", description: "Multi-method, multi-assessor evaluation programmes that provide 360° insights into leadership potential and readiness for critical roles.", color: "bg-cap-orange", path: "/what-we-do/services/aser/assessment-centres" },
  { icon: Target, title: "Psychometric Testing", description: "Validated psychometric instruments measuring personality traits, aptitude, and emotional intelligence for recruitment and development.", color: "bg-cap-green", path: "/what-we-do/services/aser/psychometric-testing" },
  { icon: TrendingUp, title: "Talent Analytics & Benchmarking", description: "Data-driven talent analytics that benchmark individual and team capabilities against industry standards.", color: "bg-cap-red", path: "/what-we-do/services/aser/talent-analytics" },
];

const trendingInsights = [
  { category: "RESEARCH REPORT", title: "The Science of Assessment: Predicting Performance in 2026" },
  { category: "PERSPECTIVE", title: "Beyond IQ: The Rise of Emotional Intelligence Assessments" },
  { category: "BLOG", title: "Assessment Centres in a Virtual World" },
  { category: "RESEARCH REPORT", title: "AI-Powered Talent Analytics: Opportunities & Ethics" },
];

const benefits = [
  "Objective, bias-free talent evaluation",
  "Predict future performance with 85%+ accuracy",
  "Reduce mis-hires and attrition costs",
  "Accelerate leadership pipeline development",
  "Customizable to your competency framework",
  "Digital-first delivery with global scalability",
];

const ASER = () => {
  const navigate = useNavigate();
  const { ref: statsRef, isInView: statsInView } = useScrollAnimation(0.2);
  const { ref: offerRef, isInView: offerInView } = useScrollAnimation(0.1);
  const { ref: trendingRef, isInView: trendingInView } = useScrollAnimation(0.1);
  const { ref: processRef, isInView: processInView } = useScrollAnimation(0.1);
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
      <SubNavbar title="Services" titlePath="/what-we-do" items={[
        { label: "ASER", path: "/what-we-do/services/aser" },
        { label: "HRCAMS", path: "/what-we-do/services/hrcams" },
        { label: "TCB", path: "/what-we-do/services/tcb" },
        { label: "PACE", path: "/what-we-do/services/pace" },
      ]} />
      <ASERSubNavbar />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-background overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 py-32">
          <motion.h1 className="text-[40px] md:text-[56px] lg:text-[72px] font-black tracking-tight leading-[1.05] mb-6 max-w-3xl" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            Assessment Services (ASER)
          </motion.h1>
          <motion.p className="text-[18px] md:text-[20px] text-muted-foreground leading-[1.6] max-w-xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
            Unlock the true potential of your workforce with scientifically validated assessment solutions that identify, evaluate, and develop talent at every level.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-border/20" ref={statsRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2 className="text-[24px] md:text-[28px] font-bold mb-14" initial={{ opacity: 0 }} animate={statsInView ? { opacity: 1 } : {}}>ASER now</motion.h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { value: "85%+", desc: "prediction accuracy for job performance using our assessment frameworks" },
              { value: "50K+", desc: "professionals assessed across MENA, Africa, and South Asia" },
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

      {/* Offerings */}
      <section id="offerings" className="py-24" ref={offerRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2 className="text-[32px] md:text-[40px] font-bold mb-14" initial={{ opacity: 0, y: 20 }} animate={offerInView ? { opacity: 1, y: 0 } : {}}>
            Reinvent with ASER
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {offerings.map((item, i) => (
              <motion.div key={item.title} className="group bg-card border border-border/30 overflow-hidden hover:border-cap-blue/50 transition-all cursor-pointer" initial={{ opacity: 0, y: 30 }} animate={offerInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 * i }} whileHover={{ y: -4 }} onClick={() => navigate(item.path)}>
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

      {/* Benefits */}
      <section className="py-24 section-navy">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[32px] md:text-[40px] font-bold mb-6">Transform how you identify and grow talent</h2>
            <p className="text-[16px] text-muted-foreground leading-[1.6]">Our assessment services combine the science of psychometrics with cutting-edge technology to deliver actionable talent insights.</p>
          </div>
          <div className="space-y-4">
            {benefits.map((b, i) => (
              <motion.div key={b} className="flex items-center gap-4 p-4 bg-card/50 border border-border/20" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 * i }}>
                <CheckCircle className="w-5 h-5 text-cap-green flex-shrink-0" />
                <span className="text-[14px] font-medium">{b}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending */}
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

      {/* Process */}
      <section id="process" className="py-24 section-navy" ref={processRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2 className="text-[32px] md:text-[40px] font-bold mb-16 text-center" initial={{ opacity: 0, y: 20 }} animate={processInView ? { opacity: 1, y: 0 } : {}}>
            A structured approach to talent assessment
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {["Discovery & Design", "Tool Selection & Customization", "Assessment Delivery", "Insights & Action Planning"].map((step, i) => (
              <motion.div key={step} className="relative text-center" initial={{ opacity: 0, y: 30 }} animate={processInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15 * i }}>
                <div className="w-16 h-16 bg-cap-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[24px] font-black text-cap-orange">{i + 1}</span>
                </div>
                <h3 className="text-[18px] font-bold mb-2">{step}</h3>
                {i < 3 && <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-border/30" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaders */}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cap-blue">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-[32px] md:text-[40px] font-bold text-primary-foreground mb-3">ASER careers</h2>
            <p className="text-[16px] text-primary-foreground/80 max-w-xl">Join our assessment team and help organizations identify, evaluate, and develop their most critical asset — their people.</p>
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

export default ASER;
