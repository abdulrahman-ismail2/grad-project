import NavBar from "./compoents/NavBar";
import SearchBar from "./SearchBar";
import img from "./assets/shop.avif"
import icondairy from "./assets/categoriy-icons/asset 5.jpeg";
import bread from "./assets/categoriy-icons/asset 7.jpeg";
import vegetables from "./assets/categoriy-icons/asset 6.jpeg";
import grainfood from "./assets/categoriy-icons/asset 26.jpeg";
import meat from "./assets/categoriy-icons/asset 24.jpeg";
import drinks from "./assets/categoriy-icons/asset 13.jpeg";
import cleaners from "./assets/categoriy-icons/asset 20.jpeg";
import Products from "./Products"
import CategoryItem from "./compoents/CategoryItem";
import Product from "./compoents/Product";
import Footer from "./compoents/Footer";
import ProductText from "./compoents/ProductText";

const ShopDetails = (props) => {
  return (
    <>
      <NavBar />
      <div className="shop-landing">
        <div className="container">
          <div className="shop-img">
            <img src={img} alt="" />
          </div>
          <div className="shop-text">
            <SearchBar shopName="shop number 1" />
            <div className="category">
              <div className="category-header">
                <h2 className="section-head">categories</h2>
              </div>
              <div className="category-content">
                <CategoryItem title="bread" name="bread" icon={bread} />
                <CategoryItem
                  title="chicken , meat and sea food "
                  name="meat"
                  icon={meat}
                />
                <CategoryItem
                  title="beans , pasta, breakfast , cereals , rice"
                  name="grainfood"
                  icon={grainfood}
                />
                <CategoryItem
                  title="milk, cheese, yogurt"
                  name="dairy"
                  icon={icondairy}
                />
                <CategoryItem
                  title="Fresh Tomato , Potato , Mangoes , Water Melon , Melon , .... "
                  name="vegetables and fruits"
                  icon={vegetables}
                />
                <CategoryItem
                  title="Tea , Coffee , Cold Drinks , ...."
                  name="drinks"
                  icon={drinks}
                />
                <CategoryItem
                  title="cleaners"
                  name="cleaners"
                  icon={cleaners}
                />
              </div>
            </div>
          </div>
          <div className="section-head">
            <h2>browse our Products</h2>
          </div>
          <div className="products">
            <Product />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ShopDetails;
