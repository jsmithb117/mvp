import React, { useState, useEffect } from "react";
import OptionType from './OptionType';
import OptionLocation from './OptionLocation';

var Options = (props) => {
  const [types, setTypes] = useState({}); //{type: id, type2: id2}
  const [typesSelected, setTypesSelected] = useState('');
  const [locations, setLocations] = useState([12345]); //[89523]
  const [locationSelected, setLocationSelected] = useState('');


  useEffect(() => {
    var tempTypes = types;
    var tempLocations = locations;
    props.restaurantData.forEach((restaurant) => { //restaurantData = [{id: 1, name: 'name', type: 'Sushi', location: 89523, price: 1}...]
      if (!tempTypes[restaurant.type]) {
        tempTypes[restaurant.type] = restaurant.id;
      }
      if (!locations.includes(restaurant.location)) {
        tempLocations.push(restaurant.location);
      }
    });
    setTypes(tempTypes);
    setLocations(tempLocations);
  }, [props.restaurantData]);

  var handleTypesSelectChange = (event) => {
    console.log(event.target.value);
    setTypesSelected(event.target.value);
  }

  var handleLocationSelectChange = (event) => {
    console.log(event.target.value);
    setLocationSelected(event.target.value);
  }


  var typesEntries = Object.entries(types); //[['Mexican', 1], ['Italian', 4]...]


  if (props.isLoggedIn) {
    return (
      <form className="options">
        <label htmlFor="options">Options</label><br></br>
        <select value={typesSelected} onChange={handleTypesSelectChange} className="option-menu" size="4">
          {typesEntries.map((elem) => {
            return <OptionType option={elem[0]} key={elem[1]} />
          })}
        </select>

        <input type="submit" value="Submit"></input>
        <select value={locationSelected} onChange={handleLocationSelectChange} className="option-menu">
          {locations.map((location) => {
            return <OptionLocation location={location} key={location} />
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