import Modal from 'react-modal';
import Register from './Register';


const RegisterModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal className="SignUp-container"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Sign Up Modal"
    >
      <div className="sign-up">
      <h2>Register</h2>
      <Register></Register>
      <button className='close' onClick={onRequestClose}>Back</button>
      </div>
    </Modal>
  );
};

export default RegisterModal;
