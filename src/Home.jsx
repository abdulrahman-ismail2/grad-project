import Category from "./Category";
import Products from "./Products";
import SearchBar from "./SearchBar";
import Shops from "./Shops";
import Footer from "./compoents/Footer";
import NavBar from "./compoents/NavBar";
import Ads from "./compoents/Ads";
import Slider from "./compoents/Slider";
import { useState, useEffect } from "react";
import Loader from "./compoents/Loader";
import ProductText from "./compoents/ProductText";
import ShopsTest from "./ShopsTest";
  
const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <NavBar />
      <SearchBar shopName="bisku" />
      <Slider />
      <Ads />
      <Category />
      {/* <Shops /> */}
      <ShopsTest />
      {/* <Products /> */}
      <ProductText />
      <Footer />
    </div>
  );
};

export default Home;
