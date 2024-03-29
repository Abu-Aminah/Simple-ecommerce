import React, { useContext } from "react";
import "./ProductCard.css";
import CartContext from "../context/cart/CartContext";
import Rating from "./Rating";
// import formatCurrency from 'format-currency'

const ProductCard = ({ product }) => {
  const {addToCart} = useContext(CartContext)
  // let opts = {format: "%s%v", Symbol: "$"}
  return (
    <div className="productCard__wrapper">
      <div>
        <img className="productCard__img" src={product.image} />
        <h4>{product.name}</h4>
        <div className="productCard__price">
          {" "}
          <h5>${product.price}</h5>
          {/* <h5>{formatCurrency(`${product.price}`,opts)}</h5> */}
        </div>
        <div className="ProductCard__Rateing">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </div>
        <button className="ProductCard__button" onClick={() =>addToCart(product)}>Add to basket</button>
      </div>
    </div>
  );
};

export default ProductCard;
