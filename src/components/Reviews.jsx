import Reveal from './Reveal';

const REVIEWS = [
  {
    stars: '★★★★★',
    quote: 'Nasi timbelnya juara, sambalnya nampol banget. Rasanya benar-benar seperti masakan rumah.',
    name: 'Rina Yuliani',
    role: 'Warga sekitar',
  },
  {
    stars: '★★★★★',
    quote: 'Suasananya adem dan santai, cocok buat makan siang bareng keluarga tiap akhir pekan.',
    name: 'Deni Setiawan',
    role: 'Pelanggan tetap',
  },
  {
    stars: '★★★★☆',
    quote: 'Ikan guramenya garing di luar, empuk di dalam. Porsinya juga pas untuk berdua.',
    name: 'Fitri Handayani',
    role: 'Pengunjung dari Bandung',
  },
];

export default function Reviews() {
  return (
    <section id="ulasan" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <span className="block font-display italic text-brand-red mb-2.5">Kata pelanggan</span>
          <h2 className="font-display font-semibold text-brand-gold text-3xl md:text-4xl mb-9">
            Ulasan dari yang sudah mampir
          </h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 100}>
              <article className="h-full rounded-2xl border border-brand-line bg-brand-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-md">
                <div className="text-brand-red tracking-widest mb-3">{r.stars}</div>
                <p className="font-display italic text-brand-ink mb-5 leading-relaxed">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-red font-display font-bold text-white">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <b className="block text-sm">{r.name}</b>
                    <span className="text-xs text-brand-inkSoft">{r.role}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
