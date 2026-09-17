import { useEffect, useState } from 'react';
import Reveal from './Reveal';

const REVIEWS = [{
  stars: '★★★★★',
  quote: 'Nyaman dan enak gaess',
  name: 'Puri Lavender3',
  date: '4 minggu lalu',
}, {
  stars: '★★★★★',
  quote: 'Sangat recomanded utk makan disini untuk rasa dijamin mantap, vairian menu jg banyak harga relatif murah...',
  name: 'Rina Astuti',
  date: 'sebulan lalu',
}, {
  stars: '★★★★☆',
  quote: 'Nyari lalapan daun Pohpohan dan nemu di warun nasi djembat ini & memang ada tersedia banyak. Opsi menu lauk juga ada banyak macam nya mulai dari ayam, bebek, ikan dll.',
  name: 'Zapir Ria',
  date: '2 bulan lalu',
}, {
  stars: '★★★★★',
  quote: 'Enak, murah, suasananya nyaman. Pas buat transit kalo lagi kena macet',
  name: 'Taufik Zuhrianto',
  date: '5 bulan lalu',
}, {
  stars: '★★★★★',
  quote: 'Enak, lalapannya enak segar fresh, sayang sambel dadakan nya ngak pas dan ngak ada ikan mas goreng, tempat nyaman dan tempat parkir luas',
  name: 'Jenny Majo',
  date: '8 bulan lalu',
}];

// Cards visible per page: 1 on mobile, 2 on tablet, 3 on desktop.
function useItemsPerPage() {
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const mdQuery = window.matchMedia('(min-width: 768px)');
    const lgQuery = window.matchMedia('(min-width: 1024px)');

    const update = () => {
      if (lgQuery.matches) setItemsPerPage(3);
      else if (mdQuery.matches) setItemsPerPage(2);
      else setItemsPerPage(1);
    };

    update();
    mdQuery.addEventListener('change', update);
    lgQuery.addEventListener('change', update);
    return () => {
      mdQuery.removeEventListener('change', update);
      lgQuery.removeEventListener('change', update);
    };
  }, []);

  return itemsPerPage;
}

export default function Reviews() {
  const itemsPerPage = useItemsPerPage();
  const pageCount = Math.max(1, Math.ceil(REVIEWS.length / itemsPerPage));
  const [page, setPage] = useState(0);

  // keep page in range if the viewport (and so pageCount) changes
  useEffect(() => {
    setPage((p) => Math.min(p, pageCount - 1));
  }, [pageCount]);

  const goTo = (index) => setPage(Math.max(0, Math.min(index, pageCount - 1)));

  return (
    <section id="ulasan" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <Reveal className="flex flex-wrap items-end justify-between gap-6 mb-9">
          <div>
            <span className="block font-display italic text-brand-red mb-2.5">Kata pelanggan</span>
            <h2 className="font-display font-semibold text-brand-gold text-3xl md:text-4xl">
              Ulasan dari yang sudah mampir
            </h2>
          </div>

          {pageCount > 1 && (
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => goTo(page - 1)}
                disabled={page === 0}
                aria-label="Ulasan sebelumnya"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-line text-brand-ink transition-colors hover:border-brand-red hover:text-brand-red disabled:opacity-30 disabled:hover:border-brand-line disabled:hover:text-brand-ink"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => goTo(page + 1)}
                disabled={page === pageCount - 1}
                aria-label="Ulasan berikutnya"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-line text-brand-ink transition-colors hover:border-brand-red hover:text-brand-red disabled:opacity-30 disabled:hover:border-brand-line disabled:hover:text-brand-ink"
              >
                →
              </button>
            </div>
          )}
        </Reveal>

        {/* Viewport: fixed width via the max-w-6xl parent, x-axis motion happens
            by translating the track — overflow-hidden means there is no manual
            drag/wheel scrolling, only the buttons (or dots) move it. */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {Array.from({ length: pageCount }).map((_, pageIndex) => (
              <div
                key={pageIndex}
                className="grid w-full flex-shrink-0 grid-cols-1 gap-5 px-0.5 sm:grid-cols-2 lg:grid-cols-3"
              >
                {REVIEWS.slice(pageIndex * itemsPerPage, pageIndex * itemsPerPage + itemsPerPage).map((r) => (
                  <article
                    key={r.name}
                    className="h-full rounded-2xl border border-brand-line bg-brand-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-md"
                  >
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
                        <span className="text-xs text-brand-inkSoft">{r.date}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>

        {pageCount > 1 && (
          <div className="mt-7 flex justify-center gap-2">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Ke halaman ulasan ${i + 1}`}
                aria-current={i === page}
                className={`h-2 rounded-full transition-all ${i === page ? 'w-6 bg-brand-red' : 'w-2 bg-brand-line hover:bg-brand-red/50'
                  }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
