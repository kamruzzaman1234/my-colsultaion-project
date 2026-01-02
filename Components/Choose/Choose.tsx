'use client';
import { Playfair_Display, Poppins } from "next/font/google";

const playFair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const Choose = () => {
  return (
    <div className="bg-black py-[100px] px-4">
      <div className="max-w-7xl mx-auto w-full">

        {/* HEADER */}
        <div className="max-w-[700px] mx-auto text-center mb-14">
          <h2 className={`${poppins.className} text-[30px] md:text-[38px] font-bold text-white`}>
            Why Choose CapX Properties
          </h2>
          <p className={`${poppins.className} text-[17px] md:text-[20px] text-gray-300 mt-3`}>
            Your trusted partner for successful project delivery
          </p>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="flex flex-col gap-3 text-center">
            <h3 className={`${poppins.className} text-[20px] md:text-[22px] font-semibold text-white`}>
              Expert Team
            </h3>
            <p className={`${poppins.className} text-[16px] text-gray-300 max-w-[320px] mx-auto`}>
              Highly qualified professionals with extensive industry experience
            </p>
          </div>

          <div className="flex flex-col gap-3 text-center">
            <h3 className={`${poppins.className} text-[20px] md:text-[22px] font-semibold text-white`}>
              Proven Track Record
            </h3>
            <p className={`${poppins.className} text-[16px] text-gray-300 max-w-[320px] mx-auto`}>
              100% project success rate with on-time delivery
            </p>
          </div>

          <div className="flex flex-col gap-3 text-center">
            <h3 className={`${poppins.className} text-[20px] md:text-[22px] font-semibold text-white`}>
              Comprehensive Solutions
            </h3>
            <p className={`${poppins.className} text-[16px] text-gray-300 max-w-[320px] mx-auto`}>
              End-to-end services from planning to project handover
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Choose;
