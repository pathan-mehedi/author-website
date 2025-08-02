"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, BookOpen, User, Mail, FileText, Home, Bell, ExternalLink } from "lucide-react"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Books", href: "/books", icon: BookOpen },
  { name: "About", href: "/about", icon: User },
  { name: "Blog", href: "/blog", icon: FileText },
  { name: "Contact", href: "/contact", icon: Mail },
]

const hotNews = [
  {
    id: 1,
    text: "🎉 New Release: 'The Midnight Chronicles' now available in audiobook format!",
    link: "/books",
    isNew: true,
  },
  {
    id: 2,
    text: "📚 Book signing event in Seattle - March 25th, 2024",
    link: "/blog",
    isNew: false,
  },
  {
    id: 3,
    text: "🏆 'Hearts in Harmony' wins Goodreads Choice Award 2024!",
    link: "/about",
    isNew: true,
  },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Auto-rotate news items
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prev) => (prev + 1) % hotNews.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const currentNews = hotNews[currentNewsIndex]

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Hot News Bar */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white py-2 px-4 overflow-hidden">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <div className="flex items-center gap-2 flex-shrink-0">
                <Bell className="h-4 w-4 animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wide">Hot News</span>
                {currentNews.isNew && (
                  <span className="bg-yellow-400 text-purple-900 text-xs px-2 py-0.5 rounded-full font-bold">NEW</span>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <Link
                  href={currentNews.link}
                  className="text-sm hover:text-purple-200 transition-colors truncate block"
                >
                  {currentNews.text}
                </Link>
              </div>
            </div>

            {/* News Navigation Dots */}
            <div className="flex items-center gap-2 ml-4">
              {hotNews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentNewsIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentNewsIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to news item ${index + 1}`}
                />
              ))}
              <Link
                href={currentNews.link}
                className="ml-2 p-1 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Read full news article"
              >
                <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`bg-white/95 backdrop-blur-md border-b transition-all duration-300 ${
          isScrolled ? "shadow-lg border-gray-200/50" : "border-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <span className="text-white font-bold text-sm">AS</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition-all duration-300" />
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                  Alexandra Sterling
                </span>
                <div className="text-xs text-gray-500 -mt-1">Bestselling Author</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group ${
                      isActive ? "text-purple-600 bg-purple-50" : "text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                    {isActive && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-purple-600 rounded-full" />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Newsletter CTA */}
              <Button
                size="sm"
                className="hidden md:flex bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link href="#newsletter">
                  <Bell className="mr-2 h-4 w-4" />
                  Newsletter
                </Link>
              </Button>

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                  aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden border-t bg-white/95 backdrop-blur-md">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                        isActive
                          ? "text-purple-600 bg-purple-50"
                          : "text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.name}</span>
                      {isActive && <div className="w-2 h-2 bg-purple-600 rounded-full ml-auto" />}
                    </Link>
                  )
                })}

                {/* Mobile Newsletter CTA */}
                <div className="px-4 py-3">
                  <Button
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                    asChild
                  >
                    <Link href="#newsletter" onClick={() => setIsOpen(false)}>
                      <Bell className="mr-2 h-4 w-4" />
                      Subscribe to Newsletter
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}
