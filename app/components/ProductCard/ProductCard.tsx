import React from "react";
import AddToCart from "../AddToCart";

const ProductCard = () => {
  return (
    <div className="p-5 my-5 bg-emerald-200 text-white text-xl hover:bg-emerald-600">
      <AddToCart />
    </div>
  );
};

export default ProductCard;
