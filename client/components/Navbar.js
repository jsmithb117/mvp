/* eslint-disable react/prop-types */
import React, {useState} from "react";
import Code from './Code';

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

// var Code = (props) => {
//   if(props.code) {
//     return (
//       <div className="code-true">{props.code} Give this code to a friend!</div>
//     )
//   } else {
//     return (
//       <div className="code-false">Login to get a code or get a code from a friend.</div>
//     )
//   }
// }
var Navbar = (props) => {
  // const [userInput, setUserInput] = useState();
  // const [passwordInput, setPasswordInput] = useState();

  return (
  <div className="navbar">
    <div className="title">Chickin Tender</div>
    <div className="login">
      {/* <form> */}
      <Login isLoggedIn={props.isLoggedIn} login={props.login} logout={props.logout} user={props.user} setUserInput={props.setUserInput} userInput={props.userInput} passwordInput={props.passwordInput} setPasswordInput={props.setPasswordInput}/>
      {/* </form> */}
    </div>
    {/* <div className="code-main"><Code code={props.code} friendCode={props.friendCode}setFriendCode={props.setFriendCode} codeInput={props.codeInput} setCodeInput={props.setCodeInput}/></div>
    <div className="enter-code">

    </div> */}
  </div>
)}


export default Navbar;