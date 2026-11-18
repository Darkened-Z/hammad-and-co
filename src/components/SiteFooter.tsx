import Link from "next/link";
import { Wordmark } from "@/components/Logo";
import PhotoBackdrop from "@/components/PhotoBackdrop";
import { nav, site } from "@/lib/site";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  const telHref = `tel:${site.phone.replace(/\s/g, "")}`;

  return (
    <footer className="relative isolate overflow-hidden bg-ink text-cream">
      <PhotoBackdrop
        src="/images/store/bg/drinks-aisle.jpg"
        position="bottom"
        gradient="linear-gradient(180deg, rgb(23 21 15) 0%, rgb(23 21 15 / .92) 50%, rgb(23 21 15 / .62) 100%)"
      />
      <div className="shell pt-20 md:pt-28">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="tag text-mustard">Est. {site.established} · Cheetham Hill</p>
            <p className="mt-6 max-w-sm font-display text-[1.75rem] leading-[1.1] tracking-[-0.02em] md:text-[2.1rem]">
              Bought at market, sold <em className="text-mustard">three ways</em>, answered by a person.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="tag text-cream/45">Find us</p>
            <address className="mt-5 space-y-1 text-[0.95rem] not-italic leading-[1.7] text-cream/80">
              <p>{site.address.line1}</p>
              <p>{site.address.city} {site.address.postcode}</p>
              <p className="pt-3"><a href={telHref} className="link-underline">{site.phone}</a></p>
              <p><a href={`mailto:${site.email}`} className="link-underline">{site.email}</a></p>
            </address>
          </div>

          <div className="md:col-span-2">
            <p className="tag text-cream/45">Pages</p>
            <ul className="mt-5 space-y-1.5 text-[0.95rem] text-cream/80">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-underline">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="tag text-cream/45">Online</p>
            <ul className="mt-5 space-y-1.5 text-[0.95rem] text-cream/80">
              <li><a href={site.marketplaces.amazon} target="_blank" rel="noreferrer" className="link-underline">Amazon</a></li>
              <li><a href={site.marketplaces.ebay} target="_blank" rel="noreferrer" className="link-underline">eBay</a></li>
              {site.social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="link-underline">{s.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-20 overflow-hidden border-t border-cream/12 md:mt-28">
        <p
          aria-hidden
          className="shell select-none whitespace-nowrap pt-6 font-display text-[26vw] leading-[0.82] tracking-[-0.05em] text-cream/[0.1] xl:text-[22rem]"
        >
          <Wordmark />
        </p>
      </div>

      <div className="shell flex flex-col gap-2 border-t border-cream/12 py-6 text-[0.8rem] text-cream/50 sm:flex-row sm:justify-between">
        <p>&copy; {year} {site.name}</p>
        <p className="tag">{site.address.city} · {site.address.country}</p>
      </div>
    </footer>
  );
}
