"use client";

import { useEffect, useState } from "react";
import { Zap, ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";

const lightningDeals = [
  { id: 1, name: 'Smart TV 55"', price: "₹39,999", discount: "20% Off", image: "/smart-tv-55-inch.png" },
  { id: 2, name: "Wireless Earbuds", price: "₹5,199", discount: "33% Off", image: "/wireless-earbuds.png" },
  { id: 3, name: "Gaming Laptop", price: "₹67,499", discount: "25% Off", image: "/gaming-laptop.png" },
  // আরও প্রোডাক্ট চাইলে এখানে যোগ করুন...
];

const LightningDeals = () => {
  // slider state
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2); // md:2, lg:3

  // responsive itemsPerPage (breakpoint অনুযায়ী)
  useEffect(() => {
    const setByWidth = () => {
      const w = window.innerWidth;
      if (w >= 1024) setItemsPerPage(3); // lg+
      else if (w >= 768) setItemsPerPage(2); // md
      else setItemsPerPage(1); // mobile (arrows hidden)
    };
    setByWidth();
    window.addEventListener("resize", setByWidth);
    return () => window.removeEventListener("resize", setByWidth);
  }, []);

  const n = lightningDeals.length;
  const visibleCount = Math.min(itemsPerPage, n);

  const nextSlide = () => setStartIndex((prev) => (prev + visibleCount) % n);
  const prevSlide = () => setStartIndex((prev) => (prev - visibleCount + n) % n);

  // wrap-around slice
  const visibleProducts = Array.from({ length: visibleCount }).map((_, i) => {
    const idx = (startIndex + i) % n;
    return lightningDeals[idx];
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 py-16 overflow-hidden">
        {/* Background Decorative Circle */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full" />

        <div className="max-w-7xl mx-auto px-4 relative">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <Zap className="w-4 h-4 text-white mr-2" />
              <span className="text-white text-sm font-medium">Flash Sale Active</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-2 flex items-center justify-center gap-3">
              <Zap className="w-8 h-8 text-yellow-300" />
              Lightning Deals
            </h2>
            <p className="text-white/90">Hurry up! Limited time offers</p>
          </div>

          {/* ⚡ Wrapper Container */}
          <div className="border bg-[#FFFFFF1A] rounded-3xl shadow-lg p-6 md:p-10">
            <div className="relative">
              {/* Navigation Arrows (md and up) with larger outer gap */}
              <button
                onClick={prevSlide}
                aria-label="Previous deals"
                className="hidden md:flex absolute top-1/2 -translate-y-1/2
                           -left-10 lg:-left-14 xl:-left-20
                           z-10 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next deals"
                className="hidden md:flex absolute top-1/2 -translate-y-1/2
                           -right-10 lg:-right-14 xl:-right-20
                           z-10 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Desktop/Tablet Grid with slider */}
              <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group relative"
                  >
                    <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-lg z-10">
                      {product.discount}
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6 mb-6 aspect-square flex items-center justify-center">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="text-center">
                      <h3 className="font-semibold text-gray-900 mb-3 text-lg">{product.name}</h3>
                      <p className="text-2xl font-bold text-orange-600 mb-6">{product.price}</p>

                      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105 transform">
                        <ShoppingCart className="w-4 h-4" />
                        Buy Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile: 1 per row (no arrows, show all) */}
              <div className="md:hidden grid grid-cols-1 gap-4">
                {lightningDeals.map((product) => (
                  <div
                    key={product.id}
                    className="rounded-lg p-4 bg-white shadow-lg flex items-center justify-between gap-4 relative"
                  >
                    {/* Discount Badge */}
                    <div className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-[2px] rounded-md">
                      {product.discount}
                    </div>

                    {/* LEFT: Product Image */}
                    <div className="flex-shrink-0 w-[84px] h-[84px] bg-gray-50 rounded-md flex items-center justify-center overflow-hidden">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* CENTER: Info */}
                    <div className="min-w-0 flex-1 px-2">
                      <h3 className="text-sm font-semibold text-gray-900 truncate">{product.name}</h3>
                      <p className="text-orange-600 text-lg font-bold mt-1">{product.price}</p>
                    </div>

                    {/* RIGHT: Button */}
                    <div className="flex-shrink-0">
                      <button className="inline-flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold py-2 px-3 rounded-md">
                        <ShoppingCart className="w-3.5 h-3.5" />
                        Buy Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              {/* End Mobile */}
            </div>
          </div>
          {/* End Wrapper */}
        </div>
      </div>
    </div>
  );
};

export default LightningDeals;
