// About Section — timeline of experience + education + animated stats
import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";
import { Briefcase, GraduationCap, Building2 } from "lucide-react";

const experience = [
  {
    icon: Briefcase,
    role: "Data Analyst",
    org: "AISECT LTD",
    period: "Present",
    desc: "Driving data initiatives, building dashboards, and delivering business insights.",
  },
  {
    icon: Building2,
    role: "Data Analyst Trainer",
    org: "CETPA Infotech, Noida",
    period: "Previously",
    desc: "Trained learners in Python, SQL, Power BI, and end-to-end analytics workflows.",
  },
  {
    icon: Building2,
    role: "Analyst",
    org: "JABRA Connect, Noida Sector 2",
    period: "Previously",
    desc: "Worked on operational analytics, reporting, and process improvement.",
  },
];

const education = [
  { icon: GraduationCap, degree: "MCA", school: "Dr. A.P.J Abdul Kalam Technical University, Lucknow" },
  { icon: GraduationCap, degree: "BCA", school: "Chaudhary Charan Singh University, Meerut" },
  { icon: GraduationCap, degree: "12th", school: "Muslim Inter College, Bulandshahr" },
];

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toString() + suffix);

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 1.6, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, mv]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 20, suffix: "+", label: "Projects Delivered" },
  { value: 150, suffix: "+", label: "Learners Trained" },
  { value: 12, suffix: "+", label: "Tools Mastered" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">About</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">
            A bit about <span className="gradient-text">my journey</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Two-plus years turning messy datasets into clear stories, sharp dashboards,
            and decisions teams can act on.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 text-center hover:border-primary/40 transition-colors"
            >
              <div className="text-4xl font-bold gradient-text font-display">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-10">
          {/* Experience timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 rounded-full bg-[image:var(--gradient-primary)]" />
              Experience
            </h3>
            <div className="relative pl-6 border-l border-border">
              {experience.map((e, i) => (
                <motion.div
                  key={e.org}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative mb-7 last:mb-0"
                >
                  <span className="absolute -left-[34px] top-1.5 w-4 h-4 rounded-full bg-[image:var(--gradient-primary)] glow-cyan" />
                  <div className="glass rounded-2xl p-5 hover:border-primary/40 transition-colors">
                    <div className="flex items-center gap-2 text-xs text-primary font-semibold">
                      <e.icon className="w-3.5 h-3.5" /> {e.period}
                    </div>
                    <div className="mt-1 font-semibold text-lg">{e.role}</div>
                    <div className="text-sm text-muted-foreground">{e.org}</div>
                    <p className="mt-2 text-sm text-muted-foreground/80">{e.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 rounded-full bg-[image:var(--gradient-primary)]" />
              Education
            </h3>
            <div className="relative pl-6 border-l border-border">
              {education.map((e, i) => (
                <motion.div
                  key={e.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative mb-7 last:mb-0"
                >
                  <span className="absolute -left-[34px] top-1.5 w-4 h-4 rounded-full bg-[image:var(--gradient-primary)] glow-violet" />
                  <div className="glass rounded-2xl p-5 hover:border-accent/40 transition-colors">
                    <div className="flex items-center gap-2 text-xs text-accent font-semibold">
                      <e.icon className="w-3.5 h-3.5" /> Degree
                    </div>
                    <div className="mt-1 font-semibold text-lg">{e.degree}</div>
                    <div className="text-sm text-muted-foreground">{e.school}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
