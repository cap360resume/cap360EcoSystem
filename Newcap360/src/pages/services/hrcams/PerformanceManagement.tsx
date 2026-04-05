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
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";
import Performance from "@/assets/Performance.png";

const PerformanceManagement = () => {
  const { ref: sRef, isInView: sInView } = useScrollAnimation(0.1);
  const { ref: bRef, isInView: bInView } = useScrollAnimation(0.1);
  const [activeIndex, setActiveIndex] = useState(null);
  const solutions = [
    {
      icon: Target,
      title: "Business-Aligned Goal Setting & Cascaded Goal Sheet Frameworks",
      content: (
        <>
          <p className="mb-4">
            A goal that doesn't connect to business outcomes is just a task. We
            design goal architectures where every team and individual
            understands how their work drives the organisation forward.
          </p>

          <p className="mb-4">
            This starts with translating your strategies into business
            priorities — revenue growth, operational efficiency, market
            expansion — into structured functional goals, then cascading them
            down to team and individual KPIs. We use a combination of:
          </p>

          <ul className="space-y-3 mb-4 list-disc pl-5">
            <li>
              <strong>SMART goal methodology:</strong> Goals that are Specific,
              Measurable, Achievable, Relevant, and Time-bound — removing
              ambiguity from performance conversations.
            </li>
            <li>
              <strong>OKR (Objectives & Key Results) frameworks:</strong>{" "}
              Particularly useful for scaling organisations and businesses where
              speed and adaptability matter.
            </li>
            <li>
              <strong>Balanced Scorecard models:</strong> For organisations
              needing a multi-dimensional view of performance across financial,
              customer, internal process, and learning dimensions.
            </li>
            <li>
              <strong>Metrics that matter:</strong> Focus on a sharp set of
              leading and lagging indicators that directly link to business
              outcomes (revenue growth, margin, client retention, productivity).
            </li>
            <li>
              <strong>Cascaded goal sheets:</strong> From organisational
              strategy down to function, team, and individual — so every
              employee can see how their work connects to the bigger picture.
            </li>
          </ul>

          <p>
            The result is a goal architecture that eliminates misalignment,
            reduces subjectivity and debates during appraisals, and gives
            managers a clear language to lead performance conversations.
          </p>
        </>
      ),
    },
    {
      icon: Target,
      title: "Performance Management System (PMS) Design & Calibration Models",
      content: (
        <>
          <p className="mb-4">
            A Performance Management System (PMS) is not just an annual
            appraisal form. It is the engine through which your organisation
            measures, rewards, and develops talent and succession pipe —
            consistently and fairly.
          </p>

          <p className="mb-4">
            We design end-to-end PMS frameworks tailored to your organisation's
            size, culture, and growth stage. Here's what that includes:
          </p>

          <ul className="space-y-3 mb-4 list-disc pl-5">
            <li>
              <strong>PMS Philosophy Definition:</strong> Establishing whether
              your system is primarily developmental, differentiated (bell
              curve-based), or outcome-driven — and communicating this clearly
              to employees and managers.
            </li>
            <li>
              <strong>The What & the How:</strong> Measure both results and the
              manner of achieving them — ethics, collaboration, and values
              matter equally.
            </li>
            <li>
              <strong>Managerial Effectiveness & Successions:</strong> Embed
              feedback on managers and formal successor identification for
              critical roles within the PMS
            </li>
            <li>
              <strong>Performance Cycle Design :</strong> Structured rhythm of
              mid-year reviews, year-end appraisals, and continuous feedback
              checkpoints.
            </li>
            <li>
              <strong>Reviewer & Reviewee Capability Building:</strong> Train
              both managers and employees to have effective, meaningful
              performance conversations.
            </li>
          </ul>

          <p>
            The outcome: a performance system that is perceived as fair, drives
            differentiation, and creates a culture of accountability without
            damaging engagement
          </p>
        </>
      ),
    },

    {
      icon: Target,
      title: "Total Rewards Architecture & Incentive Design",
      content: (
        <>
          <p className="mb-4">
            As organisations scale, compensation decisions made case by case —
            with no consistent framework — create fairness gaps and talent
            risks. A well-designed Total Rewards strategy brings structure and
            intent, giving your organisation a genuine edge in the talent
            market.
          </p>

          <p className="mb-4">
            Our Total Rewards Architecture service helps you design a rewards
            ecosystem that is competitive, internally fair, governance-ready,
            and aligned to your growth stage — one that works for both your
            people and your business:
          </p>

          <ul className="space-y-3 mb-4 list-disc pl-5">
            <li>
              <strong>Compensation Structure & Grade Design:</strong> Design CTC
              architecture with grade/band levels, internal pay parity, pay mix
              optimisation, and governance frameworks.
            </li>

            <li>
              <strong>Short-Term Incentive (STI) Models:</strong> Build
              performance-linked variable pay with clear payout formulae, smart
              target-setting, sales incentives, and profit-sharing models.
            </li>

            <li>
              <strong>Long-Term Incentive (LTI) Models:</strong> Advisory on
              ESOPs, Phantom Stock, and SARs — with vesting design aligned to
              PE/VC or IPO structures.
            </li>

            <li>
              <strong>Rewards & Recognition (R&R) Frameworks:</strong>{" "}
              Structured programmes covering spot awards, values-linked
              recognition, budget discipline, and manager toolkits.
            </li>

            <li>
              <strong>Benefits & Wellbeing Structuring:</strong> Design health
              insurance, flexible benefits, leadership wellbeing frameworks, and
              leave policies aligned to talent strategy.
            </li>
          </ul>
          <p>
            <strong>Key Outcomes:</strong> Market-aligned pay structures,
            internal equity, performance-driving STI/LTI models, and a
            compelling employer brand through Total Rewards.
          </p>
        </>
      ),
    },

    {
      icon: Target,
      title: "Labour Law Compliance & HR Governance",
      content: (
        <>
          <p className="mb-4">
            As organisations scale, regulatory obligations multiply and the
            stakes of non-compliance rise significantly. Building a proactive
            compliance infrastructure keeps you audit-ready, legally sound, and
            trusted by your own people.
          </p>

          <p className="mb-4">
            Our Labour Law Compliance & HR Governance service helps you create
            an HR infrastructure that is structured, legally robust, and built
            to grow with your organisation — from statutory compliance to
            board-ready governance.:
          </p>

          <ul className="space-y-3 mb-4 list-disc pl-5">
            <li>
              <strong>End-to-End Labour Law Compliance Audits:</strong>{" "}
              Systematic review of statutory registrations, payroll compliance,
              contractor obligations, and documentation — with clear risk
              mapping and remediation priorities.
            </li>

            <li>
              <strong>New Labour Code Preparedness:</strong> Assess and prepare
              for India's four new Labour Codes — covering CTC impact,
              documentation redesign, and adaptable compliance monitoring
              systems.
            </li>

            <li>
              <strong>POSH Framework Audit & Strengthening:</strong> Go beyond
              paper compliance — ICC reconstitution, awareness workshops, policy
              updates, and functional complaint resolution protocols.
            </li>

            <li>
              <strong>Policy Handbook & Delegation of Authority:</strong>{" "}
              Plain-language policy handbooks covering leave, conduct, travel,
              exit, and data privacy — paired with a clear Delegation of
              Authority framework.
            </li>

            <li>
              <strong>Board-Ready HR Governance Dashboards:</strong> HR
              reporting built for PE, IPO, or institutional scrutiny — covering
              compliance status, attrition, diversity, succession, and risk
              flags.
            </li>
          </ul>

          <p>
            <strong>Key Outcomes:</strong> Audit-ready documentation, reduced
            regulatory risk, New Labour Code preparedness, meaningful POSH
            compliance, and governance infrastructure ready for investor
            scrutiny.
          </p>
        </>
      ),
    },

    {
      title: "Gen AI for HR & Productivity",
      content: (
        <>
          <p className="mb-4">
            Generative AI is reshaping productivity, HR operations, and
            workforce efficiency — and the pace of change is accelerating. The
            opportunity for growing organisations lies in moving from curiosity
            to clarity: knowing which use cases are worth pursuing, which tools
            fit your context, and how to embed AI responsibly into the way you
            work.
          </p>

          <p className="mb-4">
            Our Gen AI for HR & Productivity advisory helps organisations
            identify their highest-value AI opportunities, build the right
            governance guardrails, and integrate AI tools into existing
            workflows in a way that is practical, measurable, and sustainable.
          </p>

          <ul className="space-y-3 mb-4 list-disc pl-5">
            <li>
              <strong>AI Use-Case Identification Workshops:</strong> Structured
              workshops to map workflows, prioritise AI opportunities by impact
              and feasibility, cut through the hype, and build a phased adoption
              roadmap with clear milestones.
            </li>

            <li>
              <strong>HR Chatbot Design & Knowledge Management:</strong>{" "}
              Advisory on chatbot architecture, conversation flows, and
              knowledge management frameworks — ensuring AI handles repetitive
              queries accurately, responsibly, and at scale.
            </li>
          </ul>

          <p>
            <strong>Key Outcomes:</strong> Clear AI adoption roadmap,
            prioritised high-impact use cases, improved HR efficiency, scalable
            knowledge systems, and responsible AI governance embedded into daily
            workflows.
          </p>
        </>
      ),
    },

    {
      title: "Organisation Design & Workforce Planning",
      content: (
        <>
          <p className="mb-4">
            Growth brings natural evolution in how an organisation needs to be
            structured. What worked at 50 people often needs rethinking at 200 —
            roles need formal definition, reporting lines need clarity, and
            structure needs to scale ahead of the cracks becoming visible.
          </p>

          <p className="mb-4">
            Our Organisation Design & Workforce Planning service helps you build
            the structural foundation your next phase of growth requires —
            thoughtfully designing how work gets done, who owns what, and how
            your organisation scales with clarity and efficiency.
          </p>

          <ul className="space-y-3 mb-4 list-disc pl-5">
            <li>
              <strong>Organisation Restructuring & Role Clarity:</strong>{" "}
              Current state diagnostics, design principles, role clarity
              mapping, and span-of-control optimisation — eliminating grey zones
              that cause conflict and inefficiency.
            </li>

            <li>
              <strong>Staffing Norms & Productivity Benchmarks:</strong>{" "}
              Revenue-to-headcount benchmarking, productivity norm development,
              and structured expansion staffing models — replacing gut-feel with
              data-backed decisions.
            </li>

            <li>
              <strong>Succession Planning & Leadership Pipeline:</strong>{" "}
              Critical role identification, readiness mapping at 0–6, 6–12, and
              12+ months, structured development plans, and board-ready
              succession dashboards.
            </li>

            <li>
              <strong>M&A & Integration HR Advisory:</strong> HR due diligence,
              cultural integration roadmaps, compensation harmonisation, and
              structural integration planning — protecting deal value through
              people complexity.
            </li>
          </ul>

          <p>
            <strong>Key Outcomes:</strong> A leaner, accountable structure; role
            clarity; data-backed staffing norms; a strong leadership pipeline;
            and HR integration advisory that safeguards M&A value.
          </p>
        </>
      ),
    },

    {
      title: "Managed HR Services",
      content: (
        <>
          <p className="mb-4">
            Many growing organisations reach a familiar crossroads — structured
            HR is genuinely needed, but building a full in-house function feels
            premature or cost-prohibitive. People decisions get made informally,
            compliance is handled reactively, and HR processes remain
            inconsistent.
          </p>

          <p className="mb-4">
            Our Managed HR Services model bridges exactly this gap — delivering
            senior-level HR expertise, structured operations, and
            governance-ready processes on a flexible retainer, scaled to your
            current stage of growth.
          </p>

          <ul className="space-y-3 mb-4 list-disc pl-5">
            <li>
              <strong>Employee Lifecycle Management:</strong> End-to-end
              administration from onboarding to exit — offer letters, probation
              reviews, role changes, exit interviews, and full & final
              settlement coordination.
            </li>

            <li>
              <strong>PMS Administration:</strong> Complete performance cycle
              management — goal tracking, mid-year and year-end coordination,
              calibration facilitation, and increment letter generation.
            </li>

            <li>
              <strong>Compliance Monitoring & Policy Management:</strong>{" "}
              Monthly statutory tracking (PF, ESI, PT, TDS), labour law
              renewals, policy updates, and employee query resolution.
            </li>

            <li>
              <strong>Governance Reporting:</strong> Monthly and quarterly HR
              dashboards covering headcount, attrition, compliance status,
              hiring pipeline, and employee relations risk flags.
            </li>

            <li>
              <strong>Flexible Engagement Models:</strong> Four models to choose
              from — Advisory Only, Advisory + Guided Implementation,
              Retainer-Based Strategic HR Partner, or Fully Managed HR
              Outsourcing — with hybrid options available.
            </li>
          </ul>

          <p>
            <strong>Key Outcomes:</strong> Senior HR expertise without full-time
            overhead; consistent lifecycle operations; proactive compliance;
            leadership visibility; and the flexibility to scale support as your
            business evolves.
          </p>
        </>
      ),
    },
  ];

  const [index, setIndex] = useState(0);

  const cards = [
    {
      icon: <Heart className="w-12 h-12 text-purple-500 mb-6" />,
      title: "Enhanced satisfaction",
      desc: "Achieve higher customer loyalty and a positive brand reputation through proactive customer service and efficient issue resolution.",
    },
    {
      icon: <Cog className="w-12 h-12 text-purple-500 mb-6" />,
      title: "Operational efficiency",
      desc: "Reduce response times and operational costs, ensuring optimal resource utilization and increased business productivity.",
    },
    {
      icon: <Cpu className="w-12 h-12 text-purple-500 mb-6" />,
      title: "Skilled workforce",
      desc: "Equip agents with the right tools, insights and capabilities to deliver exceptional customer experiences consistently.",
    },
    {
      icon: <Cpu className="w-12 h-12 text-purple-500 mb-6" />,
      title: "AI-driven insights",
      desc: "Leverage AI-powered analytics to improve decision-making and customer engagement.",
    },
    {
      icon: <Cpu className="w-12 h-12 text-purple-500 mb-6" />,
      title: "Scalable operations",
      desc: "Build systems and processes that scale seamlessly as your business grows.",
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
            Vision, strategy and implementation
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
              src={Performance}
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
              Turn vision into strategy and strategy into growth
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed">
              Design and implement customer service strategies, talent solutions
              and operating models that not only delight customers but also
              drive profitability and sustainable business growth.
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
              Every growing organisation reaches a point where talent alone is
              no longer enough. As teams expand and business complexity
              increases, the real need becomes clarity — clear expectations,
              consistent accountability, and performance conversations that
              happen at the right time, not just at year-end. When these
              elements come together within a structured system, teams
              consistently elevate their performance and begin delivering
              results that exceed expectations . Our Performance Management &
              Organisation Effectiveness service is built around this
              understanding — helping you create a performance ecosystem that
              connects your business strategy to individual accountability,
              drives measurable outcomes, and scales naturally as your
              organisation grows.
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
              of executives are actively making trade-offs between cost
              efficiency and customer satisfaction, highlighting the importance
              of balancing these factors.
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
              How vision, strategy and <br />
              implementation is changing
            </h2>
          </div>

          {/* CONTENT */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT IMAGE */}
            <div>
              <img
                src="/image2.jpg"
                alt="AI Experience"
                className="w-full h-[420px] object-cover"
              />
            </div>

            {/* RIGHT TEXT */}
            <div className="max-w-md ml-auto">
              <div className="w-10 h-[3px] bg-purple-500 mb-6"></div>

              <h3 className="text-lg md:text-xl font-semibold mb-6">
                Implement a service strategy powered by AI
              </h3>

              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                Generative AI is transforming customer service from reactive
                support to proactive engagement. By enabling smarter, contextual
                interactions across the customer journey...
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

export default PerformanceManagement;
