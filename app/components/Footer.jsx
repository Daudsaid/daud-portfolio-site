export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0F172A] text-slate-200">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm md:flex-row">
        <p className="text-slate-200/80">© {new Date().getFullYear()} Daud Abdi. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/Daudsaid" className="transition hover:text-white" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/daudabdi0506" className="transition hover:text-white" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:daudsaidabdi@gmail.com" className="transition hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
