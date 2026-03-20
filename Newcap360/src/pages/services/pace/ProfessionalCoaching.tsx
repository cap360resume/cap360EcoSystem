import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import PACESubNavbar from "@/components/PACESubNavbar";
import { motion } from "framer-motion";
import { ArrowRight, UserCheck, MessageCircle, Target, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroImg from "@/assets/service-hero-pace.jpg";

const solutions = [
  { icon: UserCheck, title: "Executive Coaching", description: "One-on-one coaching for C-suite and senior leaders focusing on strategic impact, stakeholder influence, and personal effectiveness." },
  { icon: MessageCircle, title: "Group Coaching Programmes", description: "Cohort-based coaching that builds collective leadership capability while fostering peer learning and accountability networks." },
  { icon: Target, title: "Career Coaching", description: "Personalized coaching that helps individuals clarify career goals, navigate transitions, and build strategies for advancement." },
  { icon: Award, title: "Mentor Programme Design", description: "Design and implement structured mentoring programmes with matching algorithms, development frameworks, and progress tracking." },
];

const ProfessionalCoaching = () => {
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
      <PACESubNavbar />

      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="relative container mx-auto px-4 lg:px-8 py-28">
          <motion.span className="text-[11px] font-bold tracking-[0.15em] text-cap-orange uppercase mb-4 block" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>PACE</motion.span>
          <motion.h1 className="text-[40px] md:text-[56px] lg:text-[72px] font-black tracking-tight leading-[1.05] mb-6 max-w-4xl" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            Professional Coaching & Mentoring
          </motion.h1>
          <motion.p className="text-[18px] md:text-[20px] text-muted-foreground leading-[1.6] max-w-2xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            Accelerate growth through expert guidance. Our coaching and mentoring programmes unlock potential and accelerate professional development at every level.
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
          <h2 className="text-[24px] font-bold mb-4 text-primary-foreground">Invest in coaching that delivers measurable results</h2>
          <a href="#" className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-[16px] font-semibold hover:gap-3 transition-all">Find a coach <ArrowRight className="w-5 h-5" /></a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProfessionalCoaching;
