"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

function londonMinutes() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const h = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
  const m = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
  return h * 60 + m;
}

export default function OpenStatus({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const check = () => {
      const now = londonMinutes();
      setOpen(now >= site.openFrom * 60 && now < site.openTo * 60);
    };
    check();
    const id = window.setInterval(check, 60_000);
    return () => window.clearInterval(id);
  }, []);

  const label =
    open === null
      ? `Open daily ${site.openFrom}–${site.openTo}`
      : open
        ? `Open now · till ${site.openTo}:00`
        : `Closed · opens ${site.openFrom}:00`;

  return (
    <span className={`tag items-center gap-2 ${className}`}>
      <span
        aria-hidden
        className={`h-1.5 w-1.5 rounded-full ${
          open === false ? "bg-mute" : "pulse-dot bg-[#2f9e5b]"
        }`}
      />
      {label}
    </span>
  );
}
