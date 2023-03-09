import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./Donught.scss";

export const DonutChart = () => {
  const data = {
    labels: [
      "Installation on Progress",
      "Pending Installation",
      "Completed Installation",
    ],
    datasets: [
      {
        data: [234, 345, 500],
        backgroundColor: ["#000000", "#EDEFF4", "#C5CAFF"],
        // innerRadius: ["-20%", "40%", "40%"],
        radius: ['100%', '70%', '70%'],
      },
    ],
  };

  const options = {
    cutout: 110,
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
        position: "right",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          boxWidth: 15,
          fontColor: "black",
          fontSize: 14,
          padding: 20,
        },
      },
    },
  };

  return (
    <div className="donught-container">
      <div className="chart-container">
        <Doughnut data={data} options={options} />
      </div>
      <div className="legend-container">
        {data.labels.map((label, index) => (
          <div key={index} className="legend-item">
            <span className="legend-text">{label}</span>
            <div className="legend-btm-vlu">
              <span
                className="legend-symbol"
                style={{
                  backgroundColor: data.datasets[0].backgroundColor[index],
                }}
              ></span>

              <span className="legend-value">
                {data.datasets[0].data[index]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
