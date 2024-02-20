import Chatbox from "@/components/ChatBox";
import CustomerService from "@/components/CustomerService";
import Hero from "@/components/home/Hero/HeroNew";
import Contact from "@/components/home/Contact/Contact";
import BasicFAQ from "@/components/home/F&Q/F&Q";
import CardCarousel from "@/components/Carousel";
import ModernCarousel from "@/components/PosterCarousel";
import AccordionSolutions from "@/components/UploadArea";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center space-y-10 w-screen bg-gradient-to-bl from-slate-800 to-cyan-700">
      <Hero />
      <section className="flex justify-center w-3/4">
        <div className="flex flex-col justify-start">
          <CardCarousel />
          <CardCarousel />
        </div>
        <ModernCarousel/>
      </section>
      <AccordionSolutions/>
      {/* <BasicFAQ />
      <section className="py-[5%] w-full h-full">
        <Contact className="flex items-center justify-center pb-[5%]" />
      </section> */}
      {/* <Chatbox />
      <CustomerService /> */}
    </main>
  );
}
