import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  plugins: {
    legend: {
      position: "right",
      labels: {
        font: {
          size: 18,
          fontFamily: "Poppins",
        },
      },
    },
  },
};

export const data = {
  labels: [
    "Floral Wallpaper",
    "Abstract Wallpaper",
    "Textures Wallpaper",
    "Wood Wallpaper",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5],
      backgroundColor: ["#1DE9B6", "#84FFFF", "#04A9F5", "#A389D4"],
      borderColor: ["#1DE9B6", "#84FFFF", "#04A9F5", "#A389D4"],
      borderWidth: 1,
    },
  ],
};

export function PieChart() {
  return (
    <Pie
      style={{ marginTop: 20 }}
      width={200}
      height={100}
      data={data}
      options={options}
    />
  );
}
