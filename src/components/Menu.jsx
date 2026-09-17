import { useState } from 'react';
import Reveal from './Reveal';

import ayam_kampung_bakar from '../assets/ayam_kampung_bakar.avif'
import ayam_kampung_goreng from '../assets/ayam_kampung_goreng.avif'
import gurame_goreng from '../assets/gurame_goreng.avif'
import gurame_pecak from '../assets/gurame_pecak.avif'
import gurame_pesmol from '../assets/gurame_pesmol.avif'
import es_campur from '../assets/es_campur.avif'
import es_lemon_tea from '../assets/es_lemon_tea.avif'


const CATEGORIES = [
  { id: 'semua', label: 'Semua' },
  { id: 'ayam', label: 'Ayam' },
  { id: 'ikan', label: 'Ikan' },
  { id: 'minuman', label: 'Minuman' },
];

const MENU_ITEMS = [
  { cat: 'ayam', emoji: ayam_kampung_bakar, name: 'Ayam Kampung Bakar', desc: 'diungkep dengan bumbu rempah tradisional lalu dipanggang di atas bara api, disajikan dengan olesan bumbu gurih manis.', price: 'Rp 33.000' },
  { cat: 'ayam', emoji: ayam_kampung_goreng, name: 'Ayam Kampung Goreng', desc: 'diungkep dengan bumbu rempah kuning hingga empuk, lalu digoreng garing untuk menghasilkan tekstur luar yang renyah dan gurih khas.', price: 'Rp 33.000' },
  { cat: 'ikan', emoji: gurame_goreng, name: 'Gurame Goreng', desc: 'ikan gurame segar yang dibumbui rempah seperti bawang putih, ketumbar, dan kunyit, lalu digoreng kering untuk menghasilkan tekstur luar yang renyah dengan daging ikan yang lembut dan gurih.', price: 'Rp 55.000' },
  { cat: 'ikan', emoji: gurame_pecak, name: 'Gurame Pecak', desc: 'Disiram dengan kuah pecak hangat bercita rasa gurih, pedas, dan segar yang kaya akan rempah seperti kencur, jahe, dan cabai.', price: 'Rp 65.000' },
  { cat: 'ikan', emoji: gurame_pesmol, name: 'Gurame Pesmol', desc: 'Disiram dengan kuah santan berbumbu kuning kaya rempah, bercita rasa gurih, asam, dan sedikit pedas dari irisan cabai serta belimbing wuluh.', price: 'Rp 60.000' },
  { cat: 'minuman', emoji: es_campur, name: 'Es Campur', desc: 'Es penutup manis yang berisi aneka isian seperti agar-agar, cincau, buah-buahan, dan kolang-kaling, disiram dengan kuah santan atau susu, air gula, serta es serut.', price: 'Rp 15.000' },
  { cat: 'minuman', emoji: es_lemon_tea, name: 'Es Lemon Tea', desc: 'minuman segar perpaduan antara teh hitam seduh dan perasan air lemon asli, disajikan dingin dengan es batu dan tambahan gula secukupnya.', price: 'Rp 12.000' },
];

export default function Menu() {
  const [activeCat, setActiveCat] = useState('semua');

  const visibleItems =
    activeCat === 'semua' ? MENU_ITEMS : MENU_ITEMS.filter((item) => item.cat === activeCat);

  return (
    <section id="menu" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <Reveal className="flex flex-wrap items-end justify-between gap-6 mb-9">
          <div>
            <span className="block font-display italic text-brand-red mb-2.5">Yang kami masak hari ini</span>
            <h2 className="font-display font-semibold text-brand-gold text-3xl md:text-4xl">
              Menu Warung Djembat
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCat(cat.id)}
                className={`rounded-full border-[1.5px] px-4.5 py-2.5 text-sm font-semibold transition-colors ${
                  activeCat === cat.id
                    ? 'border-brand-red text-brand-red bg-brand-red/5'
                    : 'border-brand-line text-brand-inkSoft hover:border-brand-red hover:text-brand-red'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item, i) => (
            <Reveal key={item.name} delay={(i % 3) * 90}>
              <article className="h-full flex flex-col gap-3.5 rounded-2xl border border-brand-line bg-brand-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex h-[65px] w-[65px] items-center justify-center rounded-full bg-gradient-to-br from-brand-red/10 to-brand-gold/10 text-3xl p-1">
                  <img src={item.emoji} alt="nasi_timbel" className='rounded-full aspect-square'/>
                </div>
                <h3 className="text-lg font-semibold text-brand-ink">{item.name}</h3>
                <p className="flex-1 text-sm text-brand-inkSoft">{item.desc}</p>
                <span className="font-display font-bold text-brand-red text-lg">{item.price}</span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
