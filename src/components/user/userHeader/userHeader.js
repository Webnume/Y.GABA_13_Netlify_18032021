import React, { useState } from "react";
import styles from "./userHeader.module.css";

const UserHeader = (props) => {
  const [editOpen, setEditOpen] = useState(false);
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // console.log("editOpen :", editOpen);
  // console.log("firstName :", firstName);
  // console.log("lastName :", lastName);

  return !editOpen ? (
    <div className="header">
      <h1>
        Welcome back
        <br />
        Tony Jarvis!
      </h1>
      <button className="edit-button" onClick={() => setEditOpen(true)}>
        Edit Name
      </button>
    </div>
  ) : (
    <div className="header">
      <h1>
        Welcome back
        <br />
        <input type="text" defaultValue="Tony" className={styles.editInput} />
        <input type="text" defaultValue="Jarvis" className={styles.editInput} />
      </h1>
      <button className="edit-button" onClick={() => console.log("Save")}>
        Save
      </button>
      <button className="edit-button" onClick={() => setEditOpen(false)}>
        Cancel
      </button>
    </div>
  );
};

export default UserHeader;
