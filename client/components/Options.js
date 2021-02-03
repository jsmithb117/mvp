import React from "react";

var Options = (props) => {
  setTimeout (() => {
    console.log(props.restaurants)
  }, 2000)
  if (props.isLoggedIn) {
    return (
      <div className="options">Options logged in...</div>
    )
  } else {
    return (
      <div className="options">Options logged out...</div>
    )
  }
}

export default Options;