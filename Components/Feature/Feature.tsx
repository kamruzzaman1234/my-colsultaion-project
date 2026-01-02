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


const Feature = ()=>{
    return(
        <div className="py-[100px] bg-gray-100">
            <div className="max-w-7xl w-full mx-auto">
        <div className="max-w-[700px] w-full mx-auto">
          <h2 className={`${poppins.className} text-[32px] font-bold text-center`}>
            Featured Projects
          </h2>
          <p className={`${poppins.className} text-[20px] font-normal text-center`}>
            Showcasing our commitment to excellence and innovation
          </p>
        </div>

        <div className="mt-[40px]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="border border-black">
                            <div className="h-[300px]">
                                <img src="https://i.ibb.co.com/YFSv07D6/room1.jpg" className="w-full h-full" alt="" />
                            </div>
                            <div className="p-4">
                                <h3>Luxury Residential Complex</h3>
                                <h5>Dhanmondi, Dhaka</h5>
                            </div>
                        </div>
                         <div className="border border-black">
                            <div className="h-[300px]">
                                <img src="https://i.ibb.co.com/YFSv07D6/room1.jpg" className="w-full h-full" alt="" />
                            </div>
                            <div className="p-4">
                                <h3>Luxury Residential Complex</h3>
                                <h5>Dhanmondi, Dhaka</h5>
                            </div>
                        </div>
                         <div className="border border-black">
                            <div className="h-[300px]">
                                <img src="https://i.ibb.co.com/YFSv07D6/room1.jpg" className="w-full h-full" alt="" />
                            </div>
                            <div className="p-4">
                                <h3>Luxury Residential Complex</h3>
                                <h5>Dhanmondi, Dhaka</h5>
                            </div>
                        </div>
                    
        
                  </div>
        </div>
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
    )
}

export default Feature;  