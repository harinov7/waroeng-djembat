import { useState } from 'react';
import Reveal from './Reveal';

import nasi_timbel from '../assets/nasi_timbel.avif'
import pepes_ikan_mas from '../assets/pepes_ikan_mas.avif'
import karedok_sunda from '../assets/karedok_sunda.avif'
import sayur_asem from '../assets/sayur_asem.avif'
import lalapan from '../assets/lalapan.avif'
import es_cendol_gula_aren from '../assets/es_cendol_gula_aren.avif'
import es_kelapa_muda from '../assets/es_kelapa_muda.avif'


const CATEGORIES = [
  { id: 'semua', label: 'Semua' },
  { id: 'utama', label: 'Makanan utama' },
  { id: 'sayur', label: 'Sayur & lalapan' },
  { id: 'minum', label: 'Minuman' },
];

const MENU_ITEMS = [
  { cat: 'utama', emoji: nasi_timbel, name: 'Nasi Timbel Komplit', desc: 'Nasi bungkus daun pisang, ayam goreng, tahu tempe, lalap, dan sambal dadak.', price: 'Rp 28.000' },
  { cat: 'utama', emoji: pepes_ikan_mas, name: 'Pepes Ikan Mas', desc: 'Ikan mas berbumbu rempah, dikukus dalam daun pisang hingga harum.', price: 'Rp 30.000' },
  { cat: 'sayur', emoji: karedok_sunda, name: 'Karedok Sunda', desc: 'Sayuran mentah segar disiram bumbu kacang khas Sunda.', price: 'Rp 18.000' },
  { cat: 'sayur', emoji: sayur_asem, name: 'Sayur Asem Segar', desc: 'Kuah asam segar berisi kacang panjang, jagung, dan labu siam.', price: 'Rp 15.000' },
  { cat: 'sayur', emoji: lalapan, name: 'Lalapan Komplit', desc: 'Timun, kemangi, daun selada, dan terong bulat dengan sambal.', price: 'Rp 10.000' },
  { cat: 'minum', emoji: es_cendol_gula_aren, name: 'Es Cendol Gula Aren', desc: 'Cendol hijau dengan santan segar dan gula aren asli.', price: 'Rp 12.000' },
  { cat: 'minum', emoji: es_kelapa_muda, name: 'Es Kelapa Muda', desc: 'Kelapa muda segar dengan sirup gula aren, disajikan dingin.', price: 'Rp 15.000' },
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
              <article className="h-full flex flex-col gap-3.5 rounded-2xl border border-brand-line bg-brand-card p-6">
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
