import Hero from "@/components/sections/Hero";
import Introduction from "@/components/sections/Introduction";
// import Movie from "@/components/sections/Movie";
import Message from "@/components/sections/Members";
import Ticket from "@/components/sections/Ticket";
import Access from "@/components/sections/Access";
// import About from "@/components/sections/About";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Introduction />
        <Message />
        <Ticket />
        <Access />
        {/* <About /> */}
        {/* <Movie /> */}
      </main>
    </>
  );
}
