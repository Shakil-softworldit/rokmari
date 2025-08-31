"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, ShoppingBag } from "lucide-react";
import leptop from '../../assets/leptop.jpg'
import Image from "next/image";

type Slide = {
  badge?: string;
  hot?: boolean;
  titleTop: string;
  highlight: string;
  subtitleL1: string;
  subtitleL2?: string;
  price: string;
};

const slides: Slide[] = [
  {
    badge: "Limited Time Offer",
    hot: true,
    titleTop: "SAVE UP TO",
    highlight: "₹400000",
    subtitleL1: "On Selected Laptops & Desktop Or",
    subtitleL2: "Smartphone",
    price: "From ₹15,999.00",
  },
  {
    badge: "Mega Week Sale",
    hot: true,
    titleTop: "FLASH DEALS",
    highlight: "₹250000",
    subtitleL1: "Gaming Laptops & Accessories",
    subtitleL2: "Grab it before stock ends",
    price: "From ₹29,999.00",
  },
  {
    badge: "Student Special",
    hot: false,
    titleTop: "EXTRA OFF",
    highlight: "₹150000",
    subtitleL1: "Ultrabooks • All-day Battery",
    subtitleL2: "Perfect for study & work",
    price: "From ₹22,499.00",
  },
];

const AUTOPLAY_MS = 5000;

const LaptopSaleBanner = () => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const len = slides.length;
  const next = () => setIndex((i) => (i + 1) % len);
  const prev = () => setIndex((i) => (i - 1 + len) % len);
  const goTo = (i: number) => setIndex(i);

  // autoplay (pause on hover)
  const start = () => {
    stop();
    timerRef.current = setInterval(next, AUTOPLAY_MS);
  };
  const stop = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
  };

  useEffect(() => {
    start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // keyboard arrows
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const slide = useMemo(() => slides[index], [index]);

  return (
    <div
      className="relative p-8 min-h-[70vh] sm:min-h-[80vh] md:min-h-screen bg-gradient-to-br from-orange-500 to-pink-500 overflow-hidden pb-16 sm:pb-20"
      onMouseEnter={stop}
      onMouseLeave={start}
      role="region"
      aria-roledescription="carousel"
      aria-label="Laptop promotions"
    >
      {/* Navigation arrows (hidden on very small screens to avoid overlap) */}
      <button
        className="hidden sm:flex absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm items-center justify-center text-white hover:bg-white/30 transition-colors"
        onClick={prev}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        className="hidden sm:flex absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm items-center justify-center text-white hover:bg-white/30 transition-colors"
        onClick={next}
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slides wrapper */}
      <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12 h-full flex items-center">
        <div className="relative w-full">
          {/* Slides (absolute + fade) */}
          {slides.map((s, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-500 ${i === index ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              aria-hidden={i !== index}
            >
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full h-full">
                {/* Left content */}
                <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
                  {/* Badge */}
                  {(s.badge || s.hot) && (
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white">
                      {s.badge && (
                        <>
                          <div className="w-2 h-2 bg-white rounded-full" />
                          <span className="text-xs sm:text-sm font-medium">{s.badge}</span>
                        </>
                      )}
                      {s.hot && (
                        <span className="bg-yellow-400 text-black text-[10px] sm:text-xs font-bold px-2 py-1 rounded-full">
                          HOT
                        </span>
                      )}
                    </div>
                  )}

                  {/* Heading */}
                  <div className="space-y-3 sm:space-y-4">
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
                      {s.titleTop}
                      <br />
                      <span className="text-4xl sm:text-5xl lg:text-7xl">{s.highlight}</span>
                    </h1>
                    <p className="text-base sm:text-lg text-white/90 font-medium">
                      {s.subtitleL1}
                      {s.subtitleL2 && (
                        <>
                          <br />
                          {s.subtitleL2}
                        </>
                      )}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-white">
                    <div className="w-4 h-4 border-2 border-white rounded-sm flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-sm" />
                    </div>
                    <span className="text-sm sm:text-lg font-semibold">{s.price}</span>
                  </div>

                  {/* Actions + LEFT animated background behind buttons */}
                  <div className="relative z-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                    {/* animated glow blob (left side) */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -left-10 sm:-left-14 top-1/2 -translate-y-1/2 z-0 w-44 h-44 sm:w-64 sm:h-64 rounded-full blur-3xl opacity-80 mix-blend-screen"
                      style={{
                        background:
                          "radial-gradient(closest-side, rgba(255,255,255,0.55), rgba(255,255,255,0.2), transparent 70%)",
                        animation: "breathe 6s ease-in-out infinite",
                      }}
                    />
                    <Button
                      size="lg"
                      className="relative z-10 bg-white text-black hover:bg-white/90 font-semibold px-6 sm:px-8 py-3 rounded-lg"
                    >
                      <ShoppingBag className="w-5 h-5 mr-2" />
                      Shop Now
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="relative z-10 border-white text-white hover:bg-white/10 font-semibold px-6 sm:px-8 py-3 rounded-lg bg-transparent"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Watch Demo
                    </Button>
                  </div>
                </div>

                {/* Right content - Laptop image mock (scales nicely) */}
                <div className="relative flex justify-center lg:justify-end">
                  <Image
                    src={leptop}
                    alt="Laptop"
                    width={600}
                    height={400}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}

          {/* spacer to keep height for absolute slides */}
          <div className="invisible grid lg:grid-cols-2 gap-8 lg:gap-12 w-full">
            <div className="space-y-6 sm:space-y-8">
              <div className="h-10" />
              <div className="h-24 sm:h-28" />
              <div className="h-10" />
              <div className="h-12" />
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-56 h-36 sm:w-72 sm:h-44 lg:w-80 lg:h-52 xl:w-96 xl:h-60" />
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-opacity ${i === index ? "bg-yellow-400" : "bg-white/40 hover:opacity-80"
              }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* local keyframes for the glow */}
      <style jsx>{`
        @keyframes breathe {
          0% {
            transform: translateY(-50%) scale(0.95);
            filter: blur(28px);
          }
          50% {
            transform: translateY(-50%) scale(1.06);
            filter: blur(36px);
          }
          100% {
            transform: translateY(-50%) scale(0.95);
            filter: blur(28px);
          }
        }
      `}</style>
    </div>
  );
};

export default LaptopSaleBanner;
