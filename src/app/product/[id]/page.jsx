import Image from "next/image";
import Link from "next/link";
import {
  FaWhatsapp,
  FaChevronLeft,
  FaStar,
  FaShieldAlt,
  FaTruck,
} from "react-icons/fa";
import { getProductById } from "@/app/services/product.service"; // Sesuaikan path-nya
import ImageGallery from "@/app/components/ImageGallery";

export default async function ProductDetailPage({ params }) {
  const { id } = await params;

  const product = await getProductById(id);

  if (!product)
    return <div className="p-20 text-center">Produk tidak ditemukan</div>;

  const USD_TO_IDR = 16500;
  const phone = "6287797861593";
  const formatIDR = (v) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(v);
  const priceIDR = product.price * USD_TO_IDR;

  const whatsappMessage = encodeURIComponent(
    `Halo Admin Zeya,\n\nSaya tertarik dengan produk:\n*${
      product.title
    }*\nHarga: ${formatIDR(priceIDR)}\n\nApakah stok masih tersedia?`
  );

  return (
    <main className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-500 hover:text-black mb-6"
        >
          <FaChevronLeft size={12} />{" "}
          <span className="text-sm font-medium">Back to Home</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ImageGallery images={product.images} title={product.title} />

          {/* Info */}
          <div className="flex flex-col">
            <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">
              {product.category.name}
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
              {product.title}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-extrabold text-gray-900">
                {formatIDR(priceIDR)}
              </span>
              <span className="text-lg text-gray-400 line-through">
                {formatIDR(priceIDR * 1.2)}
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8 italic border-l-4 border-orange-500 pl-4">
              {product.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl">
                <FaTruck className="text-orange-500" /> Fast Delivery
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl">
                <FaShieldAlt className="text-orange-500" /> Original Product
              </div>
            </div>

            <a
              href={`https://wa.me/${phone}?text=${whatsappMessage}`}
              target="_blank"
              className="w-full bg-zinc-900 text-white flex items-center justify-center gap-3 py-5 rounded-2xl font-bold hover:bg-orange-600 transition-all shadow-xl"
            >
              <FaWhatsapp size={20} /> ORDER VIA WHATSAPP
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
