import React from "react";

const Image = (props) => {
  if (props.isMatch) {
    return (
      <div>
        <span>next: {props.nextRestaurant.name}</span>
        <br />
        <img src={`http://localhost:3000/jpg?match`} onClick={props.isMatchClickHandler}></img>
        <br />
        <span> Your friend, &quot;user2&quot;, would also like to go to this restaurant! </span>
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