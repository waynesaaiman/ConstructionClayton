export default function Services() {
  return (
    <main className="min-h-screen py-16 px-4 bg-gray-50 text-gray-900">
      <h1 className="text-4xl font-bold mb-6 text-blue-800">Our Services</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <li className="bg-white shadow rounded p-6">
          <h2 className="text-2xl font-semibold mb-2">Residential Construction</h2>
          <p>Custom homes, renovations, and extensions built to the highest standards.</p>
        </li>
        <li className="bg-white shadow rounded p-6">
          <h2 className="text-2xl font-semibold mb-2">Commercial Projects</h2>
          <p>Office buildings, retail spaces, and industrial facilities with a focus on quality and safety.</p>
        </li>
        <li className="bg-white shadow rounded p-6">
          <h2 className="text-2xl font-semibold mb-2">Infrastructure</h2>
          <p>Roads, bridges, and public works that support South Africa’s growth.</p>
        </li>
        <li className="bg-white shadow rounded p-6">
          <h2 className="text-2xl font-semibold mb-2">Project Management</h2>
          <p>End-to-end management for seamless, on-time, and on-budget delivery.</p>
        </li>
      </ul>
    </main>
  );
}
