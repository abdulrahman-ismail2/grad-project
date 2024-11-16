import icondairy from "./assets/categoriy-icons/asset 5.jpeg";
import bread from "./assets/categoriy-icons/asset 7.jpeg";
import vegetables from "./assets/categoriy-icons/asset 6.jpeg";
import grainfood from "./assets/categoriy-icons/asset 26.jpeg";
import meat from "./assets/categoriy-icons/asset 24.jpeg";
import drinks from "./assets/categoriy-icons/asset 13.jpeg";
import cleaners from "./assets/categoriy-icons/asset 20.jpeg";
import CategoryItem from "./compoents/CategoryItem";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="category">
      <div className="container">
        <div className="category-header">
          <h2 className="section-head">our categories</h2>
          <Link to="/Categories">all the categories</Link>
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
          <CategoryItem title="cleaners" name="cleaners" icon={cleaners} />
        </div>
      </div>
    </div>
  );
};

export default Category;

// .1.2 2- Mangoes.
// 1.1.3 3- Water Melon.
// 1.1.4 4- Melon.
// 1.1.5 5- Grapes.
