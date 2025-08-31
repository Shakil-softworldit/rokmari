"use client";

import { useState } from "react";
import {
  Search,
  Heart,
  BarChart3,
  ShoppingCart,
  Phone,
  ChevronDown,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ElectroNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-white">
      {/* Top Bar (bg removed) */}
      <div className="text-xs sm:text-sm">
        <div className=" px-3 sm:px-4 py-2 flex items-center bg-[#111827] justify-between gap-2">
          <div className="hidden md:flex items-center gap-4 text-gray-700">
            <span className="truncate">
              Welcome to Electro - Your Electronics Superstore
            </span>
            <span className="hidden lg:inline">📧 support@electro.com</span>
            <span className="hidden lg:inline">📞 +91-9876-543-210</span>
          </div>

          {/* mobile ছোট ব্লকটা ফাঁকা থাকবে */}
          <div className="md:hidden flex items-center gap-3"></div>

          <div className="flex items-center gap-4 px-2 py-1 rounded">
            <div className="hidden sm:flex gap-3">
              <span className="text-blue-600 text-[20px]">
                <Facebook />
              </span>
              <span className="text-sky-500 text-[20px]">
                <Twitter />
              </span>
              <span className="text-pink-500 text-[20px]">
                <Instagram />
              </span>
              <span className="text-red-500 text-[20px]">
                <Youtube />
              </span>
            </div>
            <span className="hidden sm:inline text-gray-700">
              <button className="border border-gray-300 px-6 py-1 rounded text-sm">
                USD
              </button>
            </span>
            <span className="hidden sm:inline text-gray-700">My Account</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-3">
            {/* Logo */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="bg-orange-500 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                <span className="text-white text-lg sm:text-xl font-bold">⚡</span>
              </div>
              <div className="leading-tight">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Electro
                </h1>
                <p className="text-[11px] sm:text-xs text-gray-500">
                  Electronics Store
                </p>
              </div>
            </div>

            {/* Desktop Search */}
            <div className="flex-1 max-w-md mx-2 hidden md:block">
              <div className="relative">
                <Input
                  placeholder="Search products..."
                  className="pr-12 border-gray-300 rounded"
                />
                <Button className="absolute right-1 top-1 h-8 px-3 bg-orange-500 hover:bg-orange-600">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Desktop Right Icons */}
            <div className="hidden lg:flex items-center gap-5">
              <div className="flex items-center gap-1">
                <div className="relative">
                  <Heart className="h-6 w-6 text-gray-600" />
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    3
                  </span>
                </div>
                <span className="text-sm text-gray-600">Wishlist</span>
              </div>

              <div className="flex items-center gap-1">
                <div className="relative">
                  <BarChart3 className="h-6 w-6 text-gray-600" />
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    2
                  </span>
                </div>
                <span className="text-sm text-gray-600">Compare</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="relative">
                  <ShoppingCart className="h-6 w-6 text-gray-600" />
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    5
                  </span>
                </div>
                <div className="leading-tight">
                  <span className="text-sm text-gray-600">Cart</span>
                  <div className="text-sm font-semibold">Your Cart Total:</div>
                  <div className="text-base sm:text-lg font-bold text-orange-500">
                    ₹15,999.00
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile actions */}
            <div className="md:hidden flex items-center gap-2">
              {/* Wishlist */}
              <button
                aria-label="Open wishlist"
                className="relative p-2 rounded border border-gray-200"
              >
                <Heart className="h-5 w-5 text-gray-700" />
                <span className="absolute -top-1.5 -right-1.5 bg-orange-500 text-white text-[10px] leading-none rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </button>

              {/* Cart */}
              <button
                aria-label="Open cart"
                className="relative p-2 rounded border border-gray-200"
              >
                <ShoppingCart className="h-5 w-5 text-gray-700" />
                <span className="absolute -top-1.5 -right-1.5 bg-orange-500 text-white text-[10px] leading-none rounded-full w-4 h-4 flex items-center justify-center">
                  5
                </span>
              </button>

              {/* Toggle menu */}
              <button
                aria-label="Toggle menu"
                className="ml-auto p-2 rounded border border-gray-200"
                onClick={() => setMobileOpen((v) => !v)}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation (desktop) */}
      <nav className="border-b hidden md:block">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex items-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-none">
              <span className="mr-2">☰</span>
              All Categories
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>

            <ul className="flex items-center gap-6 ml-6">
              {["Home", "Shop", "Today's Deals", "Brands", "Blog", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="block text-gray-700 hover:text-orange-500 py-4"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>

            <div className="ml-auto flex items-center gap-2 text-orange-500">
              <Phone className="h-4 w-4" />
              <div className="leading-tight">
                <div className="text-[11px]">Call Us Now:</div>
                <div className="font-semibold">+91-9876-543-210</div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Combined Panel */}
      <div
        className={`md:hidden overflow-hidden border-b transition-[max-height] duration-300 ${
          mobileOpen ? "max-h-[28rem]" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-3 sm:px-4 py-3 space-y-3">
          {/* Search */}
          <div className="relative">
            <Input
              placeholder="Search products..."
              className="pr-12 border-gray-300 rounded"
            />
            <Button className="absolute right-1 top-1 h-8 px-3 bg-orange-500 hover:bg-orange-600">
              <Search className="h-4 w-4" />
            </Button>
          </div>

          {/* Categories button row */}
          <div>
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-none">
              <span className="mr-2">☰</span> All Categories
            </Button>
          </div>

          {/* Nav Links */}
          <ul className="grid grid-cols-2 gap-1">
            {["Home", "Shop", "Today's Deals", "Brands", "Blog", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="block px-2 py-2 rounded hover:bg-orange-50 text-gray-700"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>

          {/* Call us */}
          <div className="flex items-center gap-2 text-orange-500 pt-1">
            <Phone className="h-4 w-4" />
            <span className="text-sm font-semibold">+91-9876-543-210</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ElectroNavbar;
