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
  TrendingUp,
  HandshakeIcon,
  Star,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";
import salesHero from "@/assets/inovation.jpeg";
import salesDetail from "@/assets/designthinking.avif";

const SalesCustomerExcellence = () => {
  const { ref: sRef, isInView: sInView } = useScrollAnimation(0.1);
  const { ref: bRef, isInView: bInView } = useScrollAnimation(0.1);
  const [activeIndex, setActiveIndex] = useState(null);

  const solutions = [
    {
      icon: Target,
      title: "Consultative Selling",
      content: (
        <>
          <p className="mb-4">
            Move beyond product pitching to value-driven conversations. Our
            consultative selling programs enable professionals to deeply
            understand customer needs, uncover pain points, and offer tailored
            solutions that create long-term impact.
          </p>

          <ul className="space-y-3 mb-4 list-disc pl-5">
            <li>
              <strong>Customer-centric mindset:</strong> Develop thinking
              grounded in real customer needs and goals.
            </li>
            <li>
              <strong>Effective questioning & active listening:</strong> Uncover
              deeper insights through purposeful dialogue.
            </li>
            <li>
              <strong>Solution positioning:</strong> Articulate value clearly
              and compellingly.
            </li>
            <li>
              <strong>Long-term client relationships:</strong> Build trust that
              drives repeat business and loyalty.
            </li>
          </ul>

          <p>
            The outcome is a sales team that leads with insight and positions
            itself as a trusted advisor.
          </p>
        </>
      ),
    },
    {
      icon: Target,
      title: "Negotiation Skills",
      content: (
        <>
          <p className="mb-4">
            Empower your teams to negotiate with confidence, clarity, and
            strategic intent. We focus on creating win-win outcomes that
            strengthen relationships while protecting business value.
          </p>

          <ul className="space-y-3 mb-4 list-disc pl-5">
            <li>
              <strong>Principles of effective negotiation:</strong> Foundational
              frameworks for any negotiation context.
            </li>
            <li>
              <strong>Handling objections:</strong> Navigate difficult
              conversations with composure and strategy.
            </li>
            <li>
              <strong>Value-based strategies:</strong> Negotiate on value, not
              just price.
            </li>
            <li>
              <strong>Closing with confidence:</strong> Secure deals that
              benefit both parties.
            </li>
          </ul>

          <p>
            The outcome is a team that negotiates strategically and closes deals
            with greater consistency.
          </p>
        </>
      ),
    },
    {
      icon: Target,
      title: "Customer Experience (CX) Management",
      content: (
        <>
          <p className="mb-4">
            Exceptional customer experience is the key differentiator in
            today's market. Our CX programs help organisations design and
            deliver seamless, consistent, and memorable customer journeys.
          </p>

          <ul className="space-y-3 mb-4 list-disc pl-5">
            <li>
              <strong>Customer expectations & behaviour:</strong> Understand
              what drives satisfaction and loyalty.
            </li>
            <li>
              <strong>Journey mapping & optimisation:</strong> Identify and
              improve key experience touchpoints.
            </li>
            <li>
              <strong>Multi-channel consistency:</strong> Deliver seamless
              experiences across every interaction.
            </li>
            <li>
              <strong>Customer-first culture:</strong> Embed CX thinking at
              every level of the organisation.
            </li>
          </ul>

          <p>
            The outcome is a customer experience that builds loyalty and drives
            measurable business results.
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
            Our approach combines practical frameworks, real-world simulations,
            and behavioural interventions to ensure measurable outcomes across
            sales and CX functions.
          </p>

          <ul className="space-y-3 mb-4 list-disc pl-5">
            <li>
              <strong>Instructor-led workshops:</strong> Experiential learning
              that drives real behaviour change.
            </li>
            <li>
              <strong>Role plays & live simulations:</strong> Practise in safe,
              realistic environments.
            </li>
            <li>
              <strong>Industry-specific customisation:</strong> Content tailored
              to your context and challenges.
            </li>
            <li>
              <strong>Continuous reinforcement:</strong> Tools and follow-up to
              sustain learning over time.
            </li>
          </ul>

          <p>
            The outcome is learning that sticks — driving performance
            improvements that last beyond the classroom.
          </p>
        </>
      ),
    },
  ];

  const [index, setIndex] = useState(0);

  const cards = [
    {
      icon: <TrendingUp className="w-12 h-12 text-purple-500 mb-6" />,
      title: "Increased sales effectiveness",
      desc: "Boost conversion rates and drive sustainable revenue growth.",
    },
    {
      icon: <Users className="w-12 h-12 text-purple-500 mb-6" />,
      title: "Stronger client relationships",
      desc: "Build lasting partnerships that improve retention and loyalty.",
    },
    {
      icon: <Sparkles className="w-12 h-12 text-purple-500 mb-6" />,
      title: "Improved negotiation outcomes",
      desc: "Close deals with greater confidence and higher deal value.",
    },
    {
      icon: <Star className="w-12 h-12 text-purple-500 mb-6" />,
      title: "Enhanced customer satisfaction",
      desc: "Deliver experiences that exceed expectations at every touchpoint.",
    },
    {
      icon: <Shuffle className="w-12 h-12 text-purple-500 mb-6" />,
      title: "Customer-centric sales culture",
      desc: "Build a high-performing team that leads with value, not volume.",
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
          <span className="text-gray-400">Sales & Customer Excellence</span>
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
              src={salesHero}
              alt="Sales & Customer Excellence"
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
              Sales & Customer Excellence
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed">
              In today's highly competitive and customer-driven marketplace,
              sales success is no longer just about closing deals — it's about
              building trust, delivering value, and creating meaningful customer
              experiences. Our Sales & Customer Excellence programs equip
              professionals and organisations with the capabilities needed to
              drive sustainable revenue growth while enhancing customer
              satisfaction and loyalty. At Cap360, we transform traditional
              selling into strategic, insight-led engagements that position your
              teams as trusted advisors.
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
              Sales effectiveness is no longer optional — it is a core
              capability for organisations that want to stay competitive and
              grow sustainably. As buyer behaviour evolves and customer
              expectations rise, organisations must move beyond transactional
              selling and adopt insight-led, relationship-driven approaches. The
              opportunity lies in understanding the customer deeply, building
              genuine trust, and designing experiences that are both impactful
              and consistent. The shift is from reactive selling to intentional
              customer excellence — where every interaction is an opportunity to
              create lasting value.
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

            <div className="text-[64px] font-bold mb-6">73%</div>

            <p className="text-gray-200 leading-relaxed">
              of customers say that customer experience is a key factor in
              their purchasing decisions, underscoring the critical link between
              sales excellence and lasting customer loyalty.
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
              Sales excellence is transforming organisations
            </h2>
          </div>

          {/* CONTENT */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT IMAGE */}
            <div>
              <img
                src={salesDetail}
                alt="Sales Excellence"
                className="w-full h-[420px] object-cover"
              />
            </div>

            {/* RIGHT TEXT */}
            <div className="max-w-md ml-auto">
              <div className="w-10 h-[3px] bg-purple-500 mb-6"></div>

              <h3 className="text-lg md:text-xl font-semibold mb-6">
                Build a customer-centric, high-performing sales culture
              </h3>

              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                Sales & Customer Excellence is reshaping how organisations
                engage with their customers — shifting from transactional
                interactions to meaningful, value-driven relationships. By
                combining consultative selling, strategic negotiation, and
                exceptional CX management, teams can deliver outcomes that are
                not only commercially impactful but also deeply aligned with
                real customer needs....
              </p>
            </div>
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
            Transform your sales & customer culture
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

export default SalesCustomerExcellence;