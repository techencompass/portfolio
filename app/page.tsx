import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Work } from "@/components/sections/work";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <div className="container mx-auto">
        <Hero />
        <About />
        <Experience />
        <Work />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}