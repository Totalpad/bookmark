import { useEffect, useState } from "react";
import LogoSvg from "../assets/logo-bookmark.svg";
import LogoSvgWhite from "../assets/logo-bookmark-footer.svg";

function MenuSection() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleBodyScroll = () => {
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    };

    handleBodyScroll();
    return () => {
      // Cleanup: Remove the event listener when the component unmounts
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav className=" container relative mx-auto p-6">
      <div className="my-6 flex items-center justify-between space-x-20">
        <img
          src={isOpen ? LogoSvgWhite : LogoSvg}
          alt="Logo"
          id="logo"
          className="z-40"
        />

        {/* menu items  */}
        <div className="hidden items-center space-x-10 uppercase text-grayishBlue md:flex ">
          <a
            href="#features"
            className=" tracking-widest duration-100 hover:text-softRed"
          >
            Features
          </a>
          <a
            href="#download"
            className=" tracking-widest duration-100 hover:text-softRed"
          >
            Download
          </a>
          <a
            href="#faq"
            className=" tracking-widest duration-100 hover:text-softRed"
          >
            FAQ
          </a>

          <a
            href="#"
            className=" rounded-lg border-2 border-softRed bg-softRed p-2  px-8 text-white shadow-md transition-all duration-100 hover:bg-white hover:text-softRed active:scale-95 active:bg-red-200"
          >
            Login
          </a>
        </div>
        {/* Hamburger button  */}
        <button
          className={`${isOpen ? "open" : ""} hamburger z-40 block focus:outline-none md:hidden`}
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <span className="top"></span>
          <span className="middle"></span>
          <span className="bottom"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="menu"
        className={`${isOpen ? "flex" : "hidden"} fixed  inset-0 z-20 flex h-full min-h-dvh w-full flex-col items-center divide-y divide-gray-500 self-end bg-veryDarkBlue/80 px-6 py-1 pb-4 pt-24 uppercase tracking-widest text-white backdrop-blur-sm`}
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <div className="w-full py-3 text-center">
          <a href="#features" className="hover:text-softRed">
            Features
          </a>
        </div>
        <div className="w-full py-3 text-center">
          <a href="#download" className="hover:text-softRed">
            Download
          </a>
        </div>
        <div className="w-full py-3 text-center">
          <a href="#faq" className="hover:text-softRed">
            FAQ
          </a>
        </div>
        <div className="w-full py-3 text-center">
          <a href="#" className="hover:text-softRed">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}

export default MenuSection;
