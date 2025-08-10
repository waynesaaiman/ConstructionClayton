import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 px-4">
        <h1 className="text-4xl font-bold mb-6 text-blue-800">Contact Us</h1>
        <div className="max-w-xl mx-auto bg-white shadow rounded p-6">
          <p className="mb-4">For inquiries, quotes, or more information, please reach out:</p>
          <ul className="mb-4">
            <li><strong>Email:</strong> info@claytonconstruction.co.za</li>
            <li><strong>Phone:</strong> +27 12 345 6789</li>
            <li><strong>Address:</strong> 123 Main Road, Johannesburg, South Africa</li>
          </ul>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-600 hover:text-blue-800">Facebook</a>
            <a href="#" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
            <a href="#" className="text-blue-600 hover:text-blue-800">Instagram</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
