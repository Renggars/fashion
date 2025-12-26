"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { section } from "motion/react-client";

const slides = [
  {
    id: 1,
    title: "GAYA BARU",
    title2: "ANDA BARU",
    description: "Discover collections that complete your fashion lifestyle.",
    image: "/hero-fashion-2.png",
  },
  {
    id: 2,
    title: "KOLEKSI",
    title2: "TERBARU",
    description: "Find your best look for every occasion.",
    image: "/hero-fashion-1.png",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="px-16 pt-20">
      <div className="relative w-full h-130 bg-[#efefef] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <div className="container mx-auto h-full grid grid-cols-2 px-10">
              {/* LEFT TEXT */}
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-6xl font-extrabold leading-tight text-gray-800 ">
                  {slides[index].title}
                  <br />
                  {slides[index].title2}
                </h1>

                <p className="mt-6 text-gray-600 ">
                  {slides[index].description}
                </p>
              </div>

              <div className="relative w-full h-full flex items-center justify-end pr-10">
                <div className="relative w-full h-full">
                  <Image
                    src={slides[index].image}
                    alt="Hero Image"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* NAVIGATION */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white w-12 h-12 rounded-full shadow flex items-center justify-center cursor-pointer"
        >
          <FaAngleLeft className="text-2xl" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white w-12 h-12  rounded-full shadow flex items-center justify-center cursor-pointer"
        >
          <FaAngleRight className="text-2xl" />
        </button>
      </div>
    </section>
  );
}
