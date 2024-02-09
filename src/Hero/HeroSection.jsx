import hero from "../assets/illustration-hero.svg";
function HeroSection() {
  return (
    <section id="hero">
      <div className="container mx-auto flex flex-col-reverse p-6 lg:mb-0 lg:flex-row">
        {/* content */}
        <div className="flex flex-col  gap-10  lg:mt-16 lg:w-1/2">
          <h1 className="text-center text-3xl font-semibold lg:text-left lg:text-6xl">
            A Simple Bookmark Manager
          </h1>
          <p className=" mx-auto max-w-md text-center text-lg text-gray-400 lg:mx-0  lg:text-left lg:text-2xl">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>

          {/* buttons container  */}
          <div className="flex w-full items-center justify-center gap-4 lg:justify-start">
            <button className="rounded border-2 border-softBlue bg-softBlue  p-4 text-sm font-semibold text-white shadow-md duration-100 hover:bg-white hover:text-softBlue active:scale-95 active:bg-blue-100 md:text-base">
              Get It On Chrome
            </button>
            <button className="rounded border-2 border-gray-300 bg-gray-300 p-4 text-sm font-semibold text-black shadow-md duration-100 hover:bg-white hover:text-gray-600 active:scale-95 active:bg-gray-100 md:text-base">
              Get It On Firefox
            </button>
          </div>
        </div>

        {/* image */}
        <div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
          <div className="bg-hero"></div>
          <img
            src={hero}
            alt="icon image"
            className="relative z-10 overflow-x-visible lg:top-24 xl:top-0"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
