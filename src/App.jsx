import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Lenis from "lenis";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Github,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Sun,
  X
} from "lucide-react";

const EMAIL = "parthivvarati@gmail.com";
const RESUME = "https://drive.google.com/file/d/1N8_VzH1kNRCk4k6jAwDQTbfrVsSsgIVp/view?usp=sharing";

const projects = [
  {
    number: "01",
    title: "Emotional Companion",
    subtitle: "An AI that knows when to help—and when to listen.",
    description:
      "A two-personality companion built around emotional context. Tom helps untangle the problem; Jerry makes space for the feeling. The product explores memory, tone, and the small decisions that make an AI feel less mechanical.",
    tags: ["LangChain", "Gemini 2.5", "React", "Python"],
    link: "https://myfeelingsbuddy.netlify.app/",
    cta: "Meet the companion",
    visual: "companion"
  },
  {
    number: "02",
    title: "Electricity Forecast",
    subtitle: "Turning noisy demand signals into a clearer next move.",
    description:
      "An end-to-end forecasting study on Victoria's energy data: deep EDA, careful feature preparation, four model families, and K-fold evaluation—wrapped in an API and interface instead of left inside a notebook.",
    tags: ["Machine Learning", "Flask API", "React", "CatBoost"],
    link: "https://github.com/ParthivVarati/Electricity-Forecast",
    cta: "View the repository",
    visual: "forecast"
  },
  {
    number: "03",
    title: "SnapTrip",
    subtitle: "Search a place with a memory, not a keyword.",
    description:
      "A visual travel discovery tool using OpenCV, NumPy, and Chi-Squared image matching. Secure uploads and instant validation turn computer-vision work into an experience people can actually use.",
    tags: ["OpenCV", "Flask", "NumPy", "JavaScript"],
    link: "https://github.com/ParthivVarati/SNAPTRIP",
    cta: "Explore the build",
    visual: "snap"
  },
  {
    number: "04",
    title: "Freelancer",
    subtitle: "A practical marketplace for work and opportunity.",
    description:
      "A responsive platform where clients post work and professionals find, apply for, and manage opportunities. Designed as a complete system across authentication, data, APIs, and interface states.",
    tags: ["React", "Flask API", "SQL", "Python"],
    link: "https://github.com/ParthivVarati/FREELANCER",
    cta: "View the platform",
    visual: "network"
  }
];

const story = [
  {
    number: "01",
    label: "THE SCREEN",
    title: "First, I wanted to know what was behind it.",
    copy:
      "Computer science gave me the usual building blocks—programming, databases, algorithms, machine learning, and software development. I thought I was collecting technologies. Really, I was collecting better questions."
  },
  {
    number: "02",
    label: "THE MODEL",
    title: "Building it made the black box more interesting.",
    copy:
      "Machine-learning projects pulled me underneath the output. Computer vision made me wonder how machines form a view of the world. Every answer exposed another layer worth understanding."
  },
  {
    number: "03",
    label: "THE SYSTEM",
    title: "A clever model is only the beginning.",
    copy:
      "Backend work changed the question from ‘does it work?’ to ‘will it keep working?’ APIs, databases, queues, containers, latency, cost, and reliability became part of the same design problem."
  },
  {
    number: "04",
    label: "THE QUESTION",
    title: "Then AI started to remember, retrieve, and act.",
    copy:
      "RAG, vector databases, memory, agents, and voice AI made the questions far more alive: Can an AI know what it needs? Use the right tool? Speak naturally? And can all of that survive the real world?"
  }
];

const experience = [
  {
    period: "SEP 2025 — NOW",
    role: "AI Engineer",
    company: "Nimoy AI",
    location: "Remote",
    summary:
      "Building agentic and vision systems, from long-term memory and multi-API orchestration to the infrastructure that keeps them moving.",
    impact: ["30% better multi-turn context", "1K+ emails processed / day", "YOLO + SAM vision workflows"]
  },
  {
    period: "JUN — JUL 2024",
    role: "AI / Data Intern",
    company: "Exponential AI",
    location: "Hyderabad",
    summary:
      "Worked close to the data: testing software, annotating datasets, validating output, and tracing bugs through an Agile product cycle.",
    impact: ["Data quality", "Output validation", "Product testing"]
  }
];

const stack = [
  ["THINK", "Python · SQL · Machine Learning · PyTorch"],
  ["RETRIEVE", "RAG · LangChain · LangGraph · Vector search"],
  ["PERCEIVE", "OpenCV · YOLOv8/11n · SAM 2"],
  ["ORCHESTRATE", "Agents · Letta memory · RabbitMQ · Celery"],
  ["SHIP", "Flask · REST APIs · React · Docker · Git"],
  ["STORE", "MongoDB · MySQL · Structured data"]
];

const ease = [0.22, 1, 0.36, 1];

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (!element) return;
  if (window.__portfolioLenis) window.__portfolioLenis.scrollTo(element, { offset: -18 });
  else element.scrollIntoView({ behavior: "smooth" });
}

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function Navigation({ dark, onTheme }) {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => setTime(new Intl.DateTimeFormat("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Kolkata"
    }).format(new Date()));
    update();
    const interval = setInterval(update, 30000);
    return () => clearInterval(interval);
  }, []);

  const go = (id) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <header className="site-nav-wrap">
      <nav className="site-nav" aria-label="Main navigation">
        <button className="wordmark" onClick={() => go("home")} aria-label="Go to home">
          <span className="wordmark-dot" />
          <span>NP.V</span>
        </button>

        <div className={`nav-links ${open ? "is-open" : ""}`}>
          <button onClick={() => go("story")}>Story</button>
          <button onClick={() => go("work")}>Work</button>
          <button onClick={() => go("experience")}>Experience</button>
          <button onClick={() => go("contact")}>Contact</button>
        </div>

        <div className="nav-utility">
          <span className="nav-time"><i /> IND {time}</span>
          <button className="theme-toggle" onClick={onTheme} aria-label="Toggle color theme">
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
    </header>
  );
}

function CuriosityEngine() {
  const card = useRef(null);

  const move = (event) => {
    const rect = card.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.current.style.setProperty("--engine-x", `${x * 13}deg`);
    card.current.style.setProperty("--engine-y", `${y * -13}deg`);
    card.current.style.setProperty("--pointer-x", `${(x + 0.5) * 100}%`);
    card.current.style.setProperty("--pointer-y", `${(y + 0.5) * 100}%`);
  };

  const reset = () => {
    card.current?.style.setProperty("--engine-x", "0deg");
    card.current?.style.setProperty("--engine-y", "0deg");
  };

  return (
    <motion.div
      ref={card}
      className="engine-card"
      onPointerMove={move}
      onPointerLeave={reset}
      initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
      animate={{ opacity: 1, scale: 1, rotate: -1 }}
      transition={{ duration: 1, delay: 0.5, ease }}
    >
      <div className="engine-topline">
        <span>LIVE / CURIOSITY MAP</span>
        <span className="engine-signal"><i /> LISTENING</span>
      </div>
      <div className="engine-scene">
        <span className="float-chip chip-memory">MEMORY</span>
        <span className="float-chip chip-vision">VISION</span>
        <span className="float-chip chip-rag">RAG</span>
        <span className="float-chip chip-voice">VOICE</span>
        <div className="orbit orbit-one"><i /></div>
        <div className="orbit orbit-two"><i /></div>
        <div className="orbit orbit-three" />
        <div className="engine-core">
          <span>WHY?</span>
          <small>THE FIRST INPUT</small>
        </div>
      </div>
      <div className="engine-bottomline">
        <span>QUESTION → MODEL → SYSTEM</span>
        <span>17° 23′ N / 78° 29′ E</span>
      </div>
    </motion.div>
  );
}

function Hero() {
  const words = ["Somewhere", "between code", "& curiosity."];
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-grid">
        <div className="hero-copy">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            NAGA PARTHIV · AI ENGINEER
          </motion.p>
          <h1 className="hero-title">
            {words.map((word, index) => (
              <motion.span
                key={word}
                className={index === 2 ? "hero-serif" : ""}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.95, delay: 0.15 + index * 0.11, ease }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p
            className="hero-intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.65, ease }}
          >
            I build AI systems that can retrieve, reason, remember, and act—then do the
            engineering work that makes them dependable in the real world.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.78, ease }}
          >
            <button className="button button-primary" onClick={() => scrollToSection("work")}>
              Explore the work <ArrowDown size={17} />
            </button>
            <a className="text-link" href={RESUME} target="_blank" rel="noreferrer">
              Résumé <ArrowUpRight size={15} />
            </a>
          </motion.div>
        </div>
        <div className="hero-visual"><CuriosityEngine /></div>
      </div>

      <div className="hero-footer">
        <span><i className="status-dot" /> OPEN TO INTERESTING PROBLEMS</span>
        <span className="hero-scroll">SCROLL TO FOLLOW THE QUESTIONS <ArrowDown size={13} /></span>
      </div>
    </section>
  );
}

function QuestionMarquee() {
  const items = ["RETRIEVE", "REMEMBER", "REASON", "SEE", "ACT", "SPEAK"];
  return (
    <div className="question-marquee" aria-label="AI capabilities">
      <div className="marquee-track">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`}><i>CAN IT</i> {item}<b>?</b></span>
        ))}
      </div>
    </div>
  );
}

function Story() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.8"] });
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });

  return (
    <section id="story" ref={ref} className="story section-shell">
      <div className="section-kicker">
        <span>01 / ORIGIN STORY</span>
        <span>THE LONG ANSWER</span>
      </div>
      <div className="story-layout">
        <div className="story-intro">
          <Reveal>
            <h2>I thought I was learning <em>technology.</em></h2>
            <p>Turns out, I was learning how to keep asking better questions.</p>
          </Reveal>
          <div className="story-sticky-note">
            <span>MY CURRENT THEORY</span>
            <strong>Intelligence becomes useful only when engineering gives it somewhere real to live.</strong>
          </div>
        </div>
        <div className="story-rail">
          <div className="story-line"><motion.div style={{ scaleY: progress }} /></div>
          {story.map((chapter) => (
            <Reveal className="story-chapter" key={chapter.number}>
              <div className="story-number">{chapter.number}</div>
              <div>
                <span className="chapter-label">{chapter.label}</span>
                <h3>{chapter.title}</h3>
                <p>{chapter.copy}</p>
              </div>
            </Reveal>
          ))}
          <Reveal className="question-cluster">
            <span>CAN AN AI REMEMBER?</span>
            <span>CAN IT CHOOSE A TOOL?</span>
            <span>CAN IT SPEAK NATURALLY?</span>
            <span>CAN WE TRUST IT AT SCALE?</span>
          </Reveal>
        </div>
      </div>
      <Reveal className="story-ending">
        <p>Today, I work where AI meets software engineering.</p>
        <h2>For now, I’m following the questions.</h2>
        <span>AND SEEING WHERE THEY TAKE ME NEXT ↘</span>
      </Reveal>
    </section>
  );
}

function ProjectVisual({ type }) {
  if (type === "companion") {
    return (
      <div className="project-visual visual-companion">
        <div className="soft-orb orb-a" /><div className="soft-orb orb-b" />
        <div className="chat chat-a"><b>Tom</b><span>Let’s work through it.</span></div>
        <div className="chat chat-b"><b>Jerry</b><span>I’m here. Take your time.</span></div>
        <div className="visual-caption">MODE / EMPATHY + ACTION</div>
      </div>
    );
  }
  if (type === "forecast") {
    return (
      <div className="project-visual visual-forecast">
        <div className="forecast-top"><span>VICTORIA / DEMAND</span><strong>+12.8%</strong></div>
        <svg viewBox="0 0 700 300" preserveAspectRatio="none" aria-hidden="true">
          <defs><linearGradient id="area" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#caff45" stopOpacity=".45"/><stop offset="1" stopColor="#caff45" stopOpacity="0"/></linearGradient></defs>
          <path className="forecast-area" d="M0,255 C45,210 70,240 105,190 C155,120 185,210 235,162 C280,115 330,150 370,95 C412,42 450,162 500,112 C555,56 610,102 700,36 L700,300 L0,300 Z" />
          <path className="forecast-line" pathLength="1" d="M0,255 C45,210 70,240 105,190 C155,120 185,210 235,162 C280,115 330,150 370,95 C412,42 450,162 500,112 C555,56 610,102 700,36" />
        </svg>
        <div className="forecast-axis"><span>00:00</span><span>08:00</span><span>16:00</span><span>24:00</span></div>
      </div>
    );
  }
  if (type === "snap") {
    return (
      <div className="project-visual visual-snap">
        <div className="snap-frame snap-main">
          <div className="sun" /><div className="mountain mountain-one"/><div className="mountain mountain-two"/>
          <div className="scan-reticle"><i/><i/><i/><i/></div>
        </div>
        <div className="snap-result"><span>VISUAL MATCH</span><strong>94.2%</strong><small>LOCATION FOUND</small></div>
        <div className="visual-caption">SEARCH / WITHOUT WORDS</div>
      </div>
    );
  }
  return (
    <div className="project-visual visual-network">
      <div className="network-card card-client"><span>CLIENT</span><strong>Build an AI search tool</strong><small>POSTED 2M AGO</small></div>
      <div className="network-card card-match"><span>BEST MATCH</span><strong>84%</strong><small>FULL-STACK / AI</small></div>
      <svg viewBox="0 0 700 330" aria-hidden="true">
        <path d="M190 210 C300 80 420 250 535 125"/><path d="M190 210 C350 330 480 230 535 125"/>
        <circle cx="190" cy="210" r="8"/><circle cx="535" cy="125" r="8"/>
      </svg>
      <div className="visual-caption">OPPORTUNITY / CONNECTED</div>
    </div>
  );
}

function ProjectCard({ project }) {
  const ref = useRef(null);
  const tilt = (event) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    ref.current.style.setProperty("--card-rx", `${y * -2.5}deg`);
    ref.current.style.setProperty("--card-ry", `${x * 3.5}deg`);
  };
  const reset = () => {
    ref.current?.style.setProperty("--card-rx", "0deg");
    ref.current?.style.setProperty("--card-ry", "0deg");
  };

  return (
    <motion.article
      ref={ref}
      className={`project-card project-${project.visual}`}
      onPointerMove={tilt}
      onPointerLeave={reset}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease }}
    >
      <div className="project-info">
        <div className="project-meta"><span>{project.number}</span><span>SELECTED PROJECT</span></div>
        <div>
          <h3>{project.title}</h3>
          <h4>{project.subtitle}</h4>
          <p>{project.description}</p>
        </div>
        <div>
          <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
            {project.cta} <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
      <ProjectVisual type={project.visual} />
    </motion.article>
  );
}

function Work() {
  return (
    <section id="work" className="work section-shell">
      <div className="section-kicker"><span>02 / SELECTED WORK</span><span>BUILT TO LEAVE THE NOTEBOOK</span></div>
      <Reveal className="work-heading">
        <h2>Ideas are easy.<br/><em>Making them hold up</em> is the work.</h2>
        <p>Four projects across agents, machine learning, computer vision, and product engineering.</p>
      </Reveal>
      <div className="project-list">{projects.map((project) => <ProjectCard key={project.title} project={project} />)}</div>
      <a className="all-work-link" href="https://github.com/ParthivVarati" target="_blank" rel="noreferrer">
        <Github size={19} /> MORE EXPERIMENTS ON GITHUB <ArrowUpRight size={17} />
      </a>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="section-shell">
        <div className="section-kicker section-kicker-invert"><span>03 / EXPERIENCE</span><span>WHERE THE QUESTIONS GOT PRACTICAL</span></div>
        <Reveal className="experience-heading">
          <p>CURRENTLY</p>
          <h2>Turning intelligence into<br/><em>infrastructure.</em></h2>
        </Reveal>
        <div className="experience-list">
          {experience.map((item, index) => (
            <Reveal className="experience-row" key={item.company} delay={index * 0.08}>
              <div className="experience-index">0{index + 1}</div>
              <div className="experience-title">
                <span>{item.period}</span>
                <h3>{item.role}</h3>
                <p>{item.company} · {item.location}</p>
              </div>
              <div className="experience-detail">
                <p>{item.summary}</p>
                <div>{item.impact.map((point) => <span key={point}>{point}</span>)}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="stack section-shell">
      <div className="section-kicker"><span>04 / UNDER THE HOOD</span><span>THE LESS GLAMOROUS, VERY NECESSARY BITS</span></div>
      <div className="stack-layout">
        <Reveal className="stack-heading">
          <h2>The model is<br/>maybe <em>20%.</em></h2>
          <p>The rest is retrieval, orchestration, interfaces, monitoring, edge cases, and making sure it works again tomorrow.</p>
        </Reveal>
        <div className="stack-list">
          {stack.map(([label, tools], index) => (
            <Reveal className="stack-row" key={label} delay={(index % 3) * 0.04}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{label}</strong>
              <p>{tools}</p>
              <i>↗</i>
            </Reveal>
          ))}
        </div>
      </div>
      <Reveal className="education-note">
        <div><span>FOUNDATION</span><strong>B.Tech, Computer Science</strong><small>GITAM University · 2021—2025</small></div>
        <b>8.57</b>
        <p>CGPA / 10</p>
      </Reveal>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-noise" />
      <div className="section-shell contact-inner">
        <Reveal>
          <span className="contact-kicker">NEXT QUESTION / YOURS</span>
          <h2>What should we<br/><em>build next?</em></h2>
          <p>AI products, agentic systems, vision experiments, or a hard engineering problem that refuses to be boring.</p>
        </Reveal>
        <div className="contact-actions">
          <button className="email-button" onClick={copy}>
            <span>{copied ? "COPIED" : EMAIL}</span>
            {copied ? <Check size={24} /> : <Mail size={24} />}
          </button>
          <div className="social-links">
            <a href="https://github.com/ParthivVarati" target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={14}/></a>
            <a href="https://www.linkedin.com/in/naga-parthiv/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={14}/></a>
            <a href={RESUME} target="_blank" rel="noreferrer">Résumé <ArrowUpRight size={14}/></a>
          </div>
        </div>
        <footer>
          <span>NAGA PARTHIV VARMA VARATI © {new Date().getFullYear()}</span>
          <button onClick={() => scrollToSection("home")}>BACK TO THE FIRST QUESTION ↑</button>
        </footer>
      </div>
    </section>
  );
}

export default function App() {
  const [dark, setDark] = useState(false);
  const { scrollYProgress } = useScroll();
  const pageProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const saved = localStorage.getItem("parthiv-theme");
    if (saved === "dark") setDark(true);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("parthiv-theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
    let frame;
    const loop = (time) => { lenis.raf(time); frame = requestAnimationFrame(loop); };
    frame = requestAnimationFrame(loop);
    window.__portfolioLenis = lenis;
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      window.__portfolioLenis = null;
    };
  }, []);

  useEffect(() => {
    const move = (event) => {
      document.documentElement.style.setProperty("--mouse-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <div className="site">
      <motion.div className="page-progress" style={{ scaleX: pageProgress }} />
      <div className="cursor-light" />
      <Navigation dark={dark} onTheme={() => setDark(!dark)} />
      <main>
        <Hero />
        <QuestionMarquee />
        <Story />
        <Work />
        <Experience />
        <Stack />
        <Contact />
      </main>
    </div>
  );
}
