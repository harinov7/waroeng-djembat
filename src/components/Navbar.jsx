import { useEffect, useState } from 'react';
import logo from '../assets/logo.jpg';

const NAV_LINKS = [
  { href: '#profil', label: 'Profil' },
  { href: '#menu', label: 'Menu' },
  { href: '#ulasan', label: 'Ulasan' },
  { href: '#lokasi', label: 'Lokasi' },
  { href: '#linktree', label: 'Tautan' },
];

export default function Navbar({ onOpenSidebar }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 bg-brand-ink text-brand-white transition-shadow duration-300 ${
        scrolled ? 'shadow-lg shadow-black/15' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <a href="#beranda" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Waroeng Nasi Djembat"
            className="h-11 w-11 rounded-md object-cover bg-white p-0.5 shadow-sm"
          />
          <span className="font-display font-semibold text-lg leading-tight">
            Waroeng Nasi Djembat
            <span className="block font-body font-medium text-[0.68rem] tracking-wide text-brand-red/90">
              Masakan Sunda Asli
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          <ul className="flex gap-8 list-none m-0 p-0">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-semibold text-sm text-brand-white/80 border-b-2 border-transparent hover:text-brand-red hover:border-brand-red transition-colors pb-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="http://linktr.ee/waroengnasidjembat?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAad6daEaXBaodZHkreSEZqGEDv6g6fVZXitdvtueZWzXVh4k8Rr_oTpyhASEeg_aem_X7vEdDusy1Y4LQw2N-jqNg" target='_blank' rel='noopener noreferrer'
            className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-2.5 font-semibold text-sm text-white hover:bg-brand-redDeep hover:-translate-y-0.5 transition-all"
          >
            Pesan Sekarang
          </a>
        </nav>

        <button
          type="button"
          aria-label="Buka menu navigasi"
          aria-expanded="false"
          onClick={onOpenSidebar}
          className="lg:hidden flex h-11 w-11 items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
        >
          <span className="relative block h-0.5 w-6 bg-white">
            <span className="absolute -top-2 left-0 h-0.5 w-6 bg-white" />
            <span className="absolute top-2 left-0 h-0.5 w-6 bg-white" />
          </span>
        </button>
      </div>
    </header>
  );
}
