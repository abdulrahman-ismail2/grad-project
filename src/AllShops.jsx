import Footer from "./compoents/Footer";
import NavBar from "./compoents/NavBar";
import ShopItem from "./compoents/ShopItem";
import { Link } from "react-router-dom";
import img from "./assets/shop.avif";

const AllShops = () => {
  const shops = [
    {
      name: "DeltaMarket",
      phoneNumber: "01010953643",
      email: "Delta@gmail.com",
      country: "Egypt",
      city: "shebeen",
      street: "Dobai",
      pictureUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA_6maYFtuS5dLnm0O8jFNWsbY7pFGYpEl9w&s",
      supermarketQuantities: null,
      reviews: null,
      id: 2,
    },
    {
      name: "Al-Jilani",
      phoneNumber: "01098650013",
      email: "Al-Jilani@gmail.com",
      country: "Egypt",
      city: "shebeen",
      street: "Paris",
      pictureUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtqhWOetBrIYZOaHXlD8Mf2ERj3ctn_ifNYg&s",
      supermarketQuantities: null,
      reviews: null,
      id: 3,
    },
    {
      name: "Al-Othaim",
      phoneNumber: "01024313868",
      email: "Al-Othaim@gmail.com",
      country: "Egypt",
      city: "shebeen",
      street: "Elgalaa",
      pictureUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUoEYKDtDy1OgAzj8SKMfR06PFcHJIu6WmSw&s",
      supermarketQuantities: null,
      reviews: null,
      id: 4,
    },
    {
      name: "Marketo",
      phoneNumber: "01015941137",
      email: "Marketo@gmail.com",
      country: "Egypt",
      city: "shebeen",
      street: "Sabri Abu Alam",
      pictureUrl: "https://photos.prnewswire.com/prnfull/20070917/AQM011LOGO",
      supermarketQuantities: null,
      reviews: null,
      id: 5,
    },
    {
      name: "BIM",
      phoneNumber: "01010982745",
      email: "Bim@gmail.com",
      country: " Gamal Abdel Nasser",
      city: "Shebeen",
      street: "Egypt",
      pictureUrl:
        "https://images.deliveryhero.io/image/talabat/restaurants/BIM_Logo_Official_2019_pa638077560090885855.jpg?",
      supermarketQuantities: null,
      reviews: null,
      id: 6,
    },
    {
      name: "Beit El Gomla",
      phoneNumber: "012206785972",
      email: "BeitElGomla@gmail.com",
      country: "Egypt",
      city: "shebeen",
      street: " Gamal Abdel Nasser",
      pictureUrl:
        "https://images.deliveryhero.io/image/talabat/restaurants/logo_637604043236765794.jpg?",
      supermarketQuantities: null,
      reviews: null,
      id: 7,
    },
  ];
  return (
    <>
      <NavBar />
      <div className="shops">
        <div className="container">
          <div className="shops-header">
            <h2 className="section-head">our shops</h2>
          </div>
          <div className="items">
            {shops.map((item) => (
              <Link to="/ShopDetails">
                <div className="shop-item" key={item.id}>
                  <div className="shop-img-test">
                    <img src={item.pictureUrl} alt="" />
                  </div>
                  <div className="shop-text">
                    <h3 className="shop-name">{item.name}</h3>
                    <div className="address">
                      <span>{item.city}</span>
                      <span>{item.street}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllShops;

{
  /* <div className="shop-item" key={item.id}>
                <div className="shop-img-test">
                  <img src={item.pictureUrl} alt="" />
                </div>
                <div className="shop-text">
                  <h3 className="shop-name">{item.name}</h3>
                  <div className="address">
                    <span>{item.city}</span>
                    <span>{item.street}</span>
                  </div>
                </div>
              </div> */
}
