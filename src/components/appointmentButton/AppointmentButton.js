import { useStyles } from "./appointmentButton_styles";
import Button from "@mui/material/Button";
import { Contacts } from "../contacts";
import { useState } from "react";

export const AppointmentButton = () => {
  const styles = useStyles();

  const [isVisibleContacts, setContactsVisible] = useState(false);
  return (
    <div id="apointment" className={styles.appointmentButton}>
      <Button
        onClick={() => setContactsVisible(!isVisibleContacts)}
        className={styles.appointmentButton_buttton}
        variant="contained"
      >
        <p className={styles.appointmentButton_text}>
          Записаться <br /> на прием
        </p>
      </Button>
      {isVisibleContacts && (
        <div className={styles.appointmentButton_contacts}>
          <Contacts />
          <a className={styles.appointmentButton_link} href="tel:+79603253515">
            +79603253515
          </a>
        </div>
      )}
    </div>
  );
};
