import { Suspense } from "react"
import ProductGrid from "@/components/product-grid"
import ProductFilters from "@/components/product-filters"
import ProductSort from "@/components/product-sort"
import { Skeleton } from "@/components/ui/skeleton"

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const category = typeof searchParams.category === "string" ? searchParams.category : undefined
  const sort = typeof searchParams.sort === "string" ? searchParams.sort : undefined
  const minPrice = typeof searchParams.minPrice === "string" ? Number.parseFloat(searchParams.minPrice) : undefined
  const maxPrice = typeof searchParams.maxPrice === "string" ? Number.parseFloat(searchParams.maxPrice) : undefined

  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Products</h1>
          <p className="mt-2 text-muted-foreground">
            Browse our collection of aesthetic stationery and lifestyle products.
          </p>
        </div>
        <ProductSort />
      </div>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="md:col-span-1">
          <ProductFilters />
        </div>
        <div className="md:col-span-3">
          <Suspense fallback={<ProductGridSkeleton />}>
            <ProductGrid category={category} sort={sort} minPrice={minPrice} maxPrice={maxPrice} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array(6)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="aspect-square w-full" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-10 w-full" />
          </div>
        ))}
    </div>
  )
}

