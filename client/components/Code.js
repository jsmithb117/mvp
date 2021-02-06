import React from "react";

var Code = (props) => {
  var codeChangeHandler = (event) => {
    // console.log(event.target.value);
    props.setCodeInput(event.target.value.toString())
  }
  var codeSubmitHandler = (event) => {
    // debugger;
    // console.log('codeSubmitHandler')
    // console.log(event.target.value);
    // props.setFriendCode(props.codeInput);
  }
  if (props.code) {
    return (
      <div className="code">
        <div className="code-true">{props.code} Give your code to a friend or enter their code here: </div>
        <div className="code-enter">
          <form onSubmit={codeSubmitHandler}>
            <input type="text" value={props.codeInput} onChange={codeChangeHandler} />
          </form>
        </div>
      </div>
    )
  } else {
    return (
      <div className="code-false">Login to get a code or get a code from a friend.</div>
    )
  }
}

export default Code;