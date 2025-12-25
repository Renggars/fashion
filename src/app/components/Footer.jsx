import React from "react";

import { MdMailOutline } from "react-icons/md";
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-[0.2em]">Fashion</h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-62.5">
              Fashion modern untuk gaya hidup Anda. Temukan kepercayaan diri
              melalui koleksi terbaik kami.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-white/5 rounded-full hover:bg-white/20 transition cursor-pointer"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/5 rounded-full hover:bg-white/20 transition cursor-pointer"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/5 rounded-full hover:bg-white/20 transition cursor-pointer"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 tracking-wide">
              Quick Link
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link
                  href="/#"
                  className="hover:text-white hover:pl-2 transition-all duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#hot-item"
                  className="hover:text-white hover:pl-2 transition-all duration-300"
                >
                  Hot Item
                </Link>
              </li>
              <li>
                <Link
                  href="/#collection"
                  className="hover:text-white hover:pl-2 transition-all duration-300"
                >
                  Collection
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="hover:text-white hover:pl-2 transition-all duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="hover:text-white hover:pl-2 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-lg font-semibold mb-6 tracking-wide">
              Information
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link
                  href="/kebijakan-privasi"
                  className="hover:text-white hover:pl-2 transition-all duration-300"
                >
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link
                  href="/kebijakan-pengembalian"
                  className="hover:text-white hover:pl-2 transition-all duration-300"
                >
                  Kebijakan Pengembalian
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-white hover:pl-2 transition-all duration-300"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold mb-6 tracking-wide">
              Contact Us
            </h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="p-2 bg-white/5 rounded group-hover:bg-white group-hover:text-black transition duration-300">
                  <MdMailOutline size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase text-gray-500 font-bold mb-1">
                    Email Us
                  </p>
                  <p className="text-sm text-gray-300">support@fashion.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="p-2 bg-white/5 rounded group-hover:bg-white group-hover:text-black transition duration-300">
                  <FaPhone size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase text-gray-500 font-bold mb-1">
                    Call Us
                  </p>
                  <p className="text-sm text-gray-300">+62 812-3456-7890</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-gray-500">
          <p>© 2025 Fashion Official. All Rights Reserved</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="cursor-pointer hover:text-white">Terms</span>
            <span className="cursor-pointer hover:text-white">Privacy</span>
            <span className="cursor-pointer hover:text-white">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
