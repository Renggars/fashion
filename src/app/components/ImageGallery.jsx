"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ImageGallery({ images, title }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      {/* Gambar Utama */}
      <div className="relative aspect-3/3 overflow-hidden rounded-3xl bg-gray-100 shadow-sm border border-gray-50">
        <Image
          src={images[selectedImage]}
          alt={title}
          fill
          className="object-cover transition-all duration-500"
          priority
        />
        <div className="absolute top-4 left-4 bg-orange-500 text-white text-[10px] px-3 py-1 rounded-full font-bold">
          SALE!
        </div>
      </div>

      {/* Grid Thumbnail */}
      <div className="grid grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(idx)}
            className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${
              selectedImage === idx
                ? "border-orange-500 scale-95 shadow-md"
                : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={img}
              alt={`${title} thumb ${idx}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
