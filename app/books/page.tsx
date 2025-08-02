"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Search, Filter, ShoppingCart } from "lucide-react"
import Image from "next/image"

const allBooks = [
  {
    id: 1,
    title: "The Midnight Chronicles",
    cover: "/placeholder.svg?height=400&width=300",
    price: "$24.99",
    rating: 4.8,
    reviews: 2847,
    genre: "Fantasy",
    year: 2024,
    series: "Chronicles",
    bestseller: true,
    description: "A gripping tale of magic and mystery that will keep you turning pages until dawn.",
  },
  {
    id: 2,
    title: "Echoes of Tomorrow",
    cover: "/placeholder.svg?height=400&width=300",
    price: "$22.99",
    rating: 4.7,
    reviews: 1923,
    genre: "Sci-Fi",
    year: 2023,
    series: "Future Saga",
    bestseller: false,
    description: "A thought-provoking journey into humanity's future and the choices that define us.",
  },
  {
    id: 3,
    title: "Hearts in Harmony",
    cover: "/placeholder.svg?height=400&width=300",
    price: "$19.99",
    rating: 4.9,
    reviews: 3421,
    genre: "Romance",
    year: 2024,
    series: "Standalone",
    bestseller: true,
    description: "A beautiful love story that explores the depths of human connection and resilience.",
  },
  {
    id: 4,
    title: "Shadows of the Past",
    cover: "/placeholder.svg?height=400&width=300",
    price: "$21.99",
    rating: 4.6,
    reviews: 1654,
    genre: "Thriller",
    year: 2023,
    series: "Detective Series",
    bestseller: false,
    description: "A psychological thriller that delves into the darkest corners of human nature.",
  },
  {
    id: 5,
    title: "The Crystal Kingdom",
    cover: "/placeholder.svg?height=400&width=300",
    price: "$23.99",
    rating: 4.8,
    reviews: 2156,
    genre: "Fantasy",
    year: 2022,
    series: "Chronicles",
    bestseller: true,
    description: "The epic conclusion to the Chronicles series that fans have been waiting for.",
  },
  {
    id: 6,
    title: "Digital Dreams",
    cover: "/placeholder.svg?height=400&width=300",
    price: "$20.99",
    rating: 4.5,
    reviews: 987,
    genre: "Sci-Fi",
    year: 2022,
    series: "Future Saga",
    bestseller: false,
    description: "Exploring the intersection of technology and humanity in a digital age.",
  },
]

export default function BooksPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("all")
  const [selectedYear, setSelectedYear] = useState("all")
  const [sortBy, setSortBy] = useState("newest")

  const genres = ["all", ...new Set(allBooks.map((book) => book.genre))]
  const years = ["all", ...new Set(allBooks.map((book) => book.year.toString()))]

  const filteredBooks = allBooks
    .filter((book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesGenre = selectedGenre === "all" || book.genre === selectedGenre
      const matchesYear = selectedYear === "all" || book.year.toString() === selectedYear

      return matchesSearch && matchesGenre && matchesYear
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return b.year - a.year
        case "oldest":
          return a.year - b.year
        case "rating":
          return b.rating - a.rating
        case "price-low":
          return Number.parseFloat(a.price.replace("$", "")) - Number.parseFloat(b.price.replace("$", ""))
        case "price-high":
          return Number.parseFloat(b.price.replace("$", "")) - Number.parseFloat(a.price.replace("$", ""))
        default:
          return 0
      }
    })

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Complete Library</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore Alexandra Sterling's complete collection of novels, from bestselling series to standalone
            masterpieces.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search books..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <Select value={selectedGenre} onValueChange={setSelectedGenre}>
              <SelectTrigger>
                <SelectValue placeholder="Genre" />
              </SelectTrigger>
              <SelectContent>
                {genres.map((genre) => (
                  <SelectItem key={genre} value={genre}>
                    {genre === "all" ? "All Genres" : genre}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger>
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                {years.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year === "all" ? "All Years" : year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            Showing {filteredBooks.length} of {allBooks.length} books
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredBooks.map((book) => (
            <Card
              key={book.id}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  {book.bestseller && (
                    <Badge className="absolute top-4 left-4 z-10 bg-red-600 hover:bg-red-700">Bestseller</Badge>
                  )}
                  <Image
                    src={book.cover || "/placeholder.svg"}
                    alt={book.title}
                    width={300}
                    height={400}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{book.genre}</Badge>
                      <Badge variant="secondary">{book.year}</Badge>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{book.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{book.description}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(book.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {book.rating} ({book.reviews.toLocaleString()})
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <span className="text-xl font-bold text-purple-600">{book.price}</span>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Buy Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <Filter className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No books found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
          </div>
        )}
      </div>
    </div>
  )
}
