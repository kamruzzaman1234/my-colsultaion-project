'use client';
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow">
      <div className="max-w-7xl w-full mx-auto px-4">
        <div className="navbar h-20 flex items-center justify-between">

          {/* Navbar Start */}
          <div className="navbar-start flex items-center">
            {/* Mobile Dropdown */}
            <div className="dropdown lg:hidden">
              <div tabIndex={0} role="button" className="btn btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
                <li><Link href={'/'}>Home</Link></li>
                <li>
                  <Link href={'/about'}>About Us</Link>
                  <ul className="p-2 bg-white rounded shadow mt-1">
                    <li><Link href={'/about#who-we-are'}>Who We Are</Link></li>
                    <li><Link href={'/about#mission-vision'}>Mission & Vision</Link></li>
                    <li><Link href={'/projects#our-team'}>Our Team</Link></li>
                    <li><Link href={'/projects#core-values'}>Core Values</Link></li>
                  </ul>
                </li>
                <li>
                  <Link href={'/projects'}>Projects</Link>
                  <ul className="p-2 bg-white rounded shadow mt-1">
                    <li><Link href={'/projects#our-team'}>Our Team</Link></li>
                    <li><Link href={'/projects#core-values'}>Core Values</Link></li>
                    <li><Link href={'/projects#our-team'}>Our Team</Link></li>
                    <li><Link href={'/projects#core-values'}>Core Values</Link></li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Logo */}
            <Link href={'/'} className="btn btn-ghost text-xl font-bold">
              Real Estate
            </Link>
          </div>

          {/* Navbar Center */}
          <div className="navbar-center hidden lg:flex items-center">
            <ul className="menu menu-horizontal px-1 space-x-4">

              <li>
                <Link href={'/'} className={`${poppins.className} text-[17px] font-medium text-gray-600 hover:text-black transition`}>
                  Home
                </Link>
              </li>

              {/* About Dropdown */}
              <li className="relative group">
                <Link href={'/about'} className={`${poppins.className} text-[17px] font-medium text-gray-600 hover:text-black transition`}>
                  About Us
                </Link>
                <ul className="absolute hidden group-hover:block bg-white shadow rounded mt-8 w-48">
                  <li><Link href={'/about#who-we-are'} className="block px-4 py-2 hover:bg-gray-100">Who We Are</Link></li>
                  <li><Link href={'/about#mission-vision'} className="block px-4 py-2 hover:bg-gray-100">Mission & Vision</Link></li>
                  <li><Link href={'/projects#our-team'}>Our Team</Link></li>
                    <li><Link href={'/projects#core-values'}>Core Values</Link></li>
                </ul>
              </li>

              <li>
                <Link href={'/services'} className={`${poppins.className} text-[17px] font-medium text-gray-600 hover:text-black transition`}>
                  Services
                </Link>
              </li>

              {/* Projects Dropdown */}
              <li className="relative group">
                <Link href={'/projects'} className={`${poppins.className} text-[17px] font-medium text-gray-600 hover:text-black transition`}>
                  Projects
                </Link>
                <ul className="absolute hidden group-hover:block bg-white shadow rounded mt-8 w-48">
                  <li><Link href={'/projects#our-team'} className="block px-4 py-2 hover:bg-gray-100">Our Team</Link></li>
                  <li><Link href={'/projects#core-values'} className="block px-4 py-2 hover:bg-gray-100">Core Values</Link></li>
                </ul>
              </li>

              <li>
                <Link href={'/career'} className={`${poppins.className} text-[17px] font-medium text-gray-600 hover:text-black transition`}>
                  Career
                </Link>
              </li>

              <li>
                <Link href={'/vendor'} className={`${poppins.className} text-[17px] font-medium text-gray-600 hover:text-black transition`}>
                  Vendor
                </Link>
              </li>

            </ul>

            {/* Contact Button */}
            <Link href={'/contact'} className={`${poppins.className} text-[18px] py-2 rounded-lg px-4 bg-black text-white hover:bg-gray-800 transition`}>
              Contact Us
            </Link>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar;
