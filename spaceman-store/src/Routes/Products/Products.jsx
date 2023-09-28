import { StoreItems } from "../../fake_api/FakeApi";
import "./Products.css";
import { News } from "../../fake_api/News";
function Products() {
  return (
    <>
      <h2>N E W S</h2>
      <div className="news">
      {News.map((news, id) => {
        return (
          <div key={id}>
            <img className="news-img" src={news.img} alt={news.name} />
          </div>
        );
      })}
      </div>

      <h2>S A L E</h2>
      <div className="products">
        {StoreItems.map((product, index) => {
          return (
            <div key={index}>
              <h2 className="title">{product.name}</h2>
              <img
                className="product-img"
                src={product.image}
                alt={product.name}
              />
              <div className="product-info">
                <p>{product.price}</p>
                <button className="shopping-cart">Shop</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Products;
