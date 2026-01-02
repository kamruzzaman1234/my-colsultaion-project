'use client';
import { Playfair, Playfair_Display, Poppins } from "next/font/google";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const playFair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

const Banner = () => {
  return (
    <div className="relative overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: "url('https://i.ibb.co/pvP2ng1f/h5.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          filter: "brightness(0.45)",
        }}
      ></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto w-full text-white pt-[260px] pb-[260px] px-4">
        <div className="flex flex-col items-center gap-6 text-center px-4">

          <h1
            className={`${playFair.className} tracking-tight text-[80px] lg:text-[90px] leading-tight font-bold`}
          >
            Excellence in Project Management
          </h1>

          <p
            className={`${poppins.className} max-w-[700px] text-[24px] text-gray-200`}
          >
            Premier end-to-end consultancy delivering world-class construction
            projects in Bangladesh
          </p>

          {/* Button */}
          <Link
            href="/"
            className="group inline-flex items-center gap-3 mt-6 px-8 py-4 
            bg-white text-black rounded-full font-medium text-[18px]
            transition-all duration-300 hover:bg-black hover:text-white
            shadow-lg hover:shadow-2xl"
          >
            Get Started
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-2"
            />
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Banner;
