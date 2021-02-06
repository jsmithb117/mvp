/* eslint-disable react/prop-types */
import React from "react";

var Login = (props) => {
  var user = props.user;
  var userChange = (event) => {
    props.setUserInput(event.target.value);
  }
  var passwordChange = (event) => {
    props.setPasswordInput(event.target.value);
  }
  if (props.isLoggedIn) {
    return (
      <div className="login-true">
        Welcome back {user}!
        <button onClick={props.logout} type="submit">Logout</button>
      </div>
    )
  } else {
    return (
      <div className="login-false">
        <form>
          <label>Login:
            <input placeholder="name" onChange={userChange}></input>
            <input placeholder="password" onChange={passwordChange}></input>
          </label>
          <button onClick={props.login} >Login</button>
        </form>
      </div>
    )
  }
}

var Navbar = (props) => {
  return (
  <div className="navbar">
    <div className="title">Chickin Tender, it&apos;s like Tinder, but for food.</div>
    <div className="login">
      <Login isLoggedIn={props.isLoggedIn} login={props.login} logout={props.logout} user={props.user} setUserInput={props.setUserInput} userInput={props.userInput} passwordInput={props.passwordInput} setPasswordInput={props.setPasswordInput}/>
    </div>
  </div>
)}


export default Navbar;