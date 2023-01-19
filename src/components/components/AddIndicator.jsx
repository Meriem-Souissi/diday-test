import React from "react";
import { ReactComponent as AddIcon } from "../../assets/icons/add.svg";
const AddIndicator = ({ text }) => {
  return (
    <div className="add-indicator-wrapper">
      <AddIcon />
      <p className="add-indicator-text">{text}</p>
    </div>
  );
};
export default AddIndicator;
