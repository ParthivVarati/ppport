export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-gradient-to-t from-slate-950 via-slate-950/95 to-transparent">
      <div className="mx-auto max-w-5xl px-4 py-5 flex flex-col gap-2 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} Naga Parthiv Varma Varati. All rights reserved. • Built
          with React, Vite, Tailwind & Framer Motion.
        </p>
        
      </div>
    </footer>
  );
}
