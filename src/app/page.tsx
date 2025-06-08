import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Ticket from "@/components/sections/Ticket";
import Access from "@/components/sections/Access";
import Goods from "@/components/sections/Goods";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Ticket />
        <Goods />
        <Access />
      </main>
    </>
  );
}
