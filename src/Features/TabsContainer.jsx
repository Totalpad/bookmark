import { useState } from "react";
import panel1 from "../assets/illustration-features-tab-1.svg";
import panel2 from "../assets/illustration-features-tab-2.svg";
import panel3 from "../assets/illustration-features-tab-3.svg";

function TabsContainer() {
  const [activeTab, setActiveTab] = useState("simple");

  return (
    <section id="tabs">
      <div className="container relative mx-auto my-6 mb-32 mt-12 px-6">
        <div className="bg-tabs"></div>
        {/* tabs container */}
        <div className="mx-auto mb-6 flex max-w-xl flex-col justify-center border-b md:flex-row md:space-x-10">
          {/* tab 1  */}
          <div
            className="flex cursor-pointer justify-center border-b text-center text-gray-600 duration-100 hover:text-softRed md:w-1/3 md:border-b-0"
            onClick={() => setActiveTab("simple")}
          >
            <div
              className={`${activeTab === "simple" && "border-b-4 border-softRed"} py-5`}
            >
              Simple Bookmarking
            </div>
          </div>

          {/* tab 2  */}
          <div
            className="flex cursor-pointer justify-center border-b text-center text-gray-600 duration-100 hover:text-softRed md:w-1/3 md:border-b-0"
            onClick={() => setActiveTab("speedy")}
          >
            <div
              className={`${activeTab === "speedy" && "border-b-4 border-softRed"} py-5`}
            >
              Speedy Searching
            </div>
          </div>

          {/* tab 3  */}
          <div
            className="flex cursor-pointer justify-center border-b text-center text-gray-600 duration-100 hover:text-softRed md:w-1/3 md:border-b-0"
            onClick={() => setActiveTab("easy")}
          >
            <div
              className={`${activeTab === "easy" && "border-b-4 border-softRed"} py-5`}
            >
              Easy Sharing
            </div>
          </div>
        </div>

        {/* Panels container */}
        <div id="panels">
          <div className="conainer mx-auto">
            {activeTab === "simple" && (
              <>
                {/* Panel 1 */}
                <div className="flex flex-col py-5 md:flex-row md:space-x-7">
                  {/* Image */}
                  <div className="flex justify-center md:w-1/2">
                    <img src={panel1} alt="panel1" className="relative z-10 " />
                  </div>

                  {/* text/button */}
                  <div className="flex flex-col space-y-8 md:w-1/2">
                    <h3 className="mt-32 text-center text-3xl font-semibold md:mt-0 md:text-left">
                      Bookmark in one click
                    </h3>
                    <p className=" max-w-md text-center text-grayishBlue md:text-left">
                      Organize your bookmarks however you like. Our simple
                      drag-and-drop interface gives you complete control over
                      how you manage your favourite sites.
                    </p>
                    <div className="flex justify-center md:justify-start">
                      <button className=" rounded border-2 border-softBlue bg-softBlue  p-2 px-4 text-sm font-semibold text-white shadow-md duration-100 hover:bg-white hover:text-softBlue active:scale-95 active:bg-blue-100 md:text-base">
                        More Info
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === "speedy" && (
              <>
                {/* Panel 2 */}
                <div className="flex flex-col py-5 md:flex-row md:space-x-7">
                  {/* Image */}
                  <div className="flex justify-center md:w-1/2">
                    <img src={panel2} alt="panel2" className="relative z-10 " />
                  </div>

                  {/* text/button */}
                  <div className="flex flex-col space-y-8 md:w-1/2">
                    <h3 className="mt-32 text-center text-3xl font-semibold md:mt-0 md:text-left">
                      Intelligent search
                    </h3>
                    <p className=" max-w-md text-center text-grayishBlue md:text-left">
                      Our powerful search feature will help you find saved sites
                      in no time at all. No need to trawl through all of your
                      bookmarks.
                    </p>
                    <div className="flex justify-center md:justify-start">
                      <button className=" rounded border-2 border-softBlue bg-softBlue  p-2 px-4 text-sm font-semibold text-white shadow-md duration-100 hover:bg-white hover:text-softBlue active:scale-95 active:bg-blue-100 md:text-base">
                        More Info
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === "easy" && (
              <>
                {/* Panel 3 */}
                <div className="flex flex-col py-5 md:flex-row md:space-x-7">
                  {/* Image */}
                  <div className="flex justify-center md:w-1/2">
                    <img src={panel3} alt="panel3" className="relative z-10 " />
                  </div>

                  {/* text/button */}
                  <div className="flex flex-col space-y-8 md:w-1/2">
                    <h3 className="mt-32 text-center text-3xl font-semibold md:mt-0 md:text-left">
                      Share your bookmarks
                    </h3>
                    <p className=" max-w-md text-center text-grayishBlue md:text-left">
                      Easily share your bookmarks and collections with others.
                      Create a shareable a link that you can send at the click
                      of a button.
                    </p>
                    <div className="flex justify-center md:justify-start">
                      <button className=" rounded border-2 border-softBlue bg-softBlue  p-2 px-4 text-sm font-semibold text-white shadow-md duration-100 hover:bg-white hover:text-softBlue active:scale-95 active:bg-blue-100 md:text-base">
                        More Info
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TabsContainer;
