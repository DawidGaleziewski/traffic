import React, { useEffect, useState } from "react";
import "./Chart.scss";
import { Bar, Line } from "react-chartjs-2";

const mockData = [
  { regionID: "PL-DS", womenQuota: 10, menQuota: 15, adultQuota: 101 },
  { regionID: "PL-KP", womenQuota: 1, menQuota: 145, adultQuota: 104 },
  { regionID: "PL-LD", womenQuota: 11, menQuota: 125, adultQuota: 120 },
  { regionID: "PL-LU", womenQuota: 5, menQuota: 1, adultQuota: 110 },
  { regionID: "PL-LB", womenQuota: 510, menQuota: 15, adultQuota: 4410 },
  { regionID: "PL-MA", womenQuota: 20, menQuota: 154, adultQuota: 120 },
  { regionID: "PL-MZ", womenQuota: 10, menQuota: 15, adultQuota: 140 },
  { regionID: "PL-OP", womenQuota: 40, menQuota: 15, adultQuota: 1240 },
  { regionID: "PL-PK", womenQuota: 50, menQuota: 151, adultQuota: 120 },
  { regionID: "PL-PD", womenQuota: 5, menQuota: 145, adultQuota: 1240 },
  { regionID: "PL-PM", womenQuota: 2, menQuota: 15, adultQuota: 10 },
  { regionID: "PL-SL", womenQuota: 15, menQuota: 145, adultQuota: 1240 },
  { regionID: "PL-SK", womenQuota: 11, menQuota: 15, adultQuota: 1240 },
  { regionID: "PL-WN", womenQuota: 120, menQuota: 115, adultQuota: 10 },
  { regionID: "PL-WP", womenQuota: 112, menQuota: 15, adultQuota: 10 },
  { regionID: "PL-ZP", womenQuota: 101, menQuota: 15, adultQuota: 10 },
];

const Chart = ({ match }) => {
  const regionID = match.params.id;
  console.log("region data", regionID);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const data = mockData.filter((item) => item.regionID === regionID)[0];
    console.log("quota data:", data);
    setChartData({
      labels: ["female", "male", "adult"],
      datasets: [
        {
          label: `Traffic for: ${data.regionID}`,
          data: [data.womenQuota, data.menQuota, data.adultQuota],
          backgroundColor: ["#e20074", "#fff", "#cccccc"],
          borderWidth: 4,
        },
      ],
    });
  }, [regionID]);
  return (
    <section className="chart">
      <Bar
        data={chartData}
        width={100}
        height={400}
        options={{ maintainAspectRatio: false }}
      />
    </section>
  );
};

export default Chart;
