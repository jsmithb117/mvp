import React, { useState } from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import regeneratorRuntime from "regenerator-runtime";
import Options from "./Options";
import Async from "react-async";

var App = () => {
  const [isLoggedIn, setLogin] = useState(false);
  const [code, setCode] = useState();
  const [user, setUser] = useState();
  const [restaurantData, setRestaurantData] = useState();

  const loadRestaurants = () => {
    fetch("http://localhost:3000/restaurants")
      .then((data) => {
        console.log(data);
      })
  };
  <Async promiseFunction={loadRestaurants}>
    {({data, err, isLoading}) => {
      if (isLoading) {
        setRestaurantData('Loading...');
      }
      if (err) {
        console.error(err);
      }
      if (data) {
        setRestaurantData(data);
      }
    }}
  </Async>


  var login = (e) => {
    console.log('Not really logged in');
    setLogin(true);
  };

  var logout = (e) => {
    console.log('Not really logged out');
    setLogin(false);
  };

  return (
    <div className="inner-app">
      <Navbar isLoggedIn={isLoggedIn} code={code} login={login} logout={logout} user={user} />
      <Options restaurantData={restaurantData}/>
    </div>
  )
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));