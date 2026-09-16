import logo from '../assets/logo.jpg';

const NAV_LINKS = [
  { href: '#profil', label: 'Profil' },
  { href: '#menu', label: 'Menu' },
  { href: '#ulasan', label: 'Ulasan' },
  { href: '#lokasi', label: 'Lokasi' },
  { href: '#linktree', label: 'Tautan' },
];

export default function Sidebar({ open, onClose }) {
  return (
    <>
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-brand-ink/50 transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />
      <aside
        aria-hidden={!open}
        className={`fixed top-0 right-0 z-50 h-full w-[min(320px,82vw)] bg-brand-card px-6 py-7 shadow-2xl flex flex-col gap-7 transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Waroeng Nasi Djembat" className="h-9 w-9 rounded-md object-cover" />
            <span className="font-display font-semibold text-brand-ink">Warung Djembat</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup menu"
            className="text-2xl leading-none text-brand-ink hover:text-brand-red transition-colors"
          >
            &times;
          </button>
        </div>

        <ul className="flex flex-col gap-1 list-none m-0 p-0">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="border-b border-brand-line">
              <a
                href={link.href}
                onClick={onClose}
                className="block py-3.5 font-semibold text-[1.05rem] text-brand-ink hover:text-brand-red transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#linktree"
          onClick={onClose}
          className="inline-flex justify-center items-center rounded-full bg-brand-red px-6 py-3 font-semibold text-white hover:bg-brand-redDeep transition-colors"
        >
          Pesan Sekarang
        </a>
      </aside>
    </>
  );
}
