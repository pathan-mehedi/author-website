import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, BookOpen, Users, Calendar, Quote, ExternalLink } from "lucide-react"
import Image from "next/image"

const achievements = [
  {
    year: "2024",
    title: "New York Times Bestseller",
    description: "The Midnight Chronicles reached #1 on the NYT Bestseller List",
  },
  {
    year: "2023",
    title: "Hugo Award Winner",
    description: "Best Novel for 'Echoes of Tomorrow'",
  },
  {
    year: "2022",
    title: "Goodreads Choice Award",
    description: "Best Fantasy Novel for 'The Crystal Kingdom'",
  },
  {
    year: "2021",
    title: "World Fantasy Award",
    description: "Nominated for Best Novel",
  },
]

const mediaFeatures = [
  {
    outlet: "The Guardian",
    title: "The Voice of Modern Fantasy",
    date: "March 2024",
    link: "#",
  },
  {
    outlet: "Publishers Weekly",
    title: "Author Spotlight: Alexandra Sterling",
    date: "January 2024",
    link: "#",
  },
  {
    outlet: "BookPage",
    title: "Behind the Magic: An Interview",
    date: "December 2023",
    link: "#",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-purple-600/20 text-purple-200 border-purple-400/30">
                  About the Author
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">Meet Alexandra Sterling</h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  A master storyteller who has captivated millions of readers worldwide with her imaginative worlds and
                  unforgettable characters.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Alexandra Sterling"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Biography</h2>

                <div className="prose prose-lg text-gray-700 space-y-6">
                  <p>
                    Alexandra Sterling began her writing journey at the age of twelve, crafting fantastical stories in
                    the margins of her school notebooks. What started as a childhood passion has evolved into a
                    distinguished literary career spanning over two decades.
                  </p>

                  <p>
                    Born and raised in the Pacific Northwest, Alexandra draws inspiration from the region's misty
                    forests and dramatic coastlines. Her unique ability to blend elements of fantasy, science fiction,
                    and romance has earned her a devoted global readership and critical acclaim from literary circles
                    worldwide.
                  </p>

                  <p>
                    With over 15 published novels and numerous short stories, Alexandra has established herself as one
                    of the most versatile voices in contemporary fiction. Her works have been translated into 23
                    languages and have sold over 2 million copies worldwide.
                  </p>

                  <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
                    <Quote className="h-8 w-8 text-purple-600 mb-4" />
                    <blockquote className="text-lg italic text-gray-800">
                      "I believe that stories have the power to transform us, to help us see the world through different
                      eyes, and to remind us of our shared humanity. Every book I write is an invitation to embark on
                      that journey together."
                    </blockquote>
                    <cite className="text-purple-600 font-semibold mt-4 block">— Alexandra Sterling</cite>
                  </div>

                  <p>
                    When she's not writing, Alexandra enjoys hiking, photography, and mentoring aspiring writers through
                    various literary programs. She currently resides in Seattle with her partner and their two rescue
                    cats, Luna and Orion.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                {/* Quick Stats */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <BookOpen className="h-5 w-5 text-purple-600" />
                        <div>
                          <div className="font-semibold">15+ Books Published</div>
                          <div className="text-sm text-gray-600">Across multiple genres</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-purple-600" />
                        <div>
                          <div className="font-semibold">2M+ Readers</div>
                          <div className="text-sm text-gray-600">Worldwide audience</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Award className="h-5 w-5 text-purple-600" />
                        <div>
                          <div className="font-semibold">8 Literary Awards</div>
                          <div className="text-sm text-gray-600">Including Hugo & World Fantasy</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-purple-600" />
                        <div>
                          <div className="font-semibold">20+ Years</div>
                          <div className="text-sm text-gray-600">Writing experience</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact CTA */}
                <Card className="bg-purple-600 text-white">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                    <p className="mb-6">Interested in interviews, speaking engagements, or collaborations?</p>
                    <Button variant="secondary" className="w-full">
                      Contact Alexandra
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Awards & Recognition</h2>

            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {achievement.year}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">In the Media</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediaFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <Badge variant="outline">{feature.outlet}</Badge>
                      <h3 className="font-bold text-gray-900">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.date}</p>
                      <Button variant="outline" size="sm" className="w-full bg-transparent">
                        Read Article
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
