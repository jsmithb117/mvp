import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Options from "./Options";
import randomCode from "randomatic";

var App = () => {
  const url = 'http://localhost:3000';
  const [isLoggedIn, setLogin] = useState(false);
  const [userInput, setUserInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  // eslint-disable-next-line no-unused-vars
  const [code, setCode] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState('');
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    console.log('fetching restaurantData');
      fetch(`${url}/restaurants`)
        .then((stream) => {
          if (!stream.ok) {
            console.error('Unknown error encountered while fetching restaurant data');
          }
          return stream.blob();
        })
        .then((data) => {
          return data.text();
        })
        .then((data) => {
          return JSON.parse(data);
        })
        .then((data) => {
          setRestaurantData(data);
          console.log('fetched restaurantData');
        })

  }, [isLoggedIn]);
  // useEffect(() => {
  //   if (isLoggedIn) {
  //     //Do fetch /code
  //     console.log('creating a code');
  //     setCode(randomCode('?', 4, {chars: 'ABCDEFGHJKLMNPRSTUVWXYZ23456789'}));
  //   }

  // }, [isLoggedIn])

  var login = () => {

    console.log('Not really logged in');
    // console.log(loginNode);
    console.log(userInput);
    console.log(passwordInput);


    //do fetch post /login, pass username and password
      //then, assign user with setUser, also do setLogin(true);
      //then, do fetch /code pass username
        //then assign code with setCode (may need to be passed from App)






    // console.log(e.relatedTarget());
    //Do fetch /code
    // fetch(`${url}/code`)
    //   .then((data) => {
    //     console.log(data);
    //     if (data) {
    //     }
    //   })
      //if code exists, do setCode then post/code
      //else, do setCode(createCode())
  };

  var logout = () => {
    console.log('Not really logged out');
    setLogin(false);
  };

  var createCode = () => {
    return randomCode('?', 4, {chars: 'ABCDEFGHJKLMNPRSTUVWXYZ23456789'});
  }

  return (
    <div className="inner-app">
      <Navbar isLoggedIn={isLoggedIn} code={code} login={login} logout={logout} user={user} setUser={setUser} userInput={userInput} setUserInput={setUserInput} passwordInput={passwordInput} setPasswordInput={setPasswordInput} />
      <Options restaurantData={restaurantData} isLoggedIn={isLoggedIn}  />
    </div>
  )
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));