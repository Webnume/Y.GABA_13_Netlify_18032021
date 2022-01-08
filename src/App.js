import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import LogIn from "./components/logIn/LogIn";
import Profile from "./components/profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from 'react';
import { loadUser } from "./store/actions/authActions";
import { useDispatch } from "react-redux";

function App() {  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>404 ! There's nothing here!</p>
            </main>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
    // class AllRoutes extends Component{
    //   render(){
    //     return(
    //       <Switch> 
    //         <Route exact path="/login" component={Login} />
    //         <Route exact path="/signup" component={SignUp} />
    //         { this.state.authenticated && 
    //           <Route exact path="/Welcome" component={Welcome} />
    //         }
    //       </Switch>
    //     );
    //   }
    // }
    
  );
}

export default App;
