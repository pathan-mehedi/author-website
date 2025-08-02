import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Alexandra Sterling - Bestselling Author",
  description:
    "New York Times bestselling author crafting worlds that captivate hearts and minds. Explore fantasy, sci-fi, and romance novels.",
  keywords: "Alexandra Sterling, author, books, fantasy, science fiction, romance, bestseller, novels",
  authors: [{ name: "Alexandra Sterling" }],
  creator: "Mehedi Pathan",
  openGraph: {
    title: "Alexandra Sterling - Bestselling Author",
    description: "New York Times bestselling author crafting worlds that captivate hearts and minds.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexandra Sterling - Bestselling Author",
    description: "New York Times bestselling author crafting worlds that captivate hearts and minds.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
