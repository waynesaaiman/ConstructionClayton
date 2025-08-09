const ContactPage = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600 mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-600 mb-2">Subject</label>
              <input type="text" id="subject" name="subject" className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-600 mb-2">Message</label>
              <textarea id="message" name="message" rows={5} className="w-full px-4 py-2 border rounded-lg"></textarea>
            </div>
            <button type="submit" className="bg-yellow-500 text-white px-8 py-3 rounded-full font-bold hover:bg-yellow-600">Submit</button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="text-gray-600 mb-4">123 Main Street, Anytown, USA 12345</p>
          <p className="text-gray-600 mb-4">Phone: (123) 456-7890</p>
          <p className="text-gray-600">Email: contact@claytonconstruction.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
