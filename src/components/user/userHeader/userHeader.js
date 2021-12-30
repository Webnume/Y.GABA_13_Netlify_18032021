import React, { useState } from "react";
import styles from "./userHeader.module.css";

const UserHeader = ({ userData }) => {
  const [editOpen, setEditOpen] = useState(false);
  const [firstName, setFirstName] = useState(userData.firstName);
  const [lastName, setLastName] = useState(userData.lastName);
  const [previousForCancelfirst, setpreviousForCancelfirst] = useState("");
  const [previousForCancellast, setpreviousForCancellast] = useState("");
  
  console.log("userHeader: ", userData.lastName);
  
  const edit = () => {
    setEditOpen(true);
    setpreviousForCancelfirst(firstName);
    setpreviousForCancellast(lastName);
  };
  const save = () => {
    setEditOpen(false);
    setFirstName(firstName);
    setLastName(lastName);
    console.log("firstNameSaved : ", firstName);
    console.log("lastNameSaved : ", lastName);
  };
  const cancel = () => {
    setEditOpen(false);
    setFirstName(previousForCancelfirst);
    setLastName(previousForCancellast);
  };
  return !editOpen ? (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {firstName + " " + lastName} !
      </h1>
      <button className="edit-button" onClick={() => edit()}>
        Edit Name
      </button>
    </div>
  ) : (
    <div className="header">
      <h1>
        Welcome back
        <br />
        <input
          type="text"
          defaultValue={firstName}
          className={styles.editInput}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          defaultValue={lastName}
          className={styles.editInput}
          onChange={(e) => setLastName(e.target.value)}
        />
      </h1>
      <button className="edit-button" onClick={() => save()}>
        Save
      </button>
      <button className="edit-button" onClick={() => cancel()}>
        Cancel
      </button>
    </div>
  );
};

export default UserHeader;
