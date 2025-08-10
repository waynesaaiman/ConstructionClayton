export default function Hero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center bg-blue-800 text-white mb-12">
  <img src="https://images.unsplash.com/photo-1503389152951-9c3d0e6b8a17?auto=format&fit=crop&w=1200&q=80" alt="Clayton Construction Hero" className="absolute inset-0 w-full h-full object-cover opacity-40" />
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Building South Africa’s Future</h1>
        <p className="text-xl mb-6 font-medium">Expertise. Reliability. Quality. Safety. Satisfaction.</p>
        <a href="/quote-estimator" className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded shadow-lg transition">Get an Instant Quote</a>
      </div>
    </section>
  );
}
