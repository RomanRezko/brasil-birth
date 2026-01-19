import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { getAllBlogPosts } from "@/data/blog-posts";
import { Header, Footer } from "@/components/sections";

export const metadata: Metadata = {
  title: "Блог о жизни и родах в Бразилии | Baby Rio",
  description:
    "Полезные статьи о родах в Бразилии, получении гражданства, жизни в Рио-де-Жанейро и подготовке к рождению ребенка за границей.",
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <Header />
      <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-sand-50 via-white to-ocean-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-ocean-100 text-ocean-700 rounded-full text-sm font-medium mb-4">
              Блог
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Блог о жизни и родах в{" "}
              <span className="bg-gradient-to-r from-[#FFDF00] to-[#009B3A] bg-clip-text text-transparent">
                Бразилии
              </span>
            </h1>
            <p className="text-lg text-text-secondary">
              Полезные статьи, советы и истории от нашей команды. Узнайте все о
              родах в Бразилии, получении гражданства и жизни в Рио.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-text-muted text-lg">
                Статьи скоро появятся. Следите за обновлениями!
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white rounded-2xl border border-sand-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-text-muted mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime} мин
                        </span>
                      </div>
                      <h2 className="text-xl font-semibold text-brand-deep mb-3 group-hover:text-brand-light transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-text-secondary mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 text-brand-light font-medium group-hover:gap-3 transition-all">
                        Читать далее
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
      <Footer />
    </>
  );
}
