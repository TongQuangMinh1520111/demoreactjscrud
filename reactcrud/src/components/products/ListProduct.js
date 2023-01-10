import React, { useEffect, useState } from "react";
import ProductModule from "../../modules/products.module";

const ListProduct = () => {
  const [listProducts, setListProducts] = useState([]);
  useEffect(() => {
    const getAllProduct = async () => {
      let allProduct = await ProductModule.getAllProduct();
      if(allProduct) {
        setListProducts(allProduct.data);
    }
  };
  getAllProduct();
  },[]);
console.log(listProducts)
  return <>
  <ul className="list_product">
    {
      listProducts.map(item => {
        return <li className="items" key={item._id}>
          <figure><img src={"http://localhost:5000/images/pants1.jpg"} alt={item.name}/></figure>
        </li>
      })
    }
  </ul>
  </>;
};

export default ListProduct;
