"use client";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/", type: "page" },
  { name: "Hot Item", href: "/hot-item", type: "page" },
  { name: "Collection", href: "/collection", type: "page" },
  { name: "ABOUT", href: "#about", type: "section" },
  { name: "CONTACT US", href: "#contact", type: "section" },
];

const socialIcons = [
  { icon: <FaInstagram size={18} />, href: "#" },
  { icon: <FaFacebook size={18} />, href: "#" },
  { icon: <FaWhatsapp size={18} />, href: "#" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "contact"];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });

      setActiveHash(current ? `#${current}` : "");
    };

    if (pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleSectionClick = (hash) => {
    if (pathname !== "/") {
      router.push(`/${hash}`);
    } else {
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed z-50 w-full top-0">
      <div className="h-20 flex items-center justify-between px-6 md:px-36 border-b border-gray-100 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="text-3xl font-bold tracking-widest cursor-pointer">
          Fashion
        </div>

        <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest">
          {navLinks.map((link) => {
            const isActive =
              link.type === "page"
                ? pathname === link.href
                : pathname === "/" && activeHash === link.href;
            if (link.type === "section") {
              return (
                <button
                  key={link.name}
                  onClick={() => handleSectionClick(link.href)}
                  className={`relative pb-1 transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "text-black font-bold"
                      : "text-gray-500 hover:text-black"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gray-400 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              );
            }

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
