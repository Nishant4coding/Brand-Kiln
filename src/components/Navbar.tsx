import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { navigation } from "../constants";
import { HamburgerMenu } from "./ui/Header";
import MenuSvg from "./ui/MenuSvg";

const Navbar = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll event handler
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      const heroSectionHeight = heroSection ? heroSection.offsetHeight / 20 : 0;
      const scrollPosition = window.scrollY;

      if (scrollPosition > heroSectionHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      enablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <nav
      className={` snap-start top-0 xl:h-[10vh] left-0 w-full items-center justify-center z-50 transition-all duration-300 xl:py-0 py-3 shadow-[0_0_10px_0] border-b-[1px] border-custom-dark   
        ${openNavigation || scrolled ? "bg-gray-100" : "bg-gray-100"}`}
    >
      <div className="flex items-center w-[90vw] mx-auto">
        <Link
          className=" xl:mr-8 flex flex-row items-center gap-2 font-bold"
          to="/"
        >
          <img
            src="/public/logo.png"
            width={500}
            height={500}
            alt=""
            className="xl:w-[10vw] w-[30vw] invert"
          />
        </Link>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[4rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.url}
                onClick={handleClick}
                className={`group block relative z-10 text-2xl uppercase text-custom-dark transition-colors  ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-4 md:py-8 xl:py-6 lg:-mr-0.25 lg:text-[0.9rem] lg:font-bold font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
                <span className="block w-0 h-[1.5px] bg-custom-dark transition-all duration-300 group-hover:w-[70%]"></span>
              </Link>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <Link
          to={"/task"}
          className="hidden lg:flex p-2 px-6 text-[1rem] text-white font-bold uppercase bg-[#6d009a]   rounded-full"
        >
          Create Task
        </Link>

        <button className="ml-auto lg:hidden" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

function enablePageScroll() {
  throw new Error("Function not implemented.");
}
