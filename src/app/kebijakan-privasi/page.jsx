export default function PrivacyPolicyPage() {
  return (
    <section className="min-h-screen px-6 md:px-20 pt-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl text-center font-bold mb-6">
          Kebijakan Privasi
        </h1>

        <p className="text-gray-600 mb-10">
          Kami menghargai privasi Anda dan berkomitmen untuk melindungi data
          pribadi pelanggan kami.
        </p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <Section
            title="1. Informasi yang Kami Kumpulkan"
            desc="Kami mengumpulkan informasi pribadi seperti nama, alamat email,
            nomor telepon, dan alamat pengiriman saat Anda melakukan transaksi
            atau menghubungi kami."
          />

          <Section
            title="2. Penggunaan Informasi"
            desc="Data digunakan untuk memproses pesanan, meningkatkan layanan,
            mengirimkan informasi promo, serta memberikan pengalaman belanja
            terbaik."
          />

          <Section
            title="3. Keamanan Data"
            desc="Kami menggunakan sistem keamanan yang sesuai standar industri
            untuk melindungi data Anda dari akses tidak sah."
          />

          <Section
            title="4. Perubahan Kebijakan"
            desc="Kebijakan privasi ini dapat diperbarui sewaktu-waktu. Perubahan
            akan ditampilkan di halaman ini."
          />
        </div>
      </div>
    </section>
  );
}

function Section({ title, desc }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p>{desc}</p>
    </div>
  );
}
