"use client";

import { motion } from "framer-motion";
import { Check, X, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { pricing } from "@/data/content";

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
                  "h-full relative overflow-hidden transition-all duration-300",
                  plan.isPopular
                    ? "border-ocean-500 border-2 shadow-xl scale-[1.02]"
                    : "border-sand-200 hover:border-ocean-200"
                )}
              >
                {plan.isPopular && (
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
                      {plan.price}
                    </span>
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <p className="text-text-muted text-sm mt-2">
                    {plan.slogan}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-ocean-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-text-muted flex-shrink-0 mt-0.5" />
                        )}
                        <span
                          className={cn(
                            "text-sm",
                            feature.included
                              ? "text-text-secondary"
                              : "text-text-muted line-through"
                          )}
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.isPopular ? "default" : "outline"}
                    className="w-full"
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

        {/* Additional info */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-text-muted text-sm mt-10"
        >
          * Бесплатная медицина (SUS) доступна всем. Частные роды стоят от $1500
          до $5000.
          <br />
          Проживание: от $1,500/месяц за комфортные апартаменты в безопасном
          районе.
        </motion.p>
      </div>
    </section>
  );
}
