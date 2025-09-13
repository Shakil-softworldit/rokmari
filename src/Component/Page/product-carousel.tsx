// "use client"

// import { useState } from "react"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"

// interface Product {
//   id: number
//   title: string
//   author?: string
//   price: number
//   originalPrice?: number
//   discount: number
//   image: string
//   inStock: boolean
// }

// const products: Product[] = [
//   {
//     id: 1,
//     title: "উদয়ন গোপালকৃষ্ণ",
//     author: "রবীন্দ্র নাথ",
//     price: 157,
//     originalPrice: 250,
//     discount: 37,
//     image: "/bengali-book-cover-with-earth-globe.jpg",
//     inStock: true,
//   },
//   {
//     id: 1,
//     title: "উদয়ন গোপালকৃষ্ণ",
//     author: "রবীন্দ্র নাথ",
//     price: 157,
//     originalPrice: 250,
//     discount: 37,
//     image: "/bengali-book-cover-with-earth-globe.jpg",
//     inStock: true,
//   },
//   {
//     id: 1,
//     title: "উদয়ন গোপালকৃষ্ণ",
//     author: "রবীন্দ্র নাথ",
//     price: 157,
//     originalPrice: 250,
//     discount: 37,
//     image: "/bengali-book-cover-with-earth-globe.jpg",
//     inStock: true,
//   },
//   {
//     id: 2,
//     title: "সূর্য খাদক সূর্য উৎপাদ",
//     author: "শরৎচন্দ্র চট্টোপাধ্যায়",
//     price: 180,
//     originalPrice: 290,
//     discount: 37,
//     image: "/bengali-book-cover-with-food-illustration.jpg",
//     inStock: true,
//   },
//   {
//     id: 3,
//     title: "নীল পাহাড় নীলিমা",
//     author: "বঙ্কিম চন্দ্র চট্টোপাধ্যায়",
//     price: 346,
//     originalPrice: 560,
//     discount: 37,
//     image: "/bengali-book-cover-green-and-red-design.jpg",
//     inStock: true,
//   },
//   {
//     id: 4,
//     title: "প্রতিমার প্রতিশোধ",
//     author: "হুমায়ূন আহমেদ",
//     price: 391,
//     originalPrice: 630,
//     discount: 38,
//     image: "/bengali-book-cover-with-classical-figure.jpg",
//     inStock: true,
//   },
//   {
//     id: 5,
//     title: "Faber Castell Textliner",
//     author: "Faber Castell",
//     price: 307,
//     originalPrice: 495,
//     discount: 38,
//     image: "/green-highlighter-marker-pen.jpg",
//     inStock: true,
//   },
//   {
//     id: 6,
//     title: "শা খোশ কে",
//     author: "রাহাত খান",
//     price: 221,
//     originalPrice: 340,
//     discount: 35,
//     image: "/bengali-book-cover-dark-design.jpg",
//     inStock: true,
//   },
//   {
//     id: 7,
//     title: "কুরআন মজিদ কুরআন মজিদ",
//     author: "মাওলানা আকরামুল্লাহ",
//     price: 392,
//     originalPrice: 600,
//     discount: 34,
//     image: "/bengali-islamic-book-cover.jpg",
//     inStock: true,
//   },
// ]

// export default function ProductCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const itemsPerView = 6

//   const nextSlide = () => {
//     setCurrentIndex((prev) =>
//       prev + itemsPerView >= products.length ? 0 : prev + 1
//     )
//   }

//   const prevSlide = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? Math.max(0, products.length - itemsPerView) : prev - 1
//     )
//   }

//   const visibleProducts = products.slice(
//     currentIndex,
//     currentIndex + itemsPerView
//   )

//   return (
//     <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm p-6">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-6">
//         <div className="flex items-center gap-2">
//           <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
//             <span className="text-white text-xs font-bold">X</span>
//           </div>
//           <h2 className="text-lg font-semibold text-gray-800">
//             রামাকানা ডিপার্টমেন্ট
//           </h2>
//         </div>
//         <Button
//           variant="outline"
//           size="sm"
//           className="text-blue-500 border-blue-500 hover:bg-blue-50 bg-transparent"
//         >
//           See all
//         </Button>
//       </div>

//       {/* Product Grid with Navigation */}
//       <div className="relative">
//         {/* Left Arrow */}
//         {currentIndex > 0 && (
//           <Button
//             variant="outline"
//             size="icon"
//             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-md hover:bg-gray-50"
//             onClick={prevSlide}
//           >
//             <ChevronLeft className="h-4 w-4" />
//           </Button>
//         )}

//         {/* Right Arrow */}
//         {currentIndex + itemsPerView < products.length && (
//           <Button
//             variant="outline"
//             size="icon"
//             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-md hover:bg-gray-50"
//             onClick={nextSlide}
//           >
//             <ChevronRight className="h-4 w-4" />
//           </Button>
//         )}

//         {/* Product Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//           {visibleProducts.map((product) => (
//             <Card
//               key={product.id}
//               className="relative flex flex-col overflow-hidden hover:shadow-md transition-shadow cursor-pointer h-[320px] w-full"
//             >
//               {/* Discount Badge */}
//               <div className="absolute top-2 left-2 z-10">
//                 <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xs font-bold">
//                   <div className="text-center">
//                     <div>{product.discount}%</div>
//                     <div className="text-[10px]">OFF</div>
//                   </div>
//                 </div>
//               </div>

//               {/* Product Image */}
//               <div className="h-[180px] w-full bg-gray-100 overflow-hidden flex-shrink-0">
//                 <img
//                   src={product.image || "/placeholder.svg"}
//                   alt={product.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Product Info */}
//               <div className="flex flex-col justify-between flex-1 p-3 space-y-2 overflow-hidden">
//                 <div>
//                   <h3 className="text-sm font-medium text-gray-800 line-clamp-2 leading-tight">
//                     {product.title}
//                   </h3>
//                   {product.author && (
//                     <p className="text-xs text-gray-600 line-clamp-1">
//                       {product.author}
//                     </p>
//                   )}
//                 </div>

//                 {/* Stock Status */}
//                 <div className="flex items-center gap-1">
//                   <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//                   <span className="text-xs text-green-600 font-medium">
//                     In Stock
//                   </span>
//                 </div>

//                 {/* Price */}
//                 <div className="space-y-1">
//                   <div className="text-sm font-bold text-gray-900">
//                     ৳{product.price}
//                   </div>
//                   {product.originalPrice && (
//                     <div className="text-xs text-gray-500 line-through">
//                       ৳{product.originalPrice}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }
