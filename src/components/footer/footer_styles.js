import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => ({
  footer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    alignItems: "center",
    borderTop: `1px solid ${ctx.palette.primary.main}`,
    "@media (max-width: 600px)": {
      flexDirection: "column",
    },
  },
  footer_link: {
    textDecoration: "none",
    color: `${ctx.palette.primary.main}`,
    "@media (max-width: 600px)": {
      marginBottom: "30px",
    },
  },
}));
