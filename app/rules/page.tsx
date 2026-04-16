const coreRules = [
  {
    id: "01",
    kicker: "SPORTSMANSHIP",
    title: "Saygı ve Oyun Disiplini",
    items: [
      "Teta League’de mücadele eden hiçbir takım veya oyuncu rakiplerine saygıda kusur edemez.",
      "Maçın düzenini bozacak tüm hareketler yasaktır.",
      "Free-kick sırasında kaleye oyuncu sokma veya yarı sahada uzun süre zamana oynama gibi hareketler yasak kapsamındadır.",
      "İtiraz durumunda karar hakkı TETA League yönetimindedir.",
    ],
  },
  {
    id: "02",
    kicker: "MATCH DAY",
    title: "Maç Günü ve Saatleri",
    items: [
      "Maç günü çarşamba olarak belirlenmiştir.",
      "Maçlar 22.00, 22.30 ve 23.00 saatlerinde oynanmalıdır.",
      "Rakipler anlaşırsa saat ileri veya geri alınabilir.",
      "Anlaşmazlık halinde maç saatinde sahada olan takım kazanır.",
      "Saat konusunda anlaşıldıktan sonra elzem durum yoksa en fazla 10 dakika gecikme yapılabilir.",
      "Bağlanma sorunu videolu kayıt ile sunulursa süre 15 dakikaya kadar uzatılabilir.",
      "Erteleme için ilk iletişimden sonra rakibin cevap verme süresi 48 saattir.",
    ],
  },
  {
    id: "03",
    kicker: "ROSTER",
    title: "Kadro ve Transfer Düzeni",
    items: [
      "İlk maçlar başlamadan ilk haftada oynayacak kadro yönetime iletilmiş olmalıdır.",
      "Bildirilmeyen oyuncu oynatılırsa oyuncuya sezonluk yasak uygulanır.",
      "Takıma ilk seferde 3 puan, ikinci seferde 9 puan silme, üçüncü seferde ligden ihraç cezası uygulanır.",
      "Transfer dönemleri dışında her devre için 4 transfer hakkı vardır.",
      "Haklar diğer döneme devredilemez.",
      "11. hafta ara transfer dönemidir.",
      "Ara transfer döneminde sınırsız transfer hakkı vardır.",
      "Kadro sınırı 25 oyuncudur.",
    ],
  },
  {
    id: "04",
    kicker: "SUBMISSION",
    title: "ID, Boy ve Performans Bildirimi",
    items: [
      "Maçta oynayacak oyuncuların lakap kısmında oyuncunun ID’si yazmalıdır.",
      "Farklı görülen ID’lerde önce maç tekrarı, sonrasında hükmen uygulanır.",
      "Her maçta ID listesi, boylar ve performans iletmek zorunludur.",
      "Bilgi verilmeyen 3 maç tespit edilirse takıma önce 3 puan ceza uygulanır.",
      "Sonraki ihlallerde ceza 3’ün katları şeklinde artar.",
    ],
  },
  {
    id: "05",
    kicker: "FORMAT",
    title: "Lig Formatı",
    items: [
      "10. ve 11. / 21. ve 22. haftaların denk geldiği maç günlerinde her takım o 2 maçı oynar.",
      "Geri kalan tüm haftalar 3 maç olarak oynanır.",
      "Erteleme talebi için erteleyen takım rakibinin tüm kaptan oyuncularına ulaşmalıdır.",
      "Tek kaptandan dönüş yeterli sayılır.",
      "2 hafta maçlara çıkmayan takım turnuvadan diskalifiye edilir.",
      "Sezon sonunda BALLONDOR ödülü tüm istatistiklere göre verilecektir.",
      "TETA League’de mücadele eden tüm takımlar kuralları okumuş ve kabul etmiş sayılır.",
    ],
  },
];

export default function RulesPage() {
  return (
    <div className="space-y-8">
      <section className="card shine-card p-6 md:p-8">
        <p className="section-kicker">RULEBOOK</p>
        <h1 className="mt-3 text-3xl font-extrabold text-white md:text-5xl">
          TETA League S4 Kuralları
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
          Lig düzeni, kadro uygunluğu, maç işleyişi, disconnect senaryoları,
          transfer yapısı ve ceza sistemi aşağıdaki kurallar üzerinden uygulanır.
        </p>
      </section>

      <section className="grid gap-5 xl:grid-cols-3">
        <article className="rules-alert-card shine-card">
          <p className="section-kicker">CRITICAL RULE</p>
          <h2 className="mt-3 text-2xl font-extrabold text-white">
            Yayın / Kayıt Zorunluluğu
          </h2>
          <p className="mt-4 text-sm leading-8 text-[var(--muted)]">
            Maçlarda yayın veya kayıt zorunludur. Kayıt bulunmayan karşılaşmalarda
            hükmen kararı uygulanabilir.
          </p>
        </article>

        <article className="rules-alert-card shine-card">
          <p className="section-kicker">CRITICAL RULE</p>
          <h2 className="mt-3 text-2xl font-extrabold text-white">
            ANY Kullanımı
          </h2>
          <p className="mt-4 text-sm leading-8 text-[var(--muted)]">
            Maçlarda TÜMÜ / ANY kullanımı zorunludur. Bu kural lig standardının
            temel parçalarından biridir.
          </p>
        </article>

        <article className="rules-alert-card shine-card">
          <p className="section-kicker">CRITICAL RULE</p>
          <h2 className="mt-3 text-2xl font-extrabold text-white">
            Minimum Oyuncu Şartı
          </h2>
          <p className="mt-4 text-sm leading-8 text-[var(--muted)]">
            Maça başlamak için ilk 11 içinde minimum 7 oyuncu bulunmak zorundadır.
          </p>
        </article>
      </section>

      <section className="grid gap-5 xl:grid-cols-2">
        <article className="rules-highlight-card shine-card">
          <p className="section-kicker">HEIGHT RULES</p>
          <h2 className="mt-3 text-2xl font-extrabold text-white md:text-3xl">
            Boy Kuralları
          </h2>

          <div className="mt-6 grid gap-4">
            <div className="panel p-5">
              <p className="text-sm font-semibold text-white">3’lü Diziliş</p>
              <p className="mt-3 text-sm leading-8 text-[var(--muted)]">
                Stoper oynayan oyuncular 187 olabilir. Geri kalan oyuncular için
                boy sınırı 182’dir. Kalecide boy sınırı yoktur.
              </p>
            </div>

            <div className="panel p-5">
              <p className="text-sm font-semibold text-white">4’lü Diziliş</p>
              <p className="mt-3 text-sm leading-8 text-[var(--muted)]">
                2 stoper + 1 CDM oynayan oyuncular 187 olabilir. Geri kalan
                oyuncular için boy sınırı 182’dir. Kalecide boy sınırı yoktur.
              </p>
            </div>

            <div className="panel p-5">
              <p className="text-sm font-semibold text-white">Kanıt Zorunluluğu</p>
              <p className="mt-3 text-sm leading-8 text-[var(--muted)]">
                Devre arasında boyların gösterilmesi zorunludur. Boy itirazında
                bu kayıt kanıt sayılır. Boy kaydı alınmamışsa sonuç hükmen olabilir.
              </p>
            </div>
          </div>
        </article>

        <article className="rules-highlight-card shine-card">
          <p className="section-kicker">DISCONNECT POLICY</p>
          <h2 className="mt-3 text-2xl font-extrabold text-white md:text-3xl">
            Düşme / Çıkış Kuralları
          </h2>

          <div className="mt-6 grid gap-4">
            <div className="panel p-5">
              <p className="text-sm font-semibold text-white">Çift Taraflı Düşme</p>
              <p className="mt-3 text-sm leading-8 text-[var(--muted)]">
                İki takımda da oyun kaynaklı düşme olursa tekrar girilir ve maç
                aynı dakikadan devam eder.
              </p>
            </div>

            <div className="panel p-5">
              <p className="text-sm font-semibold text-white">Tek Taraflı Düşme</p>
              <p className="mt-3 text-sm leading-8 text-[var(--muted)]">
                Maçta gol olmadıysa yalnızca ilk 15 dakika içinde çıkış yapılabilir.
                16. dakikadan sonra hükmen uygulanır.
              </p>
            </div>

            <div className="panel p-5">
              <p className="text-sm font-semibold text-white">Oyuncu Sayısı</p>
              <p className="mt-3 text-sm leading-8 text-[var(--muted)]">
                Düşme sonrası takım minimum 6 kişiyle devam etmelidir. 5 kişi veya
                altı hükmen sonucuna yol açar.
              </p>
            </div>
          </div>
        </article>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {coreRules.map((section) => (
          <article key={section.id} className="showcase-card shine-card">
            <div className="showcase-card-head">
              <span>{section.id}</span>
              <div>
                <p className="section-kicker">{section.kicker}</p>
                <h3>{section.title}</h3>
              </div>
            </div>

            <ul className="rule-list">
              {section.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
}