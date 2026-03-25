import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import PACESubNavbar from "@/components/PACESubNavbar";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Rocket, Target, TrendingUp, UserCheck, Briefcase } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useNavigate } from "react-router-dom";
import heroImg from "@/assets/service-hero-pace.jpg";

const offerings = [
  {
    icon: Compass,
    title: "Career Path Architecture",
    description: "Design structured career pathways with clear milestones, competency requirements, and growth trajectories for every role family.",
    color: "bg-cap-blue",
    path: "/what-we-do/services/pace/career-path-architecture"
  },
  {
    icon: UserCheck,
    title: "Professional Coaching & Mentoring",
    description: "One-on-one and group coaching programmes led by certified coaches that accelerate leadership readiness and professional effectiveness.",
    color: "bg-cap-orange",
    path: "/what-we-do/services/pace/professional-coaching"
  },
  {
    icon: Briefcase,
    title: "Role Alignment & Job Enrichment",
    description: "Strategic role redesign that aligns individual strengths with organizational needs, maximizing engagement and productivity.",
    color: "bg-cap-green",
    path: "/what-we-do/services/pace/role-alignment"
  },
  {
    icon: TrendingUp,
    title: "Succession Planning",
    description: "Build robust succession pipelines with data-driven identification, assessment, and accelerated development of high-potential talent.",
    color: "bg-cap-red",
    path: "/what-we-do/services/pace/succession-planning"
  },
  {
    icon: Rocket,
    title: "Career Transition Support",
    description: "Comprehensive outplacement and career transition services including resume building, interview preparation, and job placement support.",
    color: "bg-cap-dark-blue",
    path: "/what-we-do/services/pace/career-transition"
  },
  {
    icon: Target,
    title: "Individual Development Planning",
    description: "Personalized development frameworks that integrate 360° feedback, skill assessments, and action-oriented growth plans.",
    color: "bg-cap-orange",
    path: "/what-we-do/services/pace/individual-development"
  },
];

const ReinventWithPACE = () => {
  const { ref, isInView } = useScrollAnimation(0.1);
  const navigate = useNavigate();

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

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-background overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 py-32">
          <motion.span className="text-[11px] font-bold tracking-[0.15em] text-cap-orange uppercase mb-4 block" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>PACE</motion.span>
          <motion.h1 className="text-[40px] md:text-[56px] lg:text-[72px] font-black tracking-tight leading-[1.05] mb-6 max-w-4xl" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            Reinvent with PACE
          </motion.h1>
          <motion.p className="text-[18px] md:text-[20px] text-muted-foreground leading-[1.6] max-w-xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
            Transform your workforce through comprehensive career development solutions. Our PACE services empower individuals and organizations to achieve their full potential.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24" ref={ref}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2 className="text-[32px] md:text-[40px] font-bold mb-14" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}>
            Our Services
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((item, i) => (
              <motion.div
                key={item.title}
                className="group bg-card border border-border/30 overflow-hidden hover:border-cap-blue/50 transition-all cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.08 * i }}
                whileHover={{ y: -4 }}
                onClick={() => navigate(item.path)}
              >
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

      {/* CTA */}
      <section className="py-20 bg-cap-blue">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-[32px] md:text-[40px] font-bold text-primary-foreground mb-3">Ready to transform your workforce?</h2>
            <p className="text-[16px] text-primary-foreground/80 max-w-xl">Let's discuss how PACE can help your organization build a culture of growth and development.</p>
          </div>
          <button
            onClick={() => navigate('/what-we-do/services/pace')}
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-[16px] font-semibold hover:gap-3 transition-all flex-shrink-0"
          >
            Explore PACE <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReinventWithPACE;