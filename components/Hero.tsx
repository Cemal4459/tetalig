"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="showcase-hero">
      <div className="hero-watermark">TL</div>

      <div className="showcase-grid">
        <motion.div
          className="showcase-left"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="season-chip">SEASON 4 • TETA LEAGUE</div>

          <motion.h1
            className="showcase-title"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08 }}
          >
            TETA LEAGUE
            <br />
            <span>SEASON FOUR</span>
          </motion.h1>

          <motion.p
            className="showcase-desc"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.16 }}
          >
            Türkiye’nin rekabetçi Pro Clubs yapısını tek merkezde toplayan
            modern lig platformu. Puan durumu, fikstür, takım yapıları ve
            oyuncu istatistikleri daha temiz, daha güçlü ve daha premium bir
            deneyimle sunuluyor.
          </motion.p>

          <motion.div
            className="hero-quick-stats"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.24 }}
          >
            <div>
              <span>GRUP SAYISI</span>
              <strong>2</strong>
            </div>

            <div>
              <span>AKTİF YAPI</span>
              <strong>ALPHA + DELTA</strong>
            </div>

            <div>
              <span>SEZON</span>
              <strong>S4</strong>
            </div>
          </motion.div>

          <motion.div
            style={{ marginTop: "34px" }}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.32 }}
          >
            <div className="badge">LIVE STATUS • Alpha & Delta Aktif</div>
          </motion.div>
        </motion.div>

        <motion.div
          className="showcase-right"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.18,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            className="league-panel league-panel-live shine-card"
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <div className="league-panel-head">
              <span>ACTIVE DIVISION</span>
              <h3>ALPHA</h3>
            </div>

            <div className="league-panel-buttons">
              <Link href="/alpha-standings" className="league-mini-btn">
                Puan Durumu
              </Link>
              <Link href="/alpha-fixtures" className="league-mini-btn">
                Fikstür
              </Link>
              <Link href="/alpha-teams" className="league-mini-btn">
                Takımlar
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="league-panel shine-card"
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <div className="league-panel-head">
              <span>ACTIVE DIVISION</span>
              <h3>DELTA</h3>
            </div>

            <div className="league-panel-buttons">
              <Link href="/delta-standings" className="league-mini-btn">
                Puan Durumu
              </Link>
              <Link href="/delta-fixtures" className="league-mini-btn">
                Fikstür
              </Link>
              <Link href="/delta-teams" className="league-mini-btn">
                Takımlar
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}