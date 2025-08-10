export default function Projects() {
  return (
    <main className="min-h-screen py-16 px-4 bg-gray-50 text-gray-900">
      <h1 className="text-4xl font-bold mb-6 text-blue-800">Our Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow rounded p-4">
          <img src="/gallery/project1.jpg" alt="Residential Project" className="rounded mb-2 w-full h-48 object-cover" />
          <h2 className="text-xl font-semibold">Residential Excellence</h2>
        </div>
        <div className="bg-white shadow rounded p-4">
          <img src="/gallery/project2.jpg" alt="Commercial Project" className="rounded mb-2 w-full h-48 object-cover" />
          <h2 className="text-xl font-semibold">Commercial Innovation</h2>
        </div>
        <div className="bg-white shadow rounded p-4">
          <img src="/gallery/project3.jpg" alt="Infrastructure Project" className="rounded mb-2 w-full h-48 object-cover" />
          <h2 className="text-xl font-semibold">Infrastructure Impact</h2>
        </div>
      </div>
    </main>
  );
}
