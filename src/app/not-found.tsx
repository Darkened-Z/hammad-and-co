import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="shell min-h-viewport flex flex-col justify-center py-24">
      <p className="tag text-tomato">Error 404 · Out of stock</p>
      <h1 className="t-mega mt-8 max-w-[10ch]">
        That shelf is <em className="text-tomato">empty.</em>
      </h1>
      <p className="t-lead mt-8 max-w-md text-ink/70">
        The page you were after has moved or never existed. The range is all on the shop page.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Button href="/shop">Browse the shelves</Button>
        <Button href="/" variant="outline">Back to the front</Button>
      </div>
    </section>
  );
}
