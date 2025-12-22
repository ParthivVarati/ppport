import { motion } from "framer-motion";
import { ExternalLink, Circle } from "lucide-react";
import { projects } from "../data/projects";

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.12 * i }
  })
};

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <header className="mb-10 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Featured Projects
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Things I built to learn, break, and rebuild better.
            </p>
          </div>
        </header>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-lg shadow-slate-950/70 backdrop-blur-xl transition hover:border-primary/60 hover:shadow-glow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-slate-900/40 to-accent/10 opacity-0 group-hover:opacity-100 transition" />
              <div className="relative flex flex-col h-full gap-3">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-base md:text-lg font-semibold text-slate-50">
                    {project.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-950/80 px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-300">
                    <Circle
                      className={`h-2 w-2 ${
                        project.status === "Online"
                          ? "text-emerald-400"
                          : "text-amber-400"
                      }`}
                      fill={
                        project.status === "Online"
                          ? "rgb(74 222 128)"
                          : "rgb(251 191 36)"
                      }
                    />
                    {project.status}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-slate-200">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-slate-700 bg-slate-900/80 px-2.5 py-1 text-[11px] text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex justify-end">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-[11px] font-medium text-slate-100 transition hover:border-primary hover:text-primary"
                  >
                    Visit
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
