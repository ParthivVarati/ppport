import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import Lenis from "lenis";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
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
  resume:
    "https://drive.google.com/file/d/1N8_VzH1kNRCk4k6jAwDQTbfrVsSsgIVp/view?usp=sharing",
};

const disciplines = [
  {
    id: "software",
    tab: "SOFTWARE",
    index: "01",
    eyebrow: "WHAT I DO NOW",
    title: "Build the whole thing.",
    copy: "From an interface someone touches to the service that keeps it running.",
    color: "#5a63e8",
    code: ["product", "api", "database", "deploy"],
  },
  {
    id: "ai",
    tab: "AI",
    index: "02",
    eyebrow: "A CHAPTER I KEEP USING",
    title: "Make intelligence useful.",
    copy: "Models, RAG and agents—designed as dependable product systems, not demos.",
    color: "#ef6c56",
    code: ["prompt", "memory", "tools", "evaluate"],
  },
  {
    id: "vision",
    tab: "VISION",
    index: "03",
    eyebrow: "HOW I LEARNED TO SEE",
    title: "Teach pixels meaning.",
    copy: "Computer vision made me curious about how machines interpret the physical world.",
    color: "#258f70",
    code: ["capture", "features", "match", "understand"],
  },
  {
    id: "systems",
    tab: "SYSTEMS",
    index: "04",
    eyebrow: "THE LAYER UNDERNEATH",
    title: "Keep it alive.",
    copy: "Queues, containers, latency and reliability—the quiet work behind good software.",
    color: "#d19b27",
    code: ["queue", "container", "observe", "scale"],
  },
];

const projects = [
  {
    id: "companion",
    number: "01",
    question: "Can software listen before it solves?",
    title: "Emotional Companion",
    type: "CONVERSATIONAL AI · 2025",
    copy: "Two AI personalities share one conversation: one makes room for the feeling, the other helps find a way forward.",
    tags: ["LangChain", "Gemini", "React", "Python"],
    href: "https://myfeelingsbuddy.netlify.app/",
    link: "Open live project",
    tone: "coral",
  },
  {
    id: "forecast",
    number: "02",
    question: "Can four models agree on tomorrow?",
    title: "Electricity Forecast",
    type: "MACHINE LEARNING · 2025",
    copy: "A forecasting system that compares four model families on Victoria energy data and serves the result through an API.",
    tags: ["CatBoost", "Flask", "React", "ML"],
    href: "https://github.com/ParthivVarati/Electricity-Forecast",
    link: "View repository",
    tone: "indigo",
  },
  {
    id: "snaptrip",
    number: "03",
    question: "Can a picture become a destination?",
    title: "SnapTrip",
    type: "COMPUTER VISION · 2024",
    copy: "A visual travel-search experiment that uses OpenCV image matching to recognize a place from what you show it.",
    tags: ["OpenCV", "Flask", "NumPy", "JavaScript"],
    href: "https://github.com/ParthivVarati/SNAPTRIP",
    link: "View repository",
    tone: "green",
  },
  {
    id: "freelancer",
    number: "04",
    question: "Can finding work feel less like work?",
    title: "Freelancer",
    type: "FULL-STACK PRODUCT · 2024",
    copy: "A marketplace for posting, discovering and managing freelance work from one straightforward interface.",
    tags: ["React", "Flask", "SQL", "Python"],
    href: "https://github.com/ParthivVarati/FREELANCER",
    link: "View repository",
    tone: "yellow",
  },
];

const journey = [
  {
    date: "NOW",
    role: "SDE-1",
    place: "vriksha.ai",
    location: "Bengaluru · On-site",
    note: "Building across product and systems.",
  },
  {
    date: "2025—26",
    role: "AI Engineer",
    place: "nimoy.ai",
    location: "Gurugram · Remote",
    note: "Agents, memory, vision and asynchronous pipelines.",
  },
  {
    date: "2024",
    role: "Intern",
    place: "Exponential AI",
    location: "India",
    note: "Testing, annotation and output quality.",
  },
];

function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 22, filter: "blur(7px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-7%" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Intl.DateTimeFormat("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date()),
      );
    };
    updateTime();
    const timer = window.setInterval(updateTime, 30000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <>
      <motion.header
        className="nav-pill"
        initial={{ opacity: 0, y: -18, x: "-50%" }}
        animate={{ opacity: 1, y: 0, x: "-50%" }}
        transition={{ duration: 0.65, delay: 0.15 }}
      >
        <a className="logo" href="#top" aria-label="Back to top">NP<span>•</span></a>
        <div className="nav-meta"><span>{time || "IST"}</span><i />BLR</div>
        <nav aria-label="Primary navigation">
          <a href="#story">Story</a>
          <a href="#work">Work</a>
          <a href="#play">Play</a>
        </nav>
        <a className="nav-hello" href={contact.email}>Let’s talk <ArrowUpRight size={14} /></a>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.header>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            {["story", "work", "play"].map((item) => (
              <a key={item} href={`#${item}`} onClick={() => setOpen(false)}>
                {item[0].toUpperCase() + item.slice(1)} <ArrowRight size={15} />
              </a>
            ))}
            <a href={contact.email}>Let’s talk <ArrowUpRight size={15} /></a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

function Workbench() {
  const [activeId, setActiveId] = useState("software");
  const active = disciplines.find((item) => item.id === activeId);

  return (
    <motion.div
      className="workbench-wrap"
      initial={{ opacity: 0, y: 28, rotate: 1.5 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="scribble-note">a few tabs are always open ↘</span>
      <div className="workbench">
        <div className="window-bar">
          <div className="traffic"><i /><i /><i /></div>
          <span>parthiv / workbench</span>
          <small>{active.index} / 04</small>
        </div>
        <div className="workbench-tabs" aria-label="Areas I work across">
          {disciplines.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={activeId === item.id}
              onClick={() => setActiveId(item.id)}
            >
              <span style={{ background: item.color }} />{item.tab}
            </button>
          ))}
        </div>
        <div className="workbench-body">
          <AnimatePresence mode="wait">
            <motion.div
              className="discipline-copy"
              key={active.id}
              initial={{ opacity: 0, y: 9 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <p>{active.eyebrow}</p>
              <h2>{active.title}</h2>
              <span>{active.copy}</span>
            </motion.div>
          </AnimatePresence>
          <div className="discipline-visual" style={{ "--discipline": active.color }}>
            <div className="visual-orbit"><span /><i /><b /></div>
            <AnimatePresence mode="wait">
              <motion.div
                className="code-stack"
                key={active.id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.35 }}
              >
                {active.code.map((word, index) => (
                  <span key={word}><i>{String(index + 1).padStart(2, "0")}</i>{word}</span>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <p className="workbench-caption">Jack of all trades? Maybe. I just like understanding how the pieces meet.</p>
    </motion.div>
  );
}

function Hero() {
  return (
    <div id="top" className="hero-page page-width">
      <section className="hero-intro">
        <div className="hero-copy">
          <div className="hero-title-block">
            <motion.p
              className="micro-label"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              HELLO THERE <span>👋</span>
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              I’m Parthiv.
            </motion.h1>
          </div>
          <motion.div
            className="hero-message"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.44 }}
          >
            <p className="hero-lead">I build across the layers that turn an idea into <em>working software.</em></p>
            <p className="hero-detail">
              Currently SDE-1 at <strong>vriksha.ai</strong> in Bengaluru. Previously building AI systems at <strong>nimoy.ai</strong>.
            </p>
            <div className="hero-links">
              <a className="primary-link" href="#play">Build something with me <ArrowDown size={16} /></a>
              <a className="quiet-link" href={contact.resume} target="_blank" rel="noreferrer">Résumé <ArrowUpRight size={14} /></a>
            </div>
          </motion.div>
        </div>
        <Workbench />
      </section>
      <div className="hero-footnote">
        <span>SCROLL FOR THE STORY</span>
        <i />
        <span>CODE · MODELS · SYSTEMS · PRODUCT</span>
      </div>
    </div>
  );
}

function StoryBoard() {
  const notes = [
    { year: "2021", label: "THE SCREEN", title: "What lives behind it?", symbol: "</>", tone: "blue" },
    { year: "2024", label: "THE MODEL", title: "Can a machine learn?", symbol: "✦", tone: "violet" },
    { year: "2025", label: "THE WORLD", title: "Can it see and remember?", symbol: "◉", tone: "coral" },
    { year: "NOW", label: "THE SYSTEM", title: "Can it work reliably?", symbol: "↗", tone: "green" },
  ];

  return (
    <Reveal className="story-board">
      <header>
        <span><i /> CURIOSITY BOARD / 2021—NOW</span>
        <small>Move the notes. The route was never a straight line.</small>
      </header>
      <div className="story-board-canvas">
        <svg aria-hidden="true" viewBox="0 0 1000 410" preserveAspectRatio="none">
          <path d="M110 260 C245 65 365 350 505 170 S770 70 900 240" />
        </svg>
        {notes.map((note, index) => (
          <motion.article
            key={note.label}
            className={`story-note story-note-${index + 1} note-${note.tone}`}
            drag
            dragMomentum={false}
            dragElastic={0}
            whileDrag={{ scale: 1.04, zIndex: 8, rotate: 0 }}
          >
            <div><span>{note.year}</span><i>{note.symbol}</i></div>
            <small>{note.label}</small>
            <h3>{note.title}</h3>
            <b>0{index + 1}</b>
          </motion.article>
        ))}
        <div className="board-caption"><span>JACK OF ALL TRADES?</span><p>I call it following the next useful question.</p></div>
      </div>
    </Reveal>
  );
}

function Story() {
  return (
    <section id="story" className="story page-width">
      <Reveal className="story-label"><p className="micro-label">THE SHORT VERSION</p></Reveal>
      <div className="story-grid">
        <Reveal>
          <h2>I kept following<br />the <em>question.</em></h2>
        </Reveal>
        <Reveal className="story-copy" delay={0.08}>
          <p className="story-opening">It started with a simple need to know what lived behind the screen.</p>
          <p>
            Programming led to machine learning. Models led to computer vision. Building those ideas led to APIs, databases and the less glamorous systems that make software dependable.
          </p>
          <p>
            The title changed from AI Engineer to SDE-1. The instinct didn’t: learn the next layer, then connect it to everything before it.
          </p>
        </Reveal>
      </div>
      <StoryBoard />
    </section>
  );
}

const bridgePieces = [
  { label: "IDEA", x: -260, y: -120, rotate: -13 },
  { label: "MODEL", x: 210, y: -145, rotate: 9 },
  { label: "SYSTEM", x: -170, y: 155, rotate: 7 },
  { label: "PRODUCT", x: 245, y: 125, rotate: -10 },
];

function BridgePiece({ piece, progress, index }) {
  const x = useTransform(progress, [0.12, 0.84], [piece.x, 0]);
  const y = useTransform(progress, [0.12, 0.84], [piece.y, 0]);
  const rotate = useTransform(progress, [0.12, 0.84], [piece.rotate, 0]);
  const scale = useTransform(progress, [0.12, 0.84], [0.82, 1]);

  return (
    <motion.div className="bridge-piece" style={{ x, y, rotate, scale }}>
      <span>0{index + 1}</span>{piece.label}
    </motion.div>
  );
}

function BridgeTransition() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const firstOpacity = useTransform(scrollYProgress, [0, 0.48, 0.66], [1, 1, 0]);
  const firstY = useTransform(scrollYProgress, [0, 0.6], [0, -22]);
  const secondOpacity = useTransform(scrollYProgress, [0.46, 0.64, 1], [0, 1, 1]);
  const secondY = useTransform(scrollYProgress, [0.46, 0.68, 1], [30, 0, 0]);
  const lineScale = useTransform(scrollYProgress, [0.48, 0.9], [0, 1]);

  return (
    <section className="bridge-transition" ref={ref}>
      <div className="bridge-sticky">
        <span className="bridge-label">FROM CURIOSITY TO SOMETHING REAL</span>
        <div className="bridge-headlines">
          <motion.h2 style={{ opacity: firstOpacity, y: firstY }}>The pieces were<br />all <em>scattered.</em></motion.h2>
          <motion.h2 style={{ opacity: secondOpacity, y: secondY }}>So I learned to<br /><em>connect them.</em></motion.h2>
        </div>
        <div className="bridge-assembly">
          <motion.i style={{ scaleX: lineScale }} />
          {bridgePieces.map((piece, index) => (
            <BridgePiece key={piece.label} piece={piece} progress={scrollYProgress} index={index} />
          ))}
        </div>
        <motion.a className="bridge-next" href="#play" style={{ opacity: secondOpacity }}>
          Now let’s build one <ArrowDown size={15} />
        </motion.a>
      </div>
    </section>
  );
}

const builderModules = [
  { id: "interface", name: "Interface", symbol: "▤", color: "#6b72ef", caption: "what people touch" },
  { id: "api", name: "API", symbol: "↔", color: "#ea715f", caption: "how pieces speak" },
  { id: "ai", name: "AI Brain", symbol: "✦", color: "#9d66d6", caption: "reasoning layer" },
  { id: "memory", name: "Memory", symbol: "◫", color: "#d39929", caption: "what it remembers" },
  { id: "database", name: "Database", symbol: "◉", color: "#238f70", caption: "where data lives" },
  { id: "voice", name: "Voice", symbol: "≋", color: "#367fb7", caption: "how it speaks" },
  { id: "vision", name: "Vision", symbol: "⌾", color: "#d55a78", caption: "how it sees" },
  { id: "queue", name: "Queue", symbol: "⋯", color: "#4f535d", caption: "work in motion" },
];

function BuilderGame() {
  const canvasRef = useRef(null);
  const [idea, setIdea] = useState("");
  const [nodes, setNodes] = useState([]);
  const [status, setStatus] = useState("Drag a block onto the artboard—or tap one to place it.");
  const [built, setBuilt] = useState(false);
  const [building, setBuilding] = useState(false);

  const addModule = (module, point = null) => {
    if (nodes.some((node) => node.type === module.id)) {
      setStatus(`${module.name} is already on the artboard. Move it where you need it.`);
      return;
    }

    const rect = canvasRef.current?.getBoundingClientRect();
    const index = nodes.length;
    const columns = rect && rect.width < 520 ? 2 : 3;
    const availableWidth = Math.max(180, (rect?.width || 680) - 200);
    const fallback = {
      x: 30 + (index % columns) * (availableWidth / Math.max(1, columns - 1)),
      y: 225 + Math.floor(index / columns) * 105,
    };
    const position = point && rect
      ? {
          x: Math.max(15, Math.min(rect.width - 155, point.x - rect.left - 65)),
          y: Math.max(95, Math.min(rect.height - 90, point.y - rect.top - 34)),
        }
      : fallback;

    setNodes((current) => [...current, { ...module, type: module.id, ...position }]);
    setBuilt(false);
    setStatus(`${module.name} placed. Add another layer or move it around.`);
  };

  const dropFromTray = (module, info) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const inside =
      info.point.x >= rect.left &&
      info.point.x <= rect.right &&
      info.point.y >= rect.top &&
      info.point.y <= rect.bottom;

    if (inside) addModule(module, info.point);
    else setStatus("Drop that block inside the dotted artboard—or tap it to place.");
  };

  const moveNode = (type, info) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    setNodes((current) =>
      current.map((node) =>
        node.type === type
          ? {
              ...node,
              x: Math.max(10, Math.min(rect.width - 155, node.x + info.offset.x)),
              y: Math.max(90, Math.min(rect.height - 90, node.y + info.offset.y)),
            }
          : node,
      ),
    );
    setBuilt(false);
    setStatus("Nice. The artboard follows your decisions.");
  };

  const removeNode = (type) => {
    setNodes((current) => current.filter((node) => node.type !== type));
    setBuilt(false);
    setStatus("Block removed. Keep shaping the system.");
  };

  const build = () => {
    if (!idea.trim()) {
      setStatus("Give the product a name or describe the idea first.");
      return;
    }
    if (nodes.length < 2) {
      setStatus("A product needs at least two connected layers. Add one more block.");
      return;
    }

    setBuilding(true);
    setBuilt(false);
    setStatus("Connecting the layers…");
    window.setTimeout(() => {
      setBuilding(false);
      setBuilt(true);
      setStatus(`${idea.trim()} is alive. This is how I like to work: visible, fast and together.`);
    }, 1050);
  };

  const reset = () => {
    setNodes([]);
    setIdea("");
    setBuilt(false);
    setBuilding(false);
    setStatus("Fresh artboard. What should we build next?");
  };

  return (
    <section id="play" className="builder-section">
      <div className="page-width">
        <Reveal className="builder-heading">
          <div>
            <p className="micro-label">YOUR TURN · THIS ONE IS REAL</p>
            <h2>Let’s build<br /><em>something.</em></h2>
          </div>
          <p>Type an idea. Drag the parts you need onto the artboard. Move them until the system feels right—then bring it to life.</p>
        </Reveal>

        <Reveal className="builder-window" delay={0.08}>
          <header className="builder-bar">
            <span><i className={built ? "online" : ""} /> PARTHIV + YOU / NEW BUILD</span>
            <div><b>{nodes.length}</b> layers placed</div>
            <button type="button" onClick={reset}><RotateCcw size={13} /> New artboard</button>
          </header>

          <div className="idea-input-row">
            <label htmlFor="product-idea">WHAT ARE WE MAKING?</label>
            <input
              id="product-idea"
              value={idea}
              onChange={(event) => {
                setIdea(event.target.value);
                setBuilt(false);
              }}
              placeholder="e.g. A voice coach for anxious interviews"
              maxLength={58}
            />
            <button type="button" className={building ? "building" : ""} onClick={build} disabled={building}>
              {building ? "Assembling…" : "Bring it to life"} <ArrowRight size={15} />
            </button>
          </div>

          <div className="builder-main">
            <aside className="parts-tray">
              <div><span>BUILDING BLOCKS</span><small>DRAG OR TAP</small></div>
              <p>Choose only what the idea needs.</p>
              <div className="part-list">
                {builderModules.map((module) => (
                  <motion.button
                    key={module.id}
                    type="button"
                    className={nodes.some((node) => node.type === module.id) ? "used" : ""}
                    drag
                    dragSnapToOrigin
                    dragMomentum={false}
                    whileDrag={{ scale: 1.06, zIndex: 10 }}
                    onDragEnd={(_, info) => dropFromTray(module, info)}
                    onClick={() => addModule(module)}
                    style={{ "--module-color": module.color }}
                  >
                    <span>{module.symbol}</span>
                    <div><strong>{module.name}</strong><small>{module.caption}</small></div>
                    <i>{nodes.some((node) => node.type === module.id) ? "✓" : "+"}</i>
                  </motion.button>
                ))}
              </div>
            </aside>

            <div className={`build-artboard ${built ? "is-live" : ""} ${building ? "is-building" : ""}`} ref={canvasRef}>
              <div className="artboard-meta"><span>ARTBOARD 01</span><small>Drag placed blocks to rearrange</small></div>
              <svg className="node-connections" aria-hidden="true">
                {nodes.slice(1).map((node, index) => {
                  const previous = nodes[index];
                  return (
                    <line
                      key={`${previous.type}-${node.type}`}
                      x1={previous.x + 68}
                      y1={previous.y + 34}
                      x2={node.x + 68}
                      y2={node.y + 34}
                    />
                  );
                })}
              </svg>

              <div className="live-preview">
                <span>LIVE PRODUCT PREVIEW</span>
                <div className="preview-top"><i /><i /><i /></div>
                <h3>{idea.trim() || "Your idea appears here"}</h3>
                <p>{nodes.length ? `${nodes.length} connected layer${nodes.length > 1 ? "s" : ""}` : "waiting for its first building block"}</p>
                <div className="preview-modules">
                  {nodes.map((node) => <i key={node.type} style={{ background: node.color }}>{node.symbol}</i>)}
                </div>
                <b>{built ? "ONLINE" : building ? "ASSEMBLING" : "DRAFT"}</b>
              </div>

              {nodes.map((node) => (
                <motion.div
                  className="canvas-node"
                  key={node.type}
                  drag
                  dragConstraints={canvasRef}
                  dragMomentum={false}
                  onDragEnd={(_, info) => moveNode(node.type, info)}
                  style={{ left: node.x, top: node.y, "--node-color": node.color }}
                  whileDrag={{ scale: 1.04, zIndex: 8 }}
                >
                  <span>{node.symbol}</span>
                  <div><strong>{node.name}</strong><small>{node.caption}</small></div>
                  <button type="button" aria-label={`Remove ${node.name}`} onPointerDown={(event) => event.stopPropagation()} onClick={() => removeNode(node.type)}>×</button>
                </motion.div>
              ))}

              {!nodes.length && (
                <div className="empty-artboard"><span>+</span><strong>Drop the first block here</strong><p>Or tap a block in the tray.</p></div>
              )}
            </div>
          </div>

          <footer className={built ? "complete" : ""} role="status" aria-live="polite">
            <span>{built ? "●" : "○"}</span>{status}
          </footer>
        </Reveal>
      </div>
    </section>
  );
}

const curiositySteps = [
  {
    id: "learn",
    question: "Can it learn?",
    answer: "Models",
    chapter: "MACHINE LEARNING",
    note: "I started by teaching systems to find patterns in data.",
    color: "#5a63e8",
  },
  {
    id: "see",
    question: "Can it see?",
    answer: "Vision",
    chapter: "COMPUTER VISION",
    note: "Then I wanted to know how machines make sense of the physical world.",
    color: "#258f70",
  },
  {
    id: "remember",
    question: "Can it remember?",
    answer: "Agents",
    chapter: "RAG · MEMORY · TOOLS",
    note: "Memory and agents turned single answers into continuing systems.",
    color: "#ef6c56",
  },
  {
    id: "survive",
    question: "Can it survive production?",
    answer: "Engineering",
    chapter: "SOFTWARE SYSTEMS",
    note: "Reliability, latency and infrastructure changed the question—and my role.",
    color: "#171715",
  },
];

function CuriosityLab() {
  const [unlocked, setUnlocked] = useState([]);
  const [active, setActive] = useState(null);
  const [message, setMessage] = useState("Start with the first question I asked.");
  const [shake, setShake] = useState(0);
  const displayOrder = [curiositySteps[3], curiositySteps[0], curiositySteps[2], curiositySteps[1]];
  const complete = unlocked.length === curiositySteps.length;

  const choose = (step) => {
    if (unlocked.includes(step.id)) {
      setActive(step);
      return;
    }

    const expected = curiositySteps[unlocked.length];
    if (step.id === expected.id) {
      const next = [...unlocked, step.id];
      setUnlocked(next);
      setActive(step);
      setMessage(
        next.length === curiositySteps.length
          ? "Route complete: curiosity became software engineering."
          : "Exactly. Now follow the next question.",
      );
    } else {
      setMessage(`Not yet. Hint: ${expected.question}`);
      setShake((value) => value + 1);
    }
  };

  const reset = () => {
    setUnlocked([]);
    setActive(null);
    setMessage("Start with the first question I asked.");
  };

  return (
    <section id="play" className="curiosity-lab">
      <div className="page-width">
        <Reveal className="lab-intro">
          <div>
            <p className="micro-label">DON’T JUST READ IT · PLAY IT</p>
            <h2>One question<br />opened the <em>next.</em></h2>
          </div>
          <p>Find the order that took me from machine learning to software engineering. Four questions. One route.</p>
        </Reveal>

        <Reveal delay={0.08}>
          <motion.div
            className="lab-window"
            animate={shake ? { x: shake % 2 ? [0, -6, 6, -3, 3, 0] : [0, 6, -6, 3, -3, 0] } : { x: 0 }}
            transition={{ duration: 0.35 }}
          >
            <header className="lab-bar">
              <span><i className={complete ? "online" : ""} /> CURIOSITY TRAIL</span>
              <div className="lab-progress">
                {curiositySteps.map((step) => <i key={step.id} className={unlocked.includes(step.id) ? "done" : ""} />)}
                <b>{unlocked.length} / 4</b>
              </div>
              <button type="button" onClick={reset}><RotateCcw size={13} /> Restart</button>
            </header>

            <div className="lab-body">
              <div className="question-map">
                <span className="map-label">PICK THE NEXT QUESTION</span>
                <div className="map-path" aria-hidden="true"><i style={{ "--trail": unlocked.length / 4 }} /></div>
                {displayOrder.map((step) => {
                  const done = unlocked.includes(step.id);
                  return (
                    <button
                      key={step.id}
                      type="button"
                      className={`${done ? "unlocked" : ""} ${active?.id === step.id ? "active" : ""}`}
                      aria-pressed={done}
                      onClick={() => choose(step)}
                      style={{ "--step-color": step.color }}
                    >
                      <span>{done ? <Check size={13} /> : "?"}</span>
                      <strong>{step.question}</strong>
                      <small>{done ? step.chapter : "locked question"}</small>
                    </button>
                  );
                })}
              </div>

              <div className={`answer-stage ${complete ? "is-complete" : ""}`}>
                <div className="answer-orbits" aria-hidden="true"><i /><i /><i /><span /></div>
                <AnimatePresence mode="wait">
                  {active ? (
                    <motion.div
                      className="answer-copy"
                      key={active.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <span>{active.chapter}</span>
                      <h3>{active.answer}</h3>
                      <p>{active.note}</p>
                      {complete && <a href="#work">See what the route built <ArrowDown size={14} /></a>}
                    </motion.div>
                  ) : (
                    <motion.div className="answer-copy answer-empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <span>YOUR MOVE</span>
                      <h3>?</h3>
                      <p>The answer appears here when you unlock the right question.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <footer className={complete ? "complete" : ""} role="status" aria-live="polite">
              <span>{complete ? "●" : "○"}</span>{message}
            </footer>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

function BrowserFrame({ children, label }) {
  return (
    <div className="mock-browser">
      <div className="mock-bar">
        <div><i /><i /><i /></div>
        <span>{label}</span>
        <b>↗</b>
      </div>
      {children}
    </div>
  );
}

function CompanionMock() {
  return (
    <BrowserFrame label="feelings.buddy / conversation">
      <div className="companion-ui">
        <aside>
          <span className="app-symbol">f.</span>
          <i className="active" /><i /><i />
          <small>NP</small>
        </aside>
        <div className="chat-ui">
          <header><div><i>☀</i><span><strong>Sol</strong><small>practical companion</small></span></div><b>•••</b></header>
          <div className="chat-main">
            <span className="time-stamp">TODAY, 10:42</span>
            <p className="bubble theirs">What’s sitting heavy today?</p>
            <p className="bubble mine">I know what to do. I just can’t get myself to start.</p>
            <p className="bubble theirs">Then let’s make the first step small enough to feel almost silly.</p>
            <div className="typing"><i /><i /><i /></div>
          </div>
          <footer><span>Write what’s on your mind…</span><button type="button" tabIndex="-1">↑</button></footer>
        </div>
        <div className="mood-panel">
          <span>CONVERSATION TONE</span>
          <div className="mood-orb"><i /></div>
          <strong>Grounded</strong>
          <p>Listening first.<br />Solving second.</p>
        </div>
      </div>
    </BrowserFrame>
  );
}

function ForecastMock() {
  return (
    <BrowserFrame label="energy.forecast / victoria">
      <div className="forecast-ui">
        <header><span className="app-symbol">e.</span><div className="forecast-nav">Overview <b>Forecast</b> Models</div><i>24 AUG 2026</i></header>
        <div className="forecast-title"><span><small>NEXT 24 HOURS</small><strong>12.8 <i>GW</i></strong></span><p><i /> Within expected range</p></div>
        <div className="chart-wrap">
          <div className="chart-labels"><span>15</span><span>10</span><span>5</span><span>0</span></div>
          <svg viewBox="0 0 760 260" role="img" aria-label="Electricity forecast chart">
            <defs>
              <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#5a63e8" stopOpacity=".28" />
                <stop offset="1" stopColor="#5a63e8" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path className="area" d="M0,215 C60,190 85,126 145,143 C212,162 226,199 295,174 C353,153 382,81 445,97 C506,114 532,150 584,110 C645,63 685,71 760,28 L760,260 L0,260 Z" />
            <path className="main-line" d="M0,215 C60,190 85,126 145,143 C212,162 226,199 295,174 C353,153 382,81 445,97 C506,114 532,150 584,110 C645,63 685,71 760,28" />
            <path className="compare-line" d="M0,229 C78,218 90,155 154,161 C218,170 244,217 310,191 C374,166 395,117 454,117 C520,116 541,169 600,131 C663,91 700,100 760,63" />
          </svg>
          <div className="chart-times"><span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>24:00</span></div>
        </div>
        <div className="model-row">
          {["CATBOOST", "XGBOOST", "LSTM", "ARIMA"].map((name, index) => (
            <div key={name}><span>{name}</span><strong>{[94, 91, 88, 84][index]}%</strong><i style={{ width: `${[94, 91, 88, 84][index]}%` }} /></div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

function SnapTripMock() {
  return (
    <BrowserFrame label="snaptrip / visual search">
      <div className="snaptrip-ui">
        <div className="landscape">
          <div className="sun" /><div className="mountain far" /><div className="mountain near" />
          <div className="scan-frame"><i /><i /><i /><i /><span>SCANNING PLACE</span></div>
          <div className="match-pill"><i /><span><small>BEST MATCH</small><strong>Coorg, Karnataka</strong></span><b>94%</b></div>
        </div>
        <aside>
          <span className="app-symbol">s.</span>
          <div><small>VISUAL DISCOVERY</small><h4>Show me where<br />you want to go.</h4></div>
          <p>Upload an image. SnapTrip finds places that look and feel like it.</p>
          <span className="mock-action">Choose another image <ArrowRight size={14} /></span>
          <footer><span>OpenCV match</span><span>18 results</span></footer>
        </aside>
      </div>
    </BrowserFrame>
  );
}

function FreelancerMock() {
  return (
    <BrowserFrame label="freelancer / workspace">
      <div className="freelancer-ui">
        <aside><span className="app-symbol">f.</span><i className="active">⌂</i><i>◎</i><i>□</i><i>◌</i><small>NP</small></aside>
        <div className="freelancer-main">
          <header><div><small>MONDAY, 24 AUGUST</small><h4>Good morning, Parthiv.</h4></div><span className="mock-action">+ Post a project</span></header>
          <div className="board-stats"><span><small>OPEN PROJECTS</small><b>08</b></span><span><small>IN PROGRESS</small><b>03</b></span><span><small>COMPLETED</small><b>24</b></span></div>
          <div className="board-heading"><strong>Recommended for you</strong><span>View all →</span></div>
          <div className="job-grid">
            {[
              ["Backend API for analytics", "Python · Flask", "₹45k—60k"],
              ["React dashboard redesign", "React · UI", "₹30k—45k"],
              ["Image matching prototype", "OpenCV · ML", "₹55k—75k"],
            ].map(([title, skill, price], index) => (
              <article key={title}><span>0{index + 1}</span><h5>{title}</h5><p>{skill}</p><footer><b>{price}</b><i>↗</i></footer></article>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

function ProjectVisual({ id }) {
  if (id === "companion") return <CompanionMock />;
  if (id === "forecast") return <ForecastMock />;
  if (id === "snaptrip") return <SnapTripMock />;
  return <FreelancerMock />;
}

function Project({ project, index }) {
  return (
    <article className={`project project-${project.tone} ${index % 2 ? "project-reverse" : ""}`}>
      <div className="project-board-bar">
        <span><i /> PROJECT ARTBOARD {project.number}</span>
        <small>{project.type}</small>
        <b>DRAG YOUR EYES →</b>
      </div>
      <Reveal className="project-visual">
        <ProjectVisual id={project.id} />
      </Reveal>
      <Reveal className="project-copy" delay={0.08}>
        <span className="project-index">{project.number} / 04</span>
        <p className="project-question">“{project.question}”</p>
        <h3>{project.title}</h3>
        <span className="project-type">{project.type}</span>
        <p className="project-description">{project.copy}</p>
        <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <a href={project.href} target="_blank" rel="noreferrer">{project.link} <ArrowUpRight size={15} /></a>
      </Reveal>
    </article>
  );
}

function Work() {
  return (
    <section id="work" className="work page-width">
      <Reveal className="work-title">
        <p className="micro-label">SELECTED WORK</p>
        <h2>A few questions<br />I turned into <em>products.</em></h2>
        <span>Four builds. Four different layers of the stack.</span>
      </Reveal>
      <div className="projects">
        {projects.map((project, index) => <Project key={project.id} project={project} index={index} />)}
      </div>
    </section>
  );
}

function PipelineGame() {
  const correct = ["input", "model", "api", "product"];
  const [chosen, setChosen] = useState([]);
  const [message, setMessage] = useState("Start where the data starts.");
  const [shake, setShake] = useState(0);

  const select = (id) => {
    if (chosen.includes(id) || chosen.length === correct.length) return;
    if (correct[chosen.length] === id) {
      const next = [...chosen, id];
      setChosen(next);
      setMessage(next.length === correct.length ? "System online. That’s the whole trick." : "Good. What needs it next?");
    } else {
      setMessage("Not quite—follow the data, not the interface.");
      setShake((value) => value + 1);
    }
  };

  const reset = () => {
    setChosen([]);
    setMessage("Start where the data starts.");
  };

  const complete = chosen.length === correct.length;

  return (
    <section id="play" className="play page-width">
      <Reveal className="play-copy">
        <p className="micro-label">A TINY SYSTEMS BREAK</p>
        <h2>Make it <em>work.</em></h2>
        <p>Connect the four layers in the order data travels. There is one clean path from an idea to a living product.</p>
      </Reveal>
      <Reveal className="pipeline-shell" delay={0.08}>
        <header>
          <span><i className={complete ? "online" : ""} /> SYSTEMS PLAYGROUND</span>
          <button type="button" onClick={reset}><RotateCcw size={14} /> Reset</button>
        </header>
        <motion.div
          className="pipeline-canvas"
          animate={shake ? { x: shake % 2 ? [0, -5, 5, -3, 3, 0] : [0, 5, -5, 3, -3, 0] } : { x: 0 }}
          transition={{ duration: 0.32 }}
        >
          <div className="pipeline-line"><i style={{ "--progress": `${Math.max(0, chosen.length - 1) / 3}` }} /></div>
          {[
            ["product", "04", "PRODUCT", "the thing people use"],
            ["input", "01", "INPUT", "where the signal begins"],
            ["api", "03", "API", "how the pieces speak"],
            ["model", "02", "MODEL", "where patterns become output"],
          ].map(([id, number, name, caption]) => {
            const selectedIndex = chosen.indexOf(id);
            return (
              <button
                key={id}
                type="button"
                className={chosen.includes(id) ? "selected" : ""}
                aria-pressed={chosen.includes(id)}
                onClick={() => select(id)}
              >
                <span>{selectedIndex >= 0 ? <Check size={14} /> : "?"}</span>
                <strong>{name}</strong>
                <small>{caption}</small>
              </button>
            );
          })}
        </motion.div>
        <footer className={complete ? "complete" : ""} role="status" aria-live="polite"><span>{complete ? "●" : "○"}</span>{message}</footer>
      </Reveal>
    </section>
  );
}

function Journey() {
  return (
    <section className="journey page-width">
      <Reveal className="journey-heading">
        <p className="micro-label">WHERE I’VE BEEN</p>
        <h2>The route<br /><em>so far.</em></h2>
      </Reveal>
      <Reveal className="journey-board">
        <header>
          <span><i /> CAREER ROUTE / LIVE MAP</span>
          <small>A path made by following useful questions.</small>
        </header>
        <div className="journey-map">
          <svg aria-hidden="true" viewBox="0 0 1000 430" preserveAspectRatio="none">
            <path d="M80 300 C220 390 280 110 455 205 S690 370 900 112" />
          </svg>
          <span className="journey-start">START / 2024</span>
          <span className="journey-now">YOU ARE HERE ↗</span>
          {journey.slice().reverse().map((item, index) => (
            <motion.article
              className={`journey-card journey-card-${index + 1} ${item.date === "NOW" ? "is-now" : ""}`}
              key={item.place}
              initial={{ opacity: 0, y: 24, rotate: index === 1 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: index === 1 ? -1 : 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -8, rotate: 0 }}
            >
              <div><span>{item.date}</span><i>{item.date === "NOW" ? "LIVE" : `0${index + 1}`}</i></div>
              <small>{item.location}</small>
              <h3>{item.role}</h3>
              <strong>{item.place}</strong>
              <p>{item.note}</p>
            </motion.article>
          ))}
          <div className="education-ticket">
            <span>BEFORE THE ROUTE</span>
            <strong>B.Tech · Computer Science</strong>
            <p>GITAM University · 2021—2025 · 8.57 CGPA</p>
          </div>
        </div>
      </Reveal>
      <div className="journey-note">
        <span>THE PATTERN</span>
        <p>Learn a layer. Build with it. Find the next layer underneath.</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid" aria-hidden="true" />
      <div className="footer-stickers" aria-hidden="true">
        <span>CURIOUS<br />BY DEFAULT</span>
        <span>OPEN TO<br />GOOD QUESTIONS</span>
        <i>NP↗</i>
      </div>
      <div className="page-width footer-inner">
        <Reveal className="footer-title">
          <p className="micro-label">ONE MORE QUESTION</p>
          <h2>What could we<br /><em>build together?</em></h2>
          <p className="footer-aside">No pitch deck required. A rough idea is a perfectly good place to start.</p>
        </Reveal>
        <Reveal className="footer-contact" delay={0.08}>
          <header><span><i /> AVAILABLE FOR A GOOD CONVERSATION</span><small>BLR / IST</small></header>
          <div className="footer-signal" aria-hidden="true"><i /><i /><i /><span>HELLO</span></div>
          <p>A thoughtful product, an ambitious system, or just an interesting conversation—I’m listening.</p>
          <a className="footer-email" href={contact.email}>parthivvarati@gmail.com <ArrowUpRight /></a>
          <div className="footer-socials">
            <a href={contact.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
            <a href={contact.email}><Mail size={16} /> Email</a>
          </div>
        </Reveal>
      </div>
      <div className="page-width footer-bottom"><span>© {new Date().getFullYear()} Naga Parthiv</span><a href="#top">Back to top ↑</a><span>Built with code + curiosity</span></div>
    </footer>
  );
}

function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 150, damping: 30, restDelta: 0.001 });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return undefined;
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
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

  return (
    <>
      <motion.div className="reading-progress" style={{ scaleX: progress }} />
      <Nav />
      <main>
        <Hero />
        <Story />
        <BridgeTransition />
        <BuilderGame />
        <Work />
        <Journey />
      </main>
      <Footer />
    </>
  );
}

export default App;
