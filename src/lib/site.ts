/* ---------------------------------------------------------------------------
   ALL EDITABLE CONTENT LIVES HERE.
   Swap the values below for the real business details — nothing else needs
   touching. Items marked TODO are placeholders standing in for facts not yet
   supplied (address, phone, marketplace URLs, review counts).
--------------------------------------------------------------------------- */

export const site = {
  name: "Aliyar",
  descriptor: "Grocery & General Store",
  established: 2011,
  tagline: "The shelves you trust, wherever you shop",
  metaDescription:
    "Aliyar is a family grocery and general store in Manchester, selling the same stock across the counter, on Amazon and on eBay.",

  // TODO — replace with the real trading address, number and inbox.
  address: {
    line1: "128 Cheetham Hill Road",
    city: "Manchester",
    postcode: "M8 8PZ",
    country: "United Kingdom",
    mapsUrl: "https://maps.google.com/?q=Cheetham+Hill+Road+Manchester",
  },
  phone: "0161 000 0000",
  email: "hello@aliyar.co.uk",

  openFrom: 8,
  openTo: 21,
  hours: [
    { days: "Monday – Sunday", time: "8:00 – 21:00" },
    { days: "Trade deliveries", time: "Tuesday & Friday" },
  ],

  // TODO — point these at the live storefronts.
  marketplaces: {
    amazon: "https://www.amazon.co.uk/",
    ebay: "https://www.ebay.co.uk/",
  },

  social: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "Facebook", href: "https://facebook.com/" },
    { label: "WhatsApp", href: "https://wa.me/" },
  ],
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Shop", href: "/shop" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  heading: "The shelves you trust, wherever you shop",
  // Same sentence, broken for the display setting. Wrap a word in *…* to italicise it.
  lines: ["The shelves", "you *trust,*", "wherever", "you shop."],
  sub: "A family grocery and general store in Manchester — now feeding thousands more through Amazon and eBay.",
  cta: { label: "Browse the shelves", href: "/shop" },
  image: "/images/store/produce-wide.jpg",
  imageAlt: "The fruit and veg section at Aliyar, with sweet potatoes in the bins up front",
};

export const stats = [
  { value: "15 yrs", label: "On the same street" },
  { value: "1,400+", label: "Lines stocked" },
  { value: "4.8", label: "Amazon & eBay average" },
  { value: "7 days", label: "Open every week" },
];

export const about = {
  eyebrow: "About",
  heading: "It started with one shuttered unit and a *Transit van.*",
  body: [
    "Fifteen years behind a counter teaches you what people actually reach for — not what a category manager thinks they should.",
    "In 2019 we put the same shelves online. Same buying, same prices, same answer when something turns up wrong.",
  ],
  cta: { label: "Read the story", href: "/about" },
  images: [
    { src: "/images/store/produce-aisle.jpg", alt: "The produce run along the side wall of the store" },
    { src: "/images/store/veg-case.jpg", alt: "Cabbages, cucumbers and peppers in the chilled veg case" },
  ],
};

export type Channel = {
  id: string;
  name: string;
  badge: string;
  body: string;
  cta: { label: string; href: string };
  image: string;
  imageAlt: string;
};

export const channels: Channel[] = [
  {
    id: "amazon",
    name: "Amazon Storefront",
    badge: "Prime eligible",
    body: "Four hundred of our fastest-moving lines, Prime-eligible and dispatched from our own unit. Ordered by 4pm, out the same day.",
    cta: { label: "Open the Amazon store", href: site.marketplaces.amazon },
    image: "/images/parcels.jpg",
    imageAlt: "Packed parcels ready for dispatch",
  },
  {
    id: "ebay",
    name: "eBay Shop",
    badge: "Bulk & rare",
    body: "Case quantities, discontinued lines and imports you will not find on the high street. This is where the mixed stock lives.",
    cta: { label: "Open the eBay shop", href: site.marketplaces.ebay },
    image: "/images/store/pallet-deals.jpg",
    imageAlt: "Case stock stacked on pallets under the price boards",
  },
  {
    id: "store",
    name: "The Shop",
    badge: "Open 7 days",
    body: "Produce in at six, on the shelf by nine, gone by teatime. Card, cash, and a proper conversation across the counter.",
    cta: { label: "Get directions", href: site.address.mapsUrl },
    image: "/images/store/grocery-aisle.jpg",
    imageAlt: "A fully stocked grocery aisle inside the store",
  },
  {
    id: "trade",
    name: "Trade & Wholesale",
    badge: "Account terms",
    body: "Cases and pallets for cafés, takeaways and corner shops across Greater Manchester. Delivered Tuesday and Friday.",
    cta: { label: "Open an account", href: "/contact" },
    image: "/images/store/water-pallets.jpg",
    imageAlt: "Pallets of bottled water and soft drinks on the shop floor",
  },
];

export type Category = {
  name: string;
  blurb: string;
  image: string;
  imageAlt: string;
  where: string[];
};

export const categories: Category[] = [
  {
    name: "Fresh Produce",
    blurb:
      "Bought at market four mornings a week. If it is not good enough for our own kitchen it does not come off the van.",
    image: "/images/store/veg-case.jpg",
    imageAlt: "The chilled veg case: cabbage, cucumbers, peppers and greens",
    where: ["In store"],
  },
  {
    name: "Store Cupboard",
    blurb:
      "Rice, flour, oils, pulses and tinned goods — household tins through to 20kg catering sacks.",
    image: "/images/store/endcap-99c.jpg",
    imageAlt: "Tinned goods stacked on an endcap under 99¢ signs",
    where: ["Amazon", "eBay", "In store"],
  },
  {
    name: "World Foods",
    blurb:
      "South Asian, Middle Eastern, Polish and Caribbean lines. The aisle people drive across the city for.",
    image: "/images/store/pasta-endcap.jpg",
    imageAlt: "An endcap of imported pasta sauces and jars",
    where: ["eBay", "In store"],
  },
  {
    name: "Household & Cleaning",
    blurb:
      "Detergents, paper goods and kitchenware. Branded where it matters, own-label where it does not.",
    image: "/images/store/drinks-aisle.jpg",
    imageAlt: "Household and drinks aisle",
    where: ["Amazon", "In store"],
  },
  {
    name: "Chilled & Dairy",
    blurb:
      "Milk, yoghurt, cheese and cooked meats. Deliveries in daily, dated properly, rotated properly.",
    image: "/images/store/salad-case.jpg",
    imageAlt: "The chilled case with bagged salads and fresh-cut produce",
    where: ["In store"],
  },
  {
    name: "Bulk & Catering",
    blurb:
      "Sacks, cases and pallets, priced per unit rather than per pack. Built for kitchens, not cupboards.",
    image: "/images/store/water-pallets.jpg",
    imageAlt: "Bulk cases stacked on pallets",
    where: ["eBay", "Trade"],
  },
  {
    name: "Clearance & Job Lots",
    blurb:
      "End-of-line stock, overruns and the occasional genuine find. Listed as-is and described honestly.",
    image: "/images/store/crate-deals.jpg",
    imageAlt: "A wooden crate of clearance lines under a price sign",
    where: ["eBay"],
  },
  {
    name: "Weekly Boxes",
    blurb:
      "Fruit and veg boxes made up Thursday night. Collect Friday, or delivered inside the M60.",
    image: "/images/store/fruit-corner.jpg",
    imageAlt: "The fruit corner where weekly boxes are made up",
    where: ["Amazon", "In store"],
  },
];

export const featured = {
  eyebrow: "This week",
  heading: "On the shelf right now",
  body: "What came off the van this morning, and what is moving fastest across the three counters.",
  slides: [
    { src: "/images/store/produce-wide.jpg", alt: "The fruit and veg floor", caption: "Fruit & veg, restocked every morning" },
    { src: "/images/store/fruit-corner.jpg", alt: "The fruit corner", caption: "Apples, citrus and melons by the case" },
    { src: "/images/store/salad-case.jpg", alt: "Bagged salad and fresh-cut case", caption: "Bagged salad, rotated twice a day" },
    { src: "/images/store/bakery-tables.jpg", alt: "Bakery tables with cakes and pastries", caption: "Bakery tables by the front aisle" },
    { src: "/images/store/snack-endcap.jpg", alt: "Snack endcap", caption: "Snacks and sauces on the endcap" },
    { src: "/images/store/endcap-99c.jpg", alt: "99 cent endcap", caption: "The 99¢ wall, tins and staples" },
    { src: "/images/store/crate-deals.jpg", alt: "Crate of deals", caption: "Crate deals, while they last" },
  ],
};

export const testimonials = [
  {
    name: "Aisha Rehman",
    role: "Cheetham Hill",
    quote:
      "I have been getting my veg here since before the Amazon shop existed. Same quality when it arrives in a box, which frankly surprised me.",
    avatar: "/images/person-2.jpg",
  },
  {
    name: "Marcus Bell",
    role: "Café owner, Ancoats",
    quote:
      "Ordered six cases on a Thursday. On the doorstep Friday morning, correctly picked, no chasing anyone.",
    avatar: "/images/person-1.jpg",
  },
  {
    name: "Danuta Kowalska",
    role: "Salford",
    quote:
      "Half my shopping list is not in the big supermarkets. It is all here — and the eBay shop posts it to my sister in Leeds.",
    avatar: "/images/person-3.jpg",
  },
];

export const timeline = [
  {
    year: "2011",
    title: "One shop, one van",
    body: "Hammad takes on a shuttered unit on Cheetham Hill Road with four thousand pounds and a second-hand Transit.",
  },
  {
    year: "2015",
    title: "The wholesale round",
    body: "Cafés and takeaways start buying by the case. Tuesday and Friday become delivery days and never stop.",
  },
  {
    year: "2019",
    title: "First 200 lines on Amazon",
    body: "The pantry range goes online, packed by the same people who stack the shelves. No third-party fulfilment.",
  },
  {
    year: "2022",
    title: "eBay for everything else",
    body: "Bulk, imports and clearance find a second home. Stock that used to sit now moves inside the week.",
  },
  {
    year: "2026",
    title: "Same street, wider reach",
    body: "Fourteen hundred lines across three counters — and produce still bought at market four mornings a week.",
  },
];

export const values = [
  {
    title: "Bought right",
    body: "We buy at market ourselves, four mornings a week. No middleman markup dressed up as a premium.",
  },
  {
    title: "Priced plain",
    body: "One price, on the shelf and on the listing. No inflated RRP, no strikethrough theatre, no fake countdowns.",
  },
  {
    title: "Answered properly",
    body: "If something turns up wrong you get a person, not a portal — and usually the same day you wrote in.",
  },
];

export const closing = {
  heading: "Come see us, *or have it sent.*",
  body: "Cheetham Hill seven days a week. Amazon and eBay whenever the shop is shut.",
  primary: { label: "Get directions", href: site.address.mapsUrl },
  secondary: { label: "Talk to us", href: "/contact" },
};
