import { motion } from "framer-motion";
import MenuList from "../components/menu/MenuList";

const MenuPage = () => {
  const textAnimation = {
    offscreen: {
      opacity: 0,
      x: -100,
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, type: "spring" },
    },
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between h-screen font-lato p-12 sm:p-14 md:p-20 text-chocolate">
      <motion.div
        transition={{ staggerChildren: 0.4 }}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.4 }}
        className="flex flex-col justify-start w-full md:w-[40%] gap-4 h-full md:pt-20"
      >
        <motion.h1 variants={textAnimation} className="text-3xl sm:text-5xl">
          OUR MENU
        </motion.h1>
        <div className="block">
          <motion.button
            variants={textAnimation}
            className="flex justify-between items-center sm:w-[40%] md:w-[55%] bg-transparent border border-chocolate rounded-full py-1 px-4"
          >
            <p>See more</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </motion.button>
        </div>
      </motion.div>
      <div className="flex flex-1 pt-10 md:pt-20 h-full w-full md:w-auto ">
        <MenuList />
      </div>
    </div>
  );
};

export default MenuPage;
