import React from "react";
import "../styles/leftSideDashboard.css";
import { Grid } from "@mui/material";
import NatureImage from "../assets/images/nature-image.png";
import TruckImage from "../assets/images/truck.png";
import { ReactComponent as NotificationsIcon } from "../assets/icons/notifications.svg";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
import { ReactComponent as ChipIcon } from "../assets/icons/chip.svg";
import AddIndicator from "./components/AddIndicator";
import ActivityCard from "./components/ActivityCard";
import Agenda from "./components/Agenda";

const LeftSideDashboard = () => {
  const activitiesArray = [
    {
      time: "09:30",
      title: "RDV avec Philippe",
      description: "Site DiDay"
    },
    {
      time: "15:20",
      title: "RDV avec Aurelie",
      description: "Site DiDay"
    }
  ];
  return (
    <Grid container direction="column" xs={2.9} style={{ height: "100vh" }}>
      <div className="left-side-dashboard-wrapper">
        <div className="left-side-dashboard-top">
          <img src={NatureImage} alt="nature" className="nature-image" />
          <div className="icons-wrapper">
            <NotificationsIcon />
            <MenuIcon />
            <ChipIcon />
          </div>
          <h1>Déménagez avec des pro</h1>
          <img src={TruckImage} alt="truck" className="truck-image" />
        </div>
        <div className="activity-wrapper">
          <h1 className="main-title">Activité</h1>
          <div className="activity-date">
            <h5>Nov 04, 2022</h5>
          </div>
          <AddIndicator text={"Ajouter un Rappel"} />
          <Agenda />
          <div className="activities-card-container">
            {activitiesArray.map((activity, index) => (
              <ActivityCard key={index} activity={activity} />
            ))}
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default LeftSideDashboard;
