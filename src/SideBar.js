import React from "react";
import "./css/sidebar.css";
import CheckBoxes from "./Checkboxes";
import Search from "./Search";
import Note from "./Note";
const SideBar = (props) => {
  return (
    <div className="sidebar">
      <Search
        updateSearch={props.updateSearch}
        search={props.search}
        data={props.data}
        filterList={props.filterList}
        restaurants={props.restaurants}
      />
      <CheckBoxes updateBorough={props.updateBorough} />
      <Note />
    </div>
  );
};
export default SideBar;
