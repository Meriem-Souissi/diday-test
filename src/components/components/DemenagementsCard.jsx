import React from "react";

const DemenagementsCard = ({ cardData }) => {
  return (
    <div className="demenagement-card-wrapper">
      <p className="card-departure-arrival">{cardData.departure}</p>
      <div className="demenagement-card-line"></div>
      <div className="card-right-side">
        <p className="card-departure-arrival">{cardData.arrival}</p>
        <div className="card-date-time">
          <p>{cardData.date}</p>
          <p>{cardData.time}</p>
        </div>
        <p className="card-responsable">{cardData.responsable}</p>
      </div>
    </div>
  );
};

export default DemenagementsCard;
