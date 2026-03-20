import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import card1 from "@/assets/card-1.jpg";
import card3 from "@/assets/card-3.jpg";
import card4 from "@/assets/card-4.jpg";

const insights = [
  {
    category: "RESEARCH REPORT",
    title: "AI Transformation: What's top of mind for today's leaders",
    image: card1,
  },
  {
    category: "PERSPECTIVE",
    title: "Building resilient supply chains with intelligent automation",
    image: null,
    isLight: true,
  },
  {
    category: "RESEARCH REPORT",
    title: "4 critical actions to strengthen your cyber defenses now",
    image: card3,
  },
  {
    category: "RESEARCH REPORT",
    title: "Rewriting platform strategy for the agentic AI era",
    image: card4,
  },
];

const InsightsSection = () => {
  const { ref, isInView } = useScrollAnimation(0.1);

  return (
    <section id="services" className="section-dark py-20" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              className="insight-card group min-h-[420px] flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              {insight.image ? (
                <>
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={insight.image}
                      alt={insight.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="insight-card-overlay" />
                  <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                    <span className="text-xs font-bold tracking-widest text-cap-orange mb-3">
                      {insight.category}
                    </span>
                    <h3 className="text-lg font-bold leading-snug text-foreground group-hover:text-cap-blue transition-colors duration-300">
                      {insight.title}
                    </h3>
                  </div>
                </>
              ) : (
                <div className="bg-card p-6 flex flex-col justify-between h-full border border-border group-hover:border-cap-blue/40 transition-colors duration-300">
                  <div>
                    <span className="text-xs font-bold tracking-widest text-cap-orange mb-3 block">
                      {insight.category}
                    </span>
                    <h3 className="text-xl font-bold leading-snug text-foreground">
                      {insight.title}
                    </h3>
                  </div>
                  <a href="#" className="cta-link text-sm mt-6">
                    Read more
                    <ArrowRight className="w-4 h-4 text-cap-orange" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
