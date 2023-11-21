import Chatbox from "@/components/ChatBox"
import CustomerService from "@/components/CustomerService"

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center bg-red-400 h-[1200px] space-y-10 w-screen">
      <Chatbox />
      <CustomerService />
    </main>
  )
}
