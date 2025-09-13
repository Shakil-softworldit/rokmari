"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import leptop from "../../assets/leptop.jpg";
import Image from "next/image";

const slides = [
  { img: leptop },
  { img: leptop },
  { img: leptop },
];

const AUTOPLAY_MS = 5000;

const LaptopSaleBanner = () => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const len = slides.length;
  const next = () => setIndex((i) => (i + 1) % len);
  const prev = () => setIndex((i) => (i - 1 + len) % len);
  const goTo = (i: number) => setIndex(i);

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
  }, []);

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
      className="relative max-w-6xl mx-auto min-h-[40vh] sm:min-h-[40vh] md:min-h-[40vh] mt-4 overflow-hidden pb-16 sm:pb-20"
      onMouseEnter={stop}
      onMouseLeave={start}
      role="region"
      aria-roledescription="carousel"
      aria-label="Laptop promotions"
    >
      {/* Navigation arrows */}
      <button
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/40 hover:bg-black/60 items-center justify-center text-white transition-colors shadow-lg"
        onClick={prev}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/40 hover:bg-black/60 items-center justify-center text-white transition-colors shadow-lg"
        onClick={next}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slides wrapper */}
      <div className="w-full h-full relative">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-500 flex justify-center items-center ${
              i === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={s.img}
              alt="Laptop"
              width={1200}
              height={600}
              className="object-contain w-full h-auto"
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-opacity ${
              i === index
                ? "bg-yellow-400"
                : "bg-white/40 hover:opacity-80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default LaptopSaleBanner;
