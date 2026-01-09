import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, MapPin, ChevronRight } from "lucide-react";

const experiences = [
  {
    id: 0,
    company: "Nimoy AI",
    role: " AI Intern",
    location: "Remote",
    duration: "Sep 2025 – Present",
    status: "Current",
    accent: "blue",
    points: [
      {
        text: "Enhanced AI document agent Letta memory, improving multi-turn context handling by ",
        highlight: "30%",
      },
      {
        text: "Designed async email pipelines with RabbitMQ & Celery, processing ",
        highlight: "1k+ emails/day",
        
      },
      {
        text: "Developed AI & vision solutions, including multi-API agents and PPE detection models (YOLOv8/11n + SAM 2).",
      },
    ],
    skills: ["Python", "REST APIs", "LangChain", "LangGraph", "RAG", "Letta", "RabbitMQ", "Celery", "YOLOv8", "YOLO11n", "SAM 2", "PyTorch", "OpenCV", "React", "Tailwind CSS", "Docker", "Git"
],
  },
  {
    id: 1,
    company: "Exponential AI",
    role: "Intern",
    location: "Hyderabad, India",
    duration: "Jun 2024 – Jul 2024",
    status: "Completed",
    accent: "purple",
    points: [
      {
        text: "Ensured data quality through software testing, dataset annotation, and output validation.",
      },
      {
        text: "Identified and reported bugs, collaborating with developers to resolve issues efficiently. ",
      
      },
      {
        text: "Worked within SDLC and Agile sprints, contributing to iterative development cycles.",
      },
    ],
    skills: ["Manual Testing", "Data Annotation", "Bug Tracking", "SDLC", "Agile", "Git"],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);
  const data = experiences[active];

  const accent =
    data.accent === "blue"
      ? {
          text: "text-blue-400",
          border: "border-blue-400",
          glow: "shadow-[0_0_30px_rgba(59,130,246,0.35)]",
          line: "from-blue-500 to-purple-500",
        }
      : {
          text: "text-purple-400",
          border: "border-purple-400",
          glow: "shadow-[0_0_30px_rgba(168,85,247,0.35)]",
          line: "from-purple-500 to-pink-500",
        };

  return (
    <section
      id="experience"
      className="relative w-full py-[120px]"
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-16 flex items-center gap-6">
          <span className="text-sm font-mono text-blue-400">01.</span>
          <h2 className="text-3xl font-bold text-white">Experience</h2>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 lg:gap-16">
          {/* Sidebar / Tabs */}
          <div className="relative lg:pl-8">
            {/* Timeline (desktop only) */}
            <div
              className={`hidden lg:block absolute left-[4px] top-0 h-full w-px bg-gradient-to-b ${accent.line}`}
            />

            <div className="flex gap-3 overflow-x-auto lg:flex-col lg:space-y-4 pb-2">
              {experiences.map((exp, idx) => (
                <button
                  key={exp.id}
                  onClick={() => setActive(idx)}
                  className={`relative min-w-[180px] lg:w-full rounded-xl px-4 py-3 text-left transition-all duration-300 ${
                    active === idx
                      ? "bg-[#0b1220]/70 backdrop-blur border border-white/10"
                      : "text-white/40 hover:text-white/70"
                  }`}
                >
                  {active === idx && (
                    <span className="hidden lg:block absolute left-0 top-0 h-full w-[3px] rounded-full bg-blue-400" />
                  )}
                  <span className="block text-sm font-medium">
                    {exp.company}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Main content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={data.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="rounded-2xl border border-white/10 bg-[#0b1220]/70 p-6 sm:p-8 lg:p-10 backdrop-blur"
            >
              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {data.role}{" "}
                <span className={accent.text}>@ {data.company}</span>
              </h3>

              {/* Meta */}
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap gap-4 text-sm text-white/60">
                  <span className="flex items-center gap-2">
                    <CalendarDays size={16} />
                    {data.duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={16} />
                    {data.location}
                  </span>
                </div>

                <span
                  className={`w-fit rounded-full px-4 py-1 text-xs font-medium ${
                    data.status === "Current"
                      ? "border border-emerald-400 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.35)]"
                      : "border border-white/20 text-white/50"
                  }`}
                >
                  {data.status}
                </span>
              </div>

              {/* Bullet points */}
              <ul className="mt-8 space-y-4 text-white/80">
                {data.points.map((p, i) => (
                  <li key={i} className="flex gap-3">
                    <ChevronRight
                      size={18}
                      className={`mt-[2px] ${accent.text}`}
                    />
                    <span>
                      {p.text}
                      {p.highlight && (
                        <span className="ml-1 font-semibold text-emerald-400">
                          {p.highlight}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Skills */}
              <div className="mt-8 flex flex-wrap gap-3">
                {data.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-full border px-4 py-1 text-xs backdrop-blur ${accent.border} ${accent.text} ${accent.glow}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

