'use client';

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

const Services = () => {
  return (
    <div className="py-[100px] px-4">
      <div className="max-w-7xl mx-auto w-full">

        {/* HEADER */}
        <div className="max-w-[700px] mx-auto text-center mb-14">
          <h2 className={`${poppins.className} text-[28px] md:text-[32px] font-bold text-black`}>
            Our Services
          </h2>
          <p className={`${poppins.className} text-[17px] md:text-[20px] text-gray-600 mt-2`}>
            Comprehensive project management solutions tailored to your needs
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <GoProjectSymlink />,
              title: "Project Management Consultancy",
              desc: "End-to-end project oversight ensuring timely delivery and quality standards.",
            },
            {
              icon: <SiConsul />,
              title: "Construction Management",
              desc: "Professional supervision and coordination of construction activities.",
            },
            {
              icon: <MdOutlinePeopleAlt />,
              title: "Design Coordination",
              desc: "Seamless integration of architectural and engineering designs.",
            },
            {
              icon: <MdOutlineNaturePeople />,
              title: "Quality & Safety Management",
              desc: "Rigorous quality control and safety protocol implementation.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="
                flex flex-col gap-4 
                p-8 
                border border-gray-200 
                bg-gray-50 
                rounded-xl
                transition-all duration-300 ease-in-out
                hover:-translate-y-2 
                hover:shadow-xl 
                hover:border-gray-800
                group
              "
            >
              <div className="text-5xl text-black transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>

              <h3 className={`${poppins.className} text-[18px] font-semibold text-black`}>
                {service.title}
              </h3>

              <p className={`${poppins.className} text-[16px] text-gray-600 leading-relaxed`}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/services"
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
