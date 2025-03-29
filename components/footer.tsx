import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Chintz Creation</h3>
            <p className="text-sm text-muted-foreground">
              Aesthetic stationery and lifestyle products for the modern creative.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-foreground">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products?category=stationery" className="text-muted-foreground hover:text-foreground">
                  Stationery
                </Link>
              </li>
              <li>
                <Link href="/products?category=lifestyle" className="text-muted-foreground hover:text-foreground">
                  Lifestyle
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Connect</h3>
            <div className="flex space-x-4">
              <Link href="https://instagram.com" target="_blank" rel="noreferrer">
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noreferrer">
                <Facebook className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noreferrer">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">Email: hello@chintzcreation.com</p>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Chintz Creation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

