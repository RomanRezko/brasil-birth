"use client";

import { FileText, Plane, Baby, ScrollText, Award, ChevronRight } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Подготовка",
    period: "За 2-3 месяца",
    description: "Собираем документы и планируем поездку",
    items: [
      "Бесплатная консультация",
      "Помощь с визой B2",
      "Подбор жилья и клиники",
      "Составление плана",
    ],
    color: "ocean",
  },
  {
    icon: Plane,
    number: "02",
    title: "Прилёт",
    period: "30-32 неделя",
    description: "Встречаем и помогаем освоиться",
    items: [
      "Встреча в аэропорту",
      "Трансфер до жилья",
      "Знакомство с куратором",
      "Экскурсия по району",
    ],
    color: "sunset",
  },
  {
    icon: Baby,
    number: "03",
    title: "Роды",
    period: "38-40 неделя",
    description: "Рядом 24/7 в важный момент",
    items: [
      "Топовые врачи Рио",
      "Переводчик на родах",
      "Связь с клиникой 24/7",
      "Поддержка партнёра",
    ],
    color: "coral",
  },
  {
    icon: ScrollText,
    number: "04",
    title: "Документы",
    period: "1-2 недели",
    description: "Берём бюрократию на себя",
    items: [
      "Свидетельство о рождении",
      "CPF (налоговый номер)",
      "Регистрация в консульстве",
      "Все переводы и заверения",
    ],
    color: "palm",
  },
  {
    icon: Award,
    number: "05",
    title: "Паспорт",
    period: "2-4 недели",
    description: "Гражданство готово!",
    items: [
      "Бразильский паспорт",
      "Российский загранпаспорт",
      "ВНЖ для родителей",
      "Апостиль документов",
    ],
    color: "gold",
  },
];

const colorClasses: Record<string, { bg: string; light: string; border: string; text: string }> = {
  ocean: {
    bg: "bg-ocean-500",
    light: "bg-ocean-50",
    border: "border-ocean-300",
    text: "text-ocean-600",
  },
  sunset: {
    bg: "bg-sunset-500",
    light: "bg-sunset-50",
    border: "border-sunset-300",
    text: "text-sunset-600",
  },
  coral: {
    bg: "bg-coral-500",
    light: "bg-coral-50",
    border: "border-coral-300",
    text: "text-coral-600",
  },
  palm: {
    bg: "bg-palm-500",
    light: "bg-palm-50",
    border: "border-palm-300",
    text: "text-palm-600",
  },
  gold: {
    bg: "bg-amber-500",
    light: "bg-amber-50",
    border: "border-amber-300",
    text: "text-amber-600",
  },
};

export function Roadmap() {
  return (
    <section id="roadmap" className="py-12 md:py-16 bg-gradient-to-b from-sand-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Как мы работаем
          </h2>
          <p className="text-lg text-text-secondary">
            5 простых шагов от первого звонка до бразильского паспорта
          </p>
        </div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block">
          {/* Timeline header with numbers */}
          <div className="relative mb-6">
            {/* Background line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-ocean-500 via-coral-500 to-amber-500 -translate-y-1/2 rounded-full" />

            {/* Step numbers on line - use grid to center above cards */}
            <div className="relative grid grid-cols-5 gap-4">
              {steps.map((step, index) => {
                const colors = colorClasses[step.color] || colorClasses.ocean;
                return (
                  <div key={index} className="flex justify-center">
                    <div
                      className={`w-14 h-14 ${colors.bg} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg ring-4 ring-white relative z-10`}
                    >
                      {step.number}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, index) => {
              const colors = colorClasses[step.color] || colorClasses.ocean;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-5 shadow-md border-2 ${colors.border} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group`}
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 ${colors.light} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <step.icon className={`w-6 h-6 ${colors.text}`} />
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-text-primary text-lg mb-1">
                    {step.title}
                  </h3>
                  <span className={`text-sm font-semibold ${colors.text} block mb-2`}>
                    {step.period}
                  </span>
                  <p className="text-sm text-text-secondary mb-4">
                    {step.description}
                  </p>

                  {/* Items */}
                  <ul className="space-y-2">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                        <ChevronRight className={`w-4 h-4 ${colors.text} mt-0.5 flex-shrink-0`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline - Tablet & Mobile */}
        <div className="lg:hidden">
          <div className="relative pl-14 md:pl-16">
            {/* Vertical line */}
            <div className="absolute left-5 md:left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-ocean-500 via-coral-500 to-amber-500 rounded-full" />

            <div className="space-y-6">
              {steps.map((step, index) => {
                const colors = colorClasses[step.color] || colorClasses.ocean;
                return (
                  <div key={index} className="relative">
                    {/* Step number circle - centered vertically */}
                    <div
                      className={`absolute -left-14 md:-left-16 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 ${colors.bg} rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base shadow-lg ring-4 ring-white z-10`}
                    >
                      {step.number}
                    </div>

                    {/* Card */}
                    <div className={`bg-white rounded-xl p-4 md:p-5 shadow-md border-2 ${colors.border}`}>
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 md:w-12 md:h-12 ${colors.light} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <step.icon className={`w-5 h-5 md:w-6 md:h-6 ${colors.text}`} />
                        </div>
                        <div>
                          <h3 className="font-bold text-text-primary text-base md:text-lg">
                            {step.title}
                          </h3>
                          <span className={`text-xs md:text-sm font-semibold ${colors.text}`}>
                            {step.period}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-text-secondary mb-3">
                        {step.description}
                      </p>

                      {/* Items as chips */}
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {step.items.map((item, i) => (
                          <span
                            key={i}
                            className={`text-xs ${colors.light} ${colors.text} px-2 md:px-3 py-1 md:py-1.5 rounded-full`}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom summary */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-ocean-50 border border-ocean-200 rounded-full px-6 py-3">
            <span className="text-text-secondary">Весь процесс:</span>
            <span className="font-bold text-ocean-600 text-lg">3-4 месяца</span>
          </div>
        </div>
      </div>
    </section>
  );
}
