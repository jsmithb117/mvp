/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from 'prop-types';

const Buttons = (props) => {
  var checkHandler = () => {
    // debugger;
    var copy = [...props.restaurantsToSwipe];
    var body = {
      restaurantId: props.nextRestaurant.id,
      user: props.user
    };
    var options = {
      method: 'POST',
      body: JSON.stringify(body)
    }
    fetch('http://localhost:3000/swipe', options)
    .then((stream) => {
      console.log('post swipe stream');
      console.log(stream);
      return stream.text();
    })
    .then((body) => {
      console.log('body');
      if (body === 'match') {
        props.setIsMatch(true);
        //change something that will remove the image and replace it with the text 'Match! click to continue swiping'
          //match text needs an onClick that will:
            //setNextRestaurant as first element of restaurantsToSwipe
            //remove the first element of restaurantsToSwipe
            //set isMatch (from swiping) to false;
      }
    })
    copy.shift();
    // debugger;
    props.setRestaurantsToSwipe(copy);
    props.setNextRestaurant(copy[0]);


  };
  var xHandler = () => {
    // debugger;
    console.log('clicked x');
    console.log(props.restaurantsToSwipe);
    var temp = [...props.restaurantsToSwipe];
    temp.shift();
    props.setRestaurantsToSwipe(temp);
    props.setNextRestaurant(props.restaurantsToSwipe[0]);

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