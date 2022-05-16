import React from "react";
import Results from "./Results";

const Search = (props) => {
  const handleType = (event) => {
    const searchValue = event.target.value;
    // Push typed value into state
    props.updateSearch(searchValue);
    // Search values and return all values that contain the search term
    const filteredResults = props.data.filter((restaurant) => {
      return restaurant.dba.toLowerCase().includes(searchValue.toLowerCase());
    });
    // Print values to the screen
    props.filterList(searchValue);
  };

  return (
    <div className="search">
      <input
        className="searchBar"
        type="text"
        placeholder="Search.."
        onChange={handleType}
      />
      <ul className="suggestions">
        {/* Render a list item for each restaurant */}
        {props.restaurants.map((restaurant, index) => (
          <Results restaurant={restaurant} key={index} />
        ))}
      </ul>
      <button className="searchButton" onClick={props.search}>
        Find Restaurant
      </button>
    </div>
  );
};

export default Search;
