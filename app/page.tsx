import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedServices from "@/components/FeaturedServices";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedServices />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
}
