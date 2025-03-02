"use client";

import Link from "next/link";
import Image from "next/image";
import { Jersey_25 } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  ChevronDown,
  User,
  Search,
  ShoppingCart,
  Home,
  Menu,
  Coffee,
  Cookie,
  Drumstick,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
const jersey = Jersey_25({ weight: "400", subsets: ["latin"] });

const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header className="w-full mx-auto">
        <div className="w-full bg-teal-500 text-white text-sm py-1 px-4 text-center">
          Due to current circumstances, there may be slight delays in order
          processing
        </div>

        <div className="text-primary-foreground p-3">
          <div className=" mx-auto max-w-[1200px] px-4 py-2">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 ">
              {/* Top Links */}
              <div className=" text-[#3E445A] flex gap-4 text-sm mb-2  sm:mb-0">
                <Link href="/about">About Us</Link>
                <Link href="/compare">Compare</Link>
                <Link href="/wishlist">Wishlist</Link>
              </div>
             
              <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 text-sm text-[#3E445A]">
                <span className="hidden md:inline">
                  100% Secure delivery without contacting the courier
                </span>
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
        </div>

        <div className="container mx-auto max-w-[1200px] py-4 px-4 flex flex-wrap items-center justify-between ">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              className="h-8 w-auto mr-2"
              width={59}
              height={50}
            />
            <Link href="/" className="flex items-center">
              <span
                className={`text-3xl font-bold ${jersey.className} text-[hsl(var(--jersey-color))]`}
              >
                Basket
              </span>
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

        <nav className="border-b-2 border-[#E3E4E6]">
          <div className="container mx-auto max-w-[1200px] px-4">
            <div className="flex items-center justify-between gap-10 py-4 ">
              <Button
                variant="default"
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-5 w-5 mr-2" />
                ALL CATEGORIES
              </Button>
              <Button
                variant="default"
                className="hidden lg:flex bg-[#35AFA0] border-1"
              >
                ALL CATEGORIES
              </Button>
              <div
                className={`${
                  isMenuOpen ? "flex" : "hidden"
                } lg:flex flex-col lg:flex-row absolute lg:relative left-0 top-full lg:top-auto bg-white lg:bg-transparent z-50 lg:items-center gap-4 lg:gap-6 py-4 lg:py-0 px-4 lg:px-0 shadow-md lg:shadow-none`}
              >
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="link" className="font-medium p-0 h-auto">
                      HOME
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuItem className="cursor-pointer">
                      <Link href="/home2" className="flex items-center w-full">
                        <Home className="h-4 w-4 mr-2" />
                        <span>Home 2</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      <Link href="/home3" className="flex items-center w-full">
                        <Home className="h-4 w-4 mr-2" />
                        <span>Home 3</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      <Link href="/home3" className="flex items-center w-full">
                        <Home className="h-4 w-4 mr-2" />
                        <span>Home 4</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      <Link href="/home3" className="flex items-center w-full">
                        <Home className="h-4 w-4 mr-2" />
                        <span>Home 5</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      <Link href="/home4" className="flex items-center w-full">
                        <Home className="h-4 w-4 mr-2" />
                        <span>Home 4</span>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Link href="/shop" className="font-medium">
                  SHOP
                </Link>
                <Link href="/meats" className="font-medium">
                  <Drumstick className="w-5 h-5" />
              MEATS & SEAFOOD
                </Link>
                <Link href="/bakery" className="font-medium">
                  <Cookie className="w-5 h-5 inline-block " />
                  BAKERY
                </Link>
                <Link href="/beverages" className="font-medium">
                  <Coffee className="w-5 h-5 " />
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
  );
};

export default SiteHeader;
