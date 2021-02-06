/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Image from './Image';
import Buttons from './Buttons';

const Swiping = (props) => {
  var restaurantsToSwipe = props.restaurantsToSwipe;
  var setRestaurantsToSwipe = props.setRestaurantsToSwipe;
  var nextRestaurant = props.nextRestaurant;
  var setNextRestaurant = props.setNextRestaurant;
  var typeSelected = props.typeSelected
  var locationSelected= props.locationSelected;
  var priceSelected= props.priceSelected;
  const [isMatch, setIsMatch] = useState(false);
  const setRestaurantDataToComponent = props.setRestaurantDataToComponent;

  useEffect(() => {
    setRestaurantDataToComponent()
  }, [props.isLoggedIn, typeSelected, locationSelected, priceSelected])


  var isMatchClickHandler = () => {
    if (restaurantsToSwipe.length > 1) {
      var tempRestaurantsToSwipe = [...restaurantsToSwipe];
      tempRestaurantsToSwipe.shift();
      setRestaurantsToSwipe(tempRestaurantsToSwipe);
      setNextRestaurant(restaurantsToSwipe[0]);
      setIsMatch(false);
    } else {
      setRestaurantDataToComponent();
    }
  }

  if (nextRestaurant && props.isLoggedIn) {
    return (
      <div>
      <Image image={`${nextRestaurant.image}`} isMatch={isMatch} setIsMatch={setIsMatch} isMatchClickHandler={isMatchClickHandler} nextRestaurant={nextRestaurant} />
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

export default Swiping;