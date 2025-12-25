"use client";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Hot Item", href: "#hot-item" },
  { name: "Collection", href: "#collection" },
  { name: "About Us", href: "#about" },
  { name: "Contact Us", href: "#contact" },
];

const socialIcons = [
  { icon: <FaInstagram size={18} />, href: "#" },
  { icon: <FaFacebook size={18} />, href: "#" },
  { icon: <FaWhatsapp size={18} />, href: "#" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    const handleScroll = () => {
      const sections = ["hot-item", "collection", "about", "contact"];
      const currentSection = sections.find((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 200;
        }
        return false;
      });

      if (currentSection) {
        setActiveHash(`#${currentSection}`);
      } else if (window.scrollY < 100) {
        setActiveHash("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed z-50 w-full top-0">
      <div className="h-20 flex items-center justify-between px-6 md:px-36 border-b border-gray-100 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="text-3xl font-bold tracking-widest cursor-pointer">
          Fashion
        </div>

        <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest">
          {navLinks.map((link) => {
            const isHomeActive =
              link.href === "/" && pathname === "/" && activeHash === "";

            const isHashActive = activeHash === link.href;

            const isActive = isHomeActive || isHashActive;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative pb-1 transition-all duration-300 ${
                  isActive
                    ? "text-black font-bold"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <div className="flex items-center space-x-3">
          {socialIcons.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-zinc-800 text-white hover:bg-orange-600 transition-all hover:scale-110"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
