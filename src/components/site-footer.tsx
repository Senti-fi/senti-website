import Link from "next/link";

const COLUMNS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Product",
    links: [
      { label: "Save", href: "/save" },
      { label: "Invest", href: "/invest" },
      { label: "Lucy", href: "/lucy" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "How it works", href: "/#how-it-works" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line-soft bg-surface-soft">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-12">
          <div className="col-span-2 md:col-span-5">
            <Link href="/" className="flex items-center gap-2">
              <span className="relative inline-flex h-7 w-7 items-center justify-center overflow-hidden rounded-[8px] bg-gradient-to-br from-senti-blue to-senti-cyan">
                <span className="text-[13px] font-semibold leading-none text-white">
                  S
                </span>
              </span>
              <span className="text-[15px] font-semibold tracking-tight text-ink">
                Senti
              </span>
            </Link>
            <p className="mt-5 max-w-xs font-serif text-[20px] leading-[1.3] tracking-tight text-ink">
              Live your life. We&rsquo;ll handle the money.
            </p>
            <p className="mt-3 text-[13px] text-ink-faint">senti.finance</p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading} className="md:col-span-2">
              <h4 className="text-[12px] font-semibold uppercase tracking-wider text-ink-faint">
                {col.heading}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-ink-muted transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-1" />
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-8 text-[12px] text-ink-faint md:flex-row md:items-center md:justify-between">
          <span>© Senti. One account, endless possibilities.</span>
          <span>Built for stablecoins. Made for people.</span>
        </div>
      </div>
    </footer>
  );
}
