import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock data - would be fetched from API in a real application
const categories = [
  {
    id: "stationery",
    name: "Stationery",
    description: "Notebooks, pens, and more for your creative needs.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "lifestyle",
    name: "Lifestyle",
    description: "Elevate your everyday with our curated lifestyle products.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "gifts",
    name: "Gift Sets",
    description: "Perfect presents for your loved ones or yourself.",
    image: "/placeholder.svg?height=600&width=800",
  },
]

export default function CategoryShowcase() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {categories.map((category) => (
        <div key={category.id} className="group relative overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:bg-black/40 z-10" />
          <Image
            src={category.image || "/placeholder.svg"}
            alt={category.name}
            width={800}
            height={600}
            className="h-[300px] w-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center text-white">
            <h3 className="text-2xl font-bold">{category.name}</h3>
            <p className="mt-2 text-white/90">{category.description}</p>
            <Button asChild className="mt-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm">
              <Link href={`/products?category=${category.id}`}>
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

