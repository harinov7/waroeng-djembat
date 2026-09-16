import Reveal from './Reveal';

export default function Location() {
  return (
    <section id="lokasi" className="bg-brand-card border-t border-brand-line px-6 py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <span className="block font-display italic text-brand-red mb-2.5">Datang langsung</span>
          <h2 className="font-display font-semibold text-brand-gold text-3xl md:text-4xl">
            Temukan kami di Bojong Rangkas
          </h2>
          <dl className="my-6 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2.5">
            <dt className="font-display font-bold text-brand-gold whitespace-nowrap">Alamat</dt>
            <dd className="m-0 text-brand-inkSoft">
              Jl. Wr. Borong No.KM. 12 No. 1, Bojong Rangkas, Kec. Ciampea, Kabupaten Bogor, Jawa Barat 16620
            </dd>
            <dt className="font-display font-bold text-brand-gold whitespace-nowrap">Jam buka</dt>
            <dd className="m-0 text-brand-inkSoft">Setiap hari, 09.00 – 21.00 WIB</dd>
            <dt className="font-display font-bold text-brand-gold whitespace-nowrap">Telepon</dt>
            <dd className="m-0 text-brand-inkSoft">0822-1234-5678</dd>
          </dl>
          <a
            href="https://maps.app.goo.gl/ngXon47xg4mJGMex5" target='_blank' rel='noopener noreferrer'
            className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3.5 font-semibold text-white hover:bg-brand-redDeep hover:-translate-y-0.5 transition-all"
          >
            Buka di Google Maps
          </a>
        </Reveal>

        <Reveal delay={150} aria-hidden="true">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-brand-line bg-gradient-to-br from-[#fdeeee] to-brand-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.7201272668876!2d106.69887277412074!3d-6.5569716856110345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69db5dc21d362b%3A0x4ca0b1ea6c49b872!2sWarung%20Djembat%20Khas%20Sunda!5e0!3m2!1sid!2sid!4v1789571095479!5m2!1sid!2sid"
              className="w-full h-[400px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
