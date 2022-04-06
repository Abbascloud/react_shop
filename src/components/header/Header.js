import { useStyles } from "./header_styles";
import MenuIcon from "@mui/icons-material/Menu";

export const Header = () => {
  const styles = useStyles();

  return (
    <header className={styles.header}>
      <nav>
        <MenuIcon fontSize="large" className={styles.header_menuIcon} />
      </nav>
      <div className={styles.header_logo}>IKONNIKOFF</div>
      <div className={styles.header_info}>
        <h1 className={styles.header_infoHeader}>Permoment by</h1>
        <p className={styles.header_infoName}>Anastasia Ikonnikova</p>
        <a className={styles.header_infoPhone} href="tel:+79603253515">
          +79603253515
        </a>
      </div>
    </header>
  );
};
