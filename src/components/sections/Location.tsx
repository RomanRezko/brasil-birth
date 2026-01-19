"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Waves, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const locationFeatures = [
  {
    icon: ShieldCheck,
    title: "Закрытые резиденции",
    description:
      "Охрана 24/7, вход только по пропускам, полная приватность и безопасность для прогулок с коляской.",
  },
  {
    icon: Building,
    title: "Инфраструктура",
    description:
      "Бассейны, фитнес-залы, парки и зоны барбекю прямо на территории вашего жилого комплекса.",
  },
  {
    icon: Waves,
    title: "Океан рядом",
    description:
      "Широкие чистые пляжи и набережная в 5-10 минутах ходьбы от дома.",
  },
];

export function Location() {
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Барра-да-Тижука: Ваша безопасная гавань в Рио
          </h2>
          <p className="text-lg text-text-secondary">
            Мы размещаем клиентов только в самом современном и безопасном районе
            города, который называют «Бразильским Майами»
          </p>
        </motion.div>

        {/* Location features */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {locationFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-sand-200 hover:border-ocean-200 transition-colors group">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-ocean-100 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-ocean-500 transition-colors">
                      <feature.icon className="w-8 h-8 text-ocean-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
