import React from "react";
import Image from './Image';
import Buttons from './Buttons';
import Code from './Code';

const Swiping = (props) => {
  var restaurantsToSwipe = [];
  //iterate restaurantData
    //select all that meet type, location, and price options.
      //push to restaurantsToSwipe
  var nextRestaurant = restaurantsToSwipe[0];

  var swipeYesHandler = () => {
    //need swipedYes state from App

  };

  var swipeNoHandler = () => {
    //shift restaurantsToSwipe
    nextRestaurant = restaurantsToSwipe[0];
  }
  //Image
    //needs image link, get it from nextRestaurant
  //Buttons
    //needs swipeHandlers
  //Code
    //needs code from App
    //

  return (
    <Image />
  )
};

export default Swiping;