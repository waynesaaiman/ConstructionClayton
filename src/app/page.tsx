
import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", // Construction site
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80", // Modern building
  "https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?auto=format&fit=crop&w=800&q=80", // Teamwork
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"  // Machinery
];

function Gallery() {
  const [zoomed, setZoomed] = useState<number | null>(null);
  return (
    <div className="grid grid-cols-2 gap-6 py-8">
      {galleryImages.map((src, i) => (
        <div key={i} className="relative group cursor-pointer" onClick={() => setZoomed(i)}>
          <Image src={src.replace('/public', '')} alt="Project" width={400} height={300} className="rounded-lg transition-transform duration-300 group-hover:scale-105" />
          {zoomed === i && (
            <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={() => setZoomed(null)}>
              <Image src={src.replace('/public', '')} alt="Zoomed" width={800} height={600} className="rounded-lg shadow-2xl" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function QuoteEstimator() {
  const [area, setArea] = useState(0);
  const [quote, setQuote] = useState<number | null>(null);
  const handleEstimate = () => setQuote(area * 1200);
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Instant Quote Estimator</h2>
      <input type="number" value={area} onChange={e => setArea(Number(e.target.value))} placeholder="Enter area (m²)" className="border p-2 rounded w-full mb-4" />
      <button onClick={handleEstimate} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Estimate</button>
      {quote !== null && <div className="mt-4 text-lg">Estimated Cost: <span className="font-bold">R{quote.toLocaleString()}</span></div>}
    </div>
  );
}

function Testimonials() {
  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <p className="italic">"Clayton Construction exceeded our expectations!"</p>
          <span className="block mt-4 font-bold">- Sarah M.</span>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <p className="italic">"Professional, reliable, and top quality workmanship."</p>
          <span className="block mt-4 font-bold">- John D.</span>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <p className="italic">"Highly recommend for any building project!"</p>
          <span className="block mt-4 font-bold">- Lisa R.</span>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen">
      <section className="py-16 text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-blue-900">Clayton Construction</h1>
        <p className="text-xl text-gray-700 mb-8">Building South Africa's future with quality, innovation, and trust.</p>
        <a href="#quote" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">Get an Instant Quote</a>
      </section>
      <Gallery />
      <section id="quote">
        <QuoteEstimator />
      </section>
      <Testimonials />
    </main>
  );
}
