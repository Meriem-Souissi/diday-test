import React, { useState } from "react";
import "../styles/navBar.css";
import { ReactComponent as LogoIcon } from "../assets/icons/logo.svg";
import { ReactComponent as DashboardIcon } from "../assets/icons/dashboard.svg";
import { ReactComponent as UsersIcon } from "../assets/icons/users.svg";
import { ReactComponent as GeoLocationIcon } from "../assets/icons/geolocation.svg";
import { ReactComponent as SettingIcon } from "../assets/icons/setting.svg";
import { ReactComponent as MoonIcon } from "../assets/icons/moon.svg";
import { ReactComponent as FrameIcon } from "../assets/icons/frame.svg";
import { Divider, Grid, IconButton, Switch } from "@mui/material";

const NavBar = () => {
  const navBarItems = [
    {
      icon: <DashboardIcon style={{ filter: "grayscale(100%)" }} />,
      name: "Tableau de bord"
    },
    {
      icon: <UsersIcon style={{ filter: "grayscale(100%)" }} />,
      name: "Liste de prospects"
    },
    {
      icon: <GeoLocationIcon style={{ filter: "grayscale(100%)" }} />,
      name: "Géolocalisation des prospects"
    },
    {
      icon: <SettingIcon style={{ filter: "grayscale(100%)" }} />,
      name: "Paramètres"
    }
  ];
  const [darkMode, setDarkMode] = useState(false);

  const handleChange = (event) => {
    setDarkMode(event.target.checked);
  };
  return (
    <Grid container direction="column" xs={2.4} style={{ height: "100vh" }}>
      <div className="navbar-wrapper">
        <LogoIcon />
        <div className="navbar-items-wrapper">
          {navBarItems.map((item, index) => (
            <div
              key={index}
              className="navbar-item"
              role="button"
              tabIndex={index}
            >
              <IconButton>{item.icon}</IconButton>
              <h5 className="navbar-item-name">{item.name}</h5>
            </div>
          ))}
          <Divider style={{ marginTop: 12 }} />
          <div className="dark-mode-wrapper">
            <div className="navbar-item" style={{ cursor: "context-menu" }}>
              <MoonIcon />
              <h5 className="navbar-item-name">Dark mode</h5>
            </div>
            <Switch
              checked={darkMode}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
        </div>
        <div className="frame-wrapper">
          <FrameIcon />
          <div className="frame-code">XXXXXXX</div>
        </div>
      </div>
    </Grid>
  );
};

export default NavBar;
