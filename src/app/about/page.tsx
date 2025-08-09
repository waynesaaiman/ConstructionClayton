import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Clayton Construction was founded in 2010 by Clayton Khojane with a vision to provide top-notch construction services to clients in the region. Over the years, we have grown into a reputable company known for our commitment to quality, safety, and customer satisfaction.
          </p>
          <p className="text-gray-600">
            Our team of experienced professionals is dedicated to delivering projects on time and within budget. We take pride in our work and strive to exceed our clients&apos; expectations on every project.
          </p>
        </div>
        <div className="text-center">
          <Image
            src="https://ui-avatars.com/api/?name=Clayton+Khojane&size=256"
            alt="Clayton Khojane, CEO of Clayton Construction"
            width={256}
            height={256}
            className="rounded-full mx-auto"
          />
          <h3 className="text-xl font-bold mt-4">Clayton Khojane</h3>
          <p className="text-gray-600">CEO & Founder</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
