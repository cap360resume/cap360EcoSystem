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
  FileText,
  ShieldCheck,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";
import labourlow from "@/assets/labourlow.webp";

const LabourLaw = () => {
  const { ref: sRef, isInView: sInView } = useScrollAnimation(0.1);
  const { ref: bRef, isInView: bInView } = useScrollAnimation(0.1);
  const [activeIndex, setActiveIndex] = useState(null);
  const solutions = [
    {
      icon: Target,
      title: "End-to-End Labour Law Compliance Audits",
      content: (
        <>
          <p className="mb-4">
            A compliance audit is not just a checklist exercise. It is a
            systematic review of how your organisation manages its obligations
            across all applicable labour laws — from Shops & Establishments
            regulations to Provident Fund, ESI, Bonus, and Maternity-related
            compliances.
          </p>

          <p className="mb-4">
            We conduct comprehensive audits that identify risks early, ensure
            regulatory adherence, and strengthen governance frameworks across HR
            and payroll operations.
          </p>

          <ul className="space-y-3 mb-4 list-disc pl-5">
            <li>
              <strong>Statutory registration & licence review:</strong>{" "}
              Verifying that all required registrations are in place, valid, and
              renewed as per statutory timelines.
            </li>
            <li>
              <strong>Payroll compliance review:</strong> Covering PF, ESI,
              Professional Tax, and TDS — ensuring accurate calculations, timely
              remittances, and compliant documentation.
            </li>
            <li>
              <strong>Contractor compliance review:</strong> Addressing a
              critical risk area by ensuring principal employer obligations are
              met for contract labour.
            </li>
            <li>
              <strong>Documentation standardisation:</strong> Reviewing
              employment contracts, offer letters, appointment letters, and
              separation documents for legal sufficiency and consistency.
            </li>
            <li>
              <strong>Compliance risk mapping:</strong> Identifying gaps,
              assessing potential liabilities, and prioritising corrective
              actions.
            </li>
          </ul>

          <p>
            The outcome is a compliant, audit-ready organisation with reduced
            legal risk, improved documentation discipline, and stronger HR
            governance.
          </p>
        </>
      ),
    },
    {
      icon: Target,
      title: "New Labour Code Preparedness",
      content: (
        <>
          <p className="mb-4">
            India’s four new Labour Codes represent a major shift in labour
            regulations. Organisations that prepare early will be better
            positioned to manage compliance and structural impact.
          </p>

          <ul className="space-y-3 mb-4 list-disc pl-5">
            <li>
              <strong>Regulatory understanding:</strong> Interpreting key
              changes in definitions, compliance requirements, and
              applicability.
            </li>
            <li>
              <strong>CTC impact assessment:</strong> Evaluating impact on pay
              structures, gratuity, and benefits.
            </li>
            <li>
              <strong>Documentation alignment:</strong> Updating contracts and
              HR policies as per new code requirements.
            </li>
            <li>
              <strong>Compliance readiness:</strong> Building systems adaptable
              to evolving implementation timelines.
            </li>
          </ul>

          <p>The outcome is a compliant and future-ready organisation.</p>
        </>
      ),
    },

    {
      icon: Target,
      title: "POSH Framework Audit & Strengthening",
      content: (
        <>
          <p className="mb-4">
            The Prevention of Sexual Harassment (POSH) Act is often
            underimplemented. Many organisations have an ICC in place but lack
            proper training, documentation, and effective processes.
          </p>

          <ul className="space-y-3 mb-4 list-disc pl-5">
            <li>
              <strong>ICC review:</strong> Constitution review and
              reconstitution guidance.
            </li>
            <li>
              <strong>Compliance documentation:</strong> Annual filings and
              reporting support.
            </li>
            <li>
              <strong>Awareness workshops:</strong> Training for employees and
              managers.
            </li>
            <li>
              <strong>Policy updates:</strong> Alignment with latest legal
              interpretations.
            </li>
            <li>
              <strong>Complaint protocols:</strong> Structured processes
              ensuring confidentiality and fairness.
            </li>
          </ul>

          <p>The outcome is a compliant and credible POSH framework.</p>
        </>
      ),
    },

    {
      icon: Target,
      title: "Policy Handbook Development & Delegation of Authority Mapping",
      content: (
        <>
          <p className="mb-4">
            A policy handbook acts as the operating manual for people decisions.
            Without it, inconsistency and compliance risks increase across
            teams.
          </p>

          <ul className="space-y-3 mb-4 list-disc pl-5">
            <li>
              <strong>Policy handbook development:</strong> Covering leave,
              conduct, travel, separation, and data privacy policies.
            </li>
            <li>
              <strong>Plain-language structure:</strong> Clear, practical
              policies that are easy to understand and implement.
            </li>
            <li>
              <strong>Delegation of Authority (DoA):</strong> Defining approval
              rights across levels for better control and accountability.
            </li>
            <li>
              <strong>Decision clarity:</strong> Ensuring decisions are made at
              the right level with defined governance.
            </li>
          </ul>

          <p>
            The outcome is a consistent, controlled, and compliant
            decision-making framework.
          </p>
        </>
      ),
    },

    {
      icon: Target,
      title: "Board-Ready HR Governance Dashboards",
      content: (
        <>
          <p className="mb-4">
            As organisations scale or prepare for PE/IPO, HR must deliver clear,
            boardroom-ready insights. We design dashboards that translate people
            data into strategic decision-making inputs.
          </p>

          <ul className="space-y-3 mb-4 list-disc pl-5">
            <li>
              <strong>Workforce analytics:</strong> Headcount, attrition, and
              trend insights.
            </li>
            <li>
              <strong>Compliance tracking:</strong> Status across applicable
              labour laws.
            </li>
            <li>
              <strong>Diversity metrics:</strong> Inclusion and representation
              tracking.
            </li>
            <li>
              <strong>Leadership pipeline:</strong> Succession readiness and
              bench strength.
            </li>
            <li>
              <strong>Risk visibility:</strong> Unresolved employee matters and
              key flags.
            </li>
          </ul>

          <p className="font-semibold mb-2">Key Outcomes</p>

          <ul className="space-y-2 list-disc pl-5">
            <li>Audit-ready documentation across labour laws</li>
            <li>Reduced regulatory and litigation risk</li>
            <li>Preparedness for new labour code implementation</li>
            <li>Robust POSH compliance beyond tokenism</li>
            <li>
              Governance readiness for PE, IPO, and institutional scrutiny
            </li>
          </ul>
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
            AI-powered HR chatbot can resolve a majority of these instantly,
            enabling HR to focus on higher-value work.
          </p>

          <ul className="space-y-3 mb-4 list-disc pl-5">
            <li>
              <strong>Chatbot architecture:</strong> Defining scope,
              conversation flows, and escalation triggers.
            </li>
            <li>
              <strong>Knowledge frameworks:</strong> Structuring policies, FAQs,
              and documentation for accurate AI retrieval.
            </li>
            <li>
              <strong>Governance protocols:</strong> Ensuring responses are
              reviewed, updated, and controlled to avoid misinformation.
            </li>
          </ul>

          <p>
            The outcome is faster query resolution, improved employee
            experience, and more efficient HR operations.
          </p>
        </>
      ),
    },
  ];

  const [index, setIndex] = useState(0);

  const cards = [
    {
  icon: <ShieldCheck className="w-12 h-12 text-purple-500 mb-6" />,
  title: "Stronger compliance & risk protection",
  desc: "Ensure full adherence to labour laws through structured audits, accurate documentation, and proactive compliance frameworks that minimize legal and regulatory risks.",
},
{
  icon: <Cog className="w-12 h-12 text-purple-500 mb-6" />,
  title: "Operational governance efficiency",
  desc: "Streamline HR processes with standardized policies, clear approval structures, and governance mechanisms that drive consistency and reduce operational gaps.",
},
{
  icon: <Users className="w-12 h-12 text-purple-500 mb-6" />,
  title: "Accountable & compliant workforce",
  desc: "Build awareness and accountability across the organisation through POSH frameworks, policy clarity, and structured compliance practices.",
},
{
  icon: <FileText className="w-12 h-12 text-purple-500 mb-6" />,
  title: "Audit-ready documentation",
  desc: "Establish legally sound, standardized HR documentation and records that ensure readiness for audits, inspections, and investor due diligence.",
},
{
  icon: <BarChart3 className="w-12 h-12 text-purple-500 mb-6" />,
  title: "Governance & compliance insights",
  desc: "Leverage HR dashboards and compliance tracking systems to monitor risks, ensure transparency, and support board-level decision-making.",
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
            Labour Law Compliance & HR Governance
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
              src={labourlow}
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
              Labour Law Compliance & HR Governance
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed">
              Navigate the complex regulatory landscape with confidence. Our
              compliance experts ensure your organization stays ahead of
              evolving labour laws.
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
              Labour law compliance and HR governance are among the [K1.1]most
              important — and most underinvested — areas of people management in
              growing organisations. As headcount grows, regulatory obligations
              multiply, documentation requirements increase, and the stakes of
              getting things wrong become significantly higher. Organisations
              that build their compliance infrastructure proactively are simply
              better positioned — for audits, for investor scrutiny, and for the
              trust of their own people. Our Labour Law Compliance & HR
              Governance service is built to support exactly this — helping you
              create an HR infrastructure that is audit-ready, legally sound,
              and structured to grow with your organisation. .
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

            <div className="text-[64px] font-bold mb-6">72%</div>

            <p className="text-gray-200 leading-relaxed">
              of growing organisations face compliance gaps due to evolving labour laws and inadequate HR governance frameworks, increasing regulatory and legal risks..
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
              How vision, strategy and implementation are transforming <br /> HR Compliance & Governance 
              
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
                Build a compliance-first, audit-ready organisation
              </h3>

              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                As regulatory complexity increases, organisations must move from reactive compliance to proactive governance. By integrating structured audits, policy frameworks, POSH compliance, and real-time monitoring systems, businesses can reduce risk, ensure legal adherence, and build a strong foundation for scalable growth....
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
        className="flex gap-9"
        animate={{ x: `-${index * (100 / visibleCards)}%` }}
        transition={{ duration: 0.5 }}
      >
        {/* 🔥 LOOP FIX (duplicate cards) */}
        {[...cards, ...cards].map((card, i) => (
          <div
            key={i}
            className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0"
          >
            {card.icon}

            <h3 className="text-lg md:text-xl font-semibold mb-3">
              {card.title}
            </h3>

            <p className="text-base md:text-lg text-gray-300 leading-relaxed break-words">
              {card.desc}
            </p>
          </div>
        ))}
      </motion.div>
    </div>

    {/* Navigation */}
    <div className="flex justify-end gap-4 mt-12">
      <button
        onClick={() =>
          setIndex((prev) => (prev - 1 + cards.length) % cards.length)
        }
        className="w-12 h-12 bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition"
      >
        ←
      </button>

      <button
        onClick={() =>
          setIndex((prev) => (prev + 1) % cards.length)
        }
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

export default LabourLaw;
