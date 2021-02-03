import React from "react";

var Login = (props) => {
  var user = props.user || 'FAKE USER';
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
          <label>Login:
            <input placeholder="name"></input>
            <input placeholder="password"></input>
          </label>
          <button onClick={props.login} type="submit">Login</button>
      </div>
    )
  }
}

var Code = (props) => {
  if(props.code) {
    return (
      <div className="code-true">{props.code} Give this code to a friend!</div>
    )
  } else {
    return (
      <div className="code-false">Login to get a code or get a code from a friend.</div>
    )
  }
}
var Navbar = (props) => {
  return (
  <div className="navbar">
    <div className="title">Chickin Tender</div>
    <div className="login">
      <form>
      <Login isLoggedIn={props.isLoggedIn} login={props.login} logout={props.logout} user={props.user} />
      </form>
    </div>
    <div className="code"><Code code={props.code}/></div>
    <div className="enter-code">

    </div>
  </div>
)}


export default Navbar;