"use client";

import { Send, MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./dialog";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">
            Выберите мессенджер
          </DialogTitle>
          <DialogDescription className="text-center">
            Мы ответим в течение 15 минут
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 mt-4">
          <a
            href="https://t.me/BabyRioBot"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl bg-[#0088cc]/10 hover:bg-[#0088cc]/20 transition-colors border border-[#0088cc]/20"
            onClick={() => onOpenChange(false)}
          >
            <div className="w-12 h-12 bg-[#0088cc] rounded-full flex items-center justify-center">
              <Send className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-semibold text-text-primary">Telegram</p>
              <p className="text-sm text-text-muted">Быстрые ответы 24/7</p>
            </div>
          </a>
          <a
            href="https://wa.me/375336056094"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-colors border border-[#25D366]/20"
            onClick={() => onOpenChange(false)}
          >
            <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-semibold text-text-primary">WhatsApp</p>
              <p className="text-sm text-text-muted">Голосовые и видеозвонки</p>
            </div>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
