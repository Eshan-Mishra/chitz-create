import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Heart, ShoppingCart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import RelatedProducts from "@/components/related-products"

// Mock data - would be fetched from API in a real application
const products = [
  {
    id: 1,
    name: "Pastel Notebook Set",
    price: 24.99,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    category: "Stationery",
    description:
      "A set of 3 pastel-colored notebooks with dotted pages, perfect for journaling, planning, or note-taking. Each notebook features 80 pages of premium 100gsm paper that's smooth and bleed-resistant.",
    features: [
      "Set of 3 A5 notebooks",
      "Dotted 100gsm paper",
      "Pastel colors: pink, blue, and lavender",
      "Lay-flat binding",
      "Elastic closure band",
      "Inner pocket for loose papers",
    ],
    specifications: {
      Dimensions: "A5 (148 x 210 mm)",
      "Paper Weight": "100gsm",
      "Page Count": "80 pages per notebook",
      "Paper Type": "Dotted",
      "Cover Material": "Soft-touch vegan leather",
      Binding: "Lay-flat stitched binding",
    },
    inStock: true,
    rating: 4.5,
    reviewCount: 28,
  },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const productId = Number.parseInt(params.id)
  const product = products.find((p) => p.id === productId)

  if (!product) {
    notFound()
  }

  return (
    <div className="container py-8 md:py-12">
      <Link
        href="/products"
        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Products
      </Link>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="overflow-hidden rounded-lg border">
            <Image
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, i) => (
              <div key={i} className="overflow-hidden rounded-lg border">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - Image ${i + 1}`}
                  width={150}
                  height={150}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="mt-2 flex items-center gap-4">
              <div className="flex items-center">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-primary text-primary"
                          : i < product.rating
                            ? "fill-primary text-primary opacity-50"
                            : "text-muted-foreground"
                      }`}
                    />
                  ))}
                <span className="ml-2 text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Category: <span className="text-foreground">{product.category}</span>
              </div>
            </div>
          </div>

          <div className="text-3xl font-bold">${product.price.toFixed(2)}</div>

          <p className="text-muted-foreground">{product.description}</p>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className={`h-3 w-3 rounded-full ${product.inStock ? "bg-green-500" : "bg-red-500"}`} />
              <span>{product.inStock ? "In Stock" : "Out of Stock"}</span>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="flex-1" disabled={!product.inStock}>
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="flex-1">
                <Heart className="mr-2 h-5 w-5" />
                Add to Wishlist
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      {/* Product Information Tabs */}
      <Tabs defaultValue="features" className="mt-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="features" className="mt-6 space-y-4">
          <h3 className="text-lg font-medium">Product Features</h3>
          <ul className="list-inside list-disc space-y-2">
            {product.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="specifications" className="mt-6">
          <h3 className="text-lg font-medium">Product Specifications</h3>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between border-b pb-2">
                <span className="font-medium">{key}</span>
                <span className="text-muted-foreground">{value}</span>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="reviews" className="mt-6">
          <h3 className="text-lg font-medium">Customer Reviews</h3>
          <div className="mt-4 space-y-6">
            {/* This would be a map over actual reviews in a real application */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < 5 ? "fill-primary text-primary" : "text-muted-foreground"}`}
                      />
                    ))}
                </div>
                <span className="font-medium">Sarah K.</span>
                <span className="text-sm text-muted-foreground">2 weeks ago</span>
              </div>
              <p>
                These notebooks are absolutely beautiful! The paper quality is excellent - no bleeding even with my
                fountain pens. The colors are soft and elegant, and the binding allows them to lay flat which is so
                convenient.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < 4 ? "fill-primary text-primary" : "text-muted-foreground"}`}
                      />
                    ))}
                </div>
                <span className="font-medium">Michael T.</span>
                <span className="text-sm text-muted-foreground">1 month ago</span>
              </div>
              <p>
                Great quality notebooks. The dotted pages are perfect for my bullet journaling. I only wish they came in
                more colors!
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <Separator className="my-8" />

      {/* Related Products */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold">You May Also Like</h2>
        <div className="mt-6">
          <RelatedProducts currentProductId={product.id} />
        </div>
      </div>
    </div>
  )
}

