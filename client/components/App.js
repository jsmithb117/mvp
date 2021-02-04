import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import regeneratorRuntime from "regenerator-runtime";
import Options from "./Options";
// import Async from "react-async";

var App = () => {
  const [isLoggedIn, setLogin] = useState(false);
  const [code, setCode] = useState();
  const [user, setUser] = useState();
  const [restaurantData, setRestaurantData] = useState([]);
  // const [restaurantDataIsCurrent, setCurrentRestaurantData] = useState(false);

  useEffect(() => {
    console.log('fetching restaurantData');
      fetch("http://localhost:3000/restaurants")
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
          // setCurrentRestaurantData(true);
          console.log('fetched restaurantData');
          console.log(data);
        })

  }, [isLoggedIn])

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
      <Options restaurantData={restaurantData} isLoggedIn={isLoggedIn} />
    </div>
  )
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));