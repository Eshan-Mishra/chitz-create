import Image from "next/image"
import { Separator } from "@/components/ui/separator"

export default function AboutPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">About Chintz Creation</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Our story, mission, and the passion behind our aesthetic stationery and lifestyle products.
        </p>
      </div>

      <div className="mt-12 grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <Image
            src="/placeholder.svg?height=600&width=600"
            alt="Founder of Chintz Creation"
            width={600}
            height={600}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Story</h2>
          <p>
            Chintz Creation was born from a deep passion for beautiful, functional stationery and a desire to bring joy
            to everyday life. Founded in 2020 by Jane Smith, our journey began with a simple belief: the items we use
            daily should inspire creativity and elevate our routines.
          </p>
          <p>
            Jane's background in graphic design and lifelong love for stationery led her to create products that combine
            aesthetic appeal with practical functionality. What started as a small collection of handcrafted notebooks
            has grown into a curated selection of stationery and lifestyle items that embody our commitment to quality
            and beauty.
          </p>
          <p>
            Today, Chintz Creation continues to grow, guided by our founding principles and inspired by our community of
            creative, mindful customers who share our appreciation for the little things that make life more beautiful.
          </p>
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold">Our Mission</h2>
        <p className="mt-4">
          At Chintz Creation, we believe that beauty lies in the details. Our mission is to create products that not
          only serve a purpose but also bring joy and inspiration to your everyday life. We are committed to:
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
            <h3 className="text-lg font-medium">Quality</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Crafting products with attention to detail and using premium materials that stand the test of time.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
            <h3 className="text-lg font-medium">Aesthetics</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Creating designs that inspire creativity and bring beauty to your daily routines.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
            <h3 className="text-lg font-medium">Sustainability</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Making conscious choices about materials and packaging to minimize our environmental impact.
            </p>
          </div>
        </div>
      </div>

      <Separator className="my-12" />

      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div className="order-2 md:order-1 space-y-4">
          <h2 className="text-2xl font-bold">Our Values</h2>
          <p>At the heart of Chintz Creation are values that guide everything we do:</p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              <span>
                <strong>Creativity:</strong> We believe in the power of creativity to transform everyday experiences.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              <span>
                <strong>Mindfulness:</strong> We encourage being present and finding joy in small moments.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              <span>
                <strong>Community:</strong> We value the connections we build with our customers and partners.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              <span>
                <strong>Integrity:</strong> We are committed to honest business practices and transparent communication.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              <span>
                <strong>Growth:</strong> We embrace continuous learning and improvement in all aspects of our business.
              </span>
            </li>
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <Image
            src="/placeholder.svg?height=600&width=600"
            alt="Chintz Creation Products"
            width={600}
            height={600}
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      <div className="mt-12 rounded-lg bg-muted p-8 text-center">
        <h2 className="text-2xl font-bold">Join Our Journey</h2>
        <p className="mt-4 mx-auto max-w-2xl">
          We're grateful for every customer who chooses Chintz Creation and becomes part of our story. We invite you to
          explore our products, share your experiences, and join us in celebrating the beauty of everyday life.
        </p>
      </div>
    </div>
  )
}

