import React from "react";

import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { LogOutAdmin } from "../actions/AdminAction";
import AllTests from "../admin/TestsAdmin";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import AllBookingsAdmin from "./AllBookings";

export const AdminScreen = () => {
  const dispatch = useDispatch();
  const admin = JSON.parse(localStorage.getItem("admin"));

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={4}>
            <a href="/">
              <Item>Home</Item>
            </a>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <a href="/admin/allbookings">
              <Item>All Bookings</Item>
            </a>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <Item>Future Bookings</Item>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <Item>Add Employees</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item>All Employees</Item>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <a href="/admin/tests">
              <Item>All Tests </Item>
            </a>
          </Grid>
          <Grid
            item
            xs={2}
            sm={4}
            md={4}
            onClick={() => {
              dispatch(LogOutAdmin());
            }}
            style={{ cursor: "cell" }}
          >
            <Item>Logout</Item>
          </Grid>
        </Grid>
      </Box>

  
    </div>
  );
};

export default AdminScreen;
