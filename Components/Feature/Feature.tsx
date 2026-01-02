'use client';
import { Playfair_Display, Poppins } from "next/font/google";
import Link from "next/link";

const playFair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const Feature = () => {
  return (
    <div className="py-[100px] bg-gray-100 px-4">
      <div className="max-w-7xl mx-auto w-full">

        {/* HEADER */}
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className={`${playFair.className} text-[28px] md:text-[32px] font-bold text-black`}>
            Featured Projects
          </h2>
          <p className={`${poppins.className} text-[16px] md:text-[18px] text-gray-600 mt-2`}>
            Showcasing our commitment to excellence and innovation
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="mt-[40px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {[1,2,3].map((_, index) => (
              <div
                key={index}
                className="border border-gray-300 bg-white transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl hover:border-black"
              >
                <div className="h-[220px] md:h-[300px] overflow-hidden">
                  <img
                    src="https://i.ibb.co.com/YFSv07D6/room1.jpg"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    alt="Project"
                  />
                </div>

                <div className="p-5">
                  <h3 className={`${poppins.className} text-[18px] font-semibold text-black`}>
                    Luxury Residential Complex
                  </h3>
                  <h5 className={`${poppins.className} text-[15px] text-gray-600 mt-1`}>
                    Dhanmondi, Dhaka
                  </h5>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* CTA */}
        <div className="mt-[40px] text-center">
          <Link
            href="/"
            className={`${poppins.className} inline-flex items-center gap-2 text-black font-medium border-b-2 border-black pb-1 hover:gap-3 transition-all`}
          >
            View All Projects →
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Feature;
