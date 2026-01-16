import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BrazilBaby — Роды в Бразилии под ключ | Гражданство для ребенка",
  description:
    "Полное сопровождение родов в Бразилии: от встречи в аэропорту до получения паспорта. Гражданство для ребенка, ВНЖ для родителей. Медицина мирового уровня.",
  keywords: [
    "роды в Бразилии",
    "гражданство Бразилии",
    "паспорт Бразилии",
    "ВНЖ Бразилия",
    "родить в Бразилии",
    "роды за границей",
  ],
  openGraph: {
    title: "BrazilBaby — Роды в Бразилии под ключ",
    description:
      "Гражданство Бразилии для вашего ребенка и будущее без границ. Полное сопровождение.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
