"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Institutions", href: "/institutions" },
  // { label: "Innovation", href: "/innovation" },
  { label: "Admissions", href: "/admissions" },
  { label: "Franchise", href: "/franchise" },
   { label: "Training", href: "/teachertraining" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar({
  theme = "dark",
}: {
  theme?: "dark" | "light";
}) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Theme-based classes
  const isLight = theme === "light";

  const navBgClass = isLight
    ? "bg-white/80 border-gray-200 shadow-[0_8px_32px_rgba(0,0,0,0.05)]"
    : "bg-gradient-to-r from-white/10 via-white/5 to-white/10 border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.25)]";

  const logoTextClass = isLight ? "text-[#1c1b1b]" : "text-white";
  const logoSubTextClass = isLight ? "text-gray-600" : "text-white/80";

  const linkClass = isLight
    ? "text-gray-600 hover:text-[#a71515] hover:bg-gray-50/50"
    : "text-white/80 hover:text-white hover:bg-white/[0.03]";

  const hamburgerClass = isLight
    ? "bg-gray-100 hover:bg-gray-200 border-gray-200"
    : "bg-white/5 hover:bg-white/10 border-white/10";

  const hamburgerLineClass = isLight ? "bg-[#1c1b1b]" : "bg-white";

  return (
    <header
      className={`fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 w-full transition-all duration-300 ${
        scrolled ? "translate-y-0" : "translate-y-2"
      }`}
      role="banner"
    >
      <nav
        className={`w-full h-16 sm:h-20 max-w-[1100px] flex items-center justify-between px-6 sm:px-8 rounded-2xl backdrop-blur-lg border relative overflow-hidden transition-colors duration-300 ${navBgClass}`}
        aria-label="Main navigation"
      >
        {/* Subtle top edge highlight */}
        {!isLight && (
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-60 pointer-events-none" />
        )}

        {/* Left Section: Logo */}
      <Link
  href="/"
  className="flex items-center z-[501] group py-2"
  aria-label="Garima Group — Home"
>
  <img
    src="/Screenshot_2026-03-21_165539-removebg-preview.png"   // 👈 apna logo path
    alt="Garima Group Logo"
    className="h-22 w-auto object-contain"
  />
</Link>
        {/* Right Section: Desktop Links */}
        <ul className="hidden lg:flex items-stretch h-full gap-2 xl:gap-4 z-[501]">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.label} className="h-full flex items-center">
                <Link
                  href={link.href}
                  className={`flex items-center h-full px-4 font-body text-sm font-medium tracking-wide transition-all duration-300 group relative ${
                    isActive
                      ? isLight
                        ? "text-[#8b1010]"
                        : "text-white"
                      : linkClass
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>

                  {/* --- Hover/Active Shining Light Effects --- */}
                  {!isLight && (
                    <>
                      <span
                        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-white transition-opacity duration-300 blur-[2px] ${
                          isActive
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        }`}
                      />
                      <span
                        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-white transition-opacity duration-300 shadow-[0_0_15px_5px_rgba(255,255,255,1)] ${
                          isActive
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        }`}
                      />
                      <span
                        className={`absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-white/10 to-transparent transition-opacity duration-300 pointer-events-none ${
                          isActive
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        }`}
                      />
                    </>
                  )}
                  {isLight && (
                    <>
                      <span
                        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-[#a71515] transition-all duration-300 ${
                          isActive
                            ? "opacity-100 w-16"
                            : "opacity-0 group-hover:opacity-100"
                        }`}
                      />
                    </>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className={`flex lg:hidden flex-col justify-center gap-[5px] w-10 h-10 border rounded-full cursor-pointer z-[502] p-2 transition-colors my-2 ${hamburgerClass}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-full h-[2px] rounded-full transition-all duration-300 origin-center ${hamburgerLineClass} ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-full h-[2px] rounded-full transition-all duration-300 ${hamburgerLineClass} ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-full h-[2px] rounded-full transition-all duration-300 origin-center ${hamburgerLineClass} ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[498] transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-[min(85vw,380px)] h-screen bg-[#1c1b1b]/95 backdrop-blur-xl border-l border-white/10 z-[500] flex flex-col justify-center px-8 py-16 transition-transform duration-500 ease-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-6">
          {NAV_LINKS.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <li
                key={link.label}
                className={`${menuOpen ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${100 + i * 50}ms` }}
              >
                <Link
                  href={link.href}
                  className={`block font-heading text-2xl font-light transition-all duration-300 hover:text-white hover:translate-x-2 ${
                    isActive
                      ? "text-white font-medium pl-4 border-l-2 border-[#8b1010]"
                      : "text-white/80"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
