"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "О нас", href: "/#about" },
  { label: "Этапы", href: "/#roadmap" },
  { label: "Цены", href: "/#pricing" },
  { label: "Отзывы", href: "/#trust" },
  { label: "Блог", href: "/blog" },
];

export function Header() {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || isMobileMenuOpen
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-babyrio.png"
              alt="Baby Rio"
              width={758}
              height={212}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) =>
              item.href.includes("#") ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-text-secondary hover:text-ocean-600 transition-colors font-medium"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-text-secondary hover:text-ocean-600 transition-colors font-medium"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="telegram" size="default" asChild>
              <a
                href="https://t.me/BabyRioBot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Send className="w-4 h-4" />
                Telegram
              </a>
            </Button>
            <Button variant="whatsapp" size="default" asChild>
              <a
                href="https://wa.me/375336056094?text=Здравствуйте! Интересуют роды в Бразилии"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Icons + Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="https://t.me/BabyRioBot"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#0088CC]"
            >
              <Send className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/375336056094?text=Здравствуйте! Интересуют роды в Бразилии"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#25D366]"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
            <button
              className="p-2 text-text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mounted && (
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden"
              >
                <nav className="flex flex-col gap-4 pt-6 pb-4">
                  {navItems.map((item) =>
                    item.href.includes("#") ? (
                      <a
                        key={item.href}
                        href={item.href}
                        className="text-text-secondary hover:text-ocean-600 transition-colors font-medium py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-text-secondary hover:text-ocean-600 transition-colors font-medium py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                  <div className="flex flex-col gap-2 mt-2">
                    <Button variant="telegram" size="default" asChild>
                      <a
                        href="https://t.me/BabyRioBot"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Send className="w-4 h-4" />
                        Telegram
                      </a>
                    </Button>
                    <Button variant="whatsapp" size="default" asChild>
                      <a
                        href="https://wa.me/375336056094?text=Здравствуйте! Интересуют роды в Бразилии"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </header>
  );
}
