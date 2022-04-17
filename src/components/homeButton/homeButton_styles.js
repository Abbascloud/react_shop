import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => ({
  homeButton: {
    zIndex: "3000",
    right: "10px",
    bottom: "100px",
    position: "fixed",
    "@media (max-width: 600px)": {
      bottom: "10px",
    },
  },
  homeButton_link: {
    textDecoration: "none",
    color: `${ctx.palette.primary.main}`,
  },
  homeButton_icon: {
    fontSize: "100px !important",
    "@media (max-width: 750px)": {
      fontSize: "50px !important",
    },
  },
}));
