import React from "react";

var OptionType = (props) => {
  console.log(props);
  return (
    // "<option value='option' key='1'>'stuff'</option>"
    <option value={props.option} key={props.optionId}>{props.option}</option>
  );

}
export default OptionType;