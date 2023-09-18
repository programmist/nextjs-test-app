"use client";
import React from "react";

const AddToCart = () => {
  return (
    <>
      <button
        onClick={() => console.log("hello")}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add To Cart
      </button>
      <div className="line-through decoration-red-700 text-sky-900">
        Quick brown fox
      </div>
    </>
  );
};

export default AddToCart;
