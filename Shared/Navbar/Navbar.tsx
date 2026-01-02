'use client';
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* LEFT */}
          <div className="flex items-center gap-4">

            {/* MOBILE MENU */}
            <div className="dropdown lg:hidden">
              <div tabIndex={0} role="button" className="btn btn-ghost px-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>

              <ul className="menu menu-sm dropdown-content mt-3 w-56 bg-white rounded-box shadow z-50">
                <li><Link href="/">Home</Link></li>
                <li>
                  <details>
                    <summary>About Us</summary>
                    <ul>
                      <li><Link href="/about#who-we-are">Who We Are</Link></li>
                      <li><Link href="/about#mission-vision">Mission & Vision</Link></li>
                      <li><Link href="/about#our-team">Our Team</Link></li>
                      <li><Link href="/about#core-values">Core Values</Link></li>
                    </ul>
                  </details>
                </li>
                <li><Link href="/services">Services</Link></li>
                <li>
                  <details>
                    <summary>Projects</summary>
                    <ul>
                      <li><Link href="/projects#our-team">Our Team</Link></li>
                      <li><Link href="/projects#core-values">Core Values</Link></li>
                    </ul>
                  </details>
                </li>
                <li><Link href="/career">Career</Link></li>
                <li><Link href="/vendor">Vendor</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </div>

            {/* LOGO */}
            <Link href="/" className="flex items-center">
              <img
                src="https://i.ibb.co.com/Y4NyM08r/43f0b6a1-f237-4135-a70c-0f7e8b40ca59.jpg"
                alt="Logo"
                className="h-12 w-[120px] "
              />
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">

              <li>
                <Link className={`${poppins.className} text-[17px] text-gray-600 hover:text-black`} href="/">
                  Home
                </Link>
              </li>

              {/* ABOUT */}
              <li className="relative group">
                <Link className={`${poppins.className} text-[17px] text-gray-600 hover:text-black`} href="/about">
                  About Us
                </Link>
                <ul className="absolute top-full left-0 mt-4 w-52 bg-white shadow rounded-md opacity-0 invisible group-hover:visible group-hover:opacity-100 transition">
                  <li><Link className="block px-4 py-2 hover:bg-gray-100" href="/about#who-we-are">Who We Are</Link></li>
                  <li><Link className="block px-4 py-2 hover:bg-gray-100" href="/about#mission-vision">Mission & Vision</Link></li>
                  <li><Link className="block px-4 py-2 hover:bg-gray-100" href="/about#our-team">Our Team</Link></li>
                  <li><Link className="block px-4 py-2 hover:bg-gray-100" href="/about#core-values">Core Values</Link></li>
                </ul>
              </li>

              <li>
                <Link className={`${poppins.className} text-[17px] text-gray-600 hover:text-black`} href="/services">
                  Services
                </Link>
              </li>

              {/* PROJECTS */}
              <li className="relative group">
                <Link className={`${poppins.className} text-[17px] text-gray-600 hover:text-black`} href="/projects">
                  Projects
                </Link>
                <ul className="absolute top-full left-0 mt-4 w-48 bg-white shadow rounded-md opacity-0 invisible group-hover:visible group-hover:opacity-100 transition">
                  <li><Link className="block px-4 py-2 hover:bg-gray-100" href="/projects#our-team">Our Team</Link></li>
                  <li><Link className="block px-4 py-2 hover:bg-gray-100" href="/projects#core-values">Core Values</Link></li>
                </ul>
              </li>

              <li>
                <Link className={`${poppins.className} text-[17px] text-gray-600 hover:text-black`} href="/career">
                  Career
                </Link>
              </li>

              <li>
                <Link className={`${poppins.className} text-[17px] text-gray-600 hover:text-black`} href="/vendor">
                  Vendor
                </Link>
              </li>
            </ul>

            {/* CTA */}
            <Link
              href="/contact"
              className={`${poppins.className} text-[16px] px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition`}
            >
              Contact Us
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
