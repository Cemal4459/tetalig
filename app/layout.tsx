import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";

export const metadata: Metadata = {
  title: "TETA League S4",
  description: "Türkiye'nin rekabetçi Pro Clubs ligi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <MouseGlow />

        <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
          <Navbar />
          <main className="mx-auto w-full max-w-7xl px-4 py-8 md:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}