import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => ({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px",
    borderBottom: `1px solid ${ctx.palette.primary.main}`,
    backgroundColor: "white",
  },
  header_logo: {
    width: "200px",
    "@media (max-width: 600px)": {
      width: "100px",
    },
    "@media (max-width: 400px)": {
      width: "80px",
    },
  },
  header_info: {
    display: "flex",
    flexDirection: "column",
    "@media (max-width: 600px)": {
      fontSize: "10px",
    },
  },
  header_infoName: {
    color: `${ctx.palette.primary.main}`,
    alignSelf: "center",
    fontFamily: "'Send Flowers', cursive",
    fontSize: "20px",
    "@media (max-width: 600px)": {
      fontSize: "15px",
    },
  },
  header_contacts: {
    "@media (max-width: 790px)": {
      display: "none",
    },
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
  header_menuIconContainer: {
    zIndex: "10000",
  },
  header_menuIconBackground: {
    zIndex: "8000",
    position: "fixed",
    height: "10000px",
    width: "100%",
  },
}));
