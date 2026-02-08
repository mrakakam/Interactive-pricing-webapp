import { useState } from "react";
import sliderimg from "../assets/images/icon-slider.svg";

export const Navbar = () => {
  const [value, setValue] = useState(50);
  const [isYearly, setIsYearly] = useState(false); // switch state

  return (
    <section
      className="min-h-[300px] bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-pattern.svg')" }}
    >
      {/* Heading */}
      <nav className="flex flex-col items-center text-center pt-20">
        <h3 className="text-2xl font-bold text-gray-800">
          Simple, traffic-based pricing
        </h3>
        <p className="text-gray-600">
          Sign-up for our 30 day. No credit card required
        </p>
      </nav>

      {/* Pricing + Slider Card */}
      <div className="mt-12 flex justify-center">
        <div className="w-[500px] bg-white rounded-xl p-6 shadow-md">
          
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
          <div className="relative">
            <input
              type="range"
              min="0"
              max="100"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full appearance-none h-2 bg-gray-200 rounded-lg cursor-pointer"
            />

            <img
              src={sliderimg}
              alt="slider"
              className="absolute top-1/2 -translate-y-1/2 w-6 h-6 pointer-events-none"
              style={{ left: `calc(${value}% - 12px)` }}
            />
          </div>

          {/* ===== TOGGLE SWITCH (ADDED HERE) ===== */}
          <div className="mt-8 flex items-center justify-center gap-4 border-b-1 border-gray-300 pb-4">
            <span className="text-sm text-gray-500">Monthly Billing</span>

            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`w-14 h-7 flex items-center rounded-full p-1 transition-colors
                ${isYearly ? "bg-green-500" : "bg-gray-300"}`}
            >
              <span
                className={`bg-white w-5 h-5 rounded-full shadow-md transition-transform
                  ${isYearly ? "translate-x-7" : "translate-x-0"}`}
              />
            </button>

            <span className="text-sm text-gray-500">Yearly Billing</span>
            <p className="text-red-600 ">25% discount</p>
          </div>

          <div>

            <div>


            </div>

            
          </div>

        </div>
      </div>
    </section>
  );
};
