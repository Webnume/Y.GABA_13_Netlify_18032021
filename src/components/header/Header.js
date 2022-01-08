import React, { useEffect, useState } from "react";
import Logo from "../../assets/img/argentBankLogo.png";
import { Link } from "react-router-dom";
import { signOut } from "../../store/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { getProfil } from "../../store/actions/userActions";

const Header = () => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const [firstName, setFirstName] = useState(user.firstName);

  const logOut = () => {
    dispatch(signOut());
  };
  
  useEffect(() => {
    dispatch(getProfil());
  }, [dispatch]);


  useEffect(() => {
    setFirstName(user.firstName);
  }, [user]);


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
          <>
            <div>
              <Link className="main-nav-item" to="./profile">
                <i className="fa fa-user-circle"></i>
                {firstName}
              </Link>
              <Link className="main-nav-item" to="/" onClick={logOut}>
                <i className="fa fa-sign-out"></i>
                Sign Out
              </Link>
            </div>
          </>
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
