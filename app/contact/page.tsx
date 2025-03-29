"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you soon!",
    })

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Us</h1>
        <p className="mt-4 text-lg text-muted-foreground">Have questions or feedback? We'd love to hear from you.</p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        <Card>
          <CardContent className="flex flex-col items-center p-6 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-medium">Phone</h3>
            <p className="mt-2 text-sm text-muted-foreground">Mon-Fri, 9am-5pm</p>
            <p className="mt-1 font-medium">+1 (555) 123-4567</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col items-center p-6 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-medium">Email</h3>
            <p className="mt-2 text-sm text-muted-foreground">We'll respond within 24 hours</p>
            <p className="mt-1 font-medium">hello@chintzcreation.com</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col items-center p-6 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-medium">Address</h3>
            <p className="mt-2 text-sm text-muted-foreground">Visit our studio</p>
            <p className="mt-1 font-medium">123 Creativity Lane, Design District, CA 90210</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12">
        <Card>
          <CardContent className="p-6 sm:p-8">
            <h2 className="text-2xl font-bold">Send Us a Message</h2>
            <p className="mt-2 text-muted-foreground">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Your Email</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12">
        <div className="rounded-lg overflow-hidden h-[400px] bg-muted">
          {/* This would be a real map in a production environment */}
          <div className="h-full w-full flex items-center justify-center text-muted-foreground">
            Interactive Map Would Be Displayed Here
          </div>
        </div>
      </div>
    </div>
  )
}

