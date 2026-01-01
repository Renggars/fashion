import Hero from "./components/Hero";
import { ChevronUp } from "lucide-react";
import Product from "./components/Product";
import About from "./components/About";
import Contact from "./components/Contact";
import { getHotItems, getProducts } from "./services/product.service";

export default async function Home() {
  const [allData, hotData] = await Promise.all([getProducts(), getHotItems()]);

  const hotItems = allData.slice(0, 3);
  const collection = allData.slice(3, 9);

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Hero />

      <Product title="See Our Hot Item" products={hotItems} isHotItem />

      <Product title="See Our Collection" products={collection} />

      <About />

      <Contact />

      <a
        href="#"
        className="fixed bottom-6 right-2 bg-[#444] text-white p-3 rounded-full hover:bg-black transition z-50"
      >
        <ChevronUp className="w-5 h-5" />
      </a>
    </main>
  );
}
