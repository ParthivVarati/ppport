import { motion } from "framer-motion";
import { education } from "../data/education";

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <header className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Education
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Formal learning that shaped how I think about systems.
          </p>
        </header>

        <div className="grid gap-4">
          {education.map((ed, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.15 }}
              className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 shadow-md shadow-slate-950/70"
            >
              <h3 className="text-sm md:text-base font-semibold text-slate-50">
                {ed.institute}
              </h3>
              <p className="text-xs md:text-sm text-slate-300">{ed.degree}</p>
              <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                <span>{ed.period}</span>
                <span className="font-mono">{ed.score}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
