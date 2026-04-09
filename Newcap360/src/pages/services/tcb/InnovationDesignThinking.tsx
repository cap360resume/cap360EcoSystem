import Navbar from "@/components/Navbar";
import { useState } from "react";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";
import HRCAMSSubNavbar from "@/components/HRCAMSSubNavbar";
import {
  ArrowRight,
  Target,
  Users,
  Lightbulb,
  Sparkles,
  GitBranch,
  Shuffle,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";
import inovation from "@/assets/inovation.jpeg";
import designthink from "@/assets/designthinking.avif"

const  DesignThinking = () => {
  const { ref: sRef, isInView: sInView } = useScrollAnimation(0.1);
  const { ref: bRef, isInView: bInView } = useScrollAnimation(0.1);
  const [activeIndex, setActiveIndex] = useState(null);
  const solutions = [
    {
      icon: Target,
      title: "Design Thinking & Innovation Workshops",
      content: (
        <>
          <p className="mb-4">
            We enable teams to adopt a structured, human-centered approach to
            innovation, helping them solve complex business challenges with
            clarity and creativity.
          </p>

          <ul className="space-y-3 mb-4 list-disc pl-5">
            <li>
              <strong>Innovation mindset:</strong> Shift from conventional
              thinking to creative problem-solving.
            </li>
            <li>
              <strong>Design thinking frameworks:</strong> Learn empathy,
              ideation, prototyping, and testing.
            </li>
            <li>
              <strong>Real-world application:</strong> Solve live business
              challenges during sessions.
            </li>
          </ul>

          <p>
            The outcome is a team capable of driving innovation with structure
            and confidence.
          </p>
        </>
      ),
    },
    {
      icon: Target,
      title: "Customer-Centric Problem Solving",
      content: (
        <>
          <p className="mb-4">
            Innovation begins with understanding the user. We help teams uncover
            deep insights that lead to meaningful and impactful solutions.
          </p>

          <ul className="space-y-3 mb-4 list-disc pl-5">
            <li>
              <strong>Customer journey mapping:</strong> Identify key
              touchpoints and gaps.
            </li>
            <li>
              <strong>Persona creation:</strong> Build user-focused thinking.
            </li>
            <li>
              <strong>Problem reframing:</strong> Define the right problem
              before solving.
            </li>
          </ul>

          <p>
            The outcome is solutions that are relevant, practical, and aligned
            to user needs.
          </p>
        </>
      ),
    },
    {
      icon: Target,
      title: "Ideation, Prototyping & Testing",
      content: (
        <>
          <p className="mb-4">
            We help teams move from ideas to execution through structured
            ideation and rapid experimentation.
          </p>

          <ul className="space-y-3 mb-4 list-disc pl-5">
            <li>
              <strong>Idea generation:</strong> Creative thinking frameworks and
              brainstorming.
            </li>
            <li>
              <strong>Rapid prototyping:</strong> Build quick, testable
              concepts.
            </li>
            <li>
              <strong>Iterative testing:</strong> Learn fast through feedback
              loops.
            </li>
          </ul>

          <p>
            The outcome is faster innovation cycles and better decision-making.
          </p>
        </>
      ),
    },
    {
      icon: Target,
      title: "Building an Innovation Culture",
      content: (
        <>
          <p className="mb-4">
            Sustainable innovation requires a culture that encourages
            experimentation, collaboration, and continuous improvement.
          </p>

          <ul className="space-y-3 mb-4 list-disc pl-5">
            <li>
              <strong>Leadership alignment:</strong> Driving innovation from the
              top.
            </li>
            <li>
              <strong>Cross-functional collaboration:</strong> Breaking silos.
            </li>
            <li>
              <strong>Innovation practices:</strong> Embedding structured
              approaches.
            </li>
          </ul>

          <p>
            The outcome is a culture where innovation becomes a continuous
            capability.
          </p>
        </>
      ),
    },
  ];

  const [index, setIndex] = useState(0);

  const cards = [
    {
      icon: <Lightbulb className="w-12 h-12 text-purple-500 mb-6" />,
      title: "Customer-centric thinking",
      desc: "Design solutions grounded in real user needs and experiences.",
    },
    {
      icon: <Sparkles className="w-12 h-12 text-purple-500 mb-6" />,
      title: "Creative problem-solving",
      desc: "Approach challenges with innovative and structured thinking.",
    },
    {
      icon: <GitBranch className="w-12 h-12 text-purple-500 mb-6" />,
      title: "Faster innovation cycles",
      desc: "Move quickly from ideas to tested solutions through experimentation.",
    },
    {
      icon: <Users className="w-12 h-12 text-purple-500 mb-6" />,
      title: "Collaboration & co-creation",
      desc: "Enable teams to work together to build impactful solutions.",
    },
    {
      icon: <Shuffle className="w-12 h-12 text-purple-500 mb-6" />,
      title: "Innovation-driven culture",
      desc: "Build a mindset of continuous improvement and experimentation.",
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
          <span className="text-gray-400">Innovation & Design Thinking</span>
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
              src={inovation}
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
              Innovation & Design Thinking
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed">
              In today’s rapidly evolving business environment, organisations
              must go beyond traditional approaches and embrace innovation as a
              core capability. Innovation & Design Thinking empowers teams to
              understand problems deeply, challenge assumptions, and design
              solutions that are practical, user-centric, and scalable. By
              combining empathy, creativity, and structured thinking,
              organisations can unlock new opportunities and drive meaningful
              business outcomes.
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
              Innovation today is no longer optional — it is a core capability
              for organisations that want to stay relevant and competitive. As
              business challenges become more complex and customer expectations
              continue to evolve, organisations must move beyond traditional
              problem-solving and adopt more human-centered, creative
              approaches. The opportunity lies in understanding problems deeply,
              uncovering unmet needs, and designing solutions that are both
              practical and impactful. The shift is from reactive thinking to
              intentional innovation — where ideas are explored, tested, and
              refined to create meaningful outcomes.
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
              Design thinking is transforming organisations 
            
            </h2>
          </div>

          {/* CONTENT */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT IMAGE */}
            <div>
              <img
                src={designthink}
                alt="Design Thinking"
                className="w-full h-[420px] object-cover"
              />
            </div>

            {/* RIGHT TEXT */}
            <div className="max-w-md ml-auto">
              <div className="w-10 h-[3px] bg-purple-500 mb-6"></div>

              <h3 className="text-lg md:text-xl font-semibold mb-6">
                Solve problems with a human-centered approach
              </h3>

              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                Design Thinking is transforming how organisations approach
                challenges — shifting from assumptions to real user insights. By
                combining empathy, ideation, and experimentation, teams can
                build solutions that are not only innovative but also practical,
                scalable, and aligned with real business needs....
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

export default DesignThinking;
