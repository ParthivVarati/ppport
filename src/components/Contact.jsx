import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const EMAIL = "parthivvarati@gmail.com";

export default function Contact() {
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      alert("Email copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy email", err);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
          {/* Left section */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-3"
          >
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Let&apos;s build something together.
            </h2>
            <p className="text-sm text-slate-300">
              If you&apos;re working on something interesting—APIs, infra, or a
              product that needs a backend brain—I&apos;d love to talk. Short-term
              gigs, internships, or full-time roles are all welcome.
            </p>

            {/* Copy email button */}
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-medium text-slate-950 shadow-glow-sm hover:-translate-y-0.5 transition-transform"
            >
              <Mail className="h-4 w-4" />
              Copy Email
            </button>
          </motion.div>

          {/* Right section */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-md shadow-slate-950/70"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Connect
            </p>

            <div className="flex flex-wrap gap-3">
              {/* Copy email pill */}
              <button
                onClick={copyEmail}
                className="group inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1.5 text-xs text-slate-100 hover:border-primary hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                <span>Email</span>
              </button>

              <a
                href="https://github.com/ParthivVarati"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1.5 text-xs text-slate-100 hover:border-primary hover:text-primary"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/naga-parthiv/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1.5 text-xs text-slate-100 hover:border-primary hover:text-primary"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </div>

            <p className="text-[11px] text-slate-400">
              Usually quick to respond. Feel free to attach repos, designs, or a
              short brief.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
