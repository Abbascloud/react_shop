import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => ({
  appointmentButton: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  appointmentButton_buttton: {
    width: "30%",
    "@media (max-width: 750px)": {
      width: "50%",
    },
  },
  appointmentButton_text: {
    padding: "5px",
    margin: "0",
    fontSize: "40px",
    "@media (max-width: 1024px)": {
      fontSize: "15px",
    },
  },
  appointmentButton_contacts: {
    marginTop: "30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  appointmentButton_link: {
    textDecoration: "none",
    color: `${ctx.palette.primary.main}`,
    marginTop: "15px",
    fontSize: "30px",
  },
}));
