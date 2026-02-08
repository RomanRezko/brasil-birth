"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Award, Heart, Building2, Quote, MapPin, Clock, Users, Star, Baby, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { reviews } from "@/data/reviews";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const hospitals = [
  {
    name: "Hospital Israelita Albert Einstein",
    location: "Сан-Паулу",
    description:
      "Лучший госпиталь Латинской Америки. Входит в топ-50 клиник мира по версии Newsweek.",
    rating: "#1 в Латинской Америке",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop",
    // Extended info for popup
    fullDescription:
      "Hospital Israelita Albert Einstein — флагманский медицинский центр Бразилии, основанный в 1971 году. Госпиталь входит в топ-50 лучших клиник мира по версии Newsweek и занимает 1-е место в Латинской Америке. Здесь работают более 8,000 врачей, включая ведущих специалистов в области перинатальной медицины.",
    gallery: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&h=500&fit=crop",
    ],
    features: [
      { icon: Star, text: "JCI аккредитация с 1999 года" },
      { icon: Users, text: "8,000+ врачей" },
      { icon: Baby, text: "15,000+ родов в год" },
      { icon: Clock, text: "Круглосуточная неонатология" },
    ],
    address: "Av. Albert Einstein, 627 — Morumbi, São Paulo",
  },
  {
    name: "Perinatal Barra",
    location: "Барра-да-Тижука, Рио-де-Жанейро",
    description:
      "Специализированный родильный дом премиум-класса. Более 50 лет опыта и 100,000+ успешных родов.",
    rating: "Топ-1 роддом в Рио",
    image:
      "https://wp.rededorsaoluiz.com.br/wp-content/uploads/2025/08/8-1-1.png",
    // Extended info for popup
    fullDescription:
      "Perinatal Barra — флагманский родильный дом сети Perinatal в районе Барра-да-Тижука. Специализируется исключительно на перинатальной медицине с 1970 года. За более чем 50 лет работы здесь появилось на свет более 100,000 малышей. Клиника известна индивидуальным подходом и палатами уровня 5-звездочного отеля.",
    gallery: [
      "https://wp.rededorsaoluiz.com.br/wp-content/uploads/2025/08/8-1-1.png",
      "https://wp.rededorsaoluiz.com.br/wp-content/uploads/2025/08/maternidade.jpg",
      "https://wp.rededorsaoluiz.com.br/wp-content/uploads/2025/08/02-Fachada-Perinatal-scaled.jpg",
    ],
    features: [
      { icon: Star, text: "50+ лет специализации на родах" },
      { icon: Baby, text: "100,000+ успешных родов" },
      { icon: Users, text: "Команда из 200+ специалистов" },
      { icon: Clock, text: "VIP-палаты с партнёром" },
    ],
    address: "Av. das Américas, 3333 — Barra da Tijuca, Rio de Janeiro",
  },
];

const trustFactors = [
  {
    icon: Shield,
    title: "Безопасность",
    description: "Современное оборудование и протоколы международного уровня",
  },
  {
    icon: Award,
    title: "Сертификация",
    description: "JCI аккредитация — золотой стандарт медицины",
  },
  {
    icon: Heart,
    title: "Забота",
    description: "Индивидуальный подход и внимание к каждой семье",
  },
  {
    icon: Building2,
    title: "Комфорт",
    description: "VIP-палаты уровня 5-звездочного отеля",
  },
];

export function Trust() {
  const [selectedHospital, setSelectedHospital] = useState<typeof hospitals[0] | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  // Split reviews into two rows
  const row1Reviews = reviews.filter((_, i) => i % 2 === 0);
  const row2Reviews = reviews.filter((_, i) => i % 2 === 1);

  const openHospitalPopup = (hospital: typeof hospitals[0]) => {
    setSelectedHospital(hospital);
    setCurrentImage(0);
  };

  const closeHospitalPopup = () => {
    setSelectedHospital(null);
    setCurrentImage(0);
  };

  return (
    <section id="trust" className="py-12 md:py-16 bg-sand-50">
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
            Медицина мирового уровня
          </h2>
          <p className="text-lg text-text-secondary">
            Мы сотрудничаем только с ведущими клиниками Бразилии,
            которые соответствуют международным стандартам качества.
          </p>
        </motion.div>

        {/* Hospitals */}
        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          {hospitals.map((hospital, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-sand-200 hover:shadow-lg transition-all cursor-pointer group"
              onClick={() => openHospitalPopup(hospital)}
            >
              <div className="relative h-56">
                <Image
                  src={hospital.image}
                  alt={hospital.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-ocean-500 text-white text-xs font-semibold rounded-full mb-2">
                    {hospital.rating}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {hospital.name}
                  </h3>
                  <p className="text-white/80 text-sm">{hospital.location}</p>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-ocean-500/0 group-hover:bg-ocean-500/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-ocean-600 px-4 py-2 rounded-full font-medium text-sm shadow-lg">
                    Подробнее
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-text-secondary">{hospital.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hospital Popup Dialog */}
        <Dialog open={!!selectedHospital} onOpenChange={(open) => !open && closeHospitalPopup()}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            {selectedHospital && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="inline-block px-3 py-1 bg-ocean-500 text-white text-xs font-semibold rounded-full">
                      {selectedHospital.rating}
                    </span>
                  </div>
                  <DialogTitle className="text-2xl">{selectedHospital.name}</DialogTitle>
                  <DialogDescription className="flex items-center gap-1 text-text-muted">
                    <MapPin className="w-4 h-4" />
                    {selectedHospital.address}
                  </DialogDescription>
                </DialogHeader>

                {/* Image Gallery */}
                <div className="relative mt-4">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
                    <Image
                      src={selectedHospital.gallery[currentImage]}
                      alt={`${selectedHospital.name} - фото ${currentImage + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Gallery navigation */}
                  {selectedHospital.gallery.length > 1 && (
                    <>
                      <button
                        onClick={() => setCurrentImage((prev) => (prev - 1 + selectedHospital.gallery.length) % selectedHospital.gallery.length)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-colors"
                        aria-label="Предыдущее фото"
                      >
                        <ChevronLeft className="w-5 h-5 text-text-primary" />
                      </button>
                      <button
                        onClick={() => setCurrentImage((prev) => (prev + 1) % selectedHospital.gallery.length)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-colors"
                        aria-label="Следующее фото"
                      >
                        <ChevronRight className="w-5 h-5 text-text-primary" />
                      </button>
                    </>
                  )}

                  {/* Gallery dots */}
                  <div className="flex justify-center gap-2 mt-3">
                    {selectedHospital.gallery.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImage ? "bg-ocean-500" : "bg-sand-300"
                        }`}
                        aria-label={`Фото ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="mt-4">
                  <p className="text-text-secondary leading-relaxed">
                    {selectedHospital.fullDescription}
                  </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {selectedHospital.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-sand-50 rounded-lg"
                    >
                      <div className="w-10 h-10 bg-ocean-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-ocean-600" />
                      </div>
                      <span className="text-sm text-text-primary font-medium">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* Trust factors */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustFactors.map((factor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-14 h-14 bg-ocean-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <factor.icon className="w-7 h-7 text-ocean-600" />
              </div>
              <h3 className="font-semibold text-text-primary mb-2">
                {factor.title}
              </h3>
              <p className="text-sm text-text-secondary">{factor.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Reviews Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-text-primary text-center mb-8">
            Отзывы наших клиентов
          </h3>

          {/* Marquee container */}
          <div className="relative overflow-hidden">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-sand-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-sand-50 to-transparent z-10 pointer-events-none" />

            {/* Row 1 - moves right to left */}
            <div className="mb-4">
              <motion.div
                className="flex gap-4"
                animate={{ x: [0, -2400] }}
                transition={{
                  x: {
                    duration: 60,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                {[...row1Reviews, ...row1Reviews].map((review, index) => (
                  <div
                    key={`row1-${review.id}-${index}`}
                    className="flex-shrink-0 w-[350px] bg-white rounded-xl p-5 shadow-sm border border-sand-200"
                  >
                    <Quote className="w-6 h-6 text-ocean-200 mb-2" />
                    <p className="text-sm text-text-secondary mb-3 line-clamp-4">
                      «{review.text}»
                    </p>
                    <div>
                      <p className="font-semibold text-text-primary text-sm">
                        {review.author}
                      </p>
                      <p className="text-xs text-text-muted">
                        {review.location} · {review.date}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Row 2 - moves left to right */}
            <div>
              <motion.div
                className="flex gap-4"
                animate={{ x: [-2400, 0] }}
                transition={{
                  x: {
                    duration: 70,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                {[...row2Reviews, ...row2Reviews].map((review, index) => (
                  <div
                    key={`row2-${review.id}-${index}`}
                    className="flex-shrink-0 w-[350px] bg-white rounded-xl p-5 shadow-sm border border-sand-200"
                  >
                    <Quote className="w-6 h-6 text-ocean-200 mb-2" />
                    <p className="text-sm text-text-secondary mb-3 line-clamp-4">
                      «{review.text}»
                    </p>
                    <div>
                      <p className="font-semibold text-text-primary text-sm">
                        {review.author}
                      </p>
                      <p className="text-xs text-text-muted">
                        {review.location} · {review.date}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Button to see all reviews */}
          <div className="mt-8 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/reviews">
                Все отзывы
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <p className="mt-4 text-text-muted">
              <span className="font-semibold text-ocean-600">500+ семей</span> уже доверили нам самое важное
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
