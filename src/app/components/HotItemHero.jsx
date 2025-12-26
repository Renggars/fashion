import Image from "next/image";

export default function HotItemHero() {
  return (
    <section className="relative w-full min-h-[80vh] bg-[#efefe9] overflow-hidden">
      <div className="container mx-auto px-6 h-full flex flex-col lg:flex-row items-center justify-between gap-12 py-20">
        {/* TEXT */}
        <div className="max-w-xl z-10">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Fashion
          </h1>

          <p className="text-lg italic text-gray-600 mb-6">
            Confidence, Convenience, Inspiring
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Oslo Short Sleeve
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8">
            Your fashion lifestyle - everyday, everytime, everywhere. Designed
            for modern men who value comfort and confidence.
          </p>

          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">
            Explore Collection
          </button>
        </div>

        {/* IMAGE */}
        <div className="relative w-full lg:w-[45%] h-105 md:h-130">
          <Image
            src="/hero-fashion-2.png"
            alt="Zeya Hot Item"
            fill
            priority
            className="object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
