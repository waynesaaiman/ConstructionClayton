const testimonials = [
  {
    name: "Sipho M.",
    review:
      "Clayton Construction exceeded our expectations. Professional, reliable, and always focused on quality and safety.",
  },
  {
    name: "Thandi N.",
    review:
      "The team delivered our project on time and within budget. Highly recommended for any construction needs!",
  },
  {
    name: "Johan V.",
    review:
      "Excellent workmanship and great communication throughout. We felt confident every step of the way.",
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-blue-800">Client Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-white shadow-lg rounded p-6 flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-blue-800">{t.name[0]}</span>
            </div>
            <p className="text-gray-700 text-center mb-2">"{t.review}"</p>
            <span className="font-semibold text-blue-800">{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
