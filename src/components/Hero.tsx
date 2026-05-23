// Hero Section — animated intro, typing effect, CTA + portrait
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Mail, Download, Sparkles, TrendingUp, LayoutDashboard, GraduationCap, Briefcase } from "lucide-react";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import portrait from "../assets/images/hero-portrait.jpg";

const ROLES = ["Data Analyst", "Dashboard Creator", "Trainer & Mentor", "Insights Specialist"];

function useTyping(words: string[], speed = 80, pause = 1400) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!del) {
          setText(word.slice(0, text.length + 1));
          if (text.length + 1 === word.length) setTimeout(() => setDel(true), pause);
        } else {
          setText(word.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDel(false);
            setI((v) => v + 1);
          }
        }
      },
      del ? speed / 2 : speed,
    );
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);

  return text;
}

const highlights = [
  { icon: TrendingUp, label: "Data-driven decisions" },
  { icon: LayoutDashboard, label: "Dashboard creator" },
  { icon: GraduationCap, label: "Trainer & Mentor" },
  { icon: Briefcase, label: "Business insights" },
];

export default function Hero() {
  const typed = useTyping(ROLES);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* animated background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-primary/20 blur-3xl animate-blob" />
        <div className="absolute top-40 -right-20 w-[26rem] h-[26rem] rounded-full bg-accent/25 blur-3xl animate-blob [animation-delay:-4s]" />
        <div className="absolute bottom-0 left-1/3 w-[22rem] h-[22rem] rounded-full bg-primary/15 blur-3xl animate-blob [animation-delay:-8s]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-6 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center w-full">
        {/* Left — copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-muted-foreground"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Available for new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]"
          >
            Hi, I'm <span className="gradient-text">Tarun Kumar</span>
            <br />
            <span className="cursor-blink text-foreground/90">{typed}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl"
          >
            Turning raw numbers into clear, compelling stories. I build dashboards,
            run analyses, and train teams to make confident, data-backed decisions.
          </motion.p>

          {/* Highlights */}
          <motion.ul
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } } }}
            className="mt-7 flex flex-wrap gap-2"
          >
            {highlights.map((h) => (
              <motion.li
                key={h.label}
                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full glass text-xs font-medium"
              >
                <h.icon className="w-3.5 h-3.5 text-primary" />
                {h.label}
              </motion.li>
            ))}
          </motion.ul>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="mailto:tanishprajapati1145@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground font-semibold glow-cyan hover:scale-[1.03] transition-transform"
            >
              <Mail className="w-4 h-4" /> Email Me
            </a>
            <a
              href="https://wa.me/918936923475"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass font-semibold hover:border-primary/50 transition-colors"
            >
              <FaWhatsapp className="w-4 h-4 text-[#25D366]" /> WhatsApp
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border font-semibold hover:bg-muted transition-colors"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 flex items-center gap-4 text-muted-foreground"
          >
            {[
              { Icon: FaGithub, href: "https://github.com/Tanishprajapati" },
              { Icon: FaLinkedin, href: "https://www.linkedin.com/in/mr-tarunkumar" },
              { Icon: FaWhatsapp, href: "https://wa.me/918936923475" },
            ].map(({ Icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 grid place-items-center rounded-full glass hover:text-primary hover:scale-110 transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right — portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative justify-self-center lg:justify-self-end"
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-[image:var(--gradient-primary)] opacity-30 blur-2xl" />
          <div className="relative w-[280px] sm:w-[340px] lg:w-[400px] aspect-square animate-float">
            <div className="absolute inset-0 rounded-[2rem] gradient-border" />
            <img
              src={portrait}
              alt="Tarun Kumar — Data Analyst"
              width={400}
              height={400}
              className="relative w-full h-full object-cover rounded-[2rem] shadow-2xl"
            />
            {/* floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -left-6 top-10 glass-strong rounded-2xl px-4 py-3 shadow-xl"
            >
              <div className="text-xs text-muted-foreground">Experience</div>
              <div className="text-lg font-bold gradient-text">2+ Years</div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -right-4 bottom-12 glass-strong rounded-2xl px-4 py-3 shadow-xl"
            >
              <div className="text-xs text-muted-foreground">Projects</div>
              <div className="text-lg font-bold gradient-text">20+</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
