import { motion } from "framer-motion";
import { certifications } from "../data/certifications";
import { Award } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <header className="mb-10 flex items-center gap-3">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Certifications & Achievements
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Proof that I like going deep, not just scrolling docs.
            </p>
          </div>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((cert, idx) => (
            <motion.article
              key={cert.name}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.12 }}
              className="group rounded-xl border border-slate-800 bg-slate-900/70 p-4 shadow-md shadow-slate-950/70 hover:border-primary/70 hover:shadow-glow-sm transition"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-slate-800/80 p-2 group-hover:bg-slate-800">
                  <Award className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-slate-50">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-slate-300">{cert.org}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-400">
                    {cert.year}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
