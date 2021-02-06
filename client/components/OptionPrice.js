import PropTypes from 'prop-types';
import React from "react";

var OptionPrice = (props) => {
  var price = '';
  for (let i = 0; i < props.price; i++) {
    price = price.concat('$');
  }
  return (
    <option value={props.price}>{price}</option>
  );
};

OptionPrice.propTypes = {
  price: PropTypes.number
}

export default OptionPrice;