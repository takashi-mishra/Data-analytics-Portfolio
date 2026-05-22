// Certifications Section — animated cards with hover overlay
import { motion } from "motion/react";
import { Award, ExternalLink } from "lucide-react";
import certPython from "../assets/images/cert-python.jpg";
import certDsml from "../assets/images/cert-dsml.jpg";

const certs = [
  {
    title: "Python Certification",
    issuer: "Verified Program",
    img: certPython,
  },
  {
    title: "Data Science & Machine Learning",
    issuer: "Ducat, Noida Sector 63",
    img: certDsml,
  },
];

export default function Certifications() {
  return (
    <section id="certs" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Credentials</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Formal recognition of skills earned through hands-on programs.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {certs.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl glass hover:border-primary/50 transition-all"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  width={1024}
                  height={720}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <motion.div
                  initial={false}
                  className="absolute inset-0 grid place-items-center bg-card/70 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground font-semibold">
                    <ExternalLink className="w-4 h-4" /> View Certificate
                  </button>
                </motion.div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-primary font-semibold">
                  <Award className="w-4 h-4" /> Certified
                </div>
                <h3 className="mt-2 text-xl font-bold">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.issuer}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
