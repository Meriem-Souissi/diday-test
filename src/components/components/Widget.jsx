import React from "react";
import { LinearProgress } from "@mui/material";

const Widget = ({ widget, index }) => {
  return (
    <div className="widget-wrapper">
      <div className="widget-header">
        <h2
          className="widget-number"
          style={index === 2 ? { color: "#fff" } : {}}
        >
          {widget.number}
        </h2>
        <div>{widget.icon}</div>
      </div>

      <p className="widget-text">{widget.text}</p>
      <div className="widget-footer">
        <LinearProgress
          variant="determinate"
          value={widget.pourcentage}
          sx={{
            height: 4,
            width: 142,
            borderRadius: 10,
            background: "rgba(255,255,255, 0.5)"
            // boxShadow: "-1px -1px 2px #FFFFFF"
          }}
        />
        <p className="widget-pourcentage">{widget.pourcentage} %</p>
      </div>
    </div>
  );
};

export default Widget;
