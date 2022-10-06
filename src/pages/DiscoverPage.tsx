import { motion } from "framer-motion";

const DiscoverPage = () => {
  const textAnimation = {
    offscreen: {
      opacity: 0,
      x: 400,
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, type: "spring" },
    },
  };

  const textAnimation2 = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: { duration: 3, type: "spring" },
    },
  };

  return (
    <motion.div
      transition={{ staggerChildren: 0.4 }}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.4 }}
      className="flex flex-col sm:h-screen font-lato"
    >
      <section className="py-14 px-12 ">
        <motion.h1 variants={textAnimation} className="text-3xl sm:text-5xl">
          BEHIND EACH OF OUR CUPS HIDES AN AMAZING SURPRISE
        </motion.h1>
      </section>
      <section className="flex flex-col sm:flex-row items-center justify-between h-full text-chocolate text-opacity-80 relative">
        <div className="absolute bg-black inset-0 opacity-50"></div>
        <div className="flex-1 h-full flex flex-col p-12 justify-between bg-offer-image bg-no-repeat bg-center bg-cover">
          <motion.h1
            variants={textAnimation2}
            className="z-10 text-4xl py-12 flex-1"
          >
            SPECIALTY COFFEE ASSORTMENTS
          </motion.h1>
          <div className="z-10 flex justify-end ">
            <motion.button
              variants={textAnimation2}
              className="flex items-center justify-between bg-transparent border text-chocolate border-chocolate rounded-full px-4 py-2 gap-2 hover:border-white hover:text-white"
            >
              <p className="text-sm">To offer</p>
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
        </div>
        <div className="flex-1 h-full flex flex-col p-12 justify-between bg-discover-image bg-no-repeat bg-center bg-cover">
          <motion.p
            variants={textAnimation2}
            className="absolute bg-deep-orange px-2 rounded-full text-xs shadow-md uppercase"
          >
            Services
          </motion.p>
          <motion.h1
            variants={textAnimation2}
            className="z-10 text-4xl py-12 flex-1"
          >
            BARISTA PRO & INDIVIDUAL TRAINING
          </motion.h1>
          <div className="z-10 flex justify-end ">
            <motion.button
              variants={textAnimation2}
              className="flex items-center justify-between bg-transparent border text-chocolate border-chocolate rounded-full px-4 py-2 gap-2 hover:border-white hover:text-white"
            >
              <p className="text-sm">Discover</p>
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
        </div>
      </section>
    </motion.div>
  );
};

export default DiscoverPage;
