import Modal from 'react-modal';
import Login from './Login';
import "./LoginStyles.css";

const SignupModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal className="SignUp-container"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Sign Up Modal"
    >
      <div className="sign-up">
      <h2 className="welcome">Welcome to the Space</h2>
      <Login></Login>
      <button className='close' onClick={onRequestClose}>Close</button>
      </div>
    </Modal>
  );
};

export default SignupModal;
