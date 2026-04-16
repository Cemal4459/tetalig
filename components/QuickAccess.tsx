import Link from "next/link";

const items = [
  {
    title: "🏆 Puan Durumu",
    desc: "Alpha ve Delta grup sıralamalarını detaylı incele.",
    href: "/alpha-standings",
  },
  {
    title: "⚽ Gol Krallığı",
    desc: "En skorer oyuncuların güncel listesini görüntüle.",
    href: "/top-stats",
  },
  {
    title: "🎯 Asist Krallığı",
    desc: "Oyunu yönlendiren en üretken isimleri takip et.",
    href: "/top-stats",
  },
  {
    title: "📅 Fikstür",
    desc: "Haftalara göre maç sonuçları ve fikstür akışını gör.",
    href: "/alpha-fixtures",
  },
  {
    title: "👥 Takımlar",
    desc: "Tüm kulüpleri, kaptanları ve puan yapılarını keşfet.",
    href: "/alpha-teams",
  },
];

export default function QuickAccess() {
  return (
    <section>
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-sky-300">
            TETA League
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-white">
            Hızlı Erişim Alanı
          </h2>
        </div>
        <p className="hidden max-w-xl text-right text-sm leading-6 text-slate-400 md:block">
          Ligde ihtiyacın olan tüm temel verilere hızlıca ulaş. Ana başlıklar
          burada, detaylı içerikler ise ilgili sayfalarda.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="card group relative overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-400/30"
          >
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-sky-400/5 blur-2xl transition group-hover:bg-sky-400/10" />
            <h3 className="text-lg font-bold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              {item.desc}
            </p>
            <div className="mt-5 text-sm font-semibold text-sky-300">
              Sayfaya Git →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}