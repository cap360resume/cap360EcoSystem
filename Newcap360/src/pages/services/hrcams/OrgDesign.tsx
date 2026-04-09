import Navbar from "@/components/Navbar";
import { useState } from "react";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import HRCAMSSubNavbar from "@/components/HRCAMSSubNavbar";
import {
  ArrowRight,
  CheckCircle,
  BarChart3,
  Target,
  TrendingUp,
  Users,
  Heart,
  Cog,
  Cpu,
  Shuffle,
  UserCheck,
  GitBranch,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";
import Genai from "@/assets/Genai.png";
import org from "@/assets/org.png";

const GenAIHR = () => {
  const { ref: sRef, isInView: sInView } = useScrollAnimation(0.1);
  const { ref: bRef, isInView: bInView } = useScrollAnimation(0.1);
  const [activeIndex, setActiveIndex] = useState(null);
  const solutions = [
    {
      icon: Target,
      title: "Organisation Restructuring & Role Clarity",
content: (
  <>
    <p className="mb-4">
      Organisation design starts with a simple question — is your current
      structure enabling your strategy or holding it back? We help align
      structure with business goals for clarity and efficiency.
    </p>

    <ul className="space-y-3 mb-4 list-disc pl-5">
      <li>
        <strong>Current state diagnostics:</strong> Identifying gaps in
        structure, roles, and reporting.
      </li>
      <li>
        <strong>Design principles:</strong> Defining the right structure —
        functional, matrix, or hybrid.
      </li>
      <li>
        <strong>Role clarity:</strong> Clear accountabilities, decision
        rights, and responsibilities.
      </li>
      <li>
        <strong>Span of control:</strong> Optimising team sizes for effective
        leadership.
      </li>
    </ul>

    <p>
      The outcome is a streamlined structure with clear roles and accountability.
    </p>
  </>
),
    },
    {
      icon: Target,
      title: "Staffing Norms & Productivity Benchmarks",
content: (
  <>
    <p className="mb-4">
      Headcount decisions should be driven by data, not assumptions. We
      help define the right staffing levels aligned to productivity and
      business growth.
    </p>

    <ul className="space-y-3 mb-4 list-disc pl-5">
      <li>
        <strong>Benchmarking:</strong> Revenue-to-headcount comparison with
        industry standards.
      </li>
      <li>
        <strong>Productivity norms:</strong> Defining output-per-employee
        benchmarks.
      </li>
      <li>
        <strong>Scaling models:</strong> Structured headcount planning as
        business expands.
      </li>
    </ul>

    <p>
      The outcome is optimal staffing aligned with efficiency and growth.
    </p>
  </>
),
    },
    {
      icon: Target,
     title: "Succession Planning & Leadership Pipeline Mapping",
content: (
  <>
    <p className="mb-4">
      Succession planning ensures continuity across critical roles, not just
      leadership positions. We help build a strong internal pipeline with
      clear readiness and development plans.
    </p>

    <ul className="space-y-3 mb-4 list-disc pl-5">
      <li>
        <strong>Critical roles:</strong> Identifying positions with highest
        business impact.
      </li>
      <li>
        <strong>Readiness mapping:</strong> 0–6, 6–12, and 12+ month successor
        identification.
      </li>
      <li>
        <strong>Development plans:</strong> Structured actions to build future
        leaders.
      </li>
      <li>
        <strong>Succession dashboards:</strong> Clear visibility for leadership
        and board review.
      </li>
    </ul>

    <p>
      The outcome is a strong leadership pipeline and reduced continuity risk.
    </p>
  </>
),
    },

    {
      icon: Target,
      title: "M&A and Integration HR Advisory",
content: (
  <>
    <p className="mb-4">
      M&A brings significant people complexity. We help organisations manage
      integration smoothly while minimising cultural, structural, and
      compliance risks.
    </p>

    <ul className="space-y-3 mb-4 list-disc pl-5">
      <li>
        <strong>HR due diligence:</strong> Assessing people, compliance, and
        cultural risks pre-deal.
      </li>
      <li>
        <strong>Cultural integration:</strong> Structured plans to align teams
        and build a unified culture.
      </li>
      <li>
        <strong>Compensation alignment:</strong> Harmonising pay and policies
        without attrition risk.
      </li>
      <li>
        <strong>Structural integration:</strong> Designing the combined org
        structure and operating model.
      </li>
    </ul>

    <p>
      The outcome is a smooth integration with minimal disruption and risk.
    </p>
  </>
),
    }
  ];

  const [index, setIndex] = useState(0);

  const cards = [
    {
  icon: <GitBranch className="w-12 h-12 text-purple-500 mb-6" />,
  title: "Structured organisation design",
  desc: "Design scalable organisation structures aligned to business strategy, eliminating inefficiencies and enabling clear reporting and accountability.",
},
{
  icon: <Users className="w-12 h-12 text-purple-500 mb-6" />,
  title: "Role clarity & accountability",
  desc: "Define clear job roles, responsibilities, and decision rights to reduce overlap, improve collaboration, and eliminate ambiguity across teams.",
},
{
  icon: <BarChart3 className="w-12 h-12 text-purple-500 mb-6" />,
  title: "Data-driven workforce planning",
  desc: "Leverage productivity benchmarks and staffing models to make informed headcount decisions and optimise resource allocation.",
},
{
  icon: <UserCheck className="w-12 h-12 text-purple-500 mb-6" />,
  title: "Leadership pipeline & succession",
  desc: "Build a strong leadership bench with structured succession planning frameworks that reduce dependency on critical individuals.",
},
{
  icon: <Shuffle className="w-12 h-12 text-purple-500 mb-6" />,
  title: "Seamless M&A integration",
  desc: "Ensure smooth organisational transitions during mergers and acquisitions through structured integration planning, cultural alignment, and role harmonisation.",
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

      <section className="bg-black text-white py-20 px-6 lg:px-16">
        {/* Breadcrumb */}
        <div className="text-sm mb-10 text-gray-300 ">
          <span className="text-white font-medium">Customer Service</span>
          <span className="mx-2">/</span>
          <span className="text-gray-400">
            Organisation Design & Workforce Planning
          </span>
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
              src={Genai}
              alt="Office"
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
              Organisation Design & Workforce Planning
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed">
              Design agile, future-ready organisations with the right structure,
              roles, and workforce strategies to thrive in a dynamic
              market.{" "}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-black text-white py-24 px-6 lg:px-16 " ref={bRef}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={bInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-lg leading-relaxed text-gray-200">
              Growth is exciting — and it brings with it a natural evolution in
              how an organisation needs to be structured. What worked well at 50
              people often needs rethinking at 200. Roles that were informally
              understood need to be formally defined. Reporting relationships
              that felt flat and agile can start to feel unclear. The
              organisations that manage this transition well are those that
              invest in structure proactively — building the right foundations
              before the cracks become visible
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

            <div className="text-[64px] font-bold mb-6">64%</div>

            <p className="text-gray-200 leading-relaxed">
             of organisations struggle with unclear roles and inefficient structures as they scale, impacting productivity and decision-making.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====  How vision, strategy and 
            implementation is changing ===== */}

      <section className="bg-black text-white py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* HEADING */}
          <div className="mb-16">
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold leading-[1.1]">
             How vision, strategy and execution are <br /> redefining organisation design 
              
            </h2>
          </div>

          {/* CONTENT */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT IMAGE */}
            <div>
              <img
                src={org}
                alt="AI Experience"
                className="w-full h-[420px] object-cover"
              />
            </div>

            {/* RIGHT TEXT */}
            <div className="max-w-md ml-auto">
              <div className="w-10 h-[3px] bg-purple-500 mb-6"></div>

              <h3 className="text-lg md:text-xl font-semibold mb-6">
               Build structures that scale with growth
              </h3>

              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                As organisations grow, informal structures create confusion, duplication, and inefficiency. By designing clear organisation structures, defining roles and accountability, and implementing data-backed workforce planning, businesses can scale with clarity, agility, and operational efficiency...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====  How We Support Your Growth ===== */}

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

      {/* =====  What you’ll achieve ===== */}

      <section className="bg-black text-white py-20 md:py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold mb-12">
            What you’ll achieve
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

      {/* =====  Transform your performance culture ===== */}

      <section className="py-20 md:py-24 bg-cap-blue">
        <div className="max-w-7xl mx-auto px-6 lg:px-0 text-center">
          <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold mb-8 text-primary-foreground">
            Transform your performance culture
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 font-semibold hover:gap-3 transition-all"
          >
            Get started <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GenAIHR;
