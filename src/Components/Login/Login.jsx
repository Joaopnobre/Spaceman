import { useState } from "react";
import RegisterModal from "../Register/RegisterModal";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "../../redux/user/UserAction";


const Login = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.userReducer);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  const OpenRegisterModal = () => {
    setIsModalOpen(true);
  };

  const CloseRegisterModal = () => {
    setIsModalOpen(false);
  };

  const handleLoginClick = () => {
dispatch(loginUser({name: 'João', email: 'joaopnobre@gmail.com'}));
  };

  // const handleLogoutClick = () => {
  //   dispatch(logoutUser());
  // };

  return (
    <>
      <form className="form-group" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          id="email"
          placeholder="myemail@gmail.com"
        ></input>
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id="password"
          placeholder="********"
        ></input>
        <button onClick={handleLoginClick}>Log in</button>
      </form>
      <p className="dont">Don´t have an account?</p>
      <button onClick={OpenRegisterModal} className="register">
        Register
      </button>
      <RegisterModal isOpen={isModalOpen} onRequestClose={CloseRegisterModal} />
    </>
  );
};

export default Login;
