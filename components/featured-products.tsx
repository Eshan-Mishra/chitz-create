import Link from "next/link"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data - would be fetched from API in a real application
const featuredProducts = [
  {
    id: 1,
    name: "Pastel Notebook Set",
    price: 24.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Stationery",
    isNew: true,
  },
  {
    id: 2,
    name: "Minimalist Desk Organizer",
    price: 39.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Lifestyle",
    isNew: false,
  },
  {
    id: 3,
    name: "Floral Washi Tape Collection",
    price: 12.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Stationery",
    isNew: true,
  },
  {
    id: 4,
    name: "Ceramic Mug Set",
    price: 29.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Lifestyle",
    isNew: false,
  },
]

export default function FeaturedProducts() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {featuredProducts.map((product) => (
        <Card key={product.id} className="overflow-hidden">
          <div className="relative">
            <Link href={`/products/${product.id}`}>
              <div className="aspect-square overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
            </Link>
            {product.isNew && <Badge className="absolute right-2 top-2">New</Badge>}
          </div>
          <CardContent className="p-4">
            <div className="text-sm text-muted-foreground">{product.category}</div>
            <Link href={`/products/${product.id}`} className="mt-1 block">
              <h3 className="font-medium">{product.name}</h3>
            </Link>
            <p className="mt-1 font-medium">${product.price.toFixed(2)}</p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button className="w-full">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

