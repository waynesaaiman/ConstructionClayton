const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      quote: "Clayton Construction did an amazing job on our new home. The quality of their work is outstanding.",
      rating: 5,
    },
    {
      name: "Jane Smith",
      quote: "We are so happy with our new kitchen. The team was professional and efficient.",
      rating: 5,
    },
    {
      name: "Peter Jones",
      quote: "I would highly recommend Clayton Construction to anyone looking for a reliable and trustworthy contractor.",
      rating: 5,
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">&quot;{testimonial.quote}&quot;</p>
              <p className="text-xl font-bold">{testimonial.name}</p>
              <div className="flex justify-center mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
