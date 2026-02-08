"use client";

import { motion } from "framer-motion";
import { Download, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LeadMagnet() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-ocean-50 via-teal-50 to-ocean-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-ocean-100"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-ocean-100 rounded-2xl flex items-center justify-center">
                <FileCheck className="w-10 h-10 text-ocean-600" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-3">
                Планируете роды, но боитесь забыть важные документы?
              </h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Скачайте наш полный чек-лист подготовки к перелёту и список
                документов для оформления гражданства. Бесплатно и без регистрации.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" className="gap-2" asChild>
                  <a href="/baby-rio-guide.pdf" download>
                    <Download className="w-5 h-5" />
                    Скачать чек-лист
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://t.me/BabyRioBot" target="_blank" rel="noopener noreferrer">
                    Задать вопрос в Telegram
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mt-8 pt-8 border-t border-sand-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-ocean-600">15+</p>
                <p className="text-sm text-text-muted">пунктов в чек-листе</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-ocean-600">PDF</p>
                <p className="text-sm text-text-muted">удобный формат</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-ocean-600">2025</p>
                <p className="text-sm text-text-muted">актуальные требования</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-ocean-600">0 ₽</p>
                <p className="text-sm text-text-muted">бесплатно</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
