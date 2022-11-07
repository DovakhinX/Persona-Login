import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";


import "./User.css";

function User() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();


  function logout(){
    navigate("/");

  }

  return (
    <>
      <div className="navbar">
        <p className="main">Persona</p>
        <p className="caption">The community</p>
      </div>
      <div className="welcome">
        <div className="message">
          <p className="wel">
            Welcome <span className="come">{user.email}</span>
          </p>
        </div>
        <div className="log">
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    </>
  );
}

export default User;
