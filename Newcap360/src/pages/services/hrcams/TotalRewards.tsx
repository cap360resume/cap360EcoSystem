import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import HRCAMSSubNavbar from "@/components/HRCAMSSubNavbar";
import { motion } from "framer-motion";
import { ArrowRight, DollarSign, Award, Heart, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TotalRewards = () => {
  const { ref, isInView } = useScrollAnimation(0.1);

  const solutions = [
    { icon: DollarSign, title: "Compensation Benchmarking & Design", description: "Market-aligned pay structures with job evaluation frameworks, pay bands, and variable pay programmes that attract and retain top talent." },
    { icon: Heart, title: "Benefits Strategy & Optimization", description: "Design flexible, cost-effective benefits programmes including health insurance, wellness, retirement, and lifestyle benefits." },
    { icon: Award, title: "Recognition & Rewards Programmes", description: "Build a culture of appreciation with structured recognition programmes, spot awards, and long-service milestone celebrations." },
    { icon: TrendingUp, title: "Executive Compensation & ESOP Design", description: "Design competitive C-suite compensation packages, equity plans, ESOPs, and long-term incentive programmes aligned with shareholder value." },
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
            Total Rewards Architecture
          </motion.h1>
          <motion.p className="text-lg text-foreground/80 leading-relaxed max-w-2xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            Design compelling total rewards strategies that balance competitiveness, fairness, and fiscal responsibility to win the war for talent.
          </motion.p>
        </div>
      </section>

      <section className="py-24 section-dark" ref={ref}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-12" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}>Our Solutions</motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((s, i) => (
              <motion.div key={s.title} className="bg-card border border-border/30 p-8 group hover:border-cap-blue/40 transition-all" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 * i }} whileHover={{ y: -4 }}>
                <s.icon className="w-10 h-10 text-cap-orange mb-5 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3 group-hover:text-cap-blue transition-colors">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cap-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-primary-foreground">Design a rewards strategy that wins talent</h2>
          <a href="#" className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 font-semibold hover:gap-3 transition-all">Get started <ArrowRight className="w-5 h-5" /></a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TotalRewards;
