import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatIncluded from "@/components/WhatIncluded";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import ApplicationForm from "@/components/ApplicationForm";
import Footer from "@/components/Footer";
import ScrollDepthTracker from "@/components/ScrollDepthTracker";

export default function Home() {
  return (
    <main>
      <ScrollDepthTracker />
      <Hero />
      <About />
      <HowItWorks />
      <WhatIncluded />
      <WhoThisIsFor />
      <Pricing />
      <Testimonials />
      <FAQ />
      <ApplicationForm />
      <Footer />
    </main>
  );
}
