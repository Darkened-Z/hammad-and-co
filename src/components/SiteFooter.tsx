import Link from "next/link";
import { nav, site } from "@/lib/site";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bone">
      <div className="shell py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-display text-[1.6rem] font-bold tracking-[-0.03em] text-ink">
              {site.name}
            </p>
            <p className="mt-3 max-w-xs text-[0.95rem] leading-[1.6] text-bark/85">
              {site.descriptor}. Trading on Cheetham Hill since {site.established}.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-5">Find us</p>
            <address className="space-y-1 text-[0.95rem] not-italic leading-[1.65] text-bark/90">
              <p>{site.address.line1}</p>
              <p>
                {site.address.city} {site.address.postcode}
              </p>
              <p>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="link-underline"
                >
                  {site.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className="link-underline">
                  {site.email}
                </a>
              </p>
            </address>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-5">Pages</p>
            <ul className="space-y-2 text-[0.95rem] text-bark/90">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-5">Shop online</p>
            <ul className="space-y-2 text-[0.95rem] text-bark/90">
              <li>
                <a
                  href={site.marketplaces.amazon}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline"
                >
                  Amazon storefront
                </a>
              </li>
              <li>
                <a
                  href={site.marketplaces.ebay}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline"
                >
                  eBay shop
                </a>
              </li>
              {site.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rule mt-16 flex flex-col gap-3 pt-8 text-[0.85rem] text-bark/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.name} All rights reserved.
          </p>
          <p>
            {site.address.city}, {site.address.country}
          </p>
        </div>
      </div>
    </footer>
  );
}
