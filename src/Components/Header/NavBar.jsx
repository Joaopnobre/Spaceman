import { Link } from "react-router-dom";
import { MenuItems } from "../MenuItems";
import "./NavBar.css"
import SignupModal from "../Login/LoginModal";
import { useState } from "react";
function NavBar() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
        <div>
        <button onClick={openModal}> Sign Up </button>
        <SignupModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
      </ul>
    </nav>
  );
}

export default NavBar;
