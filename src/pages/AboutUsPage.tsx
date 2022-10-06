import { motion } from "framer-motion";
import cafe from "../assets/aboutus.jpg";

const AboutUsPage = () => {
  const imgAnimation = {
    offscreen: {
      opacity: 0,
      x: -200,
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, type: "tween" },
    },
  };

  const textAnimation = {
    offscreen: {
      opacity: 0,
      x: 200,
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, type: "spring" },
    },
  };

  return (
    <motion.div
      transition={{ staggerChildren: 0.4 }}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.4 }}
      className="flex flex-col md:flex-row gap-4 items-center justify-between md:h-screen font-lato sm:p-14 md:p-20 text-chocolate"
    >
      <motion.img
        variants={imgAnimation}
        src={cafe}
        alt="Cafe Place"
        className="h-80 w-full sm:h-1/2 sm:w-1/2 md:h-[60%] md:w-[60%] lg:h-full lg:w-full bg-red-600 "
      />
      <div className="flex gap-4 lg:gap-8 flex-col md:pl-16 lg:pl-24 px-12 sm:px-0 pb-12 sm:pb-0">
        <motion.h1
          variants={textAnimation}
          className="text-2xl md:text-3xl xl:text-5xl"
        >
          ABOUT <br />
          CAFECHAA
        </motion.h1>
        <motion.p
          variants={textAnimation}
          className="text-sm sm:text-base text-justify lg:text-left"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
          aperiam voluptates placeat. Quo rerum, vitae nostrum tempore nulla
          fugiat. Magni a voluptatum beatae numquam at quidem aspernatur, odit,
          ullam quibusdam deserunt amet error eum enim dolore facere qui minus
          dolor ipsum iste dolores exercitationem, quas corporis voluptatibus!
          Ratione, veniam sunt.
        </motion.p>
        <motion.div variants={textAnimation} className="block">
          <button className="flex items-center justify-between bg-transparent border text-chocolate border-chocolate rounded-full px-4 py-2 gap-2 hover:border-white hover:text-white">
            <p className="text-sm">Learn more</p>
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
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutUsPage;
