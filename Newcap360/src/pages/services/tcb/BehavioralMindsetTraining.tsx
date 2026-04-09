import Navbar from "@/components/Navbar";
import { useState } from "react";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import HRCAMSSubNavbar from "@/components/HRCAMSSubNavbar";
import {
  ArrowRight,
  Target,
  Users,
  Brain,
  Sparkles,
  Heart,
  Shield,
  TrendingUp,
  Star,
  Zap,
  RefreshCw,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";

// Using placeholder images — replace with your actual assets
import behavioralHero from "@/assets/inovation.jpeg";
import behavioralDetail from "@/assets/designthinking.avif";

const BehavioralMindsetTraining = () => {
  const { ref: sRef, isInView: sInView } = useScrollAnimation(0.1);
  const { ref: bRef, isInView: bInView } = useScrollAnimation(0.1);
  const [activeIndex, setActiveIndex] = useState(null);

  const solutions = [
    {
      icon: Target,
      title: "Emotional Intelligence (EQ)",
      content: (
        <>
          <p className="mb-4">
            Enable your teams to understand, manage, and leverage emotions
            effectively in the workplace. High EQ leads to better collaboration,
            stronger leadership, and improved decision-making across all levels
            of the organisation.
          </p>

          <ul className="space-y-3 mb-4 list-disc pl-5">
            <li>
              <strong>Self-awareness & emotional control:</strong> Recognise and
              regulate personal emotions under pressure.
            </li>
            <li>
              <strong>Empathy & relationship management:</strong> Build
              meaningful, trust-based working relationships.
            </li>
            <li>
              <strong>Handling workplace conflicts:</strong> Navigate difficult
              situations with composure and clarity.
            </li>
            <li>
              <strong>Communication & collaboration:</strong> Improve how teams
              connect, listen, and engage with one another.
            </li>
          </ul>

          <p>
            The outcome is a more emotionally aware workforce that leads, connects, and performs with greater impact.
          </p>
        </>
      ),
    },
    {
      icon: Target,
      title: "Growth Mindset",
      content: (
        <>
          <p className="mb-4">
            Shift from a fixed mindset to a culture of continuous learning and
            improvement. We help individuals embrace challenges, learn from
            feedback, and unlock their full potential in an ever-evolving
            business environment.
          </p>

          <ul className="space-y-3 mb-4 list-disc pl-5">
            <li>
              <strong>Learning-oriented mindset:</strong> Develop the habit of
              seeking growth in every experience.
            </li>
            <li>
              <strong>Overcoming fear of failure:</strong> Reframe setbacks as
              stepping stones to progress.
            </li>
            <li>
              <strong>Adaptability & openness to change:</strong> Build
              flexibility in thinking and approach.
            </li>
            <li>
              <strong>Innovation & ownership:</strong> Encourage individuals to
              take initiative and think creatively.
            </li>
          </ul>

          <p>
            The outcome is a team that embraces change, learns continuously, and drives progress from within.
          </p>
        </>
      ),
    },
    {
      icon: Target,
      title: "Stress Management & Resilience",
      content: (
        <>
          <p className="mb-4">
            Equip your workforce to stay productive and focused even under
            pressure. Our programs build mental resilience and practical coping
            strategies to manage workplace stress effectively and sustain
            long-term performance.
          </p>

          <ul className="space-y-3 mb-4 list-disc pl-5">
            <li>
              <strong>Stress triggers & responses:</strong> Identify personal
              patterns and proactively manage them.
            </li>
            <li>
              <strong>Managing pressure & burnout:</strong> Practical techniques
              to recover and recharge.
            </li>
            <li>
              <strong>Resilience & mental agility:</strong> Strengthen the
              ability to bounce back from adversity.
            </li>
            <li>
              <strong>High-demand performance:</strong> Sustain output and
              well-being in challenging environments.
            </li>
          </ul>

          <p>
            The outcome is a resilient workforce that maintains performance and well-being even in high-pressure situations.
          </p>
        </>
      ),
    },
    {
      icon: Target,
      title: "How We Deliver Impact",
      content: (
        <>
          <p className="mb-4">
            Our programs go beyond theory — focusing on real behavioural change
            and practical application that translates directly into improved
            performance, stronger relationships, and healthier workplace
            culture.
          </p>

          <ul className="space-y-3 mb-4 list-disc pl-5">
            <li>
              <strong>Experiential workshops:</strong> Interactive sessions
              designed to drive deep behavioural shifts.
            </li>
            <li>
              <strong>Role plays & reflection exercises:</strong> Learn through
              real-life scenarios and honest self-reflection.
            </li>
            <li>
              <strong>Customised content:</strong> Programs aligned to your
              unique business challenges and culture.
            </li>
            <li>
              <strong>Continuous reinforcement:</strong> Ongoing tools and
              follow-up to embed change over time.
            </li>
          </ul>

          <p>
            The outcome is lasting behaviour change that elevates individuals and transforms teams.
          </p>
        </>
      ),
    },
  ];

  const [index, setIndex] = useState(0);

  const cards = [
    {
      icon: <Zap className="w-12 h-12 text-purple-500 mb-6" />,
      title: "Engaged & motivated employees",
      desc: "Build a workforce that is energised, committed, and driven to perform.",
    },
    {
      icon: <Users className="w-12 h-12 text-purple-500 mb-6" />,
      title: "Stronger collaboration",
      desc: "Foster healthier workplace relationships and team dynamics.",
    },
    {
      icon: <RefreshCw className="w-12 h-12 text-purple-500 mb-6" />,
      title: "Greater adaptability",
      desc: "Increase resilience and openness during change and uncertainty.",
    },
    {
      icon: <Heart className="w-12 h-12 text-purple-500 mb-6" />,
      title: "Improved employee well-being",
      desc: "Reduce stress and build a culture of mental health and balance.",
    },
    {
      icon: <Star className="w-12 h-12 text-purple-500 mb-6" />,
      title: "High-performance culture",
      desc: "Create a positive, growth-driven environment at every level.",
    },
  ];

  const visibleCards = 3;

  const next = () => {
    if (index < cards.length - visibleCards) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

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
      <HRCAMSSubNavbar />

      {/* ===== HERO SECTION ===== */}
      <section className="bg-black text-white py-20 px-6 lg:px-16">
        {/* Breadcrumb */}
        <div className="text-sm mb-10 text-gray-300">
          <span className="text-white font-medium">Customer Service</span>
          <span className="mx-2">/</span>
          <span className="text-gray-400">Behavioral & Mindset Training</span>
        </div>

        {/* Main Layout */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* LEFT IMAGE */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="Behavioral & Mindset Training"
              className="w-full h-[420px] object-cover"
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            className="w-full lg:w-1/2 max-w-xl"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-[30px] md:text-[48px] lg:text-[54px] font-bold leading-[1.1] mb-6">
              Behavioral & Mindset Training
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed">
              In today's fast-changing business environment, technical skills
              alone are not enough. High-performing organisations are built on
              resilient, emotionally intelligent, and growth-oriented people.
              Our Behavioral & Mindset Training programs are designed to
              transform the way individuals think, respond, and perform —
              creating a culture that drives productivity, adaptability, and
              long-term success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== DATA / CONTEXT SECTION ===== */}
      <section className="bg-black text-white py-24 px-6 lg:px-16" ref={bRef}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={bInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-lg leading-relaxed text-gray-200">
              Behavioural capability is no longer a soft skill — it is a
              strategic business advantage. As organisations navigate rapid
              change, increasing complexity, and evolving workforce expectations,
              the ability to lead with empathy, adapt with agility, and perform
              under pressure has become critical. Employees who develop strong
              emotional intelligence, a growth mindset, and resilience don't
              just cope better — they contribute more, collaborate effectively,
              and drive better outcomes. The shift is from managing behaviour to
              unlocking human potential — where mindset becomes the foundation
              for performance.
            </p>
          </motion.div>

          {/* RIGHT DATA CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={bInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-purple-900 p-10 lg:p-12"
          >
            <div className="text-sm font-semibold tracking-wide uppercase text-gray-300 mb-4">
              DATA
            </div>

            <div className="text-[64px] font-bold mb-6">89%</div>

            <p className="text-gray-200 leading-relaxed">
              of hiring failures are attributed to poor behavioural and
              attitudinal fit, highlighting that mindset and emotional
              intelligence are as critical as technical expertise in building
              high-performing teams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== TRANSFORMATION SECTION ===== */}
      <section className="bg-black text-white py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* HEADING */}
          <div className="mb-16">
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold leading-[1.1]">
              Mindset training is transforming organisations
            </h2>
          </div>

          {/* CONTENT */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT IMAGE */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Mindset Training"
                className="w-full h-[420px] object-cover"
              />
            </div>

            {/* RIGHT TEXT */}
            <div className="max-w-md ml-auto">
              <div className="w-10 h-[3px] bg-purple-500 mb-6"></div>

              <h3 className="text-lg md:text-xl font-semibold mb-6">
                Empower your people to think better, respond better, and perform better
              </h3>

              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                Behavioral & Mindset Training is reshaping how organisations
                develop their people — shifting from knowledge transfer to true
                behavioural transformation. By combining emotional intelligence,
                growth mindset, and resilience practices, individuals can unlock
                their full potential and contribute to a culture where
                performance, collaboration, and well-being thrive together....
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHO IT'S FOR SECTION ===== */}
      <section className="bg-black text-white py-20 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold mb-12">
            Who It's For
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Users className="w-8 h-8 text-purple-400 mb-4" />,
                title: "Corporate Teams & Leaders",
                desc: "Across all levels seeking stronger behavioural and leadership capabilities.",
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />,
                title: "First-Time Managers",
                desc: "And emerging leaders building the mindset and EQ to lead effectively.",
              },
              {
                icon: <Zap className="w-8 h-8 text-purple-400 mb-4" />,
                title: "High-Stress & Customer-Facing Roles",
                desc: "Teams that need resilience and emotional agility to perform under pressure.",
              },
              {
                icon: <Brain className="w-8 h-8 text-purple-400 mb-4" />,
                title: "Growth-Oriented Individuals",
                desc: "Professionals seeking personal development and long-term career growth.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="border border-blue-800 p-6 hover:border-purple-600 transition-colors duration-300"
              >
                {item.icon}
                <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW WE SUPPORT YOUR GROWTH ===== */}
      <section className="bg-black text-white py-20 md:py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold mb-12">
            How We Support Your Growth
          </h2>

          <div className="max-w-7xl mx-auto">
            {solutions.map((item, i) => {
              const isOpen = activeIndex === i;

              return (
                <div key={i} className="border-b border-blue-800">
                  {/* Active Line */}
                  {isOpen && (
                    <div className="h-[2px] w-full bg-[#a100ff] mb-4"></div>
                  )}

                  {/* Header */}
                  <div
                    onClick={() => setActiveIndex(isOpen ? null : i)}
                    className="flex justify-between items-center cursor-pointer py-5"
                  >
                    <h3
                      className={`text-lg md:text-xl font-semibold ${
                        isOpen ? "text-white" : "text-gray-400"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <span className="text-xl text-gray-400 mr-10">
                      {isOpen ? "–" : "+"}
                    </span>
                  </div>

                  {/* Content */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <div className="text-gray-300 pb-6 leading-relaxed text-base md:text-lg max-w-3xl">
                          {typeof item.content === "string" ? (
                            <p>{item.content}</p>
                          ) : (
                            item.content
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== WHAT YOU'LL ACHIEVE ===== */}
      <section className="bg-black text-white py-20 md:py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold mb-12">
            What you'll achieve
          </h2>

          {/* Slider Wrapper */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-10"
              animate={{ x: `-${index * (100 / visibleCards)}%` }}
              transition={{ duration: 0.5 }}
            >
              {cards.map((card, i) => (
                <div key={i} className="min-w-[calc(100%/3)] max-w-sm">
                  {card.icon}

                  <h3 className="text-lg md:text-xl font-semibold mb-3">
                    {card.title}
                  </h3>

                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex justify-end gap-4 mt-12">
            <button
              onClick={prev}
              className="w-12 h-12 bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition"
            >
              ←
            </button>

            <button
              onClick={next}
              className="w-12 h-12 bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-20 md:py-24 bg-cap-blue">
        <div className="max-w-7xl mx-auto px-6 lg:px-0 text-center">
          <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold mb-8 text-primary-foreground">
            Build a high-performance mindset culture
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 font-semibold hover:gap-3 transition-all"
          >
            Book a free consultation <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BehavioralMindsetTraining;