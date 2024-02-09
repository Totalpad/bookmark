function NewsSection() {
  return (
    <section id="news" className=" bg-softBlue">
      <div className="mx-auto max-w-lg py-24">
        <p className="mb-6 text-center text-lg uppercase tracking-widest text-white">
          35,000+ Already Joined
        </p>
        <h2 className="mb-6 px-3 text-center text-3xl font-semibold text-white md:text-4xl">
          Stay up-to-date with what we're doing
        </h2>

        {/* input */}
        <div className="flex flex-col justify-center gap-4 px-3 md:flex-row">
          <input
            type="text"
            className="flex-1 rounded-lg px-5 py-3 outline-none"
            placeholder="Enter your email address"
          />
          <button className=" rounded-lg border-2 border-softRed bg-softRed p-3  px-8 text-white shadow-md transition-all duration-100 hover:bg-white hover:text-softRed active:scale-95 active:bg-red-200">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
