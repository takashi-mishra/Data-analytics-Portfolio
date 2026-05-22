// Contact Section — CTAs + animated contact form
import { motion } from "motion/react";
import { Mail, Phone, Send } from "lucide-react";
import { FaWhatsapp, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { toast } from "sonner";

export default function Contact() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thanks! I'll get back to you within 24 hours.");
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-primary/15 blur-3xl animate-blob" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-blob [animation-delay:-6s]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Contact</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">
            Let's <span className="gradient-text">get connected</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Open to roles, collaborations, training programs, and freelance projects.
          </p>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-[1fr_1.2fr] gap-6">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {[
              {
                Icon: Mail,
                label: "Email",
                value: "tanishprajapati1145@gmail.com",
                href: "mailto:tanishprajapati1145@gmail.com",
              },
              {
                Icon: FaWhatsapp,
                label: "WhatsApp",
                value: "+91 89369 23475",
                href: "https://wa.me/918936923475",
              },
              {
                Icon: Phone,
                label: "Mobile",
                value: "+91 89369 23475",
                href: "tel:+918936923475",
              },
            ].map(({ Icon, label, value, href }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ y: -3 }}
                className="flex items-center gap-4 glass rounded-2xl p-5 hover:border-primary/50 transition-colors"
              >
                <span className="w-12 h-12 grid place-items-center rounded-xl bg-[image:var(--gradient-primary)] glow-cyan">
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
                  <div className="font-semibold">{value}</div>
                </div>
              </motion.a>
            ))}

            <div className="glass rounded-2xl p-5">
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Follow</div>
              <div className="flex gap-3">
                {[FaGithub, FaLinkedin, FaTwitter, FaWhatsapp].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ y: -3, scale: 1.1 }}
                    className="w-11 h-11 grid place-items-center rounded-xl glass hover:text-primary hover:border-primary/50 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-6 sm:p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Your Name" name="name" placeholder="Jane Doe" />
              <Field label="Email" name="email" type="email" placeholder="jane@company.com" />
            </div>
            <Field label="Subject" name="subject" placeholder="Let's work together" />
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Message
              </label>
              <textarea
                required
                rows={5}
                name="message"
                placeholder="Tell me about your project or role…"
                className="w-full px-4 py-3 rounded-xl bg-input/40 border border-border focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all resize-none"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground font-semibold glow-cyan"
            >
              <Send className="w-4 h-4" /> Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
        {label}
      </label>
      <input
        required
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl bg-input/40 border border-border focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all"
      />
    </div>
  );
}
