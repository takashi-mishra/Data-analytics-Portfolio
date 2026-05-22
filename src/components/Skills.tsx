// Skills Section — animated technical bars + soft-skill chips
import { motion } from "motion/react";
import {
  SiPython, SiPandas, SiNumpy, SiTableau, SiJupyter, SiGooglesheets,
} from "react-icons/si";
import { Database, FileSpreadsheet, BarChart3, Brain, Sigma, Search } from "lucide-react";

const technical = [
  { name: "Python", level: 90, Icon: SiPython, color: "#3776AB" },
  { name: "SQL", level: 88, Icon: Database, color: "#22d3ee" },
  { name: "Advanced Excel", level: 92, Icon: FileSpreadsheet, color: "#22c55e" },
  { name: "Power BI", level: 85, Icon: BarChart3, color: "#F2C811" },
  { name: "Tableau", level: 80, Icon: SiTableau, color: "#E97627" },
  { name: "Pandas", level: 88, Icon: SiPandas, color: "#a78bfa" },
  { name: "NumPy", level: 82, Icon: SiNumpy, color: "#4D77CF" },
  { name: "Statistics", level: 80, Icon: Sigma, color: "#22d3ee" },
  { name: "Machine Learning", level: 70, Icon: Brain, color: "#a78bfa" },
  { name: "Jupyter", level: 88, Icon: SiJupyter, color: "#F37626" },
  { name: "Google Sheets", level: 90, Icon: SiGooglesheets, color: "#34A853" },
  { name: "Lusha", level: 75, Icon: Search, color: "#22d3ee" },
];

const soft = [
  "Teamwork", "Problem Solving", "Communication", "Analytical Thinking",
  "Technical Training", "Presentation Skills",
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Toolkit</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            The stack I reach for when turning data into decisions.
          </p>
        </motion.div>

        {/* Technical skill cards */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {technical.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ y: -4 }}
              className="group glass rounded-2xl p-5 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className="w-10 h-10 grid place-items-center rounded-xl"
                    style={{ background: `${s.color}22`, color: s.color }}
                  >
                    <s.Icon className="w-5 h-5" />
                  </span>
                  <span className="font-semibold">{s.name}</span>
                </div>
                <span className="text-sm text-muted-foreground tabular-nums">{s.level}%</span>
              </div>
              <div className="mt-4 h-2 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.1 + i * 0.04, ease: "easeOut" }}
                  className="h-full rounded-full bg-[image:var(--gradient-primary)] group-hover:shadow-[0_0_20px_var(--color-primary)]"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14"
        >
          <h3 className="text-xl font-bold mb-5 text-center">
            Soft <span className="gradient-text">Skills</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {soft.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="px-5 py-2.5 rounded-full glass text-sm font-medium hover:border-accent/50 hover:text-accent transition-colors"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
