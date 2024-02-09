import chrome from "../assets/logo-chrome.svg";
import firefox from "../assets/logo-firefox.svg";
import opera from "../assets/logo-opera.svg";

function DownloadSection() {
  return (
    <section id="download">
      <div className="container mx-auto px-6">
        <h2 className="mb-6 text-center text-3xl font-semibold md:text-4xl">
          Download the extension
        </h2>
        <p className=" mx-auto max-w-lg  text-center text-grayishBlue">
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>
      </div>

      <div className="py-32">
        {/* boxes container */}
        <div className="relative mx-auto flex max-w-5xl flex-col items-center space-y-10 px-10 md:flex-row md:space-x-7 md:space-y-0 md:px-6">
          {/* Box 1 chorme */}
          <div className="flex w-full flex-col space-y-4 rounded-lg py-6 text-center shadow-lg md:w-1/3">
            {/* Image */}
            <div className="flex justify-center">
              <img src={chrome} alt="chrome logo" />
            </div>
            <h5 className="pt-6 text-xl font-bold">Add to Chrome</h5>
            <p className=" text-grayishBlue">Minimum Version 62</p>
            <div className="border-b-4 border-dotted" />
            <button className=" mx-5 rounded border-2 border-softBlue bg-softBlue  p-3 px-4 text-sm font-semibold text-white shadow-md duration-100 hover:bg-white hover:text-softBlue active:scale-95 active:bg-blue-100 md:text-base">
              Add & Install Extentison
            </button>
          </div>

          {/* box 2  */}

          <div className="flex w-full flex-col space-y-4 rounded-lg py-6 text-center shadow-lg md:mt-8 md:w-1/3">
            {/* Image */}
            <div className="flex justify-center">
              <img src={firefox} alt="opera logo" />
            </div>
            <h5 className="pt-6 text-xl font-bold">Add to Firefox</h5>
            <p className=" text-grayishBlue">Minimum Version 55</p>
            <div className="border-b-4 border-dotted" />
            <button className=" mx-5 rounded border-2 border-softBlue bg-softBlue  p-3 px-4 text-sm font-semibold text-white shadow-md duration-100 hover:bg-white hover:text-softBlue active:scale-95 active:bg-blue-100 md:text-base">
              Add & Install Extentison
            </button>
          </div>
          {/* box 3  */}

          <div className="flex w-full flex-col space-y-4 rounded-lg py-6 text-center shadow-lg md:mt-8 md:w-1/3">
            {/* Image */}
            <div className="flex justify-center">
              <img src={opera} alt="opera logo" />
            </div>
            <h5 className="pt-6 text-xl font-bold">Add to Opera</h5>
            <p className=" text-grayishBlue">Minimum Version 46</p>
            <div className="border-b-4 border-dotted" />
            <button className=" mx-5 rounded border-2 border-softBlue bg-softBlue  p-3 px-4 text-sm font-semibold text-white shadow-md duration-100 hover:bg-white hover:text-softBlue active:scale-95 active:bg-blue-100 md:text-base">
              Add & Install Extentison
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DownloadSection;
