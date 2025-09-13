"use client"

import { QrCode, Utensils, TreePine, Trash2, User, ChevronLeft, ChevronRight } from "lucide-react"
import { useRef, useState, useEffect } from "react"

const navigationItems = [
    { icon: QrCode, text: "কিউআর", id: "qr" },
    { icon: QrCode, text: "কিউআর", id: "qr2" },
    { icon: QrCode, text: "কিউআর", id: "qr3" },
    { icon: QrCode, text: "কিউআর", id: "qr4" },
    { icon: QrCode, text: "কিউআর", id: "qr5" },
    { icon: QrCode, text: "কিউআর", id: "qr6" },
    {
        icon: ({ className }: { className?: string }) => (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22" />
                <path d="m18 2 4 4-4 4" />
                <path d="m2 6 4-4 4 4" />
            </svg>
        ),
        text: "জুতা",
        id: "shoes",
    },
    { icon: Utensils, text: "রেস্তোরাঁ একাউন্টিং", id: "restaurant" },
    { icon: TreePine, text: "গাছের খোঁজ", id: "tree" },
    { icon: Trash2, text: "রেসাইক্লিং ইউনিট", id: "recycling" },
    { icon: User, text: "শহর ব্যাংক", id: "bank" },
]

export default function CategoryPage() {
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const [showLeftArrow, setShowLeftArrow] = useState(false)
    const [showRightArrow, setShowRightArrow] = useState(false)

    const checkScrollPosition = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
            setShowLeftArrow(scrollLeft > 0)
            setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 1)
        }
    }

    useEffect(() => {
        checkScrollPosition()
        const handleResize = () => checkScrollPosition()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" })
        }
    }

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" })
        }
    }

    return (
        <div className="w-full max-w-6xl mx-auto p-4">
            <div className="flex items-center gap-3">
                {showLeftArrow && (
                    <button
                        onClick={scrollLeft}
                        className="w-6 h-6 text-muted-foreground flex-shrink-0 hover:text-foreground transition-colors"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                )}

                <div
                    ref={scrollContainerRef}
                    className="flex gap-3 overflow-x-auto scrollbar-hide"
                    onScroll={checkScrollPosition}
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {navigationItems.map((item) => {
                        const IconComponent = item.icon
                        return (
                            <div
                                key={item.id}
                                className="flex items-center gap-3 bg-card border border-blue-500 rounded-lg px-4 py-3 min-w-fit cursor-pointer hover:shadow-md transition-all duration-200 hover:bg-accent/5"
                            >
                                <IconComponent className="w-5 h-5 text-primary flex-shrink-0" />
                                <span className="text-card-foreground font-medium whitespace-nowrap text-sm">
                                    {item.text}
                                </span>
                            </div>
                        )
                    })}
                </div>

                {showRightArrow && (
                    <button
                        onClick={scrollRight}
                        className="w-6 h-6 text-muted-foreground flex-shrink-0 hover:text-foreground transition-colors"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                )}
            </div>
        </div>
    )
}
