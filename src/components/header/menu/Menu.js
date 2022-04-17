import { useStyles } from "./menu_styles";

export const Menu = (handler) => {
  const styles = useStyles();

  const closeMenu = () => {
    handler.handleMenuVisible();
  };
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu_list}>
        <li className={styles.menu_item}>
          <a
            onClick={closeMenu}
            className={styles.menu_link}
            href="#goodsAndPrices"
          >
            Услуги и ценны
          </a>
        </li>
        <li className={styles.menu_item}>
          <a
            onClick={closeMenu}
            className={styles.menu_link}
            href="#apointment"
          >
            Запись
          </a>
        </li>
        <li className={styles.menu_item}>
          <a onClick={closeMenu} className={styles.menu_link} href="#footer">
            контакты
          </a>
        </li>
        <li className={styles.menu_item}>
          <a
            onClick={closeMenu}
            className={styles.menu_link}
            href="#apointment"
          >
            Запись
          </a>
        </li>
        <li className={styles.menu_item}>
          <a
            onClick={closeMenu}
            className={styles.menu_link}
            href="#goodsAndPrices"
          >
            Услуги и ценны
          </a>
        </li>
        <li className={styles.menu_item}>
          <a
            onClick={closeMenu}
            className={styles.menu_link}
            href="#apointment"
          >
            Запись
          </a>
        </li>
      </ul>
    </nav>
  );
};
