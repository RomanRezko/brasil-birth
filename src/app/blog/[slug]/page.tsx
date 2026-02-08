import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User, MessageCircle, Send } from "lucide-react";
import { getAllBlogPosts, getBlogPostBySlug } from "@/data/blog-posts";
import { Button } from "@/components/ui/button";
import { Header, Footer } from "@/components/sections";
import ReactMarkdown from "react-markdown";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Статья не найдена | Baby Rio",
    };
  }

  return {
    title: `${post.title} | Baby Rio`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-28 pb-8 md:pt-36 md:pb-12 bg-gradient-to-br from-sand-50 via-white to-ocean-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-brand-light hover:text-brand-deep transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Назад к блогу
          </Link>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted mb-8">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime} мин чтения
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="container mx-auto px-4 max-w-4xl -mt-4">
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Content */}
      <article className="container mx-auto px-4 max-w-3xl py-12 md:py-16">
        <div className="prose prose-lg prose-teal max-w-none prose-headings:text-brand-deep prose-headings:font-bold prose-p:text-text-secondary prose-p:leading-relaxed prose-a:text-brand-light prose-a:no-underline hover:prose-a:underline prose-strong:text-text-primary prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>

      {/* CTA Section */}
      <section className="container mx-auto px-4 max-w-3xl pb-16">
        <div className="bg-gradient-to-br from-ocean-500 to-brand-light rounded-2xl p-8 md:p-10 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Понравилась статья?
          </h3>
          <p className="text-white/90 mb-6 max-w-lg mx-auto">
            Напишите нам — ответим на все вопросы о родах в Бразилии
            и поможем спланировать вашу поездку.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#0088CC] hover:bg-[#0077B5] text-white"
            >
              <a
                href="https://t.me/BabyRioBot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Send className="w-5 h-5 mr-2" />
                Telegram
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white"
            >
              <a
                href="https://wa.me/375336056094?text=Здравствуйте! Прочитал статью на сайте и хочу узнать больше о родах в Бразилии"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
      <Footer />
    </>
  );
}
