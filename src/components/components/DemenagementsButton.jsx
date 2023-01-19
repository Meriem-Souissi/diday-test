import React from "react";
import { ReactComponent as ArrowDownIcon } from "../../assets/icons/arrow-down.svg";

const DemenagementsButton = ({ text }) => {
  return (
    <div className="demenagements-button">
      <p>{text}</p>
      <ArrowDownIcon />
    </div>
  );
};

export default DemenagementsButton;
