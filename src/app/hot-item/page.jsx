import { ChevronUp } from "lucide-react";

import HotItemHero from "../components/HotItemHero";
import Product from "../components/Product";
import { getProducts } from "../services/product.service";

export default async function HotItemPage() {
  const hotData = await getProducts();
  const hotItems = hotData.slice(0, 3);

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* HERO */}
      <HotItemHero />

      {/* HOT ITEM PRODUCT */}
      <section className="pb-16">
        <Product title="Fashion Hot Item" products={hotItems} isHotItem />
      </section>

      {/* SCROLL TO TOP */}
      <a
        href="#"
        className="fixed bottom-6 right-4 bg-[#444] text-white p-3 rounded-full hover:bg-black transition z-50"
      >
        <ChevronUp className="w-5 h-5" />
      </a>
    </main>
  );
}
