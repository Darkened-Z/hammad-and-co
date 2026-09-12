# Hammad & Co. — store portfolio site

Multi-page portfolio site for an independent grocery and general store that trades
across three counters: the shop itself, an Amazon storefront and an eBay shop.

Built to match the Wix template `wh-1449` ("Family Photographer — Soft", demo brand
*Lenora Moss*). The palette, type ramp, zero-radius geometry and section rhythm were
lifted from that template's own stylesheet rather than approximated by eye.

## Stack

- Next.js 16 (App Router, Turbopack) + React 19
- Tailwind CSS v4 (tokens declared in `src/app/globals.css` under `@theme`)
- TypeScript
- `next/font/google` — **Wix Madefor Display** + **Wix Madefor Text**, the template's actual typefaces

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
| Email | hello@hammadandco.co.uk |
| Amazon storefront URL | amazon.co.uk root |
| eBay shop URL | ebay.co.uk root |
| Social links | platform roots |
| Stats (15 yrs / 1,400 lines / 4.8 avg) | plausible, unverified |
| Testimonials | written to sound like real customers, not real quotes |

Swap those for real values before the site goes anywhere public — particularly the
review average and the testimonials, which should not be published as fact until
they are.

## Design tokens

Taken from the reference template's compiled CSS:

| Token | Hex | Use |
| --- | --- | --- |
| `ink` | `#503228` | Body text, dark bands, buttons |
| `bark` | `#624136` | Secondary text, hovers |
| `bone` | `#F7F8F1` | Default page surface, header bar |
| `sage` | `#B5B9AC` | Muted section grounds |
| `sky` | `#AEC5D5` | Hero and page-hero field |
| `azure` | `#88ABCB` | Accent |
| `gold` | `#B69F52` | Accent |
| `blush` | `#EED6BB` | Alternate warm surface |

Two rules carried over from the template and worth keeping: **nothing is rounded**
(no `border-radius` anywhere), and headings are tightly tracked (`-0.022em`) with
near-solid leading.

## Pages

| Route | Contents |
| --- | --- |
| `/` | Hero, stats band, about strip, four sales channels, range preview, testimonials, featured carousel, closing band |
| `/about` | Page hero, owner note, stats, 2011–2026 timeline, three trading principles |
| `/shop` | Page hero, channel strip, filterable department grid, delivery routes, featured carousel |
| `/contact` | Details, opening hours, marketplace links, enquiry form, storefront band |

## The contact form

`src/components/ContactForm.tsx` has **no backend**. On submit it composes a
pre-filled message and hands it to the visitor's mail client, which works on any
static host. To take submissions server-side, replace `handleSubmit` with a POST —
Formspree, Resend, or a Next.js route handler. The markup does not need to change.

## Images

24 photographs in `public/images/`, sourced from Unsplash and committed to the repo
so the site has no external image dependency. Replace them with real photographs of
the shop, the stockroom and the owner as soon as they exist — the layout is built
around fixed aspect ratios (`4/5`, `4/3`, `1/1`, `3/4`), so swapped files just need
to be roughly the right shape.

## Deploying

Static output, so anywhere works. On Vercel: import the repo, no configuration
needed. Point `cybrix.uk`-style custom domains at the deployment once the real
trading details are in.
