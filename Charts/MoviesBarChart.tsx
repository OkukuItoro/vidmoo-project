"use client";

import { useState, useEffect } from "react";
import { fetchMovies } from "@/utils/fetchData";
import { MoviesStateProps } from "@/types";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const MoviesBarChart = () => {
  const [chartData, setChartData] = useState<MoviesStateProps[]>([]);

  useEffect(() => {
    fetchMovies()
      .then(function (loadedMovies) {
        const popularData = loadedMovies.slice(0, 6);
        setChartData(popularData);
      })
      .catch((err) => console.log(err));
  }, []);

  let data = {
    labels: chartData.map((item) => item.title),
    datasets: [
      {
        label: "Most Popular movies",
        data: chartData.map((item) => item.vote_average),
        //   borderWidth: 1
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
      },
    ],
  };
  let options = {
    maintainAspectRatio: false,
    legend: {
      labels: {
        fontSize: 15,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        // indexAxis: "y",
      },
    },
  };
  return (
    <div>
      <Bar data={data} options={options} height={300} />
    </div>
  );
};

export default MoviesBarChart;
