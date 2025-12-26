import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  const [pct, setPct] = useState(0);
  const phrases = ["AI/ML Pipelines.", "Full Stack Applications.", "RAG & LLM Systems."];
  const [typing, setTyping] = useState("");

  useEffect(() => {
    let start = null;
    function step(ts) {
      if (!start) start = ts;
      const t = (ts - start) / 900;
      const eased = Math.min(100, Math.round(100 * (1 - Math.pow(1 - t, 1.8))));
      setPct(eased);
      if (eased < 100) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, []);

  useEffect(() => {
    if (pct < 100) return;
    let idx = 0;
    let char = 0;

    const run = () => {
      const current = phrases[idx];
      if (char <= current.length) {
        setTyping(current.slice(0, char));
        char++;
        setTimeout(run, 40);
      } else {
        setTimeout(() => {
          const del = () => {
            if (char >= 0) {
              setTyping(current.slice(0, char));
              char--;
              setTimeout(del, 18);
            } else {
              idx = (idx + 1) % phrases.length;
              char = 0;
              run();
            }
          };
          del();
        }, 1200);
      }
    };
    run();
  }, [pct]);

  const goExp = () =>
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-[86vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background blobs */}
      <svg
        className="absolute -top-40 -left-40 opacity-30 w-[36rem] h-[36rem] pointer-events-none"
        viewBox="0 0 600 600"
      >
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0" stopColor="#00C2FF" stopOpacity="0.24" />
            <stop offset="1" stopColor="#7C3AED" stopOpacity="0.24" />
          </linearGradient>
        </defs>
        <g transform="translate(300,300)">
          <path
            d="M120,-160C155,-136,190,-100,198,-55C206,-11,187,40,158,84C129,129,88,165,41,186C-6,207,-59,212,-104,190C-149,168,-185,118,-194,64C-203,10,-185,-45,-152,-84C-119,-123,-71,-146,-24,-162C23,-178,46,-184,120,-160Z"
            fill="url(#g1)"
          />
        </g>
      </svg>

      <svg
        className="absolute -bottom-44 -right-40 opacity-28 w-[42rem] h-[42rem] pointer-events-none"
        viewBox="0 0 600 600"
      >
        <defs>
          <linearGradient id="g2" x1="0" x2="1">
            <stop offset="0" stopColor="#7C3AED" stopOpacity="0.18" />
            <stop offset="1" stopColor="#00C2FF" stopOpacity="0.18" />
          </linearGradient>
        </defs>
        <g transform="translate(300,300)">
          <path
            d="M120,-160C155,-136,190,-100,198,-55C206,-11,187,40,158,84C129,129,88,165,41,186C-6,207,-59,212,-104,190C-149,168,-185,118,-194,64C-203,10,-185,-45,-152,-84C-119,-123,-71,-146,-24,-162C23,-178,46,-184,120,-160Z"
            fill="url(#g2)"
          />
        </g>
      </svg>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-28 text-center">
        <div className="inline-flex items-center gap-3 mb-6 justify-center">
          <div className="w-3 h-3 rounded-full bg-[var(--primary)] animate-pulse" />
          <div className="text-xs font-mono text-slate-300 glass-card px-3 py-1 rounded-full">
            {pct < 100
              ? `Loading your experience… ${String(pct).padStart(3, "0")}%`
              : "Experience ready"}
          </div>
        </div>

        <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
          <span className="block">I build secure, reliable</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] block">
            AI and ML systems.
          </span>
        </h1>

        <div className="h-9 md:h-12">
          <div className="text-lg sm:text-xl text-slate-300">
            {typing || "\u00a0"}
          </div>
        </div>

        <p className="max-w-2xl mx-auto mt-4 text-sm md:text-base text-slate-300">
          Hi, I'm{" "}
          <span className="font-semibold text-slate-100">
            Naga Parthiv Varma Varati
          </span>
          , a Computer Science Graduate.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={goExp}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] px-5 py-2.5 text-sm font-medium text-slate-900 shadow-soft-glow hover:-translate-y-0.5 transition"
          >
            View Experience <ArrowRight className="h-4 w-4" />
          </button>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1-K6FjHw7A5NLbdF1XXcCBdtCKZ0Heb0W/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-card px-4 py-2 text-sm font-medium text-slate-100 hover:border-primary hover:text-primary transition"
          >
            <Download className="h-4 w-4 animate-bounce" />
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}


