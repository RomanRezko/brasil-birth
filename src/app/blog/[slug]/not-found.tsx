import Link from "next/link";
import { ArrowLeft, FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header, Footer } from "@/components/sections";

export default function BlogNotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sand-50 via-white to-ocean-50">
        <div className="container mx-auto px-4 text-center max-w-lg">
          <div className="w-20 h-20 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileQuestion className="w-10 h-10 text-ocean-500" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Статья не найдена
          </h1>
          <p className="text-text-secondary mb-8">
            К сожалению, запрашиваемая статья не существует или была удалена.
            Возможно, вы перешли по устаревшей ссылке.
          </p>
          <Button asChild className="bg-ocean-500 hover:bg-ocean-600">
            <Link href="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Вернуться к блогу
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
