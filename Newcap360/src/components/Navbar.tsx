import { useState, useEffect, useRef } from "react";
import { ChevronDown, Search, Globe, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/cap360-logo.png";

const megaMenuData: Record<string, { title: string; links: { label: string; path?: string }[] }[]> = {
  "What we do": [
    { title: "Services", links: [
      { label: "Assessment Services (ASER)", path: "/what-we-do/services/aser" },
      { label: "HR Consulting & Advisory (HRCAMS)", path: "/what-we-do/services/hrcams" },
      { label: "Training & Capability Building (TCB)", path: "/what-we-do/services/tcb" },
      { label: "Professional Alignment & Career Enhancement (PACE)", path: "/what-we-do/services/pace" },
    ]},
    { title: "Industries", links: [
      { label: "Banking" }, { label: "Communications & Media" }, { label: "Health" },
      { label: "High Tech" }, { label: "Insurance" }, { label: "Life Sciences" }, { label: "Retail" },
    ]},
    { title: "Platforms", links: [
      { label: "Cloud" }, { label: "Data & AI" }, { label: "Enterprise Platforms" }, { label: "Security" },
    ]},
  ],
  "Who we are": [
    { title: "About CAP360", links: [
      { label: "Our Company" }, { label: "Leadership" }, { label: "Our Values" },
      { label: "Corporate Citizenship" }, { label: "Inclusion & Diversity" },
    ]},
    { title: "Global Presence", links: [
      { label: "Office Locations" }, { label: "Annual Report" }, { label: "Innovation Hubs" }, { label: "Partnerships" },
    ]},
  ],
  "Careers": [
    { title: "Find Your Fit", links: [
      { label: "Search Careers" }, { label: "Experienced Professionals" }, { label: "Entry Level" },
      { label: "Internships" }, { label: "Military & Veterans" },
    ]},
    { title: "Life at CAP360", links: [
      { label: "Culture & Values" }, { label: "Benefits" }, { label: "Training & Development" }, { label: "Employee Stories" },
    ]},
  ],
};

// Define which paths are "main" pages — navbar stays fixed and always visible
const mainPages = ["/", "/what-we-do", "/what-we-think", "/who-we-are", "/careers"];

const navItems = [
  { label: "What we do", hasDropdown: true, path: "/what-we-do" },
  { label: "What we think", hasDropdown: false, path: "/what-we-think" },
  { label: "Who we are", hasDropdown: true, path: "/who-we-are" },
  { label: "Careers", hasDropdown: true, path: "/careers" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const lastScrollY = useRef(0);
  const navRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isMainPage = mainPages.includes(location.pathname);

  useEffect(() => {
    setMobileOpen(false);
    setActiveMenu(null);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);
      if (!isMainPage && currentY > 150 && currentY > lastScrollY.current) {
        setNavHidden(true);
      } else {
        setNavHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMainPage]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (megaMenuData[label]) {
      setActiveMenu(label);
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 200);
  };

  const handleMegaEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          navHidden && !activeMenu ? "-translate-y-full" : "translate-y-0"
        } ${
          scrolled
            ? "bg-white shadow-lg shadow-gray-200/50 border-b border-gray-200"
            : "bg-white border-b border-gray-100"
        }`}
        onMouseLeave={handleMouseLeave}
      >
        <div className="container mx-auto flex items-center justify-between h-[72px] px-4 lg:px-8">
          <a href="/" className="flex-shrink-0 relative z-10">
            <img src={logo} alt="CAP360" className="h-10 w-auto" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0">
            {navItems.map((item) => (
              <button
                key={item.label}
                className={`relative px-5 py-6 text-lg font-medium transition-colors duration-200 flex items-center gap-1.5 ${
                  activeMenu === item.label
                    ? "text-gray-900"
                    : "text-black hover:text-gray-700"
                }`}
                onMouseEnter={() => handleMouseEnter(item.label)}
                onClick={() => {
                  if (item.hasDropdown) {
                    setActiveMenu(activeMenu === item.label ? null : item.label);
                  } else {
                    navigate(item.path);
                  }
                }}
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      activeMenu === item.label ? "rotate-180" : ""
                    }`}
                  />
                )}
                {activeMenu === item.label && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-5 right-5 h-[2px] bg-cap-orange"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <button className="p-2.5 text-gray-500 hover:text-gray-800 transition-colors rounded-full hover:bg-gray-100">
              <Search className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-1.5 px-3 py-2 text-sm text-gray-500 hover:text-gray-800 transition-colors rounded-full hover:bg-gray-100">
              <Globe className="w-4 h-4" />
              <span className="text-sm">Global (EN)</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-gray-700 p-2 relative z-10"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mega Menu */}
        <AnimatePresence>
          {activeMenu && megaMenuData[activeMenu] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="hidden lg:block overflow-hidden border-t border-gray-800"
              onMouseEnter={handleMegaEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="bg-black">
                <div className="container mx-auto px-4 lg:px-8 py-10">
                  <div className="grid grid-cols-3 gap-12">
                    {megaMenuData[activeMenu].map((col) => (
                      <div key={col.title}>
                        <h3 className="text-xs font-bold tracking-widest text-cap-orange uppercase mb-5">
                          {col.title}
                        </h3>
                        <ul className="space-y-3">
                          {col.links.map((link) => (
                            <li key={link.label}>
                              <button
                                onClick={() => {
                                  if (link.path) { navigate(link.path); setActiveMenu(null); }
                                }}
                                className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-all duration-200 text-left"
                              >
                                <span className="group-hover:translate-x-1 transition-transform duration-200">
                                  {link.label}
                                </span>
                                <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-cap-orange" />
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-10 pt-6 border-t border-gray-800">
                    <button
                      onClick={() => {
                        const item = navItems.find((n) => n.label === activeMenu);
                        if (item) { navigate(item.path); setActiveMenu(null); }
                      }}
                      className="cta-link text-sm text-cap-blue"
                    >
                      See all {activeMenu.toLowerCase()}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white overflow-y-auto pt-[72px]"
          >
            <div className="px-6 py-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                  className="border-b border-gray-200"
                >
                  <button
                    className="w-full flex items-center justify-between py-5 text-xl font-semibold text-gray-800"
                    onClick={() => {
                      if (item.hasDropdown) {
                        setMobileExpanded(mobileExpanded === item.label ? null : item.label);
                      } else {
                        navigate(item.path);
                        setMobileOpen(false);
                      }
                    }}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 text-gray-500 ${
                          mobileExpanded === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>
                  <AnimatePresence>
                    {item.hasDropdown && mobileExpanded === item.label && megaMenuData[item.label] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-5 space-y-6">
                          {megaMenuData[item.label].map((col) => (
                            <div key={col.title}>
                              <h4 className="text-xs font-bold tracking-widest text-cap-orange uppercase mb-3">
                                {col.title}
                              </h4>
                              <ul className="space-y-2.5 pl-2">
                                {col.links.map((link) => (
                                  <li key={link.label}>
                                    <button
                                      onClick={() => { if (link.path) { navigate(link.path); setMobileOpen(false); } }}
                                      className="text-sm text-gray-500 hover:text-gray-800 transition-colors text-left"
                                    >
                                      {link.label}
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 flex flex-col gap-4"
              >
                <button className="flex items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors">
                  <Search className="w-5 h-5" />
                  <span>Search</span>
                </button>
                <button className="flex items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors">
                  <Globe className="w-4 h-4" />
                  <span>Global (EN)</span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;