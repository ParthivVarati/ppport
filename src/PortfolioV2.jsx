import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Lenis from "lenis";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  RotateCcw,
  X,
} from "lucide-react";

const contact = {
  email: "mailto:parthivvarati@gmail.com",
  github: "https://github.com/ParthivVarati",
  linkedin: "https://www.linkedin.com/in/naga-parthiv/",
  resume: "https://drive.google.com/file/d/1N8_VzH1kNRCk4k6jAwDQTbfrVsSsgIVp/view?usp=sharing",
};

const trades = [
  { id: "code", label: "CODE", title: "Software", note: "interfaces, APIs, databases", color: "#ff5b35" },
  { id: "ai", label: "AI", title: "Intelligence", note: "models, agents, memory", color: "#ff5b35" },
  { id: "vision", label: "VISION", title: "Perception", note: "pixels into meaning", color: "#ff5b35" },
  { id: "systems", label: "SYSTEMS", title: "Reliability", note: "queues, cloud, latency", color: "#ff5b35" },
];

const modules = [
  { id: "interface", name: "Interface", symbol: "UI", color: "#ff5b35", note: "what people touch" },
  { id: "api", name: "API", symbol: "↔", color: "#f4efe6", note: "how parts speak" },
  { id: "brain", name: "AI brain", symbol: "✦", color: "#ff5b35", note: "reasoning layer" },
  { id: "memory", name: "Memory", symbol: "M", color: "#b8b6af", note: "what it keeps" },
  { id: "data", name: "Database", symbol: "D", color: "#f4efe6", note: "where truth lives" },
  { id: "voice", name: "Voice", symbol: "≋", color: "#b8b6af", note: "how it speaks" },
  { id: "vision", name: "Vision", symbol: "◉", color: "#ff5b35", note: "how it sees" },
  { id: "queue", name: "Queue", symbol: "…", color: "#b8b6af", note: "work in motion" },
];

const projects = [
  {
    id: "companion",
    index: "01",
    mark: "EC",
    question: "Can software listen before it solves?",
    title: "Emotional Companion",
    kind: "CONVERSATIONAL AI · 2025",
    copy: "Two AI personalities share one conversation: one makes room for the feeling, the other helps find a way forward.",
    tags: ["LangChain", "Gemini", "React", "Python"],
    href: "https://myfeelingsbuddy.netlify.app/",
    link: "Open live project",
    background: "#f4efe6",
    foreground: "#11110f",
  },
  {
    id: "forecast",
    index: "02",
    mark: "EF",
    question: "Can four models agree on tomorrow?",
    title: "Electricity Forecast",
    kind: "MACHINE LEARNING · 2025",
    copy: "Four model families, one energy dataset, and an API that turns comparison into a usable forecast.",
    tags: ["CatBoost", "Flask", "React", "ML"],
    href: "https://github.com/ParthivVarati/Electricity-Forecast",
    link: "View repository",
    background: "#ff5b35",
    foreground: "#11110f",
  },
  {
    id: "snaptrip",
    index: "03",
    mark: "ST",
    question: "Can a picture become a destination?",
    title: "SnapTrip",
    kind: "COMPUTER VISION · 2024",
    copy: "A visual travel search that uses image matching to recognize a place from what you show it.",
    tags: ["OpenCV", "Flask", "NumPy", "JavaScript"],
    href: "https://github.com/ParthivVarati/SNAPTRIP",
    link: "View repository",
    background: "#fffdf7",
    foreground: "#11110f",
  },
  {
    id: "freelancer",
    index: "04",
    mark: "FR",
    question: "Can finding work feel less like work?",
    title: "Freelancer",
    kind: "FULL-STACK PRODUCT · 2024",
    copy: "A straightforward marketplace for posting, discovering and managing freelance work in one place.",
    tags: ["React", "Flask", "SQL", "Python"],
    href: "https://github.com/ParthivVarati/FREELANCER",
    link: "View repository",
    background: "#11110f",
    foreground: "#f4efe6",
  },
];

const career = [
  { date: "APR 2026 — NOW", role: "SDE-1", company: "vriksha.ai", place: "Bengaluru · On-site", note: "Building across product and systems.", mark: "V" },
  { date: "SEP 2025 — MAR 2026", role: "AI Engineer", company: "nimoy.ai", place: "Gurugram · Remote", note: "Agents, memory, vision and async pipelines.", mark: "N" },
  { date: "JUN — JUL 2024", role: "Intern", company: "Exponential AI", place: "India", note: "Testing, annotation and output quality.", mark: "E" },
];

function useSmoothScroll() {
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    if (reduceMotion) return undefined;
    const lenis = new Lenis({ duration: 1, smoothWheel: true });
    let frame;
    const loop = (time) => {
      lenis.raf(time);
      frame = window.requestAnimationFrame(loop);
    };
    frame = window.requestAnimationFrame(loop);
    return () => {
      window.cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [reduceMotion]);
}

function CursorSpark() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 500, damping: 38 });
  const smoothY = useSpring(y, { stiffness: 500, damping: 38 });

  useEffect(() => {
    const move = (event) => {
      x.set(event.clientX - 11);
      y.set(event.clientY - 11);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return <motion.div className="pw-cursor-spark" aria-hidden="true" style={{ x: smoothX, y: smoothY }}>✦</motion.div>;
}

function SparkMark({ label = "NP" }) {
  return (
    <span className="pw-spark-mark">
      <b>{label}</b><i>✦</i>
    </span>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("IST");

  useEffect(() => {
    const update = () => setTime(new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", hour12: false,
    }).format(new Date()));
    update();
    const timer = window.setInterval(update, 30000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const escape = (event) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [open]);

  return (
    <>
      <motion.header className="pw-nav" initial={{ y: -80, x: "-50%" }} animate={{ y: 0, x: "-50%" }} transition={{ duration: .65, ease: [0.22, 1, 0.36, 1] }}>
        <a href="#top" aria-label="Back to top"><SparkMark /></a>
        <span className="pw-nav-time">{time}<i />BLR</span>
        <nav aria-label="Primary navigation">
          <a href="#story">Story</a><a href="#build">Build</a><a href="#work">Work</a>
        </nav>
        <a className="pw-nav-talk" href={contact.email}>Say hello <ArrowUpRight size={14} /></a>
        <button className="pw-menu" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="pw-mobile-nav" onClick={() => setOpen((value) => !value)}>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.header>
      <AnimatePresence>
        {open && (
          <motion.nav id="pw-mobile-nav" className="pw-mobile-nav" aria-label="Mobile navigation" initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}>
            {["story", "build", "work"].map((item) => <a key={item} href={`#${item}`} onClick={() => setOpen(false)}>{item}<ArrowRight size={15} /></a>)}
            <a href={contact.email}>say hello<ArrowUpRight size={15} /></a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

function MultiTool() {
  const [active, setActive] = useState(trades[0]);
  return (
    <motion.div className="pw-multitool" initial={{ opacity: 0, scale: .88, rotate: -6 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .9, delay: .35, ease: [0.22, 1, .36, 1] }}>
      <div className="pw-tool-glow" style={{ "--tool-color": active.color }} />
      <div className="pw-tool-rings" aria-hidden="true"><i /><i /><i /></div>
      <div className="pw-tool-core">
        <small>JACK MODE / ON</small>
        <strong>{active.title}</strong>
        <span>{active.note}</span>
      </div>
      {trades.map((trade, index) => (
        <button
          key={trade.id}
          type="button"
          className={`pw-tool-${index + 1} ${active.id === trade.id ? "is-active" : ""}`}
          style={{ "--trade-color": trade.color }}
          aria-pressed={active.id === trade.id}
          onPointerEnter={() => setActive(trade)}
          onFocus={() => setActive(trade)}
          onClick={() => setActive(trade)}
        >
          <i />{trade.label}
        </button>
      ))}
      <span className="pw-tool-note">pick a layer ↗</span>
    </motion.div>
  );
}

function Hero() {
  return (
    <section id="top" className="pw-hero">
      <div className="pw-page pw-hero-inner">
        <div className="pw-hero-copy">
          <motion.p className="pw-kicker" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .18 }}>HELLO, I’M PARTHIV <span>↘</span></motion.p>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .85, delay: .22, ease: [0.22, 1, .36, 1] }}>
            I FOLLOW<br />QUESTIONS<br /><em>until they work.</em>
          </motion.h1>
          <motion.div className="pw-hero-note" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .5 }}>
            <p>SDE-1 at <strong>vriksha.ai</strong>. Previously an AI Engineer at <strong>nimoy.ai</strong>.</p>
            <p>I move between code, AI, vision and systems—because useful products rarely stay inside one box.</p>
          </motion.div>
          <motion.div className="pw-hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .65 }}>
            <a className="pw-button pw-button-dark" href="#story">Follow the story <ArrowDown size={16} /></a>
            <a className="pw-text-link" href={contact.resume} target="_blank" rel="noreferrer">Résumé <ArrowUpRight size={14} /></a>
          </motion.div>
        </div>
        <MultiTool />
      </div>
      <div className="pw-ticker" aria-hidden="true"><div>CODE <b>✦</b> AI <b>✦</b> VISION <b>✦</b> SYSTEMS <b>✦</b> PRODUCT <b>✦</b> CODE <b>✦</b> AI <b>✦</b> VISION <b>✦</b> SYSTEMS <b>✦</b> PRODUCT <b>✦</b></div></div>
    </section>
  );
}

function StoryBeat({ progress, range, number, eyebrow, title, note, accent = false }) {
  const opacity = useTransform(progress, [range[0], range[1], range[2], range[3]], [0, 1, 1, 0]);
  const y = useTransform(progress, [range[0], range[1], range[2], range[3]], [55, 0, 0, -45]);
  const scale = useTransform(progress, [range[0], range[1], range[2], range[3]], [.96, 1, 1, 1.04]);
  return (
    <motion.article className={`pw-story-beat ${accent ? "is-accent" : ""}`} style={{ opacity, y, scale }}>
      <span>{number} / 04 · {eyebrow}</span>
      <h2>{title}</h2>
      <p>{note}</p>
    </motion.article>
  );
}

function Story() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const backgroundColor = useTransform(scrollYProgress, [0, .27, .5, .74, 1], ["#f4efe6", "#ff5b35", "#8f2f19", "#10100f", "#10100f"]);
  const color = useTransform(scrollYProgress, [0, .43, .57, 1], ["#11110f", "#11110f", "#f7f2e8", "#f7f2e8"]);
  const sparkRotate = useTransform(scrollYProgress, [0, 1], [0, 520]);
  const sparkScale = useTransform(scrollYProgress, [0, .5, 1], [.75, 1.4, .9]);
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const lineOpacity = useTransform(scrollYProgress, [0, .05, .95, 1], [0, .5, .5, 0]);

  return (
    <motion.section id="story" className="pw-story" ref={ref} style={{ backgroundColor, color }}>
      <div className="pw-story-sticky">
        <div className="pw-story-grid" aria-hidden="true" />
        <motion.div className="pw-story-spark" style={{ rotate: sparkRotate, scale: sparkScale }}>✦</motion.div>
        <motion.i className="pw-story-trace" style={{ scaleX: lineScale, opacity: lineOpacity }} />
        <div className="pw-story-stage pw-page">
          <StoryBeat progress={scrollYProgress} range={[-.05, 0, .24, .245]} number="01" eyebrow="THE SCREEN" title={<>I wanted to know<br />what lived <em>behind it.</em></>} note="So I learned to code—not just what software did, but why it worked." />
          <StoryBeat progress={scrollYProgress} range={[.245, .25, .49, .495]} number="02" eyebrow="THE MODEL" title={<>Then the questions<br />got <em>stranger.</em></>} note="Can a machine learn? See? Remember? Decide what it needs?" accent />
          <StoryBeat progress={scrollYProgress} range={[.495, .5, .74, .745]} number="03" eyebrow="THE REAL WORLD" title={<>A smart model<br />isn’t a <em>product.</em></>} note="APIs, databases, queues, latency and reliability became part of the answer." />
          <StoryBeat progress={scrollYProgress} range={[.745, .75, 1, 1.08]} number="04" eyebrow="NOW" title={<>So I became the person<br />who <em>connects the layers.</em></>} note="The title is SDE-1. The instinct is the same: follow the next useful question." accent />
        </div>
        <div className="pw-story-footer"><span>SCROLL TO CHANGE THE BACKGROUND</span><b>THE CURIOSITY LOOP</b></div>
      </div>
    </motion.section>
  );
}

function Builder() {
  const canvasRef = useRef(null);
  const [idea, setIdea] = useState("");
  const [nodes, setNodes] = useState([]);
  const [message, setMessage] = useState("Choose the first part. Every build starts with one decision.");
  const [building, setBuilding] = useState(false);
  const [live, setLive] = useState(false);

  const place = (module, point) => {
    if (nodes.some((node) => node.id === module.id)) {
      setMessage(`${module.name} is already on the bench. Move it if the system needs space.`);
      return;
    }
    const rect = canvasRef.current?.getBoundingClientRect();
    const index = nodes.length;
    const columns = rect && rect.width < 520 ? 2 : 3;
    const usable = Math.max(145, (rect?.width || 700) - 50 - 145);
    const fallback = {
      x: 25 + (index % columns) * (usable / Math.max(1, columns - 1)),
      y: 260 + Math.floor(index / columns) * 92,
    };
    const position = point && rect ? {
      x: Math.max(12, Math.min(rect.width - 155, point.x - rect.left - 66)),
      y: Math.max(200, Math.min(rect.height - 80, point.y - rect.top - 32)),
    } : fallback;
    setNodes((current) => [...current, { ...module, ...position }]);
    setLive(false);
    setMessage(`${module.name} is in. What does the idea need next?`);
  };

  const dropPart = (module, info) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const inside = info.point.x > rect.left && info.point.x < rect.right && info.point.y > rect.top && info.point.y < rect.bottom;
    if (inside) place(module, info.point);
    else setMessage("Drop the part inside the grid—or tap it to place.");
  };

  const moveNode = (id, info) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    setNodes((current) => current.map((node) => node.id === id ? {
      ...node,
      x: Math.max(8, Math.min(rect.width - 155, node.x + info.offset.x)),
      y: Math.max(195, Math.min(rect.height - 80, node.y + info.offset.y)),
    } : node));
    setLive(false);
    setMessage("Good move. Clear systems make their relationships visible.");
  };

  const remove = (id) => {
    setNodes((current) => current.filter((node) => node.id !== id));
    setLive(false);
    setMessage("Part removed. Simpler is often stronger.");
  };

  const assemble = () => {
    if (!idea.trim()) return setMessage("Name the idea first. Rough is fine.");
    if (nodes.length < 2) return setMessage("Give it at least two connected parts.");
    setBuilding(true);
    setLive(false);
    setMessage("Connecting the decisions…");
    window.setTimeout(() => {
      setBuilding(false);
      setLive(true);
      setMessage(`${idea.trim()} is live. Visible decisions, quick feedback, no mystery.`);
    }, 1050);
  };

  const reset = () => {
    setIdea(""); setNodes([]); setBuilding(false); setLive(false);
    setMessage("Clean bench. What should we make next?");
  };

  return (
    <section id="build" className="pw-builder">
      <div className="pw-page">
        <div className="pw-builder-title">
          <p className="pw-kicker">ENOUGH ABOUT ME · YOUR TURN</p>
          <h2>LET’S MAKE<br /><em>an idea move.</em></h2>
          <p>Type something rough. Pick its parts. Rearrange the system. This is a tiny version of how I like to work: together and in the open.</p>
        </div>
        <div className={`pw-bench ${live ? "is-live" : ""}`}>
          <header>
            <span><i /> PARTHIV + YOU / WORKBENCH</span>
            <b>{nodes.length.toString().padStart(2, "0")} PARTS</b>
            <button type="button" onClick={reset}><RotateCcw size={13} /> CLEAR</button>
          </header>
          <div className="pw-idea-row">
            <label htmlFor="pw-idea">WHAT ARE WE BUILDING?</label>
            <input id="pw-idea" value={idea} maxLength={58} placeholder="e.g. a voice coach for nervous interviews" onChange={(event) => { setIdea(event.target.value); setLive(false); }} />
            <button type="button" onClick={assemble} disabled={building}>{building ? "WIRING…" : "MAKE IT LIVE"}<ArrowRight size={15} /></button>
          </div>
          <div className="pw-bench-body">
            <aside>
              <div><span>PARTS BIN</span><small>DRAG / TAP</small></div>
              {modules.map((module) => (
                <motion.button key={module.id} type="button" className={nodes.some((node) => node.id === module.id) ? "is-used" : ""} style={{ "--part": module.color }} drag dragSnapToOrigin dragMomentum={false} onDragEnd={(_, info) => dropPart(module, info)} onClick={() => place(module)} whileDrag={{ scale: 1.05, zIndex: 8 }}>
                  <i>{module.symbol}</i><span><b>{module.name}</b><small>{module.note}</small></span><em>{nodes.some((node) => node.id === module.id) ? "✓" : "+"}</em>
                </motion.button>
              ))}
            </aside>
            <div className="pw-build-grid" ref={canvasRef}>
              <div className="pw-grid-meta"><span>BUILD AREA / 01</span><small>MOVE THE PARTS. SEE THE SYSTEM.</small></div>
              <svg aria-hidden="true">
                {nodes.slice(1).map((node, index) => {
                  const previous = nodes[index];
                  return <line key={`${previous.id}-${node.id}`} x1={previous.x + 67} y1={previous.y + 31} x2={node.x + 67} y2={node.y + 31} />;
                })}
              </svg>
              <div className="pw-product-output">
                <span>OUTPUT / {live ? "LIVE" : building ? "WIRING" : "DRAFT"}</span>
                <h3>{idea.trim() || "Your idea shows up here."}</h3>
                <p>{nodes.length ? `${nodes.length} connected decision${nodes.length === 1 ? "" : "s"}` : "waiting for a first part"}</p>
                <div>{nodes.map((node) => <i key={node.id} style={{ background: node.color }}>{node.symbol}</i>)}</div>
                <b>{live ? "✦ ONLINE" : "○ NOT LIVE YET"}</b>
              </div>
              {nodes.map((node) => (
                <motion.div key={node.id} className="pw-node" style={{ left: node.x, top: node.y, "--node": node.color }} drag dragSnapToOrigin dragMomentum={false} onDragEnd={(_, info) => moveNode(node.id, info)} whileDrag={{ scale: 1.04, zIndex: 6 }}>
                  <i>{node.symbol}</i><span><b>{node.name}</b><small>{node.note}</small></span><button type="button" aria-label={`Remove ${node.name}`} onPointerDown={(event) => event.stopPropagation()} onClick={() => remove(node.id)}>×</button>
                </motion.div>
              ))}
              {!nodes.length && <div className="pw-empty"><span>+</span><b>PUT THE FIRST PART HERE</b><small>Drag it in or tap from the bin.</small></div>}
            </div>
          </div>
          <footer role="status" aria-live="polite" className={live ? "is-live" : ""}><span>{live ? "✦" : "→"}</span>{message}</footer>
        </div>
      </div>
    </section>
  );
}

function VisualFrame({ name, children }) {
  return <div className="pw-visual-frame"><header><span><i /><i /><i /></span><b>{name}</b><small>↗</small></header>{children}</div>;
}

function CompanionVisual() {
  return <VisualFrame name="feelings.buddy / conversation"><div className="pw-chat"><aside><b>f.</b><i className="on" /><i /><i /><small>NP</small></aside><div className="pw-chat-main"><header><span>✦</span><div><b>Sol</b><small>practical companion</small></div><i>•••</i></header><div className="pw-messages"><p>What’s sitting heavy today?</p><p>I know what to do. I just can’t get myself to start.</p><p>Then let’s make the first step small enough to feel almost silly.</p><i>•••</i></div><footer>Write what’s on your mind… <span>↑</span></footer></div></div></VisualFrame>;
}

function ForecastVisual() {
  return <VisualFrame name="electricity / forecast"><div className="pw-forecast"><nav><b>e.</b><span>OVERVIEW</span><span className="on">FORECAST</span><span>MODELS</span></nav><div className="pw-forecast-head"><small>NEXT 24 HOURS</small><strong>12.8 <i>GW</i></strong><span>● WITHIN RANGE</span></div><svg viewBox="0 0 600 210" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="forecastFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ff5b35" stopOpacity=".32"/><stop offset="1" stopColor="#ff5b35" stopOpacity="0"/></linearGradient></defs><path className="fill" d="M0 165 C60 145 70 105 130 120 S210 182 275 118 S360 60 415 105 S500 72 600 30 L600 210 L0 210 Z"/><path className="line" d="M0 165 C60 145 70 105 130 120 S210 182 275 118 S360 60 415 105 S500 72 600 30"/></svg><div className="pw-models"><span>CATBOOST <b>94%</b></span><span>XGBOOST <b>91%</b></span><span>LSTM <b>88%</b></span></div></div></VisualFrame>;
}

function SnapVisual() {
  return <VisualFrame name="snaptrip / visual search"><div className="pw-snap"><div className="pw-landscape"><i className="sun"/><i className="mountain one"/><i className="mountain two"/><i className="ground"/><span className="scan one"/><span className="scan two"/><b>SCANNING FRAME 028</b></div><aside><span>VISUAL MATCH</span><strong>Coorg</strong><p>Karnataka, India</p><div><i>96%</i><small>CONFIDENCE</small></div><span className="pw-snap-action">OPEN PLACE ↗</span></aside></div></VisualFrame>;
}

function FreelancerVisual() {
  return <VisualFrame name="freelancer / workspace"><div className="pw-freelance"><aside><b>f.</b><i>⌂</i><i>◎</i><i>□</i><small>NP</small></aside><div className="pw-freelance-main"><header><div><small>MONDAY / 24 AUG</small><h4>Good morning, Parthiv.</h4></div><span>+ POST A PROJECT</span></header><div className="pw-stats"><span><small>OPEN</small><b>08</b></span><span><small>ACTIVE</small><b>03</b></span><span><small>DONE</small><b>24</b></span></div><h5>RECOMMENDED FOR YOU</h5><div className="pw-jobs"><article><span>01</span><b>Backend API for analytics</b><small>PYTHON · FLASK</small><i>₹45K—60K ↗</i></article><article><span>02</span><b>React dashboard redesign</b><small>REACT · UI</small><i>₹30K—45K ↗</i></article></div></div></div></VisualFrame>;
}

function ProjectVisual({ id }) {
  if (id === "companion") return <CompanionVisual />;
  if (id === "forecast") return <ForecastVisual />;
  if (id === "snaptrip") return <SnapVisual />;
  return <FreelancerVisual />;
}

function Project({ project }) {
  return (
    <article className={`pw-project pw-project-${project.id}`} style={{ "--project-bg": project.background, "--project-fg": project.foreground }}>
      <div className="pw-page pw-project-inner">
        <div className="pw-project-top"><span>{project.index} / 04</span><b>{project.kind}</b><i>✦</i></div>
        <motion.div className="pw-project-visual" initial={{ opacity: 0, y: 50, rotate: -1.5 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .75, ease: [0.22, 1, .36, 1] }}><ProjectVisual id={project.id} /></motion.div>
        <motion.div className="pw-project-copy" initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .7, delay: .08 }}>
          <div className="pw-project-mark"><span>{project.mark}</span><i /></div>
          <p>“{project.question}”</p>
          <h3>{project.title}</h3>
          <p className="pw-project-description">{project.copy}</p>
          <div className="pw-project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          <a href={project.href} target="_blank" rel="noreferrer">{project.link}<ArrowUpRight size={17}/></a>
        </motion.div>
      </div>
    </article>
  );
}

function Work() {
  return (
    <section id="work" className="pw-work">
      <div className="pw-work-gate">
        <div className="pw-page">
          <p className="pw-kicker">SELECTED WORK / FOUR ANSWERS</p>
          <h2>THE QUESTIONS<br />LEFT THE <em>LAB.</em></h2>
          <span>What follows is the proof: products built across four different layers.</span>
          <i className="pw-gate-spark">✦</i>
        </div>
      </div>
      <div className="pw-projects">{projects.map((project) => <Project key={project.id} project={project} />)}</div>
    </section>
  );
}

function Journey() {
  return (
    <section className="pw-journey">
      <div className="pw-page">
        <div className="pw-journey-title"><p className="pw-kicker">THE ROUTE / SO FAR</p><h2>THE TITLES CHANGED.<br /><em>THE INSTINCT DIDN’T.</em></h2></div>
        <div className="pw-career-list">
          {career.map((item, index) => (
            <motion.article key={item.company} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .35 }} transition={{ delay: index * .07 }}>
              <span>{item.date}</span>
              <div className="pw-company-mark"><b>{item.mark}</b><i /></div>
              <div><h3>{item.role}</h3><strong>{item.company}</strong></div>
              <p>{item.note}</p>
              <small>{item.place}</small>
            </motion.article>
          ))}
        </div>
        <div className="pw-education"><span>BEFORE THAT</span><b>B.Tech · Computer Science</b><p>GITAM University · 2021—2025 · 8.57 CGPA</p></div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="pw-footer">
      <div className="pw-page pw-footer-inner">
        <span className="pw-footer-spark" aria-hidden="true">✦</span>
        <p className="pw-kicker">ONE LAST QUESTION</p>
        <h2>HAVE ONE<br />WORTH <em>following?</em></h2>
        <div className="pw-footer-row">
          <p>A rough idea, a hard system problem, or a conversation that might lead somewhere useful.</p>
          <a href={contact.email}>parthivvarati@gmail.com<ArrowUpRight /></a>
        </div>
        <div className="pw-footer-bottom">
          <span>© {new Date().getFullYear()} NAGA PARTHIV</span>
          <div><a href={contact.github} target="_blank" rel="noreferrer"><Github size={15}/>GITHUB</a><a href={contact.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15}/>LINKEDIN</a><a href={contact.email}><Mail size={15}/>EMAIL</a></div>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </div>
    </footer>
  );
}

export default function PortfolioV2() {
  useSmoothScroll();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 145, damping: 28, restDelta: .001 });
  return (
    <>
      <motion.div className="pw-progress" style={{ scaleX: progress }} />
      <CursorSpark />
      <Nav />
      <main>
        <Hero />
        <Story />
        <Builder />
        <Work />
        <Journey />
      </main>
      <Footer />
    </>
  );
}
