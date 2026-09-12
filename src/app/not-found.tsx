import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="under-header bg-sky">
      <div className="shell min-h-viewport flex flex-col justify-center py-24">
        <p className="eyebrow mb-6">404</p>
        <h1 className="max-w-[9em] text-ink" style={{ fontSize: "clamp(2.5rem, 5.4vw, 4.25rem)" }}>
          That shelf is empty
        </h1>
        <p className="t-lead mt-7 max-w-md text-ink/85">
          The page you were after has moved or never existed. The range is all on
          the shop page.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/shop">Browse the shelves</Button>
          <Button href="/" variant="outline">
            Back to the front
          </Button>
        </div>
      </div>
    </section>
  );
}
