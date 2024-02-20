import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/nav/NavBar'
import Footer from '@/components/Footer'
import { Toaster } from "@/components/ui/toaster"
import AuthContext from '@/context/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Virtaul Angel',
  description: '虛擬人服務',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
        <NavBar />
        {children}
        <Footer />
        <Toaster />
        </AuthContext>
      </body>
    </html>
  )
}
