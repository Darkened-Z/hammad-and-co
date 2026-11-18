import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import AboutStrip from "@/components/AboutStrip";
import ChannelGrid from "@/components/ChannelGrid";
import RangeBento from "@/components/RangeBento";
import Testimonials from "@/components/Testimonials";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import ClosingBand from "@/components/ClosingBand";
import { categories } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="mt-10 md:mt-14">
        <Marquee items={categories.map((c) => c.name)} />
      </div>
      <AboutStrip />
      <ChannelGrid />
      <RangeBento />
      <Testimonials />
      <FeaturedCarousel />
      <ClosingBand />
    </>
  );
}
