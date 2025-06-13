import Hero from "@/components/sections/Hero";
import Introduction from "@/components/sections/Introduction";
import Movie from "@/components/sections/Movie";
import Message from "@/components/sections/Message";
import Ticket from "@/components/sections/Ticket";
import Access from "@/components/sections/Access";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Introduction />
        <Movie />
        <Message />
        <Ticket />
        <Access />
      </main>
    </>
  );
}
