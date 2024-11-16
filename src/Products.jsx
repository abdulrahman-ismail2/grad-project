import productsData from './data/data.json';

const ProductsTest = () => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then(data => setData(data));
  const { products } = productsData;
  // });
  return (
    <div className="products-content">
      <div className="container">
        <div className="products-header">
          <h2 className="section-head">lastest products</h2>
        </div>
        <div className="products">
          {products.map((item) => (
            <div className="product" key={item.id}>
              <img src={item.img} alt="Product"  loading="lazy"/>
              <p title={item.name}>{item.name}</p>
              <p>{item.desc}</p>
              <div className="product-details">
                <span className="weight">1 kg</span>
                {/* <span>{item.rating.rate}</span> */}
                <span className="price">{item.price}$</span>
              </div>
              <div className="add-product">
                <span>add to cart</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsTest;
