import Reveal from './Reveal';

const LINKS = [{
  title: 'Pesan via WhatsApp',
  link: 'https://wa.me/6281315933464?text=Halo+Admin+Papatong%2C+saya+ingin+pesan+%2F+tanya+menu+yang+tersedia'
}, {
  title: 'Instagram @waroengnasidjembat',
  link: 'https://www.instagram.com/waroengnasidjembat/'
}, {
  title: 'Selengkapnya',
  link: 'http://linktr.ee/waroengnasidjembat?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAad6daEaXBaodZHkreSEZqGEDv6g6fVZXitdvtueZWzXVh4k8Rr_oTpyhASEeg_aem_X7vEdDusy1Y4LQw2N-jqNg'
}
];

export default function Contact() {
  return (
    <section id="contact" className="bg-brand-ink px-6 py-24 text-brand-white">
      <div className="max-w-6xl mx-auto text-center">
        <Reveal>
          <span className="block font-display italic text-[#f0b0b0] mb-2.5">Sambungan langsung</span>
          <h2 className="font-display font-semibold text-3xl md:text-4xl">Pesan atau sapa kami di sini</h2>
        </Reveal>

        <div className="mx-auto mt-8 flex max-w-[520px] flex-col gap-3.5">
          {LINKS.map((e, i) => (
            <Reveal key={i} delay={i * 80}>
              <a
                href={e.link}
                target='_blank'
                rel='noopener noreferrer'
                className="flex items-center justify-between rounded-xl border border-white/15 bg-white/5 px-6 py-4 font-semibold hover:bg-brand-red/30 hover:translate-x-1 transition-all"
              >
                <span>{e.title}</span>
                <span className="opacity-60">↗</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
