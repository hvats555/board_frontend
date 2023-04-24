import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

import styles from './LineChart.module.scss';
import axios from 'axios';

import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);

const labels = [];
for (let i = 0; i < 12; ++i) {
  labels.push(i.toString());
}

  const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
            align: 'end',
            position: 'top',
            padding: 30,
            labels: {
              usePointStyle: true,
            },
        },

        subtitle: {
            display: true,
            text: 'May June 2021',
            color: '#858585',
            align: 'start',
            font: {
              size: 12,
              family: 'Montserrat',
              weight: '400',
            }
    },

        title: {
            align: 'start',
            display: true,
            text: 'Activities',
            color: "#000",
            font: {
                size: 18,
                family: 'Montserrat',
                weight: '700',
            },
        }
    },
      interaction: {
        intersect: false,
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true
          }
        }
      }
    };

function LineChart() {
  let [chartData, setChartData] = useState({
    labels: [],
    datasets: [
        {
          label: 'Guest',
          data: [302,342,235,471,303,0],
          borderColor: "#E9A0A0",
          backgroundColor: "#E9A0A0",
          fill: false,
          cubicInterpolationMode: 'monotone',
          tension: 0.4
        }, {
          label: 'User',
          data: [0,496,342,212,168,268],
          borderColor: "#9BDD7C",
          backgroundColor: "#9BDD7C",
          cubicInterpolationMode: 'monotone',
          fill: false,
          tension: 0.4
        }
      ]
  });

  let getChartData = () => {
    axios.get('https://boardapi.onrender.com/chart').then((data) => {
      setChartData({
        labels: data.data.labels,
        datasets: [
            {
              label: 'Guest',
              data: data.data.datasets[0].data,
              borderColor: "#E9A0A0",
              backgroundColor: "#E9A0A0",
              fill: false,
              cubicInterpolationMode: 'monotone',
              tension: 0.4
            }, {
              label: 'User',
              data: data.data.datasets[1]?.data,
              borderColor: "#9BDD7C",
              backgroundColor: "#9BDD7C",
              cubicInterpolationMode: 'monotone',
              fill: false,
              tension: 0.4
            }
          ]
      });
    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    getChartData();
  }, []);

  return (
    <div className={styles.chart}>
        <Line data={chartData} type={"line"} height={300} width={100} options={options} />
    </div>
  )
}

export default LineChart