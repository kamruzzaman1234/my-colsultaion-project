'use client';
import { Playfair_Display, Poppins } from "next/font/google";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const playFair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const ContactBtn = () => {
  return (
    <div className="py-[80px] md:py-[100px] px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-[800px] mx-auto">
          <div className="flex flex-col items-center gap-5 text-center">

            <h2
              className={`${playFair.className} text-[32px] sm:text-[42px] md:text-[55px] font-bold leading-tight`}
            >
              Ready to Start Your Project?
            </h2>

            <p
              className={`${poppins.className} text-[16px] md:text-[18px] text-gray-700 max-w-[650px]`}
            >
              Let&apos;s discuss how we can bring your vision to life with our expert
              project management services
            </p>

            <Link
              href="/"
              className="group inline-flex items-center gap-3 mt-6 px-8 py-4 
              bg-white text-black rounded-full font-medium text-[16px] md:text-[18px]
              transition-all duration-300 hover:bg-black hover:text-white
              shadow-lg hover:shadow-2xl"
            >
              Contact Us Today
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBtn;
