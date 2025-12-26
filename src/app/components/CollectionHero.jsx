export default function CollectionHero() {
  return (
    <section className="w-full min-h-[70vh] bg-[#efefe9] flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-widest mb-6">
          Fashion
        </h1>

        <p className="text-lg text-gray-600 mb-4">Discount up to</p>

        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-7xl md:text-8xl font-bold">20</span>
          <span className="text-4xl font-bold -mt-6">%</span>
          <span className="text-3xl font-semibold ml-2">OFF</span>
        </div>

        <p className="text-gray-700 text-lg">All Items</p>
      </div>
    </section>
  );
}
