import { motion } from "framer-motion";

const HeroPage = () => {
  const heroAnimation = {
    offscreen: {
      opacity: 0,
      y: -100,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { duration: 2, type: "spring", bounce: 0.5},
    },
  };
  const heroAnimation2 = {
    offscreen: {
      opacity: 0,
      x: -100,
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: { duration: 2, type: "spring", bounce: 0.5},
    },
  };

  return (
    <motion.div
      transition={{ staggerChildren: 0.4, delayChildren: 1.2 }}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 1 }}
      id="hero"
      className="flex flex-col items-center font-lato w-full overflow-hidden"
    >
      <motion.h1
        variants={heroAnimation}
        className="text-white z-10 text-4xl w-full md:w-[65%] lg:w-1/2 mt-24 sm:mt-36 lg:mt-44 font-normal"
      >
        DISCOVER THE TASTE <br /> REAL OF COFFEES WITH <br /> CAFE CHAA
      </motion.h1>
      <motion.div
        variants={heroAnimation2}
        className="mt-40 sm:mt-60 md:mt-44 xl:mt-56 w-full z-10"
      >
        <p className="text-xs sm:text-base text-chocolate text-opacity-75 w-full md:w-1/2 xl:w-1/4 text-left font-light">
          We make the best natural coffee. Came from the highlands of bukidnon.
          Cooked with accurate heat to produce the best beans. Authentic and
          pure.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default HeroPage;
