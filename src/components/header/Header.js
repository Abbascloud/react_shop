import { useStyles } from "./header_styles";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu } from "./menu";
import { useState } from "react";
import { Contacts } from "../contacts";
import Logo from "../../img/logo/Logo.PNG";

export const Header = () => {
  const styles = useStyles();

  const [menuIsVisible, setMenuVisible] = useState(false);

  const handleMenuVisible = () => {
    setMenuVisible(!menuIsVisible);
  };

  return (
    <header id="header" className={styles.header}>
      <nav className={styles.header_menuIconContainer} id="menu">
        <MenuIcon
          onClick={handleMenuVisible}
          fontSize="large"
          className={styles.header_menuIcon}
        />
        {menuIsVisible && <Menu handleMenuVisible={handleMenuVisible} />}
      </nav>
      {menuIsVisible && (
        <div
          onClick={handleMenuVisible}
          className={styles.header_menuIconBackground}
        ></div>
      )}
      <img className={styles.header_logo} src={Logo} alt="Logo" />

      <div className={styles.header_contacts}>
        <Contacts />
      </div>

      <div className={styles.header_info}>
        <h1 className={styles.header_infoHeader}>Permanent by</h1>
        <p className={styles.header_infoName}>Anastasia Ikonnikova</p>
        <a className={styles.header_infoPhone} href="tel:+79603253515">
          +79603253515
        </a>
      </div>
    </header>
  );
};
