import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Award, Laptop, Users, Lightbulb, GraduationCap, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useRef } from "react";
import heroImg from "@/assets/service-hero-tcb.jpg";
import trending1 from "@/assets/trending-1.jpg";
import trending2 from "@/assets/trending-2.jpg";
import trending3 from "@/assets/trending-3.jpg";
import trending4 from "@/assets/trending-4.jpg";

const serviceSubNav = [
  { label: "What to do", path: "#offerings" },
  { label: "What's trending", path: "#trending" },
  { label: "Methodology", path: "#methodology" },
  { label: "Leaders", path: "#leaders" },
  { label: "Careers", path: "/careers" },
];

const trendingImages = [trending1, trending2, trending3, trending4];

const offerings = [
  { icon: BookOpen, title: "Leadership Development Programmes", description: "Immersive learning journeys for emerging and senior leaders that build strategic thinking, people management, and change leadership capabilities.", color: "bg-cap-blue" },
  { icon: Laptop, title: "Digital & Technical Upskilling", description: "Role-based digital academies covering AI, data analytics, cloud computing, cybersecurity, and emerging technologies.", color: "bg-cap-orange" },
  { icon: Users, title: "Team Effectiveness & Collaboration", description: "Experiential workshops and simulations that strengthen team dynamics, cross-functional collaboration, and organizational communication.", color: "bg-cap-green" },
  { icon: Lightbulb, title: "Innovation & Design Thinking", description: "Structured innovation bootcamps that embed design thinking, agile methodologies, and creative problem-solving.", color: "bg-cap-red" },
  { icon: GraduationCap, title: "Learning Experience Design", description: "Custom-designed blended learning ecosystems combining micro-learning, gamification, mentoring, and on-the-job application.", color: "bg-cap-dark-blue" },
  { icon: Award, title: "Certification & Compliance Training", description: "Industry-recognized certification programmes and regulatory compliance training delivered through scalable digital platforms.", color: "bg-cap-orange" },
];

const trendingInsights = [
  { category: "RESEARCH REPORT", title: "The Future of Corporate Learning in 2026" },
  { category: "PERSPECTIVE", title: "From Training to Transformation" },
  { category: "BLOG", title: "Gamification in Corporate Training" },
  { category: "RESEARCH REPORT", title: "Measuring Training ROI: Beyond Satisfaction Scores" },
];

const TCB = () => {
  const { ref: statsRef, isInView: statsInView } = useScrollAnimation(0.2);
  const { ref: offerRef, isInView: offerInView } = useScrollAnimation(0.1);
  const { ref: trendingRef, isInView: trendingInView } = useScrollAnimation(0.1);
  const { ref: methodRef, isInView: methodInView } = useScrollAnimation(0.1);
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
      <SubNavbar title="TCB" titlePath="/what-we-do/services/tcb" items={serviceSubNav} />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-background overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 py-32">
          <motion.h1 className="text-[40px] md:text-[56px] lg:text-[72px] font-black tracking-tight leading-[1.05] mb-6 max-w-3xl" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            Training & Capability Building (TCB)
          </motion.h1>
          <motion.p className="text-[18px] md:text-[20px] text-muted-foreground leading-[1.6] max-w-xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
            Build future-ready capabilities at scale. Our training solutions transform knowledge gaps into competitive advantages through immersive, outcome-driven learning experiences.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-border/20" ref={statsRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2 className="text-[24px] md:text-[28px] font-bold mb-14" initial={{ opacity: 0 }} animate={statsInView ? { opacity: 1 } : {}}>TCB now</motion.h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { value: "100K+", desc: "professionals trained across leadership, digital, and compliance programmes" },
              { value: "95%", desc: "participant satisfaction rate across all learning interventions" },
              { value: "60%", desc: "average capability uplift measured through pre/post assessments" },
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
            Reinvent with TCB
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
            <motion.h2 className="text-[32px] md:text-[40px] font-bold" initial={{ opacity: 0, y: 20 }} animate={trendingInView ? { opacity: 1, y: 0 } : {}}>What's trending with TCB?</motion.h2>
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

      {/* Methodology */}
      <section id="methodology" className="py-24" ref={methodRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2 className="text-[32px] md:text-[40px] font-bold mb-16 text-center" initial={{ opacity: 0, y: 20 }} animate={methodInView ? { opacity: 1, y: 0 } : {}}>Our learning methodology</motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Diagnose", desc: "Skill-gap analysis and learning needs assessment" },
              { step: "02", title: "Design", desc: "Custom curriculum aligned to business outcomes" },
              { step: "03", title: "Deliver", desc: "Blended, experiential learning experiences" },
              { step: "04", title: "Measure", desc: "ROI tracking and continuous improvement" },
            ].map((item, i) => (
              <motion.div key={item.step} className="text-center" initial={{ opacity: 0, y: 30 }} animate={methodInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15 * i }}>
                <div className="text-[48px] font-black text-cap-orange/30 mb-4">{item.step}</div>
                <h3 className="text-[20px] font-bold mb-2">{item.title}</h3>
                <p className="text-[14px] text-muted-foreground">{item.desc}</p>
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
              { name: "Fatima Al-Zahra", role: "Lead — Training & Capability Building" },
              { name: "David Park", role: "Lead — Digital Learning Design" },
              { name: "Amara Diallo", role: "Lead — Leadership Development" },
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
          Cloud careers
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-300 text-lg max-w-xl leading-relaxed mb-10"
        >
          Join our cloud team and work across industries—from high tech to high
          fashion—to help clients reimagine and build a better future.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-4 rounded-md font-semibold text-white shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
        >
          Search open roles
        </motion.button>
      </div>
    </section>
      <Footer />
    </div>
  );
};

export default TCB;
