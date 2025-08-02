import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowRight, BookOpen, Award, Users, Quote } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const featuredBooks = [
  {
    id: 1,
    title: "The Midnight Chronicles",
    cover: "/placeholder.svg?height=400&width=300&text=Book+Cover+1",
    price: "$24.99",
    rating: 4.8,
    reviews: 2847,
    genre: "Fantasy",
    bestseller: true,
    description: "A gripping tale of magic and mystery that will keep you turning pages until dawn.",
  },
  {
    id: 2,
    title: "Echoes of Tomorrow",
    cover: "/placeholder.svg?height=400&width=300&text=Book+Cover+2",
    price: "$22.99",
    rating: 4.7,
    reviews: 1923,
    genre: "Sci-Fi",
    bestseller: false,
    description: "A thought-provoking journey into humanity's future and the choices that define us.",
  },
  {
    id: 3,
    title: "Hearts in Harmony",
    cover: "/placeholder.svg?height=400&width=300&text=Book+Cover+3",
    price: "$19.99",
    rating: 4.9,
    reviews: 3421,
    genre: "Romance",
    bestseller: true,
    description: "A beautiful love story that explores the depths of human connection and resilience.",
  },
]

const stats = [
  { icon: BookOpen, label: "Books Published", value: "15+" },
  { icon: Award, label: "Literary Awards", value: "8" },
  { icon: Users, label: "Readers Worldwide", value: "2M+" },
  { icon: Star, label: "Average Rating", value: "4.8" },
]

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Goodreads Reviewer",
    avatar: "SM",
    rating: 5,
    text: "Alexandra Sterling has an incredible gift for creating characters that feel like real people. I couldn't put down 'The Midnight Chronicles' - it kept me reading until 3 AM!",
    gradient: "from-purple-400 to-pink-400",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Amazon Customer",
    avatar: "MJ",
    rating: 5,
    text: "Every book in the Chronicles series gets better and better. The world-building is phenomenal and the character development is unmatched. Can't wait for the next one!",
    gradient: "from-blue-400 to-indigo-400",
  },
  {
    id: 3,
    name: "Emma Lopez",
    role: "BookBub Member",
    avatar: "EL",
    rating: 5,
    text: "I've been following Alexandra's work for years, and 'Hearts in Harmony' made me cry happy tears. Her ability to write romance that feels authentic is unparalleled.",
    gradient: "from-green-400 to-emerald-400",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-purple-600/20 text-purple-200 border-purple-400/30">
                  New York Times Bestselling Author
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Alexandra
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    Sterling
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                  Crafting worlds that captivate hearts and minds, one story at a time.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/books">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Explore Books
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    About Alexandra
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <stat.icon className="h-8 w-8 mx-auto mb-2 text-purple-400" />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/placeholder.svg?height=600&width=500&text=Author+Photo"
                  alt="Alexandra Sterling - Author"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-pink-600/20 rounded-2xl transform rotate-3" />
            </div>
          </div>
        </div>
      </section>

      {/* Author Highlights Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="border-purple-200 text-purple-700">
                  About Alexandra
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Crafting Stories That
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                    Touch Hearts
                  </span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  With over two decades of storytelling experience, Alexandra Sterling has mastered the art of weaving
                  tales that transport readers to extraordinary worlds while exploring the depths of human emotion and
                  connection.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-purple-600">23</div>
                  <div className="text-sm text-gray-600">Languages Translated</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-purple-600">500K+</div>
                  <div className="text-sm text-gray-600">Books Sold This Year</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-purple-600">4.8★</div>
                  <div className="text-sm text-gray-600">Average Reader Rating</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-purple-600">15+</div>
                  <div className="text-sm text-gray-600">Years Writing</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/about">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                    Learn More About Alexandra
                  </Button>
                </Link>
                <Link href="/blog">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-purple-200 text-purple-700 hover:bg-purple-50 bg-transparent"
                  >
                    Read Latest Blog Posts
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-2xl">
                    <Award className="h-8 w-8 text-purple-600 mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">Award Winner</h3>
                    <p className="text-sm text-gray-600">
                      Hugo Award, World Fantasy Award, and Goodreads Choice Award recipient
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-6 rounded-2xl">
                    <Users className="h-8 w-8 text-blue-600 mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">Global Community</h3>
                    <p className="text-sm text-gray-600">
                      Connecting with readers worldwide through immersive storytelling
                    </p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-2xl">
                    <BookOpen className="h-8 w-8 text-green-600 mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">Bestselling Series</h3>
                    <p className="text-sm text-gray-600">
                      Multiple series on New York Times and international bestseller lists
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-100 to-red-100 p-6 rounded-2xl">
                    <Star className="h-8 w-8 text-orange-600 mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">Reader Favorite</h3>
                    <p className="text-sm text-gray-600">
                      Consistently rated 4.5+ stars across all major book platforms
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Featured Books</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the latest releases and bestselling novels that have captivated readers worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBooks.map((book) => (
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
                      alt={`${book.title} book cover`}
                      width={300}
                      height={400}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <Badge variant="outline" className="mb-2">
                        {book.genre}
                      </Badge>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{book.title}</h3>
                      <p className="text-gray-600 text-sm">{book.description}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center" aria-label={`Rating: ${book.rating} out of 5 stars`}>
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
                        {book.rating} ({book.reviews.toLocaleString()} reviews)
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <span className="text-2xl font-bold text-purple-600">{book.price}</span>
                      <Button className="bg-purple-600 hover:bg-purple-700">
                        Buy Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/books">
              <Button
                size="lg"
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
              >
                View All Books
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reader Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">What Readers Are Saying</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover why millions of readers worldwide have fallen in love with Alexandra's storytelling.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="relative overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4" aria-label={`${testimonial.rating} star rating`}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic">
                    <Quote className="h-4 w-4 text-purple-400 mb-2" />
                    {testimonial.text}
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold`}
                    >
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Review Statistics */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 lg:p-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-purple-600">50K+</div>
                <div className="text-gray-600">5-Star Reviews</div>
                <div className="flex justify-center" aria-label="5 star rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-purple-600">4.8</div>
                <div className="text-gray-600">Average Rating</div>
                <div className="text-sm text-gray-500">Across all platforms</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-purple-600">95%</div>
                <div className="text-gray-600">Recommend Rate</div>
                <div className="text-sm text-gray-500">Would recommend to friends</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-purple-600">2M+</div>
                <div className="text-gray-600">Happy Readers</div>
                <div className="text-sm text-gray-500">Worldwide community</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Join thousands of readers who have discovered their next favorite book
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/books">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Browse All Books
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-200 text-purple-700 hover:bg-purple-50 bg-transparent"
              >
                Read More Reviews
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-24 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-400/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-400/5 rounded-full blur-2xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-8 border border-white/20">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>

            {/* Content */}
            <div className="space-y-6 mb-12">
              <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Stay in the
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-yellow-300">
                  Literary Loop
                </span>
              </h2>
              <p className="text-xl lg:text-2xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
                Join 50,000+ readers and get exclusive previews, behind-the-scenes content, and early access to new
                releases.
              </p>
            </div>

            {/* Newsletter Form */}
            <div className="max-w-md mx-auto">
              <form className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20">
                  <div className="flex flex-col justify-center items-center sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        required
                        className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-pink-400/50 focus:border-transparent transition-all duration-300"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-400/10 to-yellow-400/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                    <Button
                      type="submit"
                      className="px-8 py-4 bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0"
                    >
                      Subscribe
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </form>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center gap-6 mt-8 text-purple-200 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>100% Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>No Spam Ever</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Unsubscribe Anytime</span>
                </div>
              </div>

              {/* Social Proof */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-purple-200 mb-4">Trusted by readers worldwide</p>
                <div className="flex items-center justify-center gap-8 opacity-60">
                  <div className="text-white font-semibold">50K+ Subscribers</div>
                  <div className="w-1 h-1 bg-white/40 rounded-full" />
                  <div className="text-white font-semibold">4.9★ Newsletter Rating</div>
                  <div className="w-1 h-1 bg-white/40 rounded-full" />
                  <div className="text-white font-semibold">Weekly Updates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
