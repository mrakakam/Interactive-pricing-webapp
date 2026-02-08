import { useState } from "react";
import sliderimg from "../assets/images/icon-slider.svg";
import checkerimg from "../assets/images/icon-check.svg";

export const Navbar = () => {
  const [value, setValue] = useState(50);
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="min-h-[300px] bg-gray-50 relative">
      {/* Heading */}
      <nav className="flex flex-col items-center text-center pt-10 relative z-10">
        <h3 className="text-2xl font-bold text-gray-800">
          Simple, traffic-based pricing
        </h3>
        <p className="text-gray-600">
          Sign-up for our 30 day. No credit card required
        </p>

        {/* Background under h3/p */}
        <div
          className="absolute top-full center-1/2 -translate-y-1/2 w-[200px] h-48 bg-cover bg-center opacity-30 -z-10"
          style={{ backgroundImage: "url('/pattern-circles.svg')" }}
        />
      </nav>

      {/* Card */}
      <div className="mt-20 flex justify-center">
        <div className="w-[700px] bg-white rounded-xl p-10 shadow-md">
          {/* Top row */}
          <div className="flex items-center justify-between mb-6">
            <h6 className="text-sm tracking-widest text-gray-500">
              100K PAGEVIEWS
            </h6>
            <div className="flex items-end gap-1">
              <h3 className="text-3xl font-bold text-gray-800">$16.00</h3>
              <p className="text-gray-500">/month</p>
            </div>
          </div>

          {/* Slider */}
          <div className="relative mb-8">
            <input
              type="range"
              min="0"
              max="100"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full appearance-none h-2 bg-gray-200 rounded-lg cursor-pointer"
              style={{
                background: `linear-gradient(to right, #3b82f6 ${value}%, #e5e7eb ${value}%)`,
              }}
            />

            {/* Big blue circle + icon */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg pointer-events-none transition-all hover:shadow-[0_0_25px_#3b82f6]"
              style={{ left: `calc(${value}% - 32px)` }}
            >
              <img src={sliderimg} alt="slider" className="w-7 h-7" />
            </div>
          </div>

          {/* Billing toggle */}
          <div className="flex items-center justify-center gap-4 border-b border-gray-200 pb-6">
            <span className="text-sm text-gray-500">Monthly Billing</span>

            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`w-14 h-7 flex items-center rounded-full p-1 transition-colors
                ${isYearly ? "bg-blue-500" : "bg-gray-300"}`}
            >
              <span
                className={`bg-white w-5 h-5 rounded-full shadow-md transition-transform
                  ${isYearly ? "translate-x-7" : "translate-x-0"}`}
              />
            </button>

            <span className="text-sm text-gray-500">Yearly Billing</span>

            <span className="ml-2 px-2 py-0.5 text-xs font-bold text-white bg-red-400 rounded-full">
              25% discount
            </span>
          </div>

          {/* Bottom section */}
          <div className="flex items-center justify-between pt-6">
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <img src={checkerimg} alt="" />
                Unlimited websites
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <img src={checkerimg} alt="" />
                100% data ownership
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <img src={checkerimg} alt="" />
                Email reports
              </li>
            </ul>

            {/* Button */}
            <button className="px-8 py-3 bg-gray-800 text-white rounded-full text-sm font-semibold hover:bg-gray-900 transition">
              Start my trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
