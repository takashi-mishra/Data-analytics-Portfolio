// Projects Section — animated project showcase with hover overlay
import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import sales from "../assets/images/project-sales.jpg";
import hr from "../assets/images/project-hr.jpg";
import brain from "../assets/images/project-brain.jpg";
import nasscom from "../assets/images/project-nasscom.jpg";

const projects = [
  {
    title: "Sales Dashboard Analytics",
    desc: "Interactive Power BI dashboard surfacing revenue trends, regional performance, and KPI alerts.",
    img: sales,
    tags: ["Power BI", "SQL", "DAX"],
  },
  {
    title: "HR Analytics Dashboard",
    desc: "End-to-end attrition analysis with predictive flags and an executive-ready visual layer.",
    img: hr,
    tags: ["Tableau", "Python", "Pandas"],
  },
  {
    title: "Brain Tumor Detection",
    desc: "ML pipeline for MRI classification using CNNs, with evaluation dashboards and reporting.",
    img: brain,
    tags: ["Python", "ML", "Deep Learning"],
  },
  {
    title: "Nasscom Training Projects",
    desc: "Curriculum and capstone work delivered to CETPA learners across Python, SQL & analytics.",
    img: nasscom,
    tags: ["Training", "Python", "SQL"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Work</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A selection of analytics and machine-learning work I've built and shipped.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl glass hover:border-primary/50 transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                {/* hover overlay with actions */}
                <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity bg-card/40 backdrop-blur-sm">
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground text-sm font-semibold"
                    >
                      <ExternalLink className="w-4 h-4" /> Live
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass-strong text-sm font-semibold"
                    >
                      <Github className="w-4 h-4" /> Code
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-[image:var(--gradient-soft)] border border-primary/20 text-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
