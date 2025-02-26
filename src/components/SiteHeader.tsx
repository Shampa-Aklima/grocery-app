"use client"

import Link from "next/link"
import Image from "next/image"
import { Jersey_25 } from "next/font/google"
import { Search, ShoppingCart, User, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

const jersey = Jersey_25({ weight: "400", subsets: ["latin"] })

const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="w-full mx-auto">
      <header className="w-full mx-auto">
        <div className="w-full bg-teal-500 text-white text-sm py-1 px-4 text-center">
          Due to current circumstances, there may be slight delays in order processing
        </div>

        
        <div className="bg-primary text-primary-foreground">
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-evenly lg:gap-x-20 py-2 px-4">
            <div className="flex gap-4 text-sm mb-2 sm:mb-0">
              <Link href="/about">About Us</Link>
              <Link href="/compare">Compare</Link>
              <Link href="/wishlist">Wishlist</Link>
            </div>
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 text-sm">
              <span className="hidden md:inline">100% Secure delivery without contacting the courier</span>
              <span>Need help? Call Us: +0200 500</span>
              <select className="bg-transparent border-none outline-none">
                <option>English</option>
              </select>
              <select className="bg-transparent border-none outline-none">
                <option>USD</option>
              </select>
            </div>
          </div>
        </div>

    
        <div className="container py-4 px-4 flex flex-wrap items-center justify-evenly">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Logo" className="h-8 w-auto mr-2" width={59} height={50} />
            <Link href="/" className="flex items-center">
              <span className={`text-3xl font-bold ${jersey.className} text-[hsl(var(--jersey-color))]`}>Basket</span>
            </Link>
          </div>

          <div className="flex-1 max-w-xl mx-4 my-4 lg:my-0 order-3 lg:order-2 w-full lg:w-auto">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search for Products, food, meat, eggs..."
                className="w-full pl-4 pr-10"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          <div className="flex items-center gap-4 order-2 lg:order-3">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <User className="h-5 w-5" />
            </Button>
            <div className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                  0
                </span>
              </Button>
            </div>
            <span className="hidden sm:inline">$0.00</span>
          </div>
        </div>

        
        <nav className="border-t">
          <div className="container px-4">
            <div className="flex items-center justify-evenly gap-10 py-4">
              <Button variant="default" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Menu className="h-5 w-5 mr-2" />
                ALL CATEGORIES
              </Button>
              <Button variant="default" className="hidden lg:flex">
                ALL CATEGORIES
              </Button>
              <div
                className={`${isMenuOpen ? "flex" : "hidden"} lg:flex flex-col lg:flex-row absolute lg:relative left-0 top-full lg:top-auto bg-white lg:bg-transparent w-full lg:w-auto z-50 lg:items-center gap-4 lg:gap-6 py-4 lg:py-0 px-4 lg:px-0 shadow-md lg:shadow-none`}
              >
                <Link href="/" className="font-medium">
                  HOME
                </Link>
                <Link href="/shop" className="font-medium">
                  SHOP
                </Link>
                <Link href="/meats" className="font-medium">
                  MEATS & SEAFOOD
                </Link>
                <Link href="/bakery" className="font-medium">
                  BAKERY
                </Link>
                <Link href="/beverages" className="font-medium">
                  BEVERAGES
                </Link>
                <Link href="/blog" className="font-medium">
                  BLOG
                </Link>
                <Link href="/contact" className="font-medium">
                  CONTACT
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default SiteHeader

