import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, Pen } from "lucide-react"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "The Journey Behind 'The Midnight Chronicles'",
    excerpt:
      "Discover the inspiration and creative process that brought this bestselling fantasy series to life, from initial concept to published novel.",
    image: "/placeholder.svg?height=300&width=500",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Writing Process",
    featured: true,
  },
  {
    id: 2,
    title: "Upcoming Book Signing Tour - Spring 2024",
    excerpt:
      "Join me on my upcoming book tour across major cities. Meet fellow readers, get your books signed, and hear exclusive stories behind the scenes.",
    image: "/placeholder.svg?height=300&width=500",
    date: "March 10, 2024",
    readTime: "3 min read",
    category: "Events",
    featured: false,
  },
  {
    id: 3,
    title: "Building Believable Fantasy Worlds",
    excerpt:
      "A deep dive into the art of world-building, sharing techniques and insights I've learned over two decades of crafting immersive fictional universes.",
    image: "/placeholder.svg?height=300&width=500",
    date: "February 28, 2024",
    readTime: "12 min read",
    category: "Writing Tips",
    featured: false,
  },
  {
    id: 4,
    title: "Reader Spotlight: Your Favorite Characters",
    excerpt:
      "Celebrating the amazing fan art and character interpretations you've shared. See how readers envision the heroes and villains of my stories.",
    image: "/placeholder.svg?height=300&width=500",
    date: "February 20, 2024",
    readTime: "5 min read",
    category: "Community",
    featured: false,
  },
  {
    id: 5,
    title: "The Science Behind Science Fiction",
    excerpt:
      "Exploring the real scientific concepts that inspire my sci-fi novels and how I balance accuracy with storytelling in the Future Saga series.",
    image: "/placeholder.svg?height=300&width=500",
    date: "February 12, 2024",
    readTime: "10 min read",
    category: "Writing Process",
    featured: false,
  },
  {
    id: 6,
    title: "New Release Announcement: Hearts in Harmony",
    excerpt:
      "I'm thrilled to announce my latest romance novel! Get an exclusive first look at the cover, plot details, and pre-order information.",
    image: "/placeholder.svg?height=300&width=500",
    date: "January 30, 2024",
    readTime: "4 min read",
    category: "Announcements",
    featured: false,
  },
]

const categories = ["All", "Writing Process", "Events", "Writing Tips", "Community", "Announcements"]

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Blog & Updates</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest news, writing insights, and behind-the-scenes stories from Alexandra Sterling.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-purple-600 hover:bg-purple-700">Featured</Badge>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="space-y-4">
                    <Badge variant="outline">{featuredPost.category}</Badge>
                    <h2 className="text-3xl font-bold text-gray-900 leading-tight">{featuredPost.title}</h2>
                    <p className="text-gray-600 text-lg">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <Button className="bg-purple-600 hover:bg-purple-700 w-fit">
                      Read Full Post
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className={category === "All" ? "bg-purple-600 hover:bg-purple-700" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <Card
              key={post.id}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <Badge variant="outline" className="mb-3">
                      {post.category}
                    </Badge>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-3">{post.excerpt}</p>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-purple-50 group-hover:border-purple-200 bg-transparent"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20">
          <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
            <CardContent className="p-12 text-center">
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-white/20 rounded-full">
                    <Pen className="h-8 w-8" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold">Never Miss an Update</h2>
                <p className="text-xl text-purple-100">
                  Subscribe to get the latest blog posts, book announcements, and exclusive content delivered to your
                  inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg border-0 text-gray-900 focus:ring-2 focus:ring-purple-300"
                  />
                  <Button className="bg-white text-purple-600 hover:bg-gray-100">Subscribe</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
