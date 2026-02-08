"use client";

import Link from "next/link";
import { Instagram, Send, MessageCircle, Mail, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Пакет «Базовый»", href: "/#pricing" },
    { label: "Пакет «Комфорт»", href: "/#pricing" },
    { label: "Пакет «VIP»", href: "/#pricing" },
  ],
  company: [
    { label: "О нас", href: "/#about" },
    { label: "Этапы работы", href: "/#roadmap" },
    { label: "Отзывы", href: "/#trust" },
    { label: "FAQ", href: "/#faq" },
    { label: "Блог", href: "/blog" },
  ],
  legal: [
    { label: "Политика конфиденциальности", href: "#" },
    { label: "Договор оферты", href: "#" },
  ],
};

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/babyrio_brazil",
    label: "Instagram",
  },
  {
    icon: Send,
    href: "https://t.me/BabyRioBot",
    label: "Telegram",
  },
  {
    icon: MessageCircle,
    href: "https://wa.me/375336056094",
    label: "WhatsApp",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-primary text-white">
      <div className="container mx-auto px-4 max-w-7xl py-8 md:py-16">
        {/* Mobile: Compact layout */}
        <div className="md:hidden">
          {/* Brand + Social */}
          <div className="text-center mb-6">
            <Link href="/" className="inline-flex items-center gap-2 mb-3">
              <span className="text-xl font-bold text-ocean-400">Baby</span>
              <span className="text-xl font-bold text-white">Rio</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Профессиональное сопровождение родов в Бразилии
            </p>
            <div className="flex justify-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-ocean-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links in 2 columns */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-semibold mb-2 text-white text-sm">Услуги</h4>
              <ul className="space-y-1.5">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-ocean-400 transition-colors text-xs"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-white text-sm">Компания</h4>
              <ul className="space-y-1.5">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    {link.href.includes("#") ? (
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-ocean-400 transition-colors text-xs"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-ocean-400 transition-colors text-xs"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact row */}
          <div className="flex justify-center gap-4 text-xs text-gray-400 mb-6">
            <a href="https://wa.me/375336056094" className="hover:text-ocean-400">
              +55 21 99999-9999
            </a>
            <span>•</span>
            <a href="mailto:info@babyrio.com" className="hover:text-ocean-400">
              info@babyrio.com
            </a>
          </div>
        </div>

        {/* Desktop: Full layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-ocean-400">Baby</span>
              <span className="text-2xl font-bold text-white">Rio</span>
            </Link>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Профессиональное сопровождение родов в Бразилии.
              Помогаем семьям получить гражданство и новые возможности.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-ocean-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Услуги</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-ocean-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Компания</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  {link.href.includes("#") ? (
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-ocean-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-ocean-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-ocean-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">WhatsApp</p>
                  <a
                    href="https://wa.me/375336056094"
                    className="text-white hover:text-ocean-400 transition-colors"
                  >
                    +55 21 99999-9999
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-ocean-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a
                    href="mailto:info@babyrio.com"
                    className="text-white hover:text-ocean-400 transition-colors"
                  >
                    info@babyrio.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-ocean-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Офис</p>
                  <p className="text-white">Рио-де-Жанейро, Бразилия</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-6 md:mt-12 pt-4 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
            <p className="text-gray-500 text-xs md:text-sm text-center md:text-left">
              &copy; {currentYear} Baby Rio. Все права защищены.
            </p>
            <div className="flex gap-4 md:gap-6">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-500 hover:text-gray-400 transition-colors text-xs md:text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
