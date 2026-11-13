import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import QuickContact from "@/components/layout/QuickContact";
import About from "@/components/sections/about/About";
import Contact from "@/components/sections/contact/Contact";
import CallToAction from "@/components/sections/cta/CallToAction";
import Education from "@/components/sections/education/Education";
import Experience from "@/components/sections/experience/Experience";
import Hero from "@/components/sections/hero/Hero";
import TechMarquee from "@/components/sections/hero/TechMarquee";
import Projects from "@/components/sections/projects/Projects";
import Services from "@/components/sections/services/Services";
import Skills from "@/components/sections/skills/Skills";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Services />
        <Experience />
        <Projects />
        <CallToAction />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      <QuickContact />
    </>
  );
}
