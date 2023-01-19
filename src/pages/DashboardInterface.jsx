import React from "react";
import { Grid } from "@mui/material";
import NavBar from "../components/NavBar";
import MainDashboard from "../components/MainDashboard";
import LeftSideDashboard from "../components/LeftSideDashboard";

const DashboardInterface = () => {
  return (
    <Grid container xs={12}>
      <NavBar />
      <MainDashboard />
      <LeftSideDashboard />
    </Grid>
  );
};

export default DashboardInterface;
