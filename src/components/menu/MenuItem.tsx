import React from "react";
import { IProducts } from "../../utils/interface/products";

interface IMenuProps {
  product: IProducts;
  active: number;
}

const MenuItem: React.FC<IMenuProps> = (props) => {
  const { product, active } = props;
  const { id, img, price, title } = product;
  return (
    <div
      className={
        active !== id
          ? "flex justify-between items-center p-2 border-b-[0.5px] border-chocolate border-opacity-80 my-2 group hover:border-opacity-95"
          : "flex justify-between items-center p-2 border-b-[0.5px] border-chocolate border-opacity-50 my-2"
      }
    >
      <h1
        className={
          active !== id
            ? "text-lg text-chocolate text-opacity-80 group-hover:text-opacity-95"
            : "text-lg text-chocolate text-opacity-50"
        }
      >
        {title}
      </h1>
      <p
        className={
          active !== id
            ? "text-chocolate text-opacity-80 group-hover:text-opacity-95"
            : "text-chocolate text-opacity-50"
        }
      >
        {price}
      </p>
    </div>
  );
};

export default MenuItem;
