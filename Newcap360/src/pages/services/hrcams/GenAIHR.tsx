import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import HRCAMSSubNavbar from "@/components/HRCAMSSubNavbar";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Bot, Zap, BarChart3 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const GenAIHR = () => {
  const { ref, isInView } = useScrollAnimation(0.1);

  const solutions = [
    { icon: Bot, title: "AI-Powered HR Chatbots", description: "Deploy intelligent HR assistants that handle employee queries, policy lookups, leave management, and onboarding workflows 24/7." },
    { icon: Brain, title: "Predictive Workforce Analytics", description: "Leverage machine learning models to predict attrition risk, identify high-potential talent, and forecast workforce demand." },
    { icon: Zap, title: "Process Automation with Gen AI", description: "Automate resume screening, job description generation, offer letter creation, performance summaries, and HR reporting with generative AI." },
    { icon: BarChart3, title: "AI-Driven Decision Intelligence", description: "Transform HR data into actionable insights with AI dashboards that surface trends, anomalies, and recommendations in real-time." },
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
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-cap-orange/10" />
        <div className="relative container mx-auto px-4 lg:px-8 py-28">
          <motion.span className="text-xs font-bold tracking-widest text-cap-orange uppercase mb-4 block" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>HRCAMS</motion.span>
          <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-6 max-w-4xl" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            Gen AI for HR & Operational Productivity
          </motion.h1>
          <motion.p className="text-lg text-foreground/80 leading-relaxed max-w-2xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            Harness the power of generative AI to revolutionize HR operations, enhance employee experiences, and unlock unprecedented productivity gains.
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
          <h2 className="text-2xl font-bold mb-4 text-primary-foreground">Start your AI-powered HR transformation</h2>
          <a href="#" className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 font-semibold hover:gap-3 transition-all">Explore Gen AI solutions <ArrowRight className="w-5 h-5" /></a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default GenAIHR;
