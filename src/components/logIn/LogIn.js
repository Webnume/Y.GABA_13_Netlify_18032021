import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { signIn } from "../../store/actions/authActions";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [creds, setCreds] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(creds.email, creds.password, creds.rememberMe));
    setCreds({ email: "", password: "", rememberMe: creds.rememberMe });
  };
  // console.log(creds.rememberMe);
  if (auth.id) return <Navigate to="/profile" />;

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>

        <Form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="enterEmail">Username</label>
            <Input
              type="text"
              className="form-control"
              name="enterEmail"
              value={creds.email}
              onChange={(e) => setCreds({ ...creds, email: e.target.value })}
              validations={[required]}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              className="form-control"
              name="password"
              value={creds.password}
              onChange={(e) => setCreds({ ...creds, password: e.target.value })}
              validations={[required]}
            />
          </div>

          <div className="input-remember">
            <Input
              type="checkbox"
              id="remember-me"
              onChange={() =>
                setCreds({ ...creds, rememberMe: !creds.rememberMe })
              }
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <div className="form-group">
            <button className="sign-in-button">Login</button>
          </div>
        </Form>
      </section>
    </main>
  );
};

export default Login;
