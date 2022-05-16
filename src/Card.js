import React from "react";
import A from "./images/A.jpg";
import B from "./images/B.jpg";
import C from "./images/C.jpg";
import Pending from "./images/GradePending.jpg";
import { convertInspectionToDate } from "./helpers";

const Card = (props) => {
  // Find the grade and set the image to match this
  let image = "";
  if (props.data.grade === "A") {
    image = A;
  } else if (props.data.grade === "B") {
    image = B;
  } else if (props.data.grade === "C") {
    image = C;
  } else {
    image = Pending;
  }
  const url = `https://maps.google.com/?ll=${props.data.latitude},${props.data.longitude}`;

  return (
    <div className="card">
      <h1>{props.data.dba}</h1>
      <img src={image} alt="grade" />
      <h3>
        {/* If there is a date, convert it to a readable string, otherwise leave this blank */}
        {props.data.grade_date
          ? convertInspectionToDate(props.data.grade_date)
          : ""}
      </h3>
      <p>
        <strong>SCORE: </strong>
        {props.data.score}
      </p>
      <ul>
        <li>{props.data.violation_description}</li>
      </ul>
      <p>
        <a href={url}>
          {props.data.building} {props.data.street} {props.data.boro}, NY{" "}
          {props.data.zipcode}
        </a>
      </p>
    </div>
  );
};

export default Card;
