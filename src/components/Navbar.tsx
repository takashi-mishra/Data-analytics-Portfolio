// Navbar — sticky glass nav with active section highlight + mobile menu
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, BarChart3 } from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "certs", label: "Certifications" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      // active section detection
      let current = "home";
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= 120) current = l.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`mx-auto max-w-6xl px-5 sm:px-6 flex items-center justify-between rounded-2xl transition-all ${
          scrolled ? "glass-strong py-3" : "bg-transparent py-2"
        }`}
      >
        <button onClick={() => go("home")} className="flex items-center gap-2 group">
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-[image:var(--gradient-primary)] glow-cyan">
            <BarChart3 className="w-5 h-5 text-primary-foreground" />
          </span>
          <span className="font-display font-bold text-lg">
            Tarun<span className="gradient-text">.</span>
          </span>
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  active === l.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
                {active === l.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg bg-[image:var(--gradient-soft)] border border-primary/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => go("contact")}
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold bg-[image:var(--gradient-primary)] text-primary-foreground hover:scale-105 transition-transform"
        >
          Hire Me
        </button>

        <button
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-lg glass"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-5 mt-2 rounded-2xl glass-strong p-3"
          >
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium ${
                  active === l.id
                    ? "bg-[image:var(--gradient-soft)] text-foreground"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                {l.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
