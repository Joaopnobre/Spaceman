import "./Footer.css";
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';


const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>SPACEMAN</h1>
          <p>Fasten your seat belts</p>
        </div>
        <div className="icons">
          <a href="/">
            <i className="icon"> <FaFacebookF/></i>
          </a>
          <a href="/">
            <i className="icon"><BsInstagram/></i>
          </a>
          <a href="/">
            <i className="icon"> <FaXTwitter/> </i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>About Spaceman</h4>
          <a href="/">About us</a>
          <a href="/">Partners</a>
          <a href="/">Crew</a>
        </div>
        <div>
          <h4>Experiences</h4>
          <a href="/">Newsletter</a>
          <a href="/">Photos</a>
          <a href="/">Films</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">Instagram</a>
          <a href="/">Twitter</a>
          <a href="/">Whatsapp</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Contact Us</a>
          <a href="/">Complain</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;