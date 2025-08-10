import { useState } from "react";

const images = [
  { src: "/gallery/project1.jpg", alt: "Residential Project" },
  { src: "/gallery/project2.jpg", alt: "Commercial Project" },
  { src: "/gallery/project3.jpg", alt: "Infrastructure Project" },
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
