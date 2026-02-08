"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, FileX, Globe, Ban, HelpCircle } from "lucide-react";

const problems = [
  {
    icon: Ban,
    title: "Визовые ограничения",
    description: "Российский паспорт — 119 место в мире. США, Канада, ЕС — всё по визам с отказами и очередями.",
  },
  {
    icon: FileX,
    title: "Сложная бюрократия",
    description: "Самостоятельное оформление документов в чужой стране — месяцы нервов и ошибок.",
  },
  {
    icon: Clock,
    title: "Нехватка времени",
    description: "Беременность — не время разбираться в законах другой страны и искать врачей.",
  },
  {
    icon: HelpCircle,
    title: "Языковой барьер",
    description: "Без португальского сложно общаться с врачами, юристами и чиновниками.",
  },
  {
    icon: Globe,
    title: "Неизвестность",
    description: "Где жить? Какую клинику выбрать? Как добраться? Тысячи вопросов без ответов.",
  },
  {
    icon: AlertTriangle,
    title: "Риск ошибки",
    description: "Неправильно оформленные документы = потеря времени, денег и возможности получить гражданство.",
  },
];

export function Problems() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Знакомые проблемы?
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            С этим сталкивается каждая семья, которая хочет дать ребёнку лучшее будущее
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-rose-200 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-rose-200 transition-colors">
                <problem.icon className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {problem.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-xl md:text-2xl font-semibold text-text-primary">
            Мы решаем все эти вопросы за вас{" "}
            <span className="text-ocean-600">→</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
