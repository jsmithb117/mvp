import PropTypes from 'prop-types';
import React from "react";

var OptionPrice = (props) => {
  return (
    <option value={props.price}>{props.price}</option>
  );
};

OptionPrice.propTypes = {
  price: PropTypes.number
}

export default OptionPrice;