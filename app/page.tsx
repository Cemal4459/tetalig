import Link from "next/link";
import Hero from "@/components/Hero";
import TopTicker from "@/components/TopTicker";
import { scorers, assists } from "@/lib/data";
import Reveal from "@/components/Reveal";

import {
  Shield,
  LayoutGrid,
  Trophy,
  Zap,
  Goal,
  Handshake,
} from "lucide-react";

export default function HomePage() {
  const topScorer = scorers[0];
  const topAssist = assists[0];

  return (
    <>
      <TopTicker />

      <div className="page-spacing">
        <Hero />

        <Reveal delay={0.05}>
          <section className="showcase-info-grid">
            <div className="showcase-card showcase-card-glow shine-card">
              <div className="showcase-card-head">
                <span>01</span>

                <div>
                  <p className="section-kicker">OVERVIEW</p>
                  <h3>Lig Yapısı</h3>
                </div>
              </div>

              <div className="feature-stack">
                <div className="icon-line">
                  <Shield size={18} />
                  <div>
                    <strong>Çift Grup Sistemi</strong>
                    <p>
                      TETA League bu sezon Alpha ve Delta olmak üzere iki ayrı
                      grup yapısıyla ilerliyor.
                    </p>
                  </div>
                </div>

                <div className="icon-line">
                  <LayoutGrid size={18} />
                  <div>
                    <strong>Tek Merkezden Erişim</strong>
                    <p>
                      Puan durumu, fikstür, takım sayfaları ve istatistikler tek
                      çatı altında.
                    </p>
                  </div>
                </div>

                <div className="icon-line">
                  <Zap size={18} />
                  <div>
                    <strong>Premium Deneyim</strong>
                    <p>
                      Modern, hızlı ve gerçek lig hissiyatı veren arayüz yapısı.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="showcase-card shine-card">
              <div className="showcase-card-head">
                <span>02</span>

                <div>
                  <p className="section-kicker">INFORMATION</p>
                  <h3>Kısa Bilgiler</h3>
                </div>
              </div>

              <div className="feature-stack">
                <div className="icon-line">
                  <Trophy size={18} />
                  <div>
                    <strong>Aktif Sezon</strong>
                    <p>Season 4 tüm hızıyla devam ediyor.</p>
                  </div>
                </div>

                <div className="icon-line">
                  <LayoutGrid size={18} />
                  <div>
                    <strong>2 Grup</strong>
                    <p>Alpha ve Delta olarak iki ayrı rekabet yapısı mevcut.</p>
                  </div>
                </div>

                <div className="icon-line">
                  <Shield size={18} />
                  <div>
                    <strong>Merkezi Yönetim</strong>
                    <p>Tüm veriler tek panel üzerinden güncellenebilir.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal delay={0.1}>
          <section className="showcase-info-grid">
            <div className="showcase-card shine-card">
              <div className="showcase-card-head">
                <span>03</span>

                <div>
                  <p className="section-kicker">TOP PLAYERS</p>
                  <h3>Öne Çıkan Oyuncular</h3>
                </div>
              </div>

              <div className="feature-stack">
                <div className="icon-line">
                  <Goal size={18} />
                  <div>
                    <strong>Gol Lideri: {topScorer.player}</strong>
                    <p>
                      {topScorer.team} formasıyla {topScorer.value} gol.
                    </p>
                  </div>
                </div>

                <div className="icon-line">
                  <Handshake size={18} />
                  <div>
                    <strong>Asist Lideri: {topAssist.player}</strong>
                    <p>
                      {topAssist.team} adına {topAssist.value} asist üretti.
                    </p>
                  </div>
                </div>
              </div>

              <div className="division-actions" style={{ marginTop: "28px" }}>
                <Link href="/top-stats" className="btn-primary">
                  Tüm İstatistikler
                </Link>
              </div>
            </div>

            <div className="showcase-card shine-card">
              <div className="showcase-card-head">
                <span>04</span>

                <div>
                  <p className="section-kicker">ACCESS</p>
                  <h3>Hızlı Erişim</h3>
                </div>
              </div>

              <div className="feature-stack">
                <div className="icon-line">
                  <Trophy size={18} />
                  <div>
                    <strong>Puan Durumu</strong>
                    <p>Alpha ve Delta grup sıralamaları.</p>
                  </div>
                </div>

                <div className="icon-line">
                  <Goal size={18} />
                  <div>
                    <strong>Fikstür</strong>
                    <p>Hafta hafta maç programı ve sonuçlar.</p>
                  </div>
                </div>

                <div className="icon-line">
                  <Shield size={18} />
                  <div>
                    <strong>Takımlar</strong>
                    <p>Tüm ekiplerin kartları ve verileri.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </>
  );
}