import Image from "next/image";
import Link from "next/link";
import { FaAngleRight, FaArrowRight } from "react-icons/fa6";

export default function Product({ title, products = [], isHotItem }) {
  const phone = "6287797861593";
  const USD_TO_IDR = 16500;

  const formatIDR = (value) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);

  return (
    <section
      className="py-16 px-6 md:px-16 scroll-mt-20 bg-white"
      id={isHotItem ? "hot-item" : "collection"}
    >
      {/* Header Section */}
      <div className="flex justify-between items-end mb-12">
        <div>
          <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">
            {isHotItem ? "Trending Now" : "Our Collection"}
          </span>
          <h3 className="text-4xl font-semibold mt-2 text-gray-900">{title}</h3>
        </div>
        <Link
          href={isHotItem ? "/hot-item" : "/collection"}
          className="hidden md:flex bg-zinc-900 text-white px-8 py-3 rounded-full items-center gap-2 hover:bg-orange-600 transition-all duration-300 shadow-lg"
        >
          Explore More <FaAngleRight />
        </Link>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((item, idx) => {
          const message = encodeURIComponent(
            `Halo Fashion,\n\n` +
              `Saya tertarik dengan produk berikut:\n` +
              `Nama: ${item.title}\n` +
              `Harga: ${formatIDR(item.price * USD_TO_IDR)}\n\n` +
              `Apakah masih tersedia?`
          );

          return (
            <div key={item.id || idx} className="group flex flex-col h-full">
              {/* Image Container */}
              <div className="relative aspect-6/5 overflow-hidden bg-gray-100 rounded-2xl">
                {/* Badges */}
                <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                  {isHotItem && (
                    <span className="bg-orange-500 text-white text-[10px] px-3 py-1 rounded-full uppercase font-bold tracking-tighter">
                      Hot Item
                    </span>
                  )}
                  {item.price < 15 && (
                    <span className="bg-zinc-900 text-white text-[10px] px-3 py-1 rounded-full uppercase italic font-bold">
                      Best Value
                    </span>
                  )}
                </div>

                {/* Product Image */}
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <Link
                  href={`/product/${item.id}`}
                  className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                >
                  <div className="bg-white text-black px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Details
                  </div>
                </Link>
              </div>

              {/* Product Info */}
              <div className="mt-6 flex flex-col grow">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                    {item.category.name}
                  </p>
                  <span className="text-xl font-bold text-gray-900">
                    {formatIDR(item.price * USD_TO_IDR)}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-1">
                  {item.title}
                </h4>

                <p className="mt-2 text-gray-600 text-sm line-clamp-2 grow">
                  {item.description}
                </p>

                <div className="mt-auto pt-6">
                  <a
                    href={`https://wa.me/${phone}?text=${message}`}
                    target="_blank"
                    className="flex items-center justify-center gap-3 w-full bg-zinc-900 text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-orange-600 hover:shadow-lg transition-all duration-300 group/btn"
                  >
                    Order via WhatsApp
                    <FaArrowRight className="text-orange-500 group-hover/btn:translate-x-1 group-hover/btn:text-white transition-all duration-300" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Button */}
      <button className="md:hidden w-full mt-10 bg-zinc-900 text-white px-8 py-4 rounded-xl flex justify-center items-center gap-2">
        Explore More <FaAngleRight />
      </button>
    </section>
  );
}
