import { motion } from "framer-motion";
import { useState } from "react";
import { coffee, IProducts } from "../../utils/interface/products";
import MenuItem from "./MenuItem";

const MenuList = () => {
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

  const coffeeList = coffee;
  const [active, setActive] = useState(0);
  const [image, setImage] = useState("");
  const handleChosenProduct = (id: number, img: string) => {
    if (id !== active) {
      setActive(id);
      setImage(img);
    } else {
      setActive(0);
      setImage("");
    }
  };

  return (
    <motion.div
      transition={{ staggerChildren: 0.4 }}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 1 }}
      className="flex flex-col justify-between gap-4 font-lato w-full relative"
    >
      {image ? (
        <img
          onClick={() => {
            setImage("");
            setActive(0);
          }}
          src={image}
          alt="Product Image"
          className={
            image
              ? "absolute w-44 h-44 top-0 right-[20%] rounded-lg shadow-xl transition-all"
              : "hidden"
          }
        />
      ) : (
        <></>
      )}
      <motion.div
        variants={textAnimation}
        className="flex items-center justify-between"
      >
        <h1 className="uppercase text-chocolate text-opacity-70 text-sm">
          {coffeeList.title}
        </h1>
        <h1 className="uppercase text-chocolate text-opacity-70 text-sm">
          Price
        </h1>
      </motion.div>
      {coffeeList.products.map((product: IProducts, indx: number) => {
        return (
          <motion.button
            variants={textAnimation}
            key={indx}
            onClick={() => handleChosenProduct(product.id, product.img)}
          >
            <MenuItem key={indx} product={product} active={active} />
          </motion.button>
        );
      })}
    </motion.div>
  );
};

export default MenuList;
