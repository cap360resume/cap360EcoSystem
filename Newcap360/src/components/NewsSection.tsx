import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const newsItems = [
  {
    date: "March 3, 2026",
    title: "CAP360 to Acquire Leading Analytics Firm to Strengthen AI and Data Capabilities",
  },
  {
    date: "March 1, 2026",
    title: "CAP360 to Announce Second-Quarter Fiscal 2026 Results",
  },
  {
    date: "February 26, 2026",
    title: "CAP360 and Partners Accelerate Enterprise Reinvention with Scalable AI Solutions",
  },
  {
    date: "February 11, 2026",
    title: "CAP360 Appoints New Chief Communications Officer",
  },
  {
    date: "February 3, 2026",
    title: "CAP360 Strengthens Cloud Practice with Strategic Leadership Appointment",
  },
];

const NewsSection = () => {
  const { ref, isInView } = useScrollAnimation(0.1);

  return (
    <section className="section-dark py-24" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          CAP360 News
        </motion.h2>
        <div>
          {newsItems.map((item, index) => (
            <motion.a
              key={index}
              href="#"
              className="news-item block group"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: 8 }}
            >
              <span className="text-sm text-muted-foreground block mb-2">
                {item.date}
              </span>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold group-hover:text-cap-blue transition-colors">
                  {item.title}
                </h3>
                <ArrowRight className="w-5 h-5 text-cap-orange opacity-0 group-hover:opacity-100 transition-all duration-300 flex-shrink-0 ml-4" />
              </div>
            </motion.a>
          ))}
        </div>
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a href="#" className="cta-link">
            View all news
            <ArrowRight className="w-4 h-4 text-cap-orange" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;
