"use client";

import { motion } from "framer-motion";
import { Shield, Award, Heart, Building2 } from "lucide-react";
import Image from "next/image";

const hospitals = [
  {
    name: "Hospital Israelita Albert Einstein",
    location: "Сан-Паулу",
    description:
      "Лучший госпиталь Латинской Америки. Входит в топ-50 клиник мира по версии Newsweek.",
    rating: "#1 в Латинской Америке",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop",
  },
  {
    name: "Perinatal",
    location: "Рио-де-Жанейро",
    description:
      "Специализированный родильный дом премиум-класса. Более 50 лет опыта и 100,000+ успешных родов.",
    rating: "Топ-1 роддом в Рио",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&h=400&fit=crop",
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
          <span className="inline-block px-4 py-2 bg-ocean-100 text-ocean-700 rounded-full text-sm font-medium mb-4">
            Госпитали
          </span>
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
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-sand-200 hover:shadow-lg transition-shadow"
            >
              <div className="relative h-56">
                <Image
                  src={hospital.image}
                  alt={hospital.name}
                  fill
                  className="object-cover"
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
              </div>
              <div className="p-6">
                <p className="text-text-secondary">{hospital.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

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

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-sand-200"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-sand-200 flex-shrink-0 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=160&h=160&fit=crop&crop=face"
                alt="Отзыв клиента"
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-lg text-text-secondary italic mb-4">
                «Мы долго выбирали страну для родов и остановились на Бразилии.
                Команда BrazilBaby сопровождала нас на каждом этапе. Роды прошли идеально,
                а через месяц мы уже держали в руках бразильский паспорт нашей дочки.
                Спасибо за профессионализм и заботу!»
              </p>
              <p className="font-semibold text-text-primary">Анна и Михаил</p>
              <p className="text-sm text-text-muted">Москва, роды в декабре 2024</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
