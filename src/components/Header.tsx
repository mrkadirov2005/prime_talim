import  { useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Import hamburger & close icons

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-orange-500 h-20 z-20 w-full flex items-center justify-between px-6 sm:px-20 shadow-2xl shadow-amber-800 relative">
      {/* Logo */}
      <img src="/logo.png" className="w-16 sm:w-20" alt="Logo" />

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex sm:w-[60%] w-[40%] items-center sm:text-sm md:text-xl justify-between uppercase text-white font-semibold">
        <Link to="/">Asosiy</Link>
        <Link to="/courses">Kurslar</Link>
        <Link to="/about">Biz haqimizda</Link>
        <Link to="/videos">Video darslar</Link>
        <Link to="/test">Sinov Testi</Link>
      </nav>

      {/* Buttons (Hidden on mobile) */}
      <div className="hidden sm:flex w-[15%] items-center justify-between">
        <Button variant="contained">Login</Button>
        <Button variant="contained">Contact</Button>
      </div>

      {/* Hamburger Button (Mobile) */}
      <button className="sm:hidden text-white text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <HiX /> : <HiMenuAlt3 />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-orange-600 flex flex-col items-center gap-5 p-5 text-white font-semibold sm:hidden">
          <Link className="border-2 border-orange-950 w-full text-center hover:scale-115" to="/" onClick={() => setMenuOpen(false)}>Asosiy</Link>
          <Link className="border-2 border-orange-950 w-full text-center hover:scale-115" to="/about" onClick={() => setMenuOpen(false)}>Biz haqimizda</Link>
          <Link className="border-2 border-orange-950 w-full text-center hover:scale-115" to="/courses" onClick={() => setMenuOpen(false)}>Kurslar</Link>
          <Link className="border-2 border-orange-950 w-full text-center hover:scale-115" to="/videos" onClick={() => setMenuOpen(false)}>Video darslar</Link>
          <Link className="border-2 border-orange-950 w-full text-center hover:scale-115" to="/test" onClick={() => setMenuOpen(false)}>Sinov Testi</Link>

          {/* Buttons inside mobile menu */}
          <div className="flex flex-col gap-2 w-full">
            <Button variant="contained" fullWidth>Login</Button>
            <Button variant="contained" fullWidth>Contact</Button>
          </div>
        </div>
      )}
    </header>
  );
}
