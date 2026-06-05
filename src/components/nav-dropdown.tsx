"use client";

import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { ChevronDown, type LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export type NavDropdownItem = {
  label: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

const EASE = [0.16, 1, 0.3, 1] as const;

export function NavDropdown({
  label,
  items,
}: {
  label: string;
  items: NavDropdownItem[];
}) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex h-9 items-center gap-1 text-[14px] text-ink-muted transition-colors hover:text-ink data-[open=true]:text-ink"
        data-open={open}
      >
        {label}
        <ChevronDown
          className="h-3.5 w-3.5 text-ink-faint transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : undefined }}
          strokeWidth={2}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.18, ease: EASE }}
            className="absolute left-1/2 top-full z-50 w-[360px] -translate-x-1/2 pt-3"
          >
            <div
              role="menu"
              className="rounded-2xl border border-line bg-surface p-2 shadow-[0_30px_80px_-30px_rgba(10,22,40,0.25),0_4px_16px_-4px_rgba(10,22,40,0.08)]"
            >
              {items.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    role="menuitem"
                    onClick={() => setOpen(false)}
                    className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-surface-muted"
                  >
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-senti-blue/10 to-senti-cyan/10 text-ink">
                      <Icon className="h-4 w-4" strokeWidth={2} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="text-[14px] font-semibold leading-tight tracking-tight text-ink">
                        {item.label}
                      </div>
                      <div className="mt-1 text-[12px] leading-snug text-ink-muted">
                        {item.description}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
