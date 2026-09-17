import Reveal from './Reveal';
import logo from '../assets/logo.jpg';

const STATS = [
  { value: '2011', label: 'Mulai berjualan' },
  { value: '40+', label: 'Menu rumahan' },
  { value: '80', label: 'Kursi lesehan & meja' },
];

export default function Profile() {
  return (
    <section id="profil" className="bg-brand-card border-y border-brand-line px-6 py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[0.85fr_1.15fr] gap-14 items-center">
        <Reveal className="mx-auto max-w-xs md:max-w-none" aria-hidden="true">
          <div>
            <img src={logo} alt="Logo Waroeng Djembat" className='shadow-lg rounded-md w-[clamp(250px,40vw,350px)]'/>
          </div>
          
        </Reveal>

        <Reveal delay={150}>
          <span className="block font-display italic text-brand-red mb-2.5">Cerita singkat</span>
          <h2 className="font-display font-semibold text-brand-gold text-3xl md:text-4xl">
            Warung Sunda, cerita panjang.
          </h2>
          <p className="mt-5 mb-8 max-w-[60ch] text-brand-inkSoft">
            Berawal dari lapak sederhana di dekat jembatan penyeberangan kampung, Warung Djembat
            tumbuh menjadi tempat makan favorit warga sekitar. Kami percaya masakan Sunda terbaik
            lahir dari dapur rumah — bumbu diulek langsung, sayur dipetik pagi hari, dan sambal
            dibuat sesuai pesanan. Setiap meja di sini adalah ajakan untuk duduk santai, seperti
            mampir ke rumah saudara.
          </p>
          <div className="flex flex-wrap border-t border-brand-line">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex-1 min-w-[45%] border-r last:border-r-0 border-brand-line pt-5 px-4 pb-2">
                <b className="block font-display font-semibold text-brand-red text-2xl">{stat.value}</b>
                <span className="text-sm text-brand-inkSoft">{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
