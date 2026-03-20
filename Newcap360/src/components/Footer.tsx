import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import logo from "@/assets/cap360-logo.png";

const footerLinks = {
  "About CAP360": ["About Us", "Leadership", "Annual Report", "Corporate Citizenship", "Inclusion & Diversity"],
  "Explore Jobs": ["Search Careers", "Experienced", "Internships", "Job Alerts"],
  "Contact Us": ["General Inquiries", "Office Locations", "Media Relations"],
};

const socialLinks = ["LinkedIn", "Twitter", "Facebook", "Instagram"];

const Footer = () => {
  const { ref, isInView } = useScrollAnimation(0.05);

  return (
    <footer className="bg-cap-navy border-t border-border py-16" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Newsletter signup */}
        <motion.div
          className="mb-16 pb-12 border-b border-border/30"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold mb-4">Stay ahead of the curve</h3>
          <p className="text-muted-foreground mb-6 max-w-md">
            Get the latest insights, research and perspectives delivered to your inbox.
          </p>
          <div className="flex gap-3 max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-secondary/50 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cap-blue transition-colors"
            />
            <button className="bg-cap-orange text-background px-6 py-3 text-sm font-semibold hover:bg-cap-orange/90 transition-colors flex items-center gap-2">
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <img src={logo} alt="CAP360" className="h-10 mb-6" />
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              CAP360 is a leading global professional services company helping
              the world's leading businesses, governments and organizations
              build their digital core.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs text-muted-foreground hover:text-cap-blue transition-colors font-medium"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-semibold text-sm mb-4 text-foreground">{heading}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 CAP360. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms of Use", "Cookie Policy", "Accessibility"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
