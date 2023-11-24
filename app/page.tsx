import Chatbox from "@/components/ChatBox"
import CustomerService from "@/components/CustomerService"
import Hero from "@/components/home/Hero"

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center bg-red-400 space-y-10 w-screen">
      <Hero/>
      <Chatbox />
      <CustomerService />
    </main>
  )
}
