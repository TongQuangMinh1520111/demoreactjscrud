import React, { useEffect, useState } from "react";
import ProductModule from "../../modules/products.module";
import ProductItem from "./ProductItem";

const ListProduct = ({ product }) => {
  const [listProducts, setListProducts] = useState([]);
  useEffect(() => {
    const getAllProduct = async () => {
      let allProduct = await ProductModule.getAllProduct();
      if (allProduct) {
        setListProducts(allProduct.data);
      }
    };
    getAllProduct();
  }, []);

  return (
    <>
      <ul className="list_product">
        {listProducts.map((item) => {
          return <ProductItem key={item._id} product={item} />;
        })}
      </ul>
    </>
  );
};

export default ListProduct;
