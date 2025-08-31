"use client";

import { Truck, Headphones, RotateCcw, ShieldCheck } from "lucide-react";

const WhyChooseElectro = () => {
  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      desc: "Free shipping on orders over ₹1000",
      bg: "bg-sky-100",
      iconWrap: "bg-sky-500",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      desc: "Contact us 24 hours a day",
      bg: "bg-emerald-100",
      iconWrap: "bg-emerald-500",
    },
    {
      icon: RotateCcw,
      title: "30 Day Return",
      desc: "Simply return it within 30 days",
      bg: "bg-orange-100",
      iconWrap: "bg-orange-500",
    },
    {
      icon: ShieldCheck,
      title: "Secure Payment",
      desc: "100% secure payment processing",
      bg: "bg-violet-100",
      iconWrap: "bg-violet-500",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Electro?
          </h2>
          <p className="mt-2 text-slate-500">
            We provide the best shopping experience
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 place-items-center">
          {features.map(({ icon: Icon, title, desc, bg, iconWrap }) => (
            <div
              key={title}
              className="
                w-full max-w-[268px] h-[250px]
                rounded-[24px]  
                bg-white 
                shadow-[0_6px_24px_rgba(15,23,42,0.06)]
                border border-slate-100
                p-5 sm:p-6
                flex flex-col items-center justify-center text-center
                transition-transform duration-200 hover:-translate-y-1
              "
            >
              {/* Icon */}
              <div className={`rounded-xl ${bg} p-3 sm:p-4 mb-3 sm:mb-4`}>
                <div className={`${iconWrap} rounded-lg p-2.5 sm:p-3`}>
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
              </div>

              {/* Text */}
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseElectro;
