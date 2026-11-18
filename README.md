# Aliyar — store portfolio site

Multi-page portfolio site for an independent grocery and general store that trades
across three counters: the shop itself, an Amazon storefront and an eBay shop.

Art direction is "market signage": warm paper, near-black ink, one tomato-red accent,
a leaf-green band, Fraunces for the voice and mono price-tag labels. Every section has
its own layout — no repeated card grids.

## Stack

- Next.js 16 (App Router, Turbopack) + React 19
- Tailwind CSS v4 (tokens declared in `src/app/globals.css` under `@theme`)
- TypeScript
- `next/font/google` — **Fraunces** (display, variable `opsz`/`SOFT`), **Hanken Grotesk** (text), **JetBrains Mono** (labels)

No CMS, no database, no API keys. Every page is statically prerendered.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the build
```

## Where the content lives

**`src/lib/site.ts` is the only file you need to edit for content.** Business
details, navigation, hero copy, stats, the four sales channels, the eight
departments, the featured carousel, testimonials, the timeline and the closing
band all come from there.

Items marked `TODO` in that file are placeholders standing in for facts not yet
supplied:

| What | Currently |
| --- | --- |
| Trading address | 128 Cheetham Hill Road, Manchester M8 8PZ |
| Phone | 0161 000 0000 |
| Email | hello@aliyar.co.uk |
| Amazon storefront URL | amazon.co.uk root |
| eBay shop URL | ebay.co.uk root |
| Social links | platform roots |
| Stats (15 yrs / 1,400 lines / 4.8 avg) | plausible, unverified |
| Testimonials | written to sound like real customers, not real quotes |

Swap those for real values before the site goes anywhere public — particularly the
review average and the testimonials, which should not be published as fact until
they are.

## Design tokens

Declared under `@theme` in `src/app/globals.css`:

| Token | Hex | Use |
| --- | --- | --- |
| `paper` | `#F2EDE3` | Page surface (with fixed grain overlay) |
| `cream` | `#FAF7F0` | Raised surfaces, text on dark |
| `ink` | `#17150F` | Text, footer, primary button |
| `mute` | `#6B6558` | Labels, secondary text |
| `line` | `#D8CFBE` | Hairlines |
| `tomato` | `#D63A1F` | The one accent — emphasis, CTA, closing band |
| `leaf` | `#1E3B2C` | Dark band (channels, stats) |
| `mustard` | `#E3B23C` | Accent on dark surfaces only |

Rules: photos are square-cornered or arched (`rounded-t-full`), buttons and tags are
pills, no drop shadows. All photos get the `.photo` grade so stock and real shots match.
Display copy in `site.ts` can italicise a phrase with `*…*`.

## Pages

| Route | Contents |
| --- | --- |
| `/` | Hero + stats ledger, department marquee, about, channel index (hover-swapped photo), range bento, testimonial, photo strip, closing band |
| `/about` | Page hero, owner letter with pinned portrait, stats, 2011–2026 timeline, three trading rules |
| `/shop` | Page hero, channel ledger, sticky-filter department grid, delivery timetable, photo strip |
| `/contact` | Big phone/email lines, address, live open/closed hours, enquiry form |

## The contact form

`src/components/ContactForm.tsx` has **no backend**. On submit it composes a
pre-filled message and hands it to the visitor's mail client, which works on any
static host. To take submissions server-side, replace `handleSubmit` with a POST —
Formspree, Resend, or a Next.js route handler. The markup does not need to change.

## Images

`public/images/store/` holds 15 real photographs of the shop floor (produce, endcaps,
pallets, aisles), resized to 1400px. They are used both as content photos and, via
`PhotoBackdrop`, toned into section colours behind gradients (hero, channel band, stats,
closing band, footer, page heroes). `owner.jpg` and `storefront.jpg` are also real.
Still stock: `parcels.jpg` (Amazon channel) and the three testimonial avatars.

## Logo

`src/components/Logo.tsx` — the mark is the site's arch photo frame drawn as an "A",
with a leaf at the apex, on a tomato disc. `src/app/icon.svg` is the same mark as the favicon.

## Deploying

Static output, so anywhere works. On Vercel: import the repo, no configuration
needed. Point `cybrix.uk`-style custom domains at the deployment once the real
trading details are in.
