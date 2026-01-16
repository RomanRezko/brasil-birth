"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "О нас", href: "#about" },
  { label: "Этапы", href: "#roadmap" },
  { label: "Цены", href: "#pricing" },
  { label: "Отзывы", href: "#trust" },
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
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-ocean-600">Brazil</span>
            <span className="text-2xl font-bold text-text-primary">Baby</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-text-secondary hover:text-ocean-600 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="telegram" size="default" asChild>
              <a
                href="https://t.me/brazilbaby"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Send className="w-4 h-4" />
                Telegram
              </a>
            </Button>
            <Button variant="whatsapp" size="default" asChild>
              <a
                href="https://wa.me/5521999999999?text=Здравствуйте! Интересуют роды в Бразилии"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-text-primary"
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
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-text-secondary hover:text-ocean-600 transition-colors font-medium py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                  <div className="flex flex-col gap-2 mt-2">
                    <Button variant="telegram" size="default" asChild>
                      <a
                        href="https://t.me/brazilbaby"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Send className="w-4 h-4" />
                        Telegram
                      </a>
                    </Button>
                    <Button variant="whatsapp" size="default" asChild>
                      <a
                        href="https://wa.me/5521999999999?text=Здравствуйте! Интересуют роды в Бразилии"
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
