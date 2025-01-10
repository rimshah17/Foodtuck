import Image from 'next/image';
// components/HeroSection.js
export default function HeroSection() {
    return (
      <section className=" mainBanner relative bg-black text-white py-12 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="flex-1 text-center md:text-left">
            <p className="text-2xl	subTitle-banner font-light mb-2 familytwo">
              It's Quick & Amusing!
            </p>
            <h1 className="xl:text-5xl md:text-4xl font-bold mb-4 leading-tight sm:text-3xl">
            <span className="mainColor">Th</span>e Art of speed food
              Quality
            </h1>
            <p className="text-gray-300 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
                pharetra dictum neque massa congue.
            </p>
            <a href='#' className="homeBtn text-white px-10 py-3 rounded-full  transition">See Menu</a>
          </div>
          <div className="flex-1 relative mt-10 md:mt-0">
            <div className="relative z-10">
              <Image  src="/img/home/banner-left.png" alt="Delicious Food" className=" shadow-lg mx-auto" />
            </div>
          </div>
        </div>
      </section>
    );
  }
  