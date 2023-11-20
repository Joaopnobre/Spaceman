import { useDispatch, useSelector } from "react-redux";
import "./CartItemsStyles.css";
import Modal from "react-modal";
import {
  increaseProductQuantity,
  decreaseProductQuantity,
  removeProductFromCart,
} from "../../redux/cart/CartAction";
import { selectProductsTotalPrice } from "../../redux/cart/cartSelectors";

const CartItem = ({ isOpen, onRequestClose }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);
  const productsTotalPrice = useSelector(selectProductsTotalPrice);

  const handleRemoveClick = (productId) => {
    dispatch(removeProductFromCart(productId));
  };
  const handleIncreaseClick = (productId) => {
    dispatch(increaseProductQuantity(productId));
  };
  const handleDecreaseClick = (productId) => {
    dispatch(decreaseProductQuantity(productId));
  };

  return (
    <>
      <Modal
        className="cart-items"
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Cart Items"
      >
        <h2 className="bag">My Bag</h2>
        <div className="cart-line"></div>
        <div className="products-cart">
          {products.map((product) => {
            return (
              <>
                <div key={product.id}>
                  <div className="cart-items-info">
                    <img
                      className="product-cart-img"
                      src={product.image}
                      alt={product.name}
                    />
                    <div className="product-cart-info">
                      <h4 className="cart-title">{product.title}</h4>
                      <p className="price">€{product.price}</p>
                      <div className="cart-buttons">
                        <button
                          className="cart-button"
                          onClick={() => handleIncreaseClick(product.id)}
                        >
                          +
                        </button>

                        <p>{product.quantity}</p>

                        <button
                          className="cart-button"
                          onClick={() => handleDecreaseClick(product.id)}
                        >
                          -
                        </button>
                      </div>
                    </div>
                    <div
                      className="remove-cart-item"
                      onClick={() => handleRemoveClick(product.id)}
                    >
                      Remove
                    </div>
                  </div>
                  <div className="cart-line"></div>
                </div>
              </>
            );
          })}
        </div>
        <div className="cart-price">
          <h4>Total:€{productsTotalPrice}</h4>
          <button className="cart-close" onClick={onRequestClose}>
            Close
          </button>
        </div>
      </Modal>
    </>
  );
};

export default CartItem;
