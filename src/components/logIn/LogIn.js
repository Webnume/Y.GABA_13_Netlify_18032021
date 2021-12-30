import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { login } from "../../actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberUser, setRememberUser] = useState(false);

  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);
    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(username, password))
        .then(() => {
          return <Navigate to="/profile" />;
          // props.history.push("/profile");
          // window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };
  if (isLoggedIn) {
    return <Navigate to="/profile" />;    
  }


  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>

        <Form onSubmit={handleLogin} ref={form}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <Input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              defaultChecked={rememberUser}
              onChange={() => setRememberUser(!rememberUser)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <div className="form-group">
            <button className="sign-in-button" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </section>
    </main>
  );
};

export default Login;

// const SignIn = (props) => {
//   const [users, verifUsers] = usePostData();
//   const [username, setUsername] = useState("");
//   const [password, sePassword] = useState("");
//   const [rememberUser, setRememberUser] = useState(false);

//   console.log(username, password, rememberUser, users);

//   const handleValidation = (event) => {
//     event.preventDefault();
//     verifUsers("http://localhost:3001/api/v1/user/login", username, password);
//   };

//   console.log();

//   return (
//     <main className="main bg-dark">
//       <section className="sign-in-content">
//         <i className="fa fa-user-circle sign-in-icon"></i>
//         <h1>Sign In</h1>
//         <form>
//           <div className="input-wrapper">
//             <label htmlFor="username">Username</label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(event) => setUsername(event.target.value)}
//             />
//           </div>
//           <div className="input-wrapper">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(event) => sePassword(event.target.value)}
//             />
//           </div>
//           <div className="input-remember">
//             <input
//               type="checkbox"
//               id="remember-me"
//               defaultChecked={rememberUser}
//               onChange={() => setRememberUser(!rememberUser)}
//             />
//             <label htmlFor="remember-me">Remember me</label>
//           </div>
//           {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
//           {/* <Link to="../profile" className="sign-in-button">
//             Sign In
//           </Link> */}
//           {/* <!-- SHOULD BE THE BUTTON BELOW -->
//             <!--  --> */}
//           <button className="sign-in-button" onClick={handleValidation}>
//             Sign In
//           </button>
//         </form>
//       </section>
//     </main>
//   );
// };

// export default SignIn;
