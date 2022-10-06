import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../utils/constants/route";
import { INavigationProps, INavigations } from "../utils/interface/navigation";

interface INavbarProps {
  setOpen: Function;
}

const navAnimation = {
  offscreen: {
    opacity: 0,
    y: -10,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, type: "spring", bounce: 0.5 },
  },
};

const Navigations: React.FC<INavigationProps> = ({ navigation }) => {
  const { path, title } = navigation;
  return (
    <motion.li
      variants={navAnimation}
      className="hover:text-sb-green cursor-pointer"
    >
      <Link to={path}>{title}</Link>
    </motion.li>
  );
};

const Navbar: React.FC<INavbarProps> = (props) => {
  const style = {
    static:
      "fixed w-full bg-transparent inset-x-0 py-6 px-12 flex justify-between items-center font-lato text-white transition-all ease-in-out duration-200 translate-y-0 text-opacity-40 z-30",
    moving:
      "fixed w-full bg-mocha bg-opacity-90 inset-x-0 py-6 px-12 flex justify-between items-center font-lato text-white transition-all ease-in-out duration-200 translate-y-0 text-opacity-40 z-30",
    hidden:
      "fixed w-full bg-mocha bg-opacity-90 inset-x-0 py-6 px-12 flex justify-between items-center font-lato text-white transition-all ease-in-out duration-200 -translate-y-20 text-opacity-40 z-30",
  };
  const [styleProp, setStyleProp] = useState(style.static);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { setOpen } = props;

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY === 0) {
        setStyleProp(style.static);
      } else {
        if (window.scrollY > lastScrollY) {
          // if scroll down hide
          setStyleProp(style.hidden);
        } else {
          // show
          setStyleProp(style.moving);
        }
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <motion.nav
      transition={{ staggerChildren: 0.2 }}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 1 }}
      className={styleProp}
    >
      <ul className="hidden lg:flex flex-1 gap-8 font-bold">
        {/* splice to remove home in the routes */}
        {routes.map((route: INavigations, indx: number) => (
          <Navigations navigation={route} key={indx} />
        ))}
      </ul>
      {/* business logo here */}
      <motion.div variants={navAnimation} className="flex-1 flex items-center ">
        <Link to={"/"}>
          <h1 className="flex-1 flex items-center font-bold text-chocolate text-opacity-60 text-lg cursor-pointer">
            cafecha-{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                />
              </svg>
            </span>
          </h1>
        </Link>
      </motion.div>
      <motion.button variants={navAnimation} onClick={() => setOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 block lg:hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </motion.button>
      <ul className="hidden lg:flex gap-8 font-bold">
        <motion.li
          variants={navAnimation}
          className="hover:text-sb-green cursor-pointer"
        >
          <a
            href="http://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </motion.li>
        <motion.li
          variants={navAnimation}
          className="hover:text-sb-green cursor-pointer"
        >
          <a href="http://tiktok.com" target="_blank" rel="noopener noreferrer">
            Tiktok
          </a>
        </motion.li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
