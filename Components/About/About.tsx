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

const About = () => {
  return (
    <div className="py-[80px] px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="w-full lg:w-[60%]">
            <div className="flex flex-col gap-6">
              <h2
                className={`${playFair.className} text-[32px] md:text-[36px] font-semibold text-black leading-tight`}
              >
                Building Tomorrow&apos;s Landmarks
              </h2>

              <div className="flex flex-col gap-4">
                <p
                  className={`${poppins.className} text-[17px] md:text-[18px] text-gray-600`}
                >
                  CapX Properties is a leading project management consultancy firm
                  in Dhaka, specializing in end-to-end construction project
                  oversight. With over 15 years of experience, we deliver
                  excellence in every project.
                </p>

                <p
                  className={`${poppins.className} text-[17px] md:text-[18px] text-gray-600`}
                >
                  Our comprehensive approach ensures timely delivery, cost
                  efficiency, and uncompromising quality standards across all
                  phases of construction.
                </p>
              </div>

              <div>
                <Link
                  href="/about"
                  className={`${poppins.className} inline-flex items-center gap-2 text-black font-medium border-b-2 border-black pb-1 hover:gap-3 transition-all`}
                >
                  Learn More About Us →
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT STATS */}
          <div className="w-full lg:w-[40%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { value: "50+", label: "Projects Completed" },
                { value: "15+", label: "Years Experience" },
                { value: "100%", label: "Client Satisfaction" },
                { value: "30+", label: "Expert Team" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 text-center border border-gray-200 px-6 py-8 bg-white
                  transition-all duration-300 hover:border-gray-800 hover:-translate-y-2 hover:shadow-xl rounded-xl"
                >
                  <h4
                    className={`${playFair.className} text-[44px] md:text-[52px] font-extrabold text-black`}
                  >
                    {item.value}
                  </h4>
                  <p
                    className={`${poppins.className} text-[16px] md:text-[18px] text-gray-500`}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
