"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-forest shadow-lg shadow-forest-dark/30"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight text-white">
            Green<span className="text-sage"> Ridge</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="/#about"
            className="text-sm font-medium uppercase tracking-wider text-white/80 transition-colors hover:text-sage"
          >
            About
          </a>
          <a
            href="/#services"
            className="text-sm font-medium uppercase tracking-wider text-white/80 transition-colors hover:text-sage"
          >
            Services
          </a>
          <a
            href="/#gallery"
            className="text-sm font-medium uppercase tracking-wider text-white/80 transition-colors hover:text-sage"
          >
            Gallery
          </a>
          <a
            href="/#contact"
            className="text-sm font-medium uppercase tracking-wider text-white/80 transition-colors hover:text-sage"
          >
            Contact
          </a>
          <Link
            href="/#contact"
            className={`rounded-full px-6 py-2 text-sm font-bold uppercase tracking-wider transition-colors ${
              scrolled
                ? "bg-white text-forest hover:bg-sage-light"
                : "bg-forest px-6 py-2 text-white hover:bg-forest-dark"
            }`}
          >
            Free Estimate
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 top-0 z-40 bg-forest-dark transition-transform duration-300 md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-white"
            onClick={() => setMobileOpen(false)}
          >
            Green<span className="text-sage"> Ridge</span>
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="text-3xl text-white"
          >
            &times;
          </button>
        </div>
        <div className="flex flex-col items-center gap-8 pt-16">
          <a
            href="/#about"
            className="text-xl font-medium uppercase tracking-wider text-white/80 hover:text-sage"
            onClick={() => setMobileOpen(false)}
          >
            About
          </a>
          <a
            href="/#services"
            className="text-xl font-medium uppercase tracking-wider text-white/80 hover:text-sage"
            onClick={() => setMobileOpen(false)}
          >
            Services
          </a>
          <a
            href="/#gallery"
            className="text-xl font-medium uppercase tracking-wider text-white/80 hover:text-sage"
            onClick={() => setMobileOpen(false)}
          >
            Gallery
          </a>
          <a
            href="/#contact"
            className="text-xl font-medium uppercase tracking-wider text-white/80 hover:text-sage"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </a>
          <Link
            href="/#contact"
            className="rounded-full bg-white px-8 py-3 text-lg font-bold uppercase tracking-wider text-forest hover:bg-sage-light"
            onClick={() => setMobileOpen(false)}
          >
            Free Estimate
          </Link>
        </div>
      </div>
    </nav>
  );
}
