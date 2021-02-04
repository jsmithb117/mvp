import React from "react";

var Code = (props) => {
  if(props.code) {
    return (
      <div className="code-true">{props.code} Give this code to a friend!</div>
    )
  } else {
    return (
      <div className="code-false">Login to get a code or get a code from a friend.</div>
    )
  }
}

export default Code;