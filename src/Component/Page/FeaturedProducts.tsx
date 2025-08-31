"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart } from "lucide-react"
import Image from "next/image"

import image1 from "../../assets/1.jpg"
import image2 from "../../assets/2.jpg"
import image3 from "../../assets/3.jpg"
import image4 from "../../assets/4.jpg"
import image5 from "../../assets/5.jpg"
import image6 from "../../assets/6.jpg"
import image7 from "../../assets/7.jpg"
import image8 from "../../assets/8.jpg"

const products = [
  { id: 1, name: 'Apple iPad Pro 12.9"', price: 999.0, originalPrice: 1199.0, rating: 4.8, reviews: 124, image: image1, badge: "Sale", badgeColor: "destructive" },
  { id: 2, name: "Canon EOS 5D Camera", price: 1899.0, rating: 4.9, reviews: 89, image: image2, badge: "Hot", badgeColor: "secondary" },
  { id: 3, name: "Headphones", price: 349.0, rating: 4.7, reviews: 256, image: image3, badge: "New", badgeColor: "accent" },
  { id: 4, name: 'MacBook Pro 16" M3', price: 2499.0, rating: 4.9, reviews: 78, image: image4, badge: "Hot", badgeColor: "secondary" },
  { id: 5, name: "Samsung Galaxy S24 Ultra", price: 1199.0, rating: 4.6, reviews: 342, image: image5, badge: "Sale", badgeColor: "destructive" },
  { id: 6, name: "Nintendo Switch OLED", price: 349.0, rating: 4.8, reviews: 189, image: image6, badge: "New", badgeColor: "accent" },
  { id: 7, name: "Dell XPS 13 Laptop", price: 999.0, rating: 4.5, reviews: 156, image: image7, badge: "Sale", badgeColor: "destructive" },
  { id: 8, name: 'LG OLED TV 65"', price: 1599.0, rating: 4.7, reviews: 98, image: image8, badge: "Hot", badgeColor: "secondary" },
]

const categories = [
  { id: "featured", label: "Featured", active: true },
  { id: "on-sale", label: "On Sale", active: false },
  { id: "top-rated", label: "Top Rated", active: false },
]

const FeaturedProducts = () => {
  const [activeCategory, setActiveCategory] = useState("featured")
  const [filteredProducts, setFilteredProducts] = useState(products)

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)
    let filtered = products
    if (categoryId === "on-sale") filtered = products.filter((p) => p.originalPrice)
    else if (categoryId === "top-rated") filtered = products.filter((p) => p.rating >= 4.7)
    setFilteredProducts(filtered)
  }

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
      />
    ))

  return (
    <section className="max-w-7xl mx-auto min-h-screen p-4 sm:p-6 md:p-8 mt-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2 text-balance">Featured Products</h2>
        <p className="text-muted-foreground text-pretty">Discover our most popular and trending items</p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center mb-8">
        <div className="flex bg-muted rounded-lg p-1 gap-1">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "ghost"}
              size="sm"
              onClick={() => handleCategoryChange(category.id)}
              className={`px-6 py-2 rounded-md transition-all duration-200 ${activeCategory === category.id
                  ? "text-white shadow-sm bg-gradient-to-r from-[#EA580C] to-[#DC2626]"
                  : "text-muted-foreground hover:text-foreground hover:bg-background"
                }`}
            >
              {category.label}
            </Button>

          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            className="group overflow-hidden border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <CardContent className="p-0">
              {/* Product Image (stable aspect ratio for responsive) */}
              <div className="relative overflow-hidden aspect-[4/5]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  priority={product.id <= 4}
                />
                {product.badge && (
                  <Badge
                    variant={product.badgeColor as any}
                    className="absolute top-3 left-3 text-xs font-medium"
                  >
                    {product.badge}
                  </Badge>
                )}
              </div>

              {/* Product Info */}
              <div className="p-3 sm:p-4 text-center">
                <h3 className="font-semibold text-card-foreground mb-2 line-clamp-2 text-balance">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="flex">{renderStars(product.rating)}</div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-xl font-bold text-primary">৳{product.price.toLocaleString()}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ৳{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <Button
                  className="w-full bg-[linear-gradient(90deg,#EA580C_0%,#DC2626_100%)] hover:opacity-90 text-white transition-colors duration-200"
                  size="sm"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* View All Products Button */}
      <div className="text-center">
        <Button
          variant="outline"
          size="lg"
          className="px-8 py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200 bg-transparent"
        >
          View All Products
        </Button>
      </div>
    </section>
  )
}

export default FeaturedProducts
