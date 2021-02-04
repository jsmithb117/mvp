import PropTypes from 'prop-types';
import React from "react";

var OptionType = (props) => {
  return (
    <option value={props.type}>{props.type}</option>
  );
}

OptionType.propTypes = {
  type: PropTypes.string
}
export default OptionType;