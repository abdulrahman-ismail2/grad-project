import React from "react";
import productImg from "./assets/asset 13.jpeg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const ProductIn = () => {
  return (
    <div className="productin">
      <div className="container">
        <div className="product">
          <div className="card-img">
            <Splide
              aria-label="My Favorite Images"
              options={{
                rewind: true,
                type: "loop",
                autoplay: true,
                pauseOnHover: true,
              }}
            >
              <SplideSlide>
                <img src={productImg} alt="Image 1" />
              </SplideSlide>
              <SplideSlide>
                <img src={productImg} alt="Image 1" />
              </SplideSlide>
              <SplideSlide>
                <img src={productImg} alt="Image 1" />
              </SplideSlide>
              <SplideSlide>
                <img src={productImg} alt="Image 1" />
              </SplideSlide>
            </Splide>
          </div>
          <div className="card-body">
            <div className="card-body-details">
              <h1 className="name">mozzarella cheese</h1>
              {/* <p className="product-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo illo beatae sit, ullam corrupti nihil culpa ex libero
                suscipit nam rerum enim odio voluptates neque eveniet ipsa esse
                dolor! Aliquam.
              </p> */}
              <p className="product-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo illo beatae sit, ullam corrupti nihil culpa ex libero
                suscipit nam rerum enim odio voluptates neque eveniet ipsa esse
                dolor! Aliquam.
              </p>
              <p className="product-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo illo beatae sit, ullam corrupti nihil culpa ex libero
                suscipit nam rerum enim odio voluptates neque eveniet ipsa esse
                dolor! Aliquam.
              </p>
              <div className="quan">
                <span>quantity</span>
                <span>1</span>
              </div>
              <div className="quan">
                <span>Price</span>
                <span>300$</span>
              </div>
              <div className="addtocartbtn">
                <span>add to cart</span>
              </div>
              <div className="prodcut-faq">
                <div className="q1 quan">
                  <span>ingredients</span>
                  <span>+</span>
                </div>
                <div className="q1 quan">
                  <span>benifets</span>
                  <span>+</span>
                </div>
                <div className="q1 quan">
                  <span>how to use</span>
                  <span>+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductIn;
