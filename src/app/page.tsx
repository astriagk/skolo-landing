import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyCTA from "@/components/layout/StickyCTA";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Benefits from "@/components/sections/Benefits";
import Security from "@/components/sections/Security";
import AppPreview from "@/components/sections/AppPreview";
import SocialProof from "@/components/sections/SocialProof";
import InterestForm from "@/components/sections/InterestForm";
import Pricing from "@/components/sections/Pricing";
import Roadmap from "@/components/sections/Roadmap";
import FAQ from "@/components/sections/FAQ";
import AboutUs from "@/components/sections/AboutUs";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <StickyCTA />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <HowItWorks />
        <Benefits />
        <Security />
        <AppPreview />
        <SocialProof />
        <InterestForm />
        <Pricing />
        <Roadmap />
        <FAQ />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
