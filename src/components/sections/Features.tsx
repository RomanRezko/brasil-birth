"use client";

import { motion } from "framer-motion";
import { Globe, Stethoscope, Users, Baby } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { features } from "@/data/content";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  Stethoscope,
  Users,
  Baby,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Features() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
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
            Преимущества
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Почему семьи выбирают Бразилию?
          </h2>
          <p className="text-lg text-text-secondary">
            Бразилия — одна из немногих стран, где действует право почвы.
            Ребенок, родившийся на территории страны, автоматически получает
            гражданство.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-sand-200 hover:border-ocean-200 transition-colors group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0 w-14 h-14 bg-ocean-100 rounded-2xl flex items-center justify-center group-hover:bg-ocean-500 transition-colors">
                        {IconComponent && (
                          <IconComponent className="w-7 h-7 text-ocean-600 group-hover:text-white transition-colors" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-text-primary mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-text-secondary leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
