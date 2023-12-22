import Chatbox from "@/components/ChatBox"
import CustomerService from "@/components/CustomerService"
import Hero from "@/components/home/Hero/Hero"
import Contact from "@/components/home/Contact/Contact"
import BasicFAQ from "@/components/home/F&Q/F&Q"
import BlogPostCarousel from "@/components/Carousel"

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center space-y-10 w-screen bg-[#f6f6f6]">
      <Hero/>
      <BlogPostCarousel/>
      <BasicFAQ/>
      <Contact className="w-full h-full flex items-center justify-center"/>
      {/* <Chatbox />
      <CustomerService /> */}
    </main>
  )
}
