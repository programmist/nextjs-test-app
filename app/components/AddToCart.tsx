"use client";
import React from "react";

const AddToCart = () => {
  return (
    <>
      <button onClick={() => console.log("hello")} className="btn btn-primary">
        Add To Cart
      </button>
      <div className="line-through decoration-red-700 text-sky-900">
        Quick brown fox
      </div>
    </>
  );
};

export default AddToCart;
