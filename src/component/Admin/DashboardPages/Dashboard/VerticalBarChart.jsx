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
import "./VerticalBar.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        borderColor: 'transparent',
        borderWidth: 1,
        drawBorder: false,
        drawTicks: true,
        tickLength: 0,
        color: 'rgba(0,0,0,0)',
      },
      ticks: {
        font: {
          size: 14,
        },
      },
    },
    y: {
      grid: {
        borderColor: 'transparent',
        borderWidth: 1,
        drawBorder: false,
        drawTicks: true,
        tickLength: 0,
        color: 'rgba(0,0,0,0)',
      },
      ticks: {
        stepSize: 5000,
        callback: function (value, index, values) {
          return value / 1000 + "k";
        },
        font: {
          size: 14,
        },
      },
    },
  },
  elements: {
    bar: {
      borderRadius: 8,
      borderWidth: 0,
    },
  },
  // add some padding to the bottom of the chart area
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
  },
};

const labels = ["Jan", "Feb", "March", "Apr", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 20000 })),
      backgroundColor: ["#C5CAFF", "#4150F3"],
    },
  ],
};

export function VerticalBarChart() {
  return <Bar width={400} height={200} options={options} data={data} />;
}
