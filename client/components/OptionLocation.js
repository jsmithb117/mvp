import PropTypes from 'prop-types';
import React from "react";

var OptionLocation = (props) => {
  return (
    <option value={props.location}>{props.location}</option>
  );
};

OptionLocation.propTypes = {
  location: PropTypes.number
}

export default OptionLocation;