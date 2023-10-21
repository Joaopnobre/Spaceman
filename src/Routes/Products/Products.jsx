import { StoreItems } from "../../fake_api/FakeApi";
import "./Products.css";
import { News } from "../../fake_api/News";

function Products() {
  return (
    <>
      <div className="line">
        <h2 className="product-title">N E W S</h2>

        <div className="line"></div>
      </div>

      <div className="news">
        {News.map((news, id) => {
          return (
            <div key={id}>
              <img className="news-img" src={news.img} alt={news.name} />
            </div>
          );
        })}
      </div>
      <div className="line">
        <h2 className="product-title">S A L E</h2>
        <div className="line"></div>
      </div>

      <div className="products">
        {StoreItems.map((product, index) => {
          return (
            <div key={index}>
              <div className="margin">
                <h4 className="title">{product.title}</h4>
              </div>
              <img
                className="product-img"
                src={product.image}
                alt={product.name}
              />
              <div className="product-info">
                <p className="price">{product.price}</p>
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
