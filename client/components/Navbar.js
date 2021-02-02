import React from "react";

var Login = (props) => {
  console.log('Login isLoggedIn: ', props.isLoggedIn);
  var user = props.user || 'fake user';
  if (props.isLoggedIn) {
    return (
      <div className="login-true">
        Welcome back {user}!
        <button onClick={props.logout}>Logout</button>
      </div>
    )
  } else {
    return (
      <div className="login-false">
        <form>
          <label>Login:
            <input autoComplete="name"></input>
            <input autoComplete="password"></input>
          </label>
          <button>Login</button>
        </form>
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
  console.log('Navbar isLoggedIn: ', props.isLoggedIn);
  return (
  <div className="navbar">
    <div className="title">Chickin Tender</div>
    <div className="login">
      <Login isLoggedIn={props.isLoggedIn} login={props.login} logout={props.logout} user={props.user} />
    </div>
    <div className="code"><Code code={props.code}/></div>
    <div className="enter-code">

    </div>
  </div>
)}


export default Navbar;