import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../assets/css/main.css";
import UserHeader from "../user/userHeader/userHeader";
import { Navigate } from "react-router-dom";
import { getProfil } from "../../store/actions/userActions";


const Profile = () => {
  const dispatch = useDispatch();
  const  auth  = useSelector((state) => state.auth);
  const  user  = useSelector((state) => state.user);


  useEffect(() => {
    dispatch(getProfil());
  }, [dispatch]);

  if (!auth.id) {
    return <Navigate to="/index" />;
  }
  return (
    <main className="main bg-dark">
      <UserHeader userData={user}/>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
};

export default Profile;
