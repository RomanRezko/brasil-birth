"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sand-50 via-white to-ocean-50" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-ocean-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-sand-200 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-ocean-100 text-ocean-700 rounded-full text-sm font-medium mb-6"
            >
              Роды в Бразилии под ключ
            </motion.span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6">
              Гражданство Бразилии для вашего ребенка и{" "}
              <span className="text-ocean-600">будущее без границ</span>
            </h1>

            <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-xl mx-auto lg:mx-0">
              Полное сопровождение родов: от встречи в аэропорту до получения паспорта.
              Медицина мирового уровня и океан под окном.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button size="lg" asChild>
                <a href="#pricing">
                  Рассчитать стоимость
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#about">Узнать подробнее</a>
              </Button>
            </div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
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
                  счастливых семей в 2025 году
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&h=1000&fit=crop"
                alt="Счастливая семья на пляже Бразилии"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/20 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -left-8 bottom-20 bg-white p-4 rounded-2xl shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-ocean-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🇧🇷</span>
                </div>
                <div>
                  <p className="font-semibold text-text-primary">170+ стран</p>
                  <p className="text-sm text-text-muted">без визы</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
