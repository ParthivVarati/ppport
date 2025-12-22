import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV = ["home","experience","projects","skills","education","contact"];

export default function Navbar({ activeSection }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goto = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({behavior:'smooth', block:'start'});
    setOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all ${scrolled ? "backdrop-blur-md bg-[rgba(6,10,20,0.6)] border-b border-slate-800/60" : "bg-transparent"}`}>
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={()=>goto('home')}>
          <div className="relative">
            <div className="absolute -inset-1 rounded-full blur-md opacity-30 bg-gradient-to-r from-[rgba(0,194,255,0.12)] to-[rgba(124,58,237,0.12)]"></div>
            <div className="relative h-9 w-9 rounded-full flex items-center justify-center border border-slate-700 bg-card">
              <span className="text-sm font-semibold text-slate-100">P</span>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="text-xs text-slate-400 uppercase tracking-wider">Portfolio</div>
            <div className="text-sm font-semibold">Naga Parthiv Varma Varati</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {NAV.map((id) => (
            <button key={id} onClick={()=>goto(id)} className="relative px-1 py-1 uppercase tracking-wide text-[13px] text-slate-300">
              <span className={`${activeSection===id ? "text-[var(--primary)]" : ""}`}>{id}</span>
              <span className={`absolute left-0 -bottom-1 h-[2px] w-full origin-left bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] transition-transform ${activeSection===id ? "scale-x-100" : "scale-x-0"}`}></span>
            </button>
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setOpen(o=>!o)} className="p-2 rounded-md border border-slate-700 bg-card">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all ${open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"} overflow-hidden duration-300`}>
        <div className="mx-auto max-w-6xl px-4 pb-4 flex flex-col gap-2">
          {NAV.map(n => (
            <button key={n} onClick={()=>goto(n)} className={`text-left px-3 py-2 rounded-md ${activeSection===n ? "bg-slate-800 text-[var(--primary)]" : "text-slate-300"}`}>
              {n.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
