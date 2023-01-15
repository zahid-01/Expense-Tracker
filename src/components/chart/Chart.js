import "../css/Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  let count = 1;
  const dataPointValues = props.data.map((el) => el.value);
  const maxValue = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.data.map((dataPoint) => (
        <ChartBar
          key={count++}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
