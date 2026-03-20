import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import TCBSubNavbar from "@/components/TCBSubNavbar";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Monitor, Gamepad2, BarChart3 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroImg from "@/assets/service-hero-tcb.jpg";

const solutions = [
  { icon: BookOpen, title: "Curriculum Architecture", description: "Design learning journeys with clear outcomes, progressive complexity, and blended modalities that maximize knowledge retention." },
  { icon: Monitor, title: "Digital Learning Platforms", description: "Build and deploy custom e-learning experiences with interactive modules, video content, and adaptive learning paths." },
  { icon: Gamepad2, title: "Gamification & Engagement", description: "Integrate game mechanics — points, badges, leaderboards, and challenges — to drive learner motivation and completion rates." },
  { icon: BarChart3, title: "Learning Analytics & ROI", description: "Measure learning effectiveness with advanced analytics dashboards tracking engagement, skill acquisition, and business impact." },
];

const LearningExperienceDesign = () => {
  const { ref, isInView } = useScrollAnimation(0.1);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SubNavbar title="Services" titlePath="/what-we-do" items={[
        { label: "ASER", path: "/what-we-do/services/aser" },
        { label: "HRCAMS", path: "/what-we-do/services/hrcams" },
        { label: "TCB", path: "/what-we-do/services/tcb" },
        { label: "PACE", path: "/what-we-do/services/pace" },
      ]} />
      <TCBSubNavbar />

      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="relative container mx-auto px-4 lg:px-8 py-28">
          <motion.span className="text-[11px] font-bold tracking-[0.15em] text-cap-orange uppercase mb-4 block" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>TCB</motion.span>
          <motion.h1 className="text-[40px] md:text-[56px] lg:text-[72px] font-black tracking-tight leading-[1.05] mb-6 max-w-4xl" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            Learning Experience Design
          </motion.h1>
          <motion.p className="text-[18px] md:text-[20px] text-muted-foreground leading-[1.6] max-w-2xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            Create learning experiences that stick. We design engaging, outcome-driven programmes that transform how your people learn and grow.
          </motion.p>
        </div>
      </section>

      <section className="py-24" ref={ref}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2 className="text-[32px] md:text-[40px] font-bold mb-12" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}>Our Solutions</motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((s, i) => (
              <motion.div key={s.title} className="bg-card border border-border/30 p-8 group hover:border-cap-blue/40 transition-all" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 * i }} whileHover={{ y: -4 }}>
                <s.icon className="w-10 h-10 text-cap-orange mb-5 group-hover:scale-110 transition-transform" />
                <h3 className="text-[18px] font-bold mb-3 group-hover:text-cap-blue transition-colors">{s.title}</h3>
                <p className="text-[14px] text-muted-foreground leading-[1.6]">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cap-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-[24px] font-bold mb-4 text-primary-foreground">Design learning that transforms performance</h2>
          <a href="#" className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-[16px] font-semibold hover:gap-3 transition-all">Explore LXD <ArrowRight className="w-5 h-5" /></a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LearningExperienceDesign;
