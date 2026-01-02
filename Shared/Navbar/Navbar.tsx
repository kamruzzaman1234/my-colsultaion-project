'use client';
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
    subsets:['latin'],
    weight:['400', '500','600','700']
})

const Navbar = ()=>{
    return(
<div className="max-w-7xl w-full mx-auto fixed-top w-full">
<div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link href={'/'}>Item 1</Link></li>
        
      </ul>
    </div>
    <Link href={'/'} className="btn btn-ghost text-xl">Real Estate</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link href={'/'} className={`${poppins.className} text-[17px] font-medium text-gray-600`}>Home</Link></li>
      <li><Link href={'/'} className={`${poppins.className} text-[17px] font-medium text-gray-600`}>About us</Link></li>
      <li><Link href={'/'} className={`${poppins.className} text-[17px] font-medium text-gray-600`}>Services</Link></li>
      <li><Link href={'/'} className={`${poppins.className} text-[17px] font-medium text-gray-600`}>Projects</Link></li>
      <li><Link href={'/'} className={`${poppins.className} text-[17px] font-medium text-gray-600`}>Career</Link></li>
      <li><Link href={'/'} className={`${poppins.className} text-[17px] font-medium text-gray-600`}>Vendor</Link></li>
    </ul>
    <Link href={'/'} className={`${poppins.className} text-[18px] py-2 rounded-lg px-4 bg-black text-white `}>Contact us</Link>
  </div>

</div>
        </div>
    )
}

export default Navbar;