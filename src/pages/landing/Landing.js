import { useStyles } from "./landing_styles";

export const Landing = ({ AppointmentButton, GoodsAndPrices, HomeButton }) => {
  const styles = useStyles();

  return (
    <div className={styles.landing}>
      <AppointmentButton />
      <GoodsAndPrices />
      <HomeButton />
    </div>
  );
};
