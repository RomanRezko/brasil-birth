"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Waves, Building, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const neighborhoodPhotos = [
  {
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&h=600&fit=crop",
    title: "Барра-да-Тижука",
    subtitle: "Панорама района с высоты",
  },
  {
    image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=1200&h=600&fit=crop",
    title: "Пляж Барра",
    subtitle: "23 км чистейшего песка и бирюзовый океан",
  },
  {
    image: "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?w=1200&h=600&fit=crop",
    title: "Lagoa da Tijuca",
    subtitle: "Лагуна с видом на горы",
  },
  {
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=600&fit=crop",
    title: "Península",
    subtitle: "Элитные резиденции с видом на лагуну",
  },
  {
    image: "https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=1200&h=600&fit=crop",
    title: "Barra Shopping",
    subtitle: "700+ магазинов, кинотеатры, рестораны",
  },
  {
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&h=600&fit=crop",
    title: "Закат в Барра",
    subtitle: "Золотой час на побережье",
  },
];

const locationFeatures = [
  {
    icon: ShieldCheck,
    title: "Закрытые резиденции",
    description:
      "Охрана 24/7, вход только по пропускам, полная приватность и безопасность для прогулок с коляской.",
  },
  {
    icon: Building,
    title: "Инфраструктура",
    description:
      "Бассейны, фитнес-залы, парки и зоны барбекю прямо на территории вашего жилого комплекса.",
  },
  {
    icon: Waves,
    title: "Океан рядом",
    description:
      "Широкие чистые пляжи и набережная в 5-10 минутах ходьбы от дома.",
  },
];

export function Location() {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Барра-да-Тижука: Ваша безопасная гавань в Рио
          </h2>
          <p className="text-lg text-text-secondary">
            Мы размещаем клиентов только в самом современном и безопасном районе
            города, который называют «Бразильским Майами»
          </p>
        </motion.div>

        {/* Photo Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <div className="relative aspect-[21/9] md:aspect-[3/1]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPhoto}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={neighborhoodPhotos[currentPhoto].image}
                    alt={neighborhoodPhotos[currentPhoto].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                    <h4 className="text-white font-bold text-lg md:text-2xl">
                      {neighborhoodPhotos[currentPhoto].title}
                    </h4>
                    <p className="text-white/80 text-sm md:text-base">
                      {neighborhoodPhotos[currentPhoto].subtitle}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={() => setCurrentPhoto((prev) => (prev - 1 + neighborhoodPhotos.length) % neighborhoodPhotos.length)}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-colors"
              aria-label="Предыдущее фото"
            >
              <ChevronLeft className="w-5 h-5 text-text-primary" />
            </button>
            <button
              onClick={() => setCurrentPhoto((prev) => (prev + 1) % neighborhoodPhotos.length)}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-colors"
              aria-label="Следующее фото"
            >
              <ChevronRight className="w-5 h-5 text-text-primary" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 flex gap-2">
              {neighborhoodPhotos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPhoto(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentPhoto ? "bg-white" : "bg-white/50"
                  }`}
                  aria-label={`Фото ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Location features */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {locationFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-sand-200 hover:border-ocean-200 transition-colors group">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-ocean-100 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-ocean-500 transition-colors">
                      <feature.icon className="w-8 h-8 text-ocean-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
