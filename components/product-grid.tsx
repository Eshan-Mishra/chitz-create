"use client"

import Link from "next/link"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data - would be fetched from API in a real application
const allProducts = [
  {
    id: 1,
    name: "Pastel Notebook Set",
    price: 24.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "stationery",
    isNew: true,
  },
  {
    id: 2,
    name: "Minimalist Desk Organizer",
    price: 39.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "lifestyle",
    isNew: false,
  },
  {
    id: 3,
    name: "Floral Washi Tape Collection",
    price: 12.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "stationery",
    isNew: true,
  },
  {
    id: 4,
    name: "Ceramic Mug Set",
    price: 29.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "lifestyle",
    isNew: false,
  },
  {
    id: 5,
    name: "Watercolor Brush Pens",
    price: 18.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "stationery",
    isNew: false,
  },
  {
    id: 6,
    name: "Scented Candle Trio",
    price: 34.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "lifestyle",
    isNew: true,
  },
  {
    id: 7,
    name: "Leather Journal",
    price: 22.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "stationery",
    isNew: false,
  },
  {
    id: 8,
    name: "Decorative Plant Pot",
    price: 19.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "lifestyle",
    isNew: false,
  },
  {
    id: 9,
    name: "Gift Box Set",
    price: 45.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "gifts",
    isNew: true,
  },
]

interface ProductGridProps {
  category?: string
  sort?: string
  minPrice?: number
  maxPrice?: number
}

export default function ProductGrid({ category, sort, minPrice, maxPrice }: ProductGridProps) {
  // Filter products based on category and price
  let filteredProducts = [...allProducts]

  if (category) {
    filteredProducts = filteredProducts.filter((product) => product.category === category)
  }

  if (minPrice !== undefined) {
    filteredProducts = filteredProducts.filter((product) => product.price >= minPrice)
  }

  if (maxPrice !== undefined) {
    filteredProducts = filteredProducts.filter((product) => product.price <= maxPrice)
  }

  // Sort products
  if (sort) {
    switch (sort) {
      case "price-asc":
        filteredProducts.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        filteredProducts.sort((a, b) => b.price - a.price)
        break
      case "newest":
        filteredProducts.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1))
        break
      default:
        break
    }
  }

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium">No products found</h3>
        <p className="mt-2 text-muted-foreground">Try adjusting your filters or search term.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {filteredProducts.map((product) => (
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
            <div className="text-sm text-muted-foreground capitalize">{product.category}</div>
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

