import logo from '../assets/logo.jpg';

export default function Footer() {
  return (
    <footer className="border-t border-brand-line px-6 py-9">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <img src={logo} alt="Waroeng Nasi Djembat" className="h-8 w-8 rounded object-cover" />
          <span className="font-display font-semibold text-brand-ink">Waroeng Nasi Djembat</span>
        </div>
        <span className="text-sm text-brand-inkSoft">
          © 2026 Waroeng Nasi Djembat, Masakan Khas Sunda.
        </span>
      </div>
    </footer>
  );
}
