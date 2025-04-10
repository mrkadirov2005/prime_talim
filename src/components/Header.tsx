import { useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Import hamburger & close icons

export default function Header() {
  const links=["Asosiy","Kurslar","Demo Darslar","Sinov Testlar"]
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id="header" className="bg-gradient-to-r from-blue-400 to-orange-500 h-20 z-20 w-full flex items-center justify-between px-6 sm:px-20 shadow-xl shadow-blue-600 relative">
      {/* Logo */}
      <img src="/logo.png" className="w-16 sm:w-20" alt="Logo" />

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex sm:w-[60%] items-center sm:text-sm md:text-lg justify-between uppercase text-white font-semibold">
        {["/", "/courses","/videos", "/test"].map((route,index) => (
          <Link
            key={route}
            className="transition-transform header_link_items hover:scale-110 hover:text-gray-200 duration-200"
            to={route}
          >
            {links[index]}
          </Link>
        ))}
      </nav>

      {/* Buttons (Hidden on mobile) */}
      <div className="hidden sm:flex w-[15%] items-center justify-between">
        <Button variant="contained" color="error" className="contact_wrapper hover:scale-110 transition-transform"><a className="contact" href="/contact">Aloqaga chiqish</a></Button>
      </div>

      {/* Hamburger Button (Mobile) */}
      <button
        className="sm:hidden text-white text-3xl transition-transform hover:scale-110"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <HiX /> : <HiMenuAlt3 />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-orange-500 bg-opacity-90 rounded-b-xl shadow-lg shadow-blue-600 flex flex-col items-center gap-5 p-5 text-white font-semibold sm:hidden">
          {["/", "/courses", "/test"].map((route,index) => (
            <Link 
              key={route}
              className="border-b-2 border-white pb-1 w-full text-center transition-transform hover:scale-105"
              to={route}
              onClick={() => setMenuOpen(false)}
            >
              {links[index]}
            </Link>
          ))}

          {/* Buttons inside mobile menu */}
          <div className="flex flex-col gap-2 w-full">
            {/* <Button variant="contained" color="primary" fullWidth className="hover:scale-105">Login</Button> */}
            <Button variant="contained" color="error" fullWidth className="hover:scale-105"><a href="/#contact">Aloqaga chiqish</a></Button>
          </div>
        </div>
      )}
    </header>
  );
}
