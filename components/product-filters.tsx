"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useMobile } from "@/hooks/use-mobile"

const categories = [
  { id: "stationery", label: "Stationery" },
  { id: "lifestyle", label: "Lifestyle" },
  { id: "gifts", label: "Gift Sets" },
]

export default function ProductFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const isMobile = useMobile()

  const [priceRange, setPriceRange] = useState({
    min: searchParams.get("minPrice") || "",
    max: searchParams.get("maxPrice") || "",
  })

  const selectedCategory = searchParams.get("category")

  const handleCategoryChange = (categoryId: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if (categoryId === selectedCategory) {
      params.delete("category")
    } else {
      params.set("category", categoryId)
    }

    router.push(`/products?${params.toString()}`)
  }

  const handlePriceFilter = () => {
    const params = new URLSearchParams(searchParams.toString())

    if (priceRange.min) {
      params.set("minPrice", priceRange.min)
    } else {
      params.delete("minPrice")
    }

    if (priceRange.max) {
      params.set("maxPrice", priceRange.max)
    } else {
      params.delete("maxPrice")
    }

    router.push(`/products?${params.toString()}`)
  }

  const clearFilters = () => {
    router.push("/products")
    setPriceRange({ min: "", max: "" })
  }

  const filters = (
    <div className="space-y-6">
      <div>
        <h3 className="mb-4 text-sm font-medium">Categories</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category.id}`}
                checked={selectedCategory === category.id}
                onCheckedChange={() => handleCategoryChange(category.id)}
              />
              <label
                htmlFor={`category-${category.id}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {category.label}
              </label>
            </div>
          ))}
        </div>
      </div>
      <Separator />
      <div>
        <h3 className="mb-4 text-sm font-medium">Price Range</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Input
              type="number"
              placeholder="Min"
              value={priceRange.min}
              onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
              className="h-9"
            />
            <span>to</span>
            <Input
              type="number"
              placeholder="Max"
              value={priceRange.max}
              onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
              className="h-9"
            />
          </div>
          <Button onClick={handlePriceFilter} size="sm" className="w-full">
            Apply
          </Button>
        </div>
      </div>
      <Separator />
      <Button onClick={clearFilters} variant="outline" size="sm" className="w-full">
        <X className="mr-2 h-4 w-4" />
        Clear Filters
      </Button>
    </div>
  )

  if (isMobile) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="sm" className="mb-4 w-full">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Filters</SheetTitle>
          </SheetHeader>
          {filters}
        </SheetContent>
      </Sheet>
    )
  }

  return filters
}

