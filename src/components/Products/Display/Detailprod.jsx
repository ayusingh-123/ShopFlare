import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import "./detail.scss";
import { useParams } from "react-router-dom";
const Detailprod = ({ data }) => {
  const [number, setNuber] = useState(0);
  const { id } = useParams();
  console.log(id);
  console.log(data[id - 1]);
  const product = data[id - 1];

  if (!product) {
    return <div>Product not found.</div>;
  }

  const increment = () => {
    setNuber(number + 1);
  };
  const decrement = () => {
    if (number > 1) {
      setNuber(number - 1);
    }
  };
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={product.image} />
          </div>
          <div className="right">
            <span className="name">{product.name}</span>
            <span className="price">&#8377;{product.price}</span>
            <span className="desc">{product.description}</span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{number}</span>
                <span onClick={increment}>+</span>
              </div>
              <button className="add-to-cart-button">
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>

            <span className="divider" />
            <div className="info-item">
              {/* <span className="text-bold">
                Category:{" "}
                <span>{product.categories.data[0].attributes.title}</span>
              </span> */}
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        {/* <RelatedProducts
                    productId={id}
                    categoryId={product.categories.data[0].id}
                /> */}
      </div>
    </div>
  );
};

export default Detailprod;
