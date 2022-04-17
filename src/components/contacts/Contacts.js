import { useStyles } from "./contacts_styles";
import CallIcon from "@mui/icons-material/Call";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
// import { vkIcon } from "../../icons/vkIcon.svg";
// import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

export const Contacts = () => {
  const styles = useStyles();
  return (
    <nav className={styles.contacts}>
      <a href="tel:+79603253515" className={styles.contacts_link}>
        <CallIcon fontSize="large" className={styles.contacts_contactsIcon} />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=+79603253515"
        className={styles.contacts_link}
      >
        <WhatsAppIcon
          fontSize="large"
          className={styles.contacts_contactsIcon}
        />
      </a>
      <a
        href="https://telegram.im/@mamedovan91"
        className={styles.contacts_link}
      >
        <TelegramIcon
          fontSize="large"
          className={styles.contacts_contactsIcon}
        />
      </a>
      <a href="mailto:mamedovan91@yandex.ru" className={styles.contacts_link}>
        <EmailIcon fontSize="large" className={styles.contacts_contactsIcon} />
      </a>
    </nav>
  );
};
