import React, { useState, useEffect } from "react";
import OptionType from './OptionType';
import OptionLocation from './OptionLocation';
import OptionPrice from './OptionPrice';

var Options = (props) => {

  useEffect(() => {
    var tempTypes = props.types;
    var tempLocations = props.locations;
    var tempPrices = props.prices;
    props.restaurantData.forEach((restaurant) => { //restaurantData = [{id: 1, name: 'name', type: 'Sushi', location: 89523, price: 1}...]
      if (!tempTypes[restaurant.type]) {
        tempTypes[restaurant.type] = restaurant.id;
      }
      if (!props.locations.includes(restaurant.location)) {
        tempLocations.push(restaurant.location);
      }
      if (!props.prices.includes(restaurant.price)) {
        tempPrices.push(restaurant.price);
      }
    });
    props.setTypes(tempTypes);
    props.setLocations(tempLocations);
    props.setPrices(tempPrices);
  }, [props.restaurantData]);

  var handleTypesSelectChange = (event) => {
    props.setTypeSelected(event.target.value);
    props.setRestaurantDataToComponent();
  }

  var handleLocationsSelectChange = (event) => {
    props.setLocationSelected(event.target.value);
  }

  var handlePriceSelectChange = (event) => {
    props.setPriceSelected(event.target.value);
  }

  var typesEntries = Object.entries(props.types); //[['Mexican', 1], ['Italian', 4]...]

  if (props.isLoggedIn) {
    return (
      <form className="options">
        <label htmlFor="options">Options</label><br></br>
        <select value={props.typeSelected} onChange={handleTypesSelectChange} className="option-type" size="4">
          {typesEntries.map((type) => {
            return <OptionType type={type[0]} key={type[1]} />
          })}
        </select>

        <select value={props.locationSelected} onChange={handleLocationsSelectChange} className="option-location">
          {props.locations.map((location) => {
            return <OptionLocation location={location} key={location} />
          })}
        </select>

        <select value={props.priceSelected} onChange={handlePriceSelectChange} className="option-price">
          {props.prices.map((price) => {
            return <OptionPrice price={price} key={'price'.concat('-', price.toString())} />
          })}
        </select>
      </form>
    )
  } else {
    return (
      <div className="options">
        <span> Options </span>
        <br />
        <span> Logged out... </span>
      </div>
    )
  }
}

export default Options;