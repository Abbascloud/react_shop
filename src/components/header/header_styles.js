import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => ({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px",
    borderBottom: `1px solid ${ctx.palette.primary.main}`,
  },
  header_logo: {
    color: `${ctx.palette.primary.main}`,
    fontSize: "40px",
  },
  header_info: {
    display: "flex",
    flexDirection: "column",
  },
  header_infoName: {
    color: `${ctx.palette.primary.main}`,
    alignSelf: "center",
    fontFamily: "'Send Flowers', cursive",
    fontSize: "20px",
  },
  header_infoHeader: {
    color: `${ctx.palette.primary.main}`,
    fontFamily: "'Send Flowers', cursive",
    margin: "0 100px 0 0",
  },
  header_infoPhone: {
    textDecoration: "none",
    color: `${ctx.palette.primary.main}`,

    alignSelf: "flex-end",
    marginRight: "20px",
  },
  header_menuIcon: {
    color: `${ctx.palette.primary.main}`,
    cursor: "pointer",
  },
}));
