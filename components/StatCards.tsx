const stats = [
  { label: "Toplam Takım", value: "12", sub: "Alpha + Delta" },
  { label: "Toplam Maç", value: "66", sub: "Sezon genelinde" },
  { label: "Toplam Gol", value: "214", sub: "Hücum verisi" },
  { label: "Toplam Oyuncu", value: "48", sub: "Aktif oyuncular" },
];

export default function StatCards() {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.label}
          className="card relative overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-400/30"
        >
          <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-sky-400/5 blur-2xl" />
          <p className="text-sm uppercase tracking-wide text-slate-400">
            {item.label}
          </p>
          <p className="mt-4 text-5xl font-extrabold leading-none text-white">
            {item.value}
          </p>
          <p className="mt-3 text-sm text-slate-400">{item.sub}</p>
        </div>
      ))}
    </section>
  );
}