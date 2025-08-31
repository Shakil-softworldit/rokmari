"use client";

import { Monitor, Smartphone, Camera, Headphones, Gamepad2, Tv } from "lucide-react";
import clsx from "clsx";

type Category = {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  items: string;
  bgColor: string;
};

const categories: Category[] = [
  { name: "Laptops",     icon: Monitor,    items: "120+ Items", bgColor: "bg-blue-500" },
  { name: "Smartphones", icon: Smartphone, items: "200+ Items", bgColor: "bg-green-500" },
  { name: "Cameras",     icon: Camera,     items: "50+ Items",  bgColor: "bg-purple-500" },
  { name: "Audio",       icon: Headphones, items: "80+ Items",  bgColor: "bg-orange-500" },
  { name: "Gaming",      icon: Gamepad2,   items: "150+ Items", bgColor: "bg-pink-500" },
  { name: "Smart TV",    icon: Tv,         items: "30+ Items",  bgColor: "bg-indigo-500" },
];

const ShopCategory = () => {
  return (
    <section className="bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Shop by Category
          </h1>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            Explore our wide range of electronics
          </p>
        </div>

        {/* Grid */}
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-6
            gap-3 sm:gap-4 md:gap-6
            auto-rows-fr
          "
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                type="button"
                aria-label={`Browse ${category.name}`}
                className={clsx(
                  "group relative flex h-full flex-col items-center",
                  // padding গুলো ব্রেকপয়েন্টভিত্তিক বাড়ানো
                  "rounded-2xl bg-white p-4 sm:p-5 md:p-6 lg:p-6",
                  "shadow-sm hover:shadow-lg transition-all duration-300",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/60"
                )}
              >
                {/* Icon wrapper: fixed aspect + max width যেন ছোট ডিভাইসে সাইজ ঠিক থাকে */}
                <div
                  className={clsx(
                    "w-full max-w-[140px] sm:max-w-[150px] md:max-w-[160px]",
                    "aspect-square rounded-xl mx-auto mb-3 sm:mb-4",
                    "flex items-center justify-center",
                    category.bgColor,
                    "shadow-md group-hover:shadow-xl transition-shadow duration-300"
                  )}
                >
                  <Icon className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 text-white" />
                </div>

                {/* Texts */}
                <div className="text-center px-1 sm:px-2">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-800 group-hover:text-gray-900">
                    {category.name}
                  </h3>
                  <p className="mt-0.5 text-xs sm:text-sm text-gray-500">
                    {category.items}
                  </p>
                </div>

                {/* Bottom spacing so content শ্বাস নিতে পারে */}
                <div className="mt-2 sm:mt-3" />

                {/* Hover ring */}
                <span
                  className="
                    pointer-events-none absolute inset-0 rounded-2xl
                    ring-0 group-hover:ring-1 ring-orange-500/25
                    transition-all duration-300
                  "
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ShopCategory;
