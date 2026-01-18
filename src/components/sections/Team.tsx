"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    name: "Мария",
    role: "Медицинский куратор",
    quote:
      "Я буду вашим голосом на приёмах у врача и поддержу на родах. Медицинские термины — моя стихия.",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Алексей",
    role: "Миграционный юрист",
    quote:
      "Знаю кратчайший путь к паспорту. Беру на себя всю бюрократию в Policia Federal.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Елена",
    role: "Ваш личный консьерж",
    quote:
      "Помогу выбрать лучшую квартиру, арендовать авто и подскажу, где купить самые вкусные фрукты.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
  },
];

export function Team() {
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
          <span className="inline-block px-4 py-2 bg-ocean-100 text-ocean-700 rounded-full text-sm font-medium mb-4">
            Команда
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Команда BabyRio, которая будет с вами
          </h2>
          <p className="text-lg text-text-secondary">
            Профессионалы, которые сделают ваше пребывание в Бразилии комфортным
            и безопасным
          </p>
        </motion.div>

        {/* Team members */}
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-5">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover border-4 border-ocean-100"
                />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-1">
                {member.name}
              </h3>
              <p className="text-ocean-600 font-medium text-sm mb-4">
                {member.role}
              </p>
              <p className="text-text-secondary italic leading-relaxed">
                «{member.quote}»
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
