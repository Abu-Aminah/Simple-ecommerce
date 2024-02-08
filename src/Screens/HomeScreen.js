import React from "react";
import products from "../Data";
import "./HomeScreen.css";
import ProductCard from "../Components/ProductCard";

const HomeScreen = () => {
  return (
    <div className="product__wrapper">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default HomeScreen;
