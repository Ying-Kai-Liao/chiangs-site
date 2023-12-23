'use client'

import Contact from "@/components/home/Contact/Contact"

export default function ContactUs () {
    return (
        <main className="h-screen w-full flex items-center justify-center" style={{ background: "linear-gradient(45deg,#b580ff,rgba(225,5,34,0) 70%) repeat scroll 0 0,linear-gradient(135deg,#ef8fe9 10%,rgba(49,5,209,0) 80%) repeat scroll 0 0,linear-gradient(225deg,#efea8f 10%,rgba(10,219,216,0) 80%) repeat scroll 0 0,transparent linear-gradient(315deg,#ef8fd0 100%,rgba(9,245,5,0) 0) repeat scroll 0 0"}}>
            <Contact className="w-full h-full flex items-center justify-center" />
        </main>
    )
}