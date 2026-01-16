"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, Calendar, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    dueDate: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    const message = `Здравствуйте! Меня зовут ${formData.name}. Интересуют роды в Бразилии. Телефон: ${formData.phone}. Предполагаемая дата родов: ${formData.dueDate}`;
    window.open(
      `https://wa.me/5521999999999?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      className="py-12 md:py-16 bg-gradient-to-br from-ocean-600 to-ocean-800 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-ocean-500 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-ocean-400 rounded-full blur-3xl opacity-20" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Остались вопросы?
              <br />
              <span className="text-sand-200">Получите бесплатную консультацию</span>
            </h2>
            <p className="text-lg text-ocean-100 mb-8">
              Заполните форму, и мы свяжемся с вами в течение 24 часов.
              Расскажем подробнее о процессе и подготовим индивидуальную смету расходов.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-[#0088CC] hover:bg-sand-100"
                asChild
              >
                <a
                  href="https://t.me/brazilbaby"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Send className="w-5 h-5" />
                  Написать в Telegram
                </a>
              </Button>
              <Button
                size="lg"
                className="bg-white text-[#25D366] hover:bg-sand-100"
                asChild
              >
                <a
                  href="https://wa.me/5521999999999?text=Здравствуйте! Интересуют роды в Бразилии"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  Написать в WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
              <h3 className="text-2xl font-bold text-text-primary mb-2">
                Заявка на консультацию
              </h3>
              <p className="text-text-muted mb-6">
                Мы свяжемся с вами в удобное время
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                  <Input
                    type="text"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="pl-12"
                    required
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                  <Input
                    type="tel"
                    placeholder="Телефон или WhatsApp"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="pl-12"
                    required
                  />
                </div>

                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                  <Input
                    type="text"
                    placeholder="Предполагаемая дата родов (например, март 2025)"
                    value={formData.dueDate}
                    onChange={(e) =>
                      setFormData({ ...formData, dueDate: e.target.value })
                    }
                    className="pl-12"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Отправить заявку
                  <Send className="w-4 h-4" />
                </Button>
              </form>

              <p className="text-xs text-text-muted text-center mt-4">
                Нажимая кнопку, вы соглашаетесь с{" "}
                <a href="#" className="text-ocean-600 hover:underline">
                  политикой конфиденциальности
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
