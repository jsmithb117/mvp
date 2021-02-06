import React from "react";

const Image = (props) => {
  // console.log(props);
  // debugger;
  if (props.isMatch) {
    return (
      <div>
        <span>next: {props.nextRestaurant.name}</span>
        <br />
        <img src={`http://localhost:3000/jpg?match`} onClick={props.isMatchClickHandler}></img>
        <br />
        <span> User 2 would also like to go to this restaurant </span>
      </div>
    )
  } else {
    return (
      <div>
        <span>{props.nextRestaurant.name} {props.nextRestaurant.id}</span>
        <br />
        <img src={`http://localhost:3000/jpg?${props.image}`}></img>
      </div>
    );
  }
}

export default Image;