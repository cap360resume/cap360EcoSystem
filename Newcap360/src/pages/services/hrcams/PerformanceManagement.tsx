import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import HRCAMSSubNavbar from "@/components/HRCAMSSubNavbar";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, BarChart3, Target, TrendingUp, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PerformanceManagement = () => {
  const { ref: sRef, isInView: sInView } = useScrollAnimation(0.1);
  const { ref: bRef, isInView: bInView } = useScrollAnimation(0.1);

  const solutions = [
    { icon: Target, title: "OKR & KPI Framework Design", description: "Implement cascading goal-setting frameworks that align individual objectives with business strategy using OKRs, KPIs, and balanced scorecards." },
    { icon: BarChart3, title: "Continuous Feedback Systems", description: "Replace annual reviews with real-time, AI-enabled feedback loops that drive ongoing performance conversations and development." },
    { icon: TrendingUp, title: "Performance Calibration", description: "Design fair, transparent calibration processes that eliminate bias and ensure consistent performance standards across the organization." },
    { icon: Users, title: "Organisation Effectiveness Audits", description: "Comprehensive diagnostic assessments of organizational health, spans of control, decision-making velocity, and collaboration effectiveness." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SubNavbar title="Services" titlePath="/what-we-do" items={[
        { label: "ASER", path: "/what-we-do/services/aser" },
        { label: "HRCAMS", path: "/what-we-do/services/hrcams" },
        { label: "TCB", path: "/what-we-do/services/tcb" },
        { label: "PACE", path: "/what-we-do/services/pace" },
      ]} />
      <HRCAMSSubNavbar />

      <section className="relative min-h-[50vh] flex items-center bg-cap-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cap-navy via-background to-cap-navy opacity-50" />
        <div className="relative container mx-auto px-4 lg:px-8 py-28">
          <motion.span className="text-xs font-bold tracking-widest text-cap-orange uppercase mb-4 block" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>HRCAMS</motion.span>
          <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-6 max-w-4xl" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            Performance Management & Organisation Effectiveness
          </motion.h1>
          <motion.p className="text-lg text-foreground/80 leading-relaxed max-w-2xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            Drive accountability, transparency, and high-performance culture through modern performance management systems and organisation effectiveness interventions.
          </motion.p>
        </div>
      </section>

      <section className="py-24 section-dark" ref={sRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-12" initial={{ opacity: 0, y: 20 }} animate={sInView ? { opacity: 1, y: 0 } : {}}>Our Solutions</motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((s, i) => (
              <motion.div key={s.title} className="bg-card border border-border/30 p-8 group hover:border-cap-blue/40 transition-all" initial={{ opacity: 0, y: 30 }} animate={sInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 * i }} whileHover={{ y: -4 }}>
                <s.icon className="w-10 h-10 text-cap-orange mb-5 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3 group-hover:text-cap-blue transition-colors">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 section-navy" ref={bRef}>
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2 className="text-3xl font-bold mb-6" initial={{ opacity: 0, y: 20 }} animate={bInView ? { opacity: 1, y: 0 } : {}}>Key outcomes</motion.h2>
            <div className="space-y-4">
              {["35% improvement in goal alignment", "50% faster performance review cycles", "25% increase in employee productivity", "Reduced performance rating disputes by 60%"].map((b, i) => (
                <motion.div key={b} className="flex items-center gap-3" initial={{ opacity: 0, x: 20 }} animate={bInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.1 * i }}>
                  <CheckCircle className="w-5 h-5 text-cap-green flex-shrink-0" />
                  <span className="text-sm">{b}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="bg-card/50 border border-border/20 p-10 text-center">
            <div className="text-5xl font-black text-cap-orange mb-2">35%</div>
            <div className="text-muted-foreground">Average improvement in organisational effectiveness scores</div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cap-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-primary-foreground">Transform your performance culture</h2>
          <a href="#" className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 font-semibold hover:gap-3 transition-all">Get started <ArrowRight className="w-5 h-5" /></a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PerformanceManagement;
