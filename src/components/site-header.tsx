"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Compass,
  Handshake,
  LineChart,
  PiggyBank,
  ShieldCheck,
  Sparkles,
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

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line-soft bg-surface/80 backdrop-blur supports-[backdrop-filter]:bg-surface/70">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label="Senti — Home"
        >
          <SentiMark />
          <span className="font-serif text-[44px] font-medium leading-none tracking-[-0.02em] text-ink">
            Senti
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          <NavDropdown label="Product" items={PRODUCT_ITEMS} />
          <NavDropdown label="Company" items={COMPANY_ITEMS} />
          <Link
            href="/stories"
            className="text-[14px] text-ink-muted transition-colors hover:text-ink"
          >
            Stories
          </Link>
          <Link
            href="/faq"
            className="text-[14px] text-ink-muted transition-colors hover:text-ink"
          >
            FAQ
          </Link>
        </nav>

        <Link
          href="/get-started"
          className="inline-flex h-10 items-center gap-1.5 rounded-button bg-ink px-5 text-[14px] font-medium text-surface transition-colors hover:bg-senti-navy"
        >
          Get started
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.25} />
        </Link>
      </div>
    </header>
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
      className="h-14 w-14 object-contain"
    />
  );
}
