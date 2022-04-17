import React from "react";
import {
  Header,
  Slider,
  AppointmentButton,
  GoodsAndPrices,
  Footer,
  HomeButton,
} from "./components";
import { ThemeProvider, createTheme } from "@mui/material";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Landing } from "./pages";

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
    <Landing
      AppointmentButton={AppointmentButton}
      GoodsAndPrices={GoodsAndPrices}
      HomeButton={HomeButton}
    />
    <Footer />
  </ThemeProvider>
);
