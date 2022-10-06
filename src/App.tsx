import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AboutUsPage from "./pages/AboutUsPage";
import DiscoverPage from "./pages/DiscoverPage";
import HeroPage from "./pages/HeroPage";
import MenuPage from "./pages/MenuPage";
import "./styles/hero.css";
import { NAV_ENUM } from "./utils/enums/nav.enums";

export default function App() {
  const [open, setOpen] = useState(false);
  const hero = useRef(null);
  const about = useRef(null);
  const menu = useRef(null);
  const discover = useRef(null);
  const location = useLocation();
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToSection = (elementRef: any) => {
    setLastScrollY(elementRef.current.offsetTop);
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const handleScroll = (nav: string) => {
    switch (nav) {
      case NAV_ENUM.ABOUT_US:
        scrollToSection(about);
        break;
      case NAV_ENUM.MENU:
        scrollToSection(menu);
        break;
      case NAV_ENUM.DISCOVER:
        scrollToSection(discover);
        break;
      default:
        scrollToSection(hero);
        break;
    }
  };

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      handleScroll(location.pathname);
    }, 500);
  }, [location]);

  return (
    <div className="relative">
      {!open ? <Navbar setOpen={setOpen} /> : <></>}
      <Sidebar open={open} setOpen={setOpen} />
      <div ref={hero} className="hero-image h-screen relative">
        <div className="px-12 mx-auto pt-28">
          <HeroPage />
        </div>
        <div className="absolute inset-x-0 h-[1px] bottom-0 bg-white bg-opacity-50"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1"
          stroke="currentColor"
          className="w-12 h-12 sm:w-16 sm:h-16 absolute -bottom-6 sm:-bottom-8 right-5 sm:right-10 text-chocolate text-opacity-50 cursor-pointer"
        >
          <path
            fill="#131313"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      <div ref={about} className="sm:px-12 mx-auto bg-mocha overflow-hidden">
        <AboutUsPage />
      </div>

      <div ref={menu} className="sm:px-12 mx-auto bg-deep-orange overflow-hidden">
        <MenuPage />
      </div>

      <div ref={discover} className="mx-auto bg-espresso overflow-hidden">
        <DiscoverPage />
      </div>
      <Footer />
    </div>
  );
}
