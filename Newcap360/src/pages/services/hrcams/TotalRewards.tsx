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
import TotalReward from "@/assets/TotalReward.png";

const TotalRewards = () => {
  const { ref: sRef, isInView: sInView } = useScrollAnimation(0.1);
  const { ref: bRef, isInView: bInView } = useScrollAnimation(0.1);
  const [activeIndex, setActiveIndex] = useState(null);
  const solutions = [
    {
      icon: Target,
      title: "Compensation Structure & Grade Design",
content: (
  <>
    <p className="mb-4">
      At the foundation of any Total Rewards strategy is a well-designed
      compensation structure. We design CTC (Cost to Company) architectures
      that define how pay is structured across levels, functions, and roles —
      with clarity on fixed versus variable components, statutory deductions,
      and benefits.
    </p>

    <p className="mb-4">
      Our approach ensures fairness, competitiveness, and governance across
      the organisation while aligning compensation with business strategy and
      performance outcomes.
    </p>

    <ul className="space-y-3 mb-4 list-disc pl-5">
      <li>
        <strong>Grade and band design:</strong> Creating a levelled structure
        (e.g., L1–L8 or Band A–F) that brings consistency to titling, pay
        ranges, and progression paths across functions.
      </li>
      <li>
        <strong>Internal parity modelling:</strong> Identifying and correcting
        pay inequities before they become attrition risks or compliance issues.
      </li>
      <li>
        <strong>Pay mix optimisation:</strong> Structuring the right balance of
        fixed pay, performance-linked variable, and long-term incentives based
        on role criticality, industry benchmarks, and organisational philosophy.
      </li>
      <li>
        <strong>Compensation governance frameworks:</strong> Defining approval
        authorities, revision cycles, and documentation standards so decisions
        remain consistent, transparent, and auditable.
      </li>
    </ul>

    <p>
      The outcome is a structured, equitable, and scalable compensation system
      that supports talent attraction, retention, and performance-driven growth.
    </p>
  </>
      ),
    },
    {
      icon: Target,
     title: "Short-Term Incentive (STI) Models",
content: (
  <>
    <p className="mb-4">
      A Short-Term Incentive (STI) is the annual or quarterly variable pay
      component tied to individual, team, and organisational performance. When
      designed well, STI programmes become powerful drivers of productivity
      and goal alignment. When poorly structured, they can lead to entitlement,
      confusion, or gaming of metrics.
    </p>

    <p className="mb-4">
      We design STI frameworks that align incentives with measurable business
      outcomes while maintaining fairness, transparency, and motivational
      impact across roles.
    </p>

    <ul className="space-y-3 mb-4 list-disc pl-5">
      <li>
        <strong>Performance-linked variable models:</strong> Defining clear
        payout formulae tied to individual KPI achievement and business
        performance thresholds.
      </li>
      <li>
        <strong>Target-setting methodology:</strong> Structuring goals that are
        ambitious yet achievable — avoiding the “all or nothing” effect and
        sustaining motivation.
      </li>
      <li>
        <strong>Sales incentive architecture:</strong> Designing incentive
        structures for sales roles, including accelerators, decelerators, and
        territory fairness mechanisms.
      </li>
      <li>
        <strong>Profit-linked incentive models:</strong> Enabling organisations
        to share value creation with employees in a structured and sustainable
        way.
      </li>
    </ul>

    <p>
      The outcome is a high-impact incentive system that reinforces performance,
      drives accountability, and directly links rewards to business success.
    </p>
  </>
      ),
    },

    {
      icon: Target,
      title: "Long-Term Incentive (LTI) Models — ESOPs, Phantom Stock & SAR Advisory",
content: (
  <>
    <p className="mb-4">
      Long-Term Incentives (LTIs) are among the most powerful tools for
      retaining senior talent, aligning leadership with shareholder value,
      and fostering a sense of shared ownership. For scaling organisations,
      LTIs often determine whether leadership stays committed through the
      growth journey or exits at the first opportunity.
    </p>

    <p className="mb-4">
      We provide advisory on designing LTI frameworks that balance retention,
      motivation, and capital structure considerations while aligning with
      long-term business outcomes.
    </p>

    <ul className="space-y-3 mb-4 list-disc pl-5">
      <li>
        <strong>ESOP design:</strong> Structuring Employee Stock Option Plans
        including eligibility criteria, grant sizing, vesting schedules
        (typically 3–4 year cliff and graded), exercise pricing, and exit
        event provisions.
      </li>
      <li>
        <strong>Phantom stock & Stock Appreciation Rights (SARs):</strong> For
        private companies not ready for ESOPs, these models provide economic
        upside without diluting the cap table.
      </li>
      <li>
        <strong>Vesting design & governance:</strong> Aligning vesting timelines,
        acceleration clauses, and governance frameworks with PE/VC investment
        structures and potential IPO pathways.
      </li>
    </ul>

    <p>
      The result is a robust long-term incentive strategy that strengthens
      leadership retention, aligns interests with enterprise value creation,
      and supports sustainable organisational growth.
    </p>
  </>
),
    },

    {
      icon: Target,
      title: "Rewards & Recognition (R&R) Frameworks",
content: (
  <>
    <p className="mb-4">
      Monetary compensation helps retain employees, but recognition is what
      truly motivates them. A well-designed Rewards & Recognition (R&R)
      programme acknowledges behaviours and contributions that formal
      appraisals often miss — in real time, not just at year-end.
    </p>

    <p className="mb-4">
      We design R&R frameworks that reinforce organisational values, drive
      desired behaviours, and create a culture of appreciation that is both
      consistent and scalable.
    </p>

    <ul className="space-y-3 mb-4 list-disc pl-5">
      <li>
        <strong>Spot awards & peer recognition programmes:</strong> Enabling
        timely appreciation of contributions through structured and inclusive
        recognition mechanisms.
      </li>
      <li>
        <strong>Behaviour-linked recognition:</strong> Aligning recognition
        programmes with organisational values to reinforce the behaviours that
        matter most.
      </li>
      <li>
        <strong>Budget discipline models:</strong> Designing cost-effective
        frameworks that ensure scalability without compromising impact.
      </li>
      <li>
        <strong>Manager toolkits:</strong> Equipping managers with practical
        tools and guidelines to deliver meaningful and consistent recognition.
      </li>
    </ul>

    <p>
      The outcome is a culture where recognition becomes a daily practice,
      strengthening engagement, reinforcing performance, and building a
      high-trust work environment.
    </p>
  </>
),
    },

    {
      title: "Benefits & Wellbeing Structuring",
content: (
  <>
    <p className="mb-4">
      Benefits are an increasingly critical part of the Total Rewards story —
      especially as Gen Z and millennial employees evaluate healthcare,
      flexibility, and wellbeing support alongside base compensation.
    </p>

    <p className="mb-4">
      We help organisations design benefits frameworks that are relevant,
      flexible, and aligned with evolving workforce expectations while
      maintaining cost efficiency and scalability.
    </p>

    <ul className="space-y-3 mb-4 list-disc pl-5">
      <li>
        <strong>Group health & term insurance structuring:</strong> Advisory on
        designing comprehensive coverage plans that balance employee needs
        with organisational cost considerations.
      </li>
      <li>
        <strong>Flexible benefits architecture:</strong> Creating modular
        benefits programmes tailored to different employee segments and life
        stages.
      </li>
      <li>
        <strong>Leadership wellbeing frameworks:</strong> Designing wellbeing
        and executive benefit structures that support senior leadership
        performance and sustainability.
      </li>
      <li>
        <strong>Leave & flexibility policy design:</strong> Aligning leave,
        remote work, and flexibility policies with talent strategy and
        organisational culture.
      </li>
    </ul>

    <p>
      The result is a future-ready benefits ecosystem that enhances employee
      experience, strengthens employer brand, and supports long-term talent
      retention.
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
              src={TotalReward}
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
              Total Rewards Architecture & Incentive Design
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed">
              Design and implement total rewards strategies and incentive models
              that align with your business objectives and attract top talent.
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
              As organisations scale, the question of how to attract, retain and
              motivate the right people becomes increasingly strategic. Leaders
              and HR teams often find themselves managing compensation decisions
              case by case — with no consistent framework to anchor what is
              fair, competitive, or sustainable. A well-designed Total Rewards
              strategy brings structure and intent to these decisions, giving
              your organisation a genuine edge in the talent market. Our Total
              Rewards Architecture service helps you design a compensation and
              rewards ecosystem that is competitive, internally fair,
              governance-ready, and aligned to your growth stage — one that
              works both for your people and your business. .
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

export default TotalRewards;
