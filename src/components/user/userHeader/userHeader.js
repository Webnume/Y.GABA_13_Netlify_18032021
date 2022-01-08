import styles from "./userHeader.module.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUSer } from "../../../store/actions/userActions";

import { getProfil } from "../../../store/actions/userActions";

const UserHeader = () => {
  const dispatch = useDispatch();
  // console.log(userData);
  const user = useSelector((state) => state.user);
  const [editOpen, setEditOpen] = useState(false);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [previousForCancelfirst, setpreviousForCancelfirst] = useState("");
  const [previousForCancellast, setpreviousForCancellast] = useState("");

  useEffect(() => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
  }, [user]);

  // console.log(user);

  // console.log("userHeader: ", user.lastName);

  const edit = () => {
    setEditOpen(true);
    setpreviousForCancelfirst(firstName);
    setpreviousForCancellast(lastName);
  };

  const save = () => {
    setEditOpen(false);
    setFirstName(firstName);
    setLastName(lastName);
    dispatch(
      updateUSer({
        firstName: firstName,
        lastName: lastName
      })
    );
      dispatch(getProfil());
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
