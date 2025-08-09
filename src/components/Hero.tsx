import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://videos.pexels.com/video-files/3843431/3843-hd.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
        <h1 className="text-5xl font-bold mb-4">Building Your Dreams</h1>
        <p className="text-xl mb-8">Your trusted partner in construction</p>
        <Link href="/contact" className="bg-yellow-500 text-white px-8 py-3 rounded-full font-bold hover:bg-yellow-600">
          Request a Quote
        </Link>
      </div>
    </div>
  );
};

export default Hero;
