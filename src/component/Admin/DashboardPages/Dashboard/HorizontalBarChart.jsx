import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const labels = [
  "Engineer",
  "Homemaker",
  "Architect",
  "Banker",
  "Interior Designer",
  "Teacher",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1200 })),
      //   borderColor: ["#3745E2", "#C5CAFF"],
      borderRadius: 10,
      backgroundColor: ["#3745E2", "#C5CAFF"],
    },
  ],
};

export function HorizontalBarChart() {
  return (
    <Bar
      style={{ marginTop: 20 }}
      width={800}
      height={400}
      options={options}
      data={data}
    />
  );
}
