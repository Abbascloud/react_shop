import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => ({
  contacts: {
    display: "flex",
  },
  contacts_link: {
    cursor: "pointer",
    textDecoration: "none",
    "&:not(:last-child)": {
      marginRight: "30px",
    },
    "&:first-child": {
      color: `${ctx.palette.primary.main}`,
    },
    "&:nth-child(2n)": {
      color: "#43d854",
    },
    "&:nth-child(3n)": {
      color: "#4d6dfd",
    },
    "&:nth-child(4n)": {
      color: "#DE7220",
    },
  },
}));
