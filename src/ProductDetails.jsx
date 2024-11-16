import React from "react";
import NavBar from "./compoents/NavBar";
import ProductIn from "./ProductIn";
import Footer from "./compoents/Footer";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  let prodId = useParams()
  return (
    <>
      <NavBar />
      <ProductIn />
      <Footer />
    </>
  );
};

export default ProductDetails;
