import logo from '../assets/logo.jpg';
import Reveal from './Reveal';
import image_01 from '../assets/1.avif'

const KAWUNG_PATTERN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'><g fill='none' stroke='%23D42B2B' stroke-width='1' opacity='0.14'><ellipse cx='30' cy='19' rx='9' ry='13'/><ellipse cx='30' cy='41' rx='9' ry='13'/><ellipse cx='19' cy='30' rx='13' ry='9'/><ellipse cx='41' cy='30' rx='13' ry='9'/></g></svg>\")";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden px-6 pt-16 pb-14 md:pt-20"
      style={{ backgroundImage: KAWUNG_PATTERN }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <Reveal>
          <span className="block font-display italic text-brand-red mb-2.5">
            Sejak dari tepi jembatan
          </span>
          <h1 className="font-display font-semibold text-brand-ink text-4xl md:text-5xl leading-tight">
            Hangatnya masakan Sunda, <em className="italic text-brand-red">di ujung jembatan</em> jalan.
          </h1>
          <p className="mt-5 mb-8 max-w-[46ch] text-brand-inkSoft text-lg">
            Warung Djembat menyajikan nasi timbel, ikan bakar, dan lalapan segar dengan resep
            rumahan yang diwariskan turun-temurun — tempat singgah yang jujur untuk perut kenyang
            dan hati tenang.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a
              href="#menu"
              className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3.5 font-semibold text-white hover:bg-brand-redDeep hover:-translate-y-0.5 transition-all"
            >
              Lihat menu
            </a>
            <a
              href="#lokasi"
              className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-brand-red px-6 py-3.5 font-semibold text-brand-red hover:bg-brand-red hover:text-white hover:-translate-y-0.5 transition-all"
            >
              Cek lokasi
            </a>
          </div>
        </Reveal>

        <Reveal delay={150} className="mx-auto max-w-xs md:max-w-sm">
          <div className="rotate-1 rounded-2xl bg-white p-4 shadow-xl shadow-brand-ink/10 border border-brand-line">
            <img
              src={image_01}
              alt="Waroeng Nasi Djembat — Masakan Sunda Asli"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
