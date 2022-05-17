import React from "react";
import { VictoryChart, VictoryHistogram } from "victory";

const Histogram = (props) => {
  // props.manipulateHistoData();

  return (
    <div style={{ width: "50%" }}>
      <h1>{props.boro} Data</h1>
      <VictoryChart>
        <VictoryHistogram
          style={{ data: { fill: "#c43a31" } }}
          data={props.data}
          bins={[
            0,
            5,
            10,
            15,
            20,
            25,
            30,
            35,
            40,
            45,
            50,
            55,
            60,
            65,
            70,
            75,
            80,
            85,
            90,
            95,
            100,
            105,
          ]}
        />
      </VictoryChart>
    </div>
  );
};

export default Histogram;
