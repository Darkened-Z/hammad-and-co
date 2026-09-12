/* ---------------------------------------------------------------------------
   ALL EDITABLE CONTENT LIVES HERE.
   Swap the values below for the real business details — nothing else needs
   touching. Items marked TODO are placeholders standing in for facts not yet
   supplied (address, phone, marketplace URLs, review counts).
--------------------------------------------------------------------------- */

export const site = {
  name: "Hammad & Co.",
  descriptor: "Grocery & General Store",
  established: 2011,
  tagline: "The shelves you trust, wherever you shop",
  metaDescription:
    "Hammad & Co. is a family grocery and general store in Manchester, selling the same stock across the counter, on Amazon and on eBay.",

  // TODO — replace with the real trading address, number and inbox.
  address: {
    line1: "128 Cheetham Hill Road",
    city: "Manchester",
    postcode: "M8 8PZ",
    country: "United Kingdom",
    mapsUrl: "https://maps.google.com/?q=Cheetham+Hill+Road+Manchester",
  },
  phone: "0161 000 0000",
  email: "hello@hammadandco.co.uk",

  hours: [
    { days: "Monday – Friday", time: "7:00 – 22:00" },
    { days: "Saturday", time: "7:00 – 22:00" },
    { days: "Sunday", time: "8:00 – 21:00" },
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
  sub: "A family grocery and general store in Manchester — now feeding thousands more through Amazon and eBay.",
  cta: { label: "Browse the shelves", href: "/shop" },
  image: "/images/produce-shelves.jpg",
  imageAlt: "Fruit and vegetable shelves stacked at Hammad & Co.",
};

export const stats = [
  { value: "15 yrs", label: "On the same street" },
  { value: "1,400+", label: "Lines stocked" },
  { value: "4.8", label: "Amazon & eBay average" },
  { value: "7 days", label: "Open every week" },
];

export const about = {
  eyebrow: "About",
  heading: "It started with one shuttered unit and a Transit van",
  body: [
    "Fifteen years behind a counter teaches you what people actually reach for — not what a category manager thinks they should.",
    "In 2019 we put the same shelves online. Same buying, same prices, same answer when something turns up wrong.",
  ],
  cta: { label: "Read the story", href: "/about" },
  images: [
    { src: "/images/aisle-wide.jpg", alt: "The main aisle of the Cheetham Hill store" },
    { src: "/images/greens-display.jpg", alt: "Fresh herbs and greens on the produce display" },
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
    image: "/images/basket-goods.jpg",
    imageAlt: "Mixed grocery stock made up for dispatch",
  },
  {
    id: "store",
    name: "The Shop",
    badge: "Open 7 days",
    body: "Produce in at six, on the shelf by nine, gone by teatime. Card, cash, and a proper conversation across the counter.",
    cta: { label: "Get directions", href: site.address.mapsUrl },
    image: "/images/aisle-fresh.jpg",
    imageAlt: "Chilled aisle inside the store",
  },
  {
    id: "trade",
    name: "Trade & Wholesale",
    badge: "Account terms",
    body: "Cases and pallets for cafés, takeaways and corner shops across Greater Manchester. Delivered Tuesday and Friday.",
    cta: { label: "Open an account", href: "/contact" },
    image: "/images/warehouse-pallets.jpg",
    imageAlt: "Palletised stock in the wholesale unit",
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
    image: "/images/peppers-crates.jpg",
    imageAlt: "Crates of peppers, tomatoes and citrus",
    where: ["In store"],
  },
  {
    name: "Store Cupboard",
    blurb:
      "Rice, flour, oils, pulses and tinned goods — household tins through to 20kg catering sacks.",
    image: "/images/shelves-coffee.jpg",
    imageAlt: "Packed dry goods shelving",
    where: ["Amazon", "eBay", "In store"],
  },
  {
    name: "World Foods",
    blurb:
      "South Asian, Middle Eastern, Polish and Caribbean lines. The aisle people drive across the city for.",
    image: "/images/market-spread.jpg",
    imageAlt: "Wide spread of world food produce",
    where: ["eBay", "In store"],
  },
  {
    name: "Household & Cleaning",
    blurb:
      "Detergents, paper goods and kitchenware. Branded where it matters, own-label where it does not.",
    image: "/images/aisle-household.jpg",
    imageAlt: "Household and cleaning aisle",
    where: ["Amazon", "In store"],
  },
  {
    name: "Chilled & Dairy",
    blurb:
      "Milk, yoghurt, cheese and cooked meats. Deliveries in daily, dated properly, rotated properly.",
    image: "/images/dairy-deli.jpg",
    imageAlt: "Cheese, eggs, milk and bread from the chilled counter",
    where: ["In store"],
  },
  {
    name: "Bulk & Catering",
    blurb:
      "Sacks, cases and pallets, priced per unit rather than per pack. Built for kitchens, not cupboards.",
    image: "/images/warehouse-pallets.jpg",
    imageAlt: "Bulk sacks and cases on pallets",
    where: ["eBay", "Trade"],
  },
  {
    name: "Clearance & Job Lots",
    blurb:
      "End-of-line stock, overruns and the occasional genuine find. Listed as-is and described honestly.",
    image: "/images/warehouse-aisle.jpg",
    imageAlt: "End-of-line stock held in the racking",
    where: ["eBay"],
  },
  {
    name: "Weekly Boxes",
    blurb:
      "Fruit and veg boxes made up Thursday night. Collect Friday, or delivered inside the M60.",
    image: "/images/basket-shopper.jpg",
    imageAlt: "A weekly fruit and vegetable box being made up",
    where: ["Amazon", "In store"],
  },
];

export const featured = {
  eyebrow: "This week",
  heading: "On the shelf right now",
  body: "What came off the van this morning, and what is moving fastest across the three counters.",
  slides: [
    { src: "/images/produce-shelves.jpg", alt: "Full produce wall", caption: "Produce wall, Tuesday market run" },
    { src: "/images/citrus-crates.jpg", alt: "Crates of citrus fruit", caption: "Spanish citrus, in by the case" },
    { src: "/images/carrots-market.jpg", alt: "Carrots and spring onions", caption: "Roots and alliums, loose by the kilo" },
    { src: "/images/market-stall.jpg", alt: "Market stall produce", caption: "Salad line, restocked twice daily" },
    { src: "/images/root-veg.jpg", alt: "Assorted root vegetables", caption: "Winter roots, catering sacks" },
    { src: "/images/veg-board.jpg", alt: "Vegetables arranged on a board", caption: "Weekly box, standard build" },
    { src: "/images/fruit-bowl.jpg", alt: "Bowl of mixed fruit", caption: "Cut fruit, made up in store" },
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
  heading: "Come see us, or have it sent",
  body: "Cheetham Hill seven days a week. Amazon and eBay whenever the shop is shut.",
  primary: { label: "Get directions", href: site.address.mapsUrl },
  secondary: { label: "Talk to us", href: "/contact" },
};
