import React from "react";
import "../styles/mainDashboard.css";
import { Grid, IconButton, InputBase, Paper } from "@mui/material";
import { ReactComponent as SearchIcon } from "../assets/icons/search-icon.svg";
import { ReactComponent as SendIcon } from "../assets/icons/send.svg";
import { ReactComponent as AcountBalanceIcon } from "../assets/icons/account-balance.svg";
import { ReactComponent as TrendingUpIcon } from "../assets/icons/trending-up.svg";
import { ReactComponent as CalendarIcon } from "../assets/icons/calendar.svg";
import { ReactComponent as ArrowDownIcon } from "../assets/icons/arrow-down.svg";
import AddIndicator from "./components/AddIndicator";
import Widget from "./components/Widget";
import PieChartCard from "./components/PieChartCard";
import DemenagementsButton from "./components/DemenagementsButton";
import DemenagementsCard from "./components/DemenagementsCard";

const MainDashboard = () => {
  const widgetsArray = [
    {
      number: 10,
      icon: <SendIcon />,
      text: "Déménagements à venir",
      pourcentage: 80
    },
    {
      number: 140,
      icon: <AcountBalanceIcon />,
      text: "Nombre total de prospects",
      pourcentage: 18
    },
    {
      number: 12,
      icon: <TrendingUpIcon />,
      text: "Prospects non traités",
      pourcentage: 78
    }
  ];
  const DemenagementsButtonArray = [
    "Départ",
    "Arrivée",
    "Date du déménagement",
    "Responsable"
  ];
  const DemenagementsCardsArray = [
    {
      departure: "72 Rue du Cardinal Lemoine, 75005 Paris",
      arrival: "65 Bd de Sébastopol, 75001 Paris",
      date: "Nov 04, 2022",
      time: "09:30",
      responsable: "Jessica"
    },
    {
      departure: "72 Rue du Cardinal Lemoine, 75005 Paris",
      arrival: "65 Bd de Sébastopol, 75001 Paris",
      date: "Nov 04, 2022",
      time: "09:30",
      responsable: "Jessica"
    }
  ];
  return (
    <Grid container direction="column" xs={6.7} style={{ height: "100vh" }}>
      <div className="main-dashboard-wrapper">
        <div className="main-dashboard-header">
          <h1 className="main-title">Tableau de bord</h1>
          <Paper
            component="form"
            sx={{
              p: "5px 0px 5px 7px",
              display: "flex",
              alignItems: "center",
              width: 235,
              background: "#F0F5FE",
              borderRadius: "8px"
            }}
          >
            <IconButton type="button" aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{
                ml: 1,
                flex: 1,
                fontFamily: "Montserrat",
                fontSize: 14,
                fontWeight: 500,
                lineHeight: 17,
                color: "#979797"
              }}
              placeholder="Recherche"
            />
          </Paper>
        </div>
        <AddIndicator text={"Ajouter de nouveaux widgets"} />
        <div className="main-dashboard-content">
          <PieChartCard />
          <div>
            {widgetsArray.map((widget, index) => (
              <Widget key={index} widget={widget} index={index} />
            ))}
          </div>
        </div>
        <div className="main-dashboard-footer">
          <div className="main-dashboard-footer-header">
            <h1 className="main-title">Déménagements</h1>
            <div className="calendar-button">
              <CalendarIcon />
              <p>Mois</p>
              <ArrowDownIcon />
            </div>
          </div>
          <div className="demenagements-buttons">
            {DemenagementsButtonArray.map((el, index) => (
              <DemenagementsButton key={index} text={el} />
            ))}
          </div>
          <div className="demenagement-cards-entete">
            <p className="entete-departure">Départ</p>
            <div className="entete-line"></div>
            <div className="entete-right-side">
              <p className="entete-departure">Arrivée</p>
              <div className="entete-date-time">
                <p>Date du déménagement</p>
              </div>
              <p className="entete-responsable">Responsable</p>
            </div>
          </div>
          <div>
            {DemenagementsCardsArray.map((element, index) => (
              <DemenagementsCard key={index} cardData={element} />
            ))}
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default MainDashboard;
