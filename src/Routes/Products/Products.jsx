import products from "../../fake_api/FakeApi";
import "./Products.css";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/cart/CartAction";
// import NewsProducts from "./News/NewsProducts";

function Products() {
  const dispatch = useDispatch();

  const handleAddToCart = (productId) => {
    dispatch(addProductToCart(productId));
  };
  return (
    <>
      {/* <NewsProducts></NewsProducts> */}
      <div className="line">
        <h2 className="product-title">S A L E</h2>
        <div className="line"></div>
      </div>

      <div className="products">
        {products.map((product, index) => {
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
                <p className="price">€{product.price}</p>
                <button
                  className="shopping-cart"
                  onClick={() => handleAddToCart(product)}
                >
                  Shop
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Products;
