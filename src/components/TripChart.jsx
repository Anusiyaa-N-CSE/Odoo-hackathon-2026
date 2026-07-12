import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Trips",
      data: [20, 28, 30, 18, 40, 35, 45],
      borderColor: "#2563eb",
      backgroundColor: "#2563eb",
      tension: 0.4,
      fill: false,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Weekly Trips Overview",
    },
  },
};

function TripChart() {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "30px",
        boxShadow: "0 2px 8px rgba(0,0,0,.1)",
      }}
    >
      <Line data={data} options={options} />
    </div>
  );
}

export default TripChart;