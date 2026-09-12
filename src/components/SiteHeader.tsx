"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Lock the page while the mobile sheet is up.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 px-2.5 pt-2.5">
      <div className="bg-bone">
        <div className="shell flex h-16 items-center justify-between md:h-[4.75rem]">
          <Link
            href="/"
            className="font-display text-[1.4rem] font-bold tracking-[-0.03em] text-ink md:text-[1.6rem]"
          >
            {site.name}
          </Link>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  data-active={active}
                  className="link-underline text-[0.95rem] text-ink"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={site.address.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden text-[0.95rem] text-ink underline underline-offset-[5px] hover:text-bark sm:inline"
            >
              Visit the shop
            </a>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="-mr-1 flex h-10 w-10 items-center justify-center lg:hidden"
            >
              <span className="relative block h-3.5 w-6">
                <span
                  className={`absolute left-0 block h-px w-6 bg-ink transition-transform duration-300 ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-px w-6 bg-ink transition-transform duration-300 ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        className={`fixed inset-x-2.5 top-[var(--header-h)] z-40 origin-top bg-bone transition-all duration-300 lg:hidden ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <div className="shell flex flex-col gap-1 border-t border-ink/10 py-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-3xl font-bold tracking-[-0.03em] text-ink"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-6 flex flex-col gap-2 border-t border-ink/10 pt-6 text-[0.95rem] text-bark">
            <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.address.mapsUrl} target="_blank" rel="noreferrer">
              {site.address.line1}, {site.address.city}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
