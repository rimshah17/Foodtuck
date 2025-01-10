// components/Testimonials.js
export default function Testimonials() {
    return (
      <section className="bg-black text-white py-16 relative">
        <div className="container mx-auto text-left">
        <p className="text-left subTitle-bannerfont-light familytwo mb-2 xl:text-3xl md:text-2xl mainColor">Testimonials</p>
            <h2 className="text-left  lg:text-4xl md:text-3xl sm:text-3xl font-bold mb-4 leading-tight">
            What our client are saying
            </h2>

          <div className="mt-10 flex flex-col items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl relative">
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
          <img
            src="/img/home/client.png" // Replace with your actual image
            alt="Client"
            className="w-24 h-24 rounded-full object-cover border-4 border-yellow-500"
          />
        </div>
        <p className="mt-8 text-black italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          diam pellentesque bibendum non dui volutpat fringilla bibendum.
          Urna, elit augue urna, vitae feugiat pretium donec id elementum.
          Ultrices mattis sed vitae mus risus.
        </p>
        <div className="flex items-center justify-center mt-6">
          <span className="starFill text-3xl">★</span>
          <span className="starFill text-3xl">★</span>
          <span className="starFill text-3xl">★</span>
          <span className="starFill text-3xl">★</span>
          <span className="text-gray-500 text-3xl">☆</span>
        </div>
        <h4 className="mt-4 font-bold text-lg text-center text-gray-700">Alamin Hasan</h4>
        <p className="text-gray-400 text-center">Food Specialist</p>
      </div>
    </div>

    <div className="flex justify-center mt-6">
      <div className="h-2 w-2 rounded-full bg-yellow-500 mx-1"></div>
      <div className="h-2 w-2 rounded-full bg-gray-500 mx-1"></div>
      <div className="h-2 w-2 rounded-full bg-gray-500 mx-1"></div>
    </div>
  </div>
</section>
); }

