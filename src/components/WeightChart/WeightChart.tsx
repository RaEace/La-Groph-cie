import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
} from "recharts";
import { data } from "./data";

function WeightChart() {
  return (
    <LineChart
      width={730}
      height={250}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Temps" />
      <YAxis dataKey="Poids (kg)" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="jules" stroke="#8884d8" />
      <Line type="monotone" dataKey="thibault" stroke="#82ca9d" />
    </LineChart>
  );
}

export default WeightChart;
