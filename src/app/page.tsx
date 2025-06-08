import About from "@/components/sections/About";
import Access from "@/components/sections/Access";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Ticket from "@/components/sections/Ticket";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <About />
        <Ticket />
        <Access />
      </main>
      <Footer />
    </>
  );
}
