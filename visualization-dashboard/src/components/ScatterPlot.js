// src/components/ScatterPlot.js

import React from 'react';
import { VictoryChart, VictoryScatter, VictoryTooltip } from 'victory';

const ScatterPlot = ({ data }) => {
  return (
    <VictoryChart
      domain={{ x: [0, 10], y: [0, 10] }} // Set the domain for x and y axes
      height={300} // Set the height of the chart
      width={400}  // Set the width of the chart
    >
      <VictoryScatter
        data={data}
        labels={({ datum }) => datum.title} // Show the title as a label on hover
        labelComponent={<VictoryTooltip />} // Use tooltips to display the title
        size={7} // Set the size of the data points
      />
      <VictoryScatter
        data={data}
        labels={({ datum }) => datum.source} // Show the title as a label on hover
        labelComponent={<VictoryTooltip />} // Use tooltips to display the title
        size={7} // Set the size of the data points
      />
    </VictoryChart>
  );
};

export default ScatterPlot;
