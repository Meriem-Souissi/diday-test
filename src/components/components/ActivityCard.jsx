import React from "react";

const ActivityCard = ({ activity }) => {
  return (
    <div className="activity-card-wrpper">
      <h5 className="activity-time">{activity.time}</h5>
      <div className="activity-infos">
        <h5 className="activity-title">{activity.title}</h5>
        <h6 className="activity-description">{activity.description} </h6>
      </div>
    </div>
  );
};

export default ActivityCard;
