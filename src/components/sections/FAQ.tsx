"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Какая виза нужна для родов в Бразилии?",
    answer:
      "Для граждан России виза не требуется для пребывания до 90 дней. Этого достаточно для родов и оформления документов. Если вы планируете остаться дольше, мы поможем с продлением или оформлением ВНЖ сразу после рождения ребенка.",
  },
  {
    question: "Нужно ли знать португальский язык?",
    answer:
      "Нет, знание языка не требуется. Мы предоставляем русскоязычного куратора, который будет с вами на всех этапах. На родах присутствует профессиональный переводчик. В госпиталях премиум-класса персонал владеет английским языком.",
  },
  {
    question: "Сколько стоит перелет и когда лучше лететь?",
    answer:
      "Перелет из Москвы в Рио или Сан-Паулу стоит от $800 до $2000 в зависимости от класса и сезона. Рекомендуем прилетать на 30-32 неделе беременности. Большинство авиакомпаний разрешают перелет до 36 недели при наличии справки от врача.",
  },
  {
    question: "Сколько времени занимает оформление паспорта?",
    answer:
      "Бразильский паспорт для ребенка оформляется за 2-4 недели после получения свидетельства о рождении. Весь процесс от родов до паспорта занимает около 4-6 недель. При необходимости возможно ускоренное оформление.",
  },
  {
    question: "Могут ли родители получить ВНЖ?",
    answer:
      "Да, родители ребенка-гражданина Бразилии имеют право на постоянное проживание (ВНЖ). Заявление можно подать сразу после получения свидетельства о рождении. Процесс занимает 2-3 месяца. ВНЖ дает право на работу и социальные льготы.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-ocean-100 text-ocean-700 rounded-full text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Частые вопросы
          </h2>
          <p className="text-lg text-text-secondary">
            Ответы на самые популярные вопросы о родах в Бразилии
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
