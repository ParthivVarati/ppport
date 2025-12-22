import { useState } from "react";
import { SkillsGlobe } from "./SkillsGlobe";
import { GlobeErrorBoundary } from "./GlobeErrorBoundary";

const tabs = [
  { id: "tech", label: "TECH SKILLS" },
  { id: "soft", label: "SOFT SKILLS" },
  { id: "creative", label: "CREATIVE SKILLS" }
];

const content = {
  tech: {
    Languages: ["Python", "TypeScript", "SQL"],
    Frontend: ["HTML5", "CSS3", "React", "Tailwind CSS"],
    Backend: ["Node.js", "Express", "REST APIs"],
    Database: ["MongoDB", "MySQL"],
    AIML : ["Machine Learning", "RAG", "LangChain", "LangGraph"],
    Tools : ["Docker", "Git"]
  },
  soft: {
    Strengths: ["Communication", "Leadership", "Problem Solving","Teamwork", "Adaptability"]
  },
  creative: {
    Creative: ["UI/UX Design", "Video Editing", "Photography"]
  }
};

export default function Skills() {
  const [active, setActive] = useState("tech");

  return (
    <section
      id="skills"
      className="relative py-[100px] sm:py-[120px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white mb-2">
            Skills & Stack
          </h2>
          <p className="text-white/60">
            Tools I reach for when shipping fast and clean.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-12 flex justify-center sm:justify-start">
          <div className="inline-flex rounded-full bg-white/5 p-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`whitespace-nowrap px-5 py-2 text-xs rounded-full transition ${
                  active === tab.id
                    ? "bg-white text-black"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* 🌍 Globe */}
          <div className="order-1 lg:order-none">
            <GlobeErrorBoundary>
              <SkillsGlobe category={active} />
            </GlobeErrorBoundary>
          </div>

          {/* 📋 Content */}
          <div className="order-2 lg:order-none space-y-6">
            {Object.entries(content[active]).map(([title, items]) => (
              <div
                key={title}
                className="rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <h4 className="mb-3 text-sm tracking-widest text-white/50">
                  {title.toUpperCase()}
                </h4>

                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
