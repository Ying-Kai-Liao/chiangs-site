import Chatbox from "@/components/ChatBox";
import CustomerService from "@/components/CustomerService";

export default function DemoPage() {
  return (
    <main>
      <section className="flex flex-col justify-center items-center bg-red-200 h-screen space-y-10 w-screen">
        <Chatbox />
        <CustomerService />
      </section>
    </main>
  );
}
