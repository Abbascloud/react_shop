import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => ({
  goodsAndPrices: {
    paddingTop: "60px",
    maxWidth: "1600px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    padding: "0 120px",
    "@media (max-width: 640px)": {
      padding: "0",
    },
  },
  goodsAndPrices_header: {
    alignSelf: "center",
    marginBottom: "100px",
    fontSize: "60px",
    color: `${ctx.palette.primary.main}`,
    "@media (max-width: 660px)": {
      fontSize: "30px",
    },
  },
  goodsAndPrices_productCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    "@media (max-width: 790px)": {
      flexDirection: "column",
      borderBottom: `1px solid ${ctx.palette.primary.main}`,
    },
  },
  goodsAndPrices_img: {
    width: "200px",
    borderRadius: "50%",
    border: `4px solid ${ctx.palette.primary.main}`,
  },
  goodsAndPrices_title: {
    fontSize: "40px",
    color: `${ctx.palette.primary.main}`,
    "@media (max-width: 1024px)": {
      fontSize: "20px",
    },
  },
  goodsAndPrices_price: {
    fontSize: "40px",
    color: `${ctx.palette.primary.main}`,
    "@media (max-width: 1024px)": {
      fontSize: "20px",
    },
  },
}));
