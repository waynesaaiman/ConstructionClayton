import QuoteEstimator from "@/components/QuoteEstimator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function QuoteEstimatorPage() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 px-4">
        <h1 className="text-4xl font-bold mb-6 text-blue-800">Instant Quote Estimator</h1>
        <QuoteEstimator />
      </main>
      <Footer />
    </div>
  );
}
