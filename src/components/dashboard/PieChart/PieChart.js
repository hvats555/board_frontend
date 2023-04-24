import React, {useEffect, useState} from 'react'
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

function PieChart() {
  let [pieData, setPieData] = useState({
    labels: ['Basic Tees', 'Custom Short Pants', 'Super Hoodies'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [55, 31, 14],
        backgroundColor: [
            '#98D89E',
            '#F6CD7D',
            '#EE8484',
          ],
      }
    ]
  });

  let getPieData = () => {
    axios.get('https://boardapi.onrender.com/pie').then((data) => {
      setPieData({
        labels: data.data.labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: data.data.datasets[0].data,
            backgroundColor: [
                '#98D89E',
                '#F6CD7D',
                '#EE8484',
              ],
          }
        ]
      });
    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    getPieData();
  }, []);

  const pie_options = {
    responsive: true,
    maintainAspectRatio : false,
    
    plugins: {
      legend: {
        position: 'right',
        labels: {
          generateLabels: (chart) => {
            const datasets = chart.data.datasets;
            return datasets[0].data.map((data, i) => ({
              text: `${chart.data.labels[i]} ${data}%`,
              fillStyle: datasets[0].backgroundColor[i],
              index: i
            }))
          },
        
            usePointStyle: true,
            color: "#000",
            padding: 30,
            font: {
              weight: 700,
              family: 'Montserrat',
            },
        },
      }
    }
}
  return (
    <Pie id="pie_chart" data={pieData} options={pie_options} />
  )
}

export default PieChart