import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import FeaturedProducts from "@/components/featured-products"
import CategoryShowcase from "@/components/category-showcase"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Chintz Creation Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Elevate Your Everyday
          </h1>
          <p className="mt-6 max-w-md text-lg text-white/90">
            Discover our curated collection of aesthetic stationery and lifestyle products.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/products">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 text-white hover:bg-white/20">
              <Link href="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">Featured Products</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Our most popular items, handpicked for your aesthetic pleasure.
          </p>
          <div className="mt-12">
            <FeaturedProducts />
          </div>
          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/products">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">Shop by Category</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Explore our carefully curated collections.
          </p>
          <div className="mt-12">
            <CategoryShowcase />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">What Our Customers Say</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-muted" />
                  <div>
                    <p className="font-medium">Customer {i}</p>
                    <div className="flex text-yellow-500">
                      {Array(5)
                        .fill(0)
                        .map((_, j) => (
                          <svg
                            key={j}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-4 w-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ))}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  "I absolutely love the quality and design of everything I've purchased from Chintz Creation. Their
                  products have added so much joy to my daily routine!"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary py-16 md:py-24 text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Join Our Newsletter</h2>
            <p className="mt-4 text-lg">Stay updated with our latest products and exclusive offers.</p>
            <div className="mt-6 flex max-w-md mx-auto gap-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-auto rounded-md border border-white/10 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
              />
              <Button className="bg-white text-primary hover:bg-white/90">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

