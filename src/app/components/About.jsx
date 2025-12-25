import Image from "next/image";

export default function About() {
  return (
    <section className="px-6 md:px-12 py-16 bg-white scroll-mt-20" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT CONTENT */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 flex flex-col justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-orange-500 mb-4">
              How It Started
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
              Our Dream is <br /> Modern Fashion
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Founded with a vision to redefine everyday fashion, our brand
              blends modern design with premium comfort. We create clothing that
              empowers confidence, individuality, and effortless style.
              <br />
              <br />
              Each collection is crafted with attention to detail, ethical
              production, and high-quality fabrics to fit your daily lifestyle.
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-6">
          {/* IMAGE */}
          <div className="relative rounded-3xl overflow-hidden h-75 md:h-85">
            <Image
              src="/about.jpg"
              alt="Fashion Team"
              fill
              className="object-cover"
            />
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-6">
            <StatCard value="5+" label="Years Experience" />
            <StatCard value="120+" label="Collections" />
            <StatCard value="1.5K+" label="Happy Customers" />
            <StatCard value="98%" label="Positive Reviews" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* COMPONENT STAT */
function StatCard({ value, label }) {
  return (
    <div className="bg-gray-50 rounded-2xl p-6">
      <h3 className="text-3xl font-bold text-gray-900 mb-1">{value}</h3>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  );
}
