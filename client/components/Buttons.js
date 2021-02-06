/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from 'prop-types';

const Buttons = (props) => {
  var checkHandler = () => {
    var copy = [...props.restaurantsToSwipe];
    var body = JSON.stringify({
      restaurantId: props.nextRestaurant.id,
      user: props.user
    });
    var options = {
      method: 'POST',
      body: body,
      headers: {'Content-Type': 'application/json'}
    }
    fetch('http://localhost:3000/swipe', options)
    .then((stream) => {
      return stream.text();
    })
    .then((body) => {
      if (body === 'match') {
        props.setIsMatch(true);
      }
    })
    copy.shift();
    props.setRestaurantsToSwipe(copy);
    props.setNextRestaurant(copy[0]);
  };
  var xHandler = () => {
    var temp = [...props.restaurantsToSwipe];
    temp.shift();
    props.setRestaurantsToSwipe(temp);
    props.setNextRestaurant(props.restaurantsToSwipe[0]);
    console.log('x')
  }

  return (
    <div>
      <img src={`http://localhost:3000/jpg?check`} onClick={checkHandler}></img>
      <img src={`http://localhost:3000/jpg?x`} onClick={xHandler}></img>
    </div>
  )
};

Buttons.propTypes = {
  restaurantsToSwipe: PropTypes.array
};

export default Buttons;