import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Store } from "../../context/Store";
import ProductModule from "../../modules/products.module";
const ProductDetail = () => {
  const [listProduct, setListProduct] = useState([]);
  useEffect(() => {
    const getAllProduct = async () => {
      let allProduct = await ProductModule.getAllProduct();
      if (allProduct) {
        setListProduct(allProduct.data);
      }
    };
    getAllProduct();
  }, []);

  const productSlug = useParams();
  const product = listProduct.find((prod) => prod.slug === productSlug.slug);

  const { state, dispatch } = useContext(Store);
  const addToCartHandler = async () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      return toast.error("Sorry. Product is out of stock");
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    window.location.href = "/cart";
  };
  return (
    <>
      {product ? (
        <div className="product_details">
          <div className="">
            <Link href="/">back to products</Link>
          </div>
          <div className="">
            <div className="">
              <img
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
              />
            </div>
            <div>
              <ul>
                <li>
                  <h1 className="">{product.name}</h1>
                </li>
                <li>Category: {product.category}</li>
                <li>Brand: {product.brand}</li>
                <li>
                  {product.rating} of {product.numReviews} reviews
                </li>
                <li>Description: {product.description}</li>
              </ul>
            </div>
            <div>
              <div className="">
                <div className="">
                  <div>Price</div>
                  <div>${product.price}</div>
                </div>
                <div className="">
                  <div>Status</div>
                  <div>
                    {product.countInStock > 0 ? "In stock" : "Unavailable"}
                  </div>
                </div>
                <button className="" onClick={addToCartHandler}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>...loading</p>
      )}
    </>
    //dua du lieu len context

    // <div className="product_details">
    //   <div className="">
    //     <Link href="/">back to products</Link>
    //   </div>
    //   <div className="">
    //     <div className="">
    //       {/* <Image
    //         src={product.image}
    //         alt={product.name}
    //         width={640}
    //         height={640}
    //         layout="responsive"
    //       ></Image> */}
    //     </div>
    //     <div>
    //       <ul>
    //         <li>
    //           <h1 className="">{product.name}</h1>
    //         </li>
    //         <li>Category: {product.category}</li>
    //         <li>Brand: {product.brand}</li>
    //         <li>
    //           {product.rating} of {product.numReviews} reviews
    //         </li>
    //         <li>Description: {product.description}</li>
    //       </ul>
    //     </div>
    //     <div>
    //       <div className="">
    //         <div className="">
    //           <div>Price</div>
    //           <div>${product.price}</div>
    //         </div>
    //         <div className="">
    //           <div>Status</div>
    //           <div>{product.countInStock > 0 ? "In stock" : "Unavailable"}</div>
    //         </div>
    //         <button className="primary-button w-full" >
    //           Add to cart
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProductDetail;
