"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Apakah produk original?",
    a: "Ya, semua produk kami dibuat dengan material premium dan quality control ketat.",
  },
  {
    q: "Berapa lama pengiriman?",
    a: "Pengiriman memakan waktu 2–5 hari kerja tergantung lokasi Anda.",
  },
  {
    q: "Apakah bisa tukar ukuran?",
    a: "Bisa, selama stok tersedia dan produk belum dipakai.",
  },
  {
    q: "Metode pembayaran apa saja yang tersedia?",
    a: "Kami menerima transfer bank, e-wallet, dan kartu kredit.",
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-white min-h-screen px-6 md:px-20 pt-32">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="border rounded-2xl p-6 cursor-pointer hover:shadow-sm transition"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg">{item.q}</h3>
                <span className="text-xl">{open === i ? "−" : "+"}</span>
              </div>

              {open === i && <p className="text-gray-600 mt-4">{item.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
