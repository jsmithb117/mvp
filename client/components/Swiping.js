/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Image from './Image';
import Buttons from './Buttons';
// import Code from './Code';
// import PropTypes from 'prop-types';

const Swiping = (props) => {
  // const [restaurantsToSwipe, setRestaurantsToSwipe] = useState([]);
  var restaurantsToSwipe = props.restaurantsToSwipe;
  var setRestaurantsToSwipe = props.setRestaurantsToSwipe;

  // var restaurantData = props.restaurantData;
  // const [nextRestaurant, setNextRestaurant] = useState(restaurantData[0]); //{id:1,type:'Burger'...}
  var nextRestaurant = props.nextRestaurant;
  var setNextRestaurant = props.setNextRestaurant;

  var typeSelected = props.typeSelected
  var locationSelected= props.locationSelected;
  var priceSelected= props.priceSelected;
  const [isMatch, setIsMatch] = useState(false);
  const setRestaurantDataToComponent = props.setRestaurantDataToComponent;
  // var setRestaurantDataToComponent = () => {
  //   if (props.user === 'user1') {
  //     // debugger;
  //   }
  //   setRestaurantsToSwipe([]);
  //   restaurantData.forEach((restaurant) => {
  //     // debugger;
  //     if (typeSelected === restaurant.type) {
  //       setRestaurantsToSwipe([...restaurantsToSwipe, restaurant]);
  //     }
  //   });
  //   setNextRestaurant(restaurantsToSwipe[0]);
  // };

  useEffect(() => {
    console.log('using effect')
    setRestaurantDataToComponent()

    console.log('nextRestaurant');
    console.log(nextRestaurant);
  }, [props.isLoggedIn, typeSelected, locationSelected, priceSelected])


  var isMatchClickHandler = () => {
    // debugger;
    if (restaurantsToSwipe.length > 1) {
      var tempRestaurantsToSwipe = [...restaurantsToSwipe];
      tempRestaurantsToSwipe.shift();
      // debugger;
      setRestaurantsToSwipe(tempRestaurantsToSwipe);
      setNextRestaurant(restaurantsToSwipe[0]);
      setIsMatch(false);
    } else {
      console.log('resetting restaurants for demo purposes');
      setRestaurantDataToComponent();
    }

  }

  if (nextRestaurant && props.isLoggedIn) {
    console.log('rendering next Restaurant.  restaurantsToSwipe:');
    console.log(restaurantsToSwipe);
    console.log(typeof restaurantsToSwipe);

    console.log('nextRestaurant');

    console.log(nextRestaurant);
    return (
      <div>
      <Image image={`${nextRestaurant.image}`} isMatch={isMatch} setIsMatch={setIsMatch} isMatchClickHandler={isMatchClickHandler} />
      <div>
        <Buttons setNextRestaurant={setNextRestaurant} restaurantsToSwipe={restaurantsToSwipe} setRestaurantsToSwipe={setRestaurantsToSwipe} nextRestaurant={nextRestaurant} user={props.user}  setIsMatch={setIsMatch}/>
      </div>
      </div>
    )
  } else {
    return (
      <img></img>
    )
  }
};

// Swiping.propTypes = {
//   restaurantsToSwipe: PropTypes.array
// };

export default Swiping;
