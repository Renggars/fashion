import { ChevronUp } from "lucide-react";
import { getProducts } from "../services/product.service";
import CollectionHero from "../components/CollectionHero";
import Product from "../components/Product";

export default async function CollectionPage() {
  const allData = await getProducts();

  // sama persis seperti di Home
  const collection = allData.slice(3, 9);

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* HERO */}
      <CollectionHero />

      {/* COLLECTION PRODUCT */}
      <section className="py-16">
        <Product title="Fashion Collection" products={collection} />
      </section>

      <a
        href="#"
        className="fixed bottom-6 right-4 bg-[#444] text-white p-3 rounded-full hover:bg-black transition z-50"
      >
        <ChevronUp className="w-5 h-5" />
      </a>
    </main>
  );
}
