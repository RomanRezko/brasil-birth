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
    href: "https://instagram.com/babyrio",
    label: "Instagram",
  },
  {
    icon: Send,
    href: "https://t.me/babyrio",
    label: "Telegram",
  },
  {
    icon: MessageCircle,
    href: "https://wa.me/5521999999999",
    label: "WhatsApp",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-primary text-white">
      <div className="container mx-auto px-4 max-w-7xl py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
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

            {/* Social links */}
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
                    href="https://wa.me/5521999999999"
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
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {currentYear} Baby Rio. Все права защищены.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-500 hover:text-gray-400 transition-colors text-sm"
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
