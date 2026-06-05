"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Compass,
  Handshake,
  LineChart,
  Menu,
  PiggyBank,
  ShieldCheck,
  Sparkles,
  X,
  type LucideIcon,
} from "lucide-react";
import { NavDropdown, type NavDropdownItem } from "@/components/nav-dropdown";

const PRODUCT_ITEMS: NavDropdownItem[] = [
  {
    label: "Save",
    description: "Flexible, fixed, or locked savings.",
    href: "/save",
    icon: PiggyBank,
  },
  {
    label: "Invest",
    description: "Vetted yield, on your terms.",
    href: "/invest",
    icon: LineChart,
  },
  {
    label: "Lucy",
    description: "Your AI CFO, inside Senti.",
    href: "/lucy",
    icon: Sparkles,
  },
];

const COMPANY_ITEMS: NavDropdownItem[] = [
  {
    label: "About",
    description: "Why we built Senti.",
    href: "/about",
    icon: Compass,
  },
  {
    label: "Security",
    description: "How we protect your money.",
    href: "/security",
    icon: ShieldCheck,
  },
  {
    label: "Partners",
    description: "Build with us.",
    href: "/partners",
    icon: Handshake,
  },
  {
    label: "Careers",
    description: "Join the team.",
    href: "/careers",
    icon: Briefcase,
  },
];

const SIMPLE_LINKS = [
  { label: "Stories", href: "/stories" },
  { label: "FAQ", href: "/faq" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line-soft bg-surface/80 backdrop-blur supports-[backdrop-filter]:bg-surface/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-6 lg:px-10">
        <Link
          href="/"
          className="group flex items-center gap-2"
          aria-label="Senti — Home"
          onClick={() => setOpen(false)}
        >
          <SentiMark />
          <span className="font-serif text-[28px] font-medium leading-none tracking-[-0.02em] text-ink sm:text-[40px]">
            Senti
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          <NavDropdown label="Product" items={PRODUCT_ITEMS} />
          <NavDropdown label="Company" items={COMPANY_ITEMS} />
          {SIMPLE_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[14px] text-ink-muted transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/get-started"
            className="inline-flex h-10 items-center gap-1.5 rounded-button bg-ink px-4 text-[14px] font-medium text-surface transition-colors hover:bg-senti-navy sm:px-5"
          >
            Get started
            <ArrowRight className="hidden h-3.5 w-3.5 sm:block" strokeWidth={2.25} />
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-button text-ink transition-colors hover:bg-surface-muted md:hidden"
          >
            {open ? <X className="h-5 w-5" strokeWidth={2} /> : <Menu className="h-5 w-5" strokeWidth={2} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden">
          <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-surface px-5 pb-8 pt-2">
            <MobileGroup label="Product" items={PRODUCT_ITEMS} onNavigate={() => setOpen(false)} />
            <MobileGroup label="Company" items={COMPANY_ITEMS} onNavigate={() => setOpen(false)} />
            <div className="mt-4 border-t border-line-soft pt-2">
              {SIMPLE_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-[15px] font-medium text-ink transition-colors hover:bg-surface-muted"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function MobileGroup({
  label,
  items,
  onNavigate,
}: {
  label: string;
  items: NavDropdownItem[];
  onNavigate: () => void;
}) {
  return (
    <div className="mt-4 first:mt-2">
      <div className="px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-faint">
        {label}
      </div>
      <div className="mt-1">
        {items.map((item) => {
          const Icon = item.icon as LucideIcon;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className="flex items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-surface-muted"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-senti-blue/10 to-senti-cyan/10 text-ink">
                <Icon className="h-4 w-4" strokeWidth={2} />
              </span>
              <span className="min-w-0">
                <span className="block text-[15px] font-semibold leading-tight text-ink">
                  {item.label}
                </span>
                <span className="mt-0.5 block text-[12px] leading-snug text-ink-muted">
                  {item.description}
                </span>
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function SentiMark() {
  return (
    <Image
      src="/senti-logo.svg"
      alt=""
      width={56}
      height={56}
      priority
      unoptimized
      className="h-10 w-10 object-contain sm:h-14 sm:w-14"
    />
  );
}
