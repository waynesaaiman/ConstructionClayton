"use client";
import { useState } from "react";

const images = [
  { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80", alt: "Residential Project" },
  { src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80", alt: "Commercial Project" },
  { src: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&q=80", alt: "Infrastructure Project" },
];

export default function Gallery() {
  const [modalImg, setModalImg] = useState<string | null>(null);
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-blue-800">Project Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((img) => (
          <div key={img.src} className="relative group cursor-pointer" onClick={() => setModalImg(img.src)}>
            <img src={img.src} alt={img.alt} className="rounded shadow-lg w-full h-56 object-cover group-hover:scale-105 transition-transform duration-200" />
            <div className="absolute inset-0 bg-blue-900 bg-opacity-0 group-hover:bg-opacity-30 transition" />
          </div>
        ))}
      </div>
      {modalImg && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={() => setModalImg(null)}>
          <img src={modalImg} alt="Zoomed" className="max-w-2xl max-h-[80vh] rounded shadow-2xl" />
        </div>
      )}
    </section>
  );
}
