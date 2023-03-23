import CanvasJSReact from "./assets/canvasjs.react";

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const options = {
  theme: "dark2", // "light1", "light2", "dark1", "dark2"
  animationEnabled: true,
  exportEnabled: true,
  title: {
    text: "Pepsi company stock price in 2022",
  },
  axisX: {
    valueFormatString: "MMM",
  },
  axisY: {
    prefix: "$",
    title: "USD",
  },
  data: [
    {
      type: "candlestick",
      showInLegend: true,
      name: "Pepsi Corporation",
      yValueFormatString: "$###0.00",
      xValueFormatString: "MMMM YY",
      dataPoints: [
        { x: new Date("2022-01-01"), y: [43.61, 42.45, 41.19, 45.82] },
        { x: new Date("2022-02-01"), y: [39.82, 41.95, 38.84, 40.2] },
        { x: new Date("2022-03-01"), y: [37.82, 36.35, 37.12, 36.67] },
        { x: new Date("2022-04-01"), y: [36.19, 37.5, 35.21, 36.15] },
        { x: new Date("2022-05-01"), y: [40.32, 41.68, 41.33, 41.88] },
        { x: new Date("2022-06-01"), y: [53.31, 55.31, 53.32, 58.33] },
        { x: new Date("2022-07-01"), y: [60.32, 62.22, 61.23, 60.33] },
        { x: new Date("2022-08-01"), y: [65.99, 65.37, 65.13, 65.12] },
        { x: new Date("2022-09-01"), y: [75.22, 78.22, 77.32, 73.32] },
        { x: new Date("2022-10-01"), y: [76.12, 77.82, 76.08, 77.46] },
        { x: new Date("2022-11-01"), y: [80.12, 80.15, 78.56, 81.84] },
        { x: new Date("2022-12-01"), y: [100.01, 101.32, 99.36, 98.37] },
      ],
    },
  ],
};

function App() {
  return (
    <>
      <div className="chart-container">
        <CanvasJSChart options={options} />
      </div>
    </>
  );
}

export default App;
