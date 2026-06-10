import Navbar from "@/components/Navbar";
import MouseGlow from "@/components/MouseGlow";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import Packages from "@/components/sections/Packages";
import Process from "@/components/sections/Process";
import WhyUs from "@/components/sections/WhyUs";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main className="relative">
      <MouseGlow />
      <Navbar />
      <Hero />
      <Problem />
      <Services />
      <Work />
      <Packages />
      <Process />
      <WhyUs />
      <CTA />
      <Footer />
    </main>
  );
}
