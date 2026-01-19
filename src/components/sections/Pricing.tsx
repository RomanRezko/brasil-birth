"use client";

import { motion } from "framer-motion";
import { Check, Star, ArrowRight, FileText, Baby } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { pricing, services } from "@/data/content";

const iconMap = {
  FileText,
  Baby,
};

export function Pricing() {
  return (
    <section id="pricing" className="py-12 md:py-16 bg-white">
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
            Пакеты «под ключ»
          </h2>
          <p className="text-lg text-text-secondary">
            Полное сопровождение от прилёта до получения документов.
            Стоимость госпиталя и проживания рассчитывается отдельно.
          </p>
        </motion.div>

        {/* Main pricing cards - 3 in a row */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pricing.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={cn(
                  "h-full relative overflow-hidden transition-all duration-300 flex flex-col",
                  plan.isPopular
                    ? "border-ocean-500 border-2 shadow-xl scale-[1.02]"
                    : "border-sand-200 hover:border-ocean-200"
                )}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-ocean-500 text-white text-xs font-semibold px-3 py-1 rounded-bl-xl flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      Хит продаж
                    </div>
                  </div>
                )}

                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-3 mb-2">
                    <span className="text-3xl font-bold text-ocean-600">
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {plan.slogan}
                  </p>
                </CardHeader>

                <CardContent className="pt-0 flex flex-col flex-1">
                  <ul className="space-y-3 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-ocean-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-text-secondary">
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.isPopular ? "default" : "outline"}
                    className="w-full mt-6"
                    size="lg"
                    asChild
                  >
                    <a href="#contact">
                      Выбрать план
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Services section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-3">
              Отдельные услуги
            </h3>
            <p className="text-text-secondary">
              Если вам нужна только часть сопровождения
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <Card className="h-full border-sand-200 hover:border-ocean-200 transition-colors bg-sand-50/50 flex flex-col">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-ocean-100 rounded-xl flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-ocean-600" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{service.name}</CardTitle>
                          <span className="text-xl font-bold text-ocean-600">
                            {service.price}
                          </span>
                        </div>
                      </div>
                      <p className="text-text-muted text-sm">
                        {service.slogan}
                      </p>
                    </CardHeader>

                    <CardContent className="pt-0 flex flex-col flex-1">
                      <ul className="grid grid-cols-2 gap-2 flex-1">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-ocean-500 flex-shrink-0" />
                            <span className="text-xs text-text-secondary">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        variant="outline"
                        className="w-full mt-4"
                        size="sm"
                        asChild
                      >
                        <a href="#contact">
                          Узнать подробнее
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Additional info */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-text-muted text-sm mt-10"
        >
          * Бесплатная медицина (SUS) доступна всем. Частные роды стоят от $1,500
          до $5,000.
          <br />
          Проживание: от $1,500/месяц за комфортные апартаменты в безопасном
          районе.
        </motion.p>
      </div>
    </section>
  );
}
