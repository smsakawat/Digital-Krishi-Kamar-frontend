import { Button } from "@mui/material";
import React from "react";
import "./DashProfile.css";

const DashProfile = (props) => {
  const { user } = props;
  console.log(user);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <div>
          <img className="userAvatar" src={user.imgUrl} alt="" />
        </div>
        <p style={{ lineHeight: "1.5", fontSize: "1.3rem" }}>
          Name: {user.displayName}
        </p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.mobile ? user.mobile : "01876980021"}</p>
        <p style={{ marginBottom: "0.5rem" }}>
          NID : {user.nidNo ? user.nidNo : "9749273492739"}
        </p>
        <Button
          variant="contained"
          color="success"
          style={{ textAlign: "center" }}
        >
          Update
        </Button>
      </div>
    </div>
  );
};

export default DashProfile;
