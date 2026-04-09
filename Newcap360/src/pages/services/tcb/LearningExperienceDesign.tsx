import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import TCBSubNavbar from "@/components/TCBSubNavbar";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Award, Users, Target, Lightbulb, Brain, Compass, Rocket, ChevronRight, Star, TrendingUp, Shield, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useRef, useState } from "react";
import heroImg from "@/assets/heroImg.jpg";

const programs = [
  {
    icon: Star,
    tag: "FOUNDATION",
    title: "Basics for Budding Leaders",
    subtitle: "Launch leadership journeys with confidence.",
    description:
      "Learn foundational principles of effective leadership, self-awareness, emotional intelligence basics, team dynamics, and the difference between management and leadership. Perfect for emerging leaders and high-potential individual contributors stepping into leadership for the first time.",
    format: "2–3 days",
    mode: "Hybrid",
    accent: "#F59E0B",
    gradient: "from-amber-500/10 to-yellow-500/5",
  },
  {
    icon: Compass,
    tag: "TRANSITION",
    title: "Leadership Skills for Leaders in Transition",
    subtitle: "Navigate career transitions with clarity.",
    description:
      "Designed for leaders stepping into new roles or higher responsibilities. Learn to establish credibility quickly, manage team expectations, handle organizational politics, maintain credibility, and lead through ambiguity.",
    format: "2–3 days",
    mode: "Hybrid",
    accent: "#F59E0B",
    gradient: "from-amber-500/10 to-yellow-500/5",
  },
  {
    icon: TrendingUp,
    tag: "SENIOR",
    title: "Enhancing Leadership Skills for Senior Leaders",
    subtitle: "Elevate executive leadership capabilities.",
    description:
      "Tailored for experienced leaders. Learn strategic thinking, organizational influence, executive presence, managing change, developing other leaders, and creating lasting organizational impact.",
    format: "3–5 days + Ongoing Coaching",
    mode: "Hybrid",
    accent: "#F59E0B",
    gradient: "from-amber-500/10 to-yellow-500/5",
  },
  {
    icon: Brain,
    tag: "PROBLEM SOLVING",
    title: "Problem Solving Tools for Leaders",
    subtitle: "Tackle complex challenges systematically.",
    description:
      "Learn root cause analysis, structured problem-solving frameworks, decision-making methodologies, and how to guide teams through problem-solving processes. Develop the analytical skills expected at senior levels.",
    format: "2 days",
    mode: "Hybrid",
    accent: "#F59E0B",
    gradient: "from-amber-500/10 to-yellow-500/5",
  },
  {
    icon: Rocket,
    tag: "MINDSET",
    title: "Build Ownership & Entrepreneurial Mindset",
    subtitle: "Create a culture of accountability and ownership.",
    description:
      "Foster entrepreneurial thinking within your teams, encourage proactive problem-solving, develop business acumen, and build accountability without micromanagement. Transform employee mindsets from \"just following orders\" to \"owning outcomes.\"",
    format: "2–3 days",
    mode: "Hybrid",
    accent: "#F59E0B",
    gradient: "from-amber-500/10 to-yellow-500/5",
  },
  {
    icon: Users,
    tag: "TEAM LEADERSHIP",
    title: "Manage Teams Effectively",
    subtitle: "Master the art of team leadership.",
    description:
      "Learn to recruit and develop talent, create accountability, conduct coaching conversations (not just reviews), manage conflict, maintain team motivation, and lead diverse teams toward common goals. Transform team performance.",
    format: "2–3 days + Coaching",
    mode: "Hybrid",
    accent: "#F59E0B",
    gradient: "from-amber-500/10 to-yellow-500/5",
  },
];

const stats = [
  { value: "92%", label: "Participant Satisfaction" },
  { value: "3.5x", label: "ROI on Leadership Investment" },
  { value: "45%", label: "Improvement in Team Metrics" },
  { value: "60%", label: "Internal Promotion Rate" },
];

const ProgramCard = ({ program, index }) => {
  const [hovered, setHovered] = useState(false);
  const { ref, isInView } = useScrollAnimation(0.1);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group"
    >
      <div
        className={`relative overflow-hidden border transition-all duration-500 h-full
          ${hovered
            ? "border-transparent shadow-2xl -translate-y-1"
            : "border-border/20"
          }
        `}
        style={{
          background: hovered
            ? `linear-gradient(135deg, ${program.accent}18 0%, ${program.accent}08 100%)`
            : "hsl(var(--card))",
        }}
      >
        {/* top accent bar */}
        <div
          className="h-[3px] w-full transition-all duration-500"
          style={{
            background: hovered
              ? `linear-gradient(90deg, ${program.accent}, transparent)`
              : "transparent",
          }}
        />

        <div className="p-8">
          {/* Tag + Icon row */}
          <div className="flex items-start justify-between mb-6">
            <span
              className="text-[10px] font-black tracking-[0.2em] px-3 py-1.5"
              style={{
                color: program.accent,
                backgroundColor: `${program.accent}18`,
              }}
            >
              {program.tag}
            </span>
            <div
              className="w-12 h-12 flex items-center justify-center transition-all duration-300"
              style={{
                backgroundColor: `${program.accent}15`,
                transform: hovered ? "scale(1.1) rotate(5deg)" : "scale(1)",
              }}
            >
              <program.icon
                className="w-6 h-6"
                style={{ color: program.accent }}
              />
            </div>
          </div>

          <h3 className="text-[20px] font-black leading-tight mb-2 tracking-tight">
            {program.title}
          </h3>
          <p
            className="text-[15px] font-semibold mb-4"
            style={{ color: program.accent }}
          >
            {program.subtitle}
          </p>
          <p className="text-[15px] text-muted-foreground leading-[1.7] mb-8">
            {program.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const LearningExperienceDesign = () => {
  const { ref, isInView } = useScrollAnimation(0.1);
  const { ref: impactRef, isInView: impactInView } = useScrollAnimation(0.1);
  const { ref: principlesRef, isInView: principlesInView } = useScrollAnimation(0.1);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SubNavbar
        title="Services"
        titlePath="/what-we-do"
        items={[
          { label: "ASER", path: "/what-we-do/services/aser" },
          { label: "HRCAMS", path: "/what-we-do/services/hrcams" },
          { label: "TCB", path: "/what-we-do/services/tcb" },
          { label: "PACE", path: "/what-we-do/services/pace" },
        ]}
      />
      <TCBSubNavbar />

      {/* ─── HERO ─── */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <img
            src={heroImg}
            alt=""
            className="w-full h-full object-cover opacity-50"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/20" />

        {/* decorative vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-cap-orange to-transparent opacity-60" />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative container mx-auto px-4 lg:px-8 py-32"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[1px] w-8 bg-cap-orange" />
            <span className="text-[15px] font-black tracking-[0.25em] text-cap-orange uppercase">
              TCB · Learning Experience Design
            </span>
          </motion.div>

          <motion.h1
            className="text-[32px] md:text-[40px] lg:text-[60px] font-black tracking-tight leading-[1.0] mb-6 max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            Leaders Are{" "}
            <span className="relative inline-block">
              Made,
              <span className="absolute bottom-1 left-0 right-0 h-[4px] bg-cap-orange opacity-70" />
            </span>
            <br />
            Not Born.
          </motion.h1>

          <motion.p
            className="text-[20px] md:text-[20px] text-foreground/85 leading-[1.75] max-w-2xl mb-10 font-normal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Leadership is not about force or pressure — it's about setting examples, showing care, demonstrating integrity, and creating connected, engaged teams.{" "}
            <strong className="text-foreground font-bold">We develop leaders at every level.</strong>
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            {["6 Programmes", "Hybrid Format", "All Levels", "Coaching Included"].map((tag) => (
              <span
                key={tag}
                className="text-[15px] font-bold tracking-wide border border-border/30 px-4 py-2 text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ─── PHILOSOPHY BAND ─── */}
      <section ref={principlesRef} className="py-20 border-y border-border/20 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-border/20">
            {[
              { icon: Shield, title: "Integrity-Driven", body: "Great leadership begins with trust. We build leaders who lead by example and earn respect through consistent, ethical behaviour." },
              { icon: Zap, title: "Impact-Focused", body: "Every programme is designed for real-world application — skills that translate directly into measurable team and business outcomes." },
              { icon: Target, title: "Level-Appropriate", body: "From first-time managers to C-suite executives, each programme is precisely calibrated for the leader's current stage and next challenge." },
            ].map(({ icon: Icon, title, body }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={principlesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                className="px-10 py-10 first:pl-0 last:pr-0"
              >
                <Icon className="w-9 h-9 text-cap-orange mb-4" />
                <h3 className="text-[17px] font-black tracking-tight mb-3">{title}</h3>
                <p className="text-[16px] text-muted-foreground leading-[1.7]">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROGRAMMES GRID ─── */}
      <section className="py-24" ref={ref}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <motion.p
                className="text-[15px] font-black tracking-[0.2em] text-cap-orange uppercase mb-3"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
              >
                Our Programmes
              </motion.p>
              <motion.h2
                className="text-[32px] md:text-[44px] font-black leading-tight tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
              >
                Six Pathways.
                <br />
                <span className="text-muted-foreground font-normal">One Destination: Excellence.</span>
              </motion.h2>
            </div>
            <motion.p
              className="text-[14px] text-muted-foreground max-w-sm leading-[1.7]"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              Each programme is a precision-designed intervention — not a generic workshop. Choose the pathway that matches where your leaders are today.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, i) => (
              <ProgramCard key={program.title} program={program} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── IMPACT STATS ─── */}
      <section className="py-24 section-navy relative overflow-hidden" ref={impactRef}>
        {/* decorative grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.p
                className="text-[30px] font-black tracking-[0.2em] text-cap-orange uppercase mb-4"
                initial={{ opacity: 0 }}
                animate={impactInView ? { opacity: 1 } : {}}
              >
                Measurable Results
              </motion.p>
              <motion.h2
                className="text-[32px] md:text-[44px] font-black leading-tight tracking-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={impactInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
              >
                Leadership investment
                <br />
                <span className="text-cap-orange">that pays back.</span>
              </motion.h2>
              <motion.p
                className="text-[15px] text-muted-foreground leading-[1.8] max-w-md"
                initial={{ opacity: 0 }}
                animate={impactInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2 }}
              >
                Our programmes deliver tangible ROI through improved team performance, higher engagement scores, and accelerated business outcomes. These aren't vanity metrics — they're board-level results.
              </motion.p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={impactInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.1 * i, type: "spring", stiffness: 200 }}
                  className="bg-card/40 border border-border/20 p-7 group hover:border-cap-orange/30 transition-all duration-300"
                >
                  <div className="text-[40px] font-black text-cap-orange leading-none mb-3">
                    {stat.value}
                  </div>
                  <div className="text-[15px] font-semibold tracking-wide text-muted-foreground uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-border/10">
        {/* large decorative orange circle */}
        <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #FF6B35 0%, transparent 70%)" }}
        />
        <div className="absolute -left-20 -bottom-20 w-[300px] h-[300px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #FF6B35 0%, transparent 70%)" }}
        />
        {/* top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-cap-orange via-amber-400 to-cap-orange" />

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            {/* left text */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                className="inline-flex items-center gap-2 mb-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="h-[2px] w-6 bg-cap-orange" />
                <span className="text-[10px] font-black tracking-[0.25em] text-cap-orange uppercase">Next Step</span>
              </motion.div>
              <motion.h2
                className="text-[30px] md:text-[42px] font-black text-gray-900 mb-4 tracking-tight leading-[1.1]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Ready to develop your{" "}
                <span className="text-cap-orange">next generation</span>{" "}
                of leaders?
              </motion.h2>
              <motion.p
                className="text-gray-500 text-[16px] leading-[1.8] max-w-md mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                Let's discuss which leadership programme best fits your organization's needs and goals. Our team is ready to help.
              </motion.p>
            </div>
            {/* right CTA box */}
            <motion.div
              className="flex-shrink-0 bg-cap-orange p-10 text-center min-w-[260px]"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 180 }}
            >
              <div className="text-white/80 text-[12px] font-bold tracking-widest uppercase mb-3">6 Programmes</div>
              <div className="text-white text-[40px] font-black leading-none mb-1">All</div>
              <div className="text-white/90 text-[15px] font-semibold mb-6">levels covered</div>
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 bg-white text-cap-orange px-7 py-3.5 text-[15px] font-black tracking-wide w-full justify-center hover:gap-4 transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LearningExperienceDesign;
