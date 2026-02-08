"use client";

import { motion } from "framer-motion";
import { Quote, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { reviews } from "@/data/reviews";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export default function ReviewsPage() {
  // Group reviews by year
  const reviewsByYear = reviews.reduce((acc, review) => {
    if (!acc[review.year]) {
      acc[review.year] = [];
    }
    acc[review.year].push(review);
    return acc;
  }, {} as Record<number, typeof reviews>);

  const years = Object.keys(reviewsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <>
      <Header />
      <main className="pt-24 pb-16 bg-gradient-to-b from-sand-50 to-white min-h-screen">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Back button */}
          <div className="mb-8">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/#trust">
                <ArrowLeft className="w-4 h-4" />
                Назад
              </Link>
            </Button>
          </div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              Отзывы наших клиентов
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Истории семей, которые доверили нам самое важное — рождение ребёнка в Бразилии
            </p>
            <div className="mt-6 inline-flex items-center gap-2 bg-ocean-50 border border-ocean-200 rounded-full px-5 py-2">
              <span className="font-bold text-ocean-600 text-xl">{reviews.length}+</span>
              <span className="text-text-secondary">отзывов от реальных клиентов</span>
            </div>
          </motion.div>

          {/* Reviews by year */}
          {years.map((year, yearIndex) => (
            <motion.div
              key={year}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: yearIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                <span className="w-12 h-12 bg-ocean-500 text-white rounded-full flex items-center justify-center text-lg">
                  {year}
                </span>
                <span className="text-text-muted font-normal text-base">
                  {reviewsByYear[year].length} отзывов
                </span>
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviewsByYear[year].map((review, index) => (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-sand-200 hover:shadow-lg transition-shadow"
                  >
                    <Quote className="w-8 h-8 text-ocean-200 mb-3" />
                    <p className="text-text-secondary mb-4 leading-relaxed">
                      «{review.text}»
                    </p>
                    <div className="border-t border-sand-100 pt-4">
                      <p className="font-semibold text-text-primary">
                        {review.author}
                      </p>
                      <p className="text-sm text-text-muted">
                        {review.location} · {review.date}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-16 bg-ocean-500 rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Хотите стать следующей историей успеха?
            </h2>
            <p className="text-ocean-100 mb-6 max-w-xl mx-auto">
              Оставьте заявку, и мы расскажем, как организовать роды в Бразилии для вашей семьи
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/#pricing">
                Рассчитать стоимость
              </Link>
            </Button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
