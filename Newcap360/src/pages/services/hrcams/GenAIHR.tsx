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
import HR from "@/assets/HR.png";

const GenAIHR  = () => {
  const { ref: sRef, isInView: sInView } = useScrollAnimation(0.1);
  const { ref: bRef, isInView: bInView } = useScrollAnimation(0.1);
  const [activeIndex, setActiveIndex] = useState(null);
  const solutions = [
    {
      icon: Target,
     title: "AI Enablement for HR & Business Functions",
content: (
  <>
    <p className="mb-4">
      We help organisations leverage AI responsibly to enhance operational
      efficiency, improve decision-making, and reduce manual effort — without
      unnecessary complexity or headcount expansion.
    </p>

    <p className="mb-4">
      Our approach focuses on identifying practical, high-impact use cases
      and building scalable AI frameworks that integrate seamlessly with
      existing processes.
    </p>

    <ul className="space-y-3 mb-4 list-disc pl-5">
      <li>
        <strong>AI use-case workshops:</strong> Identifying high-impact,
        business-relevant AI opportunities.
      </li>
      <li>
        <strong>HR chatbot & knowledge frameworks:</strong> Automating
        employee query resolution and HR support.
      </li>
      <li>
        <strong>Sales enablement AI:</strong> Enhancing pipeline visibility,
        forecasting, and decision-making.
      </li>
      <li>
        <strong>Productivity optimisation:</strong> Driving efficiency and
        output without increasing headcount.
      </li>
    </ul>

    <p>
      The outcome is focused AI adoption with measurable impact on efficiency,
      productivity, and business performance.
    </p>
  </>
),
    },
    {
      icon: Target,
      title: "HR Chatbot Design & Knowledge Management Frameworks",
content: (
  <>
    <p className="mb-4">
      HR teams spend significant time handling repetitive queries. An
      AI-powered chatbot can resolve most of these instantly, improving
      efficiency and employee experience.
    </p>

    <ul className="space-y-3 mb-4 list-disc pl-5">
      <li>
        <strong>Chatbot architecture:</strong> Scope, flows, and integrations
        across platforms like Teams, WhatsApp, or HRMS.
      </li>
      <li>
        <strong>Knowledge frameworks:</strong> Structuring policies and FAQs
        for accurate AI responses.
      </li>
      <li>
        <strong>Governance protocols:</strong> Ensuring accuracy, updates, and
        controlled responses.
      </li>
    </ul>

    <p>
      The outcome is faster query resolution and more efficient HR operations.
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
            Gen AI for HR & Operational Productivity
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
              src={HR}
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
             Gen AI for HR & Operational Productivity
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed">
              Harness the power of generative AI to revolutionize HR operations, enhance employee experiences, and unlock unprecedented productivity gains.
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
Generative AI is reshaping how organisations think about productivity, HR operations, and workforce efficiency — and the pace of change is accelerating. For growing organisations, the opportunity lies in identifying where AI can meaningfully reduce effort, improve quality, and free up people for higher-value work. The key is moving from curiosity to clarity: knowing which use cases are worth pursuing, which tools are right for your context, and how to embed AI responsibly into the way your organisation works            </p>
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

export default GenAIHR;
