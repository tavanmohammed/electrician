import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "HOME", path: "/" },
    { label: "ABOUT US", path: "/about" },
    { label: "SERVICES", path: "/services" },
    { label: "PROJECTS", path: "/projects" },
    { label: "CONTACT US", path: "/contact" },
  ];

  return (
    <header className="relative z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="h-[90px] sm:h-[75px] lg:h-[90px] object-contain"
            />
          </Link>

          <div className="hidden sm:block">
            <p className="text-[10px] font-semibold text-orange-500 sm:text-[11px]">
              GENERAL CONTRACTING INC.
            </p>
          </div>
        </div>

        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.label}
                to={link.path}
                className="relative text-[12px] font-medium uppercase tracking-wider text-black transition hover:text-orange-500"
              >
                {link.label}

                {isActive && (
                  <span className="absolute -bottom-2 left-0 h-[2px] w-6 bg-orange-500"></span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link to="/contact">
            <button className="bg-orange-500 px-5 py-3 text-xs font-extrabold uppercase tracking-wide text-black transition hover:bg-orange-600 sm:px-6 sm:py-4 sm:text-sm">
              Request a Quote
            </button>
          </Link>
        </div>

        <button
          className="flex flex-col gap-1.5 xl:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 w-7 bg-black"></span>
          <span className="block h-0.5 w-7 bg-black"></span>
          <span className="block h-0.5 w-7 bg-black"></span>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 shadow-md xl:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="text-[15px] font-bold text-black transition hover:text-orange-500"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            <button className="mt-5 w-full bg-orange-500 px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-black transition hover:bg-orange-600 md:hidden">
              Request a Quote
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}