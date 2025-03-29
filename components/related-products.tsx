import Link from "next/link"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

// Mock data - would be fetched from API in a real application
const allProducts = [
  {
    id: 1,
    name: "Pastel Notebook Set",
    price: 24.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "stationery",
  },
  {
    id: 3,
    name: "Floral Washi Tape Collection",
    price: 12.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "stationery",
  },
  {
    id: 5,
    name: "Watercolor Brush Pens",
    price: 18.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "stationery",
  },
  {
    id: 7,
    name: "Leather Journal",
    price: 22.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "stationery",
  },
]

interface RelatedProductsProps {
  currentProductId: number
}

export default function RelatedProducts({ currentProductId }: RelatedProductsProps) {
  // Filter out the current product and limit to 4 products
  const relatedProducts = allProducts.filter((product) => product.id !== currentProductId).slice(0, 4)

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {relatedProducts.map((product) => (
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

