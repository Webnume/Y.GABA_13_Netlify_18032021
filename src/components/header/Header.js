import React from "react";
import Logo from "../../assets/img/argentBankLogo.png";
import { Link } from "react-router-dom";
import { signOut } from "../../store/actions/authActions";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const { id } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(signOut());
  };
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="./index">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {id ? (
          <button className="sign-in-button" onClick={logOut}>Logout</button>
        ) : (
          <Link className="main-nav-item" to="./login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
