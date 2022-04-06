import React from "react";
import {
  Header,
  Slider,
  AppointmentButton,
  GoodsAndPrices,
} from "./components";
import { ThemeProvider, createTheme } from "@mui/material";
import { createRoot } from "react-dom/client";
import SendFlowers from "./fonts/sendFlowers/SendFlowers.ttf";
import "./index.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#C40E46",
    },
  },
});

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
  <ThemeProvider theme={theme}>
    <Header />
    <Slider />
    <AppointmentButton />
    <GoodsAndPrices />
  </ThemeProvider>
);
