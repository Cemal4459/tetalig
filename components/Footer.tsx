import Link from "next/link";
import { Camera, MessageCircle, Radio } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer-premium relative mt-24 border-t border-[rgba(255,145,77,0.10)]">
      <div className="footer-premium-glow" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-[rgba(255,145,77,0.08)] pb-10 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <h3 className="text-xl font-extrabold tracking-[0.08em] text-white">
              TETA LEAGUE
            </h3>

            <p className="mt-4 max-w-sm text-sm leading-8 text-[var(--muted)]">
              Türkiye’nin rekabetçi Pro Clubs ligi. Puan durumları, fikstür,
              takımlar ve oyuncu istatistikleri için modern lig merkezi.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              Navigasyon
            </p>

            <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--muted)]">
              <Link href="/" className="footer-link">
                Ana Sayfa
              </Link>
              <Link href="/alpha-standings" className="footer-link">
                Alpha Puan Durumu
              </Link>
              <Link href="/delta-standings" className="footer-link">
                Delta Puan Durumu
              </Link>
              <Link href="/top-stats" className="footer-link">
                İstatistikler
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              Lig
            </p>

            <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--muted)]">
              <Link href="/alpha-fixtures" className="footer-link">
                Alpha Fikstür
              </Link>
              <Link href="/delta-fixtures" className="footer-link">
                Delta Fikstür
              </Link>
              <Link href="/rules" className="footer-link">
                Lig Kuralları
              </Link>
              <Link href="/contact" className="footer-link">
                İletişim
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              Sosyal
            </p>

            <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--muted)]">
              <a
                href="https://www.instagram.com/tetaleague/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <Camera size={16} />
                <span>Instagram</span>
              </a>

              <a
                href="https://discord.gg/cn2chtc3"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <MessageCircle size={16} />
                <span>Discord</span>
              </a>

              <a
                href="https://kick.com/dorukzin"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <Radio size={16} />
                <span>Kick</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          <p>TETA League © 2026. Tüm hakları saklıdır.</p>
          <p>Designed for competitive Pro Clubs experience.</p>
        </div>
      </div>
    </footer>
  );
}