import React from "react";
import { VictoryChart, VictoryHistogram } from "victory";

const Histogram = (props) => {
  // props.manipulateHistoData();

  return (
    <>
      <h3>Distribution of health inspection scores</h3>
      <VictoryChart>
        <VictoryHistogram
          style={{ data: { fill: "#c43a31" } }}
          data={props.data}
        />
      </VictoryChart>
    </>
  );
};

export default Histogram;
