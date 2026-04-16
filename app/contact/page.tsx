export default function ContactPage() {
  return (
    <div className="space-y-8">
      <section className="card shine-card p-6 md:p-8">
        <p className="section-kicker">CONTACT</p>
        <h1 className="mt-3 text-3xl font-extrabold text-white md:text-5xl">
          İletişim
        </h1>

        <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
          TETA League topluluğu, duyurular, canlı yayınlar ve sosyal medya
          bağlantılarına aşağıdan ulaşabilirsin.
        </p>
      </section>

      <section className="grid gap-5 xl:grid-cols-3">
        <article className="contact-card-premium shine-card">
          <p className="section-kicker">DISCORD</p>

          <h2 className="mt-3 text-2xl font-extrabold text-white">
            Topluluk Merkezi
          </h2>

          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            Lig duyuruları, maç organizasyonları, yönetim iletişimi ve takım
            sohbetleri için resmi Discord sunucusu.
          </p>

          <div className="mt-8">
            <a
              href="https://discord.gg/cn2chtc3"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Discord'a Katıl
            </a>
          </div>
        </article>

        <article className="contact-card-premium shine-card">
          <p className="section-kicker">INSTAGRAM</p>

          <h2 className="mt-3 text-2xl font-extrabold text-white">
            Sosyal Medya
          </h2>

          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            Duyurular, transfer haberleri, maç sonuçları ve lig içerikleri için
            resmi Instagram hesabı.
          </p>

          <div className="mt-8">
            <a
              href="https://www.instagram.com/tetaleague/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Instagram'a Git
            </a>
          </div>
        </article>

        <article className="contact-card-premium shine-card">
          <p className="section-kicker">LIVE STREAM</p>

          <h2 className="mt-3 text-2xl font-extrabold text-white">
            Kick Yayınları
          </h2>

          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            Canlı maç yayınları, özel içerikler ve topluluk yayınları için resmi
            Kick kanalı.
          </p>

          <div className="mt-8">
            <a
              href="https://kick.com/dorukzin"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Kick Kanalı
            </a>
          </div>
        </article>
      </section>

      <section className="card shine-card p-6 md:p-8">
        <p className="section-kicker">LEAGUE MANAGEMENT</p>

        <h2 className="mt-3 text-2xl font-extrabold text-white md:text-3xl">
          Yönetim Bilgilendirmesi
        </h2>

        <p className="mt-5 max-w-3xl text-sm leading-8 text-[var(--muted)]">
          Fikstür güncellemeleri, maç saatleri, takım değişiklikleri, cezalar ve
          resmi açıklamalar yalnızca TETA League yönetimi tarafından duyurulur.
          Güncel gelişmeler için Discord ve Instagram kanallarını takip etmen
          önerilir.
        </p>
      </section>
    </div>
  );
}