"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header className="navbar-premium sticky top-0 z-50">
      <div className="navbar-premium-glow" />

      <div className="mx-auto flex min-h-[78px] max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <Link href="/" className="group flex flex-col leading-none">
          <span className="text-xl font-extrabold tracking-[0.16em] text-white">
            TETA LEAGUE
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-[0.3em] text-[var(--accent)]/80">
            Pro Clubs Season 4
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-[var(--muted-2)] xl:flex">
          <Link href="/" className="transition hover:text-[var(--accent)]">
            Ana Sayfa
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("standings")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className="flex items-center gap-2 transition hover:text-[var(--accent)]">
              <span>Puan Durumu</span>
              <span className="text-[10px] opacity-60">▼</span>
            </button>

            {openMenu === "standings" && (
              <div className="absolute left-0 top-full z-[1100] pt-3">
                <div className="navbar-dropdown w-60 rounded-[1.5rem] p-2">
                  <Link
                    href="/alpha-standings"
                    className="block rounded-xl px-4 py-3 transition hover:bg-white/5 hover:text-[var(--accent)]"
                  >
                    <span className="block font-semibold">Alpha</span>
                    <span className="text-xs text-[var(--muted)]">
                      Alpha grup sıralaması
                    </span>
                  </Link>
                  <Link
                    href="/delta-standings"
                    className="block rounded-xl px-4 py-3 transition hover:bg-white/5 hover:text-[var(--accent)]"
                  >
                    <span className="block font-semibold">Delta</span>
                    <span className="text-xs text-[var(--muted)]">
                      Delta grup sıralaması
                    </span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("fixtures")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className="flex items-center gap-2 transition hover:text-[var(--accent)]">
              <span>Fikstür</span>
              <span className="text-[10px] opacity-60">▼</span>
            </button>

            {openMenu === "fixtures" && (
              <div className="absolute left-0 top-full pt-3">
                <div className="navbar-dropdown w-60 rounded-[1.5rem] p-2">
                  <Link
                    href="/alpha-fixtures"
                    className="block rounded-xl px-4 py-3 transition hover:bg-white/5 hover:text-[var(--accent)]"
                  >
                    <span className="block font-semibold">Alpha</span>
                    <span className="text-xs text-[var(--muted)]">
                      Alpha fikstür ve sonuçlar
                    </span>
                  </Link>
                  <Link
                    href="/delta-fixtures"
                    className="block rounded-xl px-4 py-3 transition hover:bg-white/5 hover:text-[var(--accent)]"
                  >
                    <span className="block font-semibold">Delta</span>
                    <span className="text-xs text-[var(--muted)]">
                      Delta fikstür ve sonuçlar
                    </span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/top-stats" className="transition hover:text-[var(--accent)]">
            İstatistikler
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("teams")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className="flex items-center gap-2 transition hover:text-[var(--accent)]">
              <span>Takımlar</span>
              <span className="text-[10px] opacity-60">▼</span>
            </button>

            {openMenu === "teams" && (
              <div className="absolute left-0 top-full pt-3">
                <div className="navbar-dropdown w-60 rounded-[1.5rem] p-2">
                  <Link
                    href="/alpha-teams"
                    className="block rounded-xl px-4 py-3 transition hover:bg-white/5 hover:text-[var(--accent)]"
                  >
                    <span className="block font-semibold">Alpha</span>
                    <span className="text-xs text-[var(--muted)]">
                      Alpha grup takımları
                    </span>
                  </Link>
                  <Link
                    href="/delta-teams"
                    className="block rounded-xl px-4 py-3 transition hover:bg-white/5 hover:text-[var(--accent)]"
                  >
                    <span className="block font-semibold">Delta</span>
                    <span className="text-xs text-[var(--muted)]">
                      Delta grup takımları
                    </span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/rules" className="transition hover:text-[var(--accent)]">
            Kurallar
          </Link>

          <Link href="/contact" className="transition hover:text-[var(--accent)]">
            İletişim
          </Link>
        </nav>

        <Link href="/top-stats" className="btn-primary">
          LIVE DATA
        </Link>
      </div>
    </header>
  );
}