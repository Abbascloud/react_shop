import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => ({
  goodsAndPrices: {
    paddingTop: "60px",
    maxWidth: "1600px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
  },
  goodsAndPrices_header: {
    alignSelf: "center",
    marginBottom: "100px",
    fontSize: "60px",
    color: `${ctx.palette.primary.main}`,
  },
  goodsAndPrices_productCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  goodsAndPrices_img: {
    borderRadius: "50%",
    border: `4px solid ${ctx.palette.primary.main}`,
  },
  goodsAndPrices_title: {
    fontSize: "40px",
    color: `${ctx.palette.primary.main}`,
  },
  goodsAndPrices_price: {
    fontSize: "40px",
    color: `${ctx.palette.primary.main}`,
  },
}));
