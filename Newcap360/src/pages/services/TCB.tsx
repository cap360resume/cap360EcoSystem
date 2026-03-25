import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  BookOpen, 
  Award, 
  Laptop, 
  Users, 
  Lightbulb, 
  GraduationCap, 
  ChevronLeft, 
  ChevronRight,
  CheckCircle2,
  TrendingUp,
  Target,
  Zap,
  Brain,
  MessageSquare
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useRef, useState } from "react";
import heroImg from "@/assets/service-hero-tcb.jpg";
import trending1 from "@/assets/trending-1.jpg";
import trending2 from "@/assets/trending-2.jpg";
import trending3 from "@/assets/trending-3.jpg";
import trending4 from "@/assets/trending-4.jpg";

const serviceSubNav = [
  { label: "Overview", path: "#overview" },
  { label: "Why Choose Us", path: "#why-us" },
  { label: "Our Approach", path: "#approach" },
  { label: "Programs", path: "#programs" },
  { label: "Leaders", path: "#leaders" },
  { label: "Careers", path: "/careers" },
];

const trendingImages = [trending1, trending2, trending3, trending4];

const offerings = [
  { 
    icon: BookOpen, 
    title: "Leadership Development", 
    description: "Immersive learning for emerging and senior leaders building strategic thinking and change leadership.",
    color: "bg-cap-blue",
    gradient: "from-cap-blue/10 to-transparent"
  },
  { 
    icon: Laptop, 
    title: "Digital & Technical Upskilling", 
    description: "Role-based academies covering AI, data analytics, cloud computing, and cybersecurity.",
    color: "bg-cap-orange",
    gradient: "from-cap-orange/10 to-transparent"
  },
  { 
    icon: Users, 
    title: "Team Effectiveness", 
    description: "Workshops strengthening team dynamics, collaboration, and organizational communication.",
    color: "bg-cap-green",
    gradient: "from-cap-green/10 to-transparent"
  },
  { 
    icon: Lightbulb, 
    title: "Innovation & Design Thinking", 
    description: "Bootcamps embedding design thinking, agile methodologies, and creative problem-solving.",
    color: "bg-cap-red",
    gradient: "from-cap-red/10 to-transparent"
  },
  { 
    icon: GraduationCap, 
    title: "Learning Experience Design", 
    description: "Custom blended ecosystems with micro-learning, gamification, and mentoring.",
    color: "bg-cap-dark-blue",
    gradient: "from-cap-dark-blue/10 to-transparent"
  },
  { 
    icon: Award, 
    title: "Certification & Compliance", 
    description: "Industry-recognized certifications and regulatory compliance training at scale.",
    color: "bg-cap-orange",
    gradient: "from-cap-orange/10 to-transparent"
  },
];

const whyChooseUs = [
  {
    icon: TrendingUp,
    title: "28+ Years Experience",
    desc: "Founded by a seasoned corporate leader with real-world sales and organizational expertise"
  },
  {
    icon: Brain,
    title: "Certified Power Coach",
    desc: "Advanced behavioral coaching credentials enabling genuine transformation, not just information transfer"
  },
  {
    icon: Target,
    title: "Vertical TCB Approach",
    desc: "Comprehensive top-to-bottom organizational development ensuring cascading impact and alignment"
  },
  {
    icon: Zap,
    title: "90-Day Reinforcement",
    desc: "Monthly coaching, peer learning, and performance tracking ensuring behavioral change sticks"
  },
  {
    icon: Users,
    title: "Customized for All Sizes",
    desc: "Scalable solutions for startups, mid-market companies, and large enterprises across India"
  },
  {
    icon: CheckCircle2,
    title: "Measurable Results",
    desc: "Transparent ROI reporting with baseline metrics, progress tracking, and business impact validation"
  },
];

const phases = [
  {
    step: "01",
    title: "Assessment & Customization",
    desc: "In-depth needs analysis, skill gap assessment, and customized program design aligned to your goals",
    icon: Target
  },
  {
    step: "02",
    title: "Immersive Delivery",
    desc: "Engaging workshops with role-plays, simulations, case studies, and practical frameworks you can apply immediately",
    icon: Zap
  },
  {
    step: "03",
    title: "90-Day Reinforcement",
    desc: "Monthly coaching calls, one-on-one sessions, real-world support, and performance metric tracking",
    icon: TrendingUp
  },
  {
    step: "04",
    title: "ROI & Improvement",
    desc: "Transparent reporting on business impact, behavioral change validation, and continuous improvement recommendations",
    icon: CheckCircle2
  },
];

const programStreams = [
  { title: "Sales Management", modules: 8, icon: Target },
  { title: "Leadership Development", modules: 7, icon: Users },
  { title: "Communication Dynamics", modules: 6, icon: MessageSquare },
  { title: "Change Management", modules: 6, icon: TrendingUp },
  { title: "Emotional Intelligence", modules: 5, icon: Brain },
  { title: "Team Building", modules: 6, icon: Users },
];

const stats = [
  { value: "100K+", desc: "Professionals trained across all programmes" },
  { value: "95%", desc: "Participant satisfaction rate" },
  { value: "60%", desc: "Average capability uplift measured" },
  { value: "28+", desc: "Years of corporate leadership experience" },
];

const trendingInsights = [
  { category: "RESEARCH REPORT", title: "The Future of Corporate Learning in 2026" },
  { category: "PERSPECTIVE", title: "From Training to Transformation" },
  { category: "BLOG", title: "Gamification in Corporate Training" },
  { category: "CASE STUDY", title: "Measuring Training ROI: Beyond Satisfaction" },
];

const TCB = () => {
  const { ref: statsRef, isInView: statsInView } = useScrollAnimation(0.2);
  const { ref: offerRef, isInView: offerInView } = useScrollAnimation(0.1);
  const { ref: whyRef, isInView: whyInView } = useScrollAnimation(0.1);
  const { ref: phaseRef, isInView: phaseInView } = useScrollAnimation(0.1);
  const { ref: programRef, isInView: programInView } = useScrollAnimation(0.1);
  const { ref: trendingRef, isInView: trendingInView } = useScrollAnimation(0.1);
  const { ref: leadersRef, isInView: leadersInView } = useScrollAnimation(0.1);
  const trendingScrollRef = useRef<HTMLDivElement>(null);
  const [activeProgram, setActiveProgram] = useState(0);

  const scrollTrending = (dir: "left" | "right") => {
    if (trendingScrollRef.current) {
      trendingScrollRef.current.scrollBy({ left: dir === "left" ? -340 : 340, behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SubNavbar title="Training & Capability Building" titlePath="/what-we-do/services/tcb" items={serviceSubNav} />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-background overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 py-28">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
            <span className="text-cap-orange font-semibold text-[14px] tracking-wider uppercase">Transform Your Organization</span>
          </motion.div>
          <motion.h1 
            className="text-[42px] md:text-[58px] lg:text-[72px] font-black tracking-tight leading-[1.05] mb-6 max-w-4xl mt-4" 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Training & Capability Building
          </motion.h1>
          <motion.p 
            className="text-[18px] md:text-[20px] text-muted-foreground leading-[1.7] max-w-2xl mb-8" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Build future-ready capabilities at scale. Transform knowledge gaps into competitive advantages through immersive, outcome-driven learning experiences designed by industry leaders with 28+ years of expertise.
          </motion.p>
          <motion.div 
            className="flex gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <button className="bg-cap-orange text-background px-8 py-4 font-semibold hover:bg-cap-orange/90 transition-all hover:shadow-lg rounded-md">
              Schedule a Consultation
            </button>
            <button className="border border-foreground/30 text-foreground px-8 py-4 font-semibold hover:border-cap-orange/50 hover:bg-cap-orange/5 transition-all rounded-md">
              Explore Programs
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-border/20" ref={statsRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2 className="text-[26px] md:text-[32px] font-bold mb-16" initial={{ opacity: 0 }} animate={statsInView ? { opacity: 1 } : {}}>
            Impact By The Numbers
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.value} 
                className="group"
                initial={{ opacity: 0, y: 30 }} 
                animate={statsInView ? { opacity: 1, y: 0 } : {}} 
                transition={{ delay: 0.1 * i }}
              >
                <div className="w-12 h-1 bg-gradient-to-r from-cap-orange to-cap-red mb-6 group-hover:w-16 transition-all duration-300" />
                <span className="text-[44px] md:text-[52px] font-black text-foreground block mb-2">{stat.value}</span>
                <p className="text-[14px] text-muted-foreground leading-[1.6]">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }} 
            animate={offerInView ? { opacity: 1, y: 0 } : {}} 
            ref={offerRef}
          >
            <h2 className="text-[32px] md:text-[42px] font-bold mb-6">About Cap360</h2>
            <p className="text-[16px] text-muted-foreground leading-[1.8] mb-6">
              Cap360 stands for "Capability Building 360"—a comprehensive one-stop solution provider specializing in corporate training, executive coaching, and business consultancy. We work with organizations of all sizes across India to identify challenges, design customized solutions, and deliver sustainable organizational transformation.
            </p>
            <p className="text-[16px] text-muted-foreground leading-[1.8]">
              Our Vertical Training Capability Building approach means we don't just deliver one-off workshops. We go deep—conducting in-depth organizational assessment, creating comprehensive development plans, delivering immersive training experiences, and providing ongoing coaching to ensure behavioral change sticks and business results are sustained.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Offerings Grid */}
      <section id="programs" className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={offerInView ? { opacity: 1, y: 0 } : {}}
            ref={offerRef}
            className="mb-16"
          >
            <h2 className="text-[32px] md:text-[42px] font-bold mb-6">Our Training Solutions</h2>
            <p className="text-[16px] text-muted-foreground max-w-2xl">Comprehensive, modular programs addressing every aspect of organizational capability development.</p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={offerInView ? { opacity: 1 } : {}}
            transition={{ staggerChildren: 0.08, delayChildren: 0.1 }}
          >
            {offerings.map((item, i) => (
              <motion.div 
                key={item.title} 
                className="group relative bg-gradient-to-br from-card to-card/50 border border-border/30 overflow-hidden hover:border-cap-orange/40 transition-all duration-300 rounded-lg p-8 hover:shadow-lg hover:shadow-cap-orange/10"
                initial={{ opacity: 0, y: 30 }} 
                animate={offerInView ? { opacity: 1, y: 0 } : {}} 
                transition={{ delay: 0.08 * i }}
                whileHover={{ y: -6 }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <item.icon className="w-12 h-12 text-cap-orange group-hover:scale-110 transition-transform duration-300" />
                    <div className={`w-8 h-8 rounded-full ${item.color}/20 flex items-center justify-center`}>
                      <div className={`w-2 h-2 rounded-full ${item.color}`} />
                    </div>
                  </div>
                  <h3 className="text-[18px] font-bold mb-3 group-hover:text-cap-orange transition-colors">{item.title}</h3>
                  <p className="text-[14px] text-muted-foreground leading-[1.6] mb-6">{item.description}</p>
                  <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-cap-orange group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-24 section-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cap-orange/5 rounded-full blur-3xl -z-0" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            ref={whyRef}
            className="mb-16"
          >
            <h2 className="text-[32px] md:text-[42px] font-bold mb-6">Why Choose Cap360?</h2>
            <p className="text-[16px] text-muted-foreground max-w-2xl">Founder-led expertise combined with certified coaching credentials and a proven track record of measurable business results.</p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate={whyInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                className="group bg-background/40 backdrop-blur-sm border border-border/40 p-8 rounded-lg hover:border-cap-orange/40 hover:bg-background/60 transition-all duration-300"
                variants={itemVariants}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-cap-orange/20 flex items-center justify-center flex-shrink-0 group-hover:bg-cap-orange/30 transition-colors">
                    <item.icon className="w-6 h-6 text-cap-orange" />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold group-hover:text-cap-orange transition-colors">{item.title}</h3>
                  </div>
                </div>
                <p className="text-[14px] text-muted-foreground leading-[1.6] ml-16">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Approach - 4 Phase Process */}
      <section id="approach" className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={phaseInView ? { opacity: 1, y: 0 } : {}}
            ref={phaseRef}
            className="mb-20"
          >
            <h2 className="text-[32px] md:text-[42px] font-bold mb-6">Our 4-Phase Approach</h2>
            <p className="text-[16px] text-muted-foreground max-w-2xl">A comprehensive methodology ensuring training translates into behavioral change and measurable business results.</p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            animate={phaseInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {phases.map((phase, i) => (
              <motion.div
                key={phase.step}
                className="group relative"
                variants={itemVariants}
              >
                {/* Connector Line */}
                {i < phases.length - 1 && (
                  <div className="hidden lg:block absolute top-24 left-full w-full h-1 bg-gradient-to-r from-cap-orange to-transparent" />
                )}

                <div className="bg-gradient-to-br from-card to-card/50 border border-border/30 p-8 rounded-lg h-full hover:border-cap-orange/40 transition-all duration-300 hover:shadow-lg hover:shadow-cap-orange/10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="text-[52px] font-black text-cap-orange/30 leading-none mb-3">{phase.step}</div>
                      <h3 className="text-[18px] font-bold mb-2 group-hover:text-cap-orange transition-colors">{phase.title}</h3>
                    </div>
                    <phase.icon className="w-8 h-8 text-cap-orange/40 group-hover:text-cap-orange group-hover:scale-110 transition-all" />
                  </div>
                  <p className="text-[13px] text-muted-foreground leading-[1.6]">{phase.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Program Streams Carousel */}
      <section className="py-24 section-navy">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={programInView ? { opacity: 1, y: 0 } : {}}
            ref={programRef}
            className="mb-16"
          >
            <h2 className="text-[32px] md:text-[42px] font-bold mb-6">Program Streams</h2>
            <p className="text-[16px] text-muted-foreground max-w-2xl">Modular training organized into specialized streams, available standalone or as part of integrated organizational development.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programStreams.map((program, i) => (
              <motion.div
                key={program.title}
                className="group bg-gradient-to-br from-background/60 to-background/30 backdrop-blur-sm border border-border/40 p-8 rounded-lg cursor-pointer hover:border-cap-orange/60 hover:bg-background/80 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={programInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i }}
                onClick={() => setActiveProgram(i)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-[18px] font-bold group-hover:text-cap-orange transition-colors">{program.title}</h3>
                    <p className="text-[13px] text-muted-foreground mt-1">{program.modules} modules included</p>
                  </div>
                  <program.icon className="w-10 h-10 text-cap-orange/40 group-hover:text-cap-orange group-hover:scale-110 transition-all" />
                </div>
                <div className="w-24 h-1 bg-cap-orange/30 group-hover:bg-cap-orange group-hover:w-32 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section id="trending" className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={trendingInView ? { opacity: 1, y: 0 } : {}}
              ref={trendingRef}
            >
              <h2 className="text-[32px] md:text-[42px] font-bold mb-2">Insights & Resources</h2>
              <p className="text-[16px] text-muted-foreground">Stay updated with latest trends in corporate learning and transformation.</p>
            </motion.div>
            <div className="hidden md:flex gap-2">
              <button onClick={() => scrollTrending("left")} className="p-2 border border-border/40 text-foreground/60 hover:text-foreground hover:border-cap-orange/60 transition-all rounded-md hover:bg-cap-orange/5">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={() => scrollTrending("right")} className="p-2 border border-border/40 text-foreground/60 hover:text-foreground hover:border-cap-orange/60 transition-all rounded-md hover:bg-cap-orange/5">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="mb-8">
            <a href="#" className="inline-flex items-center gap-2 text-[16px] font-semibold text-foreground hover:text-cap-orange transition-colors group">
              View all insights <span className="inline-flex items-center justify-center w-7 h-7 bg-cap-orange/20 text-cap-orange rounded-md group-hover:bg-cap-orange group-hover:text-background transition-all">
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </div>

          <div ref={trendingScrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4">
            {trendingInsights.map((item, i) => (
              <motion.div 
                key={item.title} 
                className="flex-shrink-0 w-[320px] group cursor-pointer"
                initial={{ opacity: 0, x: 40 }} 
                animate={trendingInView ? { opacity: 1, x: 0 } : {}} 
                transition={{ delay: 0.1 * i }}
              >
                <div className="relative h-[380px] overflow-hidden rounded-lg border border-border/30 group-hover:border-cap-orange/40 transition-all">
                  <img src={trendingImages[i % trendingImages.length]} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <span className="text-[11px] font-bold text-cap-orange uppercase tracking-[0.15em] mb-3">{item.category}</span>
                    <h3 className="text-[18px] font-bold text-foreground leading-snug group-hover:text-cap-orange transition-colors">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Founder */}
      <section id="founder" className="py-24 section-navy relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cap-orange/5 rounded-full blur-3xl -z-0" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={leadersInView ? { opacity: 1, y: 0 } : {}}
            ref={leadersRef}
            className="mb-16"
          >
            <h2 className="text-[32px] md:text-[42px] font-bold mb-2">Meet Our Trainner</h2>
            <p className="text-[16px] text-muted-foreground">28+ years of corporate leadership combined with certified coaching expertise</p>
          </motion.div>

          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={leadersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="w-full max-w-sm mx-auto aspect-square bg-gradient-to-br from-cap-orange/20 to-cap-blue/20 rounded-xl flex items-center justify-center text-[80px] font-black text-cap-orange border border-border/40">
                  SM
                </div>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-[28px] font-bold mb-2">Shivinder Mandhotra</h3>
                <p className="text-cap-orange font-semibold text-[14px] mb-6 uppercase tracking-wider">Founder & Lead Trainer</p>
                <div className="space-y-4 mb-8">
                  <p className="text-[15px] text-muted-foreground leading-[1.8]">
                    A rare combination of seasoned corporate leader and certified Power Coach, Shivinder brings 28+ years of hands-on experience across India's most respected organizations—Godrej & Boyce, Wipro, Amardeep Designs, and Intex Technologies.
                  </p>
                  <p className="text-[15px] text-muted-foreground leading-[1.8]">
                    He's a proven turnaround specialist with expertise in transforming sales operations, managing complex implementations, and leading cross-functional teams to deliver exceptional results.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cap-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[14px]">Power Coach Certified</p>
                      <p className="text-[13px] text-muted-foreground">Coaching & Leadership International Inc, Canada</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cap-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[14px]">MBA Marketing</p>
                      <p className="text-[13px] text-muted-foreground">Symbiosis Institute, Pune</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cap-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[14px]">Multiple Certifications</p>
                      <p className="text-[13px] text-muted-foreground">Executive Coach, Life Coach, PoSH Trainer</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cap-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[14px]">Advisory Member</p>
                      <p className="text-[13px] text-muted-foreground">Administrator Chandigarh & Governor Punjab</p>
                    </div>
                  </div>
                </div>
                <button className="bg-cap-orange text-background px-6 py-3 font-semibold hover:bg-cap-orange/90 transition-all rounded-md inline-flex items-center gap-2">
                  Schedule with Shivinder <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leaders Team
      <section id="leaders" className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2 
            className="text-[32px] md:text-[42px] font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={leadersInView ? { opacity: 1, y: 0 } : {}}
          >
            Our Leadership Team
          </motion.h2>
          <motion.p 
            className="text-[16px] text-muted-foreground mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={leadersInView ? { opacity: 1, y: 0 } : {}}
          >
            Specialized expertise across sales management, digital learning, and leadership development.
          </motion.p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Shivinder Mandhotra", role: "Lead — Training & Capability Building", specialty: "28+ years corporate experience" },
              { name: "David Park", role: "Lead — Digital Learning Design", specialty: "Advanced curriculum development" },
              { name: "Amara Diallo", role: "Lead — Leadership Development", specialty: "Executive coaching & transformation" },
            ].map((l, i) => (
              <motion.div 
                key={l.name} 
                className="group text-center"
                initial={{ opacity: 0, y: 20 }} 
                animate={leadersInView ? { opacity: 1, y: 0 } : {}} 
                transition={{ delay: 0.1 * i }}
              >
                <div className="w-full max-w-xs mx-auto aspect-square bg-gradient-to-br rounded-lg mb-6 border border-border/30 overflow-hidden flex items-center justify-center text-[48px] font-black group-hover:border-cap-orange/40 transition-all"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${['#3B82F6', '#F97316', '#10B981'][i]}/20, ${['#3B82F6', '#F97316', '#10B981'][i]}/5)`,
                  }}
                >
                  <span className={`${['text-cap-blue', 'text-cap-orange', 'text-cap-green'][i]}`}>
                    {l.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-[18px] font-bold mb-2 group-hover:text-cap-orange transition-colors">{l.name}</h3>
                <p className="text-[14px] text-muted-foreground mb-2">{l.role}</p>
                <p className="text-[12px] font-semibold text-cap-orange">{l.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-background via-background to-secondary overflow-hidden py-20">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="650" cy="150" r="120" stroke="currentColor" />
            <circle cx="750" cy="100" r="200" stroke="currentColor" />
            <path d="M500 400 C600 300, 700 500, 800 400" stroke="currentColor" fill="transparent" />
          </svg>
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <span className="text-cap-orange font-semibold text-[14px] tracking-wider uppercase">Ready to Transform?</span>
              <h2 className="text-[40px] md:text-[54px] font-black leading-[1.1] mt-4 mb-6">
                Let's build your winning team
              </h2>
              <p className="text-[18px] text-muted-foreground mb-8 max-w-xl">
                Schedule a consultation with our experts and discover how Cap360 can transform your organization through results-driven training and coaching.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex gap-4 flex-wrap"
            >
              <button className="bg-cap-orange text-background px-8 py-4 font-semibold hover:bg-cap-orange/90 transition-all hover:shadow-lg rounded-md inline-flex items-center gap-2">
                Start Your Journey <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-foreground/20 text-foreground px-8 py-4 font-semibold hover:border-cap-orange/50 hover:bg-cap-orange/5 transition-all rounded-md">
                Download Program Guide
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="650" cy="150" r="120" stroke="white" />
            <circle cx="750" cy="100" r="200" stroke="white" />
            <path d="M500 400 C600 300, 700 500, 800 400" stroke="white" fill="transparent" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Join Our Team
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg max-w-xl leading-relaxed mb-10"
          >
            Work alongside industry experts to deliver transformational training and coaching solutions that help organizations unlock their full potential.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cap-orange to-cap-red px-8 py-4 rounded-md font-semibold text-background shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
          >
            Explore Open Positions
          </motion.button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TCB;