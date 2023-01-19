import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import { ReactComponent as ShowMoreIcon } from "../../assets/icons/show-more.svg";

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const CustomizedLegend = () => {
  const legendArray = [
    {
      color: "#B5CEFF",
      legend: "12 à traiter"
    },
    {
      color: "#FFB1B7",
      legend: "730 traités"
    },
    {
      color: "#3F7FFF",
      legend: "234 refusés"
    }
  ];
  return (
    <div className="legends-wrapper">
      {legendArray.map((item, index) => (
        <div className="legend-item" key={index}>
          <div
            style={{
              borderRadius: "50%",
              background: item.color,
              width: 5,
              height: 5
            }}
          />
          <p>{item.legend}</p>
        </div>
      ))}
    </div>
  );
};
const PieChartCard = () => {
  const dataArray = [
    { name: "730 traités", value: 45 },
    { name: "234 refusés", value: 10 },
    { name: "12 à traiter", value: 45 }
  ];
  const COLORS = ["#000000", "#3F7FFF", "#E4AC6F"];
  return (
    <div className="pie-chart-card-wrapper">
      <div className="Pie-chart-card-header">
        <h2 className="Pie-chart-card-title">Prospects</h2>
        <ShowMoreIcon />
      </div>
      <p className="pie-chart-card-date">Mars 2022</p>
      <div>
        <PieChart width={250} height={290}>
          <Pie
            isAnimationActive={false}
            data={dataArray}
            cx={"50%"}
            cy={"50%"}
            labelLine={false}
            label={renderCustomizedLabel}
            innerRadius={0}
            outerRadius={90}
            dataKey="value"
          >
            {dataArray.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend
            verticalAlign="bottom"
            iconType="circle"
            iconSize={5}
            content={<CustomizedLegend />}
          />
        </PieChart>
      </div>
    </div>
  );
};

export default PieChartCard;
