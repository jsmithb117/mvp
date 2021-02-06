import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Options from "./Options";
import randomCode from "randomatic";
import Swiping from "./Swiping";

var App = () => {
  const url = 'http://localhost:3000';
  const [isLoggedIn, setLogin] = useState(false);
  const [userInput, setUserInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const [code, setCode] = useState('');
  const [friendCode, setFriendCode] = useState('');
  // eslint-disable-next-line no-unused-vars

  const [codeInput, setCodeInput] = useState('');
  const [user, setUser] = useState('');
  const [restaurantData, setRestaurantData] = useState([]);
  const [types, setTypes] = useState({}); //{type: id, type2: id2}
  const [prices, setPrices] = useState([]); //[1, 2, 3, 4]
  const [locations, setLocations] = useState([12345]); //[89523]
  const [typeSelected, setTypeSelected] = useState('Burger');
  const [priceSelected, setPriceSelected] = useState(1);
  const [locationSelected, setLocationSelected] = useState(89523);

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
          return data;
        })
        .catch((err) => {
          if(err) {
            console.error(err);
          }
        })
  }, [isLoggedIn]);

  var login = () => {
    setUser(userInput);
    setLogin(true);
    var newCode = createCode();
    setCode(newCode);
    console.log('Not really logged in');
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
      <div className="navbar">
        <Navbar isLoggedIn={isLoggedIn} code={code} friendCode={friendCode}setFriendCode={setFriendCode} codeInput={codeInput} setCodeInput={setCodeInput} login={login} logout={logout} user={user} setUser={setUser} userInput={userInput} setUserInput={setUserInput} passwordInput={passwordInput} setPasswordInput={setPasswordInput}  />
      </div>
      <div className="options">
        <Options restaurantData={restaurantData} isLoggedIn={isLoggedIn} types={types} setTypes={setTypes} typeSelected={typeSelected} setTypeSelected={setTypeSelected} locations={locations} setLocations={setLocations} locationSelected={locationSelected} setLocationSelected={setLocationSelected} prices={prices} setPrices={setPrices} priceSelected={priceSelected} setPriceSelected={setPriceSelected} />
      </div>
      <div className="swiping">
        <Swiping user={user} restaurantData={restaurantData} isLoggedIn={isLoggedIn} types={types} typeSelected={typeSelected} locations={locations} locationSelected={locationSelected} prices={prices} priceSelected={priceSelected} />
      </div>

    </div>
  )
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));


// const [types, setTypes] = useState({}); //{type: id, type2: id2}
// const [typeSelected, setTypeSelected] = useState('');
// const [locations, setLocations] = useState([12345]); //[89523]
// const [locationSelected, setLocationSelected] = useState('');
// const [prices, setPrices] = useState([]); //[1, 2, 3, 4]
// const [priceSelected, setPriceSelected] = useState();

// types={types} setTypes={setTypes} typeSelected={typeSelected} setTypeSelected={setTypeSelected} locations={locations} setLocations={setLocations} locationSelected={locationSelected} prices={prices} setPrices={setPrices} priceSelected={priceSelected} setPriceSelected={setPriceSelected}