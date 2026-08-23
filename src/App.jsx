import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, LayoutGroup, motion, useScroll, useSpring } from "framer-motion";
import Lenis from "lenis";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Github,
  Linkedin,
  Mail,
  Menu,
  Shuffle,
  X,
} from "lucide-react";

const links = {
  github: "https://github.com/ParthivVarati",
  linkedin: "https://www.linkedin.com/in/naga-parthiv/",
  email: "mailto:parthivvarati@gmail.com",
  resume:
    "https://drive.google.com/file/d/1N8_VzH1kNRCk4k6jAwDQTbfrVsSsgIVp/view?usp=sharing",
};

const aboutCopy = {
  story: (
    <div className="about-copy">
      <p>I started with the screen. Then I wanted to know what lived behind it.</p>
      <p>
        Code led to models. Models led to vision. Vision led to backends—and backends
        led to the systems that make all of it dependable.
      </p>
      <p>
        Today, as an SDE-1 at vriksha.ai, I still follow the same instinct: open the
        next door and understand the whole thing.
      </p>
    </div>
  ),
  tldr: (
    <ul className="quick-facts">
      <li><span>Now</span>SDE-1 at vriksha.ai</li>
      <li><span>Before</span>AI Engineer at nimoy.ai</li>
      <li><span>Default mode</span>Take it apart. Learn it. Rebuild it better.</li>
    </ul>
  ),
  timeline: (
    <ol className="mini-timeline">
      <li><span>2021</span><p>Started Computer Science at GITAM.</p></li>
      <li><span>2024</span><p>Tested software and data at Exponential AI.</p></li>
      <li><span>2025</span><p>Built AI products and agentic systems at nimoy.ai.</p></li>
      <li><span>2026</span><p>Moved into software engineering at vriksha.ai.</p></li>
    </ol>
  ),
};

const chapters = [
  {
    number: "01",
    word: "CODE",
    line: "Computer science taught me how to turn an idea into something executable.",
  },
  {
    number: "02",
    word: "MODELS",
    line: "AI taught me that an impressive answer means little without a reliable system.",
  },
  {
    number: "03",
    word: "SYSTEMS",
    line: "APIs, queues, databases and deployment made the invisible work feel real.",
  },
  {
    number: "04",
    word: "NOW",
    line: "I bring those layers together as a software engineer—and keep asking what is underneath.",
  },
];

const gameCards = [
  { id: "build", rank: "B", suit: "⌁", title: "BUILD", detail: "APIs · backends · databases" },
  { id: "think", rank: "T", suit: "✦", title: "THINK", detail: "Algorithms · ML · RAG" },
  { id: "see", rank: "S", suit: "◉", title: "SEE", detail: "Computer vision · interfaces" },
  { id: "ship", rank: "S", suit: "↗", title: "SHIP", detail: "Queues · Docker · reliability" },
];

const projects = [
  {
    id: "companion",
    number: "01",
    title: "Emotional Companion",
    category: "Conversational AI",
    year: "2025",
    description:
      "Two AI personalities: one helps solve the problem, the other makes space for the feeling.",
    tags: ["LangChain", "Gemini", "React", "Python"],
    link: "https://myfeelingsbuddy.netlify.app/",
    cta: "Visit live project",
  },
  {
    id: "forecast",
    number: "02",
    title: "Electricity Forecast",
    category: "Machine Learning",
    year: "2025",
    description:
      "Four model families compared on Victoria energy data, then shipped behind a simple API.",
    tags: ["CatBoost", "Flask", "React", "ML"],
    link: "https://github.com/ParthivVarati/Electricity-Forecast",
    cta: "View repository",
  },
  {
    id: "snaptrip",
    number: "03",
    title: "SnapTrip",
    category: "Computer Vision",
    year: "2024",
    description: "A visual travel search experience powered by OpenCV image matching.",
    tags: ["OpenCV", "Flask", "NumPy", "JavaScript"],
    link: "https://github.com/ParthivVarati/SNAPTRIP",
    cta: "View repository",
  },
  {
    id: "freelancer",
    number: "04",
    title: "Freelancer",
    category: "Full-stack Product",
    year: "2024",
    description: "A full-stack marketplace for posting, finding and managing work.",
    tags: ["React", "Flask", "SQL", "Python"],
    link: "https://github.com/ParthivVarati/FREELANCER",
    cta: "View repository",
  },
];

const roles = [
  {
    period: "2026 — NOW",
    role: "SDE-1",
    company: "vriksha.ai",
    note: "Building across product and systems in Bengaluru.",
    current: true,
  },
  {
    period: "2025 — 2026",
    role: "AI Engineer",
    company: "nimoy.ai",
    note: "Agents, memory, asynchronous pipelines and computer vision.",
  },
  {
    period: "2024",
    role: "Intern",
    company: "Exponential AI",
    note: "Software testing, data annotation and output validation.",
  },
];

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Navigation() {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Intl.DateTimeFormat("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date()),
      );
    };
    update();
    const interval = window.setInterval(update, 30000);
    return () => window.clearInterval(interval);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <motion.header
        className="site-nav"
        initial={{ opacity: 0, y: -18, x: "-50%" }}
        animate={{ opacity: 1, y: 0, x: "-50%" }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        <a className="nav-mark" href="#top" aria-label="Back to top">NP<span>°</span></a>
        <div className="nav-status"><i />SDE-1 · BLR {time && `· ${time}`}</div>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#play">Play</a>
        </nav>
        <a className="nav-contact" href={links.email}>Say hello <ArrowUpRight size={15} /></a>
        <button
          className="nav-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.header>
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            <a href="#about" onClick={close}>About</a>
            <a href="#work" onClick={close}>Work</a>
            <a href="#play" onClick={close}>Play</a>
            <a href={links.email} onClick={close}>Say hello <ArrowUpRight size={16} /></a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function JackCard() {
  const [flipped, setFlipped] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handlePointer = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    setTilt({ x: y * -8, y: x * 10 });
  };

  return (
    <div className="hero-card-wrap">
      <motion.button
        className={`jack-card ${flipped ? "is-flipped" : ""}`}
        type="button"
        aria-label="Flip the Jack of all trades card"
        onClick={() => setFlipped((value) => !value)}
        onPointerMove={handlePointer}
        onPointerLeave={() => setTilt({ x: 0, y: 0 })}
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
      >
        <span className="jack-inner">
          <span className="jack-face jack-front">
            <span className="card-corner top"><b>J</b><i>✦</i></span>
            <span className="jack-orbit orbit-one"><i>CODE</i></span>
            <span className="jack-orbit orbit-two"><i>AI</i></span>
            <span className="jack-orbit orbit-three"><i>SHIP</i></span>
            <span className="jack-centre"><small>THE</small><strong>JACK</strong><em>of all trades</em></span>
            <span className="card-corner bottom"><b>J</b><i>✦</i></span>
          </span>
          <span className="jack-face jack-back">
            <span className="back-grid" />
            <span className="back-copy">
              <small>MY HAND</small>
              <strong>CODE<br />MODELS<br />SYSTEMS<br />PRODUCT</strong>
              <em>Different cards.<br />One curious mind.</em>
            </span>
          </span>
        </span>
      </motion.button>
      <span className="card-hint"><i /> click the card</span>
    </div>
  );
}

function Hero() {
  return (
    <main id="top" className="hero section-shell">
      <div className="hero-copy">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          NAGA PARTHIV · SOFTWARE ENGINEER
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          A jack of <em>all</em><br />trades.
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          Engineer by practice. Curious by default.<br />I connect the layers others keep separate.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.7 }}
        >
          <a className="button button-dark" href="#work">See selected work <ArrowDown size={16} /></a>
          <a className="text-link" href={links.resume} target="_blank" rel="noreferrer">Résumé <ArrowUpRight size={15} /></a>
        </motion.div>
      </div>
      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.88, rotate: 6 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <JackCard />
      </motion.div>
      <div className="hero-scroll">SCROLL TO DEAL <ArrowDown size={14} /></div>
    </main>
  );
}

function About() {
  const [mode, setMode] = useState("story");

  return (
    <section id="about" className="about section-shell">
      <Reveal className="section-intro">
        <p className="section-kicker"><span>01</span> The person behind the card</p>
        <h2>Somewhere between<br /><em>code & curiosity.</em></h2>
      </Reveal>
      <div className="about-layout">
        <Reveal className="about-tabs" delay={0.1}>
          {Object.keys(aboutCopy).map((key) => (
            <button
              type="button"
              key={key}
              className={mode === key ? "active" : ""}
              onClick={() => setMode(key)}
            >
              {key === "tldr" ? "TL;DR" : key[0].toUpperCase() + key.slice(1)}
            </button>
          ))}
        </Reveal>
        <div className="about-panel" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div
              key={mode}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              {aboutCopy[mode]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function StoryRail() {
  return (
    <section className="story-rail">
      <div className="section-shell story-heading">
        <Reveal>
          <p className="section-kicker section-kicker-light"><span>02</span> Four chapters. One thread.</p>
        </Reveal>
      </div>
      {chapters.map((chapter) => (
        <motion.article
          className="chapter section-shell"
          key={chapter.word}
          initial={{ opacity: 0.28 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.65 }}
          transition={{ duration: 0.45 }}
        >
          <span className="chapter-number">{chapter.number}</span>
          <h3>{chapter.word}</h3>
          <p>{chapter.line}</p>
        </motion.article>
      ))}
    </section>
  );
}

function CardGame() {
  const [cards, setCards] = useState(gameCards);
  const [flipped, setFlipped] = useState(new Set());

  const flip = (id) => {
    setFlipped((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const shuffle = () => {
    setFlipped(new Set());
    setCards((current) => [...current].sort(() => Math.random() - 0.5));
  };

  const allFound = flipped.size === cards.length;

  return (
    <section id="play" className="play-section">
      <div className="section-shell">
        <div className="play-heading">
          <Reveal>
            <p className="section-kicker section-kicker-light"><span>03</span> A small intermission</p>
            <h2>Pick a card.<br /><em>Any card.</em></h2>
          </Reveal>
          <Reveal className="play-instructions" delay={0.1}>
            <p>Every card is a different part of how I work. Turn over the whole hand.</p>
            <button type="button" onClick={shuffle}><Shuffle size={16} /> Shuffle</button>
          </Reveal>
        </div>
        <LayoutGroup>
          <div className="game-grid">
            {cards.map((card, index) => (
              <motion.button
                layout
                key={card.id}
                type="button"
                className={`game-card ${flipped.has(card.id) ? "is-flipped" : ""}`}
                aria-label={`${flipped.has(card.id) ? "Hide" : "Reveal"} ${card.title} card`}
                onClick={() => flip(card.id)}
                transition={{ layout: { type: "spring", stiffness: 260, damping: 24 } }}
                style={{ "--card-index": index }}
              >
                <span className="game-card-inner">
                  <span className="game-face game-front">
                    <span className="game-corner">{card.rank}<i>{card.suit}</i></span>
                    <strong>{card.suit}</strong>
                    <span className="game-corner game-corner-bottom">{card.rank}<i>{card.suit}</i></span>
                  </span>
                  <span className="game-face game-back">
                    <small>{card.suit}</small>
                    <strong>{card.title}</strong>
                    <span>{card.detail}</span>
                  </span>
                </span>
              </motion.button>
            ))}
          </div>
        </LayoutGroup>
        <div className={`game-result ${allFound ? "visible" : ""}`} aria-live="polite">
          <Check size={18} /> That’s the trick: the cards work because they work together.
        </div>
      </div>
    </section>
  );
}

function ProjectArtwork({ id }) {
  if (id === "companion") {
    return <div className="project-art companion-art"><i /><i /><span>How are you,<br />really?</span></div>;
  }
  if (id === "forecast") {
    return (
      <div className="project-art forecast-art">
        <span>24h</span>
        <svg viewBox="0 0 320 150" role="img" aria-label="Forecast line graphic">
          <path d="M10 125 C45 105, 50 70, 86 85 S140 125, 168 68 S218 40, 242 58 S280 85, 310 20" />
          <path className="ghost-line" d="M10 135 C45 115, 62 90, 92 103 S144 138, 178 90 S230 65, 250 76 S285 99, 310 48" />
        </svg>
      </div>
    );
  }
  if (id === "snaptrip") {
    return <div className="project-art snap-art"><span className="reticle"><i /></span><b>FIND<br />THE<br />PLACE</b></div>;
  }
  return <div className="project-art freelancer-art"><span>POST</span><i>↔</i><span>BUILD</span></div>;
}

function Work() {
  const [active, setActive] = useState("companion");

  return (
    <section id="work" className="work section-shell">
      <Reveal className="work-heading">
        <p className="section-kicker"><span>04</span> Selected work</p>
        <h2>Things I’ve<br /><em>brought to life.</em></h2>
      </Reveal>
      <div className="project-list">
        {projects.map((project) => {
          const isActive = active === project.id;
          return (
            <article className={`project-row ${isActive ? "active" : ""}`} key={project.id}>
              <button
                type="button"
                className="project-trigger"
                aria-expanded={isActive}
                onClick={() => setActive(isActive ? null : project.id)}
              >
                <span className="project-number">{project.number}</span>
                <strong>{project.title}</strong>
                <span>{project.category}</span>
                <span>{project.year}</span>
                <i>{isActive ? "−" : "+"}</i>
              </button>
              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    className="project-detail"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="project-detail-inner">
                      <div className="project-description">
                        <p>{project.description}</p>
                        <div className="project-tags">
                          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                        </div>
                        <a href={project.link} target="_blank" rel="noreferrer">
                          {project.cta} <ArrowUpRight size={16} />
                        </a>
                      </div>
                      <ProjectArtwork id={project.id} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="experience section-shell">
      <Reveal className="experience-title">
        <p className="section-kicker"><span>05</span> The route so far</p>
        <h2>Still becoming.</h2>
      </Reveal>
      <div className="role-list">
        {roles.map((item, index) => (
          <Reveal className="role-row" key={`${item.company}-${item.role}`} delay={index * 0.06}>
            <span className="role-period">{item.period}</span>
            <div className="role-name">
              <h3>{item.role}</h3>
              <p>{item.company}</p>
            </div>
            <p className="role-note">{item.note}</p>
            {item.current && <span className="current-pill"><i /> Current</span>}
          </Reveal>
        ))}
      </div>
      <div className="education-note">
        <span>EDUCATION</span>
        <p>B.Tech Computer Science · GITAM University · 2021—2025 · 8.57 CGPA</p>
      </div>
    </section>
  );
}

function SkillTicker() {
  const skills = ["PYTHON", "REACT", "FLASK", "SQL", "DOCKER", "RAG", "COMPUTER VISION", "LLMs"];
  const repeated = useMemo(() => [...skills, ...skills], []);
  return (
    <div className="skill-ticker" aria-label={`Tools I use: ${skills.join(", ")}`}>
      <div>
        {repeated.map((skill, index) => <span key={`${skill}-${index}`}>{skill}<i>✦</i></span>)}
      </div>
    </div>
  );
}

function Contact() {
  return (
    <footer id="contact" className="contact">
      <SkillTicker />
      <div className="section-shell contact-inner">
        <Reveal>
          <p className="section-kicker section-kicker-light"><span>06</span> Your move</p>
          <h2>Got a card<br />worth <em>playing?</em></h2>
        </Reveal>
        <Reveal className="contact-side" delay={0.1}>
          <p>I’m always up for a good problem, a thoughtful product, or an interesting hello.</p>
          <a className="contact-email" href={links.email}>parthivvarati@gmail.com <ArrowUpRight /></a>
          <div className="social-links">
            <a href={links.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
            <a href={links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
            <a href={links.email}><Mail size={17} /> Email</a>
          </div>
        </Reveal>
      </div>
      <div className="section-shell footer-line">
        <span>© {new Date().getFullYear()} Naga Parthiv</span>
        <a href="#top">Back to top ↑</a>
        <span>Built with curiosity in Bengaluru</span>
      </div>
    </footer>
  );
}

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 160, damping: 28, restDelta: 0.001 });

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <Navigation />
      <Hero />
      <About />
      <StoryRail />
      <CardGame />
      <Work />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
