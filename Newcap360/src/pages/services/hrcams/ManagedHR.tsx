import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import HRCAMSSubNavbar from "@/components/HRCAMSSubNavbar";
import { motion } from "framer-motion";
import { ArrowRight, Settings, UserCheck, FileText, Headphones } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ManagedHR = () => {
  const { ref, isInView } = useScrollAnimation(0.1);

  const solutions = [
    { icon: Settings, title: "Payroll & Benefits Administration", description: "End-to-end payroll processing, benefits enrolment, and statutory compliance management with 99.9% accuracy and on-time delivery." },
    { icon: UserCheck, title: "Employee Lifecycle Management", description: "Manage hiring, onboarding, transfers, promotions, separations, and full & final settlements through a single integrated platform." },
    { icon: FileText, title: "HR Shared Services", description: "Centralized HR service delivery model with SLA-driven operations, ticketing systems, and self-service employee portals." },
    { icon: Headphones, title: "HR Help Desk & Employee Support", description: "Dedicated HR helpdesk with multi-channel support (chat, email, phone) for employee queries, grievances, and policy clarifications." },
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
            Managed HR Services (Outsourced HR)
          </motion.h1>
          <motion.p className="text-lg text-foreground/80 leading-relaxed max-w-2xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            Focus on your core business while we handle your entire HR operations — from payroll to compliance to employee experience — with enterprise-grade reliability.
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
          <h2 className="text-2xl font-bold mb-4 text-primary-foreground">Outsource your HR, not your culture</h2>
          <a href="#" className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 font-semibold hover:gap-3 transition-all">Explore managed HR <ArrowRight className="w-5 h-5" /></a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ManagedHR;
