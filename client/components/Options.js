import React, { useState, useEffect } from "react";
import OptionType from './OptionType';

var Options = (props) => {
  const [types, setTypes] = useState({}); //{type: id, type2: id2}
  const [selected, setSelected] = useState('');

  useEffect(() => {
    var tempTypes = types;
    props.restaurantData.forEach((elem) => { //restaurantData = [{id: 1, name: 'name', type: 'Sushi', location: 89523, price: 1}...]
      if (!tempTypes[elem.type]) {
        tempTypes[elem.type] = elem.id;
      }
    });
    setTypes(tempTypes);
  }, [props.restaurantData]);

  var handleSelectChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);

  }

  var entries = Object.entries(types); //[['Mexican', 1], ['Italian', 4]...]

  if (props.isLoggedIn) {
    return (
      <form className="options">
        <label htmlFor="options"></label>
        <select value={selected} onChange={handleSelectChange} className="option-menu">
          {entries.map((elem) => {
            return <OptionType option={elem[0]} key={elem[1]} />
          })}
        </select>
        <input type="submit" value="Submit"></input>
      </form>
    )
  } else {
    return (
        <div className="options">Options logged out...</div>
    )
  }
}

export default Options;