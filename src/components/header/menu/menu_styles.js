import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => ({
  menu: {
    position: "absolute",
    background: "white",
    height: "300px",
    width: "200px",
    zIndex: "500",
    border: `1px solid ${ctx.palette.primary.main}`,
  },
  menu_list: {
    listStyle: "none",
    padding: "15px",
  },
  menu_link: {
    textDecoration: "none",
    color: `${ctx.palette.primary.main}`,
    "&:hover": {
      fontSize: "20px",
    },
  },
  menu_item: {
    "&:not(:last-child)": {
      marginBottom: "20px",
    },
  },
}));
