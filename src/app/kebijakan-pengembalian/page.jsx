export default function ReturnPolicyPage() {
  return (
    <section className="min-h-screen px-6 md:px-20 pt-32">
      <div className="max-w-4xl mx-auto ">
        <h1 className="text-4xl md:text-5xl text-center font-bold mb-6">
          Kebijakan Pengembalian
        </h1>

        <p className="text-gray-600 mb-10">
          Kami ingin memastikan Anda puas dengan setiap produk yang Anda beli.
        </p>

        <ul className="space-y-6 text-gray-700">
          <Item
            title="1. Waktu Pengembalian"
            desc="Pengembalian dapat dilakukan maksimal 7 hari setelah barang diterima."
          />
          <Item
            title="2. Kondisi Produk"
            desc="Produk harus dalam kondisi baru, belum dipakai, dan masih memiliki label."
          />
          <Item
            title="3. Proses Pengiriman"
            desc="Biaya pengiriman pengembalian ditanggung oleh pelanggan kecuali produk cacat."
          />
          <Item
            title="4. Pengembalian Dana"
            desc="Refund akan diproses dalam 3–5 hari kerja setelah barang kami terima."
          />
        </ul>
      </div>
    </section>
  );
}

function Item({ title, desc }) {
  return (
    <li>
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p>{desc}</p>
    </li>
  );
}
