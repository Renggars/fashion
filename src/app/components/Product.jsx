import Image from "next/image";
import { FaAngleRight, FaArrowRight } from "react-icons/fa6";

export default function Product({ title, products = [], isHotItem }) {
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
        <button className="hidden md:flex bg-zinc-900 text-white px-8 py-3 rounded-full items-center gap-2 hover:bg-orange-600 transition-all duration-300 shadow-lg">
          Explore More <FaAngleRight />
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((item, idx) => (
          <div key={item.id || idx} className="group flex flex-col h-full">
            {/* Image Container */}
            <div className="relative aspect-4/5 overflow-hidden bg-gray-100 rounded-2xl">
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

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-white text-black px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Quick View
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="mt-6 flex flex-col grow">
              <div className="flex justify-between items-start mb-2">
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                  {item.category.name}
                </p>
                <span className="text-xl font-bold text-gray-900">
                  ${item.price.toFixed(2)}
                </span>
              </div>

              <h4 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-1">
                {item.title}
              </h4>

              <p className="mt-2 text-gray-600 text-sm line-clamp-2 grow">
                {item.description}
              </p>

              <button className="mt-4 flex items-center gap-2 text-sm font-bold uppercase tracking-widest group-hover:gap-4 transition-all duration-300 text-zinc-900">
                Shop Now <FaArrowRight className="text-orange-500" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Button */}
      <button className="md:hidden w-full mt-10 bg-zinc-900 text-white px-8 py-4 rounded-xl flex justify-center items-center gap-2">
        Explore More <FaAngleRight />
      </button>
    </section>
  );
}
