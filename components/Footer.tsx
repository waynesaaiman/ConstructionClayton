export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <div className="font-bold text-xl">Clayton Construction</div>
          <div className="text-sm">Serving South Africa with excellence</div>
        </div>
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="hover:text-blue-300">Facebook</a>
          <a href="#" className="hover:text-blue-300">LinkedIn</a>
          <a href="#" className="hover:text-blue-300">Instagram</a>
        </div>
        <div className="text-xs text-gray-300">© {new Date().getFullYear()} Clayton Construction. All rights reserved.</div>
      </div>
    </footer>
  );
}
