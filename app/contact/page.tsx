"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, Briefcase, Heart } from "lucide-react"

const contactReasons = [
  { value: "fan", label: "Fan Message", icon: Heart },
  { value: "interview", label: "Interview Request", icon: MessageCircle },
  { value: "speaking", label: "Speaking Engagement", icon: Calendar },
  { value: "collaboration", label: "Collaboration", icon: Briefcase },
  { value: "other", label: "Other", icon: Mail },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    reason: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form or show success message
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'd love to hear from you! Whether you're a reader, journalist, or potential collaborator, don't hesitate to
            reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                      Reason for Contact *
                    </label>
                    <Select value={formData.reason} onValueChange={(value) => handleChange("reason", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a reason" />
                      </SelectTrigger>
                      <SelectContent>
                        {contactReasons.map((reason) => (
                          <SelectItem key={reason.value} value={reason.value}>
                            <div className="flex items-center gap-2">
                              <reason.icon className="h-4 w-4" />
                              {reason.label}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      placeholder="Brief subject line"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Your message here..."
                      className="resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-purple-600 hover:bg-purple-700">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information & Social */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-purple-600" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-gray-600">hello@alexandrasterling.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-purple-600" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-sm text-gray-600">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-purple-600" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm text-gray-600">Seattle, WA</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card>
              <CardHeader>
                <CardTitle>Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Fan Messages</span>
                    <span className="text-sm font-medium text-purple-600">1-2 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Media Inquiries</span>
                    <span className="text-sm font-medium text-purple-600">2-3 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Business Inquiries</span>
                    <span className="text-sm font-medium text-purple-600">1-2 days</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  Please note that response times may vary during book launches or promotional periods.
                </p>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle>Follow Alexandra</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <div className="w-5 h-5 bg-blue-600 rounded mr-3"></div>
                    Twitter @AlexandraSterling
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <div className="w-5 h-5 bg-blue-800 rounded mr-3"></div>
                    Facebook
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <div className="w-5 h-5 bg-pink-600 rounded mr-3"></div>
                    Instagram @AlexSterlingAuthor
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <div className="w-5 h-5 bg-orange-600 rounded mr-3"></div>
                    Goodreads
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
