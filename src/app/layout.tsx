import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://babyrio.ru"),
  title: "Baby Rio — Роды в Бразилии под ключ | Гражданство для ребенка",
  description:
    "Полное сопровождение родов в Бразилии: от встречи в аэропорту до получения паспорта. Гражданство для ребенка, ВНЖ для родителей. Медицина мирового уровня.",
  keywords: [
    "роды в Бразилии",
    "гражданство Бразилии",
    "паспорт Бразилии",
    "ВНЖ Бразилия",
    "родить в Бразилии",
    "роды за границей",
    "роды в Рио-де-Жанейро",
    "birth tourism Brazil",
    "Brazilian citizenship",
  ],
  authors: [{ name: "Baby Rio" }],
  creator: "Baby Rio",
  publisher: "Baby Rio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/favicon-large.png",
  },
  openGraph: {
    title: "Baby Rio — Роды в Бразилии под ключ",
    description:
      "Гражданство Бразилии для вашего ребенка и будущее без границ. Полное сопровождение от встречи в аэропорту до получения паспорта.",
    type: "website",
    locale: "ru_RU",
    url: "https://babyrio.ru",
    siteName: "Baby Rio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Baby Rio — Роды в Бразилии",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baby Rio — Роды в Бразилии под ключ",
    description:
      "Гражданство Бразилии для вашего ребенка. Полное сопровождение родов.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "https://babyrio.ru",
  },
  verification: {
    google: "6E6j4c1luvM1qDptaPxvOB3FnD-o7wEJkPM8oqKVI98",
    yandex: "aac1dcabe3992bee",
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

        {/* Yandex.Metrika counter */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=106465069', 'ym');

            ym(106465069, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
          `}
        </Script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/106465069" style={{position:'absolute', left:'-9999px'}} alt="" />
          </div>
        </noscript>
      </body>
    </html>
  );
}
