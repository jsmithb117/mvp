import React from "react";

const Image = (props) => {
  console.log(props);
  // debugger;
  if (props.isMatch) {
    return (
      <img src={`http://localhost:3000/jpg?match`} onClick={props.isMatchClickHandler}></img>
    )
  } else {
    return (
      <img src={`http://localhost:3000/jpg?${props.image}`}></img>
    );
  }
}

export default Image;