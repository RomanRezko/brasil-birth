"use client";

import { motion } from "framer-motion";
import { Check, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Базовый",
    subtitle: "Документы",
    price: "от $3,500",
    description: "Идеально для тех, кто хочет самостоятельно организовать поездку",
    features: [
      "Консультация по визе",
      "Подбор госпиталя и врача",
      "Оформление всех документов",
      "Свидетельство о рождении",
      "CPF ребенка",
      "Паспорт Бразилии",
    ],
    notIncluded: [
      "Трансфер и встреча",
      "Личный куратор",
      "Подбор жилья",
    ],
    popular: false,
    cta: "Выбрать план",
  },
  {
    name: "Комфорт",
    subtitle: "Сопровождение",
    price: "от $7,500",
    description: "Оптимальный баланс цены и комфорта. Выбор большинства семей",
    features: [
      "Всё из пакета «Базовый»",
      "Встреча в аэропорту",
      "Подбор апартаментов",
      "Личный русскоязычный куратор",
      "Сопровождение в госпиталь",
      "Переводчик на родах",
      "ВНЖ для родителей",
      "Поддержка 24/7",
    ],
    notIncluded: [],
    popular: true,
    cta: "Выбрать план",
  },
  {
    name: "VIP",
    subtitle: "Всё включено",
    price: "от $15,000",
    description: "Премиальный сервис с максимальным комфортом и заботой",
    features: [
      "Всё из пакета «Комфорт»",
      "VIP-палата в госпитале",
      "Личный водитель",
      "Премиум апартаменты у океана",
      "Няня на первые дни",
      "Экскурсионная программа",
      "Помощь с перелетом бизнес-класса",
      "Юридическое сопровождение",
    ],
    notIncluded: [],
    popular: false,
    cta: "Выбрать план",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-white">
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
            Тарифы
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Прозрачные цены без скрытых платежей
          </h2>
          <p className="text-lg text-text-secondary">
            Выберите подходящий пакет услуг. Стоимость госпиталя и проживания
            рассчитывается отдельно.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={cn(
                  "h-full relative overflow-hidden transition-all duration-300",
                  plan.popular
                    ? "border-ocean-500 border-2 shadow-xl scale-[1.02]"
                    : "border-sand-200 hover:border-ocean-200"
                )}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-ocean-500 text-white text-xs font-semibold px-4 py-1.5 rounded-bl-xl flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      Популярный
                    </div>
                  </div>
                )}

                <CardHeader className="pb-4">
                  <div className="mb-2">
                    <span className="text-sm text-ocean-600 font-medium">
                      {plan.subtitle}
                    </span>
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-text-primary">
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-text-muted text-sm mt-2">
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-ocean-500 flex-shrink-0 mt-0.5" />
                        <span className="text-text-secondary text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {plan.notIncluded.length > 0 && (
                    <div className="border-t border-sand-200 pt-4 mb-6">
                      <p className="text-xs text-text-muted mb-2">Не включено:</p>
                      <ul className="space-y-2">
                        {plan.notIncluded.map((item, i) => (
                          <li
                            key={i}
                            className="text-text-muted text-sm line-through opacity-60"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Button
                    variant={plan.popular ? "default" : "outline"}
                    className="w-full"
                    size="lg"
                    asChild
                  >
                    <a href="#contact">
                      {plan.cta}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-text-muted text-sm mt-10"
        >
          * Стоимость родов в госпитале: от $5,000 до $15,000 в зависимости от выбора клиники и типа палаты.
          <br />
          Проживание: от $2,000/месяц за комфортные апартаменты.
        </motion.p>
      </div>
    </section>
  );
}
