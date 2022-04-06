import { useStyles } from "./appointmentButton_styles";
import Button from "@mui/material/Button";

export const AppointmentButton = () => {
  const styles = useStyles();

  return (
    <div className={styles.appointmentButton}>
      <Button className={styles.appointmentButton_buttton} variant="contained">
        <p className={styles.appointmentButton_text}>
          Записаться <br /> на прием
        </p>
      </Button>
    </div>
  );
};
