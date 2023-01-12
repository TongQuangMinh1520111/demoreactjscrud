import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <li className="items" key={product._id}>
      <Link to={`/products/${product.slug}`}>
        <figure>
          <img src={product.image} alt={product.name} />
        </figure>
        <h3>{product.name}</h3>
        <p className="brand">{product.brand}</p>
        <p className="price">${product.price}</p>
        <button className="primary-button" type="button" onClick="">
          Add to cart
        </button>
      </Link>
    </li>
  );
};

export default ProductItem;
