"use client";

import { motion } from "framer-motion";
import { FileText, Plane, Baby, ScrollText, Award } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Подготовка",
    period: "За 2-3 мес.",
    items: ["Консультация", "Виза", "Жильё"],
  },
  {
    icon: Plane,
    title: "Прилёт",
    period: "30-32 нед.",
    items: ["Трансфер", "Куратор", "Заселение"],
  },
  {
    icon: Baby,
    title: "Роды",
    period: "38-40 нед.",
    items: ["Топ-врачи", "Переводчик", "24/7"],
  },
  {
    icon: ScrollText,
    title: "Документы",
    period: "1-2 нед.",
    items: ["Свидетельство", "CPF", "Регистрация"],
  },
  {
    icon: Award,
    title: "Паспорт",
    period: "2-4 нед.",
    items: ["Паспорт РФ", "ВНЖ", "Апостиль"],
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="py-12 md:py-16 bg-sand-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <span className="inline-block px-4 py-2 bg-ocean-100 text-ocean-700 rounded-full text-sm font-medium mb-4">
            Этапы работы
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Как мы работаем
          </h2>
          <p className="text-lg text-text-secondary">
            От первого звонка до получения паспорта — мы рядом на каждом этапе
          </p>
        </motion.div>

        {/* Horizontal Timeline - Desktop */}
        <div className="hidden lg:block relative">
          {/* Horizontal line */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-ocean-200" />

          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step number */}
                <div className="w-16 h-16 bg-ocean-500 rounded-full flex items-center justify-center text-white font-bold text-lg z-10 border-4 border-sand-50 mb-4">
                  <step.icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-sand-200 w-full hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-text-primary mb-1">
                    {step.title}
                  </h3>
                  <span className="text-xs text-ocean-600 font-medium block mb-3">
                    {step.period}
                  </span>
                  <ul className="space-y-1">
                    {step.items.map((item, i) => (
                      <li key={i} className="text-xs text-text-secondary">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vertical Timeline - Mobile */}
        <div className="lg:hidden relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-ocean-200" />

          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative flex gap-4"
              >
                {/* Step icon */}
                <div className="w-12 h-12 bg-ocean-500 rounded-full flex items-center justify-center text-white flex-shrink-0 z-10 border-4 border-sand-50">
                  <step.icon className="w-5 h-5" />
                </div>

                {/* Content */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-sand-200 flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-text-primary">
                      {step.title}
                    </h3>
                    <span className="text-xs text-ocean-600 font-medium">
                      {step.period}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary">
                    {step.items.join(" • ")}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
