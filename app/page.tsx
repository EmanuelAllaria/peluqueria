import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Pricing } from "@/components/sections/Pricing";
import { Gallery } from "@/components/sections/Gallery";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";
import { Booking } from "@/components/sections/Booking";
import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Pricing />
      <Gallery />
      <Team />
      <Testimonials />
      <Booking />
      <Contact />
      <FAQ />
    </>
  );
}
