"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Users, ShieldCheck, Heart, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ui/contact-modal";
import { heroContent } from "@/data/content";
import Image from "next/image";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="relative min-h-0 md:min-h-screen flex items-center pt-20 pb-6 md:pt-20 md:pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sand-50 via-white to-ocean-50" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-2 gap-3 md:gap-6 lg:gap-12 items-center">
            <div className="text-left">
              <h1 className="text-[30px] sm:text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-text-primary leading-[1.1] md:leading-tight mb-1 md:mb-4">
                Роды в <span className="bg-gradient-to-r from-[#FFDF00] to-[#009B3A] bg-clip-text text-transparent">Бразилии</span> под ключ
              </h1>
              <p className="hidden md:block text-sm sm:text-base md:text-2xl lg:text-[1.75rem] font-medium text-text-secondary leading-tight mb-2 md:mb-6">
                Гражданство для Вашего ребенка — Будущее без виз
              </p>
              {/* Mobile Bullets */}
              <ul className="flex md:hidden flex-col gap-1.5 mt-1">
                {heroContent.bullets?.map((bullet, i) => (
                  <li key={i} className="flex items-center gap-1.5 text-text-secondary">
                    <Check className="w-3.5 h-3.5 text-ocean-500 flex-shrink-0" />
                    <span className="text-xs font-medium">{bullet}</span>
                  </li>
                ))}
              </ul>
              <p className="hidden md:block text-base md:text-lg text-text-muted mb-8 max-w-xl leading-relaxed">
                {heroContent.subtitle}
              </p>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg md:shadow-xl lg:shadow-2xl">
                <Image
                  src="/images/hero-couple-rio.png"
                  alt="Счастливая пара в ожидании ребенка на фоне Рио-де-Жанейро"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          {/* Mobile Full-Width CTA */}
          <div className="md:hidden mt-4">
            <Button
              size="lg"
              className="w-full text-base py-6"
              onClick={() => setContactOpen(true)}
            >
              Оставить заявку
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
          <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-0 md:min-h-screen flex items-center pt-20 pb-6 md:pt-20 md:pb-0 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sand-50 via-white to-ocean-50" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-ocean-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-sand-200 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-2 gap-3 md:gap-6 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <h1 className="text-[30px] sm:text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-text-primary leading-[1.1] md:leading-tight mb-1 md:mb-4">
              Роды в <span className="bg-gradient-to-r from-[#FFDF00] to-[#009B3A] bg-clip-text text-transparent">Бразилии</span> под ключ
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="hidden md:block text-sm sm:text-base md:text-2xl lg:text-[1.75rem] font-medium text-text-secondary leading-tight mb-2 md:mb-6"
            >
              Гражданство для Вашего ребенка — Будущее без виз
            </motion.p>

            {/* Mobile Bullets */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex md:hidden flex-col gap-1.5 mt-1"
            >
              {heroContent.bullets?.map((bullet, i) => (
                <li key={i} className="flex items-center gap-1.5 text-text-secondary">
                  <Check className="w-3.5 h-3.5 text-ocean-500 flex-shrink-0" />
                  <span className="text-xs font-medium">{bullet}</span>
                </li>
              ))}
            </motion.ul>

            <p className="hidden md:block text-base md:text-lg text-text-muted mb-6 max-w-xl leading-relaxed">
              {heroContent.subtitle}
            </p>

            {/* Bullets - hidden on mobile */}
            <ul className="hidden md:flex flex-wrap gap-x-6 gap-y-2 mb-8">
              {heroContent.bullets?.map((bullet, i) => (
                <li key={i} className="flex items-center gap-2 text-text-secondary">
                  <Check className="w-5 h-5 text-ocean-500 flex-shrink-0" />
                  <span className="text-sm font-medium">{bullet}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons - hidden on mobile */}
            <div className="hidden md:flex flex-col sm:flex-row gap-4 justify-start mb-10">
              <Button size="lg" asChild>
                <a href="#pricing">
                  {heroContent.primaryBtn}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/baby-rio-guide.pdf" download>
                  <Download className="w-5 h-5" />
                  {heroContent.secondaryBtn}
                </a>
              </Button>
            </div>

            {/* Social Proof - hidden on mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="hidden md:flex items-center gap-4 justify-start"
            >
              <div className="flex -space-x-3">
                {[
                  "photo-1494790108377-be9c29b29330",
                  "photo-1507003211169-0a1dd7228f2d",
                  "photo-1517841905240-472988babdf9",
                  "photo-1438761681033-6461ffad8d80",
                  "photo-1472099645785-5658abf4ff4e",
                ].map((photoId, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-sand-200 flex items-center justify-center overflow-hidden"
                  >
                    <Image
                      src={`https://images.unsplash.com/${photoId}?w=80&h=80&fit=crop&crop=face`}
                      alt=""
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1 text-ocean-600 font-semibold">
                  <Users className="w-4 h-4" />
                  <span>200+</span>
                </div>
                <p className="text-sm text-text-muted">
                  счастливых семей в 2024 году
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg md:shadow-xl lg:shadow-2xl">
              <Image
                src="/images/hero-couple-rio.png"
                alt="Счастливая пара в ожидании ребенка на фоне Рио-де-Жанейро"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/20 to-transparent" />
            </div>

            {/* Floating cards - only on desktop */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
              transition={{
                opacity: { delay: 0.6, duration: 0.4 },
                x: { delay: 0.6, duration: 0.4 },
                y: { delay: 1, duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute -left-8 bottom-16 bg-white p-3 rounded-2xl shadow-xl hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/passport-brazil.png"
                    alt="Паспорт Бразилии"
                    width={30}
                    height={43}
                    className="object-contain rounded-sm shadow-sm"
                  />
                </div>
                <div>
                  <p className="font-semibold text-sm text-text-primary">170+ стран</p>
                  <p className="text-xs text-text-muted">без визы</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
              transition={{
                opacity: { delay: 0.8, duration: 0.4 },
                x: { delay: 0.8, duration: 0.4 },
                y: { delay: 1.5, duration: 3.5, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute -right-6 top-12 bg-white p-3 rounded-2xl shadow-xl hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-text-primary">Гарантия</p>
                  <p className="text-xs text-text-muted">работа по договору</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0, y: [0, -7, 0] }}
              transition={{
                opacity: { delay: 1.0, duration: 0.4 },
                x: { delay: 1.0, duration: 0.4 },
                y: { delay: 2, duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute -right-4 bottom-32 bg-white p-3 rounded-2xl shadow-xl hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-rose-500" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-text-primary">500+ семей</p>
                  <p className="text-xs text-text-muted">нам доверяют</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Full-Width CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="md:hidden mt-4"
        >
          <Button
            size="lg"
            className="w-full text-base py-6"
            onClick={() => setContactOpen(true)}
          >
            Оставить заявку
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>

        <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
      </div>
    </section>
  );
}
