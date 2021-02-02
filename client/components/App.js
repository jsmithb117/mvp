import React, { useState } from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";

var App = () => {
  const [isLoggedIn, setLogin] = useState(true);
  const [code, setCode] = useState();
  const [user, setUser] = useState();
  console.log('App isLoggedIn: ', isLoggedIn);
  var login = (e) => {
    console.log('Not really logged in');
    console.log(e);
    //create login form
    //pass username, password to server with POST/login
    //on success, setLogin to true
    //

  };

  var logout = (e) => {
    console.log('Not really logged out');
    //do fetch (/logout)
    //on success, setLogin to false
    setLogin(false);
  };

  return (
    <div className="inner-app">
      <div className="Hello">We're gonna do some Chickin stuff</div>
      <Navbar isLoggedIn={isLoggedIn} code={code} login={login} logout={logout} user={user} />
    </div>
  )
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));