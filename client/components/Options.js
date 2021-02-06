import React, { useState, useEffect } from "react";
import OptionType from './OptionType';
import OptionLocation from './OptionLocation';
import OptionPrice from './OptionPrice';

var Options = (props) => {
  // const [types, setTypes] = useState({}); //{type: id, type2: id2}
  // const [typeSelected, setTypeSelected] = useState('');
  // const [locations, setLocations] = useState([12345]); //[89523]
  // const [locationSelected, setLocationSelected] = useState('');
  // const [prices, setPrices] = useState([]); //[1, 2, 3, 4]
  // const [priceSelected, setPriceSelected] = useState();

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
    console.log(event.target.value);
    props.setTypeSelected(event.target.value);
  }

  var handleLocationsSelectChange = (event) => {
    console.log(event.target.value);
    props.setLocationSelected(event.target.value);
  }

  var handlePriceSelectChange = (event) => {
    console.log(event.target.value);
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

        <input type="submit" value="Submit"></input>
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
        <div className="options">Options logged out...</div>
    )
  }
}

export default Options;