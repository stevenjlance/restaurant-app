import React from "react";
import Card from "./Card";
const CardContainer = (props) => {
  let flag = props.data.length !== 0 ? true : false;
  return (
    <div className="content">
      {/* <Card data={props.data[0]} /> */}
      {flag
        ? props.data.map((item, index) => <Card data={item} key={index} />)
        : ""}
    </div>
  );
};
export default CardContainer;
