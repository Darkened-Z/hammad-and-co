export default function Marquee({
  items,
  className = "bg-tomato text-cream",
}: {
  items: string[];
  className?: string;
}) {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className="flex items-center whitespace-nowrap">
          <span className="px-6 font-display text-[1.75rem] italic tracking-[-0.02em] md:px-9 md:text-[2.5rem]">
            {item}
          </span>
          <span aria-hidden className="text-[1.1rem] opacity-60">✺</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={`marquee-wrap overflow-hidden py-4 md:py-5 ${className}`}>
      <div className="marquee flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
