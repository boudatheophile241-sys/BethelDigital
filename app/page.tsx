import { Hero } from "@/components/sections/Hero";
import { Partners } from "@/components/sections/Partners";
import { Story } from "@/components/sections/Story";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Partners />
      <Story />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <Contact />
    </>
  );
}
