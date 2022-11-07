import "./Create.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

function Create() {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function passwordManager(e) {
    e.preventDefault();
    if (validation(user) === true) {
      dispatch(
        login({
          email: user.email,
          password: user.password,
        })
      );
      alert("Account creation succesful, Login from Homepage");
      navigate("/");
    } else {
      alert("Email id / Password not in format");
    }
  }

  function handler(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  function validation(value) {
    const Emailregex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const Passregex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (value.email.match(Emailregex) && value.password.match(Passregex)) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <div className="navbar">
        <p className="main">Persona</p>
        <p className="caption">The community</p>
      </div>
      <div className="container2">
        <div className="form">
          <div className="title-div">
            <p className="title">Create your Persona account</p>
          </div>
          <form onSubmit={passwordManager} className="user-input">
            <p className="label">Enter your email address</p>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              name="email"
              value={user.email}
              onChange={handler}
            ></input>
            <p className="label">Enter your password</p>
            <input
              id="password"
              type="password"
              name="password"
              value={user.password}
              placeholder="Your password"
              onChange={handler}
            ></input>
            <button type="submit">Create Account</button>
          </form>
          <div className="additional">
            <p>
              By registering, you accept our Terms of use and Privacy Policy
            </p>
          </div>
        </div>
        <p className="already">
          Already have an account? <Link to="/">Log in</Link>
        </p>
      </div>
    </>
  );
}

export default Create;
