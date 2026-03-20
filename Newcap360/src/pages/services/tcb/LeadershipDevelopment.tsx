import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import TCBSubNavbar from "@/components/TCBSubNavbar";
import { motion } from "framer-motion";
import { ArrowRight, Award, Users, Target, Lightbulb } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroImg from "@/assets/service-hero-tcb.jpg";

const solutions = [
  { icon: Award, title: "Executive Leadership Programmes", description: "Intensive programmes for senior leaders focusing on strategic thinking, stakeholder management, and organizational transformation." },
  { icon: Users, title: "Emerging Leaders Academy", description: "Structured development tracks that prepare high-potential mid-level managers for senior leadership roles through experiential learning." },
  { icon: Target, title: "Leadership Competency Frameworks", description: "Custom competency models aligned to your organization's values, strategy, and culture that define what great leadership looks like." },
  { icon: Lightbulb, title: "Action Learning Projects", description: "Real-world business challenges tackled by cross-functional leadership cohorts, delivering both development outcomes and business results." },
];

const LeadershipDevelopment = () => {
  const { ref, isInView } = useScrollAnimation(0.1);
  const { ref: impactRef, isInView: impactInView } = useScrollAnimation(0.1);

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
            Leadership Development Programmes
          </motion.h1>
          <motion.p className="text-[18px] md:text-[20px] text-muted-foreground leading-[1.6] max-w-2xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            Build leaders who inspire, transform, and deliver results. Our evidence-based programmes develop the capabilities your organization needs to thrive.
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

      <section className="py-24 section-navy" ref={impactRef}>
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2 className="text-[32px] md:text-[40px] font-bold mb-6" initial={{ opacity: 0, y: 20 }} animate={impactInView ? { opacity: 1, y: 0 } : {}}>Measurable Leadership Impact</motion.h2>
            <motion.p className="text-[16px] text-muted-foreground leading-[1.6]" initial={{ opacity: 0 }} animate={impactInView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}>
              Our leadership programmes deliver tangible ROI through improved team performance, higher engagement scores, and accelerated business outcomes.
            </motion.p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[{ value: "92%", label: "Participant Satisfaction" }, { value: "3.5x", label: "ROI on Leadership Investment" }, { value: "45%", label: "Improvement in Team Metrics" }, { value: "60%", label: "Internal Promotion Rate" }].map((stat, i) => (
              <motion.div key={stat.label} className="bg-card/50 border border-border/20 p-6 text-center" initial={{ opacity: 0, scale: 0.9 }} animate={impactInView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.1 * i }}>
                <div className="text-[32px] font-black text-cap-orange mb-1">{stat.value}</div>
                <div className="text-[12px] text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cap-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-[24px] font-bold mb-4 text-primary-foreground">Ready to develop your next generation of leaders?</h2>
          <a href="#" className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-[16px] font-semibold hover:gap-3 transition-all">Get started <ArrowRight className="w-5 h-5" /></a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LeadershipDevelopment;
