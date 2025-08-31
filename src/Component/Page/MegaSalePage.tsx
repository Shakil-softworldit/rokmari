"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, ShoppingBag } from "lucide-react";
import Image from "next/image";
import productImg from "../../assets/allImage.jpg";

const MegaSalePage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 12,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.days === 0 && prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          return prev;
        }

        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) seconds -= 1;
        else if (minutes > 0) { minutes -= 1; seconds = 59; }
        else if (hours > 0) { hours -= 1; minutes = 59; seconds = 59; }
        else if (days > 0) { days -= 1; hours = 23; minutes = 59; seconds = 59; }

        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) clearInterval(timer);
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="min-h-screen p-4 sm:p-6 md:p-8"
      style={{ background: "linear-gradient(135deg, #9333EA 0%, #DB2777 50%, #DC2626 100%)" }}
    >
      <div className="max-w-6xl mx-auto relative">
        {/* decorative circles */}
        <div className="pointer-events-none absolute -top-4 -left-6 sm:top-2 sm:left-2 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full blur-[2px]" />
        <div className="pointer-events-none absolute bottom-10 right-0 w-28 h-28 sm:w-36 sm:h-36 bg-white/10 rounded-full blur-[3px]" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left */}
          <div className="text-white space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium mx-auto lg:mx-0">
              <Clock className="w-4 h-4" />
              Limited Time Only
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-[#FDE047] to-[#FFFFFF] bg-clip-text text-transparent">
              MEGA SALE
            </h1>

            <p className="text-lg md:text-2xl font-medium">Get UP TO 60% Off on Electronics</p>

            {/* Countdown */}
            <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 sm:p-4 text-center min-w-[72px] sm:min-w-[80px]"
                >
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold">
                    {item.value.toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs sm:text-sm opacity-80">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="flex justify-center lg:justify-start">
              <Button className="bg-white text-[#9333EA] hover:bg-white/90 font-semibold px-6 sm:px-8 py-4 sm:py-6 rounded flex items-center gap-2 sm:gap-3 w-fit shadow-md">
                <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base">Shop Now</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </Button>
            </div>
          </div>

          {/* Right - Single Image (no bg, no shadow) */}
          <div className="relative flex items-center justify-center">
            <div className="relative z-10 p-0 rounded-2xl bg-transparent">
              <div className="aspect-[4/3] md:aspect-[3/2] rounded-xl overflow-hidden">
                <Image
                  src={productImg}
                  alt="Featured product"
                  width={900}
                  height={600}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>
          {/* End Right */}
        </div>
      </div>
    </div>
  );
};

export default MegaSalePage;
