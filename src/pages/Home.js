import "./Home.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function Home() {
  const [user, setUser] = useState({ email: "", password: "" });
  const users = useSelector(selectUser);
  const navigate = useNavigate();

  function handler(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  function logon(e) {
    e.preventDefault();
    if (user.email === "" && user.password === "") {
      alert("Enter your credentials");
    }
    else if (user.email === users.email && user.password === users.password) {
      navigate("/user");
    }
   
  }

  return (
    <div className="container">
      <div className="Navigation">
        <div className="main-heading">
          <p className="main">Persona</p>
          <p className="caption">The community</p>
        </div>

        <form className="details" onSubmit={logon}>
          <p className="labels">Email Id</p>
          <input
            className="intake"
            name="email"
            type="email"
            placeholder="Enter email"
            value={user.email}
            onChange={handler}
          ></input>
          <p className="labels">Password</p>
          <input
            className="intake"
            name="password"
            type="password"
            placeholder="Enter password"
            value={user.password}
            onChange={handler}
          ></input>
          <button className="submit" type="submit">
            Log In
          </button>
          <p className="xtra">
            New to Persona?
            <Link to="/create" className="link">
              , Signup
            </Link>
          </p>
        </form>

        <div className="footer">
          <p className="quote">
            “Every person is defined by the communities they belong to.”
          </p>
          <p className="author">― Orson Scott Card</p>
        </div>
      </div>
      <div className="Spoiler"></div>
    </div>
  );
}

export default Home;
