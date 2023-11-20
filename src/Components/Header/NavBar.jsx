import { Link } from "react-router-dom";
import { MenuItems } from "../MenuItems";
import "./NavBar.css";
import SignupModal from "../Login/LoginModal";
import { GiSchoolBag } from "react-icons/gi";
import { useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import { selectProductsCount } from "../../redux/cart/cartSelectors";


function NavBar() {
  // const { products } = useSelector((rootReducer) => rootReducer.cartReducer);
  const productsCount = useSelector(selectProductsCount);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <nav className="NavBarItems">
      <h1 className="nav-bar-logo">SPACEMAN</h1>
      <ul className="nav-menu">
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.name} to={item.url}>
                <i className={item.icon}>{item.title}</i>
              </Link>
            </li>
          );
        })}

        <div className="cart-login">
          <div className="cart-item">
            <GiSchoolBag className="cartIcon" onClick={openCart} />(
            {productsCount})
            <CartItem isOpen={isCartOpen} onRequestClose={closeCart} />
          </div>
          <button onClick={openModal}> Sign Up </button>
          <SignupModal isOpen={isModalOpen} onRequestClose={closeModal} />
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
