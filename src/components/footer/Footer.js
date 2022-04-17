import { useStyles } from "./footer_styles";
import { Contacts } from "../contacts";
// import { vkIcon } from "../../icons/vkIcon.svg";
// import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

export const Footer = () => {
  const styles = useStyles();

  return (
    <footer id="footer" className={styles.footer}>
      <a className={styles.footer_link} href="tel:+79603253515">
        tel: +79603253515
      </a>
      <div className={styles.footer_link}>
        <Contacts />
      </div>

      <a href="mailto:mamedovan91@yandex.ru" className={styles.footer_link}>
        mamedovan91@yandex.ru
      </a>
    </footer>
  );
};
