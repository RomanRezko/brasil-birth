"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Plane,
  Baby,
  ScrollText,
  Award,
  CheckCircle2
} from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Подготовка",
    period: "За 2-3 месяца до родов",
    description:
      "Консультация, подбор госпиталя и врача, оформление визы, бронирование жилья и перелета.",
    items: ["Бесплатная консультация", "Помощь с визой", "Подбор апартаментов"],
  },
  {
    icon: Plane,
    title: "Прилет",
    period: "30-32 неделя",
    description:
      "Встреча в аэропорту, трансфер, заселение в комфортные апартаменты у океана.",
    items: ["VIP-трансфер", "Личный куратор", "Обустройство жилья"],
  },
  {
    icon: Baby,
    title: "Роды",
    period: "38-40 неделя",
    description:
      "Сопровождение в госпитале премиум-класса, русскоязычный переводчик, комфортная палата.",
    items: ["Топовые врачи", "Современное оборудование", "Поддержка 24/7"],
  },
  {
    icon: ScrollText,
    title: "Документы",
    period: "1-2 недели после родов",
    description:
      "Оформление свидетельства о рождении, CPF (аналог ИНН), регистрация в консульстве.",
    items: ["Свидетельство о рождении", "CPF ребенка", "Регистрация"],
  },
  {
    icon: Award,
    title: "Паспорт",
    period: "2-4 недели",
    description:
      "Получение бразильского паспорта для ребенка. Подача документов на ВНЖ родителей.",
    items: ["Паспорт ребенка", "ВНЖ родителям", "Апостиль документов"],
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="py-20 md:py-32 bg-sand-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-ocean-100 text-ocean-700 rounded-full text-sm font-medium mb-4">
            Этапы работы
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Как мы работаем
          </h2>
          <p className="text-lg text-text-secondary">
            Прозрачный процесс от первого звонка до получения паспорта.
            Мы рядом на каждом этапе.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (hidden on mobile) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-ocean-200 -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative lg:flex lg:items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content card */}
                <div className={`lg:w-[calc(50%-40px)] ${index % 2 === 0 ? "lg:pr-0" : "lg:pl-0"}`}>
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-sand-200 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-ocean-500 rounded-xl flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold text-text-primary">
                            {step.title}
                          </h3>
                          <span className="text-sm text-ocean-600 font-medium">
                            {step.period}
                          </span>
                        </div>
                        <p className="text-text-secondary mb-4">
                          {step.description}
                        </p>
                        <ul className="space-y-2">
                          {step.items.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                              <CheckCircle2 className="w-4 h-4 text-ocean-500 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center dot (hidden on mobile) */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-ocean-500 rounded-full items-center justify-center text-white font-bold z-10 border-4 border-sand-50">
                  {index + 1}
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block lg:w-[calc(50%-40px)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
