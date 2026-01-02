'use client'

import { Playfair_Display, Poppins } from "next/font/google";
import Link from "next/link";
import { GoProjectSymlink } from "react-icons/go";
import { SiConsul } from "react-icons/si";
import { MdOutlinePeopleAlt, MdOutlineNaturePeople } from "react-icons/md";

const playFair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const Services = ()=> {
  return (
    <div className="py-[100px] px-4">
      <div className="max-w-7xl w-full mx-auto">

        <div className="max-w-[700px] w-full mx-auto">
          <h2 className={`${poppins.className} text-[32px] font-bold text-center`}>
            Our Services
          </h2>
          <p className={`${poppins.className} text-[20px] font-normal text-center`}>
            Comprehensive project management solutions tailored to your needs
          </p>
        </div>

        <div className="mt-[40px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* CARD 1 */}
            <div className="flex flex-col gap-4 py-6 px-8 border border-gray-100 bg-gray-100
              transition-all duration-300 hover:border-gray-800 hover:-translate-y-2 hover:shadow-lg">
              <GoProjectSymlink className="text-6xl text-black"/>
              <h3 className={`${poppins.className} text-[18px] font-semibold`}>
                Project Management Consultancy
              </h3>
              <p>End-to-end project oversight ensuring timely delivery and quality standards.</p>
            </div>

            {/* CARD 2 */}
            <div className="flex flex-col gap-4 py-6 px-8 border border-gray-100 bg-gray-100
              transition-all duration-300 hover:border-gray-800 hover:-translate-y-2 hover:shadow-lg">
              <SiConsul className="text-6xl text-black"/>
              <h3 className={`${poppins.className} text-[18px] font-semibold`}>
                Construction Management
              </h3>
              <p>Professional supervision and coordination of construction activities.</p>
            </div>

            {/* CARD 3 */}
            <div className="flex flex-col gap-4 py-6 px-8 border border-gray-100 bg-gray-100
              transition-all duration-300 hover:border-gray-800 hover:-translate-y-2 hover:shadow-lg">
              <MdOutlinePeopleAlt className="text-6xl text-black"/>
              <h3 className={`${poppins.className} text-[18px] font-semibold`}>
                Design Coordination
              </h3>
              <p>Seamless integration of architectural and engineering designs.</p>
            </div>

            {/* CARD 4 */}
            <div className="flex flex-col gap-4 py-6 px-8 border border-gray-100 bg-gray-100
              transition-all duration-300 hover:border-gray-800 hover:-translate-y-2 hover:shadow-lg">
              <MdOutlineNaturePeople className="text-6xl text-black"/>
              <h3 className={`${poppins.className} text-[18px] font-semibold`}>
                Quality & Safety Management
              </h3>
              <p>Rigorous quality control and safety protocol implementation.</p>
            </div>

          </div>
        </div>

        <div className="mt-[40px] text-center">
          <Link
            href="/about"
            className={`${poppins.className} inline-flex items-center gap-2 text-black font-medium border-b-2 border-black pb-1 hover:gap-3 transition-all`}
          >
            View All Services →
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Services;
